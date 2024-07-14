import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './Main.module.css';
import Search from './Search/Search';
import CardUser from './Card/CardUser';

export default function Main() {
  const [textValue, setTextValue] = useState("");
  const [userData, setUserData] = useState(null);

  const token = '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';

  useEffect(() => {
    const getUserData = async () => {
      if (textValue) {
        const githubAPI = `https://api.github.com/users/${textValue}`;
        console.log('Fetching data from:', githubAPI);
        try {
          const response = await axios.get(githubAPI, {
            headers: {
              Authorization: `token ${token}`
            }
          });
          console.log('Response data:', response.data);
          setUserData(response.data);
        } catch (err) {
          console.error('Error fetching user data:', err);
          setUserData(null);
        }
      }
    }
    getUserData();
  }, [textValue, token]);

  const handleSearch = newValue => {
    console.log('Search:', newValue);
    setTextValue(newValue);
  }

  return (
    <div className={style.main}>
      <div className={style.desc}>
        <h1 className={style.title}>GitHub Users Explorer</h1>
        <h3 className={style.subtitle}>Discover, Track GitHub Profiles with Ease</h3>
      </div>   
      <Search handleSearch={handleSearch} setTextValue={setTextValue} textValue={textValue} />
      {userData && <CardUser userData={userData} />}
    </div>
  )
}

