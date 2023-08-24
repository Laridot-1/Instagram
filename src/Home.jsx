import Header from "./Header.jsx";
import Stories from './Stories.jsx'
import Posts from './Posts.jsx'
import data from './data.jsx'

const Home = () => {
  return (
    <div className="container">
      <Header />
      <Stories data={data} />
      <Posts />
    </div>
  )
}

export default Home
