/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import 'react';

// Augment the global JSX namespace for Three.js elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
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
      [elemName: string]: any;
    }
  }
}
