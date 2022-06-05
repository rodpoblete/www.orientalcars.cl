import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Icon } from "@mui/material";
import { StyledLogo } from "../Header/index";
import logo from "../../../assets/img/logo_min_small.svg";

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
      <Grid container alignItems="center" css={cssFooter}>
        <Grid item xs={12} sm={3} align="center">
          <StyledLogo src={logo} alt="logo" />
        </Grid>
        <Grid item xs={12} sm={6} align="right">
          {/* FIXME: Iconos y textos alineados con la misma line height */}
          <FacebookIcon label="Orientalcars La Serena" />
          <Typography variant="h8" css={cssTitle}>
            Orientalcars La Serena{" "}
          </Typography>
          <InstagramIcon />
          <Typography variant="h8" css={cssTitle}>
            @Orientalcarltda{" "}
          </Typography>
        </Grid>
      </Grid>
      <Grid container css={cssBootomLine} alignContent="center">
        <Grid item xs={12} align="center">
          <Typography variant="caption" display="block" gutterBottom>
            © {new Date().getFullYear()} Oriental Cars – Automotora compra,
            venta y consignaciones
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
