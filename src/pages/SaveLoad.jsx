import React from 'react';
import Image1 from '../Images/Saves/1.png'
import Im from "../modules/im";
const SaveLoad = () => {
    return (

        <div>
            <p>You can save everything at once, or you can save only individual elements, for example,
                if you need to save only items in your inventory or items in the world.</p>
            <Im>{Image1}</Im>
<p>You must use different slot names for each type of save if you use them at the same time. </p>
        </div>
    );
};

export default SaveLoad;