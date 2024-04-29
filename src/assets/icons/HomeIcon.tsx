import React from 'react';

import {Path, Svg} from 'react-native-svg';

import {IconBase} from '@components';

export function HomeIcon({size = 20, color = 'black'}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 23 20" fill="none">
      <Path
        d="M8.99724 18.7992V12.795H13.9972V18.7992C13.9972 19.4596 14.5597 20 15.2472 20H18.9972C19.6847 20 20.2472 19.4596 20.2472 18.7992V10.3933H22.3721C22.9471 10.3933 23.2221 9.7088 22.7846 9.34854L12.3347 0.306214C11.8597 -0.102071 11.1347 -0.102071 10.6597 0.306214L0.209813 9.34854C-0.215183 9.7088 0.0473145 10.3933 0.62231 10.3933H2.74729V18.7992C2.74729 19.4596 3.30979 20 3.99728 20H7.74725C8.43475 20 8.99724 19.4596 8.99724 18.7992Z"
        fill={color}
      />
    </Svg>
  );
}
