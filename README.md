# Social Media Content Creation Tool
The Social Media Content Creation Tool is a React-based web application that allows users to generate templates for social media posts based on the platform and topic of their choice. The application makes use of the OpenAI API to generate the content for the templates.

The web app is deployed online and accessible at https://emh1005.github.io/social-media-tool/.

## Installation:
To install and use the Social Media Content Creation Tool, follow these steps:

1. Clone the repository from GitHub to your local machine
2. Install dependencies using `npm install`
3. Create a `.env` file in the root directory and add your OpenAI API key as `REACT_APP_API_KEY=your-api-key`
4. Run `npm start` to start the development server and launch the application in a browser

## Usage:
To use the Social Media Content Creation Tool, follow these steps:

1. Select a platform (Facebook, Twitter, or Instagram)
2. Enter a topic for your post in the text field
3. Click the "Generate Content" button to generate suggested content and hashtags for your post
4. The generated content template will appear on the right side of the screen
5. Copy and paste the template into your social media post and customize it as needed

## Code Structure
The Social Media Content Creation Tool project is built with React and follows best practices for modularizing React code.

An overview of the project's file structure is as follows:
```
├── package.json
├── public
│   ├── index.html
├── README.md
└── src
    ├── contentCreationTool.js
    ├── index.css
    ├── index.js
    ├── reportWebVitals.js
    └── setupTests.js
```
* `public/index.html`: the main HTML file for the project; it contains the root div element where the React app is mounted
* `src/index.js`: the entry point of the project; it renders the ContentCreationTool component and wraps it in a ThemeProvider component from Material-UI to provide a custom theme
* `src/ContentCreationTool.js`: This file contains the main logic of the project; it uses state hooks to manage the form data and generated content and defines the UI components using Material-UI
* `src/index.css`: contains the global styles for the project
* `package.json`: contains the project's dependencies and scripts
* `README.md`: contains information about the project

## Architecture and Design:
The Social Media Content Creation Tool is a project that is built using React and styled using the Material-UI library. The code is structured using functional components and utilizes the "useState" hook to maintain form data state for the "platform" and "topic" inputs. The "handleInputChange" function is responsible for updating these variables as the user selects a platform and enters a topic.

The project's UI is constructed using pre-built components from Material-UI, including the "Grid" component for form element layout, the "RadioGroup", "Radio", and "FormControlLabel" components to provide platform selection options, and the "TextField" component is used to capture the user's topic input.

To generate suggested content and hashtags, the "generateContent" function takes the selected platform and topic as inputs and passes them to the OpenAI API. The returned content and hashtags are then displayed on screen.

The Social Media Content Creation Tool provides a user-friendly interface for generating content ideas and hashtags, making it a valuable asset for individuals and businesses seeking to improve their social media presence.

## Credits
This application was created by Emily Huang. It uses the OpenAI GPT-3 API to generate the content templates, and the Material-UI library for styling.

## License
This project is licensed under the MIT License.
