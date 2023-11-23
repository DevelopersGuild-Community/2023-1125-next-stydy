import PostList from '@/features/posts/components/PostList/PostList'
import { PostItem } from '@/types'

async function fetchItems(lastId: string) {
  'use server'

  const res = await fetch(
    `http://localhost:3080/posts/follows?lastId=${lastId}`
  )
  const data = (await res.json()) as PostItem[]

  return data
}

export default async function Page() {
  const res = await fetch(
    'http://localhost:3080/posts/recommendations?lastId=10'
  )
  const data = (await res.json()) as PostItem[]

  return (
    <>
      <PostList initialItems={data} fetchItems={fetchItems}></PostList>
    </>
  )
}
