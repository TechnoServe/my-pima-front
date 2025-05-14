import { Box, Typography } from "@mui/material";

const NoData = ({
    text,
}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',      // horizontal centering
                alignItems: 'center',          // vertical centering
                height: '100%',                // make container fill its parent
            }}
        >
            <Typography>No data available yet</Typography>
        </Box>
    );
};

export default NoData;
