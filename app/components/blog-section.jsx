import { TwitterTweetEmbed } from 'react-twitter-embed';
import React, { useState, useEffect } from 'react';

export default function (){
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay (you can replace this with your actual data fetching logic)
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay time as needed

    // Cleanup function to clear the timeout in case the component is unmounted
    return () => clearTimeout(delay);
  }, []);

    return (
      <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-red-600 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert consultancy advice.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {isLoading ? (
            // Display a simple loading animation with three dots
            <div className="flex items-center justify-center h-32">
              <span className="animate-ping text-3xl text-red-600">Loading...</span>
            </div>
          ) : (
            // Display tweets once they are loaded
            <>
              <div>
                <TwitterTweetEmbed tweetId="1707344841334521956" />
              </div>
              <div>
                <TwitterTweetEmbed tweetId="1707288473160311265" />
              </div>
              <div>
                <TwitterTweetEmbed tweetId="1707311076679856407" />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
    
    )
}