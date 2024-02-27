import React from 'react';
import {Box, TouchableOpacityBox} from '../../Box/Box';
import {Icon} from '../../Icon/Icon';
import {Text} from '../../Text/Text';

interface Props {
  canGoBack?: boolean;
  title?: string;
}

const ICON_SIZE = 20;

export function ScreenHeader({canGoBack, title}: Props) {
  return (
    <Box
      flexDirection="row"
      mb="s24"
      alignItems="center"
      justifyContent="space-between">
      {canGoBack && (
        <TouchableOpacityBox flexDirection="row" alignItems="center">
          <Icon size={ICON_SIZE} name="arrowLeft" color="primary" />
          {!title && (
            <Text preset="paragraphLarge" ml="s8">
              Voltar
            </Text>
          )}
        </TouchableOpacityBox>
      )}
      {title && <Text preset="headingSmall">{title}</Text>}
      {title && <Box width={ICON_SIZE} />}
    </Box>
  );
}
