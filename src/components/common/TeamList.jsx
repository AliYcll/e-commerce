import React from 'react';
import user1 from '../../assets/images/team/user-1.png';
import user2 from '../../assets/images/team/user-2.png';
import user3 from '../../assets/images/team/user-3.jpg';
import user4 from '../../assets/images/team/user-4.png';
import user5 from '../../assets/images/team/user-5.jpg';
import user6 from '../../assets/images/team/user-6.jpg';
import user7 from '../../assets/images/team/user-7.png';
import user8 from '../../assets/images/team/user-8.jpg';
import user9 from '../../assets/images/team/user-9.jpg';
import facebookIcon from '../../assets/icons/team/team-facebook.png';
import instagramIcon from '../../assets/icons/team/team-instagram.png';
import twitterIcon from '../../assets/icons/team/team-twitter.png';

const teamMembers = [
    { id: 1, img: user1, name: 'Ali Yücel', role: 'FullStack Developer' },
    { id: 2, img: user2, name: 'Username', role: 'Profession' },
    { id: 3, img: user3, name: 'Username', role: 'Profession' },
    { id: 4, img: user4, name: 'Username', role: 'Profession' },
    { id: 5, img: user5, name: 'Username', role: 'Profession' },
    { id: 6, img: user6, name: 'Username', role: 'Profession' },
    { id: 7, img: user7, name: 'Username', role: 'Profession' },
    { id: 8, img: user8, name: 'Username', role: 'Profession' },
    { id: 9, img: user9, name: 'Username', role: 'Profession' },
];

const TeamList = ({ limit }) => {
    const displayedMembers = limit ? teamMembers.slice(0, limit) : teamMembers;

    return (
        <div className="grid md:grid-cols-3 gap-8">
            {displayedMembers.map((member) => (
                <div key={member.id} className="flex flex-col items-center group">
                    <div className="w-full h-[320px] overflow-hidden mb-6">
                        <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <h5 className="font-bold text-primary text-xl mb-2">{member.name}</h5>
                    <h6 className="text-text-gray font-bold mb-4">{member.role}</h6>
                    <div className="flex gap-4 text-secondary">
                        <img src={facebookIcon} alt="Facebook" className="w-6 h-6 hover:scale-110 transition-transform cursor-pointer" />
                        <img src={instagramIcon} alt="Instagram" className="w-6 h-6 hover:scale-110 transition-transform cursor-pointer" />
                        <img src={twitterIcon} alt="Twitter" className="w-6 h-6 hover:scale-110 transition-transform cursor-pointer" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TeamList;
