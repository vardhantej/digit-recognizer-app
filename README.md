# About the project
This is a digit recognizer app which uses a Convolutional Neural Network (built using tensorflow 2.0 and keras) to predict digits drawn by the user on the canvas. \
The CNN model: \
The model was built using tensorflow 2.0 and keras and was trained and tested on MNIST dataset which consisted of 60,000 (28x28) images in the training set and 10,000 (28x28) images in the test set. The API for the model was built using Flask web framework and it was deployed on Heroku. The API uses OpenCV to implement image pre-processing for the model.\
The Web App:\
The App was built using React and Material UI and allows users to draw images on the canvas and get the corresponding CNN prediction. The app makes API calls to the deployed CNN model API using Axios and was deployed on the web using Netlify.

# Sample Output Screenshots
<p align="center">
<img src="https://github.com/vardhantej/digit-recognizer-app/blob/main/CNN%20Prediction%20SS/ss_prediction_0.JPG" width="200" height="280">
<img src="https://github.com/vardhantej/digit-recognizer-app/blob/main/CNN%20Prediction%20SS/ss_prediction_1.JPG" width="200" height="280">
<img src="https://github.com/vardhantej/digit-recognizer-app/blob/main/CNN%20Prediction%20SS/ss_prediction_2.JPG" width="200" height="280">
<img src="https://github.com/vardhantej/digit-recognizer-app/blob/main/CNN%20Prediction%20SS/ss_prediction_3.JPG" width="200" height="280">
<img src="https://github.com/vardhantej/digit-recognizer-app/blob/main/CNN%20Prediction%20SS/ss_prediction_4.JPG" width="200" height="280">
<img src="https://github.com/vardhantej/digit-recognizer-app/blob/main/CNN%20Prediction%20SS/ss_prediction_5.JPG" width="200" height="280">
<img src="https://github.com/vardhantej/digit-recognizer-app/blob/main/CNN%20Prediction%20SS/ss_prediction_6.JPG" width="200" height="280">
<img src="https://github.com/vardhantej/digit-recognizer-app/blob/main/CNN%20Prediction%20SS/ss_prediction_7.JPG" width="200" height="280">
<img src="https://github.com/vardhantej/digit-recognizer-app/blob/main/CNN%20Prediction%20SS/ss_prediction_8.JPG" width="200" height="280">
<img src="https://github.com/vardhantej/digit-recognizer-app/blob/main/CNN%20Prediction%20SS/ss_prediction_9.JPG" width="200" height="280">
</p>


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
