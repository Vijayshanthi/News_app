import React from 'react';
import Headline from '../components/Headline';
import Articles from '../components/Articles';
import { Grid } from '@mui/material';

const Blogs = () => {
  return (
    <div>
      <Grid container ><Grid item xs={2}></Grid><Grid item xs={8}><Headline
        imageUrl="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_800/https://allnigeriainfo.ng/wp-content/uploads/2019/02/iDONSABI_headline-800x445-2.jpg"
        title="A few words about this blog platform, Ghost, and how this site was made"
        description="Why Ghost (& Figma) instead of Medium, WordPress or other options?"
      />
        <hr />      <Articles />
      </Grid><Grid item xs={2}></Grid></Grid>


    </div>
  );
};

export default Blogs;
