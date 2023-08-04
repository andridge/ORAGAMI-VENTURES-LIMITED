import Header from "../components/header";
import Hero from "../components/hero";
import Body from "../components/body";
import Grid from "../components/grid";
import Footer from "../components/footer";
import Teamsections from "../components/teamsections";
export default function Index() {
  return (
    <div  style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
     <Header/>
     <Hero/>
     <Body/>
     <Grid/>
    <Teamsections/>
     <Footer/>
    </div>
  );
}
