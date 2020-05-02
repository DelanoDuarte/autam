# Autam App
### This is a opens source project with the objective to avoid the usage of real documents files. The main ideia is use the use the app in public or private organizations to handle the communication between organization/person to send and receive the documents request and response.(In development)

## Stack
### Backend
- Node JS - 10.16.3
- NPM - 6.4.1
- Express - 4.17.1
  
### Frontend
- React - 16.13.1
- Axios - 0.19.2
- Material-UI - 4.9.12 

### Database
- Sequelize - 5.21.6
  
### Test
- Jest - 25.4.0 **(Backend)** 
- SuperTest - 4.0.2 **(Backend)**
- Jest - **(Frontend. Integrated with React)**

## Setup
### Client
Navigate to the **view** folder and using **npm** install all dependencies using the following command:

`npm install`

After downloading all dependencies, use the following command to run the **frontend**:

`npm start`

### Server
use **npm** install all dependencies with the following command:

`npm install`

After downloading all dependencies, use the following command to run the **backend**:

`npm start`

If you have nodemon installed in your environment, you can use for hot reload, using the command:

`nodemon`


### Alternative way
You can also run both projects **frontend** and **backend**, using [concurrently](https://www.npmjs.com/package/concurrently), performing the following command:

`npm run dev`

### Run tests
From the **server** folder, perform the following command to run unit tests:

`npm test`