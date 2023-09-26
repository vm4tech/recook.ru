// https://github.com/leoroese/mobx-tutorial/blob/main/src/Athlete.ts
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./main/App";
import RootRouter from "./main/RootRouter";
import { RootStoreContext } from "./hooks/useStore";
import { RootStore } from "./store/RootStore";
import { ConfigProvider } from "antd";
// import { StoresProvider, stores } from "./stores";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <ConfigProvider
    theme={{
      token: {
        fontFamily: "Comfortaa",
      },
    }}
  >
    <RootStoreContext.Provider value={new RootStore()}>
      <RootRouter />
    </RootStoreContext.Provider>
    ,
  </ConfigProvider>,
);
