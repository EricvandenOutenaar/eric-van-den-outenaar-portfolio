import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"

const iconStyle = {
  fontSize: "2rem",
  marginBottom: "1.5rem",
}
export default [
  {
    id: 1,
    icon: <FaCode style={iconStyle} />,
    title: "Frontend development",
    text: `During my studies, I have and internship I have worked a extensively with 
    JavaScript and React. I can specialize to become frontend developer.`,
  },
  {
    id: 2,
    icon: <FaSketch style={iconStyle} />,
    title: "Full stack development",
    text: `After this study, I have been educated to become fullstack developer.`,
  },
  {
    id: 3,
    icon: <FaAndroid style={iconStyle} />,
    title: "Testing",
    text: `During me .Net education, there has been a courses i testing. I can also be employed in this field.`,
  },
]
