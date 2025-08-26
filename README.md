# auth-login-postgre
handle auth login and sign up using react js express windicss and postgreSQL for database 
read this for detailed project : https://medium.com/@zenahmad06/handle-login-and-register-cookie-based-30067e3d9ffb

# POSTGREE SQL

## 1. INSTALLING POSTGREESQL

- visit this link : https://www.enterprisedb.com/downloads/postgres-postgresql-downloads
- download it and then install

## CONNECT POSTGRESQL VIA VS CODE

- Install the extension "PostgreSQL by microsoft"
- and then cntrl+shift+P, and write "new connection" and fill this in each input form
	- hostname : for local you can write "localhost"
	- USER : postgres
	- Database : postgres
	- password : pasword that you fill in the installing process before
	- port : the default is 5432 or based on port that you use in installing process

- Dont forget to running the server first, by go to service.msc and the search postgree server and activate the server

## make a file .sql

- make a file with sql format , you can run the code by click run or shift + enter


## 2. Installing express.js

In the root of folder, you write this ini terminal 

```bash
npm install -g express-generator
```

and then write this

```bash
express nam_folder_that_you_want_use
```

and cd into the new folder that you just created using this code, after that write npm install

```bash
cd name_folder
npm install
```
