import React, { useState, useEffect } from "react";
import Headeradmin from "./Haederadmin/Index";

import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import axios from "axios";

import noimage from "../Images/noimage.jpg";
const Addposts = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("0");
  const [quantity, setQuantity] = useState(0);
  const [status, setStatus] = useState(false);
  const [old_price, setOld_price] = useState(0);
  const [new_price, setNew_price] = useState(0);
  const [databrands, setDatabrands] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`${process.env.REACT_APP_URL_BACKEND}/api/categories/`);
      setDatabrands(res.data);
      console.log(res.data);
    };
    fetch();
  }, []);

  //send register to data base
  const submitform = async (e) => {
    e.preventDefault();

    const newpost = {
      title,
      description,
      brand,
      quantity: Number(quantity),
      status,
      old_price,
      new_price,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newpost.image_link = filename;
      try {
        await axios.post(`${process.env.REACT_APP_URL_BACKEND}/api/upload`, data);
      } catch (err) {}
    }
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_URL_BACKEND}/api/posts/add`,
        newpost
      );
      res && window.location.replace("/admin/posts");
    } catch (err) {}
  };

  return (
    <>
      <form onSubmit={submitform}>
        <Headeradmin
          title="Add Post"
          path="/admin/posts"
          from="Posts"
          to="Add"
        />
        <div style={{ height: "100px" }}></div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="fileinput" className="label_image">
                <AddPhotoAlternateIcon style={{ color: "rgb(78 78 78)" }} />
              </label>
              <input
                type="file"
                id="fileinput"
                style={{ display: "none" }}
                className="form-control"
                name="image_link"
                onChange={(e) => setFile(e.target.files[0])}
                required
              />
              {file && (
                <img
                  src={URL.createObjectURL(file)}
                  alt="photo"
                  style={{ width: "100%", height: "419px" }}
                />
              )}
              {file === null && (
                <img src={noimage} style={{ width: "100%", height: "419px" }} />
              )}
              <div className="row">
                
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12">
                  <label>Title</label>
                  <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-12">
                  <label>Brand</label>

                  <select
                    id="lang"
                    onChange={(e) => setBrand(e.target.value)}
                    value={brand}
                    className="form-control"
                    required
                  >
                    <option value="0">Select</option>
                    {databrands &&
                      databrands.map((val) => {
                        return (
                          <option value={val.name} key={val._id}>
                            {val.name}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="col-md-12">
                  <label>Description</label>
                  <input
                    type="text"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-12">
                  <label>Quantity</label>

                  <select
                    id="lang"
                    onChange={(e) => setQuantity(e.target.value)}
                    value={quantity}
                    className="form-control"
                    required
                  >
                    <option value="0">Select</option>
                    <option value="100">100 ML</option>
                    <option value="200">200 ML</option>
                    <option value="300">300 ML</option>
                    <option value="400">400 ML</option>
                    <option value="500">500 ML</option>
                    <option value="750">750 ML</option>
                  </select>
                </div>
                <div className="col-md-12">
                  <label>Old Price</label>
                  <input
                    type="number"
                    className="form-control"
                    value={old_price}
                    onChange={(e) => setOld_price(e.target.value)}
                    required
                  />
                </div>

                <div className="col-md-12">
                  <label>New Price</label>
                  <input
                    type="number"
                    className="form-control"
                    value={new_price}
                    onChange={(e) => setNew_price(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-12" style={{margin:"30px 0px",
              fontSize: '18px',
              letterSpacing: '1px',
              color: '#8a8784'}}>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckDefault"
                      value={status}
                      onChange={(e) => setStatus(e.target.checked)}
                      required
                    />
                    <label className="form-check-label">Show in list</label>
                  </div>
                </div>

                <div className="col-md-12 mt-4">
                  <button className="btn btn_addpost" type="submit">
                    Add Post
                  </button>
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

export default Addposts;
