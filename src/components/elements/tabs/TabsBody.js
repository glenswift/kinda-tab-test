import React from 'react';
import styles from './styles/tabs.scss';

const TabsBody = props => {
  return (
    <div className={styles.TabBody}>{props.children}</div>
  );
};

export default TabsBody;
