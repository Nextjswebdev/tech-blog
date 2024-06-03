// components/PostCard.tsx
import Image from 'next/image';
import Link from 'next/link';

type PostCardProps = {
  title: string;
  description: string;
  date: string;
  slug: string;
  image: string;
};

const PostCard: React.FC<PostCardProps> = ({ title, description, date, slug, image }) => {
  return (
    <Link href={`/posts/${slug}`}>
     <div className="flex justify-center">
  <div className="flex items-center bg-yellow-100 p-4 rounded-lg mb-4 cursor-pointer hover:bg-yellow-200 w-1/2">
    <Image 
      src={image} 
      alt={title} 
      width={64}  // Specify the width of the image
      height={64}  // Specify the height of the image
      className="w-16 h-16 rounded-full mr-4" 
    />
    <div>
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <span className="text-sm text-gray-400">{date}</span>
    </div>
  </div>
</div>

    </Link>
  );
};

export default PostCard;
