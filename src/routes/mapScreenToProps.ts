import {IconProps} from '@components';

import {AppTabParamList} from './AppTabNavigator';

export const mapScreenToProps: Record<
  keyof AppTabParamList,
  {
    label: string;
    icon: {
      focused: IconProps['name'];
      unfocused: IconProps['name'];
    };
  }
> = {
  HomeScreen: {
    label: 'Início',
    icon: {
      focused: 'home',
      unfocused: 'home',
    },
  },
  SearchScreen: {
    label: 'Pesquisa',
    icon: {
      focused: 'search',
      unfocused: 'search',
    },
  },
  QueriesScreen: {
    label: 'Consultas',
    icon: {
      focused: 'queries',
      unfocused: 'queries',
    },
  },
  ProfileScreen: {
    label: 'Perfil',
    icon: {
      focused: 'profile',
      unfocused: 'profile',
    },
  },
};
