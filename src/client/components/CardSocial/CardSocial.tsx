import { FC } from 'react';
import { SocialPost } from '../../../models';
import CardSocialHeader from './content/CardSocialHeader';
import CardSocialFooter from './content/CardSocialFooter';

interface CardSocialProps {
    post: SocialPost;
}

const CardSocial: FC<CardSocialProps> = ({ post }) => {
    const userName = `${post.user.firstName} ${post.user.lastName}`;
    const image = post.image?.imagePath;
    const imageAlt = post.image?.imageFriendlyName || 'Post image';

    return (
        <div className='bg-white rounded-lg p-6 flex flex-col gap-4'>
            <CardSocialHeader
                userName={userName}
                profilePicture={post.user.profilePicture}
                createdAt={post.createdAt}
            />
            <p>{post.content}</p>
            {image && (
                <div className="bg-zinc-700 rounded-lg aspect-square overflow-hidden flex items-center justify-center">
                    <img src={image} alt={imageAlt} className="object-contain" />
                </div>
            )}
            <CardSocialFooter
                commentsCount={post.commentsCount}
                likesCount={post.likesCount}
            />
        </div>
    );
};

export default CardSocial;
