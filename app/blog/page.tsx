import Post from "@/components/post";
import { posts } from "@/posts/posts";

export default function Blog() {
  return (
    <div className="flex flex-row flex-wrap">
      {
        posts.map((post, index) => {
          if (!post) return;
          return (
            <Post post={post} isShort={true} key={index}></Post>
          )
        })
      }
    </div>
  );
}