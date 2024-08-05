import { posts } from "@/posts/posts";
import Post from "./[title]/post";

export default function Blog() {
  return (
    <div className="flex flex-row flex-wrap">
      {
        posts.map((post, index) => {
          if (!post) return;
          return (
            <Post params={{title: post.title}} post={post} key={index}></Post>
          )
        })
      }
    </div>
  );
}