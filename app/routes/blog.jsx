import Header from "../components/header";
import Blog_Section from "../components/blog-section";
import Footer from "../components/footer";
import Copyright from "../components/copyright";
export default function Blog (){
return(
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
    <Footer/>
    <Header/>
    <Blog_Section/>
    <Copyright/>
    </div>
);
}