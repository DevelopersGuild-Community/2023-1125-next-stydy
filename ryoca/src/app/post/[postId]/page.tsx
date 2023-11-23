import { PostItem } from "@/types"
import Link from "next/link"

async function PostModal(params: { postId: string }) {
  const res = await fetch(`http://localhost:3080/posts/${params.postId}`)
  const data = (await res.json()) as PostItem

  return (
    <Link href="/home/follows">
      <div className="image_modal">
        <img src={data.postImageUrl} className="image_modal-content" />
      </div>
    </Link>
  )
}

export default PostModal
