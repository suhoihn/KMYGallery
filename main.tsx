import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./app/page";
import JourneyPage from "./app/journey/page";
import ArchivePage from "./app/archive/page";
import "./app/globals.css";

const path = window.location.pathname.replace(/\/+$/, "") || "/";
const Page = path === "/journey" ? JourneyPage : path === "/archive" ? ArchivePage : Home;

createRoot(document.getElementById("root")!).render(
  <StrictMode><Page /></StrictMode>,
);
