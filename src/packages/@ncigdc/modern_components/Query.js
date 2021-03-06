// @flow
import React from 'react';
import { QueryRenderer } from 'react-relay';
import environment from '@ncigdc/modern_components/environment';
import { ConnectedLoader } from '@ncigdc/uikit/Loaders/Loader';

const lastRelayProps = {};

export default (props: Object) =>
  <div style={{ position: 'relative', minHeight: props.minHeight }}>
    <QueryRenderer
      environment={environment}
      render={({ props: nextRelayProps, error }) => {
        // TODO: handle error

        lastRelayProps[props.name] =
          nextRelayProps || lastRelayProps[props.name];

        if (lastRelayProps[props.name])
          return (
            <props.Component
              {...lastRelayProps[props.name]}
              {...props.parentProps}
              parentVariables={{
                ...props.parentProps.parentVariables,
                ...props.parentProps.variables,
                ...props.parentVariables,
              }}
            />
          );
        return null;
      }}
      {...props}
    />
    <ConnectedLoader name={props.name} />
  </div>;
