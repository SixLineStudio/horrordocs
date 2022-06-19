import React from 'react';
import image1 from '../Images/ImplementInventory/1.png'
import image2 from '../Images/ImplementInventory/2.png'
import image3 from '../Images/ImplementInventory/3.png'
import image4 from '../Images/ImplementInventory/4.png'
import image5 from '../Images/ImplementInventory/5.png'
import image6 from '../Images/ImplementInventory/6.png'
import image7 from '../Images/ImplementInventory/7.png'
import image8 from '../Images/ImplementInventory/8.png'

const ImplementInventory = () => {
    return (
        <div>
    <p>Open your character or player controller and add an inventory component to it.</p>
            <img src={image1} style={{  maxWidth: "80vw"}} alt=""/>

<br/>
            <br/>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header collapsed" id="headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            How to properly set up control
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                         data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <a href="https://docs.unrealengine.com/5.0/en-US/input-in-unreal-engine/" target="_blank">Unreal Documentation</a>
                            <br/>
                            <br/>
                                <p>Open the project settings and click on the input tab</p>
                            <img src={image3} style={{  maxWidth: "80vw"}} alt=""/>
                                <p>In your character or controller blueprint, find your created input.</p>
                            <img src={image4} style={{  maxWidth: "80vw"}} alt=""/>
                            <br/>
                            <p>And connect it to the desired function.</p>
                            <img src={image5} style={{  maxWidth: "80vw"}} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
<br/>

            <p>For clarity, I will show you an example of connecting control using standard input events.</p>
            <img src={image2} style={{  maxWidth: "80vw"}} alt=""/>
            <br/>
            <img src={image6} style={{  maxWidth: "80vw"}} alt=""/>
            <br/>
            <p>To change control buttons icons from keyboard to gamepad use this node.</p>
            <img src={image7} style={{  maxWidth: "80vw"}} alt=""/>


                <p>To disable controls when your inventory is open, disable all of your character's controls this way.</p>
            <img src={image8} style={{  maxWidth: "80vw"}} alt=""/>

        </div>
    );
};

export default ImplementInventory;