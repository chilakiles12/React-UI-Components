import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';

const HeaderContent = () => (
  <div>
    <HeaderTitle />
    <h1 className="border">This is the header content</h1>
  </div>
);

export default HeaderContent;
