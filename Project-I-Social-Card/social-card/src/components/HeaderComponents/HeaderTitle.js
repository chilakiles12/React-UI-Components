import React from 'react';
import './Header.css';
import './TimeStamp';
import ImageThumbnail from './ImageThumbnail';
import TimeStamp from './TimeStamp';

const HeaderTitle = () => (
  <div className="border flexRow">
    <ImageThumbnail />
    <h2>Lambda School</h2>
    <TimeStamp />
  </div>
);

export default HeaderTitle;
