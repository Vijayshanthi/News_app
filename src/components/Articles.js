import React from "react";
import { useState } from "react";
import { Container, Grid, Typography, } from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";
import "./Articles.css"; // Import your CSS file


const ArticleContainer = styled("div")({
  textAlign: "center",
  padding: "10px",
});

const BoldTitle = styled(Typography)({
  fontWeight: "Bold",
  textAlign: "center",
});

const ArticlesPerPage = 6; // Number of articles to display per page


const Articles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [articles, setarticles] = useState([]);
  const navigate = useNavigate();

  const fetchApi_list = () => {
    axios
      .get("https://app.apicem.io/api//users/news", {
        headers: {
          accesstoken:
            "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoVHlwZSI6InVzZXJzIiwidG9rZW4iOiJTZFYxN3NDWWtCIiwiaWF0IjoxNjk0NDE2MjA0fQ.HCkXif_Xbsvn9ypJfHSeZCx4z6O3ukGx4C_6bz_EcYrYqZw-nK3NtkCJkqBn4jlPDHF58hqbbo1AY_FF1VEDgv6uZNlqV81_YDk5E8cyTlzfaZ0VSdAo0lD-nL858gCAyywhyH4Ci67PyOO8h_17IngYK4lNNGeQi2IspCrzlT4",
        },
      })
      .then((json) => {
        if (!json.data.error) {
          setarticles(json.data.data);
        }
      })
      .catch((error) => console.error(error));
  };
  // Calculate the index range for the current page
  const indexOfLastArticle = currentPage * ArticlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - ArticlesPerPage;
  const currentArticles =
    articles && articles.length > 0
      ? articles.slice(indexOfFirstArticle, indexOfLastArticle)
      : [];

  // Handle page change
  const handlePageChange = (totalPages) => {
    setCurrentPage(totalPages);
  };

 
  React.useEffect(() => {
    fetchApi_list();
  }, []);

  return (
    <>
    <Container className="container">
        <BoldTitle variant="h6">All articles</BoldTitle>
        <Grid container spacing={2}>{console.log(currentArticles)}
          {currentArticles.map((article,index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <ArticleContainer>
                <img
                  src={article.image}
                  alt={'article'}
                  width="100%"
                  onClick={()=>{navigate(`/blogdetails/${index}`)}}
                />
                <BoldTitle variant="h6">{article.headline}</BoldTitle>
              </ArticleContainer>
            </Grid>
          ))}
        </Grid>
        <br />
        <br />
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(articles.length/ArticlesPerPage)}
          onPageChange={(page)=>handlePageChange(page)}
        />   </Container>
    </>
  );
};

export default Articles;
