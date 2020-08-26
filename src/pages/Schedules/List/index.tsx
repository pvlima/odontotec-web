import React, { useCallback, useState, useMemo } from 'react';
import { FiClock } from 'react-icons/fi';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import { isToday, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Link } from 'react-router-dom';
import {
  Container,
  ContainerHeader,
  Content,
  Appointments,
  NextAppointment,
  Schedule,
  Calendar,
} from './styles';
import Header from '../../layout/Header';

const Schedules: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available && !modifiers.disabled) {
      setSelectedDay(day);
    }
  }, []);

  const handleMonthChange = useCallback((month: Date) => {
    setCurrentMonth(month);
  }, []);

  const selectedDayAsObject = useMemo(() => {
    const today = isToday(selectedDay);
    const date = format(selectedDay, "'dia' dd 'de' MMMM", { locale: ptBR });
    const dayOfWeek = format(selectedDay, 'cccc', { locale: ptBR });
    return { today, date, dayOfWeek };
  }, [selectedDay]);

  return (
    <>
      <Header />
      <Container>
        <ContainerHeader>
          <div>
            <h3>Horários agendados</h3>
            <p>
              {selectedDayAsObject.today && <span>hoje</span>}
              <span>{selectedDayAsObject.date}</span>
              <span>{selectedDayAsObject.dayOfWeek}</span>
            </p>
          </div>
          <Link to="/atendimentos/novo">Novo agendamento</Link>
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

          <Calendar>
            <DayPicker
              weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
              fromMonth={new Date()}
              disabledDays={[{ daysOfWeek: [0] }]}
              modifiers={{
                available: { daysOfWeek: [1, 2, 3, 4, 5, 6] },
              }}
              onDayClick={handleDateChange}
              onMonthChange={handleMonthChange}
              selectedDays={selectedDay}
              months={[
                'Janeiro',
                'Fevereiro',
                'Março',
                'Abril',
                'Maio',
                'Junho',
                'Julho',
                'Agosto',
                'Setembro',
                'Outubro',
                'Novembro',
                'Dezembro',
              ]}
            />
          </Calendar>
        </Content>
      </Container>
    </>
  );
};

export default Schedules;
