import { posts } from "@/posts/posts";
import { IPost } from "@/types/post";
import { redirect } from "next/navigation";

export default function Post({ params, post }: { params: { title: string }, post?: IPost }) {
  let isShort = !params.title.length;
  if (!post) {
    post = posts.find(post => post.title === decodeURIComponent(params.title));
    if (!post) {
      return redirect('/404');
    }
  }
  return (
    <div className="flex flex-col w-full items-center">
      <div className={`flex flex-col w-full max-w-full max-w-screen-xl md:pb-16 md:px-24 px-4 pb-8`}>
        {
          post.imageUrl && <img src={post.imageUrl.startsWith('http') ? post.imageUrl : ((isShort ? '/blog' : '.').concat(post.imageUrl!))}></img>
        }
        <a className={!isShort ? 'pointer-events-none' : ''} href={'blog/' + encodeURI(post.title)}>
          <h3 className={`text-[32px] md:text-[40px] p-2 font-[300] ${isShort ? 'underline' : ''}`}>
            {post.title}
          </h3>
        </a>
        <div className={`text-[16px] md:text-[20px] font-[300] space-y-8 ${isShort ? "line-clamp-2" : ""}`} dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </div>
    </div >
  );
}