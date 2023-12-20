import React from 'react'
import { Button } from '@mui/material'

const Contact = () => {
  const divStyle = {
    backgroundImage: require('../../assets/images/contact-us/photo-1508717272800-9fff97da7e8f.avif'),
    backgroundSize: 'cover', // Adjust this based on your needs
    backgroundPosition: 'center', // Adjust this based on your needs
    width: '100%',
    height: '100%', // Adjust this based on your needs
  };
  return (
    <section className='contact sect' style={divStyle}>
      <div className='container py-3' >
        <div className='row d-flex justify-content-center'>
          <div className='col-6'>
            <h2 className='text-center'>Contact Us</h2>
            <div className='mb-3'>
              <label htmlFor='formGroupExampleInput' className='form-label'>
                Full Name
              </label>
              <input
                type='text'
                className='form-control'
                id='formGroupExampleInput'
                placeholder='Enter your name'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='formGroupExampleInput2' className='form-label'>
                Email
              </label>
              <input
                type='text'
                className='form-control'
                id='formGroupExampleInput2'
                placeholder='Enter your email'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='formGroupExampleInput3' className='form-label'>
                Restaurant Name
              </label>
              <input
                type='text'
                className='form-control'
                id='formGroupExampleInput3'
                placeholder='Enter your Restaurant Name'
              />
            </div>
            <div className='mb-3'>
              <label
                htmlFor='exampleFormControlTextarea1'
                className='form-label'
              >
                Message
              </label>
              <textarea
                className='form-control'
                id='exampleFormControlTextarea1'
                rows='3'
              ></textarea>
            </div>
            <div className='d-flex justify-content-center'>
              <Button variant='contained'>Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
