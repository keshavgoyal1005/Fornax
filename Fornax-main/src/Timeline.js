const Timeline = () => {
    return(
      
        <div className="longlist" id="timeline">
        <h2 style={{textAlign:"center"}}>6 Simple Steps</h2>
        <div className="timeline">
          <ul>
            <li>
              <div className="timeline-content">
                <p><span style={{color:"white"}}>1. Submit the form with a description of your issue along with supporting pictures.</span></p>
              </div>
            </li>
            <li>
              <div className="timeline-content">
                <p><span style={{color:"white"}}>2. Affirm the issue by at least 10 persons of same locality.</span></p>
              </div>
            </li>
            <li>
              <div className="timeline-content">
                <p><span style={{color:"white"}}>3. Form will be submitted to the competent authorities.</span></p>
              </div>
            </li>
            <li>
              <div className="timeline-content">
                <p><span style={{color:"white"}}>4. Keep checking the website for further updates and any clarifications, if asked. </span></p>
              </div>
            </li>
            <li>
              <div className="timeline-content">
                <p><span style={{color:"white"}}>5. Click the location on the map to check the received complaints from that particular area.</span></p>
              </div>
            </li>
            <li>
              <div className="timeline-content">
                <p><span style={{color:"white"}}>6. After the problem is resolved it will be removed from the map by the authority.</span></p>
              </div>
            </li>
            
          </ul>
        </div>
      </div> 
   
    );
}

export default Timeline;