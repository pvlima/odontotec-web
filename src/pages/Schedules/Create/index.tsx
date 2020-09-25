import React, { useCallback, useMemo, useRef, useState } from 'react';

import { FiCalendar, FiClock } from 'react-icons/fi';
import { Form } from '@unform/web';
import Header from '../../layout/Header';

import {
  Container,
  Content,
  LeftSide,
  RightSide,
  ListUsers,
  User,
} from './styles';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import InputCheck from '../../../components/InputCheck';
import InputSearch from '../../../components/InputSearch';
import api from '../../../services/api';
import { useToast } from '../../../hooks/toast';
import SelectForm from '../../../components/SelectForm';

interface IClientData {
  id: string;
  name: string;
  phone: string;
  birth: Date;
  city?: string;
  age?: number;
}

const Create: React.FC = () => {
  const inputSearchRef = useRef<HTMLInputElement>(null);
  const [clients, setClients] = useState<IClientData[]>([]);
  const { addToast } = useToast();

  const handleSubmit = useCallback(data => {
    console.log(data);
  }, []);

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

  const formattedClients = useMemo(() => {
    return clients.map(client => {
      return { id: client.id, value: client.name };
    });
  }, [clients]);

  return (
    <>
      <Header />
      <Container>
        <h3>Novo agendamento</h3>

        <Form onSubmit={handleSubmit}>
          <Content>
            <LeftSide>
              <SelectForm
                name="provider"
                label="Selecione quem vai atender"
                options={[
                  { value: 'joeder', label: 'Dr Joeder' },
                  { value: 'karla', label: 'Dra Karla' },
                ]}
              />

              <label htmlFor="date">
                <span>Data do agendamento</span>
                <Input
                  icon={FiCalendar}
                  id="date"
                  name="date"
                  type="date"
                  placeholder="Data"
                />
              </label>

              <label htmlFor="time">
                <span>Horário</span>
                <Input
                  icon={FiClock}
                  id="time"
                  name="time"
                  type="time"
                  placeholder="Horário"
                />
              </label>
            </LeftSide>
            <RightSide>
              <InputSearch
                ref={inputSearchRef}
                onSearch={handleSearchClients}
                placeholder="Buscar pacientes"
              />

              <ListUsers>
                <span>Paciente:</span>
                <User>
                  <InputCheck
                    type="radio"
                    name="user_id"
                    options={formattedClients}
                  />
                </User>
              </ListUsers>

              <Button type="submit">Marcar agendamento</Button>
            </RightSide>
          </Content>
        </Form>
      </Container>
    </>
  );
};

export default Create;
