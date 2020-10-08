import { useField } from '@unform/core';
import React, { InputHTMLAttributes, useEffect, useRef } from 'react';

import { Container } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  type: 'checkbox' | 'radio';
  name: string;
  options: {
    id: string;
    value?: string;
  }[];
}

const InputCheck: React.FC<Props> = ({ type, name, options, ...rest }) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const { fieldName, registerField, defaultValue = [] } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      getValue: (refs: HTMLInputElement[]): any => {
        const checkedRefs = refs
          .filter(ref => ref?.checked || false)
          .map(ref => ref?.value || undefined);

        if (type === 'radio') {
          return checkedRefs[0];
        }
        return checkedRefs;
      },
      clearValue: (refs: HTMLInputElement[]) => {
        refs.forEach(ref => {
          ref.checked = false;
        });
      },
      setValue: (refs: HTMLInputElement[], values: string[]) => {
        refs.forEach(ref => {
          if (values.includes(ref.id)) {
            ref.checked = true;
          }
        });
      },
    });
  }, [defaultValue, fieldName, registerField, type]);
  return (
    <div>
      {options.map((option, index) => (
        <Container key={option.id}>
          <input
            defaultChecked={defaultValue.find((dv: string) => dv === option.id)}
            ref={ref => {
              inputRefs.current[index] = ref as HTMLInputElement;
            }}
            value={option.id}
            type={type}
            id={option.id}
            name={type === 'radio' ? name : undefined}
            {...rest}
          />
          <label htmlFor={option.id}>{option.value}</label>
        </Container>
      ))}
    </div>
  );
};
export default InputCheck;
