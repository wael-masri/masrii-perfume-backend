import React, { useEffect, useState } from "react";
import "./Style.css";
import { Link } from "react-router-dom";
import axios from "axios";
import EditIcon from "@material-ui/icons/Edit";
import noimage from "../Images/noimage.jpg";
import Title from "../Components/Basictitle/Index";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
const Profile = () => {
  const [dataprof, setDataprof] = useState([]);
  const [password, setPassword] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const storedClicks = await JSON.parse(
        localStorage.getItem("account_masriparfume")
      );
      const res = await axios.get(`${process.env.REACT_APP_URL_BACKEND}/api/users/${storedClicks._id}`);
      setDataprof(res.data);
    };
    fetch();
  }, []);

  const changepassword = async (e) => {
    e.preventDefault();
    if (password === "") {
      NotificationManager.info("Please fill the feild..");
    } else {
      const neweditprofile = {
        password,
      };

      try {
        const res = await axios.put(
          `${process.env.REACT_APP_URL_BACKEND}/api/users/changepassword/${dataprof._id}`,
          neweditprofile
        );
        res && window.location.reload();
      } catch (err) {
        console.log(err);
      }
    }
  };

  const DB = `${process.env.REACT_APP_URL_BACKEND}/`;

  return (
    <>
      <div style={{ height: "238px", background: "#a07d5a" }}></div>
      <div style={{ height: "100px" }}></div>
      <Title title="My Account" subtitle="MASRI PARFUME" />
      <div style={{ height: "100px" }}></div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {dataprof.profilepic && (
              <img
                src={DB + dataprof.profilepic}
                alt="photo"
                style={{ width: "50%", height: "400px", borderRadius: "10%",padding:"5px 0px",objectFit:"cover" }}
              />
            )}
            {!dataprof.profilepic && (
              <img
                src={noimage}
                alt="photo"
                style={{ width: "100%", height: "400px", borderRadius: "50%",padding:"5px 0px" }}
              />
            )}
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-12" style={{ height: "100px" }}>
                <Link
                  className="btn btn_editprofile form-control"
                  to={{ pathname: "/editprofile", state: dataprof }}
                >
                  Edit Profile
                </Link>
              </div>
              <div className="col-md-12" style={{ height: "100px" }}>
                <span className="span_labelprofile">Username: </span>{" "}
                {dataprof.username}
              </div>
              <div className="col-md-12" style={{ height: "100px" }}>
                <span className="span_labelprofile">Email: </span>{" "}
                {dataprof.email}
              </div>
              <div className="col-md-12" style={{ height: "100px" }}>
                <span className="span_labelprofile">Password: </span> Hidden
                <span style={{ float: "right" }}>
                  <EditIcon
                    data-toggle="modal"
                    data-target="#modaleditpassword"
                  />
                </span>{" "}
              </div>
              {/* modal start */}
              <div
                className="modal fade"
                id="modaleditpassword"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLongTitle">
                        Edit Password
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <form onSubmit={changepassword}>
                      <div className="modal-body">
                        <label>New Password</label>
                        <input
                          type="password"
                          placeholder="******"
                          className="mt-3 form-control"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="modal-footer">
                        <button
                         
                          type="submit"
                          className="btn btn-primary"
                        >
                          Change Passwprd
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/* model end */}
            </div>
          </div>
        </div>
        <NotificationContainer />
      </div>
      <div style={{ height: "100px" }}></div>
    </>
  );
};

export default Profile;
