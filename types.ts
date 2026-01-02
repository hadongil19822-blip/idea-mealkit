
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import 'react';

declare module 'react' {
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
