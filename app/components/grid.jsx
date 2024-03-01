import { Link } from '@remix-run/react';
import Simba from "../img/1.png";
import Ndovu from "../img/2.png";
import Flamingo from "../img/4.png";
import Chui from "../img/3.png";
import React, { useState, useEffect } from 'react';

export default function () {
  const images = [Simba, Ndovu, Flamingo, Chui];
  const titles = ["Simba", "Ndovu", "Flamingo", "Chui"];
  const descriptions = [
    "A comprehensive solution that is effective operational and innovative.",
    "Offering guidance to optimize overall organizational success and growth .",
    "An adaptable solution blending operations, innovation and growth .",
    "Training, research, and development refine expertise,growth and innovation."
  ];
  
  return (
    <div className="flex overflow-x-auto items-center justify-center w-full h-120 px-4">
      {images.map((image, index) => (
        <div key={index} className="max-w-sm w-full lg:max-w-full lg:flex">
          <div className="h-72 lg:h-auto lg:w-72 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url('${image}')` }} title={`Image ${index}`}>
          </div>
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <p className="text-sm text-gray-600 flex items-center">
                <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                Members only
              </p>
              <div className="text-gray-900 font-bold text-xl mb-2">{titles[index]}</div>
              <p className="text-gray-700 text-base">{descriptions[index]}</p>
            </div>
            <div className="flex items-center">
              <div className="text-xl">
              <Link to={`/${titles[index].toLowerCase().replace(/\s+/g, '-')}`} className="text-red-900 leading-none">Apply option</Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
