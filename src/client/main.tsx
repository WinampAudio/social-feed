import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { App } from "./App";
import { Layout } from "./components/Layout";
import { About } from "./routes/About";
import { Contact } from "./routes/Contact";
import { Feed } from "./routes/Feed";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<App />} />
          <Route path="about" element={<About />} />
          <Route path="feed" element={<Feed />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
