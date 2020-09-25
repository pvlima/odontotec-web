import { useField } from '@unform/core';
import React, { SelectHTMLAttributes, useEffect, useRef } from 'react';

import { Container } from './styles';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: {
    value: string;
    label: string;
  }[];
}

const SelectForm: React.FC<Props> = ({ name, label, options, ...rest }) => {
  const selectRef = useRef<HTMLSelectElement>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return (
    <Container>
      <label htmlFor={name}>
        <span>{label}</span>
        <select
          ref={selectRef}
          name={name}
          defaultValue={defaultValue}
          {...rest}
        >
          <option value="">Selecione</option>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      {error && <div>{error}</div>}
    </Container>
  );
};

export default SelectForm;
