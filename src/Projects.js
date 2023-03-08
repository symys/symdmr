import React from 'react'
import {useNavigate} from "react-router-dom"
import adviceImg from "./assets/advice.jpg";
import todoImg from "./assets/todo.jpg";
import healingImg from "./assets/healing.jpg";
import movieImg from "./assets/movie.jpg";
import madlibsImg from "./assets/madlibs.jpg";
import minionsImg from "./assets/minions.jpg";
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Online Therapist",
    imgSrc: healingImg,
    description:
      "This project is the capstone project of Recoded bootcamp and it was developed with a group of 5 people. The draft of the project was given in Figma and consisted of 30 pages. We created a responsive online therapist site in 7 weeks using React, Firebase, Redux, JEST, Tailwind and necessary technologies. The project can be experienced live on Netlify.",
    demoLink: "https://symphonious-snickerdoodle-6f2481.netlify.app/",
    codeLink: "https://github.com/SEYMA-MENAR/RE-Minded",
  },
  {
    title: "Task Manager",
    imgSrc: todoImg,
    description:
      "I aimed to learn React and Redux usage in depth with this project. Used technologies are React, Redux and Tailwind. The tasks are kept in 4 different categories. categories are taken from Eisenhover matrix and users can filter tasks by categories. They can add a new task or delete a task. For those who want to learn the Eisenhover matrix in detail, there is a See Groups button on the main page and it leads to a page describing the matrix. In addition, summary information has been added to the category filtering buttons in the section where the tasks are added.",
    demoLink: "https://effervescent-longma-4868ea.netlify.app/",
    codeLink: "https://github.com/symys/todoapp",
  },
  {
    title: "Random Advice App",
    imgSrc: adviceImg,
    description:
      "A challenge from Frontend Mentor is to build out this advice generator app using the Advice Slip API and get it looking as close to the design as possible. Used technologies are HTML, CSS and JavaScript. It gets random advice from the API with fetch, and the advice changes every time when users click the dice. It was designed to make it compatible with different devices by making a responsive design.",
    demoLink: "https://nimble-wisp-86e992.netlify.app/",
    codeLink: "https://github.com/symys/advice-app",
  },
  {
    title: "Movie Project",
    imgSrc: movieImg,
    description:
      "It is a Re:Coded group project with 4 people. It aims to teach DOM manipulation deeply and get data with fetching in JS. Used technologies are JS, HTML, CSS. There is a welcome page at the entrance. In the home page users can see popular films from The Movie Database API. Films can be listed according to their genres, popularity, rated. In addition to these users can list actors. Every actor has an actor detail page which displays biography and films of actor. Like actor detail page, every film has film detail page which contains film details, overview, production companies, actors, trailer and similar films.",
    demoLink:
      "https://recoded-spark-turkey-2022.github.io/movie-project-playing-our-way/",
    codeLink:
      "https://github.com/Recoded-Spark-Turkey-2022/movie-project-playing-our-way",
  },
  {
    title: "Mad Libs Game",
    imgSrc: madlibsImg,
    description:
      "It is a Re:Coded group project. Used technologies are HTML, CSS and JS. The logic is to complete the given story with filling the blanks to your imagination. When you open the project page you will see 2 same stories with blanks. You can write your own story with editing left paragraph. During editing proccess you will see the changes in the right paragraph synchronously. If you want to reset the game you should just click the “Reset” button top of the editing part.",
    demoLink:
      "https://recoded-spark-turkey-2022.github.io/mad-libs-los-galacticos/",
    codeLink:
      "https://github.com/Recoded-Spark-Turkey-2022/mad-libs-los-galacticos",
  },
  {
    title: "Minion Toys Shop",
    imgSrc: minionsImg,
    description: "*Currently I'm working on this project using Angular",
    demoLink: "https://roaring-khapse-667b6e.netlify.app/",
    codeLink: "https://github.com/symys/minions",
  },
];


function Projects() {
  const navigate = useNavigate();

  return (
    <div className='bg-[#111827] lg:h-full text-[#F7F5EB] font-nunito gap-20 flex flex-col lg:p-24 p-10'>
      {projects.map((project) => <ProjectCard project={project} />)}
      <button type="button" onClick={()=>navigate(-1)} class=" bg-gradient-to-r from-purple-400 via-purple-350 to-blue-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-purple-100 dark:focus:ring-purple-400  rounded-lg  lg:px-5 px-2 py-2.5 w-[10em] text-center mr-2 mb-2 self-center text-[#111827] font-extrabold lg:text-xl text-medium uppercase">Go Back Home</button>
    </div>
  )
}

export default Projects