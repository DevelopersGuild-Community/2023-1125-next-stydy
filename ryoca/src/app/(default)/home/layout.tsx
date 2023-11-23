function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="header">
        <h2>
          <a href="#">おすすめ</a>
        </h2>
        <h2>
          <a href="#" className="active">
            フォロー
          </a>
        </h2>
      </div>

      <div className="post_box">
        <form>
          <div className="post_box-input">
            <img src="images/profile.jpg" alt="profile" />
            <input type="text" name="text" placeholder="いまどうしてる？" />
            <label>
              <input type="file" name="file" style={{ display: 'none' }} />
              <span className="material-icons">add</span>
            </label>
            <button className="">ポスト</button>
          </div>
        </form>
      </div>

      {children}
    </>
  )
}

export default HomeLayout
