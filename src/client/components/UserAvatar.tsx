import * as Avatar from '@radix-ui/react-avatar';

const UserAvatar = ({ src, alt }: { src?: string; alt: string }) => {
  return (
    <Avatar.Root className="inline-block relative w-12 h-12">
      <Avatar.Image
        className="w-full h-full rounded-md object-cover"
        src={src}
        alt={alt}
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
          e.currentTarget.src = 'fallback-image-url.jpg';
        }}
      />
      <Avatar.Fallback className="absolute inset-0 flex items-center justify-center text-zinc-100 bg-zinc-900 rounded-md text-xl font-bold">
        {alt.charAt(0).toUpperCase()}
      </Avatar.Fallback>
    </Avatar.Root>
  );
};

export default UserAvatar;
