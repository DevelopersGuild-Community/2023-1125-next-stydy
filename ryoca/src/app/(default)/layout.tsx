import { Profile } from '@/types'

async function DefaultLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  const res = await fetch('http://localhost:3080/profile')
  const data = (await res.json()) as Profile

  return (
    <div className="layout_wrapper">
      <nav>
        <div className="nav_logo-wrapper">
          <p className="nav_logo">SNS</p>
        </div>

        <div className="menu_options active">
          <span className="material-icons">home</span>
          <h2>ホーム</h2>
        </div>

        <div className="menu_options">
          <span className="material-icons">search</span>
          <h2>検索</h2>
        </div>

        <div className="menu_options">
          <span className="material-icons">notifications</span>
          <h2>通知</h2>
        </div>

        <div className="menu_options">
          <span className="material-icons">email</span>
          <h2>メッセージ</h2>
        </div>

        <div className="menu_options">
          <span className="material-icons">bookmark</span>
          <h2>ブックマーク</h2>
        </div>

        <div className="menu_options">
          <span className="material-icons">person</span>
          <h2>プロフィール</h2>
        </div>

        <div className="menu_options">
          <span className="material-icons">more_horiz</span>
          <h2>もっと見る</h2>
        </div>

        <button className="post_btn">ポストする</button>

        <div className="side_profile">
          <div className="side_profile-image">
            <img src={data.userImageUrl} alt="profile" />
          </div>
          <p>{data.userName}</p>
        </div>
      </nav>
      <main>{children}</main>
      <aside>
        <div className="aside_input">
          <span className="material-icons aside_search-icon">search</span>
          <input type="text" placeholder="検索" />
        </div>

        <div className="aside_container">トレンド</div>
      </aside>

      {modal}
    </div>
  )
}

export default DefaultLayout
