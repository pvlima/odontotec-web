import React from 'react';
import { FiClock } from 'react-icons/fi';

import {
  Container,
  ContainerHeader,
  Content,
  Appointments,
  NextAppointment,
  Schedule,
  Calendar,
} from './styles';
import Header from '../layout/Header';

const Schedules: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <ContainerHeader>
          <div>
            <h3>Horários agendados</h3>
            <span>Hoje | dia 06 de agosto | segunda</span>
          </div>
          <a href="/">Novo agendamento</a>
        </ContainerHeader>

        <Content>
          <Appointments>
            <h4>Atendimento a seguir</h4>
            <NextAppointment>
              <p>
                <strong>Paulo Vitor Correia Lima</strong>
                <span>Manutenção do Aparelho</span>
              </p>
              <div>
                <FiClock size={20} />
                <span>08:30</span>
              </div>
            </NextAppointment>

            <h4 className="morning">Manhã</h4>
            <Schedule>
              <span>
                <FiClock size={20} />
                09:00
              </span>
              <div>
                <strong>Carlos Augusto de Sousa</strong>
                <span>Canal do dente 47</span>
              </div>
            </Schedule>

            <Schedule>
              <span>
                <FiClock size={20} />
                10:00
              </span>
              <div>
                <strong>Geovana Sales</strong>
                <span>Extração do dente siso</span>
              </div>
            </Schedule>

            <Schedule>
              <span>
                <FiClock size={20} />
                11:00
              </span>
              <div>
                <strong>Patrik Alves Correia</strong>
                <span>Restauração de 3 dentes</span>
              </div>
            </Schedule>

            <h4 className="afternoon">Tarde</h4>

            <Schedule>
              <span>
                <FiClock size={20} />
                14:00
              </span>
              <div>
                <strong>Natan Cavalcante</strong>
                <span>Manutenção do aparelho</span>
              </div>
            </Schedule>

            <Schedule>
              <span>
                <FiClock size={20} />
                15:30
              </span>
              <div>
                <strong>Jonas Morais de Almeida</strong>
                <span>Canal do dente 39</span>
              </div>
            </Schedule>

            <Schedule>
              <span>
                <FiClock size={20} />
                16:15
              </span>
              <div>
                <strong>Miguel Victor</strong>
                <span>Clareamento dentário</span>
              </div>
            </Schedule>
          </Appointments>
          <Calendar>Aqui é o calendário</Calendar>
        </Content>
      </Container>
    </>
  );
};

export default Schedules;
