import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";

/** Structural components */
import Header from "../Header";
import Footer from "../Footer";

/** Functional components */
import Home from "../../Functional/Home";
import CarDetail from "../../Functional/CarDetail";
import AllCarsSection from "../../Functional/AllCarsSection";

const root = css({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  backgroundColor: "#FFF",
});

const cssFooter = css({
  marginTop: "auto",
});

export default function Main() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div css={root}>
      <Grid container justifyContent="center">
        <CssBaseline />
        <Header />
        <Grid container justifyContent="center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detalle/:carId" element={<CarDetail />} />
            <Route path="/catalogo" element={<AllCarsSection />} />
          </Routes>
        </Grid>
      </Grid>
      <footer css={cssFooter}>
        <Footer />
      </footer>
    </div>
  );
}
