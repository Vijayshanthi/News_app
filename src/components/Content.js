import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const ContentContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  padding: '16px', marginBottom: '10px'
});

const ContentImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
});

const BoldTitle = styled(Typography)({
  fontWeight:'Bold',
});

const Content = ({ imageUrl, title, description }) => {
  return (
    <ContentContainer>
      <ContentImage src={imageUrl} alt="Content" />
      <Box mt={2}>
        <BoldTitle variant="h6">{title}</BoldTitle>
      </Box>
      <Typography variant="body1">{description}</Typography>
    </ContentContainer>
  );
};

export default Content;
