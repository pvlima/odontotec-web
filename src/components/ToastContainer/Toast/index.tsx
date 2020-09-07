import React, { useEffect } from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';

import { Container } from './styles';
import { ToastMessage, useToast } from '../../../hooks/toast';

interface ToastProps {
  message: ToastMessage;
  // eslint-disable-next-line @typescript-eslint/ban-types
  style: object;
}

const icons = {
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
  info: <FiInfo size={24} />,
};

const Toast: React.FC<ToastProps> = ({ message, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const time = setTimeout(() => {
      removeToast(message.id);
    }, 5000);

    return () => {
      clearTimeout(time);
    };
  }, [removeToast, message.id]);

  return (
    <Container type={message.type} style={style}>
      {icons[message.type]}

      <div>
        <strong>{message.title}</strong>
        <p>{message.description}</p>
      </div>

      <button type="button" onClick={() => removeToast(message.id)}>
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
