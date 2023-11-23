import PostList from '@/features/posts/components/PostList/PostList'
import { PostItem } from '@/types'

// MEMO: 無駄にServerActionsにしてるけどfetchなので使わなくて大丈夫です
// 無限スクロール用に追加分を読み込む
async function fetchItems(lastId: string) {
  'use server'

  const res = await fetch(
    `http://localhost:3080/posts/follows?lastId=${lastId}`,
    {
      cache: 'no-cache',
    }
  )
  const data = (await res.json()) as PostItem[]

  return data
}

export default async function Page() {
  const res = await fetch('http://localhost:3080/posts/follows')
  const data = (await res.json()) as PostItem[]

  return (
    <>
      <PostList initialItems={data} fetchItems={fetchItems}></PostList>
    </>
  )
}
