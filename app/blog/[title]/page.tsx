'use client'
import { posts } from "@/posts/posts";
import { redirect } from "next/navigation";
import { useParams } from 'next/navigation'

export default function Page() {
  const params = useParams<{ title: string }>()
  const post = posts.find(post => post.title === decodeURIComponent(params.title));
  if (!post) {
    return redirect('/404');
  }
  return (
    <div className="flex flex-col w-full items-center">
      <div className={`flex flex-col w-full max-w-full max-w-screen-xl md:pb-16 md:px-24 px-4 pb-8`}>
        {
          post.imageUrl && <img src={post.imageUrl.startsWith('http') ? post.imageUrl : ('.'.concat(post.imageUrl!))}></img>
        }
        <a className={'pointer-events-none'} href={'blog/' + encodeURI(post.title)}>
          <h3 className={"text-[32px] md:text-[40px] p-2 font-[300]"}>
            {post.title}
          </h3>
        </a>
        <div className={"text-[16px] md:text-[20px] font-[300] space-y-8"} dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </div>
    </div >
  );
}
