// src/pages/Articles.js
import React from 'react';
import { useState } from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

// Example data for articles

const ArticleContainer = styled('div')({
  textAlign: 'center',
  padding: '10px',
});

const BoldTitle = styled(Typography)({
  fontWeight: 'Bold',
  textAlign: 'center', 
});

const ArticlesPerPage = 6; // Number of articles to display per page

const PaginationContainer = styled('div')({
  marginTop: '20px',
  textAlign: 'center',
});

const PaginationButton = styled(Button)({
  margin: '0 5px',
  backgroundColor: 'white',
  color:'black',
  '&:hover': {
    backgroundColor: 'black', // Change background color on hover
    color: 'white',},
   // Adjust the margin to control the space between buttons
});

const Articles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [articles, setarticles] = useState([])
  React.useEffect(() => {
    fetchApi_list()
    
  }, [])
  const fetchApi_list = () => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-08-07&sortBy=publishedAt&apiKey=ef20d6ed14a14b329904621f3c98412b')
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
            setarticles(json.articles              );
        })
        .catch((error) => console.error(error));
};
  // Calculate the index range for the current page
  const indexOfLastArticle = currentPage * ArticlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - ArticlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);


  // Handle page change
  const handlePageChange = (totalPages) => {
    setCurrentPage(totalPages);
  };

  // Generate an array of page numbers
  const pageNumbers = Array.from({ length: currentPage }, (_, index) => index + 1);

  return (
    <>
    <Container>
      <BoldTitle variant="h6">All articles</BoldTitle>
      <Grid container spacing={2}>
        {currentArticles.map((article) => (
          <Grid item xs={12} sm={6} md={6} key={article.id}>
            <ArticleContainer>
              <img src={article.urlToImage} alt={article.title} width="100%" />
              <BoldTitle variant="h6">{article.title}</BoldTitle>
            </ArticleContainer>
          </Grid>
        ))}
      </Grid><br/><br/>
      <PaginationContainer>
        <PaginationButton
          variant="outlined"
          onClick={() => handlePageChange(currentPage - 1)}


          disabled={currentPage === 1}
        >
          Previous
        </PaginationButton>
        {pageNumbers.map((pageNumber) => (
          <PaginationButton
            key={pageNumber}
            variant={currentPage === pageNumber ? 'contained' : 'outlined'}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </PaginationButton>
        ))}
        <PaginationButton
          variant="outlined"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === pageNumbers}
        >
          Next
        </PaginationButton>
      </PaginationContainer>
    </Container></>
  );
};

export default Articles;