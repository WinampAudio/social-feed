import { FC } from 'react';
import { SocialPost } from '../../../models';
import UserAvatar from '../UserAvatar';
import { Button } from '~/components/Button';  
import { Ellipsis, MessageCircle, Heart, Activity } from 'lucide-react';

interface CardSocialProps {
    post: SocialPost;
}

const CardSocial:FC<CardSocialProps> = ({ post }) => {
    const userName = `${post.user.firstName} ${post.user.lastName}`;
    const image = post.image?.imagePath;
    const imageAlt = post.image?.imageFriendlyName || 'Post image';

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return `${date.toLocaleString('en-US', { month: 'long' })} ${date.getDate()}, ${date.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}`;
    };

    return (
        <div className='bg-white rounded-lg p-6 flex flex-col gap-4'>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <UserAvatar 
                        src={post.user.profilePicture} 
                        alt={userName} 
                    />
                    <div>
                        <p className="font-bold text-md">{userName}</p>
                        <p className="text-sm text-zinc-500 font-medium">{formatDate(post.createdAt)}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Button ariaLabel="show more options" variant="ghost" onClick={() => {}} disabled>
                        <Ellipsis /> 
                    </Button>
                </div>
            </div>
            <p>{post.content}</p>
            {image && (
                <div className="bg-zinc-700 rounded-lg aspect-square overflow-hidden flex items-center justify-center">
                    <img src={image} alt={imageAlt} className="object-contain" />
                </div>
            )}
            <div className="flex items-center justify-end gap-3">
                <Button ariaLabel="show comments" variant="ghost" onClick={() => {}} size="xs">
                    <MessageCircle /> {post.commentsCount} comments
                </Button>
                <Button ariaLabel="add a like" variant="ghost" onClick={() => {}} size="xs">
                    <Heart/> {post.likesCount} likes
                </Button>
                <Button ariaLabel="navigate to analytics" variant="ghost" to="/" size="xs">
                    <Activity/> Analytics
                </Button>
            </div>

        </div>
    );
};

export default CardSocial;
