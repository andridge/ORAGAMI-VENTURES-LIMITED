import { TwitterTweetEmbed } from 'react-twitter-embed';

export default function (){
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
          

    <div>
    <TwitterTweetEmbed tweetId="1690982594865741827" />
    </div>
    <div>
    <TwitterTweetEmbed tweetId="1690970414611132416" />
    </div>
    <div>
    <TwitterTweetEmbed tweetId="1691001319488618496" />
    </div>
    </div>
    </div>
    </div>
    
    )
}