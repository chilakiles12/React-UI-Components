import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';

const HeaderContent = () => (
  <div>
    <HeaderTitle />
    <h1 className="border">This is the header content</h1>
    <ImageThumbnail />
    Image Above
  </div>
);

export default HeaderContent;
