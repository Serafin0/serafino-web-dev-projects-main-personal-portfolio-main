import { Container, Row, Col } from "react-bootstrap";
//import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo2.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          /* MailchimpForm UTILITY WOULD GO HERE TO IMPLEMENT COMMUNICATION LOGIC */
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/serafino-pampena-1a28b22ba" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/profile.php?id=100073323031085" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/seropamp/" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Phone Number : 514-261-9041</p>
            <p>Email Address : serafino.pampena@gmail.com</p>

          </Col>
        </Row>
      </Container>
    </footer>
  )
}
