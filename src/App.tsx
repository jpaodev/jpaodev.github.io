import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Router,
  RouterProvider,
  Route,
  createBrowserRouter,
  createHashRouter,
  Routes,
} from "react-router-dom";
import Home from "./views/home";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navigation from "./components/Navigation";
import Footer from "./components/general/Footer";
import Imprint from "./views/imprint";
import Privacy from "./views/privacy";
import Blog from "./views/blog";
import Blogpost from "./views/blogpost";
import { useTranslation } from "react-i18next";
import { HashRouter } from "react-router-dom";

function App() {
  const { i18n } = useTranslation();
  const [darkmode, setDarkmode] = React.useState<boolean>(true);

  // Currently not using, because neither Cookies, localStorage or any kind of storage is being used
  // at the moment
  // useEffect(() => {
  //   localStorage.getItem("darkmode") == "true"
  //     ? setDarkmode(true)
  //     : setDarkmode(false);
  //   localStorage.getItem("lang") == "en"
  //     ? i18n.changeLanguage("en")
  //     : i18n.changeLanguage("de");
  // }, []);

  const router = createHashRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/blog/:blogpostId",
      element: <Blogpost />,
    },
    {
      path: "/imprint",
      element: <Imprint />,
    },
    {
      path: "/privacy",
      element: <Privacy />,
    },
  ]);
  const websiteTheme = createTheme({
    palette: {
      mode: darkmode ? "dark" : "light",
      primary: {
        main: "#571E4B",
      },
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={websiteTheme}>
        <Navigation darkmode={darkmode} setDarkmode={setDarkmode} />
        <CssBaseline />
        {/* <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:blogpostId" element={<Blog />} />
            <Route path="/imprint" element={<Imprint />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </HashRouter> */}
        <RouterProvider router={router} />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
