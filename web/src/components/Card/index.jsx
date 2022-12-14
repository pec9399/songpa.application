import React, { useState } from "react";
import { useMain } from "../../hooks/main";
import AddRequest from "../Request/AddRequest";
import { UPLOAD } from "../../constants";
import "./card.css";

function Card() {
  const { mainState } = useMain();
  const [openDialog, setOpenDialog] = useState(false);
  const [appId, setAppId] = useState(-1);
  const closeDialog = () => {
    setOpenDialog(false);
  };

  const addCards = () => {
    const params = new URLSearchParams(location.search);
    const name = params.get("page");

    return mainState.applications.map((app, index) => {
      const time = new Date();
      console.log(app.openTime);
      console.log(app.startTime);
      const open_date = app.openTime.split("T")[0];
      const [open_year, open_month, open_day] = open_date.split("-")[0];

      const open_time = app.openTime.split("T")[1].slice(0, 5);
      const open_hour = open_time.split(":")[0];
      const open_minute = open_time.split(":")[1];

      const start_date = app.startTime.split("T")[0];
      const start_time = app.startTime.split("T")[1].slice(0, 5);
      return (
        <>
          <article className="card">
            <a
              onClick={() => {
                setAppId(app.id);
                setOpenDialog(true);
              }}
            >
              {
                //<span>{open_date} {open_hour}시 {open_minute}분 이후 신청</span>
              }
              <div className="image">
                <img src={UPLOAD + app.poster} />
                <div
                  className={
                    new Date(app.startTime) <= time
                      ? "status finished"
                      : app.requestCount / app.maxNum < 1
                      ? "status open"
                      : "status closed"
                  }
                >
                  {new Date(app.startTime) <= time
                    ? "사역 종료"
                    : app.requestCount / app.maxNum < 1
                    ? "신청 중"
                    : "신청 마감"}
                </div>
              </div>
              <div className="info">
                <div className="title">{app.title}</div>
                <div
                  className={
                    new Date(app.startTime) <= time
                      ? "openInfo finishedBorder"
                      : app.requestCount / app.maxNum < 1
                      ? "openInfo openBorder"
                      : "openInfo closedBorder"
                  }
                >
                  <div className="date">
                    {start_date} {start_time}
                  </div>
                  <div className="">
                    {app.requestCount}/{app.maxNum}
                  </div>
                </div>
              </div>
            </a>
          </article>
        </>
      );
    });
  };

  return (
    <>
      {addCards()}
      <AddRequest
        open={openDialog}
        closeHandler={() => setOpenDialog(false)}
        id={appId}
      />
    </>
  );
}

export default Card;
