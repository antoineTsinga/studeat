import { Box, CircularProgress, Fade } from "@mui/material";

export default function LoadingFade({ loading, height }) {
  return (
    <Box sx={{ height }}>
      <Fade
        in={loading}
        style={{
          transitionDelay: loading ? "800ms" : "0ms",
        }}
        unmountOnExit
      >
        <CircularProgress />
      </Fade>
    </Box>
  );
}
