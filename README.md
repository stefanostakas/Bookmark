# Bookmark: Basic Google Books API Implementation.

A web application built using HTML, JavaScript, CSS, Bootstrap, Node.js, Express framework and Handlebars that offers a user-friendly interface to the Google Books API, streamlining the search and display process for books. With a simple and intuitive search bar, users can quickly find and view detailed information about their desired books. The app also includes a feature for saving favorite books to a personal library, complete with HTTP requests (PUT, POST, DELETE) specifically implemented for the book objects in JSON format.
## Key Features
- Search books using keywords, author, title, or any relevant information
- Display detailed information about each book including title, author, description, and more
- Save favorite books to a personal library for easy access and reference
- User-friendly interface for browsing and searching books

## Technology Stack
The front-end of the application is built using HTML, CSS, JavaScript, and Bootstrap. The back-end is built using Node.js and Express framework. Handlebars is used for dynamic HTML rendering.

## Getting Started
To run the app, `npm run start` to run it or use the command `npm run dev` to run it with automatic update on changes. The app will run on port 8000, which can be changed in the `index.js` file.

## Limitations
Please note that the app saves books to a local file called "Books.js". If the server goes down, the saved books will be lost. This is because the app is a basic open-source implementation and is meant to be used as a starting point for building a more robust application.
