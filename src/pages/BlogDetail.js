import React, { useState } from "react";
import NewsletterSignup from "../components/NewsletterSignup";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Grid } from "@mui/material";


const BlogDetail = () => {
  const [article, setarticle] = useState({});

  let { id } = useParams();
  const fetchApi_list = () => {
    axios
      .get("http://localhost:3000/users", {
       /* headers: {
          accesstoken:
            "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoVHlwZSI6InVzZXJzIiwidG9rZW4iOiJTZFYxN3NDWWtCIiwiaWF0IjoxNjk0NDE2MjA0fQ.HCkXif_Xbsvn9ypJfHSeZCx4z6O3ukGx4C_6bz_EcYrYqZw-nK3NtkCJkqBn4jlPDHF58hqbbo1AY_FF1VEDgv6uZNlqV81_YDk5E8cyTlzfaZ0VSdAo0lD-nL858gCAyywhyH4Ci67PyOO8h_17IngYK4lNNGeQi2IspCrzlT4",
        },*/
      })
      .then((json) => {
        if (!json.data.error) {
          setarticle(json.data.find((item)=>item.id==id));
        }
      })
      .catch((error) => console.error(error));
  };
  React.useEffect(() => {
    console.log('working')
    fetchApi_list();
  }, [id]);

  return (
    <Grid container>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
  {article?     
   <div className="blog-detail">
          <img src={article.image} alt={"headline"} />

          <div className="blog-content">
            <h1>{article.Headlines}</h1>
            <p>{new Date(article.updated_at).toLocaleDateString()}</p>

            <p>{article.summary}</p>

            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <h4>{article.description}</h4>
            </a>
          </div>

          {/* Newsletter Component */}
          <div className="newsletter">
            <NewsletterSignup />
          </div>
        </div>:<p>No Data Found</p>}
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default BlogDetail;
