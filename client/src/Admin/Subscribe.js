import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Style.css";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import CircularProgress from "@material-ui/core/CircularProgress";
import EditIcon from "@material-ui/icons/Edit";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Menuadmin from "./Menuadmin";



export default function Subscribe(props) {

  



  const [datasubscribe, setDatasubscribe] = useState([]);

 
 

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`${process.env.REACT_APP_URL_BACKEND}/api/subscribes/`);
      setDatasubscribe(res.data);
      console.log(res.data);
    };
    fetch();
  }, []);

  //DELETE CATEGORY
  const handldeletesubscribe = (id) => {
    axios.delete(`${process.env.REACT_APP_URL_BACKEND}/api/subscribes/${id}`).then(() => {
      alert("subscribe has been deleted..");
      window.location.reload();
    });
  };
  return (
    <>
      <Menuadmin title="SUBSCRIBES">
        <div className="container">
         
          <div className="row">
            <div className="col-md-12">
              {datasubscribe.length === 0 && (
                <div style={{ width: "100%", textAlign: "center" }}>
                  <CircularProgress
                    style={{ color: "#a07d5a", marginTop: "100px" }}
                  />
                </div>
              )}
              {datasubscribe.length > 0 && (
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Eamil</th>
                      <th scope="col">Date Created</th>
                      <th scope="col">Modify</th>
                    </tr>
                  </thead>
                  <tbody>
                    {datasubscribe &&
                      datasubscribe.map((valu) => {
                        return (
                          <tr key={valu._id}>
                            <th scope="row">{valu._id}</th>
                            <td>{valu.email}</td>
                           

                            <td>{new Date(valu.createdAt).toDateString()}</td>
                            <td>
                            

                              <DeleteIcon
                                style={{ color: "red" }}
                                onClick={() => handldeletesubscribe(valu._id)}
                              />
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </Menuadmin>
    </>
  );
}
