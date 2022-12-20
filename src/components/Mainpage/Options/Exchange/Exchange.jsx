import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addArchive } from '../../../../redux/slices/archiveSlice';
import style from './exchange.module.css';

export default function Exchange() {
  const currElem = useSelector((store) => store.currentElement);
  const [num, setNum] = useState(0);
  const dispatch = useDispatch();
  return (
    <div className={style.headModules}>
      <div>
        <span className={style.btnBuy} type="button" data-bs-toggle="modal" data-bs-target="#exampleModalBuy">
          BUY
          <br />
          {currElem.buy}
        </span>

        <div className="modal fade" id="exampleModalBuy" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Make order</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                {`BUY ${currElem.buy} ${currElem.oneElement}/${currElem.secondElement}`}
                <div className="input-group mb-3">
                  <span className="input-group-text" id="inputGroup-sizing-default">Volume</span>
                  <input value={num} onChange={(e) => setNum(e.target.value)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    dispatch(addArchive({
                      Slide: 'Buy', Price: currElem.buy, Instrument: `${currElem.oneElement}/${currElem.secondElement}`, Volume: num, Timestamp: new Date().toLocaleString(),
                    }));
                    setNum(0);
                  }}
                >
                  OK

                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span className={style.btnSell} type="button" data-bs-toggle="modal" data-bs-target="#exampleModalSell">
          SELL
          <br />
          {currElem.sell}
        </span>

        <div className="modal fade" id="exampleModalSell" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Make order</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                {`SELL ${currElem.sell} ${currElem.oneElement}/${currElem.secondElement}`}
                <div className="input-group mb-3">
                  <span className="input-group-text" id="inputGroup-sizing-default">Volume</span>
                  <input value={num} onChange={(e) => setNum(e.target.value)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    dispatch(addArchive({
                      Slide: 'Sell', Price: currElem.sell, Instrument: `${currElem.oneElement}/${currElem.secondElement}`, Volume: num, Timestamp: new Date().toLocaleString(),
                    }));
                    setNum(0);
                  }}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
