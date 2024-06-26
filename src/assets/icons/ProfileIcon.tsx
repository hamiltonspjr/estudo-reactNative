import React from 'react';

import {Path, Svg} from 'react-native-svg';

import {IconBase} from '@components';

export function ProfileIcon({size = 20, color = 'black'}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 21 20" fill="none">
      <Path
        d="M10.5 0C4.704 0 0 4.48 0 10C0 15.52 4.704 20 10.5 20C16.296 20 21 15.52 21 10C21 4.48 16.296 0 10.5 0ZM10.5 3C12.243 3 13.65 4.34 13.65 6C13.65 7.66 12.243 9 10.5 9C8.757 9 7.35 7.66 7.35 6C7.35 4.34 8.757 3 10.5 3ZM10.5 17.2C7.875 17.2 5.5545 15.92 4.2 13.98C4.2315 11.99 8.4 10.9 10.5 10.9C12.5895 10.9 16.7685 11.99 16.8 13.98C15.4455 15.92 13.125 17.2 10.5 17.2Z"
        fill={color}
      />
    </Svg>
  );
}
