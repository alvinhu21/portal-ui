/* @flow */

import JSURL from 'jsurl';

import type {
  TIsEmptyArray,
  TIsEmptyObject,
  TRemoveEmptyKeys,
  TParseFilterParam,
  TParseJSURLParam,
  TParseIntParam,
} from './types';

export const isEmptyArray: TIsEmptyArray = x =>
  !!(x && (Array.isArray(x) && x.length === 0));

export const isEmptyObject: TIsEmptyObject = x =>
  !!(x && typeof x === 'object' && Object.keys(x).length === 0);

export const removeEmptyKeys: TRemoveEmptyKeys = q =>
  Object.keys(q).reduce((acc, k) => {
    const v = q[k];

    return !v || isEmptyArray(v) || isEmptyObject(v) ? acc : { ...acc, [k]: v };
  }, {});

export const parseIntParam: TParseIntParam = (str, defaults) =>
  str ? Math.max(parseInt(str, 10), 0) : defaults;

export const parseJSURLParam: TParseJSURLParam = (str, defaults) =>
  str ? JSURL.parse(str) : defaults;

export const parseFilterParam: TParseFilterParam = parseJSURLParam;
