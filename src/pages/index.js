import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const IndexPage = () => {
  const handleChangeName = (e) => {
    e.preventDefault();
    console.log(
      'darkMode value in handleChangeName:',
      localStorage.getItem('darkMode')
    );
  };

  const handleOnFocus = (e) => {
    e.preventDefault();
    console.log(
      'darkMode value in handleOnFocus:',
      localStorage.getItem('darkMode')
    );
  };

  const handleOnBlur = (e) => {
    e.preventDefault();
    console.log(
      'darkMode value in handleOnBlur:',
      localStorage.getItem('darkMode')
    );
  };
  return (
    <>
      <Seo Sitetitle="Home" />
      <Layout>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
        <Link to="/page-2/">Go to page 2</Link>
        <br />
        <br />
        <br />
        <form>
          <label htmlFor="name">
            Name:{' '}
            <input
              type="text"
              name="name"
              id="name"
              placeholder="john doe"
              autoComplete="name"
              onChange={handleChangeName}
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
              required
            />
          </label>
          <br />
          <br />
          <label htmlFor="email">
            Email:{' '}
            <input
              type="email"
              name="email"
              id="email"
              placeholder="johndoe@email.com"
              autoComplete="email"
              onChange={handleChangeName}
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
              required
            />
          </label>
          <br />
          <br />
          <label htmlFor="message">
            Message:{' '}
            <textarea
              id="message"
              name="message"
              cols="5"
              rows="3"
              placeholder="Hi, I would like to talk about..."
              onChange={handleChangeName}
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
              required
            />
          </label>
          <br />
          <br />
        </form>
        <br />
        <br />
      </Layout>
    </>
  );
};

export default IndexPage;
