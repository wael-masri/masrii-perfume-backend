import React, { useEffect, useState } from "react";
import "./Style.css";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import axios from "axios";
import { Link } from "react-router-dom";
import noimage from "../Images/noimage.jpg";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
const Editprofile = (props) => {
  const [file, setFile] = useState(null);

  var DB = "/";
  const [dataprof, setDataprof] = useState({
    username: props.location.state.username,
    email: props.location.state.email,
  });
  const [ischangefile, setIschangefile] = useState(false);

  //edit form submit
  const handlsub = async (e) => {
    e.preventDefault();
    if (dataprof.username === "" || dataprof.username === "") {
      alert("please fill that input to change..");
    } else {
      const neweditprofile = {
        username: dataprof.username,
        email: dataprof.email,
      };

      if (file) {
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename);
        data.append("file", file);
        neweditprofile.profilepic = filename;
        try {
          await axios.post(`${process.env.REACT_APP_URL_BACKEND}/api/upload`, data);
        } catch (err) {}
      }
      try {
        const res = await axios.put(
          `${process.env.REACT_APP_URL_BACKEND}/api/users/${props.location.state._id}`,
          neweditprofile
        );

        res &&
          localStorage.setItem(
            "account_masriparfume",
            JSON.stringify(res.data)
          );
        res && window.location.replace("/profile");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <div style={{ height: "238px", background: "#a07d5a" }}></div>
      <p style={{ margin: "12px", fontSize: "22px" }}>
        <Link
          to="/profile"
          style={{ color: "#a07d5a", textDecoration: "none" }}
        >
          Profile
        </Link>{" "}
        <ArrowForwardIosIcon /> Edit
      </p>
      <div style={{ height: "100px" }}></div>
      <form onSubmit={handlsub}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {file && (
                <img
                  src={URL.createObjectURL(file)}
                  alt="photo"
                  style={{
                    width: "100%",
                    height: "400px",
                    borderRadius: "50%",
                  }}
                />
              )}
              {file === null && props.location.state.profilepic && (
                <img
                  src={DB + props.location.state.profilepic}
                  style={{
                   width: "50%",
                    height: "400px",
                    borderRadius: "10%",
                    objectFit:"cover"
                  }}
                />
              )}
              {file === null && !props.location.state.profilepic && (
                <img
                  src={noimage}
                  style={{
                   width: "100%",
                    height: "400px",
                    borderRadius: "50%",
                  }}
                />
              )}

              <label htmlFor="fileinput">
                <PhotoCameraIcon className="icon_image" />
              </label>
              <input
                type="file"
                id="fileinput"
                style={{ display: "none" }}
                name="image_link"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                  setIschangefile(true);
                }}
              />
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12" style={{ height: "100px" }}>
                  <button
                    className="btn btn_editprofile form-control"
                    type="submit"
                  >
                    Save Change
                  </button>
                </div>
                <div className="col-md-12" style={{ height: "100px" }}>
                  <span className="span_labelprofile">Username: </span>
                  <input
                    type="text"
                    className="form-control"
                    value={dataprof.username}
                    onChange={(e) =>
                      setDataprof({
                        ...dataprof,
                        username: e.target.value,
                      })
                    }
                  />{" "}
                </div>
                <div className="col-md-12" style={{ height: "100px" }}>
                  <span className="span_labelprofile">Email: </span>{" "}
                  <input
                    type="email"
                    className="form-control"
                    value={dataprof.email}
                    onChange={(e) =>
                      setDataprof({
                        ...dataprof,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div style={{ height: "100px" }}></div>
    </>
  );
};

export default Editprofile;
