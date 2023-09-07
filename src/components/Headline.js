import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const HeadlineContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  padding: '16px', marginBottom: '10px'
});

const HeadlineImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
});

const BoldTitle = styled(Typography)({
  fontWeight: 'bold',
});

const Headline = ({ imageUrl, title, description }) => {
  return (
    <HeadlineContainer>
      <HeadlineImage src={imageUrl} alt="Headline" />
      <Box mt={2}>
        <BoldTitle variant="h4">{title}</BoldTitle>
      </Box>
      <Typography variant="body1">{description}</Typography>
    </HeadlineContainer>
  );
};

export default Headline;
