// import React from "react";
// import { CircularProgress } from "@mui/material";

// const LoadingScreen = () => {
//   return (
//     <div className="circular_progress">
//       <div className="spinner-container">
//         {/* Optional glow effect */}
//         <div className="spinner-glow"></div>
//         <CircularProgress className="spinner" size={80} thickness={4.5} style={{ color: '#1b2a4e' }}/>
//       </div>
//       <h2>Loading Data...</h2>
//     </div>
//   );
// };

// export default LoadingScreen;

import React from 'react';
import { CircularProgress, Typography, Box } from '@mui/material';

const LoadingScreen = () => (
  <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
    <CircularProgress color="primary" />
    <Typography variant="body1" style={{ marginTop: 16 }}>
      Loading data...
    </Typography>
  </Box>
);

export default LoadingScreen;
