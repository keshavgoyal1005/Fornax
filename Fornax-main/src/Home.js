import Navbar from './Navbar';
import Timeline from './Timeline';
import Footer from "./Footer";
import Team from "./Team";

const Home = () => {
    return (
        
            <div className="sign">
                <div className="container">
                    <Navbar />
                    <div className="about" id="about" style={{position:"relative"}}>
                        <h1>What does <span style={{color:"cyan"}}>Fornax</span> do?</h1>
                        <p style={{fontWeight:"700"}}>
                            It’s a website for smart city development. You can file a complain for your local problems. The site is accessible to everyone. It aim to reduce the time
                            taken to resolve the issues.
                       </p>
                    </div>
                    <Timeline />
                    <Team />
                    <Footer /> 
                </div>
            </div>
            );
}

export default Home;