import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import My_Notebook from "../../Assets/Projects/myNotebook.png";
import ide from "../../Assets/Projects/online_ide.png";
import news_app from "../../Assets/Projects/news_app.png";
import remini from "../../Assets/Projects/remini.png";
import editor from "../../Assets/Projects/myNotebook.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ide}
              isBlog={false}
              title="Online-Code-Editor"
              description="This project is very useful to students and developers to write code and execute on the web in your browser in four languages like C, C++, Java and Python. It is developed using NodeJS and ReactJS Technology."
              ghLink="https://github.com/rajmaurya95/Online-Code-Editor"
              demoLink="https://rajmaurya95.github.io/Online-Code-Editor/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={remini}
              isBlog={false}
              title="Remine India"
              description="It is a E-waste & Li-battery Recycling company Website that provide company details and provide services like send a request to pickup raw material from user's organization. Basically it is a assignment which provide me to check my coding skills."
              ghLink="https://github.com/rajmaurya95/remine_india"
              demoLink="https://rajmaurya95.github.io/remine_india"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="TextUtilizer"
              description="It is a text utilizer which is used to utilize text with some features like that copy , lower case to uppercase , uppercase to lowercase, remove extra spaces, letter and word counting , text replace with exist text in a string."
              ghLink="https://github.com/rajmaurya95/textUtilizer"
              demoLink="https://rajmaurya95.github.io/textUtilizer/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={My_Notebook}
              isBlog={false}
              title="My_Notebook"
              description="It is a MERN stack Developer Project . Here anyone can store or upload your notes on the Internet. And you can access only your notes and you can modify notes and delete notes. "
              ghLink="https://github.com/rajmaurya95/my_notes"
              demoLink="https://github.com/rajmaurya95/my_notes"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news_app}
              isBlog={false}
              title="News_app"
              description="About News_app application is a news aplication that provides news Top-Headlines and category wise news and Top-Headelines. It is React Based application that used bootstrap, JSX and News_API. It is a React Functional based project."
              ghLink="https://github.com/rajmaurya95/news_app"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news_app}
              isBlog={false}
              title="News_More"
              description="NewsMore application is a news aplication that provides news Top-Headlines and category wise news and Top-Headelines. It is React Based application that used bootstrap and JSX. It is same as news_app app but it have only class based component of react js . And news_app now working on function component."
              ghLink="https://github.com/rajmaurya95/news_more"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
