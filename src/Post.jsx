import {useState} from 'react'

const Post = ({username, like, comment, time, description}) => {
  let [likes, setLike] = useState(like)
  let [liked, setLiked] = useState(false)
  let [bookmarked, setBookmarked] = useState(false)

  function updateLike () {
    setLiked(!liked)
    {
      liked ? setLike(likes - 1) : setLike(likes + 1)
    }
  }

  function updateBookmark () {
    setBookmarked(!bookmarked)
  }
  
  return (
    <article className="post">
      <div className="post-heading">
        <div>
          <span></span>
          <span>{username}</span>
        </div>
        <button>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </button>
      </div>
      <div onDoubleClick={updateLike} className="post-content"></div>
      <div className="post-interaction">
        <div>
          <span className={liked ? "liked" : ""} onClick={updateLike}>
            {
              liked ?
              <i className="fa-solid fa-heart"></i> :
              <i className="fa-regular fa-heart"></i>
            }
          </span>
          <span>
            <i className="fa-regular fa-comment"></i>
          </span>
          <span>
            <i className="fa-regular fa-paper-plane"></i>
          </span>
        </div>
        <span onClick={updateBookmark}>
          { bookmarked ? 
            <i className="fa-solid fa-bookmark"></i> : 
            <i className="fa-regular fa-bookmark"></i>
          }
        </span>
      </div>
      <div className="post-details">
        <p>{likes} likes</p>
        <p className="desc"><span>{username}</span> {description}</p>
        <p className="commentCount">view all {comment} comments</p>
        <h4>{time} days ago</h4>
      </div>
    </article>
  )
}

export default Post
