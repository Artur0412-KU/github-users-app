import React from 'react'
import Card from '@mui/material/Card';
import { Button, CardContent, CardMedia, Link, Typography } from '@mui/material';
import { Star, StarOutlineOutlined } from '@mui/icons-material';
import style from '../Main.module.css';

export default function CardUser({userData}) {
  return (
    <div>
      <Card key={userData.id} className={style.card}>
        <CardMedia component="img"
          height="100" image={userData.avatar_url} alt={userData.login}
        />
        <CardContent className={style.cardContent}>
          <h3 className={style.loginTitle}>
            {userData.login}
          </h3>
          <h1>{userData.name}</h1>
          <Link href = {userData.blog} target = "_blank" className={style.blogLink}>{userData.blog}</Link>
          <h3>
            {userData.email}
          </h3>

          <div className={style.starsContainer}>
            <div className={style.starItem}>
              <Star color="primary" />
              <h2>
              {userData.followers}
              </h2>
            </div>
            
            <div className={style.starItem}>
              <StarOutlineOutlined color="primary"/>
              <h2>
               {userData.following}
              </h2>
            </div>
            
          </div>
          <div className={style.buttonContainer}>
            <Button href={userData.html_url} target="_blank" className={style.button}>See more</Button>
          </div>
          
        </CardContent>
      </Card>
    </div>
  )
}
