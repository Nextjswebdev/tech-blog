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

      <div className="flex justify-center">
        <div className="bg-yellow-100 p-4 rounded-lg mb-4 cursor-pointer hover:bg-yellow-200 w-full sm:w-1/2 lg:w-1/3 flex flex-col lg:flex-row items-center">
          <Image 
            src={image} 
            alt={title} 
            width={64} 
            height={64}   
            className="w-16 h-16 rounded-full mr-0 lg:mr-4 mb-4 lg:mb-0" 
          />
         <Link href={`/posts/${slug}`}>
          <div className="text-center lg:text-left">
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="text-gray-600">{description}</p>
            <span className="text-sm text-gray-400">{date}</span>

          </div>
          </Link>
        </div>
      </div>
 
  );
};

export default PostCard;
