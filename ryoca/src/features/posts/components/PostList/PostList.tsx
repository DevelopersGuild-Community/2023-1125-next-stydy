'use client'
import { PostItem } from '@/types'
import Link from 'next/link'
import { useRef, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller'

function PostList({
  initialItems,
  fetchItems,
}: {
  initialItems: PostItem[]
  fetchItems: (lastId: string) => Promise<PostItem[]>
}) {
  const fetching = useRef(false)
  const [items, setItems] = useState<PostItem[]>(initialItems)
  const [hasMore, setHasMore] = useState(true)

  const loadMore = async () => {
    if (!fetching.current) {
      try {
        fetching.current = true

        const lastId = items[items.length - 1].id
        const data = await fetchItems(lastId)
        if (data.length < 5) {
          setHasMore(false)
        }
        setItems((prev) => [...prev, ...data])
      } finally {
        fetching.current = false
      }
    }
  }

  return (
    <>
      <InfiniteScroll
        hasMore={hasMore}
        pageStart={0}
        loadMore={loadMore}
        loader={
          <span key={0} className="loader">
            読み込み中...
          </span>
        }
        useWindow={false}
      >
        {items.map((item) => (
          <div key={item.id} className="post">
            <div className="post_profile-image">
              <img src={item.userImageUrl} alt="profile" />
            </div>

            <div className="post_body">
              <div className="post_header">
                <div className="post_header-text">
                  <h3>{item.userName}</h3>
                </div>

                <div className="post_header-discription">
                  <div>{item.postText}</div>
                </div>
              </div>
              <Link href={`/post/${item.id}`}>
                <img src={item.postImageUrl} className="post_image" />
              </Link>

              <div className="post_footer">
                <span className="material-icons">chat</span>
                <span className="material-icons">repeat</span>
                <span className="material-icons">favorite_border</span>
              </div>
            </div>
          </div>
        ))}
      </InfiniteScroll>
    </>
  )
}

export default PostList
