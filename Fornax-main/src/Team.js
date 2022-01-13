import imgg from './bgg.png';

const Team = () => {
    return ( 
        <div id="team">

        <h2 style={{textAlign:"center",color:"cyan",padding:"10px",margin:"10px",fontSize:"2em",marginTop:"100px"}}>Team Fornax</h2>
        <div className="team-container">
        
        <div className="section-box">
           
                <img src={imgg} />
           
            <div className="content">
                <h2>Ayushi Meena</h2>
               
            </div>
        </div>

        <div className="section-box">
            
                <img src={imgg} />
           
            <div className="content">
                <h2>Keshav Goyal</h2>
               
            </div>
        </div>
        <div className="section-box">
           
                <img src={imgg} />
          
            <div className="content">
                <h2>Nancy Agarwal</h2>
               
            </div>
        </div>
    </div>
    </div>
     );
}
 
export default Team;