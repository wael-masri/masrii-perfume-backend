import React, { useEffect, useState } from "react";
import "./Style.css";
import DeleteIcon from "@material-ui/icons/Delete";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import Menuadmin from "./Menuadmin";
import VisibilityIcon from '@material-ui/icons/Visibility';

export default function Message() {
  const [datamessages, setDatamessages] = useState([]);

  //GET DATA FROM DATABASE
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`${process.env.REACT_APP_URL_BACKEND}/api/messages/`);
      setDatamessages(res.data);
    };
    fetch();
  }, []);

  // DELETE CATEGORY
  const handldeletemessage = (id) => {
    axios.delete(`${process.env.REACT_APP_URL_BACKEND}/api/messages/${id}`).then(() => {
      alert("Message has been deleted..");
      window.location.reload();
    });
  };
 
console.log(datamessages);

  return (
    <>
      <Menuadmin title="MESSAGES">
        <div className="container">
          {datamessages.length === 0 && (
            <div style={{ width: "100%", textAlign: "center" }}>
              <CircularProgress
                style={{ color: "#a07d5a", marginTop: "100px" }}
              />
            </div>
          )}
          {datamessages.length > 0 && (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Full Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Message</th>
                  <th scope="col">Date Created</th>
                  <th scope="col">Modify</th>
                  
                 
                </tr>
              </thead>

              <tbody>
                {datamessages.map((valu) => {
                 
                  return (
                      <tr key={valu._id} >
                       <th scope="row">{valu.name}</th>
                      <th scope="row">{valu.email}</th>
                      <td>{valu.phone}</td>
                      <td><VisibilityIcon style={{color:"#a07d5a"}}
                      data-toggle="modal" 
                      data-target={"#"+ valu._id}/></td>

                     
                      
                      <td>{new Date(valu.createdAt).toDateString()}</td>
                      <td>
                        <DeleteIcon
                          style={{ color: "red" }}
                          onClick={() => handldeletemessage(valu._id)}
                        />
                      </td>
                    
                      <div className="modal fade" id={valu._id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                      <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Total </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                           <p>
                             {valu.message}
                           </p>
                          
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            
                          </div>
                        </div>
                      </div>
                    </div>
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
