import React from 'react';

import './card.css';

function Card() {
  return (
    <article class="card">
        <a href="/">
            <span>2022.08.20</span>
            <div class="image">
                <img src="images/poster.jpg"/>
                <div class="status finished">신청완료</div>
            </div>
            <div class="info">
                <div class="title">
                    그을린 Incendies 
                </div>
                <div class="openInfo finishedBorder">
                    <div class="date">
                        2022. 08. 13~
                    </div>
                    <div class="">
                        4/5
                    </div>
                </div>
            </div>
        </a>
    </article>
  );
}


export default Card;
