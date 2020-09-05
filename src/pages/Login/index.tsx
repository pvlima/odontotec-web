import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

import imgLogo from '../../assets/logo.svg';

import { Container, Content } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';

interface SignInFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { signIn } = useAuth();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      await signIn(data);
      history.push('/dashboard');
    },
    [signIn, history],
  );

  return (
    <Container>
      <Content>
        <img src={imgLogo} alt="Logo" />

        <Form onSubmit={handleSubmit}>
          <h3>Faça seu login</h3>

          <Input name="email" type="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            type="password"
            icon={FiLock}
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>

          <a href="/">Esqueci minha senha</a>
        </Form>
      </Content>
    </Container>
  );
};

export default Login;
