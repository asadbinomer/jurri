import React from 'react'
import SmallText from '../../component/SmallText'
import Heading from '../../component/Heading'
import Link from '../../component/Link'
import AnimatedLink from '../../component/AnimatedLink'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      image: "/images/pages/home/blog/Blog1.avif",
      category: "BUSINESS",
      title: "Understanding the Basics of Contract Law for Small Business Owners",
      description: "Learn essential contract law principles to protect your business interests and avoid common pitfalls in contractual agreements."
    },
    {
      id: 2,
      image: "/images/pages/home/blog/Blog2.avif",
      category: "TAXES",
      title: "Securing Your Family's Future with Proper Wills and Trusts",
      description: "Discover the importance of estate planning and how wills and trusts can safeguard your assets and provide peace of mind."
    },
    {
      id: 3,
      image: "/images/pages/home/blog/Blog3.avif",
      category: "LEGAL",
      title: "What to Do When Facing Criminal Charges and How to Protect",
      description: "Explore effective defense strategies and your rights when facing criminal charges, ensuring fair treatment and a strong legal defense."
    }
  ];

  return (
    <div className="w-full px-32 py-20 flex items-center justify-center">
      <div className="w-full max-w-[1400px] flex flex-col gap-8">
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-2">
            <SmallText>Blog</SmallText>
            <Heading className='!text-[64px]'>Our Latest News</Heading>
          </div>
          <Link>All Articles</Link>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="w-full flex flex-col gap-4 cursor-pointer">
              <div className="w-full relative group overflow-hidden">
                <img 
                  src={post.image} 
                  draggable="false" 
                  className='group-hover:scale-[106%] w-full transition-all duration-400 select-none' 
                  alt={post.title} 
                />
                <div className="w-fit px-3 py-2 text-xs montserrat-500 text-white border border-[#fff]/10 backdrop-blur-[15px] leading-none absolute left-6 bottom-[18px]">
                  {post.category}
                </div>
              </div>
              <div className="w-full px-5 flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <Heading className='!text-2xl'>{post.title}</Heading>
                  <p className="text-[#0D1C2999] satoshi-500">{post.description}</p>
                </div>
                <AnimatedLink>Read Article</AnimatedLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog