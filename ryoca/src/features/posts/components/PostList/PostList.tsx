function PostList({ items }: any) {
  return (
    <>
      {items.map((item) => (
        <div key={item.id} className="post">
          <div className="post_profile-image">
            <img src="images/profile.jpg" alt="profile" />
          </div>

          <div className="post_body">
            <div className="post_header">
              <div className="post_header-text">
                <h3>
                  RyoCa<small>@ryocacode</small>
                </h3>
              </div>

              <div className="post_header-discription">
                <p>Googleのリンクを貼ります</p>
                <br />
                <p>
                  <a href="https://google.com">https://google.com</a>
                </p>
              </div>
            </div>
            <img src="images/post.png" className="post_image" />

            <div className="post_footer">
              <span className="material-icons">chat</span>
              <span className="material-icons">repeat</span>
              <span className="material-icons">favorite_border</span>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default PostList
