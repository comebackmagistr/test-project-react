import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import style from './archive.module.css';

export default function Archive() {
  const arrArchive = useSelector((store) => store.archive);
  return (
    <div>
      <div className={style.header}>
        <span className={style.headerSpan}>Slide</span>
        <span className={style.headerSpan}>Price</span>
        <span className={style.headerSpan}>Instrument</span>
        <span className={style.headerSpan}>Volume</span>
        <span className={style.headerSpan}>Timestamp</span>
      </div>
      <div className={style.columnItems}>
        {arrArchive.length > 0 && arrArchive.map((el) => (
          <div className={style.rowItems} key={uuidv4()}>
            <span className={el?.Slide === 'Sell' ? style.spanSlideRed : style.spanSlideGreen}>{el?.Slide}</span>
            <span className={style.rowItemSpan}>{el?.Price}</span>
            <span className={style.rowItemSpan}>{el?.Instrument}</span>
            <span className={style.rowItemSpan}>{el?.Volume}</span>
            <span className={style.rowItemSpan}>{el?.Timestamp}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
