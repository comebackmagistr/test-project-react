import React, { useState } from 'react';
import style from './timedata.module.css';

export default function TimeData() {
  const [nowDate, setNowDate] = useState(new Date());
  setInterval(() => {
    setNowDate(new Date());
  }, 1000);
  return (
    <div className={style.timeData}>{nowDate.toLocaleTimeString('ru')}</div>
  );
}
