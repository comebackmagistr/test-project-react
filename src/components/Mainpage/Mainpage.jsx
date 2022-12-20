import React from 'react';
import Options from './Options';
import TimeData from './TimeData';
import style from './mainpage.module.css';

export default function Mainpage() {
  return (
    <div className={style.mainpageBody}>
      <TimeData />
      <Options />

    </div>
  );
}
