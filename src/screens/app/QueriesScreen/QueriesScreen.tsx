import React from 'react';

import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function QueriesScreen({}: AppTabScreenProps<'QueriesScreen'>) {
  return (
    <Screen>
      <Text>Tela com histórico de consultas</Text>
    </Screen>
  );
}
