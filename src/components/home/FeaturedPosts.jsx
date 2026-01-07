import React from 'react';
import post1 from '../../assets/images/blog/post-1.png';
import post2 from '../../assets/images/blog/post-2.png';
import post3 from '../../assets/images/blog/post-3.png';
import postDateIcon from '../../assets/icons/post-date-icon.png';
import postCommentsIcon from '../../assets/icons/post-comments-icon.png';
import postArrowIcon from '../../assets/icons/post-arrow-icon.png';

const blogPosts = [
    { id: 1, image: post1, title: "Loudest à la Madison #1 (L'integral)" },
    { id: 2, image: post2, title: "Loudest à la Madison #1 (L'integral)" },
    { id: 3, image: post3, title: "Loudest à la Madison #1 (L'integral)" },
];

const FeaturedPosts = () => {
    return (
        <section className="py-28 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h6 className="font-bold text-[14px] text-[#23A6F0] mb-2">Practice Advice</h6>
                    <h2 className="font-bold text-[40px] text-[#252B42] mb-2">Featured Posts</h2>
                    <p className="text-[#737373] text-[14px] max-w-[469px] mx-auto">
                        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
                    {blogPosts.map(post => (
                        <div key={post.id} className="shadow-md relative bg-white group h-full">
                            {/* Image with Tag */}
                            <div className="relative overflow-hidden aspect-[348/300]">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition duration-300 group-hover:scale-105" />
                                <span className="absolute top-5 left-5 bg-[#E74040] text-white px-[10px] rounded-[3px] font-bold text-[14px] leading-[24px] shadow-md">NEW</span>
                            </div>

                            {/* Content */}
                            <div className="p-[25px] flex flex-col gap-[10px] text-left">
                                <div className="flex gap-[15px] text-[12px]">
                                    <span className="text-[#8EC2F2]">Google</span>
                                    <span className="text-[#737373]">Trending</span>
                                    <span className="text-[#737373]">New</span>
                                </div>
                                <h4 className="font-normal text-[20px] text-[#252B42] leading-[30px] group-hover:text-[#23A6F0] transition-colors cursor-pointer max-w-[247px]">
                                    {post.title}
                                </h4>
                                <p className="font-normal text-[14px] text-[#737373] leading-[20px] max-w-[280px]">
                                    We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                                </p>

                                {/* Meta Info */}
                                <div className="flex justify-between py-[15px] text-[12px] text-[#737373]">
                                    <div className="flex items-center gap-[5px]">
                                        <img src={postDateIcon} alt="Date" />
                                        <span>22 April 2021</span>
                                    </div>
                                    <div className="flex items-center gap-[5px]">
                                        <img src={postCommentsIcon} alt="Comments" />
                                        <span>10 comments</span>
                                    </div>
                                </div>

                                {/* Learn More */}
                                <div className="flex items-center gap-[10px] font-bold text-[14px] text-[#737373] cursor-pointer hover:text-[#23A6F0]">
                                    <span>Learn More</span>
                                    <img src={postArrowIcon} alt="arrow" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedPosts;
