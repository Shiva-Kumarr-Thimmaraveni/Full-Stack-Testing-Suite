<a id="readme-top"></a>
[![LinkedIn][linkedin-shield]][linkedin-url]




<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Shiva-Kumarr-Thimmaraveni/Full-Stack-Testing-Suite">
    <img src="images/ReBirth_with_bg.png" alt="Logo" width="240" height="200">
  </a>

  <h3 align="center">🎓 Adaptive Quiz Platform: E2E Full Stack Testing Suite</h3>

  <p align="center">
    🚀 An innovative MERN stack-based online quiz platform that adapts to users' performance and provides personalized dashboards, reports
    <br />
    <a href="https://github.com/Shiva-Kumarr-Thimmaraveni/Full-Stack-Testing-Suite">
    <strong>Explore the docs »</strong>
    </a>
    <br />
    <br />
    <a href="https://youtu.be/4Q7N5yPYUUw?si=FlYmRPFrtipvfEMc">View Demo</a>
    ·
    <a href="https://github.com/Shiva-Kumarr-Thimmaraveni/Full-Stack-Testing-Suite/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/Shiva-Kumarr-Thimmaraveni/Full-Stack-Testing-Suite/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>

  <h2>Demo Video</h2>
<a href="https://youtu.be/4Q7N5yPYUUw" target="_blank">
  <img src="https://img.youtube.com/vi/4Q7N5yPYUUw/maxresdefault.jpg" alt="Watch the video" width="600" height="400" style="display:block; margin:0 auto; position:relative;">
</a>

</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
## (Google OAuth Login / Sign Up)
[![Product Name Screen Shot][product-screenshot]](https://www.linkedin.com/in/shiva-kumarr-thimmaraveni/)

🚀 **An innovative MERN stack-based online quiz platform** that adapts to users' performance and provides personalized dashboards, reports, and improvement suggestions.

---

## 🌟 Features at a Glance  
- **🔒 Secure Authentication**: Email/password login, Google OAuth, and user-friendly signup.  
- **🏠 Personalized Dashboard**: Tailored for each user to access quizzes and results effortlessly.  
- **🧠 Adaptive Quiz System**: Dynamic difficulty adjustment using **Computerised Adaptive Testing (CAT)**.  
- **📊 Detailed Reports**: Performance evaluation and actionable feedback for improvement.  
- **🧪 Comprehensive Testing**: 90%+ code coverage with robust test cases ensuring quality.  

---


## 🎯 Objective  

Build a login/signup platform with a **personalized dashboard** and an **adaptive online quiz** for students in grades **7-10**, offering a tailored learning experience.  

---
<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![React][Vite]][React-url]
* [![Vite][React.js]][Vite-Url]
* [![Vitest][Vitest]][VitestUrl]
* [![Context-API][Context-API]][Context-API-Url]
* [![TailwindCSS][TailwindCSS]][TailwindCSS-URL]
* [![FramerMotion][FramerMotion]][FramerMotion-Url]
* [![Express.js][Express.js]][Express-url]
* [![NodeJS][NodeJS]][NodeJS-Url]
* [![MongoDB][MongoDB]][MongoDB-Url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

 **Clone the Repository**  

 ```bash
   git clone https://github.com/Shiva-Kumarr-Thimmaraveni/Full-Stack-Testing-Suite.git
   ```

### Prerequisites
## Installation

**Install Dependencies**  
   ```bash
   # For Backend
   cd Backend
   npm i

   # For Frontend
   cd FrontEnd
   npm i
   ```

### Setting Environment Variables

**Environment Variables Backend**  
   Create a `.env` file in the Backend root with the following:  
   ```env

    PORT = Your Preferred Port
    GOOGLE_CLIENT_ID = <GOOGLE_CLIENT_ID>
    GOOGLE_CLIENT_SECRET = <GOOGLE_CLIENT_SECRET>
    DB_URL = <DB_URL>
    JWT_SECRET = <JWT_SECRET>
    JWT_TIMEOUT = <JWT_TIMEOUT>

   ```

**Environment Variables FrontEnd**  
   Create a `.env` file in the FrontEnd root with the following:  
   ```env

    VITE_CLIENT_ID = <VITE_CLIENT_ID>
    BASE_URI = <BASE_URI>
    VITE_REACT_APP_BACKEND_BASE_URL = <VITE_REACT_APP_BACKEND_BASE_URL> || https://localhost:8080

   ```

### Start the Application
 ```bash
   # Start Backend
   cd Backend
   npm start

   # Start Frontend
   cd FrontEnd
   npm run dev
   ```

### Run Tests
 ```bash

   # Frontend Tests
   npm test
   ```

[![Product Name Screen Shot][test-cases-screen-shot]](https://www.linkedin.com/in/shiva-kumarr-thimmaraveni/)





<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
### Key Test Cases:  

1. **Authentication**  
   - Valid and invalid login/signup attempts.  
2. **Dashboard Navigation**  
   - Correct redirection post-login.  
3. **Quiz Adaptation**  
   - Proper difficulty adjustment based on responses.  
4. **Result Evaluation**  
   - Accurate score calculation and improvement feedback. 

_For more examples, please refer to the [Documentation](https://github.com/Shiva-Kumarr-Thimmaraveni/Full-Stack-Testing-Suite)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>






<!-- MARKDOWN LINKS & IMAGES -->


[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/shiva-kumarr-thimmaraveni/

[product-screenshot]: images/GoogleSignIn.png
[test-cases-screen-shot]: images/testCases.png

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vite]: https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
[Vite-Url]: https://vite.dev/
[Vitest]: https://img.shields.io/badge/-Vitest-252529?style=for-the-badge&logo=vitest&logoColor=FCC72B
[VitestUrl]: https://vitest.dev/
[Context-API]: https://img.shields.io/badge/Context--Api-000000?style=for-the-badge&logo=react
[Context-API-Url]: https://react.dev/reference/react/useContext
[Express.js]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[Express-url]: https://expressjs.com/
[NodeJS]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[NodeJS-Url]: https://nodejs.org/en
[TailwindCSS]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[TailwindCSS-URL]: https://tailwindcss.com/
[MongoDB]: https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-Url]: https://www.mongodb.com/
[FramerMotion]: https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue
[FramerMotion-Url]: https://motion.dev/
