import React from 'react';

const Body = (props) => {
    return (
  <div>
      <div className="container">
       <div className="body-opening-statement">
         <div className="statement-sentance">
          <p>To determine the future we want, we need to understand the pain points of today's world. 
            To understand what issues and problems our customers are faced with we need to spend time watching them and listening to them.</p>
            </div>
            <div className="statement-sentance">
          <p>By truly understanding the issues faced by our customers can we start to plan for a future that will incorporate the idea of being a customer-first business.
             Being able to see the problems faced by our users, can we genuinely shift our focus to user-focused outcomes to improve the end to end customer journey.</p>
             </div>
             
          <p>Here we will outline some User research task's that will help us reach that ultimate goal of understanding the world today.
             Incorporating these into our workstreams will be an essential part of achieving the mission objective of the digital transformation program.</p>
        </div>
        <div className="title-bullet">
        <p className="title-strong">
        1 - Basic Usability Testing
          </p>
          </div>
        <div className="body-copy">
        <p>Observing Users interacting with our products will form a base of understanding. This will help highlight the negatives and the positives of our current platforms and user journeys.</p>
        </div> 

        <div className="title-bullet">
        <p className="title-strong">
        2 - Scenario Based Usability Testing
          </p>
          </div>
        <div className="body-copy">
        <p>Issues that are everyday occurrences and cause high traffic flow through to customer services. Highlighting areas that are obvious in the journey that's problematic for users.<br></br> Building a scenario based on these occurrences and asking users to complete them under observed supervision will further highlight where we are falling short in providing an excellent customer experience.    
</p>
        </div>    
    </div>
  </div>
    )
};

export default Body;