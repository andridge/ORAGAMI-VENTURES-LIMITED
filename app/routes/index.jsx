import Header from "../components/header";
import Hero from "../components/hero";
import Body from "../components/body";
import Grid from "../components/grid";
import Footer from "../components/footer";
import Teamsections from "../components/teamsections";
import Contact from "../components/contact";
import Testimony from "../components/testimony";
import Sir from "../components/sir";
import Copyright from "../components/copyright";
import Homescreen from "../img/background.jpg"

export default function Index() {
  return (
    <div>
    <div
  style={{
    backgroundImage: `url(${Homescreen})`,
    fontFamily: "system-ui, sans-serif",
    lineHeight: "1.4",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: '100%', // Set width to 100% of the viewport width
    height: '100vh', // Set height to 100% of the viewport height
  }}
>
     <Footer/>
     <Header/>
     <Hero/>
     </div>

     <Body/>
     <Grid/>
     <br></br>
     <br></br>
     <Testimony/>
     <br></br>
     <Sir/>
     <Contact/>
   
     <Copyright/>

    
    </div>
     

     )
   
   
 
}
