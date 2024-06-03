// components/PostList.tsx
import PostCard from './PostCard';

const posts = [
  {
    title: 'The Limitations of the Internet',
    description: "Internet's Challenges: Privacy, Security, Reliability, and Solutions Explored",
    date: '22 Mar 2024',
    slug: 'limitation-of-internet',
    image: '/images/article1.jpeg',   
  },
  {
    title: 'Benefits of Artificial Intelligence',
    description: 'Artificial Intelligence offers a plethora of benefits that are transforming industries, driving innovation, and improving quality of life.',
    date: '16 Mar 2024',
    slug: 'benefits-of-ai',
    image: '/images/article2.jpg',
  },
  {
    title: 'The Future of Blockchain Technology',
    description: 'The future of blockchain technology is brimming with innovation and transformative potential across diverse sectors.',
    date: '14 Mar 2024',
    slug: 'future-of-blockchain',
    image: '/images/article3.jpg',
  },
];


const PostList: React.FC = () => {
  return (
    <div className="p-4">
      {posts.map((post) => (
        <PostCard
          key={post.slug}
          title={post.title}
          description={post.description}
          date={post.date}
          slug={post.slug}
          image={post.image}
        />
      ))}
    </div>
  );
};

export default PostList;
