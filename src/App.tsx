import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

import { Provider as IpfsProvider } from './ipfs-http-client';
import Navigation from './navigation';

const App = () => (
  <IpfsProvider>
    <PaperProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </PaperProvider>
  </IpfsProvider>
);

export default App;
