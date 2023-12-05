import React from "react";
import trackList from "../../assets/trackList";
import style from "./mainPage.module.scss";

const MainPage: React.FC = () => {
  return (
    <div className={style.search}>
      <>Search tracks</>
      <div className={style.list}>
        {trackList.map((track) => (
          <div key={track.id}>{JSON.stringify(track)}</div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
