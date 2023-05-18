import  ProjectCard from "../ProjectCard";
import UiUxCard from '../UiUxCard/UiUxCard'

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

/* import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import colorSharp2 from "../assets/img/color-sharp2.png"; */
import wellezyUiUx from './Assets/Img/wellezyUiUx.png'
import MercadoLiebre from './Assets/Img/MercadoLiebre.png'
import MegaTvService from './Assets/Img/MegaTvService.png'
import Wellezy from "./Assets/Img/Wellezy.png";
import Bertedeco from  './Assets/Img/Bertedeco.png'
import Alura from './Assets/Img/Alura.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

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
      title: "",
      description: "",
      url: "",
      imgUrl: Alura,
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
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">ui/ux</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
                      <p>xxxLorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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