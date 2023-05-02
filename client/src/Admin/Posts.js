import React, { useEffect, useState } from "react";
import "./Style.css";
import { Link } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import Cardadminpost from "./Cardadminpost";
import Menuadmin from "./Menuadmin";

export default function Posts() {
  const [dataposts, setDataposts] = useState([]);
  
  //GET DATA FROM DATABASE
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`${process.env.REACT_APP_URL_BACKEND}/api/posts/get/data`);
      setDataposts(res.data);
      console.log(res.data);
    };
    fetch();
  }, []);

  //DELETE POST
  const handldeletepost = (id, name) => {
    axios
      .delete(`${process.env.REACT_APP_URL_BACKEND}/api/posts/${id}`)
      .then(() => {
        axios.delete(`${process.env.REACT_APP_URL_BACKEND}/api/${name}`);
      })
      .then(() => {
        alert("post has been deleted..");
        window.location.reload();
      });
  };

  //running
  return (
    <>
      <Menuadmin title="POSTS">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Link
                to="/admin/addpost"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <button className="btn btn_addpost">Add Post</button>
              </Link>
            </div>
            {dataposts.length === 0 && (
              <div style={{ width: "100%", textAlign: "center" }}>
                <CircularProgress
                  style={{ color: "#a07d5a", marginTop: "100px" }}
                />
              </div>
            )}
            {dataposts &&
              dataposts.map((val) => {
                return (
                  <div className="col-md-4 mt-4" key={val._id}>
                    <Cardadminpost
                      item={val}
                      handldeletepost={handldeletepost}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </Menuadmin>
    </>
  );
}
