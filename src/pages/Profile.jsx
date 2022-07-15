import React from 'react';
import Header from '../components/Header';

// import { Container } from './styles';

function Profile() {
  const profile = 'Profile';
  const bool = false;
  return (
    <div>
      <Header title={ profile } hasSearch={ bool } />
    </div>
  );
}

export default Profile;
