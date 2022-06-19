import React from 'react';


const Im = ({children}) => {
    return (
        <>

        <img src={children} style={{  maxWidth: "80vw"}} alt=""/>
            <br/>
        </>
    );
};

export default Im;