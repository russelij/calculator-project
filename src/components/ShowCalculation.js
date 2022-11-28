import React, { useState } from 'react';
import './ShowCalculation.css';

const ShowCalculation = () => {
    const [calcString,setCalcString] = useState('');

    return (
        <h1>{calcString}</h1>
    );
}

export default ShowCalculation;
