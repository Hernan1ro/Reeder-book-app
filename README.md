<p align="center">
    <a href="#linkdemo">
        <img src="./public/logo.jpg" height="100" alt="Reeder book app"/>
    </a>
</p>

<h1 id="web">Reeder Book App</h1>

A book reading app to enjoy your favorite stories anytime, anywhere. Immerse yourself in literature!

## Index

- [Getting started](#scripts)
- [Preview](#preview)
  - [Desktop](#desktop)
  - [Mobile](#mobile)
- [Technologies](#technologies)
- [Questions](#questions)

<h2 id="scripts">🔥 Getting started</h2>

### Installation

```
git clone git@github.com:Hernan1ro/Reeder-book-app.git
```

```
npm install
```

```
npm run dev
```

## Configuring Environment Variables

The project uses environment variables for the configuration of certain aspects. Follow the steps below to configure the necessary environment variables:

1. Create a .env file at the root of the project.

2. Open the .env file and define the required environment variables in the following format: VITE_API_BOOKS=value. For example:

```
VITE_API_BOOKS="https://anapioficeandfire.com/api/"
```

3. Save the .env file.

<br>
<br>

<h2 id="preview">🔍 Preview</h2>

<details>
  <summary id="desktop">💻 Desktop version</summary>    
  <img src="./public/desktopview1.png" alt="Desktop view 1">
  <img src="./public/desktopview2.png" alt="Desktop view 2">
  <img src="./public/desktopview3.png" alt="Desktop view 3">
  <img src="./public/desktopview4.png" alt="Desktop view 4">
</details>

<details>
  <summary id="mobile">📱 Mobile version</summary>  
  <img src="./public/mobileview1.png" alt="Mobile view 1">
  <img src="./public/mobileview2.png" alt="Mobile view 2">
  <img src="./public/mobileview3.png" alt="Mobile view 3">
  <img src="./public/mobileview4.png" alt="Mobile view 4">
</details>
<br>
<br>
<h2 id="technologies">📲 Technologies</h2>

1. React
2. Tailwind
3. Vite.js
4. Typescript
5. React-router-dom

<h2 id="questions"> Questions</h2>

1.How did you decide on the technical and architectural choices used as part of your solution?

```
I chose to use React.js as the main library because of its popularity and ability to build interactive user interfaces. In addition, I used React Table to display the list of books in tabular form with advanced functionalities, React Router DOM to handle navigation between pages, Tailwind CSS for styling and Formik for form handling. These options allowed me to develop efficiently and take advantage of specific features of each library.
```

2.Are there any improvements you left pending in your submission?

```
During the development of this project, due to health constraints (I got Covid), there were some improvements that were left pending:

Implementation of unit tests using Jest: Although we recognise the importance of unit tests to ensure code quality, it was not possible to complete the tests in this deliverable. It would be beneficial to implement tests to verify the expected behaviour of key components and functionalities.

Component documentation using Storybook: Although it was not possible to generate component documentation using Storybook on this occasion, it would be valuable to document each component individually, providing examples of use and explaining the properties they accept.
```

3.¿Qué harías de manera diferente si se le asignara más tiempo?

```
Complete unit tests: I would spend time writing comprehensive tests for key components and functions, ensuring proper coverage and detection of potential bugs.

Generate Storybook documentation: I would create story files for each component, providing examples of usage and detailed descriptions of properties and behaviours.

Improve the user experience: I would work on improving the user interface and usability of the application, optimising the navigation flow, adding animations and making sure the application is intuitive and easy to use for users.

Refactoring and optimising the code: I would use the additional time to review and improve the structure and efficiency of the existing code, looking for refactoring and optimisation opportunities to achieve cleaner, more readable code and improved performance.
```
