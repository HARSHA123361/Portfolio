import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AiFillGithub } from "react-icons/ai";
import { MdHttp } from "react-icons/md";
import Chip from '@mui/material/Chip';
import { FaRegNewspaper } from "react-icons/fa";



function ProjectCard(props) {
  const isLottieAnimation = props.imgPath && props.imgPath.includes('lottie.host');

  return (
    <Card className="project-card-view">
      {isLottieAnimation ? (
        <div style={{ height: '200px', overflow: 'hidden', paddingTop: '20px' }}>
          <iframe
            src={props.imgPath}
            style={{ width: '100%', height: '100%', border: 'none' }}
            title="Project Animation"
            allowFullScreen
          />
        </div>
      ) : (
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      )}
      <Card.Body>
        <Card.Title style={{ fontFamily: "avenir next" }}>{props.title}</Card.Title>
        <Card.Text style={{ fontFamily: "avenir next" }}>
          {props.description}
        </Card.Text>
        {props.tags.map((tag, index) => (
          <Chip label={tag} />
        ))}


        {/* {"\n"}
        {"\n"} */}


        {props.isBlog && !props.paper && (
          <div className="button-container">
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="demobtn"
            >
              {"Demo"}
              <MdHttp></MdHttp>
            </Button>
            <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              className="demobtn"
            >
              {"GitHub"}
              <AiFillGithub></AiFillGithub>
            </Button>
          </div>
        )}
        {props.isBlog && props.paper && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            className="viewbtn"
          >
            {"Demo"}
            <MdHttp></MdHttp>
          </Button>
        )}



        {!props.isBlog && !props.paper && (
          <Button className="viewbtn" variant="primary" href={props.ghLink} target="_blank">
            {"GitHub"}
            <AiFillGithub></AiFillGithub>
          </Button>
        )}
        {!props.isBlog && props.paper && (
          <Button className="viewbtn" variant="primary" href={props.paperLink} target="_blank">
            {"Publication"}
            <FaRegNewspaper></FaRegNewspaper>
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;