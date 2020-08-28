import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../layout/Header';

import { Container, ContainerHeader } from './styles';

const List: React.FC = () => {
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
              <th>Idade</th>
              <th>Cidade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Paulo Vitor Correia Lima</td>
              <td>27</td>
              <td>Carnaubal</td>
            </tr>
            <tr>
              <td>Paulo Vitor Correia Lima</td>
              <td>27</td>
              <td>Carnaubal</td>
            </tr>
            <tr>
              <td>Paulo Vitor Correia Lima</td>
              <td>27</td>
              <td>Carnaubal</td>
            </tr>
            <tr>
              <td>Paulo Vitor Correia Lima</td>
              <td>27</td>
              <td>Carnaubal</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </>
  );
};

export default List;
