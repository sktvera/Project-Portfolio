import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import profile from './Assets/Img/profile.png'
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import './Assets/styles.css'

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Fullstack Developer", "Web Designer", "UI/UX Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Julian Vera`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Fullstack Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I am a full stack developer formed by Digital House ARG(Globant, Mercado Libre), Alura latam(Oracle Next Education). I have skills for the development of user interfaces (Front End) mobile, web, user experience, ui ux design.

I have skills for Back End development, api rest and response, mvc architecture model, ecommerce platform construction, travel agencies, use, selection, air ticket reservation.

database management, relational and non-relational.

In addition to this, I have experience and knowledge, in GDS references to the Amadeus software certification.

Knowledge of agile methodologies such as scrum which allow an adequate orientation to achievement, creativity, persistence and problem solving.</p>
                  <button>
                    <a className="linkWpp" href="https://api.whatsapp.com/send/?phone=3183731442&text&type=phone_number&app_absent=0">
                    Let’s Connect <ArrowRightCircle size={25} />
                    </a>
                   
                  
                  </button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={profile} alt="Header Img profile"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}