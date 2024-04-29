import React from 'react';

import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function HomeScreen({}: AppTabScreenProps<'HomeScreen'>) {
  return (
    <Screen>
      <Text>HomeScreen</Text>
    </Screen>
  );
}
