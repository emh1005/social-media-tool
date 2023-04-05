import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


const ContentCreationTool = () => {
  const [platform, setPlatform] = useState('');
  const [content, setContent] = useState('');
  const [topic, setTopic] = useState('');

  const API_KEY = process.env.API_KEY;
  const allElements = platform && topic;

  const handlePlatformChange = (event) => {
    setPlatform(event.target.value);
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

  const handleTopic = (event) => {
    setTopic(event.target.value);
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




  //   try {
  //     // Make a request to the OpenAI API
  //     const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
  //       method: 'POST',
  //       prompt: `Generate a content template for ${platform}`,
  //       max_tokens: 100
  //     }, {
  //       headers: {
  //         'Authorization': 'Bearer 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',
  //         'Content-Type': 'application/json'
  //       }
  //     });

  //     // Extract the generated template from the API response
  //     const generatedTemplate = response.data;
  //     setContentTemplate(generatedTemplate);
  //   } catch (error) {
  //     console.error('Failed to generate content template:', error);
  //   }
  // }
    // try {
    //const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer ${API_KEY}`},
  //       },
  //       body: JSON.stringify({
  //         prompt: 'Write an Instagram caption:',
  //         max_tokens: 50,
  //       }),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Failed to generate content');
  //     }

  //     const data = await response.json();
  //     setContentTemplate(data.choices[0].text);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // function FormRow() {
  //   return (<>
  //     <Grid item xs={6}>
  //       <FormControl>
  //         <FormLabel id="demo-row-radio-buttons-group-label"> Choose Platform:</FormLabel>
  //         <RadioGroup
  //           row
  //           aria-labelledby="demo-row-radio-buttons-group-label"
  //           name="row-radio-buttons-group"
  //         >
  //           <FormControlLabel value="facebook" control={<Radio />} label="Facebook" onChange={handlePlatformChange} />
  //           <FormControlLabel value="twitter" control={<Radio />} label="Twitter" onChange={handlePlatformChange}/>
  //           <FormControlLabel value="instagram" control={<Radio />} label="Instagram" onChange={handlePlatformChange}/>
  //         </RadioGroup>
  //       </FormControl>
  //     </Grid>
  //     <Grid item xs={6}>
  //       <TextField id="standard-basic" label="Enter a topic for your post" variant="standard" onInput={handleTopic}/>
  //     </Grid>
  //     <Grid item xs={6}>
  //       <Button variant="contained" id="gen-button" onClick={handleGenerateTemplate} disabled={!allElements}>Generate Template</Button>
  //     </Grid>
  //     </>);
  // }
  

  return (
    <div className='main-grid'>
      {/* <h1>Social Media Content Creation Tool</h1> */}
      {/* <select value={platform} onChange={handlePlatformChange}>
        <option value="">Select a platform</option>
        <option value="Facebook">Facebook</option>
        <option value="Instagram">Instagram</option>
        <option value="Twitter">Twitter</option>
      </select> */}
      {/* <TextField id="standard-basic" label="Enter a topic for your post" variant="standard" />
      <br /> */}
      {/* <Box sx={{ display: 'flex', gap: 2 }}>
      <Radio
        checked={platform === 'Facebook'}
        onChange={handlePlatformChange}
        value="Facebook"
        name="radio-buttons"
        slotProps={{ input: { 'aria-label': 'A' } }}
      />
      <Radio
        checked={platform === 'Twitter'}
        onChange={handlePlatformChange}
        value="Twitter"
        name="radio-buttons"
        slotProps={{ input: { 'aria-label': 'B' } }}
      />
    </Box> */}
    {/* <Grid
      container 
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
      >
      <Grid item xs={12}>
        <Typography variant="h3" component="h1" marginBottom={4}>
          Social Media Content Creation Tool
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label"> Choose Platform:</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="facebook" control={<Radio />} label="Facebook" onChange={handlePlatformChange} />
            <FormControlLabel value="twitter" control={<Radio />} label="Twitter" onChange={handlePlatformChange}/>
            <FormControlLabel value="instagram" control={<Radio />} label="Instagram" onChange={handlePlatformChange}/>
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <TextField id="standard-basic" label="Enter a topic for your post" variant="standard" onInput={handleTopic}/>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" id="gen-button" onClick={handleGenerateTemplate} disabled={!allElements}>Generate Template</Button>
      </Grid>
      {content && (
      <Grid item xs={12} marginTop={6}>
        <Box sx={{ 
            p: 2, 
            border: '0.5px dashed grey',
            maxWidth: '75%',
            margin: 'auto'
          }}>
          <Typography variant="h5" component="h2">
            Generated Content Template:
          </Typography>
          <Typography variant="body1" gutterBottom>
              {content}
          </Typography>
        </Box>
      </Grid>)}
    </Grid> */}


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
            maxWidth: '75%',
            margin: '20px auto',
            textAlign: 'left'
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

      {/* {content && (
      <Grid item xs={12} marginTop={6}>
        <Box sx={{ 
            p: 2, 
            border: '0.5px dashed grey',
            maxWidth: '75%',
            margin: 'auto'
          }}>
          <Typography variant="h5" component="h2">
            Generated Content Template:
          </Typography>
          <Typography variant="body1" gutterBottom>
              {content}
          </Typography>
        </Box>
      </Grid>)} */}
    </Grid>




    {/* </Grid> */}
{/* 
    <Grid>
      <Grid item xs={12}>
        <Typography variant="h5" component="h2">
          Generated Content Template:
        </Typography>
      </Grid>
      <Grid item xs={12}>
    <Typography variant="body1" gutterBottom>
        {content}
    </Typography>
    </Grid>
    </Grid> */}



      {/* <Button variant="contained" id="gen-button" onClick={handleGenerateTemplate}>Generate Template</Button> */}
      {/* <button onClick={handleGenerateTemplate}>Generate Template</button> */}
      {/* {content && (<BasicTabs content={content}/>)} */}
      {/* {contentTemplate && (
        <div>
          <h2>Generated Content Template:</h2>
          <p>{contentTemplate}</p>
        </div>
      )} */}
    </div>
  );
}

export default ContentCreationTool;
