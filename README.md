# Tech Report


<p>
    <img src="https://img.shields.io/github/repo-size/rush0218/tech-report" />
    <img src="https://img.shields.io/github/languages/top/rush0218/tech-report"  />
    <img src="https://img.shields.io/github/last-commit/rush0218/tech-report" />
</p>


## Description

Full-stack application for tech related blogging.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)


## Installation 

- `git clone` this repository locally. 
- Run `npm init --y` to install necessary node dependencies. 
- Run `npm i mysql2` to install MySQL2 to connect to database. 
- Run `npm i express` 
- Run `npm i express-handlebars` 
- Run `npm i bcrypt` for password authentication
- Run `npm i sequelize` to connect your Express.js API to your MySQL database.
- Run `npm i dotenv` to use environment variables to store sensitive data.

## Usage 

When the application is installed, open the MySQL shell and input `source db/schema.sql` & `use tech_report_db` then close shell. In the terminal input `npm run seed` (be sure to create a seed script in package.json) followed by `npm start` or `node server.js` to initiate application. 

## Link 




## License

![Badge](https://img.shields.io/badge/license-MIT-green). 

## Contributing

Made with ❤️ by [Tre'](https://github.com/Rush0218) 
