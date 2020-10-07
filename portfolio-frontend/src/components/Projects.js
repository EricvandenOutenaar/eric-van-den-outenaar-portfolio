import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
import OuterContentContainer from "./OuterContentContainer"
import InnerContentContainer from "./InnerContentContainer"

const Projects = ({ projects, title, showLink }) => {
  return (
    <OuterContentContainer>
      <Title title={title} />
      <InnerContentContainer type="projects">
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </InnerContentContainer>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          Alla projekt
        </Link>
      )}
    </OuterContentContainer>
  )
}

export default Projects
