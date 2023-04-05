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
  const [platform, setPlatform] = useState('');
  const [topic, setTopic] = useState('');
  const [content, setContent] = useState('');

  const API_KEY = process.env.REACT_APP_API_KEY;
  const allElements = platform && topic;

  const handlePlatformChange = (event) => {
    setPlatform(event.target.value);
  }

  const handleTopic = (event) => {
    setTopic(event.target.value);
  }

  const APIBODY = {
    model: 'text-davinci-003',
    prompt: `Write an ${platform} about ${topic}.`,
    temperature: 0.7,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0
  }
  
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
      console.log(data);
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
        direction="row"
        alignItems="flex-start"
        justifyContent="center"
        height="50vh"
        >
        <Grid item xs={12}>
          <Typography variant="h3" component="h1" sx={{ color: '#633b87'}}>
            Social Media Content Creation Tool
          </Typography>
        </Grid>
        <Grid 
          container
          item
          spacing={2}
          direction="column"
          xs={6}>
          <Grid item>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label"> Choose Platform:</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="Facebook post" control={<Radio />} label="Facebook" onChange={handlePlatformChange} />
              <FormControlLabel value="tweet" control={<Radio />} label="Twitter" onChange={handlePlatformChange}/>
              <FormControlLabel value="Instagram caption" control={<Radio />} label="Instagram" onChange={handlePlatformChange}/>
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item>
          <TextField id="standard-basic" label="Enter a topic for your post" variant="standard" onInput={handleTopic}/>
        </Grid>
        <Grid item>
          <Button variant="contained" id="gen-button" onClick={handleGenerateTemplate} disabled={!allElements}>Generate Template</Button>
        </Grid>
        </Grid>
        <Grid 
          container
          item
          direction="column"
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
              variant="h6" 
              component="h2" 
              sx={{
                color: '#633b87', 
                textDecoration: 'underline .65px'
            }}>
              Generated Content Template:
            </Typography>
            </Grid>
            <Grid item>
            <Typography variant="body1" gutterBottom>
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
