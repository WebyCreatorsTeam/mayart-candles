import React from 'react';
import Logo from './Logo';
import MenuButton from './MenuButton';
import ActionButtons from './ActionButtons';

const NavBar = () => {
  return (
    <div className='w-full flex justify-between items-center basis-1 px-6 py-5 bg-white'>
      <ActionButtons />
      <Logo />
      <MenuButton />
    </div>
  );
};

export default NavBar;
