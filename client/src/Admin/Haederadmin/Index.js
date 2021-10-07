import React from "react";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import './Style.css';
import { Link } from "react-router-dom";



const Headeradmin = (props) => {


    //running
return(
        <div className="hero_admin first_admin">
                <div className="container-fluid">
                        <div className="creative-info_admin">
                                <h2 className="info-title_admin">{props.title}</h2>
                                <p className='p_fixed_image_admin '>
                               <Link to={props.path} 
                               style={{color: 'inherit',textDecoration:'none'}}>
                                       {props.from}</Link> 
                                       < NavigateNextIcon /> 
                                      <span style={{color:'#f5f5f58c'}}>{props.to}</span> 
                                         
                               </p>
                             
                              
                        </div>
                </div>
        </div>
)


}
export default Headeradmin ;