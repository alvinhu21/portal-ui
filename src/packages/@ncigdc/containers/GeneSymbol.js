// @flow
import React from 'react';
import Relay from 'react-relay/classic';
import { lifecycle, compose, mapProps } from 'recompose';
import { isEqual, get } from 'lodash';

import { makeFilter } from '@ncigdc/utils/filters';
import { geneMap } from '@ncigdc/utils/validateIds';

const setRelayFilters = ({ geneId, relay, symbol }) => {
  const variables = {
    geneIdFilters: makeFilter([
      {
        field: 'genes.gene_id',
        value: [geneId],
      },
    ]),
    fetchGeneSymbols: !!geneId && !symbol,
  };
  relay.setVariables(variables);
};

const GeneSymbolComponent = compose(
  mapProps(props => {
    return {
      ...props,
      symbol:
        get(geneMap, `${props.geneId}.symbol`) ||
          get(props.explore.genes.hits, 'edges[0].node.symbol'),
    };
  }),
  lifecycle({
    componentDidMount(): void {
      setRelayFilters(this.props);
    },
    componentWillReceiveProps(nextProps: any): void {
      if (!isEqual(this.props.filters, nextProps.filters)) {
        setRelayFilters(nextProps);
      }
    },
  }),
)(
  ({ explore, symbol, geneId }) =>
    symbol || explore.genes.hits
      ? <span>
          {symbol || geneId}
        </span>
      : <span style={{ width: '45px' }}>&nbsp;</span>,
);

export const GeneSymbolQuery = {
  initialVariables: {
    geneIdFilters: null,
    fetchGeneSymbols: false,
  },
  fragments: {
    explore: () => Relay.QL`
      fragment on Explore {
        genes {
          blah: hits(first: 0) { total }
          hits(filters: $geneIdFilters first: 1) @include(if: $fetchGeneSymbols) {
            edges {
              node {
                symbol
              }
            }
          }
        }
      }
    `,
  },
};

const GeneSymbol = Relay.createContainer(GeneSymbolComponent, GeneSymbolQuery);

export default GeneSymbol;
