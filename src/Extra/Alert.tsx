import {View, Text, Button, AlertDialog, YStack, XStack} from 'tamagui';
import React, {useState} from 'react';

interface Props {
  updateParentState: (state: boolean) => void;
}

const Alert: React.FC<Props> = ({updateParentState}) => {
  const handleToggle = () => {
    updateParentState(false);
  };
  return (
    <View
      backgroundColor={'rgba(0,0,0,0.7)'}
      flex={1}
      alignItems="center"
      justifyContent="center">
      <AlertDialog defaultOpen>
        <AlertDialog.Content
          bordered
          elevate
          key="content"
          animation={[
            'quick',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{x: 0, y: -20, opacity: 0, scale: 0.9}}
          exitStyle={{x: 0, y: 10, opacity: 0, scale: 0.95}}
          x={0}
          scale={1}
          opacity={1}
          y={0}>
          <YStack space>
            <AlertDialog.Title fontSize={'$8'}>Login Failed</AlertDialog.Title>
            <AlertDialog.Description>
              By pressing yes, you accept our terms and conditions.
            </AlertDialog.Description>

            <XStack space="$3" justifyContent="flex-end">
              <AlertDialog.Action asChild>
                <Button
                  width={'$10'}
                  backgroundColor={'$purple9'}
                  onPress={handleToggle}
                  theme="active">
                  <Text fontSize={'$5'} color={'white'} fontWeight={'bold'}>
                    Retry
                  </Text>
                </Button>
              </AlertDialog.Action>
            </XStack>
          </YStack>
        </AlertDialog.Content>
      </AlertDialog>
    </View>
  );
};

export default Alert;
