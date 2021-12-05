import React, { createContext, ReactNode, useContext, useState } from 'react';
import createIpfsHttpClient from 'ipfs-http-client';

import { HTTP_CLIENT_URL } from './config';

const IpfsHttpClientContext = createContext(null);

interface Props {
  children: ReactNode;
}

const Provider = ({ children }: Props) => {
  const [client] = useState(createIpfsHttpClient(HTTP_CLIENT_URL));

  return (
    <IpfsHttpClientContext.Provider value={{ client }}>
      {children}
    </IpfsHttpClientContext.Provider>
  );
};

const useIpfs = () => useContext(IpfsHttpClientContext);

export { Provider, useIpfs };
