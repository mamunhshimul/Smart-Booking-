import * as React from 'react';

// Meterial UI
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';



// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';



// icons
import FlightIcon from '@mui/icons-material/Flight';






export default function HeaderTop() {


    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <h1 className='padding0'>Booking</h1>
                </Grid>
                <Grid item xs={6}>
                    <Stack spacing={2} direction="row" justifyContent="flex-end" alignItems="center">
                        <Button color="secondary" variant="text" >BDT</Button>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        <HelpOutlineIcon/>
                        <Button variant="contained">Register</Button>
                        <Button variant="contained">Signin</Button>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}
