import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Button } from "../Button";
import { Box, SxProps } from "@mui/material";
import { useEffect, useState } from "react";

function ToTopButton() {
  const [showScroll, setShowScroll] = useState(false);

  const sx: SxProps = {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    transition: "all ease 400ms",
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 800) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 800) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);

    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  return (
    <Box
      sx={sx}
      style={{
        opacity: showScroll ? "1" : "0",
        zIndex: showScroll ? "10" : "-1",
      }}
    >
      <Button
        onClick={() => {
          scrollTop();
        }}
      >
        <ArrowUpwardIcon />
      </Button>
    </Box>
  );
}

export default ToTopButton;
