import React,{useState} from 'react'
import Headeradmin from './Haederadmin/Index';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import * as Yup from "yup";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
const Editcategory = (props) => {
   // for save new values of country by id getted
const [valuesbyid , setValuesbyid] = useState({
    name : props.location.state.name,
    status : props.location.state.status
    
})
   //validation for form
   const validate = Yup.object({
    name:
      Yup.string()
      .required("Required !"),
      
   
  });

   //send register to data base
   const formsub = async (values) => {
  
    console.log(values);
    
    try {
      const res = await axios.put(`${process.env.REACT_APP_URL_BACKEND}/api/categories/${props.location.state._id}`,values);
      res && window.location.replace("/admin/categories");
      
    } catch (err) {
      console.log(err);
      
    }
  };
   
   
   
   
   
   
   
   
   
   
   
   
   
   return (
      <Formik
                      initialValues={ valuesbyid }
                       enableReinitialize={true}
                      onSubmit={formsub}
                      validationSchema={validate}
                    >
                       <Form>
    <Headeradmin title="Edit Category" path="/admin/categories" from="Categories" to="Edit"/>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h3 style={{letterSpacing:"2px",marginTop:'20px'}}>Category <ArrowForwardIosIcon />
                     <span style={{color:'#a07d5a'}}>{props.location.state.name}</span></h3>
                </div>
                <div className="mt-3 col-md-6">
                 
                 <Field type="text" className="form-control" name="name" />
                 <ErrorMessage component='div' name='name' className='erorr' />
                </div>
                <div className="mt-3 col-md-6">
                 <button className="btn btn_editcat" type="submit">Save Change</button>
               
                </div>
                <div className="mt-3 col-md-6">
                <div className="form-check">
                <Field className="form-check-input" type="checkbox" id="flexCheckDefault" name="status" />
                <label className="form-check-label" >
                   Status
                </label>
                </div>

                </div>
            </div>
           
        </div>
        </Form>
        </Formik>
    )
}

export default Editcategory
