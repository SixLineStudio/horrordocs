import React from 'react';
import imageq1 from '../Images/AdventageItems/8.png'
import image1 from '../Images/InteractComponents/1.png'
import image2 from '../Images/InteractComponents/2.png'
import image3 from '../Images/InteractComponents/3.png'
import image4 from '../Images/InteractComponents/4.png'
import image5 from '../Images/InteractComponents/5.png'
import image6 from '../Images/InteractComponents/6.png'
import image7 from '../Images/InteractComponents/7.png'
import image8 from '../Images/InteractComponents/8.png'
import image9 from '../Images/InteractComponents/9.png'
import image10 from '../Images/InteractComponents/10.png'
import image11 from '../Images/InteractComponents/11.png'


import Acordion from "../modules/acordion";
import Im from "../modules/im";
const InteractComponents = () => {
    return (
        <div>
            <p>In order for an item to interact with components, you must make it interactive when you create it or make it a node.</p>
            <Im>{image1}</Im>
            <Im>{imageq1}</Im>

            <Acordion name = {"Mesh Component"}>
                <p>Create a blueprint and add an InteractionComponentMesh to it. He must appear on stage.</p>
                <Im>{image2}</Im>

                <p>Position it where you want the user to be able to interact.</p>
                <Im>{image3}</Im>
                <p>Generate a GUID and select the options you want.</p>
                <Im>{image4}</Im>
                <Im>{image5}</Im>
                <p> <strong>GUID</strong>-> The unique identifier is used to recognize the item by the save system.</p>
                <p> <strong>Success Immediately After Interaction</strong> -> Does not require item confirmation for successful interaction. Can be used as a door handle.</p>
                <p><strong>Hide Component in Game</strong> -> Hides the Static Mesh of the component in the game.</p>
                <p><strong>Item Class</strong> -> An item that is required for a successful interaction.</p>
                <p><strong>Actions</strong> -> Actions with the item after a successful interaction.</p>
                <p><strong>After Success Action</strong> -> Actions after a successful interaction. You can disable further interactions and hide the component, or you can do nothing.</p>
                <br/>
                <p>Create a new event "Interact Seccuess".</p>
                <Im>{image6}</Im>
                <p>Connect any of your logic to it. You can also separate it depending on whether it is launched by you or when loading saves.</p>
                <Im>{image7}</Im>
                <p>You can set your static mesh and not hide it when you start the game. Here are the component settings for the door handle, "Interact Seccuess" is triggered immediately upon interaction.</p>
                <Im>{image8}</Im>

            </Acordion>

            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        ActorComponent
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                     data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                   <p>A component actor is the same as a MeshComponent in every way, except that it acts on the entire actor at once. I advise you to deal with it first.</p>
                        <p>Add it to the actor.</p>
                        <Im>{image9}</Im>
                        <p>Set the desired settings.</p>
                        <Im>{image10}</Im>
                        <p>Create a new event "Interact Seccuess". Сonnect any of your logic to it.</p>
                        <Im>{image11}</Im>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InteractComponents;