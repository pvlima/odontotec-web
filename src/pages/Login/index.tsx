import React from 'react';
import { FiMail, FiLock } from 'react-icons/fi';

import imgLogo from '../../assets/logo.svg';

import { Container, Content } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={imgLogo} alt="Logo" />

        <form>
          <h3>Faça seu login</h3>

          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            type="password"
            icon={FiLock}
            placeholder="Senha"
          />

          <Button>Entrar</Button>
        </form>
      </Content>
    </Container>
  );
};

export default Login;
