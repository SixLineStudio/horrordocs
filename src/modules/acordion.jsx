import React from 'react';
import image3 from "../Images/ImplementInventory/3.png";
import image4 from "../Images/ImplementInventory/4.png";
import image5 from "../Images/ImplementInventory/5.png";

const Acordion = ({children, name}) => {
    return (
        <>
            <br/>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header collapsed" id="headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            {name}
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                         data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
            <br/>
        </>
    );
};

export default Acordion;