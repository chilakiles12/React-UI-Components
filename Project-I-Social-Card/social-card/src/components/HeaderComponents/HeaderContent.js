import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';

const HeaderContent = () => (
  <div>
    <HeaderTitle />
    This is the Header Content
    <ImageThumbnail />
    Image Above
  </div>
);

export default HeaderContent;
