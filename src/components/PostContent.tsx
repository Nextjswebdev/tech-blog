// components/PostContent.tsx
type PostContentProps = {
    title: string;
    date: string;
    content: string;
  };
  
  const PostContent: React.FC<PostContentProps> = ({ title, date, content }) => {
    return (
      <div className="flex justify-center">
      <div className="w-4/5 lg:w-3/5 p-4 font-custom">
        <h1 className="text-2xl font-bold mb-2 text-gray-400">{title}</h1>
        <span className="text-sm text-gray-600">{date}</span>
        <div className="mt-4 text-gray-300" dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div>
    );
  };
  
  export default PostContent;
  