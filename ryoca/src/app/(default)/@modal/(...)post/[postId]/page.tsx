import Dialog from '@/components/Dialog/Dialog'
import { PostItem } from '@/types'

async function PostModal({ params }: { params: { postId: string } }) {
  const res = await fetch(`http://localhost:3080/posts/${params.postId}`)
  const data = (await res.json()) as PostItem

  return (
    <Dialog open>
      <div className="image_modal">
        <img src={data.postImageUrl} className="image_modal-content" />
      </div>
    </Dialog>
  )
}

export default PostModal
