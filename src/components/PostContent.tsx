import Image from "next/image";

// components/PostContent.tsx
type PostContentProps = {
    title: string;
    date: string;
    content: string;
    image: string;
  };
  
  const PostContent: React.FC<PostContentProps> = ({ title, date, content, image }) => {
    return (
      <div className="flex justify-center">
      <div className="w-4/5 lg:w-3/5 p-4 font-custom">
        <h1 className="text-2xl font-bold mb-2 text-[#600707]">{title}</h1>
        <span className="text-sm text-gray-600">{date}</span>
        <Image src={image} alt={title} width={800} height={400} className="rounded-lg mt-4" />
        <div className="mt-4 text-black pb-[3rem]" dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div>
    );
  };
  
  export default PostContent;
  