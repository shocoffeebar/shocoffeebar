import Post from "@/components/post";

export default function PostPage({ params }: { params: { title: string }}) {
  return (
    <Post params={params} isShort={false}></Post>
  )
}