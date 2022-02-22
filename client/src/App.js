import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-notifications/lib/notifications.css";
import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PublicRoute from "./Privatepublicrouter/Publicrouter";
import PrivateRoute from "./Privatepublicrouter/Privaterouter";
import { connect } from "react-redux";
import { fetchdata } from "./Redux/Reducers/Fetchindata/Index";
//components
import Navbar from "./Components/Navbar/Index";
import Footer from "./Components/Footer/Index";
//pages
import Home from "./Containers/Home";
import About from "./Containers/About";
import Brands from "./Containers/Brands";
import Contact from "./Containers/Contact";
import Signin from "./Containers/Signin";
import Signup from "./Containers/Signup";
import Adminlogin from "./Containers/Adminlogin";
import Posts from "./Admin/Posts";
import Categories from "./Admin/Categories";
import Orders from "./Admin/Orders";
import Users from "./Admin/Users";
import Editcategory from "./Admin/Editcategory";
import Addposts from "./Admin/Addposts";
import Editpost from "./Admin/Editpost";
import Item from "./Containers/Item";
import Cart from "./Containers/Cart";
import Order from "./Containers/Order";
import Profile from "./Containers/Profile";
import Myorders from "./Containers/Myorders";
import Editprofile from "./Containers/Editprofile";
import Subscribe from "./Admin/Subscribe";
import Messages from "./Admin/Messages";
import Restorscrolltotop from "./Components/Restorscrolltotop/Index";

function App(props) {
  //functin after running app
  useEffect(() => {
    props.fetchdata();
  }, []);
  // HERE FOR ADMIN PAGES 
  const ProtectedLayout = (props) => (
    <div>
      <Switch>
        <Route component={Posts} path="/admin/posts" exact />
        <Route component={Categories} path="/admin/categories" exact />
        <Route component={Orders} path="/admin/orders" exact />
        <Route component={Users} path="/admin/users" exact />
        <Route component={Editcategory} path="/admin/editcategory" exact />
        <Route component={Addposts} path="/admin/addpost" exact />
        <Route component={Editpost} path="/admin/editpost" exact />
        <Route component={Subscribe} path="/admin/subscribe" exact />
        <Route component={Messages} path="/admin/message" exact />
      </Switch>
    </div>
  );
  //FERE FOR WEB SITE
  const publicedLayout = (props) => (
    <div>
      <Navbar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" exact />
        <Route component={Brands} path="/brands/:brand" exact />
        <Route component={Contact} path="/contact" exact />
        <PublicRoute
          restricted={true}
          component={Signin}
          path="/signin"
          exact
        />
        <Route component={Signup} path="/signup" exact />
        <Route component={Adminlogin} path="/loginadmin" exact />
        <Route component={Item} path="/item" exact />
        <Route component={Cart} path="/cart" exact />
        <Route component={Order} path="/order" exact />
        <PrivateRoute component={Myorders} path="/myorders" exact />
        <PrivateRoute component={Profile} path="/profile" exact />
        <PrivateRoute component={Editprofile} path="/editprofile" exact />

        {/* <PrivateRoute component={Home} path="/Home" exact /> */}
      </Switch>
      <Footer />
    </div>
  );
  // HERE RUNNING (INTEDRATED WEB AND ADMIN PAGE)
  return (
    <>
      <BrowserRouter>
      <Restorscrolltotop />
        <Switch>
          <Route path="/admin" component={ProtectedLayout} />
          <Route path="/" component={publicedLayout} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default connect(null, { fetchdata })(App);
