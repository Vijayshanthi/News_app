import React from "react";
import Headline from "../components/Headline";
import Articles from "../components/Articles";
import { Grid } from "@mui/material";

function Blogs() {
  return (
    <div>
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Headline
            imageUrl="https://playerzpot.com/blog/wp-content/uploads/2020/04/Cover-13-1080x630.jpg"
            title="Dhoni finishes off in style! India lift the world cup "
            description="screamed Ravi Shastri on air. Dhoni just tweaked his elbow.        "
          />
          <hr />
           <Articles />
         
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </div>
  );
}

export default Blogs;
