
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

// Fix: Removed problematic declare module 'react' block which was causing "module not found" errors.
// Augmenting global JSX namespace is sufficient for defining custom intrinsic elements.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
      mesh: any;
      group: any;
      meshStandardMaterial: any;
      meshPhysicalMaterial: any;
      meshBasicMaterial: any;
      pointLight: any;
      spotLight: any;
      ambientLight: any;
      sphereGeometry: any;
      boxGeometry: any;
      planeGeometry: any;
      cylinderGeometry: any;
      bufferGeometry: any;
      bufferAttribute: any;
      points: any;
      fog: any;
      color: any;
      primitive: any;
      directionalLight: any;
    }
  }
}
