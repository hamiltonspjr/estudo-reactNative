import React from 'react';
import {Pressable} from 'react-native';

import {ThemeColors} from '@theme';

import {ArrowLeftIcon} from '../../assets/icons/ArrowLeftIcon';
import {CheckRoundIcon} from '../../assets/icons/CheckRoundIcon';
import {EmailIcon} from '../../assets/icons/EmailIcon';
import {EyeOffIcon} from '../../assets/icons/EyeOffIcon';
import {EyeOnIcon} from '../../assets/icons/EyeOnIcon';
import {HomeIcon} from '../../assets/icons/HomeIcon';
import {MessageIcon} from '../../assets/icons/MessageIcon';
import {ProfileIcon} from '../../assets/icons/ProfileIcon';
import {QueriesIcon} from '../../assets/icons/QueriesIcon';
import {SearchIcon} from '../../assets/icons/SearchIcon';
import {useAppTheme} from '../../hooks/useAppTheme';

export interface IconBase {
  size?: number;
  color?: string;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  size?: number;
  onPress?: () => void;
}

export function Icon({
  name,
  color = 'backgroundContrast',
  size,
  onPress,
}: IconProps) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  if (onPress) {
    return (
      <Pressable hitSlop={10} onPress={onPress}>
        <SVGIcon color={colors[color]} size={size} />
      </Pressable>
    );
  }

  return <SVGIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
  checkRound: CheckRoundIcon,
  email: EmailIcon,
  arrowLeft: ArrowLeftIcon,
  eyeOff: EyeOffIcon,
  eyeOn: EyeOnIcon,
  message: MessageIcon,
  home: HomeIcon,
  search: SearchIcon,
  queries: QueriesIcon,
  profile: ProfileIcon,
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;
