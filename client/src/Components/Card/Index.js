import React from "react";
import "./Style.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import QueueIcon from "@material-ui/icons/Queue";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";

const useStyles_card = makeStyles((theme) => ({
  root_card: {
    maxWidth: 350,
    borderRadius: "0px",

    margin: "auto",
    marginBottom: "40px",
  },
  media_card: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },

  avatar_card: {
    backgroundColor: "#a07d5a",
    width: "85px",
    height: "85px",
  },
}));


const Carditem = (props) => {
  const PF = `${process.env.REACT_APP_URL_BACKEND}/`;
  const classes_side = useStyles_card();

  return (
    <>
      <Card className={classes_side.root_card}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes_side.avatar_card}>
              {props.item.brand}
            </Avatar>
          }
          title={props.item.title}
          subheader={props.item.quantity + " ML"}
        />
        <CardMedia
          className={classes_side.media_card}
          image={PF + props.item.image_link}
          title={props.item.brand}
        />
        <CardContent>
          <div className="row">
            <div className="col-md-6 div_price_card1">
              <p className="pricedel_card p_price">Public Price</p>
              <p className="pricedel_card">
                <del>${props.item.old_price}</del>
              </p>
            </div>
            <div className="col-md-6 div_price_card2">
              <p className="p_price">Sale Price</p>
              <p>${props.item.new_price}</p>
            </div>
          </div>
        </CardContent>
        {/* <IconButton>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <StyledRating
              name="customized-color"
              defaultValue={2}
              getLabelText={(value) =>
                `${value} Heart${value !== 1 ? "s" : ""}`
              }
              precision={0.5}
              icon={<FavoriteIcon fontSize="inherit" />}
            />
          </Box>
        </IconButton> */}
        <Link
          to={{
            pathname: `/item`,
            state: props.item,
          }}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <button className="btn btn_addtocart" style={{ float: "right" }}>
            <QueueIcon /> Add To Cart
          </button>
        </Link>
      </Card>
    </>
  );
};

export default Carditem;
