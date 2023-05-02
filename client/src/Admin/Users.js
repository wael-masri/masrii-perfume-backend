import React, { useEffect, useState } from "react";
import "./Style.css";
import DeleteIcon from "@material-ui/icons/Delete";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import Menuadmin from "./Menuadmin";


export default function Users() {
  const [datausers, setDatausers] = useState([]);

  //GET DATA FROM DATABASE
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`${process.env.REACT_APP_URL_BACKEND}/api/users/`);
      setDatausers(res.data);
    };
    fetch();
  }, []);

  // DELETE CATEGORY
  const handldeleteuser = (id) => {
    axios.delete(`${process.env.REACT_APP_URL_BACKEND}/api/users/${id}`).then(() => {
     alert("User has been deleted..");
      window.location.reload();
     

    });
  };

  return (
    <>
      <Menuadmin title="USERS">
        <div className="container">
          {datausers.length === 0 && (
            <div style={{ width: "100%", textAlign: "center" }}>
              <CircularProgress
                style={{ color: "#a07d5a", marginTop: "100px" }}
              />
            </div>
          )}
          {datausers.length > 0 && (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                  <th scope="col">Date Created</th>
                  <th scope="col">Modify</th>
                </tr>
              </thead>

              <tbody>
                {datausers.map((valu) => {
                  return (
                    <tr key={valu._id}>
                      <th scope="row">{valu._id}</th>
                      <td>{valu.username}</td>
                      <td>{valu.email}</td>
                      <td>Hidden</td>
                      <td>{new Date(valu.createdAt).toDateString()}</td>
                      <td>
                        <DeleteIcon
                          style={{ color: "red" }}
                          onClick={() => handldeleteuser(valu._id)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
           
        </div>
      </Menuadmin>
    </>
  );
}
