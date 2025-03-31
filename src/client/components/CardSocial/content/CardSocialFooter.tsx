import { FC } from 'react';
import { MessageCircle, Heart, Activity } from 'lucide-react';
import { Button } from '~/components/Button';

interface CardSocialFooterProps {
    commentsCount: number;
    likesCount: number;
}

const CardSocialFooter: FC<CardSocialFooterProps> = ({ commentsCount, likesCount }) => {
    return (
        <div className="flex items-center justify-end gap-3 flex-wrap">
            <Button ariaLabel="show comments" variant="ghost" onClick={() => {}} size="xs">
                <MessageCircle /> {commentsCount} comments
            </Button>
            <Button ariaLabel="add a like" variant="ghost" onClick={() => {}} size="xs">
                <Heart/> {likesCount} likes
            </Button>
            <Button ariaLabel="navigate to analytics" variant="ghost" to="/" size="xs">
                <Activity/> Analytics
            </Button>
        </div>
    );
};

export default CardSocialFooter;
