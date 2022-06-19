import React from 'react';
import Im from "../modules/im";
import image1 from '../Images/Use/1.png'
import image2 from '../Images/Use/2.png'
import image3 from '../Images/Use/3.png'
import image4 from '../Images/Use/4.png'
const Use = () => {
    return (
        <div>
            <p>You must make an item usable when you create it or with a node.</p>
            <Im>{image1}</Im>
            <Im>{image2}</Im>
            <p>Implement UseItem Event.</p>
            <Im>{image3}</Im>
            <p>Connect any logic, it will work when using the item.</p>
            <Im>{image4}</Im>
        </div>
    );
};

export default Use;