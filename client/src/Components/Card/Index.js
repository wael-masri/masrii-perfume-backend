import React from "react";
import "./Style.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import QueueIcon from "@material-ui/icons/Queue";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
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

// const StyledRating = withStyles({
//   iconFilled: {
//     color: "#ff6d75",
//   },
//   iconHover: {
//     color: "#ff3d47",
//   },
// })(Rating);

// const customIcons = {
//   1: {
//     icon: <SentimentVeryDissatisfiedIcon />,
//     label: "Very Dissatisfied",
//   },
//   2: {
//     icon: <SentimentDissatisfiedIcon />,
//     label: "Dissatisfied",
//   },
//   3: {
//     icon: <SentimentSatisfiedIcon />,
//     label: "Neutral",
//   },
//   4: {
//     icon: <SentimentSatisfiedAltIcon />,
//     label: "Satisfied",
//   },
//   5: {
//     icon: <SentimentVerySatisfiedIcon />,
//     label: "Very Satisfied",
//   },
// };

const Carditem = (props) => {
  const PF = "/";
  const classes_side = useStyles_card();

  // function IconContainer(props) {
  //   const { value, ...other } = props;
  //   return <span {...other}>{customIcons[value].icon}</span>;
  // }

  // IconContainer.propTypes = {
  //   value: PropTypes.number.isRequired,
  // };
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
