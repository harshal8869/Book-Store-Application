import { Box, Typography } from '@mui/material';
import React from 'react'

const About = () => {
    return (
        <div>
            <Box display='flex' flexDirection='column' alignItems='center'>
                <Typography sx={{color: "red", fontFamily: "fantasy"}} variant="h2">This is a Book - Store Application</Typography>
                <Typography sx={{color: "blue",fontFamily: "fantasy"}} variant='h3'> - by Harshal Shah </Typography>

            </Box>
      
        </div>
    );
  
};

export default About;
