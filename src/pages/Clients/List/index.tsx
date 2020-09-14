import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from 'react';
import { Link } from 'react-router-dom';
import { differenceInYears } from 'date-fns';

import { FiSearch } from 'react-icons/fi';
import Header from '../../layout/Header';

import { Container, ContainerHeader, SearchClient } from './styles';
import { useToast } from '../../../hooks/toast';
import { useApi } from '../../../hooks/api';
import api from '../../../services/api';

interface IClientData {
  id: string;
  name: string;
  phone: string;
  birth: Date;
  city?: string;
  age?: number;
}

const List: React.FC = () => {
  const inputSearchRef = useRef<HTMLInputElement>(null);
  const [clients, setClients] = useState<IClientData[]>([]);
  const { addToast } = useToast();
  const { setStatus } = useApi();

  useEffect(() => {
    const loadClients = async () => {
      try {
        const response = await api.get<IClientData[]>('/clients');

        setClients(response.data);
      } catch (err) {
        setStatus(err.response.status);
      }
    };

    loadClients();
  }, [setStatus]);

  const handleSearchClients = useCallback(async () => {
    try {
      const searchValue = inputSearchRef.current?.value;

      if (!searchValue) return;

      const response = await api.get<IClientData[]>('/clients', {
        params: {
          name: searchValue,
        },
      });

      setClients(response.data);
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Erro ao buscar os pacientes',
        description: 'Tente novamente mais tarde',
      });
    }
  }, [addToast]);

  const clientsHandled = useMemo(() => {
    return clients.map(client => ({
      ...client,
      age:
        client.birth && differenceInYears(new Date(), new Date(client.birth)),
    }));
  }, [clients]);

  return (
    <>
      <Header />
      <Container>
        <ContainerHeader>
          <h3>Todos os pacientes</h3>
          <Link to="/pacientes/novo">Novo paciente</Link>
        </ContainerHeader>

        <SearchClient>
          <input ref={inputSearchRef} placeholder="Buscar pacientes" />
          <button type="button" onClick={handleSearchClients}>
            <FiSearch />
          </button>
        </SearchClient>

        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Telefone</th>
                <th>Idade</th>
                <th>Cidade</th>
              </tr>
            </thead>
            <tbody>
              {clientsHandled.map(client => (
                <tr key={client.id}>
                  <td className="text-nowrap">
                    <Link to={`pacientes/${client.id}`}>{client.name}</Link>
                  </td>
                  <td>{client.phone}</td>
                  <td>{client.age ? client.age : '--'}</td>
                  <td>{client.city ? client.city : '--'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </>
  );
};

export default List;
