import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import OuterContentContainer from "./OuterContentContainer"
import InnerContentContainer from "./InnerContentContainer"
import ButtonLink from "./ButtonLink"

// Here we define the blog section

export const Blogs = ({ blogs, title, showLink }) => {
  return (
    <OuterContentContainer>
      <Title title={title} />
      <InnerContentContainer type="blogs">
        {blogs.map(blog => {
          return <Blog key={blog.id} {...blog} />
        })}
      </InnerContentContainer>
      {showLink && <ButtonLink to="/blog" center name="Alla artiklar" />}
    </OuterContentContainer>
  )
}
export default Blogs
