import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <a href="https://github.com/sktvera">
            <GitHubIcon/>
            </a>
            
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
          
                <a href="https://api.whatsapp.com/send/?phone=3183731442&text&type=phone_number&app_absent=0"><WhatsAppIcon/></a>
                <a href="https://www.linkedin.com/in/julian-david-vera-godoy-a86b9220a/"><LinkedInIcon/></a>
              <a href="https://www.instagram.com/sktvera/"><InstagramIcon/></a> 
            </div>
            <p>Copyright - All rights reserved SKTVERA-DEV</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}