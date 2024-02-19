import { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import type { AppProps } from "next/app";
import { useMediaQuery } from "@mui/material";
import { links } from "../components/common/NavbarFull";
import "./global.css";
import NavbarFull from "../components/common/NavbarFull";
function MyApp({ Component, pageProps }: AppProps) {
  const pathname = useRouter().pathname;
  const isFullScreen = !useMediaQuery("(max-width: 744px)");
  const showNavbar = links.some((link) => pathname.includes(link.ref));
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Fragment>
        <Head>
          <title>Web Application</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        {showNavbar && isFullScreen ? <NavbarFull /> : ""}
        <Component {...pageProps} />
      </Fragment>
    </LocalizationProvider>
  );
}

export default MyApp;
