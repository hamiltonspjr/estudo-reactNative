import React from 'react';

import {Path, Svg} from 'react-native-svg';

import {IconBase} from '../../components/Icon/Icon';

export function CheckRoundIcon({size = 40, color = 'white'}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <Path
        d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM14.58 28.58L7.4 21.4C6.62 20.62 6.62 19.36 7.4 18.58C8.18 17.8 9.44 17.8 10.22 18.58L16 24.34L29.76 10.58C30.54 9.8 31.8 9.8 32.58 10.58C33.36 11.36 33.36 12.62 32.58 13.4L17.4 28.58C16.64 29.36 15.36 29.36 14.58 28.58Z"
        fill={color}
      />
    </Svg>
  );
}
