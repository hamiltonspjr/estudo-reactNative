import {ThemeColors} from '../../theme/theme';
import {TouchableOpacityBoxProps} from '../Box/Box';
import {ButtonPresets} from './Button';

interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: ThemeColors;
}

export const buttonPresets: Record<
  ButtonPresets,
  {
    default: ButtonUI;
    disabled: ButtonUI;
  }
> = {
  primary: {
    default: {
      container: {
        backgroundColor: 'primary',
      },
      content: 'grayWhite',
    },
    disabled: {
      container: {
        backgroundColor: 'gray1',
      },
      content: 'gray2',
    },
  },
  outline: {
    default: {
      container: {
        borderColor: 'primary',
        borderWidth: 1,
      },
      content: 'primary',
    },
    disabled: {
      container: {
        borderColor: 'gray1',
        borderWidth: 1,
      },
      content: 'gray2',
    },
  },
};
