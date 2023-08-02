import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function CaseCard({ data, index }) {
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <Link to={data.href}>
      <div
        onMouseEnter={() => setIsImageHovered(true)}
        onMouseLeave={() => setIsImageHovered(false)}
        key={data.title}
        className="flex flex-col overflow-hidden rounded-lg shadow-lg"
      >
        <div className="flex-shrink-0">
          <img
            id={data.id}
            className={`h-96 w-full object-cover transform-gpu transition-transform duration-300 ease-in-out ${
              isImageHovered ? 'scale-95' : 'scale-100'
            }`}
            src={data.imageUrl}
            alt=""
          />
        </div>
        <div className="flex flex-1 flex-col justify-between bg-white p-6">
          <div className="flex-1">
            <p className="text-xl font-medium text-gray-800">
              <a href={data.category.href} className="hover:underline">
                {data.category.name}
              </a>
            </p>
            <a href={data.href} className="mt-2 block">
              <p
                id={index}
                className={`lg:text-4xl pt-3 pb-6 text-2xl font-semibold transition duration-400 ease-in-out ${
                  isImageHovered ? 'text-orange-500' : ''
                }`}
              >
                {data.title}
              </p>
              <p className="mt-3 text-xl leading-7 text-gray-500">{data.description}</p>
            </a>
          </div>
        </div>
      </div>
    </Link>
  );
}
