import React from 'react';
import image1 from '../Images/Settings/1.png'
import image2 from '../Images/Settings/2.png'
import Im from "../modules/im";
const Settings = () => {
    return (
        <div>
            <p>Go to settings folder and open DA_Settings.</p>
            <Im>{image1}</Im>
            <p>Here you can change the settings according to your preferences.</p>
            <Im>{image2}</Im>
        </div>
    );
};

export default Settings;