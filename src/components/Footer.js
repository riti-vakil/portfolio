import { Container, Row } from "react-bootstrap";

export const Footer = () => {
    const handleContactClick = () => {
        const email = 'ritivakil3@gmail.com';
        const subject = 'Contact from My Website';
        const body = 'Hello Riti, I wanted to get in touch with you...';
    
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
        window.location.href = mailtoLink;
      };
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <h1 className="footer-text-h1">riti</h1>
            <p className="footer-text">Feel free to connect if you have a cool project on mind!</p>
            <p>Click <span onClick={handleContactClick}>here </span>to mail me.</p>
            <p className="footer-text">Made using React.js</p>
        </Row>
      </Container>
    </footer>
  );
};
