import React from 'react';
import { FiUsers, FiTag, FiGift } from 'react-icons/fi';

import Header from '../layout/Header';
import { Container, Overview, Birthdays } from './styles';
import Card from './Card';
import CardBirth from './CardBirth';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Overview>
          <h3>Visão Geral</h3>

          <div className="content">
            <Card icon={FiUsers} title="Pacientes cadastrados">
              248
            </Card>
            <Card icon={FiTag} title="Agendamentos marcados" label="Dr. Joeder">
              43
            </Card>
            <Card icon={FiTag} title="Agendamentos marcados" label="Dra. Karla">
              29
            </Card>
          </div>
        </Overview>

        <Birthdays>
          <div className="label">
            <h3>Aniversariantes do dia</h3>
            <span>Hoje | Dia 21 de agosto | segunda</span>
          </div>

          <div className="content">
            <CardBirth icon={FiGift} label="Sítio Faveira">
              Paulo Vitor Correia Lima
            </CardBirth>

            <CardBirth icon={FiGift} label="Bairro Castelo">
              Ana Clara de Oliveira
            </CardBirth>

            <CardBirth icon={FiGift} label="Sítio Pedra de Coco">
              Maria Cecília alves
            </CardBirth>

            <CardBirth icon={FiGift} label="Sítio Faveira">
              Pedro Henrique Correia
            </CardBirth>

            <CardBirth icon={FiGift} label="Centro">
              José Luiz Silva
            </CardBirth>
          </div>
        </Birthdays>
      </Container>
    </>
  );
};

export default Dashboard;
