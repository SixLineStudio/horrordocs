import React from 'react';
import image1 from '../Images/AddItem/1.png'
import image2 from '../Images/AddItem/2.png'
import image3 from '../Images/AddItem/4.png'
import image4 from '../Images/AddItem/5.png'
import image5 from '../Images/AddItem/6.png'
import Im from "../modules/im";
import Accordion from "../modules/acordion";


const CreateItem = () => {
    return (
        <div>
<p>Create child class of bp item actor.</p>
            <Im>{image1}</Im>
            <Im>{image2}</Im>
            <p>Open it. Click on the class default tab and in the details tab you can configure all the parameters of the item.</p>
            <Im>{image3}</Im>

            <Accordion name={"Detail"}>
                <Im>{image5}</Im>
               <p> <strong>WorldMesh</strong>-> The static mesh that will be used to display the item in the world. For example, if you put it on stage or threw it away. (May change dynamically).</p>
                <p> <strong>Use World Mesh As Item Mesh</strong>-> You can use the world mesh as the mesh that will show up in the inventory. (May change dynamically). You can add static meshes directly to the blueprint, but more on that later.</p>
                <p> <strong>Name</strong> -> Item name. (May change dynamically).</p>
                <p><strong>Description</strong> -> Item Description. (May change dynamically).</p>
                <p><strong>Stackable</strong> -> Determines if an item can be grouped. </p>
                <p><strong>Max Stack</strong> -> Determines how many items can be stored in one.</p>
                <p><strong>Usable</strong> -> Determines whether the item can be used. To do this, you need to write the logic of use. (May change dynamically).</p>
                <p><strong>Can Drop</strong> -> Determines if an item can be dropped. (May change dynamically). In the settings, you can choose whether the item is permanently destroyed or falls in front of you. </p>
                <p><strong>Can Combine</strong> -> Determines if the item can be combined. (May change dynamically). </p>
                <p><strong>Can Interact</strong> -> Determines if the item can be used for interactions. For example, if you want to open a door with this item.(May change dynamically).</p>
                <p><strong>WorldItemScale</strong> -> Determines the size of the item if you placed it on the world or dropped it on the ground.</p>
            </Accordion>
                <p>I have set these settings. I set the size and rotation of the item manually in the viewport.</p>
            <Im>{image4}</Im>
        </div>

    );
};

export default CreateItem;