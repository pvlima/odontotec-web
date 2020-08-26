import React from 'react';

import { FiSearch, FiCalendar, FiClock } from 'react-icons/fi';
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

const Create: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <h3>Novo agendamento</h3>

        <Content>
          <LeftSide>
            <label htmlFor="provider">
              <span>Selecione quem vai atender</span>
              <select id="provider">
                <option value="">Selecione</option>
                <option value="joeder">Dr Joeder</option>
                <option value="karla">Dra Karla</option>
              </select>
            </label>

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
            <label htmlFor="search-clients">
              <span>Buscar pacientes</span>
              <Input
                icon={FiSearch}
                name="search-clients"
                placeholder="Buscar pacientes"
              />
            </label>

            <ListUsers>
              <span>Paciente:</span>
              <User>
                <input type="checkbox" id="user_id" />
                <label htmlFor="user_id">Paulo Vitor Correia Lima</label>
              </User>
              <User>
                <input type="checkbox" id="user_id" />
                <label htmlFor="user_id">Paulo Vitor Correia Lima</label>
              </User>
              <User>
                <input type="checkbox" id="user_id" />
                <label htmlFor="user_id">Paulo Vitor Correia Lima</label>
              </User>
              <User>
                <input type="checkbox" id="user_id" />
                <label htmlFor="user_id">Paulo Vitor Correia Lima</label>
              </User>
              <User>
                <input type="checkbox" id="user_id" />
                <label htmlFor="user_id">Paulo Vitor Correia Lima</label>
              </User>
              <User>
                <input type="checkbox" id="user_id" />
                <label htmlFor="user_id">Paulo Vitor Correia Lima</label>
              </User>
              <User>
                <input type="checkbox" id="user_id" />
                <label htmlFor="user_id">Paulo Vitor Correia Lima</label>
              </User>
              <User>
                <input type="checkbox" id="user_id" />
                <label htmlFor="user_id">Paulo Vitor Correia Lima</label>
              </User>
            </ListUsers>

            <Button>Marcar agendamento</Button>
          </RightSide>
        </Content>
      </Container>
    </>
  );
};

export default Create;
