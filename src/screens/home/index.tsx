import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from 'src/navigation/types';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type Props = { navigation: NavigationProp };

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Button mode="contained" onPress={() => navigation.navigate('Id')}>
        ipfs.id()
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate('Ls')}>
        ipfs.ls()
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate('Add')}>
        ipfs.add()
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate('Get')}>
        ipfs.get()
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate('Cat')}>
        ipfs.cat()
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate('Pubsub')}>
        ipfs.pubsub
      </Button>
    </View>
  );
};

export default HomeScreen;
