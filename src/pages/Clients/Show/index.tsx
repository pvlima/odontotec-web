import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import {
  FiChevronLeft,
  FiFile,
  FiFileText,
  FiGift,
  FiMail,
  FiMap,
  FiMapPin,
  FiPhone,
  FiTrash,
  FiUser,
} from 'react-icons/fi';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import api from '../../../services/api';

import Header from '../../layout/Header';

import { Container } from './styles';
import getValidationErrors from '../../../utils/getValidationErrors';
import deleteEmptyFieldsOfObject from '../../../utils/deleteEmptyFieldsOfObject';
import { useToast } from '../../../hooks/toast';
import { useApi } from '../../../hooks/api';

interface RouteParams {
  id: string;
}

interface ClientData {
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

const Show: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const [client, setClient] = useState<ClientData>();
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);
  const { setStatus } = useApi();

  const { addToast } = useToast();

  useEffect(() => {
    const loadClient = async () => {
      const response = await api.get(`clients/${id}`);
      setClient(response.data);
    };

    loadClient();
  }, [id]);

  const handleDeleteClient = useCallback(async () => {
    try {
      const msg =
        'Tem certeza que deseja excluir este paciente? Todas as informações serão perdidas permanentemente';
      // eslint-disable-next-line no-restricted-globals
      if (confirm(msg)) {
        await api.delete(`clients/${id}`);

        addToast({
          type: 'success',
          title: 'Paciente deletado com sucesso!',
          description: `Todos os dados foram removidos permanentemente`,
        });

        history.push('/pacientes');
      }
    } catch (err) {
      setStatus(err.response.status);
    }
  }, [id, history, setStatus, addToast]);

  const handleSubmit = useCallback(
    async (data: ClientData) => {
      try {
        const handledData = deleteEmptyFieldsOfObject(data);

        const schema = Yup.object().shape({
          name: Yup.string().required(),
          phone: Yup.string().required(),
          email: Yup.string().email(),
          birth: Yup.date(),
        });

        await schema.validate(handledData, { abortEarly: false });

        await api.put(`clients/${id}`, handledData);

        addToast({
          type: 'success',
          title: 'Usuário alterado com sucesso!',
          description: `O paciente ${data.name} teve os dados alterados`,
        });

        history.push('/pacientes');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          formRef.current?.setErrors(getValidationErrors(err));
        } else {
          addToast({
            type: 'error',
            title: 'Erro ao tentar atualizar o usuário',
            description: 'Não foi possivel',
          });
        }
      }
    },
    [addToast, history, id],
  );

  return (
    <>
      <Header />
      <Container>
        <div>
          <button
            className="goBack"
            type="button"
            onClick={() => history.goBack()}
          >
            <FiChevronLeft size={20} />
            Voltar
          </button>
          <h3>Informações do paciente</h3>
          <button className="delete" type="button" onClick={handleDeleteClient}>
            <FiTrash size={20} />
          </button>
        </div>

        <Form ref={formRef} initialData={client} onSubmit={handleSubmit}>
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
          <Input name="rg" icon={FiFile} placeholder="RG" />
          <Input name="cpf" icon={FiFileText} placeholder="CPF" />
          <Input
            name="birth"
            type="date"
            icon={FiGift}
            placeholder="Aniversário"
          />
          <Input name="address" icon={FiMapPin} placeholder="Endereço" />
          <Input name="city" icon={FiMap} placeholder="Cidade" />

          <Button type="submit">Salvar</Button>
        </Form>
      </Container>
    </>
  );
};

export default Show;
