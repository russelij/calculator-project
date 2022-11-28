import React from 'react';
import RunCalculation from './RunCalculation';

const EnterCalculation = () => {
    const calculationHandler = (enteredCalculation) => {
        const calculation = {
            ...enteredCalculation
        }
    }
    return (
        <RunCalculation onRunCalc={calculationHandler}/>
    )
}

export default EnterCalculation;