import React from 'react';

import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function SearchScreen({}: AppTabScreenProps<'SearchScreen'>) {
  return (
    <Screen>
      <Text>SearchScreen</Text>
    </Screen>
  );
}
