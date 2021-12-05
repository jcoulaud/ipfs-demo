import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { inspect } from 'util';

import { useIpfs } from '../../ipfs-http-client';

const IdScreen = () => {
  const { client } = useIpfs();

  const id = async () => {
    try {
      console.log('Demo App .id start');
      console.log('Demo App .id', { result: inspect(await client.id()) });
    } catch (error) {
      console.error('Demo App .id', { error });
    }
  };

  return (
    <View>
      <Button mode="contained" onPress={id}>
        Press me
      </Button>
    </View>
  );
};

export default IdScreen;
