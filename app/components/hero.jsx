import BannerImage from "../img/banner-home.jpeg"
import CompanyImage from "../img/favicon copy.jpeg"

export default function (){
    return (
<div className="h-screen bg-gray-50 flex items-center">
      <section
        className="bg-cover bg-center py-32 w-full h-full"
        style={{ backgroundImage: `url(${BannerImage})` }} // Use the imported image as the background
      >
        <div className="container mx-auto text-left text-white opacity-105"> {/* Change text color to black */}
          <div className="flex items-center">
            <div className="w-1/2">
              <h1 className="text-5xl  mb-6 text-red-600 font-bold">WELCOME TO ORIGAMI VENTURES LIMITED</h1>
              <p className="text-xl mb-12 ">
              Our vision is to be a holistic partner in the hospitality industry, providing comprehensive solutions and expertise that encompass all aspects of successful hospitality management.
              </p>
              <a href="/aboutus" className="bg-red-600 text-white py-4 px-12 rounded-full hover:bg-black">
                Read More
              </a>
            </div>
            {/**
            <div className="w-1/2 pl-16">
              <img
                src={CompanyImage} // Use the imported image as the source
                className="h-64 w-full object-cover rounded-xl"
                alt="Layout Image"
              />
            </div>
             */}
          </div>
        </div>
      </section>
    </div>
    );
}