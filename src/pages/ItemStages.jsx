import React from 'react';
import image1 from '../Images/AdventageItems/1.png'
import image2 from '../Images/AdventageItems/2.png'
import image3 from '../Images/AdventageItems/3.png'
import image4 from '../Images/AdventageItems/4.png'
import image5 from '../Images/AdventageItems/5.png'
import image6 from '../Images/AdventageItems/6.png'
import image7 from '../Images/AdventageItems/7.png'
import image8 from '../Images/AdventageItems/8.png'
import image9 from '../Images/AdventageItems/9.png'
import image10   from '../Images/AdventageItems/10.png'
import image11 from '../Images/AdventageItems/11.png'
import image12 from '../Images/AdventageItems/12.png'
import Im from "../modules/im";
import {Link} from "react-router-dom";

const ItemStages = () => {
    return (
        <div>


            <iframe width="560" height="315" src="https://www.youtube.com/embed/uDOKO6lCBlo"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>

          <p>  First create an item. </p>
            <Link to="/CreateItem"

                                       href="#">Create Inventory Item
        </Link>
<p>
    Add the meshes you need to it. You can use regular Static or Skeletal meshes, but they will need to be set to lighting channel 2.
    Or you can use an inventory mesh.
</p>
    <Im>{image5}</Im>
   <p> I added the meshes I needed to make an opening box with a key inside.</p>
    <Im>{image1}</Im>
<p>Now add an inspect component. He must appear on stage.</p>
            <Im>{image2}</Im>
            <p>I set it up so that it covers the castle.</p>
            <Im>{image3}</Im>
            <p>Now I set the number by which the order in which the components are launched when the game is loaded is determined.
                Component number 0 will run before component number 1. Do not use negative numbers.</p>
            <Im>{image4}</Im>
            <p>I click on a component and create a new event "OnInteract".</p>
            <Im>{image6}</Im>
            <p>You can separate the logic so that animations you don't need are not played during loading.</p>
            <Im>{image7}</Im>
            <p>This node adds a new item state. For example, if you want to open the door only with the key that is in the box, then make it interactive when you get the key.</p>
            <Im>{image8}</Im>
            <p>I made the opening of the lid in this way.</p>
            <Im>{image9}</Im>
            <p>I have added an interactive element inside the box.</p>
            <Im>{image12}</Im>
            <p>And when I got the key, I hid the elements we didn't need.</p>
            <Im>{image11}</Im>
            <p>I used this node to rotate an item into the normal rotation it is stored in in the inventory.</p>
            <Im>{image10}</Im>
        </div>
    );
};

export default ItemStages;