import React, { useState } from "react";
import { AppBar, Tabs, Tab, Box } from "@mui/material";
import {
  AccountBalance,
  TrendingUp,
  Newspaper,
  BarChart,
  Business,
} from "@mui/icons-material";

const Header = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <AppBar
      position="static"
      sx={{ maxWidth: "1000px", backgroundColor: "#205781", margin: "0 auto" }}
    >
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          centered
          textColor="inherit"
          variant="fullWidth"
          sx={{
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "1rem",
            },
            "& .MuiTab-root:hover": {
              backgroundColor: "rgba(79, 149, 157, 0.1)",
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "#98D2C0",
            },
          }}
        >
          <Tab
            label={
              <>
                <AccountBalance sx={{ marginRight: 1 }} /> Economy
              </>
            }
          />
          <Tab
            label={
              <>
                <TrendingUp sx={{ marginRight: 1 }} /> News
              </>
            }
          />

          <Tab
            label={
              <>
                <BarChart sx={{ marginRight: 1 }} /> Charts
              </>
            }
          />
          <Tab
            label={
              <>
                <Business sx={{ marginRight: 1 }} /> Brokers
              </>
            }
          />
          <Tab
            label={
              <>
                <Newspaper sx={{ marginRight: 1 }} /> Others
              </>
            }
          />
        </Tabs>
      </Box>
    </AppBar>
  );
};

export default Header;
