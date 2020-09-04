import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { differenceInYears } from 'date-fns';

import Header from '../../layout/Header';

import { Container, ContainerHeader } from './styles';
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
  const [clients, setClients] = useState<IClientData[]>([]);

  useEffect(() => {
    const loadClients = async () => {
      const response = await api.get<IClientData[]>('/clients', {
        headers: {
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTkyMjkxNDIsImV4cCI6MTU5OTMxNTU0Miwic3ViIjoiYWYzZDVhM2QtYTM2My00NTVhLTg5ZTMtN2UzMTg2ZjI4YjA5In0.3YzO5L23yc4oZXnmv0x162CjOtqwbA4nPnA10ilUtV8',
        },
      });

      const data = response.data.map(item => ({
        ...item,
        age: item.birth && differenceInYears(new Date(), new Date(item.birth)),
      }));

      setClients(data);
    };

    loadClients();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <ContainerHeader>
          <h3>Todos os pacientes</h3>
          <Link to="/atendimentos/novo">Novo paciente</Link>
        </ContainerHeader>

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
            {clients.map(client => (
              <tr key={client.id}>
                <td>{client.name}</td>
                <td>{client.phone}</td>
                <td>{client.age ? client.age : '--'}</td>
                <td>{client.city ? client.city : '--'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </>
  );
};

export default List;
