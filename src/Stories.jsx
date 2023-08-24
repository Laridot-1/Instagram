import Story from './Story.jsx'

const Stories = ({data}) => {
  return (
    <section className="stories-ctn">
      <div className="myStory">
        <div></div>
        <p>Your story</p>
      </div>
      <section className="stories">
        {
          data.map(({username}, index) => {
            return <Story username={username} key={index} />
          })
        }
      </section>
    </section>
  )
}

export default Stories
