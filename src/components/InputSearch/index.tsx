import React, { forwardRef, InputHTMLAttributes } from 'react';
import { FiSearch } from 'react-icons/fi';

import { Container } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  onSearch(): Promise<void>;
}

const InputSearch: React.ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { onSearch, ...rest },
  ref,
) => {
  return (
    <Container>
      <input ref={ref} {...rest} />
      <button type="button" onClick={onSearch}>
        <FiSearch />
      </button>
    </Container>
  );
};

export default forwardRef(InputSearch);
