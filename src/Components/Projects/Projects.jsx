import  ProjectCard from "../ProjectCard";
import UiUxCard from '../UiUxCard/UiUxCard'

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import SistemaNovio from './Assets/Img/SistemaNovio.jpeg'
import wellezyUiUx from './Assets/Img/wellezyUiUx.png'
import MercadoLiebre from './Assets/Img/MercadoLiebre.png'
import MegaTvService from './Assets/Img/MegaTvService.png'
import Wellezy from "./Assets/Img/Wellezy.png";
import Bertedeco from  './Assets/Img/Bertedeco.png'
import Alura from './Assets/Img/Alura.png'
import Mattelsa from './Assets/Img/Mattelsa.jpeg'
import Cards from './Assets/Img/Cards.jpeg'

import 'animate.css';
import TrackVisibility from 'react-on-screen';

import './Assets/styles.css'

export const Projects = () => {

  const projects = [
    {
      title: "Oracle Next Education",
      description: "Alura Scrambler Challenge",
      url: "https://sktvera.github.io/sktveraEncriptadorAluraChallengeONE/",
      imgUrl: Alura,
    },
    {
      title: "Bertedeco",
      description: "Electronic commerce furniture from Argentina",
      url: "https://sktvera.github.io/BertedecoReact/",
      imgUrl: Bertedeco,
    },
    {
      title: "Wellezy web",
      description: "multiplatform, travel agency, teleconsultation, surgeries and professional assistance",
      url: "https://wellezy.com",
      imgUrl: Wellezy,
    },
    {
      title: "Mega Tele Services",
      description: "purchase of telecommunications services",
      url: "https://sktvera.github.io/MegaTeleServices/",
      imgUrl: MegaTvService,
    },
    {
      title: "Mercado Liebre",
      description: "clon ecommerce free market platform",
      url: "https://mercado-liebre-sktvera.onrender.com",
      imgUrl: MercadoLiebre,
    },
    {
      title: "Sistema Novio",
      description: "administrative crm",
      url: "https://github.com/sktvera/php-mysql-crud",
      imgUrl: SistemaNovio,
    },
    {
      title: "Challenge Cards",
      description: "challenge react",
      url: "https://sktvera.github.io/ChallengeCards/",
      imgUrl: Cards,
    },
    {
      title: "Mattelsa",
      description: "clon app Mattelsa",
      url: "https://sktvera.github.io/mattelsaChallenge/",
      imgUrl: Mattelsa,
    },
  ];


const uiux = [
  {
    title: "Wellezy web",
    description: "multiplatform, travel agency, teleconsultation, surgeries and professional assistance",
    url: "https://www.figma.com/file/IsixlDqMeM0x9V1MMcgzUH/wellezy-app?type=design&node-id=0-1&t=slnqsljj6FtQpTrv-0",
    imgUrl: wellezyUiUx,
  },
]


  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>In this section you will find my projects where I managed to implement frontend development backend ui ux design.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link className="label-nav-projects" eventKey="first">projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="label-nav-projects" eventKey="second">ui/ux</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="label-nav-projects" eventKey="third">github</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          uiux.map((project, index) => {
                            return (
                              <UiUxCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    
                   
                     <ul className="githubLink">
                     
                      <li><a href="https://github.com/sktvera/lexerTechnicalTest.git">https://github.com/sktvera/lexerTechnicalTest.git</a></li>
                      <li><a href="https://github.com/sktvera/challenge_laravel.git">https://github.com/sktvera/challenge_laravel.git</a> </li>
                     </ul>
                    
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
     {/*  <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  )
}