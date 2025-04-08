import { type FC, useEffect, useRef, useState } from "react";
import Button from "~/components/ui/Button";

type CardSocialContentProps = {
  content: string;
  image?: {
    imagePath: string;
    imageFriendlyName?: string;
  };
};

const MAX_LINES = 3;
const LINE_HEIGHT = 24;

const CardSocialContent: FC<CardSocialContentProps> = ({ content, image }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLParagraphElement>(null);
  const [shouldTruncate, setShouldTruncate] = useState(false);

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      const maxHeight = LINE_HEIGHT * MAX_LINES;
      setShouldTruncate(contentHeight > maxHeight);
    }
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <p
          ref={contentRef}
          className={`text-base ${!isExpanded && shouldTruncate && `line-clamp-3`}`}
        >
          {content}
        </p>
        {shouldTruncate && (
          <Button
            className="p-0 font-bold hover:underline justify-start"
            ariaLabel={isExpanded ? "show less" : "read more"}
            variant="ghost"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Show less" : "Read more"}
          </Button>
        )}
      </div>
      {image && (
        <div className="bg-zinc-700 rounded-lg aspect-square overflow-hidden flex items-center justify-center">
          <img
            src={image.imagePath}
            alt={image.imageFriendlyName || "Post image"}
            className="object-cover w-full h-full"
          />
        </div>
      )}
    </div>
  );
};

export default CardSocialContent;
