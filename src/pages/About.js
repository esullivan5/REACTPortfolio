import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <Container>
      <section className="content">
        <Row>
          <div className="col-md-12 midsection">
            <h2>About Me</h2>
            <Row>
              <Col size="sm-12">
                <img
                  className="img-fluid profile-pic float-left"
                  src={require("../components/assets/images/me.png.jpg")}
                  alt="Me"
                />
                <div className="bio">
                <p>Hello! Thank you so much for visting my page.</p>
                <p>My name is Liz. I'm a photographer, and an aspiring web designer.
                 I love reading philosophy, and try to portray philosphical themes and concepts through my art.
                 I live in Denver, but I hope to eventually travel the world, continuing web design and photography along the way.
                 </p>
                 <p>I love the creative aspect of web design, and am very excited to implement what I've learned about design, art, and color, 
                 to create aesthetically pleasing, stylized designs that will reflect the same care I feel for my photography.
               </p>
                </div>
              </Col>
            </Row>
          </div>
        </Row>
      </section>
    </Container>
  );
}

export default About;