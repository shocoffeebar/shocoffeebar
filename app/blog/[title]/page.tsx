import { posts } from "@/posts/posts";
import { IPost } from "@/types/post";

export default function Post({ params, post }: { params: { title: string }, post?: IPost }) {
  let isShort = !params.title.length;
  if (!post) {
    post = posts.find(post => post.title === decodeURIComponent('Why%20Coffee%20is%20So%20Great%3A%20A%20Celebration%20of%20the%20World’s%20Favorite%20Brew'));
    if (!post) {
      console.log(decodeURIComponent('Why%20Coffee%20is%20So%20Great%3A%20A%20Celebration%20of%20the%20World’s%20Favorite%20Brew'));
      return <></>
    }
  }
  return (
    <div className="flex flex-col w-full items-center">
      <div className={`flex flex-col w-full max-w-full max-w-screen-xl  ${isShort ? 'md:pb-16 md:px-24 px-4 pb-8' : ''}`}>
        <img src={post.imageUrl}></img>
        <a className={!isShort ? 'pointer-events-none' : ''} href={'blog/' + encodeURI(post.title)}>
          <h3 className={`text-[32px] md:text-[40px] p-2 font-[300] ${isShort ? 'underline' : ''}`}>
            {post.title}
          </h3>
        </a>
        <div className={`text-[16px] md:text-[20px] font-[300] space-y-8 ${isShort ? "line-clamp-2" : "flex flex-col md:px-24 px-4 md:py-16 py-8 w-full"}`} dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </div>
    </div >
  );
}