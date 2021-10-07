import React from "react";
import "./Style.css";
import { makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import { Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root_card: {
    maxWidth: 345,
  },
  media_card: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },

  avatar_card: {
    backgroundColor: "#a07d5a",
    width: "75px",
    height: "70px",
  },
}));

const Cardadminpost = (props) => {
  const classes = useStyles();
  var DB = "/";
  //running
  return (
    <>
      <Card className={classes.root_card}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar_card}>
              {props.item.brand}
            </Avatar>
          }
          action={
            <>
              <Link style={{color:'inherit',TextDecoder:"none"}} to={{
                                  pathname: `/admin/editpost`,
                                  state: props.item,
                                }} >
              <IconButton aria-label="settings">
                <EditIcon style={{ color: "blue" }} />
              </IconButton>
              </Link>
              <IconButton onClick={() => props.handldeletepost(props.item._id,props.item.image_link)} >
                <RemoveCircleIcon style={{ color: "red" }}  />
              </IconButton>
            </>
          }
          title={props.item.title}
          subheader={new Date(props.item.createdAt).toDateString()}
        />
        <CardMedia
          className={classes.media_card}
          image={DB + props.item.image_link}
          title={props.item.brand}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="div">
            <div className="col-md-12">
              <span>Description:</span>
              <span>{props.item.description}</span>
            </div>
            <hr />
            <div className="col-md-12">
              <span>Quantity:</span>
              <span style={{ float: "right" }}>{props.item.quantity} ML</span>
            </div>
            <div className="col-md-12">
              <span>Old Price:</span>
              <span style={{ float: "right" }}>${props.item.old_price}</span>
            </div>
            <div className="col-md-12">
              <span>New Price:</span>
              <span style={{ float: "right" }}>${props.item.new_price}</span>
            </div>
            <div className="col-md-12">
              <span>Status:</span>
              <span style={{ float: "right" }}>{String(props.item.status)}</span>
            </div>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Cardadminpost;
