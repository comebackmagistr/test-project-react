import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrent } from '../../../redux/slices/currentElementSlice';
import Exchange from './Exchange';
import style from './options.module.css';

export default function Options() {
  const elements = useSelector((store) => store.elements);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrent(elements[0]));
  }, []);
  return (
    <div className={style.bodyOptions}>
      <select onChange={(e) => {
        dispatch(setCurrent((elements.find((el) => el.id === Number(e.target.value)))));
      }}
      >
        {elements.map((el) => (
          <option key={el?.id} value={el?.id}>
            {el?.oneElement}
            /
            {el?.secondElement}
          </option>
        ))}
      </select>
      <Exchange />
    </div>
  );
}
