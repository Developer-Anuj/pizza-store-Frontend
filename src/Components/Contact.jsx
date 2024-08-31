import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const ContactForm = () => {
  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };


  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    subject: Yup.string()
      .required('Subject is required'),
    message: Yup.string()
      .required('Message is required'),
  });


  const onSubmit = (values) => {
    console.log('Form data', values);
  };


  return (
    <div className="container mt-5">
      <h2 className="mb-4">Contact Us</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {formik => (
          <Form>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Enter your name"
                />
                <ErrorMessage name="name" component="div" className="text-danger mt-1" />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
                <ErrorMessage name="email" component="div" className="text-danger mt-1" />
              </div>
              <div className="col-12 mb-3">
                <label htmlFor="subject" className="form-label">Subject</label>
                <Field
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-control"
                  placeholder="Enter the subject"
                />
                <ErrorMessage name="subject" component="div" className="text-danger mt-1" />
              </div>
              <div className="col-12 mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  rows="3"
                  className="form-control"
                  placeholder="Enter your message"
                />
                <ErrorMessage name="message" component="div" className="text-danger mt-1" />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};


export default ContactForm;