import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "@mui/material/Link";
import { StyledLogo } from "../Header/index";
import logo from "../../../assets/img/logo/logo_min.svg";

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
        <Grid item xs={12} sm={6} align="left">
          <StyledLogo src={logo} alt="logo" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          display="flex"
          alignItems="center"
          justifyContent="end"
        >
          <Link
            href="https://www.facebook.com/profile.php?id=100079471036924"
            color="inherit"
            target="_blank"
            rel="noopener"
            sx={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FacebookIcon label="Orientalcars La Serena" />
            <Typography variant="h8" css={cssTitle}>
              Orientalcars La Serena{" "}
            </Typography>
          </Link>
          <Link
            href="https://www.instagram.com/orientalcarltda_autoshopping/"
            color="inherit"
            target="_blank"
            rel="noopener"
            sx={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <InstagramIcon />
            <Typography variant="h8" css={cssTitle}>
              @Orientalcarltda{" "}
            </Typography>
          </Link>
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
