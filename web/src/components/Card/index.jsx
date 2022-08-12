import React, {useState} from 'react';
import AddRequest from '../Request/AddRequest'
import './card.css';

function Card() {
  const [openDialog, setOpenDialog] = useState(false);
  const closeDialog = () => {
    setOpenDialog(false);
  };
  
  return (
    <>
    <article className="card">
        <a onClick={()=>{setOpenDialog(true)}}>
            <span>2022.08.20</span>
            <div className="image">
                <img src="images/poster.jpg"/>
                <div className="status finished">신청완료</div>
            </div>
            <div className="info">
                <div className="title">
                    그을린 Incendies 
                </div>
                <div className="openInfo finishedBorder">
                    <div className="date">
                        2022. 08. 13~
                    </div>
                    <div className="">
                        4/5
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
}


export default Card;
