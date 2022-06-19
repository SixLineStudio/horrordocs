import React from 'react';
import image6 from '../Images/AddItem/7.png'
import image7 from '../Images/AddItem/8.png'
import image8 from '../Images/AddItem/9.png'
import Acordion from "../modules/acordion";
import Im from "../modules/im";

const CreateWorldItem = () => {
    return (
        <div>
            <p>in the Blueprints/Actors folder we find BP_WorldItem and drag it onto the Viewport.</p>
            <Im>{image6}</Im>
            <p>Generate a GUID and set the parameters you need.</p>
            <Im>{image7}</Im>
            <Acordion name ={"Details"}>
                <p> <strong>GUID</strong>-> The unique identifier is used to recognize the item by the save system.</p>
                <p> <strong>Item Class</strong> -> Here you select the class of the item you want. This class must be a  child of of Bp_ItemActor</p>
                <p><strong>Amount</strong> -> The number of items you pick up when picking up.</p>
                <p><strong>Distance form camera</strong> -> Distance from the camera when viewing an Item.</p>
                <p><strong>Offset</strong> -> The initial rotation of the item when viewing it.</p>
            </Acordion>
            <p>Here's what we got.</p>
            <Im>{image8}</Im>
        </div>
    );
};

export default CreateWorldItem;