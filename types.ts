/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}
