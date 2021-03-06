// @flow

import React from 'react';
import { connect } from 'react-redux';
import { compose, withState, mapProps, setDisplayName } from 'recompose';
import urlJoin from 'url-join';

import download from '@ncigdc/utils/download';
import Button from '@ncigdc/uikit/Button';
import DownloadIcon from '@ncigdc/theme/icons/Download';
import Spinner from '@ncigdc/theme/icons/Spinner';
import Hidden from '@ncigdc/components/Hidden';
import { AUTH_API } from '@ncigdc/utils/constants';

type TDownloadButton = {
  endpoint: string,
  active: boolean,
  disabled: boolean,
  filename: string,
  dataExportExpands: Array<string>,
  setActive: () => {},
  activeText: string,
  inactiveText: string,
  returnType: string,
  size: number,
  format: string,
  fields: Array<string>,
  filters: Object,
  altMessage: boolean,
  style: Object,
  extraParams: Object,
  setParentState: () => {},
  showIcon?: boolean,
};

const DownloadButton = ({
  endpoint,
  disabled = false,
  filename,
  dataExportExpands,
  activeText,
  inactiveText,
  returnType,
  size = 10000,
  format = 'JSON',
  fields = [],
  filters = {},
  active,
  setActive,
  altMessage = false,
  style = {},
  extraParams = {},
  showIcon = true,
  ...props
}: TDownloadButton) => {
  const text = active ? activeText : inactiveText;
  const icon =
    showIcon && (active ? <Spinner key="icon" /> : <DownloadIcon key="icon" />);

  return (
    <Button
      className={props.className || 'test-download-button'}
      style={{
        ...style,
      }}
      leftIcon={text && icon}
      disabled={disabled || active}
      onClick={() => {
        const params = {
          size,
          attachment: true,
          format,
          fields: fields.join(),
          filters,
          expand: dataExportExpands ? dataExportExpands.join() : undefined,
          pretty: true,
          ...(returnType ? { return_type: returnType } : {}),
          ...(filename ? { filename } : {}),
          ...extraParams,
        };

        setActive(true);

        download({
          params,
          url: urlJoin(AUTH_API, endpoint),
          method: 'POST',
          altMessage,
        })(() => {}, () => setActive(false));
      }}
    >
      {text || [icon, <Hidden key="hidden">download</Hidden>]}
    </Button>
  );
};

const enhance = compose(
  setDisplayName('DownloadButton'),
  connect(),
  withState('state', 'setState', {
    active: false,
  }),
  mapProps(({ setParentState, state, setState, active, ...rest }) => ({
    setActive: setParentState
      ? setParentState
      : active => setState(s => ({ ...s, active })),
    active: active ? active : state.active,
    ...rest,
  })),
);

export default enhance(DownloadButton);
