import Header from "../components/header";
import Footer from "../components/footer";
import Copyright from "../components/copyright";
export default function () {
    return (
      <div className="font-sans leading-relaxed" style={{ fontFamily: "system-ui, sans-serif", lineHeight: "2.4" }}>
        <Footer/>
        <Header/>
        <section className="mb-32">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-7/12 md:px-3 lg:px-6">
            <br></br>
              <h2 className="mb-8 text-5xl font-bold text-red-600">About Us</h2>
              <p>Origami Ventures is a privately owned hospitality management limited company. With a strong belief in effective management and excellent relationships with the business community, we strive to facilitate successful operations and profitable growth in the hospitality industry.</p>
  
              <p className="mb-2 text-5xl font-bold">Vision</p>
              <p className="mb-8 text-neutral-500 dark:text-black">
                Our vision is to be a holistic partner in the hospitality industry, providing comprehensive solutions and expertise that encompass all aspects of successful hospitality management.
              </p>
  
              <p className="mb-2 text-5xl font-bold">Mission</p>
              <p className="mb-8 text-neutral-500 dark:text-black">
                Our mission is guided by the principles of PEOPLE, PLANET, and PROFITS. We focus on lean management practices, continuous improvement, eco-hotels, sustainability, climate change initiatives, and helping businesses grow their unique brand. We aim to bridge the gap from classroom learning to industry application, ensuring our clients receive practical and actionable strategies.
              </p>
  
              <p className="mb-2 text-5xl font-bold">Values</p>
              <p>
                At Origami Ventures, we uphold the following values:
              </p>
  
              <ol className="list-decimal list-inside">
                <li>
                  <span className="text-red-600 font-bold">Openness:</span>
                  <span className="text-black">We foster an environment of transparency and open communication with our clients, ensuring mutual understanding and trust.</span>
                </li>
                <li>
                  <span className="text-red-600 font-bold">Reliability:</span>
                  <span className="text-black">We are committed to providing dependable and consistent services to our clients, meeting their needs with integrity and professionalism.</span>
                </li>
                <li>
                  <span className="text-red-600 font-bold">Integrity:</span>
                  <span className="text-black">We conduct our business with the utmost honesty, ethics, and respect for all stakeholders.</span>
                </li>
                <li>
                  <span className="text-red-600 font-bold">Genius:</span>
                  <span className="text-black">We leverage our expertise and industry knowledge to provide innovative and effective solutions, constantly pushing the boundaries of what is possible.</span>
                </li>
                <li>
                  <span className="text-red-600 font-bold">Adaptability:</span>
                  <span className="text-black">We embrace change and remain flexible in our approach, adapting to evolving industry trends and client requirements.</span>
                </li>
                <li>
                  <span className="text-red-600 font-bold">Mentorship:</span>
                  <span className="text-black">We believe in supporting and guiding our clients, sharing our knowledge and experience to help them achieve their goals.</span>
                </li>
                <li>
                  <span className="text-red-600 font-bold">Industriousness:</span>
                  <span className="text-black">We demonstrate a strong work ethic and a proactive approach, ensuring that we consistently deliver exceptional results.</span>
                </li>
              </ol>
            </div>
          </div>
        </section>
        <Copyright/>
      </div>
      
    );
  }
  