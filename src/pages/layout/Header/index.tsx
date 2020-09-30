import React, { useRef, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

import imgLogoSlim from '../../../assets/logo-slim.svg';

import { Container, Content, Menu, Mobile } from './styles';

const Header: React.FC = () => {
  const { location } = useHistory();
  const menuRef = useRef<HTMLUListElement>(null);

  const handleButtonMenu = useCallback(() => {
    if (menuRef.current) {
      menuRef.current.classList.toggle('show');
    }
  }, []);

  return (
    <Container>
      <Content>
        <img src={imgLogoSlim} alt="Logo" />

        <Mobile onClick={handleButtonMenu}>
          <span>Menu</span>
          <FiMenu size={24} />
        </Mobile>

        <Menu ref={menuRef}>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">Início</Link>
          </li>
          <li className={location.pathname === '/atendimentos' ? 'active' : ''}>
            <Link to="/atendimentos">Atendimentos</Link>
          </li>
          <li className={location.pathname === '/pacientes' ? 'active' : ''}>
            <Link to="/pacientes">Pacientes</Link>
          </li>
          <li className="dropdown">
            <span>Joeder</span>
            <ul className="dropdown-content">
              <li>
                <Link to="/perfil">Meu perfil</Link>
              </li>
              <li>
                <Link to="/logout">Sair</Link>
              </li>
            </ul>
          </li>
        </Menu>
      </Content>
    </Container>
  );
};

export default Header;
