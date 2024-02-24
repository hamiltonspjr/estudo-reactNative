import {createTheme} from '@shopify/restyle';

const palette = {
  greenPrimary: '#0F9974',
  greenLight: '#1CE5D5',
  grayWhite: '#FFFFFF',
  grayBlack: '#000000',
  redError: '#E62E27',
  gray1: '#EAE9E9',
  gray2: '#908F8F',
  gray3: '#8E8E8E',
};

export const theme = createTheme({
  colors: {
    ...palette,
    primary: palette.greenPrimary,
    primaryContrast: palette.grayWhite,
    background: palette.grayWhite,
    backgroundContrast: palette.grayBlack,
    error: palette.redError,
    sucess: palette.greenLight,
  },
  spacing: {
    s4: 4,
    s8: 8,
    s12: 12,
    s16: 16,
    s24: 24,
    s32: 32,
    s40: 40,
    s48: 48,
    s56: 56,
  },
  borderRadii: {
    s2: 2,
    s6: 6,
  },
  textVariants: {
    defaults: {},
  },
});

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
