// src/components/Navigation.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Navigation.css';
import { getTheData } from '../utils/client';

const Navigation = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isNavVisible, setNavVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const username = 'admin';
      const password = 'admin';
      const encodedCredentials = btoa(`${username}:${password}`);
      const endpoint = 'http://localhost:4502/graphql/execute.json/perficientpocs/get-logo-and-nav-links';
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${encodedCredentials}`,
      };

      try {
        const result = await getTheData(endpoint, headers, true);
        setData(result);
        console.log(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const toggleNav = () => {
    setNavVisible((prevNavVis) => !prevNavVis);
  }

  return (
    <nav className="app-navigation">
      <section className="logo-mobile-container">
        <div className="brand">
          <Link to="/" aria-label="Go to the home page" className="logo link">
            <img
              src={"http://localhost:4502" + data.data.navigationCfModelList.items[0].brandLogo._path}
              width='140'
              height='45'
              alt="Logo"
            />
          </Link>
        </div>
        <div className="nav-icons">
          <button
            onClick={toggleNav}
            id="mobile-nav"
            aria-label="Mobile navigation"
            aria-expanded="false"
            className="mobile-nav"
          >
            <svg className="mobile-nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M0 84V44c0-8.837 7.163-16 16-16h416c8.837 0 16 7.163 16 16v40c0 8.837-7.163 16-16 16H16c-8.837 0-16-7.163-16-16zm16 144h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 256h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0-128h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
            </svg>
          </button>
        </div>
      </section>

      <ul id="app-menu" className="app-menu" style={{ display: isNavVisible ? 'block' : 'none' }}>
        <ul>
          <li className="app-menu-item">
            <Link to="/Profile" className="app-menu-link link">Your Profile</Link>
          </li>
          <li className="app-menu-item">
            <Link to="/Support" className="app-menu-link link">Support</Link>
          </li>
          {data.data.navigationCfModelList.items[0].generatedNavigationList.map((item) => (
            <li className="app-menu-item" key={item.id}>
              <Link to={item.path} className="app-menu-link" style={{ textDecoration: 'none' }}>{item.title}</Link>
            </li>
          ))}
          <li className="app-menu-item">
            <Link to="/Feedback" className="app-menu-link link">Give Feedback</Link>
          </li>
        </ul>
      </ul>
    </nav>
  );
};

export default Navigation;