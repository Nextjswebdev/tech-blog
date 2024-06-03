// app/posts/[slug]/page.tsx
import { notFound } from 'next/navigation';
import PostContent from '../../../components/PostContent';

// Define the type for the params object
type Params = {
  slug: string;
};

// Define the type for the PostPage props
type PostPageProps = {
  params: Params;
};

const posts: { [key: string]: { title: string; date: string; content: string; image : string } } = {
  'limitation-of-internet': {
    title: "The Limitations of the Internet: Navigating a Vast Digital Landscape",
    date: "22 Mar 2024",
    content: `
        <p>In today's hyper-connected world, the internet has become an indispensable tool for communication, information sharing, commerce, entertainment, and much more. However, despite its myriad benefits, the internet also comes with its set of limitations and challenges that users must navigate. Let's delve into some of these limitations and how they impact our online experience. Let's delve into some of these limitations and how they impact our online experience.</p>
        <br />
        <ul>
          <li><strong style="color:#600707" >Accessibility: </strong>  One of the primary limitations of the internet is the issue of accessibility. While internet penetration has significantly increased globally, there are still areas with limited or no access to reliable internet connections. This digital divide creates disparities in access to information, education, and opportunities, impacting individuals and communities differently based on their geographical location and socioeconomic status.</li>
          <br />
          <li><strong style="color:#600707" > Reliability and Security: </strong>The internet is a vast network comprising millions of interconnected devices and systems. While this interconnectedness facilitates seamless communication and data sharing, it also exposes users to various security threats such as malware, phishing attacks, data breaches, and identity theft. Ensuring the reliability and security of online platforms and transactions remains an ongoing challenge that requires continuous innovation and vigilance.</li>
          <br />
          <li><strong style="color:#600707" >Information Overload:</strong> With the abundance of information available on the internet, users often face the challenge of information overload. Sorting through vast amounts of data to find accurate, relevant, and credible information can be overwhelming. This influx of information also contributes to the spread of misinformation, fake news, and conspiracy theories, highlighting the need for digital literacy and critical thinking skills among internet users.</li>
          <br />
          <li><strong style="color:#600707" >Privacy Concerns: </strong> The internet collects vast amounts of data about users' online activities, preferences, and behaviors. While this data can be used to enhance user experiences and personalize services, it also raises concerns about privacy and data protection. Unauthorized data collection, tracking, and profiling by companies and third parties can infringe on users' privacy rights, leading to debates about data ethics, consent, and regulatory frameworks.

          </li>
          <br />
          <li><strong style="color:#600707" > Digital Addiction and Mental Health: </strong> The constant connectivity and instant gratification offered by the internet can contribute to digital addiction and have implications for mental health. Excessive use of social media, online gaming, and digital devices can lead to issues such as anxiety, depression, sleep disturbances, and reduced real-world interactions. Balancing online activities with offline experiences and practicing digital wellness are essential for maintaining overall well-being in the digital age.</li>
          <br />
          <li><strong style="color:#600707" >Content Quality and Censorship:</strong> The internet hosts a diverse range of content, from educational resources and creative works to harmful and illegal material. Ensuring content quality, accuracy, and relevance is a challenge, especially in unregulated or lightly regulated online spaces. Content moderation, censorship, and regulatory measures are often debated topics, as they involve balancing freedom of expression with the need to protect users from harmful content and hate speech.</li>
        </ul>
        <br/>
        <h2 style="color:#600707">Conclusion:</h2> 
        <p>While the internet has revolutionized the way we communicate, learn, work, and connect, it also presents a complex landscape of challenges and limitations. Addressing these limitations requires a multi-faceted approach involving technological innovations, policy interventions, digital literacy initiatives, and ethical considerations. By recognizing and navigating the limitations of the internet, we can harness its full potential while mitigating its negative impacts on individuals, societies, and the global digital ecosystem.</p>
      `,
      image: '/images/article1.jpeg'
  },
  'benefits-of-ai': {
    title: "Unlocking the Benefits of Artificial Intelligence: Transforming Industries and Enhancing Lives",
    date: "10 May 2024",
    content: `
        <p>Artificial Intelligence (AI) is revolutionizing various sectors, from healthcare and finance to transportation and manufacturing. This transformative technology offers a myriad of benefits that are reshaping industries and enhancing lives. Let's explore some of the key advantages of AI and its impact on our world.</p>
        <br />
        <ul>
            <li><strong style="color:#600707">Automation and Efficiency:</strong> AI-powered systems and algorithms automate repetitive tasks, streamline processes, and improve operational efficiency. From robotic process automation (RPA) to intelligent data analysis, AI enhances productivity and reduces human error.</li>
            <br />
            <li><strong style="color:#600707">Personalized Experiences:</strong> AI algorithms analyze vast amounts of data to deliver personalized experiences and recommendations. This personalization extends to e-commerce, content consumption, healthcare treatments, and more, enhancing user satisfaction and engagement.</li>
            <br />
            <li><strong style="color:#600707">Predictive Analytics:</strong> AI enables predictive analytics by analyzing historical data patterns and making data-driven forecasts. This capability is valuable in risk assessment, demand forecasting, fraud detection, and proactive maintenance across various industries.</li>
            <br />
            <li><strong style="color:#600707">Improved Healthcare:</strong> AI technologies like machine learning and image recognition enhance medical diagnostics, drug discovery, patient care, and health monitoring. AI-powered healthcare solutions improve treatment outcomes and reduce healthcare costs.</li>
            <br />
            <li><strong style="color:#600707">Enhanced Safety and Security:</strong> AI-driven solutions enhance safety and security measures through facial recognition, anomaly detection, and predictive policing. AI also plays a crucial role in cybersecurity by detecting and mitigating threats in real-time.</li>
        </ul>
        <br />
        <h2 style="color:#600707">Conclusion:</h2>
        <p>Artificial Intelligence offers a plethora of benefits that are transforming industries, driving innovation, and improving quality of life. Embracing AI technologies requires a balance between innovation and ethical considerations to maximize its potential while addressing societal challenges.</p>
    `,
    image: '/images/article2.jpg'
},

  'future-of-blockchain': {
    title: "The Future of Blockchain Technology: Innovations, Applications, and Beyond",
    date: "18 July 2024",
    content: `
        <p>Blockchain technology has evolved beyond its initial association with cryptocurrencies like Bitcoin. Today, blockchain is revolutionizing various industries and paving the way for decentralized solutions, transparency, and trust in digital transactions. Let's explore the future of blockchain and its potential impact on our world.</p>
        <br />
        <ul>
            <li><strong style="color:#600707">Decentralized Finance (DeFi):</strong> Blockchain enables decentralized finance platforms that offer banking services, lending, trading, and asset management without traditional intermediaries. DeFi unlocks financial inclusion and disrupts traditional finance models.</li>
            <br />
            <li><strong style="color:#600707">Supply Chain Management:</strong> Blockchain enhances supply chain transparency, traceability, and efficiency by recording transactions and product provenance on an immutable ledger. This reduces fraud, enhances product authenticity, and improves supply chain resilience.</li>
            <br />
            <li><strong style="color:#600707">Smart Contracts:</strong> Blockchain-based smart contracts automate and enforce contract terms without intermediaries, reducing costs and improving transaction speed. Smart contracts find applications in legal agreements, real estate transactions, and logistics.</li>
            <br />
            <li><strong style="color:#600707">Digital Identity:</strong> Blockchain provides secure and tamper-proof digital identity solutions, protecting personal data and enabling self-sovereign identity management. This has implications for identity verification, access control, and privacy protection.</li>
            <br />
            <li><strong style="color:#600707">Energy and Sustainability:</strong> Blockchain facilitates peer-to-peer energy trading, grid management, and carbon credit tracking, promoting renewable energy adoption and sustainability initiatives. Blockchain-based solutions enhance energy efficiency and reduce carbon footprints.</li>
        </ul>
        <br />
        <h2 style="color:#600707">Conclusion:</h2>
        <p>The future of blockchain technology is brimming with innovation and transformative potential across diverse sectors. Embracing blockchain's decentralized, transparent, and secure nature opens doors to new opportunities and efficiencies, reshaping industries and economies.</p>
    `,
    image: '/images/article3.jpg'
},
};

export default function PostPage({ params }: PostPageProps) {
  const { slug } = params;
  const post = posts[slug];

  if (!post) {
    notFound();
  }

  return (
    <PostContent title={post.title} date={post.date} content={post.content} image={post.image}/>
  );
}
