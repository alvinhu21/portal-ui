/* @flow */

import React from 'react';
import { LocationSubscriber } from 'react-router/locationBroadcast';
import InternalLink from './InternalLink';

import type { TLinkProps } from './types';

const mergeQuery = () => ({});
const diffQuery = () => ({});

const InternalLinkWithContext = ({ pathname, query, merge, diff, ...rest }: TLinkProps) => (
  <LocationSubscriber>{
    contextLocation => {
      const pn = pathname || contextLocation.pathname;

      const q = (merge || diff)
        ? merge
          ? mergeQuery()
          : diffQuery()
        : query;

      return (
        <InternalLink
          pathname={pn}
          query={q}
          {...rest}
        />
      );
    }
  }</LocationSubscriber>
);

export default InternalLinkWithContext;