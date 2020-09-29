import React, { useCallback, useState, useMemo, useEffect } from 'react';
import { FiClock } from 'react-icons/fi';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import { isToday, format, isAfter } from 'date-fns';
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
import api from '../../../services/api';

interface ISchedule {
  id: string;
  date: Date;
  formattedHour: string;
  procedure: string;
  client: {
    name: string;
    phone: string;
  };
}

const Schedules: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [schedules, setSchedules] = useState<ISchedule[]>([]);

  useEffect(() => {
    const loadSchedules = async () => {
      const parsedDate = format(selectedDay, 'yyyy-MM-dd');
      const response = await api.get<ISchedule[]>('/schedules', {
        params: { date: parsedDate },
      });

      const data = response.data.map(item => {
        const scheduleDate = new Date(item.date);

        return {
          ...item,
          date: new Date(item.date),
          formattedHour: format(scheduleDate, 'HH:mm'),
        };
      });

      setSchedules(data);
    };

    loadSchedules();
  }, [selectedDay]);

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available && !modifiers.disabled) {
      setSelectedDay(day);
    }
  }, []);

  const selectedDayAsObject = useMemo(() => {
    const today = isToday(selectedDay);
    const date = format(selectedDay, "'dia' dd 'de' MMMM", { locale: ptBR });
    const dayOfWeek = format(selectedDay, 'cccc', { locale: ptBR });
    return { today, date, dayOfWeek };
  }, [selectedDay]);

  const morningSchedules = useMemo(() => {
    return schedules.filter(schedule => {
      return schedule.date.getHours() < 12;
    });
  }, [schedules]);

  const afternoonSchedules = useMemo(() => {
    return schedules.filter(schedule => {
      return schedule.date.getHours() >= 12;
    });
  }, [schedules]);

  const nextSchedule = useMemo(() => {
    return schedules.find(schedule => {
      return isAfter(schedule.date, new Date());
    });
  }, [schedules]);

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
          <Calendar>
            <DayPicker
              weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
              fromMonth={new Date()}
              disabledDays={[{ daysOfWeek: [0] }]}
              modifiers={{
                available: { daysOfWeek: [1, 2, 3, 4, 5, 6] },
              }}
              onDayClick={handleDateChange}
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

          <Appointments>
            {selectedDayAsObject.today && nextSchedule && (
              <>
                <h4>Atendimento a seguir</h4>
                <NextAppointment>
                  <p>
                    <strong>{nextSchedule.client.name}</strong>
                    <span>{nextSchedule.procedure}</span>
                  </p>
                  <div>
                    <FiClock size={20} />
                    <span>{nextSchedule.formattedHour}</span>
                  </div>
                </NextAppointment>
              </>
            )}

            <h4 className="morning">Manhã</h4>
            {morningSchedules.map(schedule => (
              <Schedule>
                <span>
                  <FiClock size={20} />
                  {schedule.formattedHour}
                </span>
                <div>
                  <strong>{schedule.client.name}</strong>
                  {schedule.procedure && <span>{schedule.procedure}</span>}
                </div>
              </Schedule>
            ))}

            <h4 className="afternoon">Tarde</h4>
            {afternoonSchedules.map(schedule => (
              <Schedule>
                <span>
                  <FiClock size={20} />
                  {schedule.formattedHour}
                </span>
                <div>
                  <strong>{schedule.client.name}</strong>
                  {schedule.procedure && <span>{schedule.procedure}</span>}
                </div>
              </Schedule>
            ))}
          </Appointments>
        </Content>
      </Container>
    </>
  );
};

export default Schedules;
