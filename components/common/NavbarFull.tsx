import React from "react";
import styles from "../../styles/components/Common.module.scss";
import LogoSVG from "../../public/menu.svg";
import DashBoardSVG from "../../public/menu_icon.svg";
import NutSVG from "../../public/menu_icon1.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import ProfileSVG from "../../public/menu_icon3.svg";
import AppointmentSVG from "../../public/menu_icon4.svg";
import ConsultationSVG from "../../public/menu_icon (1).svg";
import DieticianSVG from "../../public/menu_icon (2).svg";
import RecipeSVG from "../../public/book.svg";
import SignOutSVG from "../../public/sign_out.svg";
import UnstylesButton from "./UnstylesButton";
import ShoppingSVG from "../../public/menu_icon (4).svg";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

export const links: { img: any; link: string; ref: string }[] = [
  { img: DashBoardSVG, link: "Dashboard", ref: "/dashboard" },
  { img: NutSVG, link: "Nutrition Tracker", ref: "/nutrition-tracker" },
  { img: ProfileSVG, link: "Profile", ref: "/profile" },
  { img: AppointmentSVG, link: "Appointments", ref: "/appointments" },
  {
    img: ConsultationSVG,
    link: "Consultation Notes",
    ref: "/consultation-notes",
  },
  { img: DieticianSVG, link: "Dietitian Network", ref: "/dietitian-network" },
  { img: RecipeSVG, link: "Recipes", ref: "/recipe" },
  { img: ShoppingSVG, link: "Shopping List", ref: "/shopping-list" },
];
const NavbarFull = () => {
  const pathname = useRouter().pathname;
  return (
    <div className={styles.navbarFull}>
      <Box textAlign={"center"}>
        <Image src={LogoSVG} alt="Logo" />
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap={"5px"} flex={1}>
        {links.map((link, index) => {
          const active = pathname.includes(link.ref);
          console.log(active);
          return (
            <Link
              style={{ backgroundColor: active ? "black" : "" }}
              key={index}
              href={link.ref}
              className={styles.link}
            >
              <Image
                src={link.img}
                alt="icon"
                className={active ? "invert" : ""}
              />
              <Typography
                fontSize={"12px"}
                fontWeight={600}
                style={{ color: active ? "white" : "inherit" }}
              >
                {link.link}
              </Typography>
            </Link>
          );
        })}
      </Box>
      <UnstylesButton>
        <Box m={"20px 20px"}>
          <Image src={SignOutSVG} alt="Sign Out" />
        </Box>
      </UnstylesButton>
    </div>
  );
};

export default NavbarFull;
