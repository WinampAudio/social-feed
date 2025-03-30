import { socialPosts } from "src/server/mock-data";
import CardSocial from "~/components/CardSocial";

export function Feed() {
    return (
        <div className="container max-w-xl">
            <div className='flex flex-col gap-4'>
                {socialPosts.map((post) => (
                    <CardSocial 
                        key={post.uid} 
                        post={post}
                    />
                ))}
            </div>
        </div>
    );
}
