import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import {
  FiUser,
  FiPhone,
  FiMail,
  FiFileText,
  FiGift,
  FiMapPin,
  FiMap,
  FiChevronLeft,
} from 'react-icons/fi';

import { Container } from './styles';

import Header from '../../layout/Header';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { useToast } from '../../../hooks/toast';
import api from '../../../services/api';
import getValidationErrors from '../../../utils/getValidationErrors';
import deleteEmptyFieldsOfObject from '../../../utils/deleteEmptyFieldsOfObject';

interface CreateClientData {
  name: string;
  phone: string;
  alias?: string;
  email?: string;
  rg?: string;
  cpf?: number;
  birth?: Date;
  address?: string;
  city?: string;
}

const Create: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: CreateClientData) => {
      try {
        const handledData = deleteEmptyFieldsOfObject(data);
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required(),
          phone: Yup.string().required(),
          email: Yup.string().email(),
          rg: Yup.string().nullable(),
          cpf: Yup.string(),
          birth: Yup.date().notRequired(),
          address: Yup.string(),
          city: Yup.string(),
        });

        await schema.validate(handledData, {
          abortEarly: false,
        });

        await api.post('clients', handledData);

        addToast({
          type: 'success',
          title: 'Usuário cadastrado com sucesso!',
          description: `${data.name} agora é um paciente`,
        });

        history.push('/pacientes');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          formRef.current?.setErrors(getValidationErrors(err));
        } else {
          addToast({
            type: 'error',
            title: 'Não foi possível adicionar usuário',
            description: `Erro ao cadastrar usuário. Tente novamente mais tarde`,
          });
        }
      }
    },
    [addToast, history],
  );

  return (
    <>
      <Header />
      <Container>
        <div>
          <button type="button" onClick={() => history.goBack()}>
            <FiChevronLeft size={20} />
            Voltar
          </button>
          <h3>Cadastrar novo paciente</h3>
        </div>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="name"
            icon={FiUser}
            placeholder="Nome completo (Obrigatório)"
          />
          <Input
            name="phone"
            icon={FiPhone}
            placeholder="Telefone (Obrigatório)"
          />
          <Input name="email" type="email" icon={FiMail} placeholder="E-mail" />
          <Input name="rg" icon={FiMail} placeholder="RG" />
          <Input name="cpf" icon={FiFileText} placeholder="CPF" />
          <Input
            name="birth"
            type="date"
            icon={FiGift}
            placeholder="Aniversário"
          />
          <Input name="address" icon={FiMapPin} placeholder="Endereço" />
          <Input name="city" icon={FiMap} placeholder="Cidade" />

          <Button type="submit">Cadastrar</Button>
        </Form>
      </Container>
    </>
  );
};

export default Create;
