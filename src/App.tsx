import React from "react";
import MainPage from "./pages/MainPage/MainPage";
import style from "./global.module.scss";
const App: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <MainPage></MainPage>
    </div>
  );
};

export default App;
