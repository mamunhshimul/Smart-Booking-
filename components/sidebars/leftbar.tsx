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

//icons
import InboxIcon from '@mui/icons-material/MoveToInbox';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ContactsIcon from '@mui/icons-material/Contacts';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PublicIcon from '@mui/icons-material/Public';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';




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

                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
