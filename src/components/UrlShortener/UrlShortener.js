import React, { useState, useEffect } from 'react';
import './UrlShortener.css';
import UrlShortenerButton from './UrlShortenerButton'; // Correct the import path
import { FaLink } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { Helmet } from 'react-helmet';
import axios from 'axios';

export default function ShortenerBody() {
  const URL_REGEX = '^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$';
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const [shortened_url, set_shortened_url] = useState('');

  useEffect(() => {
    // Code with side effects
    const fetchData = async () => {
      try {
        const response = await axios.post('https://quiet-reef-21453-76e7ef99e759.herokuapp.com/shorten', { url: 'https://www.google.com' });
        set_shortened_url(response.data.short_url);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Cleanup function if needed
    return () => {
      // Cleanup logic
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const API_URL = 'https://quiet-reef-21453-76e7ef99e759.herokuapp.com/shorten'; // Updated API_URL
      const payload = {
        url: data?.url_input
      };

      await axios.post(API_URL, payload).then((response) => {
        set_shortened_url(response?.data?.short_url);
      }).catch((err) => {
        console.log(err);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h2
        style={{
          fontWeight: 'bold',
          color: '#fff',
          fontSize: '36px',
        }}
      >URL Shortener</h2>
      {/**Shortener Input goes here */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{
          backgroundColor: '#fff',
          width: '40vw',
          borderRadius: '10px',
          padding: '16px'
        }}>
          <div style={{ display: 'flex', width: '100', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', flex: 1, marginBottom: '5px' }}>
              <FaLink />
              <input
                style={{
                  marginLeft: '10px',
                  border: 'none',
                  fontWeight: 'bold',
                  flex: 1,
                  outline: 'none',
                  padding: '10px',
                  borderBottom: '1px solid #e5e5e5',
                  marginRight: '5px',
                }}
                {...register("url_input", { required: true, pattern: { value: URL_REGEX, message: 'This does not seem to be a link' } })}
                id='url_input'
                name='url_input'
                placeholder='Paste a long url here'
                type='url'
              />
            </div>
            {isSubmitting ?
              <button style={{
                backgroundColor: '#e5e5e5',
                border: 'none',
                outline: 'none',
                borderRadius: '5px',
                padding: '10px',
                paddingLeft: '20px',
                paddingRight: '20px',
                fontWeight: 'bold',
                letterSpacing: '1px',
                color: '#FFFFFF',
                boxShadow: '2px 2px 2px #d6d4d4',
                cursor: 'pointer'
              }}
                disabled={isSubmitting}
              >...shortening</button>
              :
              <button type='submit' style={{
                backgroundColor: '#5B86E5',
                border: 'none',
                outline: 'none',
                borderRadius: '5px',
                padding: '10px',
                paddingLeft: '20px',
                paddingRight: '20px',
                fontWeight: 'bold',
                letterSpacing: '1px',
                color: '#FFFFFF',
                boxShadow: '2px 2px 2px #d6d4d4',
                cursor: 'pointer'
              }}
                disabled={isSubmitting}
              >Shorten</button>}
          </div>
          {errors.url_input && <span>{errors.url_input.message}</span>}
          {isSubmitting ? <Loading /> : null}
          {shortened_url ?
            <div style={{ padding: '10px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <p style={{ marginRight: '4px' }}>Short-Link:</p>
              <a href={`https://quiet-reef-21453-76e7ef99e759.herokuapp.com/${shortened_url}`} target="_blank" rel="noopener noreferrer" >{shortened_url}</a>
            </div>
            : null}
        </div>
      </form>
    </div>
  );
};

const Loading = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginTop: '5px' }}>
      <Helmet>
        <script src="https://cdn.lordicon.com/lordicon.js"></script>
      </Helmet>
      <lord-icon
        src="https://cdn.lordicon.com/lqxfrxad.json"
        trigger="loop"
        delay="100"
        colors="primary:#5B86E5"
        style={{ width: "50px", height: "50px" }}>
      </lord-icon>
      <a href="https://lordicon.com/" style={{ fontSize: '12px', color: '#e3e3e3' }}>Icons by Lordicon.com</a>
    </div>
  )
}

const Success = ({ new_url }) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      marginTop: '5px',
      width: '100%',
      backgroundColor: '#e3e3e3'
    }}>
      Txt
    </div>
  )
}
