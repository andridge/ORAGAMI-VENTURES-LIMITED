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
import Homescreen from "../img/z.jpg"
export default function Index() {
  return (
    <div>
    <div style={{ 
      backgroundImage: `url(${Homescreen})`, 
      fontFamily: "system-ui, sans-serif", 
      lineHeight: "1.4",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundposition: 'center center',

    }}>
     <Footer/>
     <Header/>

     <Hero/>

     </div>
     <div style={{ backgroundColor: 'white' }}>
    <Body/>
     <Grid/>
     <Testimony/>
     <br></br>
     <Sir/>
     <Contact/>
   
     <Copyright/>
     </div>
    
    </div>
     

     )
   
   
 
}
