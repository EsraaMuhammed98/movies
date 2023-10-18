import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import styles from './Register.module.css';
import * as Yup from'yup'
export default function Register() {
  let Navigate =   useNavigate()
  let [error,setError]=useState(null)
  
 async function submitForm(values){
}

let validate=Yup.object({
  fName:Yup.string().min(3,'Name Must Be More Than 3').max(10,'Name Must Be Less Than 10')
  .required('Name is Required'),
  email:Yup.string().email().required('Email is Required'),
  phone:Yup.string().matches(/^01[01245]\d{8}$/ , 'Phone Must Start With (010-011-012-014)').required('Phone is Required'),
  password:Yup.string().matches(/^[A-Z][a-z0-9]{6}/ ,'Password Must Start With Capital Char and be more Than 6').required('Password is Required'),
  rePassword:Yup.string().oneOf([Yup.ref('password')],'Password and RePassword Must be same').required('rePassword is Required'),


})
let formik=useFormik({
  initialValues:
  {
    fName:'',
    email:'',
    phone:'',
    password:'',
    rePassword:'',
  },validationSchema:validate
  ,onSubmit:submitForm
})
  return <>
  <div className='w-75 mx-auto'>
    <form onSubmit={formik.handleSubmit}>
    <h1 className='text-center'>Register</h1>

    <label htmlFor="name">Name: </label>
    <input type="text" onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.fName}
    className='form-control' id='name' />
{formik.errors.fName&& formik.touched.fName?<div className="alert alert-warning p-2">{formik.errors.fName}</div>:''}


    <label htmlFor="email">Email: </label>
    <input type="email" className='form-control' id='email' 
     onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.email}/>
{formik.errors.email&&formik.touched.email?<div className="alert alert-warning p-2">{formik.errors.email}</div>:''}
  
    <label htmlFor="phone">Phone: </label>
    <input type="tel" className='form-control' id='phone'
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}
     value={formik.values.phone} />
{formik.errors.phone&&formik.touched.phone?<div className="alert alert-warning p-2">{formik.errors.phone}</div>:''}
  

    <label htmlFor="password">Password: </label>
    <input type="password" className='form-control' id='password'
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}
     value={formik.values.password} />
{formik.errors.password&&formik.touched.password?<div className="alert alert-warning p-2">{formik.errors.password}</div>:''}
  
    <label htmlFor="rePassword">rePassword: </label>
    <input type="password" className='form-control' id='rePassword'
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}
     value={formik.values.rePassword} />
{formik.errors.rePassword&&formik.touched.rePassword?<div className="alert alert-warning p-2">{formik.errors.rePassword}</div>:''}

  <button type='submit'disabled={!(formik.dirty&&formik.isValid)} className='btn bg-main text-white mt-3' >Registration</button>
  </form>
  </div>
  </>
}
