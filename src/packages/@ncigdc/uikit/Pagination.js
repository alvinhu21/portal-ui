// @flow

import React from 'react';
import _ from 'lodash';
import { css } from 'glamor';
import { lifecycle, compose } from 'recompose';
import { withTheme } from '@ncigdc/theme';
import ButtonGroup from './ButtonGroup';
import { Row } from './Flex';
import Sizes from './Sizes';

const withPagination = (props = {}) => Wrapper =>
  class extends React.Component {
    state = {
      first: props.first || 10,
      offset: props.offset || 0,
    };

    setPagination = payload => this.setState(payload);

    render() {
      return (
        <Wrapper
          {...this.props}
          {...this.state}
          setPagination={this.setPagination}
        />
      );
    }
  };

const styles = {
  topRow: theme => ({
    alignItems: 'center',
    padding: '1rem',
    borderTop: `1px solid ${theme.greyScale5}`,
  }),
  tableActionButtons: theme =>
    css({
      outline: 'none',
      width: '30px',
      height: '30px',
      padding: '0.6rem',
      backgroundColor: 'white',
      fontSize: '10px',
      color: theme.greyScale1,
      border: `1px solid ${theme.greyScale4}`,
      '.inactive': {
        ':hover': {
          backgroundColor: theme.greyScale6,
        },
      },
      '.active': {
        backgroundColor: theme.secondaryHighContrast,
        color: 'white',
      },
    }),
};

const PaginationHeader = props =>
  <span>
    <span>Showing </span>
    <strong>
      <span>{1 + (props.offset || 0)}</span>
      <span style={{ margin: '0 0.5rem' }}>-</span>
      <span>{props.offset + props.first}</span>
    </strong>
    <span> of</span>
    <strong> {props.total.toLocaleString()}</strong>
    <span style={{ marginLeft: '0.5rem' }}>{props.entityType}</span>
  </span>;

export const PaginationBtn = withTheme(
  ({ className, children, theme, active = false, ...props }) =>
    <button
      className={`
      ${styles.tableActionButtons(theme)}
      ${className || (active ? 'active' : 'inactive')}
    `}
      {...props}
    >
      {children}
    </button>,
);

const PaginationControls = withTheme(props => {
  const currentPage = props.offset / props.first + 1;
  const totalPages = props.total / props.first;
  const pageOffset = 10 * Math.floor((currentPage - 1) / 10);

  return (
    <Row style={{ justifyContent: 'space-between', width: '100%' }}>
      <Row style={{ alignItems: 'center' }}>
        <span style={{ marginRight: '1rem' }}>Show</span>
        <Sizes
          first={props.first}
          onChange={first => props.setPagination({ first })}
        />
        <span style={{ marginLeft: '1rem' }}>entries</span>
      </Row>
      <ButtonGroup>
        <PaginationBtn onClick={() => props.setPagination({ offset: 0 })}>
          {'<<'}
        </PaginationBtn>
        <PaginationBtn
          onClick={() =>
            props.setPagination({
              offset: Math.max(0, props.offset - props.first),
            })}
        >
          {'<'}
        </PaginationBtn>
        {_.range(1 + pageOffset, Math.min(11 + pageOffset, totalPages)).map(x =>
          <PaginationBtn
            key={x}
            className={currentPage === x ? 'active' : 'inactive'}
            onClick={() =>
              props.setPagination({ offset: (x - 1) * props.first })}
          >
            {x}
          </PaginationBtn>,
        )}
        <PaginationBtn
          onClick={() =>
            props.setPagination({ offset: props.offset + props.first })}
        >
          {'>'}
        </PaginationBtn>
        <PaginationBtn
          onClick={() =>
            props.setPagination({
              offset: (props.total - props.total) % props.size,
            })}
        >
          {'>>'}
        </PaginationBtn>
      </ButtonGroup>
    </Row>
  );
});

const PaginationContainer = compose(
  withPagination(),
  withTheme,
  lifecycle({
    componentWillReceiveProps(next) {
      if (
        (this.props.offset !== next.offset ||
          this.props.first !== next.first) &&
        this.props.onChange
      ) {
        this.props.onChange(next);
      }
    },
  }),
)(props =>
  <span>
    <Row style={{ padding: '0 1rem' }}>
      <PaginationHeader {...props} />
    </Row>
    {props.children}
    <Row style={styles.topRow(props.theme)}>
      <PaginationControls {...props} />
    </Row>
  </span>,
);

export {
  withPagination,
  PaginationHeader,
  PaginationControls,
  PaginationContainer,
};
