import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
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

function App() {
  const { i18n } = useTranslation();
  const [darkmode, setDarkmode] = React.useState<boolean>(true);
  // useEffect(() => {
  //   localStorage.getItem("darkmode") == "true"
  //     ? setDarkmode(true)
  //     : setDarkmode(false);
  //   localStorage.getItem("lang") == "en"
  //     ? i18n.changeLanguage("en")
  //     : i18n.changeLanguage("de");
  // }, []);

  const router = createBrowserRouter([
    {
      path: "/",
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
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={websiteTheme}>
        <CssBaseline />
        <Navigation darkmode={darkmode} setDarkmode={setDarkmode} />
        <RouterProvider router={router} />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
