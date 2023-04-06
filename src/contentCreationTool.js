import React, { useState } from 'react';
import {
  Button,
  TextField,
  Box,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Typography
} from '@mui/material';

const ContentCreationTool = () => {
  const [formData, setFormData] = useState({
    platform: '',
    topic: ''
  });
  const [content, setContent] = useState('');

  const API_KEY = process.env.REACT_APP_API_KEY;
  const allElements = formData.platform && formData.topic;

  // handle the input change for the form
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
    console.log(formData);
  }

  // API request body
  const APIBODY = {
    model: 'text-davinci-003',
    prompt: `Write an ${formData.platform} about ${formData.topic}.`,
    temperature: 0.7,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0
  }

  // request API for content
  const handleGenerateTemplate = async () => {
    await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${API_KEY}`
        },
      body: JSON.stringify(APIBODY)
    }).then(response => {
      return response.json()
    }).then((data) => {
      setContent(data.choices[0].text.trim());
    }).catch((error) => {
      console.error(error);
    });
  };

  return (
    <div className='main-grid'>
      <Grid
        container 
        spacing={2}
        direction='row'
        alignItems='flex-start'
        justifyContent='center'
        height='50vh'
        >
        <Grid item xs={12}>
          <Typography variant='h3' component='h1' sx={{ color: '#633b87'}}>
            Social Media Content Creation Tool
          </Typography>
        </Grid>
        <Grid 
          container
          item
          spacing={2}
          direction='column'
          xs={6}>
          <Grid item>
          <FormControl>
            <FormLabel> Choose Platform:</FormLabel>
            <RadioGroup
              row
              name='platform'
              value={formData.platform}
              onChange={handleInputChange}
            >
              <FormControlLabel value='Facebook post' control={<Radio />} label='Facebook' />
              <FormControlLabel value='tweet' control={<Radio />} label='Twitter' />
              <FormControlLabel value='Instagram caption' control={<Radio />} label='Instagram' />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item>
          <TextField
            id='standard-basic'
            label='Enter a topic for your post' 
            variant='standard' 
            name='topic' 
            value={formData.topic} 
            onChange={handleInputChange}/>
        </Grid>
        <Grid item>
          <Button
            id='gen-button'
            variant='contained' 
            onClick={handleGenerateTemplate} 
            disabled={!allElements}>
              Generate Template
          </Button>
        </Grid>
        </Grid>
        <Grid 
          container
          item
          direction='column'
          xs={6}
          spacing={2}>
          {content && (
            <Box sx={{ 
              p: 2, 
              border: '1px dashed #8244bd',
              width: '65%',
              margin: '20px',
              textAlign: 'left',
              minHeight: '130px'
            }}>
            <Grid item>
            <Typography 
              variant='h6' 
              component='h2' 
              sx={{
                color: '#633b87', 
                textDecoration: 'underline .65px'
            }}>
              Generated Content Template:
            </Typography>
            </Grid>
            <Grid item>
            <Typography variant='body1' gutterBottom>
                {content}
            </Typography>
            </Grid>
          </Box>)}
        </Grid>
      </Grid>
    </div>
  );
}

export default ContentCreationTool;
