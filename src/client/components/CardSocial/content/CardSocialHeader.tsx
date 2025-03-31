import { FC } from 'react';
import { Ellipsis } from 'lucide-react';
import { Button } from '~/components/Button';
import UserAvatar from '../../UserAvatar';

interface CardSocialHeaderProps {
    userName: string;
    profilePicture: string;
    createdAt: string;
}

const CardSocialHeader: FC<CardSocialHeaderProps> = ({ userName, profilePicture, createdAt }) => {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return `${date.toLocaleString('en-US', { month: 'long' })} ${date.getDate()}, ${date.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}`;
    };

    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <UserAvatar 
                    src={profilePicture} 
                    alt={userName} 
                />
                <div>
                    <p className="font-bold text-md">{userName}</p>
                    <p className="text-sm text-zinc-500 font-medium">{formatDate(createdAt)}</p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <Button ariaLabel="show more options" variant="ghost" onClick={() => {}} disabled>
                    <Ellipsis /> 
                </Button>
            </div>
        </div>
    );
};

export default CardSocialHeader;
