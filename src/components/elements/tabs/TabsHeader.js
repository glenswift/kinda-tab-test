import React from 'react';
import style from './styles/tabs.scss';

const TabsHeader = props => {
  return (
    <div className={style.TabHeader}>{props.children}</div>
  );
};

export default TabsHeader;
