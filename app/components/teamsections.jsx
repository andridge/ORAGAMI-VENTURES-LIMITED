import Jovita from "../img/dir2.jpg"
import Nosiku from "../img/dir1.jpg"
import Esau from "../img/dir3.jpg"
export default function (){
    const people = [
        {
          name: 'Jovita Ateya',
          role: 'Co-Founder',
          imageUrl:Jovita,
        },
        {
          name: 'Nosiku Small',
          role: 'Co-Founder',
          imageUrl:Nosiku,
        },
        {
          name: 'Esau Odeny',
          role: 'Co-Founder',
          imageUrl: Esau,
        },
      ];
    
      return (
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-red-600 ">Meet our leadership</h2>
              <p className="mt-6 text-lg leading-8 text-black">
                Origami Ventures Ltd was founded in 2022.
                Our training team consists of experienced hospitality trainers who possess in-depth knowledge and practical
                expertise in various aspects of hotel operations, customer service, and organizational excellence. They are
                skilled at creating dynamic and engaging learning environments, ensuring that participants gain valuable
                insights and skills aligned with Origami Ventures' vision and mission.
              </p>
            </div>
            <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
              {people.map((person) => (
                <li key={person.name}>
                  <div className="flex items-center gap-x-6">
                    <img style={{
    objectFit: 'cover'}}className="h-20 w-16 rounded-full" src={person.imageUrl} alt={`${person.name}'s Image`} />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
}