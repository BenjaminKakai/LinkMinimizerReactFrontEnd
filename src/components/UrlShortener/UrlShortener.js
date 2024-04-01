import React, { useState } from 'react';
import './UrlShortener.css';
import UrlShortenerButton from './UrlShortenerButton'; // Correct the import path
import { FaLink } from "react-icons/fa";
import { useForm } from "react-hook-form"

export default function ShortenerBody() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <div style={{
      display:'flex',
      flexDirection: 'column',
      alignItems:'center'
    }}>
      <h2
        style={{
          fontWeight:'bold',
          color:'#fff',
          fontSize:'36px',
        }}
      >URL Shortener</h2>
      {/**Shortener Input goes here */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{
          backgroundColor:'#fff',
          width:'40vw',
          borderRadius:'10px',
          padding:'16px'
        }}>
          <div 
            style={{
              display:'flex',
              flexDirection:'row',
              width:'100%',
              alignItems:'center',
            }}
          >
            <FaLink />
            <input
              style={{
                marginLeft:'10px',
                border:'none',
                fontWeight:'bold',
                flex:1,
                outline:'none',
                padding:'10px',
                borderBottom:'1px solid #e5e5e5',
                marginRight:'5px',
              }}
              {...register("url_input", { required: true })}
              id='url_input'
              name='url_input'
              placeholder='Paste a long url here'
              type='url'
            />
            {errors.url_input && <span>{errors.url_input.message}</span>}
            <button type='submit' style={{
              backgroundColor:'#5B86E5',
              border:'none',
              outline:'none',
              borderRadius:'5px',
              padding:'10px',
              paddingLeft:'20px',
              paddingRight:'20px',
              fontWeight:'bold',
              letterSpacing:'1px',
              color:'#FFFFFF',
              boxShadow:'2px 2px 2px #d6d4d4',
              cursor:'pointer'
            }}>Shorten</button>
          </div>
        </div>
      </form>
    </div>
  );
};

{/* <div className="url-shortener">
      <h1>Simple URL Shortener</h1> 
      <div>
        <input type="text" id="urlInput" placeholder="Enter your URL here" />
        <UrlShortenerButton />
      </div>
      <p id="result"></p>
    </div> */}
