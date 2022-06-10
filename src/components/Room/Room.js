import React from 'react';
import { makeStyles } from '@mui/styles';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WcIcon from '@mui/icons-material/Wc';
import { useNavigate } from 'react-router-dom';
import { red } from '@mui/material/colors';

const useStyles = makeStyles((theme) =>
({
  root: {
    maxWidth: 350
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
}));
export default function Room({ room }) {

  const classes = useStyles();
  const navigate = useNavigate()
  const handleBook = (bedType) => {
    navigate(`/book/${bedType}`);
  }
  return (
    <Grid container>
      <Grid item md={10} sm={8} lg={12} xs={6}>
        <Card className={classes.root} >
          <CardHeader
            avatar={<Avatar aria-label="recipe" sx={[
              {
                backgroundColor: red[500],
                transition: (theme) => theme.transitions.create(['background-color', 'transform'], {
                  duration: theme.transitions.duration.standard,
                }),
                '&:hover': {
                  backgroundColor: red[900],
                  transform: 'scale(1.1)'
                }
              }
            ]}>
              {room.avatar}
            </Avatar>
            }
            title={room.title}
          />

          <CardMedia
            className={classes.media}
            image={room.imgUrl}
            title="Paella dish"
          />
          <img src={`/images/${room.bedType}.png`} alt="" />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {room.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Grid item lg={12} md={8} sm={6}>
              <IconButton aria-label="add to favorites">
                <LocalHotelIcon />: {room.bed}
              </IconButton>
              <IconButton aria-label="share">
                <WcIcon />: {room.capacity}
              </IconButton>
              <IconButton aria-label="price">
                <AttachMoneyIcon />: {room.price}
              </IconButton>
              <Button onClick={() => handleBook(room.bedType)} variant="contained" color="primary">
                Book
              </Button>
            </Grid>
          </CardActions>
        </Card >
      </Grid>

    </Grid>
  );
}
