import { TwitterTweetEmbed } from 'react-twitter-embed';
const posts = [
    {
      id: 1,
      title: 'Nurturing Connections: The Heartbeat of Hospitality 🏨',
      href: '#',
      description:
      'Embracing the warmth of hospitality: where every smile is a welcome, every gesture is a comfort, and every guest is family. Join us in creating moments of genuine connection and unforgettable experiences. #HospitalityMagic ✨🏨 #GuestsFirst #ServiceExcellence',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Hospitality', href: '#' },
      author: {
        name: 'Jovita Ateya',
        role: 'Co-Founder',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
        id: 2,
        title: 'Unlocking Excellence: Elevate Your Business with Hospitality Consultancy',
        href: '#',
        description:
          'Transform your hospitality venture with expert guidance. Our consultancy brings tailored strategies for exceptional guest experiences, operational efficiency, and growth. Elevate your business in a competitive market! 🏨✨ #HospitalityConsultancy #BusinessSuccess',
        date: 'June 3, 2022',
        datetime: '2020-03-6',
        category: { title: 'Training', href: '#' },
        author: {
          name: 'Esau Odeny',
          role: 'Co-Founder ',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 3,
        title: 'Crafting Excellence: Empowering Through Comprehensive Hospitality Training',
        href: '#',
        description:
          'Elevate service standards through specialized hospitality training. Equip your team with the skills to deliver unforgettable guest experiences, setting new benchmarks in excellence. 🌟🏨 #HospitalityTraining #ServiceExcellence',
        date: 'Mar 16, 2023',
        datetime: '2023-03-16',
        category: { title: 'Consultancy', href: '#' },
        author: {
          name: 'Nasiku Small',
          role: 'Co-Founder',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
    // More posts...
  ]
  
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
    
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-red-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0 " />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-red-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
    
    )
}