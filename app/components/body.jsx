import BannerImage from "../img/banner-home.jpeg";
import CompanyImage from "../img/favicon copy.jpeg"
import BodyImage from "../img/Swahili-Beach-Resort.jpeg"
export default function () {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-red-600 sm:text-4xl">Our comprehensive range of services includes:</h1>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={BodyImage}
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-black lg:max-w-lg">
           
              <ul role="list" className="mt-8 space-y-8 text-black ">
                <li className="flex gap-x-3">
                  {/* CloudArrowUpIcon removed */}
                  <span>
                    <strong className="font-semibold text-red-600">Strategic positioning and planning </strong>
                     involving strategic placement and foresight to maximize competitive advantage and guest satisfaction.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  {/* CloudArrowUpIcon removed */}
                  <span>
                    <strong className="font-semibold text-red-600">Training </strong>
                    programs tailored to specific needs, emphasizing continuous improvement to include but not limited to health and safety, food and beverage training, customer service, team building
                  </span>
                </li>
                <li className="flex gap-x-3">
                  {/* CloudArrowUpIcon removed */}
                  <span>
                    <strong className="font-semibold text-red-600">Finance management </strong>
                    entailing budgeting, cost control, and revenue optimization to ensure efficient operations, profitability, and sustainable growth within the industry's unique financial dynamics.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  {/* CloudArrowUpIcon removed */}
                  <span>
                    <strong className="font-semibold text-red-600">Human Resource advisory level </strong>
                    offers expert guidance on workforce planning, recruitment, training, and compliance to optimize staff performance, engagement, and overall organizational success within the dynamic hospitality sector.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  {/* CloudArrowUpIcon removed */}
                  <span>
                    <strong className="font-semibold text-red-600">Event management </strong>
                    involving orchestrating seamless events, from planning to execution, considering logistics, coordination, and guest experiences, ensuring memorable and successful gatherings within the hospitality industry.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  {/* CloudArrowUpIcon removed */}
                  <span>
                    <strong className="font-semibold text-red-600">Pre opening </strong>
                    preparatory phase before a new establishment's launch, encompassing staff training, operational setup, marketing strategies, and final touches to ensure a successful opening.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  {/* CloudArrowUpIcon removed */}
                  <span>
                    <strong className="font-semibold text-red-600">Sustainable practices and circular economy </strong>
                    emphasizing eco-friendly operations, resource efficiency, waste reduction, and recycling, fostering environmental responsibility and long-term viability while minimizing negative impacts on the ecosystem.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  {/* CloudArrowUpIcon removed */}
                  <span>
                    <strong className="font-semibold text-red-600">Promoting equity and diversity within the hospitality industry </strong>
                    fostering inclusive workplaces, embracing varied backgrounds, cultures, and perspectives, ensuring equal opportunities, and enriching the industry's innovation and growth.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  {/* CloudArrowUpIcon removed */}
                  <span>
                    <strong className="font-semibold text-red-600">Crafting and growing unique brands for our clients through strategic positioning </strong>
                    aligning values, and creating memorable experiences to establish a distinct identity, attracting and retaining guests effectively.
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
