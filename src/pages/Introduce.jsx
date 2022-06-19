import React from 'react';

const Introduce = () => {
    return (
        <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/GGwnVMeMMog"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
<br/>
            <br/>
            <p>The inventory features a unique technology that allows you to dynamically change objects. For example, you picked up a box, you can inspect it in your inventory, open it and get a key from it, and all this with beautiful animations. It will be the same item you picked up, but with a different name, description, visual representation, and abilities. Items can be combined and used. Added interactive components that can be easily added to any actor to integrate inventory interactions. Full gamepad support. Dynamic change of button icons when changing the control device. There is a complete preservation of everything: items in the world, items in the inventory, active components. But you can save and load something separately if you need to.</p>



            <strong>Features</strong>
            <ul>
                <li>
                    Dynamic item changes
                </li>
                <li>
                    Items can stack
                </li>
                <li>
                    Handy components for inventory integration with actors
                </li>
                <li>
                    Items can be combined and used
                </li>
                <li>
                    Complete save system
                </li>
                <li> Full gamepad support</li>
            </ul>
        </div>
    );
};

export default Introduce;