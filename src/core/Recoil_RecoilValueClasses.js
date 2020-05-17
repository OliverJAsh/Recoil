/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+perf_viz
 * @flow strict-local
 * @format
 */

'use strict';

import type {NodeKey} from './Recoil_State';

// eslint-disable-next-line no-unused-vars
class AbstractRecoilValue<+T> {
  key: NodeKey;
  constructor(newKey: NodeKey) {
    this.key = newKey;
  }
}

class RecoilState<T> extends AbstractRecoilValue<T> {}

class RecoilValueReadOnly<+T> extends AbstractRecoilValue<T> {}

export type RecoilValue<T> = RecoilValueReadOnly<T> | RecoilState<T>;

module.exports = {
  AbstractRecoilValue,
  RecoilState,
  RecoilValueReadOnly,
};