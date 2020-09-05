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
import api from '../../../services/api';
import Input from '../../../components/Input';

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

  useEffect(() => {
    const loadClients = async () => {
      const response = await api.get<IClientData[]>('/clients');

      setClients(response.data);
    };

    loadClients();
  }, []);

  const handleSearchClients = useCallback(async () => {
    const searchValue = inputSearchRef.current?.value;

    if (!searchValue) return;

    const response = await api.get<IClientData[]>('/clients', {
      params: {
        name: searchValue,
      },
    });

    setClients(response.data);
  }, []);

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
          <Link to="/atendimentos/novo">Novo paciente</Link>
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
                  <td className="text-nowrap">{client.name}</td>
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
