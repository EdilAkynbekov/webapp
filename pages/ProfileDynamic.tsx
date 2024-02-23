import { useState, useEffect } from "react";
import RightPanel from "../components/recipe/right-panel";
import BasicInfo from "../components/profile/basic-info";
import DietaryPref from "../components/profile/DietaryPref";
import MedicalBack from "../components/profile/MedicalBack";
import {
  Box,
  Grid,
  Typography,
  Button,
  IconButton,
  Paper,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ProfileAvatar from "@mui/icons-material/AccountCircle"; // Assuming you have an icon for profile

const ProfileA = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#FFB527",
        minHeight: "100vh",
        overflowY: "auto",
      }}
    >
      <RightPanel />
      <Grid
        container
        justifyContent="center"
        py={0}
        pr={{ xs: 3, md: 0 }}
        pl={{ xs: 3, md: 0 }}
        className="box-border"
      >
        <Grid item xs={12} lg={9}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              py: 10,
              gap: 4,
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{ color: "text.primary", textAlign: "center" }}
            >
              Profile
            </Typography>
            <Paper elevation={3} sx={{ p: 3 }}>
              <BasicInfo />
            </Paper>
            <Paper elevation={3} sx={{ p: 3 }}>
              <DietaryPref />
            </Paper>
            <Paper elevation={3} sx={{ p: 3 }}>
              <MedicalBack />
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileA;
