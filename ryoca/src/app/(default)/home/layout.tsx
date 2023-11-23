import { Profile } from '@/types'
import Link from 'next/link'

async function HomeLayout({ children }: { children: React.ReactNode }) {
  const res = await fetch('http://localhost:3080/profile')
  const data = (await res.json()) as Profile

  return (
    <>
      <div className="header">
        <h2>
          <Link href="/home/recommendations" scroll={true} prefetch={false}>
            おすすめ
          </Link>
        </h2>
        <h2>
          <Link href="/home/follows" scroll={true} prefetch={false}>
            フォロー
          </Link>
        </h2>
      </div>

      <div className="post_box">
        <form>
          <div className="post_box-input">
            <img src={data.userImageUrl} alt="profile" />
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
