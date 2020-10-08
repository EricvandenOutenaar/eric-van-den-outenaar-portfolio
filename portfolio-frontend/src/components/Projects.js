import React from "react"
import Title from "./Title"
import Project from "./Project"
import OuterContentContainer from "./OuterContentContainer"
import InnerContentContainer from "./InnerContentContainer"
import ButtonLink from "./ButtonLink"

const Projects = ({ projects, title, showLink }) => {
  return (
    <OuterContentContainer>
      <Title title={title} />
      <InnerContentContainer type="projects">
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </InnerContentContainer>
      {showLink && <ButtonLink to="/projects" center name="Alla projekt" />}
    </OuterContentContainer>
  )
}

export default Projects
