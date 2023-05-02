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



export default function Categories(props) {

  //for notistack start
  
  //for notistack end



  const [datacategories, setDatacategories] = useState([]);

  //validation for form
  const validate = Yup.object({
    name: Yup.string().required("Required !"),
  });
  //send register to data base
  const formsub = async (values) => {
    console.log(values);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_URL_BACKEND}/api/categories/add`,
        values
      );
      res && window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`${process.env.REACT_APP_URL_BACKEND}/api/categories/`);
      setDatacategories(res.data);
      console.log(res.data);
    };
    fetch();
  }, []);

  //DELETE CATEGORY
  const handldeletecategory = (id) => {
    axios.delete(`${process.env.REACT_APP_URL_BACKEND}/api/categories/${id}`).then(() => {
      alert("Category has been deleted..");
      window.location.reload();
    });
  };
  return (
    <>
      <Menuadmin title="CATEGORIES">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <button
                className="btn btn_addcat"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                Add Category
              </button>
              <Formik
                initialValues={{ name: "", status: false }}
                onSubmit={formsub}
                validationSchema={validate}
              >
                <Form>
                  <div
                    className="modal fade"
                    id="exampleModalCenter"
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
                          <h5
                            className="modal-title"
                            id="exampleModalLongTitle"
                          >
                            Add Category
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
                        <div className="modal-body">
                          <Field
                            type="text"
                            name="name"
                            className="form-control"
                          />
                          <ErrorMessage
                            component="div"
                            name="name"
                            className="erorr"
                          />
                          <br />
                          <div className="form-check form-switch">
                            <Field
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckChecked"
                              name="status"
                            />
                            <label className="form-check-label">
                              See in the list categories
                            </label>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button type="submit" className="btn btn_savecat">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {datacategories.length === 0 && (
                <div style={{ width: "100%", textAlign: "center" }}>
                  <CircularProgress
                    style={{ color: "#a07d5a", marginTop: "100px" }}
                  />
                </div>
              )}
              {datacategories.length > 0 && (
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Status</th>
                      <th scope="col">Date Created</th>
                      <th scope="col">Modify</th>
                    </tr>
                  </thead>
                  <tbody>
                    {datacategories &&
                      datacategories.map((valu) => {
                        return (
                          <tr key={valu._id}>
                            <th scope="row">{valu._id}</th>
                            <td>{valu.name}</td>
                            <td>{String(valu.status)}</td>

                            <td>{new Date(valu.createdAt).toDateString()}</td>
                            <td>
                              <Link
                                to={{
                                  pathname: `/admin/editcategory`,
                                  state: valu,
                                }}
                                style={{
                                  color: "inherit",
                                  textDecoration: "none",
                                }}
                              >
                                <EditIcon
                                  style={{
                                    color: "#a07d5a",
                                    marginRight: "10px",
                                  }}
                                />
                              </Link>

                              <DeleteIcon
                                style={{ color: "red" }}
                                onClick={() => handldeletecategory(valu._id)}
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
