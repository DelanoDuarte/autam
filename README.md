# Autam App
### This is a opens source project with the objective to avoid the usage of real documents files. The main ideia is use the use the app in public or private organizations to handle the communication between organization/person to send and receive the documents request and response.(In development)

## Stack
### Backend
- Java - 1.8
- Spring Boot - 2.3.1.RELEASE
  
### Frontend
- React - 16.13.1
- Axios - 0.19.2
- Material-UI - 4.9.12 

### Database
- Sequelize - 5.21.6
  
### Test
- Junit - (Spring Embedded) **(Backend)** 
- Jest - **(Frontend. Integrated with React)**

## Setup
### Client
Navigate to the **frontend** folder and using **npm** install all dependencies using the following command:

`npm install`

After downloading all dependencies, use the following command to run the **frontend**:

`npm start`

### Server
use **mvn** install all dependencies with the following command:

`mvn install`

After downloading all dependencies, use the following command to run the **backend**:

`mvn spring-boot:run`


### Run tests
From the **frontend** folder, perform the following command to run unit tests:

`npm test`

From the **backend** folder, perform the following command to run unit tests:

`mvn test`
