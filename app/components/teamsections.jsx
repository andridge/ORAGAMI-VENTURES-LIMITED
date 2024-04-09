import Jovita from "../img/dir2.jpg";
import Nosiku from "../img/DIR001.jpg";
import Esau from "../img/dir3.jpg";

export default function () {
  const people = [
    {
      name: 'Jovita Ateya',
      role: 'Co-Founder',
      imageUrl: Jovita,
      enclosingMessage: 'As a seasoned hospitality consultant, I bring a diverse skill set and extensive experience across hotel, golf club, and restaurant management. My expertise lies in enhancing guest experiences, optimizing operational efficiency, and driving revenue growth for hospitality establishments. With a visionary leadership approach, I am dedicated to cultivating a culture of excellence within organizations. I am passionate about implementing innovative strategies to elevate the reputation and success of my clients businesses.',
    },
    {
      name: 'Nosiku Small',
      role: 'Co-Founder',
      imageUrl: Nosiku,
      enclosingMessage: 'As an accomplished hospitality consultant, I excel in developing and executing dynamic marketing strategies to boost sales and revenue while aligning with sustainable business practices. Leveraging data insights, I tailor individualized solutions for clients, incorporating research and development efforts to drive innovation and profitability. Additionally, I specialize in training and integrating new team members for seamless operations and long-term success.',
    },
    {
      name: 'Esau Odeny',
      role: 'Co-Founder',
      imageUrl: Esau,
      enclosingMessage: 'As a hospitality consultant, I bring extensive experience and a proven track record of success to the table. With over 17 years in the industry, I have honed my skills in customer-centric service delivery, effective communication, and leadership. My commitment to exceeding client expectations and fostering strong team dynamics has consistently led to tangible results for organizations. I am eager to leverage my expertise in a challenging and rewarding environment that values innovation and excellence, ultimately driving both personal and organizational growth while ensuring unparalleled customer satisfaction.',
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32 ml-10">
      <ul role="list">
        {people.map((person) => (
          <li key={person.name}>
            <div className="flex items-center gap-x-6 mb-6">
              <div className="flex-shrink-0">
                <img
                  style={{ objectFit: 'cover' }}
                  className="h-80 w-66 rounded-full"
                  src={person.imageUrl}
                  alt={`${person.name}'s Image`}
                />
              </div>
              <div className="flex flex-col">
                <div>
                  <h3 className="text-base text-xl font-bold leading-7 tracking-tight text-red-900">{person.name}</h3>

                </div>
                <div className="flex flex-col items-start p-4 rounded-md bg-gray-200">
  <h4 className="text-xl font-semibold leading-6 text-red-900">{person.role}</h4>
  <p className="text-xl leading-5 text-black-600">{person.enclosingMessage}</p>
</div>

              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
