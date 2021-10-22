/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'


export default function Contact() {
    return (
        <div className="contact">
            <p className="comment">// contact me</p>
            <div className="contact-container">
            
                
                <Formik
                    initialValues={{ email: '', message: ''}}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                        errors.email = 'Required';
                        } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                        errors.email = 'Invalid email address';
                        } 

                        if (!values.message) {
                            errors.message = 'Required';
                        } else if (values.message.length < 10) {
                            errors.message = 'Min. 10 characters ';
                        } 

                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        
                        setTimeout(() => {
                        setSubmitting(false);
                        }, 400);
                    }}
                    >
            {({ isSubmitting }) => (
                <Form>

                <label htmlFor="email">email</label>
                <Field id="email" type="email" name="email" />
                <ErrorMessage className="error" name="email" component="div" />

                <label htmlFor="message">message</label>
                <Field id="message" type="text" name="message" component="textarea"/>
                <ErrorMessage className="error" name="message" component="div" />
                <button type="submit" disabled={isSubmitting}>
                    send
                </button>
                </Form>
            )}
            </Formik>
            <p className="socialtext"> 
                /*<br/>
                message me otherwise:<br/>
                <br/>
                <a href="mailto:dominik.rsmn@gmail.com">email</a><br/>
                <a href="http://twitter.com/ceentrix">twitter</a><br/>
                <a href="http://instagram.com.com/ceentrix">instagram</a><br/>
                <a href="http://facebook.com/ceentrix">facebook</a><br/>
                <br/>
                <br/>
                */
            </p>
            </div>
     </div>
    )
}
