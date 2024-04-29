import React from 'react';

import {Path, Svg} from 'react-native-svg';

import {IconBase} from '@components';

export function QueriesIcon({size = 20, color = 'black'}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M18 4H14V2C14 0.9 13.1 0 12 0H8C6.9 0 6 0.9 6 2V4H2C0.9 4 0 4.9 0 6V18C0 19.1 0.9 20 2 20H18C19.1 20 20 19.1 20 18V6C20 4.9 19.1 4 18 4ZM8 2H12V4H8V2ZM13 13H11V15C11 15.55 10.55 16 10 16C9.45 16 9 15.55 9 15V13H7C6.45 13 6 12.55 6 12C6 11.45 6.45 11 7 11H9V9C9 8.45 9.45 8 10 8C10.55 8 11 8.45 11 9V11H13C13.55 11 14 11.45 14 12C14 12.55 13.55 13 13 13Z"
        fill={color}
      />
    </Svg>
  );
}
