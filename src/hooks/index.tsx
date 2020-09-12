import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { ApiProvider } from './api';

const AppProvider: React.FC = ({ children }) => (
  <ToastProvider>
    <AuthProvider>
      <ApiProvider>{children}</ApiProvider>
    </AuthProvider>
  </ToastProvider>
);

export default AppProvider;
