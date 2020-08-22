import React from 'react';

import imgLogoSlim from '../../../assets/logo-slim.svg';

import { Container, Content, Welcome, Menu, City } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={imgLogoSlim} alt="Logo" />

        <Welcome>
          <span>Bem-vindo,</span>
          <strong>Joeder Aguiar</strong>
        </Welcome>

        <Menu>
          <li className="active">
            <a href="/">Início</a>
          </li>
          <li>
            <a href="/">Atendimentos</a>
          </li>
          <li>
            <a href="/">Pacientes</a>
          </li>
          <li>
            <a href="/">Usuários</a>
          </li>
        </Menu>

        <City>
          <option value="saobenedito">São Benedito</option>
          <option value="saobenedito">Carnaubal</option>
          <option value="saobenedito">Guaraciaba</option>
        </City>
      </Content>
    </Container>
  );
};

export default Header;
