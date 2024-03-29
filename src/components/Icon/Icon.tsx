import React from 'react';
import {CheckRoundIcon} from '../../assets/icons/CheckRoundIcon';
import {EmailIcon} from '../../assets/icons/EmailIcon';
import {ThemeColors} from '@theme';
import {useAppTheme} from '../../hooks/useAppTheme';
import {Pressable} from 'react-native';
import {ArrowLeftIcon} from '../../assets/icons/ArrowLeftIcon';
import {EyeOffIcon} from '../../assets/icons/EyeOffIcon';
import {EyeOnIcon} from '../../assets/icons/EyeOnIcon';
import {MessageIcon} from '../../assets/icons/MessageIcon';

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
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;
