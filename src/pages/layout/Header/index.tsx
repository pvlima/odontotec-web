import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import imgLogoSlim from '../../../assets/logo-slim.svg';

import { Container, Content, Welcome, Menu, City } from './styles';

const Header: React.FC = () => {
  const { location } = useHistory();

  return (
    <Container>
      <Content>
        <img src={imgLogoSlim} alt="Logo" />

        <Welcome>
          <span>Bem-vindo,</span>
          <strong>Joeder Aguiar</strong>
        </Welcome>

        <Menu>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">Início</Link>
          </li>
          <li className={location.pathname === '/atendimentos' ? 'active' : ''}>
            <Link to="/atendimentos">Atendimentos</Link>
          </li>
          <li className={location.pathname === '/pacientes' ? 'active' : ''}>
            <Link to="/pacientes">Pacientes</Link>
          </li>
          <li className={location.pathname === '/usuarios' ? 'active' : ''}>
            <Link to="/usuarios">Usuários</Link>
          </li>
        </Menu>

        <City>
          <option value="saobenedito">São Benedito</option>
          <option value="carnaubal">Carnaubal</option>
          <option value="guaraciaba">Guaraciaba</option>
        </City>
      </Content>
    </Container>
  );
};

export default Header;
