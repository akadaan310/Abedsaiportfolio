import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Work from "./pages/Work";
import CaseStudy from "./pages/CaseStudy";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "work", Component: Work },
      { path: "work/:projectId", Component: CaseStudy },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
