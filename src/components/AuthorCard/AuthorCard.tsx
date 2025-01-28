import React from 'react';


interface Author {
    name: string;
    title: string;
    description: string;
    image: string;
}

const AuthorCard: React.FC<{ author: Author }> = ({ author: author }) => {

    const { name, title, description, image } = author;
    return (
        <div className="w-[370px] h-[488px]  mt-10 border border-gray-100 shadow-lg bg-slate-100 p-2 inline-block">
            <div className="flex rounded-lg flex-col items-center space-y-2">
                <img src={image} alt="book1" className="w-40 h-48 object-cover" />
                
                <h2 className="text-xl text-center">{name}</h2>
                <h2 className="text-xl text-center">{title}</h2>
                <p className="text-gray-600">{description}</p>
               
            </div>
        </div>
    );
};

export default AuthorCard;