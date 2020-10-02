import React, { useEffect, useMemo, useState } from 'react';
import { FiUsers, FiTag, FiGift } from 'react-icons/fi';

import { differenceInYears } from 'date-fns/esm';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import Header from '../layout/Header';
import { Container, Overview, Birthdays } from './styles';
import Card from './Card';
import CardBirth from './CardBirth';
import api from '../../services/api';

interface CountSchedules {
  id: string;
  dentistName: string;
  countSchedules: number;
}

interface IDashboardInfo {
  countClients: number;
  schedules: CountSchedules[];
}

interface IBirthday {
  id: string;
  name: string;
  phone: string;
  birth: string;
  city: string;
  age: number;
}

const Dashboard: React.FC = () => {
  const [dashboardInfo, setDashboardInfo] = useState<IDashboardInfo>();
  const [birthdays, setBirthdays] = useState<IBirthday[]>([]);

  useEffect(() => {
    const loadDashboardInfo = async () => {
      const response = await api.get<IDashboardInfo>('/dashboard/info');
      const { data } = response;

      setDashboardInfo(data);
    };

    const loadBirthdays = async () => {
      const response = await api.get<IBirthday[]>('/clients/birthdays');
      const formattedBirthdays = response.data.map(birth => {
        return {
          ...birth,
          age: differenceInYears(new Date(), new Date(birth.birth)),
        };
      });

      setBirthdays(formattedBirthdays);
    };

    loadDashboardInfo();
    loadBirthdays();
  }, []);

  const formattedToday = useMemo(() => {
    const today = new Date();
    return format(today, "' Dia' dd 'de' MMMM", { locale: ptBR });
  }, []);

  return (
    <>
      <Header />
      <Container>
        {dashboardInfo && (
          <Overview>
            <h3>Visão Geral</h3>

            <div className="content">
              <Card icon={FiUsers} title="Pacientes cadastrados">
                {dashboardInfo.countClients}
              </Card>
              {dashboardInfo.schedules.map(schedule => (
                <Card
                  key={schedule.id}
                  icon={FiTag}
                  title="Agendamentos marcados"
                  label={schedule.dentistName}
                >
                  {schedule.countSchedules}
                </Card>
              ))}
            </div>
          </Overview>
        )}

        <Birthdays>
          <div className="label">
            <h3>Aniversariantes do dia</h3>
            <span>
              Hoje
              <span>{formattedToday}</span>
            </span>
          </div>

          <div className="content">
            {birthdays.length === 0 && (
              <span>Não há aniversariantes no dia de hoje</span>
            )}

            {birthdays.map(birth => (
              <CardBirth key={birth.id} icon={FiGift} label={birth.city}>
                {birth.name}
              </CardBirth>
            ))}
          </div>
        </Birthdays>
      </Container>
    </>
  );
};

export default Dashboard;
