import Post from './Post.jsx'
import data from './data.jsx'

const Posts = () => {
  return (
    <section className="posts">
      {
        data.map(({username, likes, comments, description, date}, index) => {
          return <Post username={username} like={likes} comment={comments} description={description} time={date} key={index}  />
        })
      }
    </section>
  )
}

export default Posts
