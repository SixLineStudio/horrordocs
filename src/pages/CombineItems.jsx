import React from 'react';
import Im from "../modules/im"
import image1 from '../Images/Combines/1.png'
import image2 from '../Images/Combines/2.png'
import image3 from '../Images/Combines/3.png'
import image4 from '../Images/Combines/4.png'

const CombineItems = () => {
    return (
        <div>
            <p>In order to be able to combine 2 items, you must enable the combination either by creating the item or by using a node.</p>
            <Im>{image1}</Im>
            <Im>{image2}</Im>
            <p>Open the table in the DataTables folder.</p>
            <Im>{image3}</Im>
            <p>Add a new element to the table. Choose two items to combine. Also select the item and its amount that will appear after it.</p>
            <Im>{image4}</Im>
        </div>
    );
};

export default CombineItems;