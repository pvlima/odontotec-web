import React, { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import imgLogo from '../../assets/logo.svg';

import { Container, Content } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';

interface SignInFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string().required('E-mail obrigatório'),
          password: Yup.string().min(6, 'No mínimo 6 caracteres'),
        });

        await schema.validate(data, { abortEarly: false });

        await signIn(data);
        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          formRef.current?.setErrors(getValidationErrors(err));
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Verifique se seu email e senha estão corretos',
        });
      }
    },
    [signIn, history, addToast],
  );

  return (
    <Container>
      <Content>
        <img src={imgLogo} alt="Logo" />

        <Form ref={formRef} onSubmit={handleSubmit}>
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
