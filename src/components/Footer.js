import React from 'react';
import { Typography, Link, Grid } from '@mui/material';
import { styled } from '@mui/system';

const FooterContainer = styled('footer')({
  backgroundColor: 'black',
  color: 'white',
  padding: '16px',
  textAlign: 'center',
  left: 0,
  bottom: 0,
  width: '100%',
});

const BoldMenuItem = styled('span')({
  fontWeight: 'bold',
});

const UnderlineLink = styled(Link)({
  textDecoration: 'underline',
});

const CenteredContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexWrap: 'wrap',
  width: '100%'
});
const CenteredSocialLinks = styled('div')({
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  flexWrap: 'wrap',
  width: '100%',
  color: 'white'
});

const Footer = () => {
  return (
    <FooterContainer>
      <CenteredContainer>
        <Typography variant="subtitle1" >
          <BoldMenuItem>Digital product design</BoldMenuItem>
          Remote work
          <BoldMenuItem>UX design</BoldMenuItem>
          Distributed teams
          <BoldMenuItem>Creativity</BoldMenuItem>
          Strategy
          <BoldMenuItem>Suspense</BoldMenuItem>
          Growth
        </Typography>
      </CenteredContainer>
      <Typography variant="h6" gutterBottom>
        NORDIC ROSE
      </Typography>
      <Typography variant="body2">
        <div style={{ lineHeight: '1.5' }}>
          Lorem ipsum dolor sit amet,
        </div>
        <div style={{ lineHeight: '1.5' }}>
          consectetur adipiscing elit.
        </div>
        <div style={{ lineHeight: '1.5' }}>
          Duis eu velit tempus erat egestas efficitur.
        </div>
      </Typography>
      <CenteredSocialLinks>
        <Typography variant="subtitle1">
          <UnderlineLink href="#">Twitter</UnderlineLink>
        </Typography>
        <Typography variant="subtitle1">
          <UnderlineLink href="#">LinkedIn</UnderlineLink>
        </Typography>
        <Typography variant="subtitle1">
          <UnderlineLink href="#">RSS</UnderlineLink>
        </Typography>
      </CenteredSocialLinks>
      <Typography variant="body2">
        © 2012–2020 Nordic Rose Co. All rights reserved.
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
