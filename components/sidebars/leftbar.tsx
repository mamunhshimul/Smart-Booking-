import * as React from 'react';
import ListWithIcon from '../elements/listWithIcon';

// Meterial UI
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Button from '@mui/material/Button';






//icons
import InboxIcon from '@mui/icons-material/MoveToInbox';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ContactsIcon from '@mui/icons-material/Contacts';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PublicIcon from '@mui/icons-material/Public';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';


import SendIcon from '@mui/icons-material/Send';




export default function RecipeReviewCard() {


    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                action={
                    <IconButton aria-label="settings">
                        <DoubleArrowIcon />
                    </IconButton>
                }
                title="Bokking"
            />
            <CardContent>

                <ListWithIcon
                    listTitle={'Home'}
                    listIcon={<HomeIcon />}
                />
                <ListWithIcon
                    listTitle={'Wallet'}
                    listIcon={<AccountBalanceWalletIcon />}
                />
                <ListWithIcon
                    listTitle={'Booking'}
                    listIcon={<ContactsIcon />}
                />
                <ListWithIcon
                    listTitle={'Business'}
                    listIcon={<BusinessCenterIcon />}
                />
                <ListWithIcon
                    listTitle={'Explore'}
                    listIcon={<PublicIcon />}
                />
                <ListWithIcon
                    listTitle={'Support'}
                    listIcon={<LiveHelpIcon />}
                />


            </CardContent>
            <CardActions disableSpacing >

                <div className='listAction'>
                    <Button variant="contained" endIcon={<SendIcon />}>
                        Get Premiums
                    </Button>
                </div>

            </CardActions>


            <style style jsx > {` 
   
   .listAction {  
        } 
    `}</style >

        </Card>
    );
}
