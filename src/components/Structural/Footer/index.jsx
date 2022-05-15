import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const cssTitle = css({
  padding: "16px",
  fontWeight: "100",
});

const cssWrapper = (theme) =>
  css({
    backgroundColor: theme.palette.primary.light,
  });

const cssBootomLine = (theme) =>
  css({
    color: "white",
    backgroundColor: theme.palette.primary.dark,
    height: "34px",
    width: "100%",
  });

const cssFooter = (theme) =>
  css({
    color: "white",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    maxWidth: "1260px",
  });

export default function Footer() {
  return (
    <Grid container justifyContent="center" css={cssWrapper}>
      <Grid container alignItems="flex-start" css={cssFooter}>
        <Grid item xs={12} sm={3} align="left">
          <Typography variant="h6" component="h2" css={cssTitle}>
            Footer
          </Typography>
        </Grid>
      </Grid>
      <Grid container css={cssBootomLine} alignContent="center">
        <Grid item xs={12} align="center">
          <Typography variant="caption" display="block" gutterBottom>
            © {new Date().getFullYear()} Poblete – Venta de Sitios webs al
            precio de aliexpress
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
