import React from 'react';
import style from './styles/tabs.scss';

const Tabs = props => {
  return (
    <div className={style.Tabs}>
      {props.children}
    </div>
  );
};

export default Tabs;
