import React from 'react';
import PropTypes from 'prop-types';
import profiler from '../images/profileIcon.svg';
import search from '../images/searchIcon.svg';

// import { Container } from './styles';

function Header({ title, hasSearch }) {
  return (
    <div>
      <img src={ profiler } alt="icone-perfil" data-testid="profile-top-btn" />
      <h1 data-testid="page-title">{title}</h1>
      {hasSearch && (
        <img src={ search } alt="icone-search" data-testid="search-top-btn" />
      )}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  hasSearch: PropTypes.bool.isRequired,
};

export default Header;
