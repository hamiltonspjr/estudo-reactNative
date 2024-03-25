import React from 'react';
import {Screen, Icon, Text, Button} from '@components';
import {RootStackParamList} from '@routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export function SuccessScreen({navigation, route}: ScreenProps) {
  function goBackToBegin() {
    navigation.goBack();
  }

  return (
    <Screen>
      <Icon {...route.params.icon} />
      <Text preset="headingLarge" black mt="s24">
        {route.params.title}
      </Text>
      <Text preset="paragraphSmall" mt="s8">
        {route.params.message}
      </Text>
      <Button title="Voltar ao início" mt="s48" onPress={goBackToBegin} />
    </Screen>
  );
}
