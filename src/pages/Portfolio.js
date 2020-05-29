import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Project from "../components/Projects";

function Portfolio() {
  return (
    <Container>
      <section className="content">
        <Row>
          <div className="col-md-12 midsection">
            <h2>Portfolio</h2>
            <Row>
              <Project
                name="Day Scheduler App"
                imgPath={require("../components/assets/images/Password-generator.png")}
                linkURL="https://esullivan5.github.io/DayScheduler/"
              />
            </Row>
            <Row>
              <Project
                name="Note Taker App"
                imgPath={require("../components/assets/images/weatherapp.jpg")}
                linkURL="https://hellofishyareyousleeping.herokuapp.com"
              />
            </Row>
            <Row>
              <Project
                name="Progressive Budget App"
                imgPath={require("../components/assets/images/note-taker.png")}
                linkURL="https://treat-yoselff.herokuapp.com"
              />
            </Row>
            <Row>
              <Project
                name="Code Quiz"
                imgPath={require("../components/assets/images/weatherapp.jpg")}
                linkURL="https://esullivan5.github.io/CodeQuiz/"
              />
            </Row>
            <Row>
              <Project
                name="Lyric.Me"
                imgPath={require("../components/assets/images/weatherapp.jpg")}
                linkURL="https://sk2060sk2060.github.io/group-project-1/"
              />
            </Row> 
            <Row>
              <Project
                name="STOCK-er"
                imgPath={require("../components/assets/images/weatherapp.jpg")}
                linkURL="https://alexngn2.github.io/class-porject-2//"
              />
            </Row>
            <Row>
              <Project
                name="Be Green"
                imgPath={require("../components/assets/images/weatherapp.jpg")}
                linkURL="#"
              />
            </Row>
          </div>
        </Row>
      </section>
    </Container>
  );
}

export default Portfolio;