import { FC, useState, useRef, useEffect } from 'react';
import { Button } from '~/components/Button';

interface CardSocialContentProps {
    content: string;
}

const MAX_LINES = 3;
const LINE_HEIGHT = 24; // Assuming 1.5 line height for text-base (16px * 1.5)

const CardSocialContent: FC<CardSocialContentProps> = ({ content }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef<HTMLParagraphElement>(null);
    const [shouldTruncate, setShouldTruncate] = useState(false);

    useEffect(() => {
        if (contentRef.current) {
            const contentHeight = contentRef.current.scrollHeight;
            const maxHeight = LINE_HEIGHT * MAX_LINES;
            setShouldTruncate(contentHeight > maxHeight);
        }
    }, [content]);

    return (
        <div>
            <p
                ref={contentRef}
                className={`text-base ${!isExpanded && shouldTruncate ? 'line-clamp-3' : ''}`}
            >
                {content}
            </p>
            {shouldTruncate && (

                // TODO: Create a component that can function as either a link or a button, with link styling.
                // TODO: challenge the Link styling for accessibility (Touch area size)
                <Button
                    className='p-0 font-bold hover:underline'
                    ariaLabel={isExpanded ? 'show less' : 'read more'}
                    variant="ghost"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded ? 'Show less' : 'Read more'}
                </Button>
            )}
        </div>
    );
};

export default CardSocialContent;
