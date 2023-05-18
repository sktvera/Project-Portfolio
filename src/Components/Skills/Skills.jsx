import { useState } from 'react';
import classnames from 'classnames';

/* import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg"; */
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';
/* import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png" */

import menuIcon from './Assets/Img/menuIcon.png'
import alura from './Assets/Img/alura.png'

import './Assets/styles.css'


export const 

Skills = () => {

const [activeMenu,setActiveMenu] = useState(false)


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };




  const SkillsNames = [
    {
      title: "javascript",
    },
    {
      title: "php",
    },
    {
      title: "materialUI",
    },
    {
      title: "typescript",
    },
    {
      title: "canvas 2d",
    },
    {
      title: "NOSQL",
    },
    {
      title: "Wellezy web",
    },
    {
      title: "java",
    },
    {
      title: "jwt",
    },
    {
      title: "node.js",
    },
    {
      title: "laravel",
    },
    {
      title: "bootstrap",
    },
    {
      title: "angular",
    },
    {
      title: "MVC",
    },
    {
      title: "ejs",
    },
    {
      title: "react-native",
    },
    {
      title: "alwaysdata",
    },
    {
      title: "postgresql",
    },
    {
      title: "gds(amadeus)",
    },
    {
      title: "express.js",
    },
    {
      title: "mongodb",
    },
    {
      title: "api rest",
    },
    {
      title: "soap",
    },
    {
      title: "scrum",
    },
    {
      title: "SQL",
    },
    {
      title: "nestjs",
    },
    {
      title: "sass",
    },
    {
      title: "mysql",
    },
    {
      title: "css",
    },
    {
      title: "react",
    },
    {
      title: "cookies",
    },
    {
      title: "html",
    },
    {
      title: "git",
    },
    {
      title: "figma",
    },
    {
      title: "deploy",
    },

    
  ]






  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Full stack developer adaptable to any technology, frontend and backend<br></br> development, database management, crud building of web applications.</p>
                        <div>
                          <div onClick={()=>setActiveMenu(!activeMenu)} className={classnames(
                                {'containerMenu-img':activeMenu === false ? true : false},
                                {'containerMenu-img-active':activeMenu === true ? true: false}
                            )}>
                                <div className="menuIcon-img">
                                    <img src={menuIcon} alt="menuIcon" />
                                </div>
                          </div>
                            
{activeMenu === true?
 <div className='SkillsTable'>
{SkillsNames.map((SkillsNamesItem)=>{
  return(
<div className='SkillsTable-item'><p> {SkillsNamesItem.title} </p></div>
  )
})}


 </div>
:null}
                           

                        </div>
                    </div>
                </div>
            </div>
        </div>
       {/*  <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  )
}