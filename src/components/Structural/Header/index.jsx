// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const cssHeader = css({
  backgroundColor: "white",
  position: "fixed",
  zIndex: "100",
});

const cssTopLine = (theme) =>
  css({
    backgroundColor: theme.palette.primary.light,
  });

export default function Header() {
  return (
    <Grid container align="center" css={cssHeader}>
      <Grid container css={cssTopLine} alignContent="center">
        <Container maxWidth="md" disableGutters>
          <Grid item xs={12}>
            Header
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
}
