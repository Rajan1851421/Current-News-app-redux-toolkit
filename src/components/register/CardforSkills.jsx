import React from 'react';

function CardforSkills() {
    const cards = [
        {
            bgColor: "bg-orange-500",
            imgSrc: "https://cdn.pixabay.com/photo/2017/03/30/13/33/html-2188441_640.png",
            category: "",
            title: "HTML5",
            
            textColor: "text-orange-500",
        },
        {
            bgColor: "bg-teal-500",
            imgSrc: "https://cdn.pixabay.com/photo/2017/03/30/17/41/javascript-2189147_640.png",
            category: "Medium",
            title: "Javascript",
            
            textColor: "text-teal-500",
        },
        {
            bgColor: "bg-purple-500",
            imgSrc: "https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_1280.png",
            category: "Biggner",
            title: "Node Js",
            
            textColor: "text-purple-500",
        },
    ];

    return (
        <div className="p-1 flex flex-wrap items-center justify-center">
            {cards.map((card, index) => (
                <div key={index} className={`flex-shrink-0 m-6 relative overflow-hidden h-80 ${card.bgColor} rounded-lg max-w-xs shadow-lg`}>
                    <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ transform: 'scale(1.5)', opacity: '0.1' }}>
                        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                    </svg>
                    <div className="relative pt-10 px-10 flex items-center justify-center">
                        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                            style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: '0.2' }}>
                        </div>
                        <img className="relative w-40" src={card.imgSrc} alt={card.title} />
                    </div>
                    <div className="relative flex flex-col justify-center text-white px-6 pb-6 mt-6">
                        <span className="block opacity-75 -mb-1">{card.category}</span>
                        <div className="flex justify-between">
                            <span className="block font-semibold text-xl text-center ">{card.title}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardforSkills;
