import React from 'react';
import "./Case.css"
const Cases = () => {
    return (
        <div className="container">
            <h3>Curent Cases</h3>

                     <article className="my-5"> 
                             <div className="border border-info p-3 m-3 bg-secondary text-light" id="case">
                             <h5 className="text-danger">An Extended Stay</h5>
                              <p className="case">A 64-year-old man with a number of health issues comes to the hospital because he is having trouble breathing. The care team helps resolve the issue, but forgets a standard treatment that causes unnecessary harm to the patient. A subsequent medication error makes the situation worse, leading a stay that is much longer than anticipated.</p>
                             </div>
                             <div className="border border-info p-3 m-3 bg-secondary text-light ">
                             <h5 className="text-danger">Mutiny</h5>
                              <p className="case">The behavior of a superior starts to put your patients at risk. What would you do? The University of Rochester’s Dr. Paul Griner presents the final installment in a series of case studies for the IHI Open School.</p>
                             </div>
                             <div className="border border-info p-3 m-3 bg-secondary text-light ">
                             <h5 className="text-danger">On Being Transparent</h5>
                              <p className="case">You are the CEO and a patient in your hospital dies from a medication error. What do you do next? The University of Rochester’s Dr. Paul Griner presents the fourth in a series of case studies.</p>
                             </div>
                             <div className="border border-info p-3 m-3 bg-secondary text-light ">
                             <h5 className="text-danger">The Protective Parent</h5>
                              <p className="case">During a 50-year career in medicine, Dr. Paul Griner accumulated hundreds of patient stories. Most of his stories – including this case study "The Protective Parent" - are from the 1950s and 1960s, prior to what we now refer to as “modern medicine.”</p>
                             </div>
                             <div className="border border-info p-3 m-3 bg-secondary text-light ">
                             <h5 className="text-danger">Advanced Case Study</h5>
                              <p className="case">Between Sept. 30th and Oct. 14th, 2010, students and residents all over the world gathered in interprofessional teams and analyzed a complex incident that resulted in patient harm. Selected teams presented their work to IHI faculty during a series of live webinars in October.</p>
                             </div>
                            

                     </article>
        </div>
        
    );
};

export default Cases;