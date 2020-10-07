import React from "react"
import Title from "./Title"
import services from "../constants/services"
import OuterContentContainer from "./OuterContentContainer"
import InnerContentContainer from "./InnerContentContainer"
import Service from "./Service"

// This component will contain the services section

const Services = () => {
  return (
    <OuterContentContainer grey>
      <Title title="Tjänster" />
      <InnerContentContainer type="services">
        {services.map(({ id, icon, title, text }) => {
          return (
            <Service key={id} id={id} icon={icon} title={title} text={text} />
          )
        })}
      </InnerContentContainer>
    </OuterContentContainer>
  )
}

export default Services
