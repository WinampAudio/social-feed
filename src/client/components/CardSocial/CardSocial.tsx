import { FC } from 'react';
import { SocialPost } from '../../../models';

interface CardSocialProps {
    post: SocialPost;
}

const CardSocial:FC<CardSocialProps> = ({ post }) => {
    const userName = `${post.user.firstName} ${post.user.lastName}`;
    const image = post.image?.imagePath;
    const imageAlt = post.image?.imageFriendlyName || 'Post image';

    return (
        <div className='bg-white rounded-lg p-4 pb-6 flex flex-col gap-4'>
            <div className="flex items-center gap-3">
                <img 
                    src={post.user.profilePicture} 
                    alt={userName} 
                    className="w-10 h-10 rounded-xs object-cover"
                />
                <div>
                    <p className="font-bold">{userName}</p>
                    <p className="text-xs text-gray-500">{post.createdAt}</p>
                </div>
            </div>
            <p>{post.content}</p>
            {image && (
                <div className="bg-zinc-700 rounded-lg aspect-square overflow-hidden flex items-center justify-center">
                    <img src={image} alt={imageAlt} className="object-contain" />
                </div>
            )}
        </div>
    );
};

export default CardSocial;
