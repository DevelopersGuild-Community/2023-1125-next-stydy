import Tabs from '@/components/Tabs/Tabs'
import { Profile } from '@/types'

async function HomeLayout({ children }: { children: React.ReactNode }) {
  const res = await fetch('http://localhost:3080/profile')
  const data = (await res.json()) as Profile

  return (
    <>
      <Tabs
        items={[
          { text: 'おすすめ', href: '/home/recommendations' },
          { text: 'ホーム', href: '/home/follows' },
        ]}
      ></Tabs>

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
