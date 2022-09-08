import React, { useState } from 'react';
import { useMain } from '../../hooks/main';
import AddRequest from '../Request/AddRequest'
import './card.css';

function Card() {
  const { mainState } = useMain();
  const [openDialog, setOpenDialog] = useState(false);
  const closeDialog = () => {
    setOpenDialog(false);
  };


  return mainState.applications.map((app, index) => {
    return (
      <>
        <article className="card">
          <a onClick={() => { setOpenDialog(true) }}>
            <span>{app.startTime}</span>
            <div className="image">
              <img src={require('../../../../server/upload/' + app.poster)} />
              <div className="status open">신청 중</div>
            </div>
            <div className="info">
              <div className="title">
                {app.title}
              </div>
              <div className="openInfo finishedBorder">
                <div className="date">
                  {app.openTime}~
                </div>
                <div className="">
                  4/{app.maxNum}
                </div>
              </div>
            </div>
          </a>
        </article>
        <AddRequest
          open={openDialog}
          closeHandler={() => setOpenDialog(false)}
        />
      </>
    );
  });
};

export default Card;