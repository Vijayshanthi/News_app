// src/pages/Articles.js
import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';

// Example data for articles
const articles = [
  {
    id: 1,
    title: 'Here are some things you should know regarding how we work ',
    imageUrl: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_800/https://allnigeriainfo.ng/wp-content/uploads/2019/02/iDONSABI_headline-800x445-2.jpg',
  },
  {
    id: 2,
    title: 'Granny gives everyone the finger, and other tips from OFFF Barcelona',
    imageUrl: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_800/https://allnigeriainfo.ng/wp-content/uploads/2019/02/iDONSABI_headline-800x445-2.jpg',
  }, {
    id: 3,
    title: 'Hello world, or, in other words, why this blog exists',
    imageUrl: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_800/https://allnigeriainfo.ng/wp-content/uploads/2019/02/iDONSABI_headline-800x445-2.jpg',
  },
  {
    id: 4,
    title: 'Here are some things you should know regarding how we work ',
    imageUrl: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_800/https://allnigeriainfo.ng/wp-content/uploads/2019/02/iDONSABI_headline-800x445-2.jpg',
  },
  {
    id: 5,
    title: 'Connecting artificial intelligence with digital product design',
    imageUrl: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_800/https://allnigeriainfo.ng/wp-content/uploads/2019/02/iDONSABI_headline-800x445-2.jpg',
  },
  {
    id: 6,
    title: 'Its all about finding the perfect balance',
    imageUrl: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_800/https://allnigeriainfo.ng/wp-content/uploads/2019/02/iDONSABI_headline-800x445-2.jpg',
  },
  // Add more articles here
];

const ArticleContainer = styled('div')({
  textAlign: 'center',
  padding: '10px',
});

const BoldTitle = styled(Typography)({
  fontWeight: 'bold',
});

const Articles = () => {
  return (
    <Container>
      <BoldTitle variant="h6">All articles
      </BoldTitle>
      <Grid container spacing={2}>
        {articles.map((article) => (
          <Grid item xs={6} key={article.id}>
            <ArticleContainer>
              <img src={article.imageUrl} alt={article.title} width="75%" />
              <BoldTitle variant="h6">{article.title}</BoldTitle>
            </ArticleContainer>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Articles;
