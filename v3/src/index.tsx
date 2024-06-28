// https://github.com/leoroese/mobx-tutorial/blob/main/src/Athlete.ts
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


import { ConfigProvider } from "antd";
import {RootRouter} from "./main/RootRouter";
import {QueryClient, QueryClientProvider} from "react-query";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const queryClient = new QueryClient()

root.render(
  <ConfigProvider
    theme={{
      token: {
        fontFamily: "Comfortaa",
      },
    }}
  >
      <QueryClientProvider client={queryClient}>
          <RootRouter />
      </QueryClientProvider>
  </ConfigProvider>,
);
