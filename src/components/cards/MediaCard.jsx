import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    maxWidth: 340,
  },
  media: {
    height: "20em",
  },
  content: {
    height: "4em",
  }
});

export default function MediaCard(props) {
  const classes = useStyles();
  // console.log(props)
  // console.log("../../content/img/"+props.item.imgUrl)
  return (
    <Card className={classes.root}>
      {/* <CardActionArea> */}
        <CardMedia
          className={classes.media}
          image={props.item.imgUrl}
          title="En bild"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {!props.text ? "" : props.text}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.item.text}
          </Typography>
        </CardContent>
      {/* </CardActionArea> */}
      <CardActions style={{display: "flex", justifyContent: "space-between"}}>
        {props.item.links.length > 0 ? props.item.links.map((link, index) => {return(
          <Button size="small" color="primary" key={index}>
            <Link href={link.linkUrl} >
              <Typography >
                {link.linkDesc}
              </Typography>
            </Link>
          </Button>
        )})
        : <Typography>Coming soon...</Typography>}
        {/* <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
  );
}