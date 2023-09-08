import React from 'react';
import { Typography, Link, } from '@mui/material';
import { styled } from '@mui/system';

const FooterContainer = styled('footer')({
  backgroundColor: 'black',
  color: 'white',
  padding: '25px',
  textAlign: 'center',
  left: 0,
  bottom: 0,
  width: '100%',
});

const BoldMenuItem = styled('span')({
  fontWeight: 'bold',
  '&:not(:last-child)': {
    marginRight: '40px', // Adjust this value to control the spacing between items
  },
});
const ExtraSpacing = styled('span')({
  marginRight: '40px', // Add extra spacing here between "Remote work" and "UX design"
});

const UnderlineLink = styled(Link)({
  textDecoration: 'underline',
});

const CenteredContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexWrap: 'wrap',
  width: '100%',
  marginBottom:'20px',
});
const CenteredSocialLinks = styled('div')({
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  flexWrap: 'wrap',
  width: '100%',
  color: 'white',
  '& a' :{
    margin:'-100px'}
});

const Footer = () => {
  return (
    <FooterContainer>
      <CenteredContainer>
        <Typography variant="subtitle1" >
          <BoldMenuItem> Digital </BoldMenuItem>
           <BoldMenuItem> product </BoldMenuItem>
           <BoldMenuItem> design</BoldMenuItem>
           <ExtraSpacing>Remote work</ExtraSpacing>
          <BoldMenuItem>UX design</BoldMenuItem>
          <ExtraSpacing>Distributed teams</ExtraSpacing>
          <BoldMenuItem>Creativity</BoldMenuItem>
          <ExtraSpacing>Strategy</ExtraSpacing>
          <BoldMenuItem>Suspense</BoldMenuItem>
          <ExtraSpacing>Growth</ExtraSpacing>
        </Typography>
      </CenteredContainer><br/>
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
      </Typography><br/>
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
      </CenteredSocialLinks><br/><br/>
      <Typography variant="body2">
        © 2012–2020 Nordic Rose Co. All rights reserved.
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
