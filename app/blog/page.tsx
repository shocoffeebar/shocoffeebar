import { posts } from "@/posts/posts";
import { IPost } from "@/types/post";

function PostItem({ post }: { post: IPost }) {
  if (!post) {
    return <div>Internal Error!</div>;
  }
  return (
    <div className="flex flex-col w-full items-center">
      <div className={`flex flex-col w-full max-w-full max-w-screen-xl md:pb-16 md:px-24 px-4 pb-8`}>
        {
          post.imageUrl && <img src={post.imageUrl.startsWith('http') ? post.imageUrl : ('/blog'.concat(post.imageUrl!))}></img>
        }
        <a className={'post-item'} href={'blog/' + encodeURI(post.title)}>
          <h3 className={"text-[32px] md:text-[40px] p-2 font-[300] underline"}>
            {post.title}
          </h3>
        </a>
        <div className={`text-[16px] md:text-[20px] font-[300] space-y-8 line-clamp-2`}></div>
      </div>
    </div >
  );
}

export default function Blog() {
  return (
    <div className="flex flex-row flex-wrap">
      {
        posts.map((post, index) => {
          if (!post) return;
          return (
            <PostItem post={post} key={index}></PostItem>
          )
        })
      }
    </div>
  );
}