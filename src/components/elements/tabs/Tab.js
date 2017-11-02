import React from 'react';
import classnames from 'classnames';
import {Link} from 'react-router-dom';
import style from './styles/tabs.scss';

const Tab = props => {
  const {title, link, active} = props;
  const classes = classnames({
    [style.Tab]: true,
    [style.active]: active,
  });
  return (
    <div className={classes}>
      <Link to={link}>{title}</Link>
    </div>
  );
};

export default Tab;
