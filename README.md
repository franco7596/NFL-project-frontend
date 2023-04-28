## NFL Back-End project
This project is a front-end application built with React.js written in TypeScript. It uses React-Router, Redux, and Redux-Saga for state management, and Axios to make requests to the back-end of the application. Jest and React-Testing-Library were also used to perform unit tests on the application, ensuring its quality and proper functioning.

The front-end application allows users to view all the NFL teams and players that were scraped from the official website and stored in a PostgreSQL database. Users can view player statistics and their positions on the field, as well as filter them by name or state and sort them by age or experience. Teams can also be filtered by name or division and sorted by their establishment date or their number of wins.

The front-end application has a control section that enables a special request to be made to the back-end. This request is protected using JWT, which is obtained by logging in. The request triggers an update of the application's data by activating a request to scrapy to update the database.

This application is aesthetically pleasing and user-friendly, making it enjoyable for users to navigate. It is deployed on Vercel.

## Video

![NFL_AdobeExpress](https://user-images.githubusercontent.com/54074366/235224509-2cc384da-664d-4495-86e6-eaac4e5e4d26.gif)


## Running this project.

- Open Git terminal.

- Change the current working directory to the location where you want to clone the directory. cd project

- Type git clone followed by the project URL.

- git clone https://github.com/franco7596/NFL-project-frontend.git

- Press Enter to create your local clone.

> $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY Cloning into Spoon-Knife... remote: Counting objects: 10, done. remote: Compressing objects: 100% (8/8), done. remove: Total 10 (delta 1), reused 10 (delta 1) Unpacking objects: 100% (10/10), done.

- Install all necessary dependencies inside the project directory using npm install.

## The link to the webpage.:

[NFL](https://ribotta-franco-nfl.vercel.app/)

## My social media:

- [GitHub](https://github.com/franco7596)

- [Linkedin](https://www.linkedin.com/in/franco-ribotta-274a211b0/)
