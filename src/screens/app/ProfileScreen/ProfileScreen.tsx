import React from 'react';

import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function ProfileScreen({}: AppTabScreenProps<'ProfileScreen'>) {
  return (
    <Screen>
      <Text>Tela de perfil do usuário</Text>
    </Screen>
  );
}
