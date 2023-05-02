import React, { useEffect, useState } from "react";
import "./Style.css";
import DeleteIcon from "@material-ui/icons/Delete";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import Menuadmin from "./Menuadmin";
import VisibilityIcon from '@material-ui/icons/Visibility';

export default function Orders() {
  const [dataorders, setDataorders] = useState([]);

  //GET DATA FROM DATABASE
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`${process.env.REACT_APP_URL_BACKEND}/api/orders/get`);
      setDataorders(res.data);
    };
    fetch();
  }, []);

  // DELETE CATEGORY
  const handldeleteuser = (id) => {
    axios.delete(`${process.env.REACT_APP_URL_BACKEND}/api/orders/${id}`).then(() => {
      alert("Order has been deleted..");
      window.location.reload();
    });
  };
 
console.log(dataorders);

  return (
    <>
      <Menuadmin title="ORDERS">
        <div className="container">
          {dataorders.length === 0 && (
            <div style={{ width: "100%", textAlign: "center" }}>
              <CircularProgress
                style={{ color: "#a07d5a", marginTop: "100px" }}
              />
            </div>
          )}
          {dataorders.length > 0 && (
            <table className="table table-striped">
              <thead>
                <tr>
                <th scope="col">User ID</th>
                  <th scope="col">Full Name</th>
                  <th scope="col">Shipping Order</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Notes</th>
                  <th scope="col">Date Created</th>
                  <th scope="col">Items</th>
                  <th scope="col">Modify</th>
                </tr>
              </thead>

              <tbody>
                {dataorders.map((valu) => {
                 
                  return (
                      <tr key={valu._id}>
                        <th scope="row">{valu.user_id}</th>
                      <th scope="row">{valu.name}</th>
                      <td>{valu.shippingorder}</td>
                      <td>{valu.phone}</td>
                      <td>{valu.ordernotes}</td>
                      <td>{new Date(valu.createdAt).toDateString()}</td>
                      <td><VisibilityIcon style={{color:"#a07d5a"}}
                      data-toggle="modal" 
                      data-target={"#"+ valu._id}/></td>

                      <td>
                        <DeleteIcon
                          style={{ color: "red" }}
                          onClick={() => handldeleteuser(valu._id)}
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
                           {valu.items && valu.items.map((value) => {

                             return(
                               <div className="container-fluid" key={value._id}>
                                 <div className="row">
                                   <div className="col-md-12" style={{borderBottom:"2px solid",height:'65px'}}>
                                     <div className="row">
                                       <div className="col-md-6">
                                         <p style={{marginBottom:"0px"}}>{value.title} qty:{value.quantity}</p>
                                         <p style={{fontWeight:'500',color:"#a07d5a"}}>{value.brand}</p>
                                       </div>
                                       <div className="col-md-3">
                                       <p style={{margin:"revert"}}>{value.qty} pieces</p>
                                       </div>
                                       <div className="col-md-3">
                                       <p style={{margin:"revert"}}>${value.new_price * value.qty}</p>
                                       
                                       </div>
                                     </div>
                                   </div>
                                 </div>
                               </div >
                             )

                           })}
                          
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
