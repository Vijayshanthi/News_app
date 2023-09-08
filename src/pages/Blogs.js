import React from 'react';
import Headline from '../components/Headline';
import Articles from '../components/Articles';
import { Grid } from '@mui/material';

const Blogs = () => {
  return (
    <div>
      <Grid container ><Grid item xs={2}></Grid><Grid item xs={8}><Headline
        imageUrl="https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2023/09/06121713/0cae5c5bc9.jpg"
        title="A few words about this blog platform, Ghost, and how this site was made"
        description="Why Ghost (& Figma) instead of Medium, WordPress or other options?"
      />
        <hr />      <Articles />
      </Grid><Grid item xs={2}></Grid></Grid>


    </div>
  );
};

export default Blogs;
