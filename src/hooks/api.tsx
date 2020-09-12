import React, { createContext, useContext, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { AxiosInstance } from 'axios';
import api from '../services/api';
import { useToast } from './toast';
import { useAuth } from './auth';

interface ContextData {
  api: AxiosInstance;
  setStatus(status: number): void;
}

const ApiContext = createContext<ContextData>({} as ContextData);

const ApiProvider: React.FC = ({ children }) => {
  const history = useHistory();

  const { addToast } = useToast();
  const { signOut } = useAuth();

  const [code, setCode] = useState<number>(200);

  const setStatus = useCallback(
    (status: number) => {
      setCode(status);

      if (code === 401) {
        addToast({
          type: 'error',
          title: 'Sua sessão expirou',
          description: 'Você deve fazer login novamente',
        });

        signOut();

        history.push('/');
      }

      if (code === 500) {
        addToast({
          type: 'error',
          title: 'Erro Inesperado',
          description:
            'Ocorreu um erro ao carregar esta página. Tente novamente mais tarde',
        });
      }
    },
    [code, addToast, signOut, history],
  );

  return (
    <ApiContext.Provider value={{ api, setStatus }}>
      {children}
    </ApiContext.Provider>
  );
};

function useApi(): ContextData {
  const context = useContext(ApiContext);

  if (!context) {
    throw new Error('useApi must be used within an ApiProvider');
  }

  return context;
}

export { ApiProvider, useApi };
