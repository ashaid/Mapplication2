## Overview
This application is a sequel to a previous project worked on by me called ![PB-JAW](https://github.com/ashaid/PB-JAW) (view the repo). 

<p align="center" width="100%">
    <img width="33%" src="https://github.com/ashaid/Mapplication2/assets/65536687/53045fb2-3e4b-4209-9a35-773a7ae39523">
</p>
![App Demo](https://github.com/ashaid/Mapplication2/assets/65536687/53045fb2-3e4b-4209-9a35-773a7ae39523)


https://github.com/ashaid/Mapplication2/assets/65536687/2a45ad2d-818b-4f1b-bef3-2431037588cb




# Key Differences
The backend was refactored to be deployed to AWS Lambda connected to AWS API Gateway to provide REST endpoints for the frontend. The frontend has been completely overhauled and written in React Native. The backend takes the given text input and draws on a map of the selected building using a fastest path algorithim with a custom built node navigation model. The app then transcodes the image into base64 to be sent over to the GET endpoint, it is then translated back to an image for the user. The frontend includes a login page, a screen to enter your starting and ending locations, a custom loading animation and the images returned from the REST endpoints.  

# How To Start

git pull https://github.com/ashaid/Mapplication2.git

npm/yarn install

expo start

# Testing

npm test
