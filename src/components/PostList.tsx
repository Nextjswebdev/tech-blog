// components/PostList.tsx
import PostCard from './PostCard';

const posts = [
  {
    title: 'Country Flag Icon Packs',
    description: 'Discovering robust alternatives to Fixer.io API for currency conversion in the dynamic landscape of financial technology.',
    date: '22 Mar',
    slug: 'country-flag-icon-packs',
    image: '/images/flag-icon.jpg',   
  },
  {
    title: 'Free Alternative of Font Awesome',
    description: 'Discovering robust alternatives to Font Awesome for modern web design.',
    date: '16 Mar',
    slug: 'free-alternative-of-font-awesome',
    image: '/images/font-awesome-icon.jpg',
  },
  {
    title: 'Use SVG icons in React.js',
    description: 'Learn how to use SVG icons in your React.js projects for better scalability and maintainability.',
    date: '14 Mar',
    slug: 'use-svg-icons-in-react-js',
    image: '/images/react-icon.jpg',
  },
  {
    title: 'A list of Open Source Icon Collections',
    description: 'Discover 10+ high-quality open-source icon libraries for your web design projects.',
    date: '12 Mar',
    slug: 'list-of-open-source-icon-collections',
    image: '/images/open-source-icon.jpg',
  },
  {
    title: 'Icon Design Principles',
    description: 'Explore the fundamental principles of designing effective and aesthetically pleasing icons.',
    date: '10 Mar',
    slug: 'icon-design-principles',
    image: '/images/icon-design.jpg',
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
