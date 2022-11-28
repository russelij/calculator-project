import React, { useState } from 'react';
import './RunCalculation.css';

const RunCalculation = (props) => {
    const [num1Input, setNum1Input] = useState('');
    const [num2Input, setNum2Input] = useState('');
    const [operatorInput, setOperatorInput] = useState('');

    const NewNum1Handler = (event) => {
        setNum1Input(event.target.value);
    }

    const NewNum2Handler = (event) => {
        setNum2Input(event.target.value);
    }

    const NewOperatorHandler = (event) => {
        setOperatorInput(event.target.value);
        console.log('Operator Selected: ' + event.target.value);
    }

    const CalculationHandler = (event) => {
        event.preventDefault();

        const calculateSolution = (num1,num2,operation) => {
            var answer;
            if (num1 === '' || num2 === '' || operation === '') {
                console.log("Enter two numbers and select an operation.");
            }
            else {
                if (operation === '+') {
                    answer = Number(num1) + Number(num2);
                }
                else if (operation === '-') {
                    answer = Number(num1) - Number(num2);
                }
                else if (operation === '*') {
                    answer = Number(num1) * Number(num2);
                }
                else if (operation === '/') {
                    answer = Number(num1) / Number(num2);
                }
                return answer;
            }
        }

        const Equation = {
            num1: num1Input,
            num2: num2Input,
            operation: operatorInput,
            solution: calculateSolution(num1Input, num2Input, operatorInput)
        }
        if(typeof(Equation.solution) == "number") {
            console.log(Equation.num1, Equation.operation, Equation.num2, '=', Equation.solution);
            setNum1Input('');
            setNum2Input('');
            setOperatorInput('');
        }

        props.onRunCalc(Equation);
    }

    return (
        <form onSubmit={CalculationHandler}>
            <div>
                <input className="enterNum" type="number" name="num1" placeholder="Number 1"
                    value={num1Input} onChange={NewNum1Handler} />

                <ul>
                    <li><input type='button' onClick={NewOperatorHandler} value='+'></input></li>
                    <li><input type='button' onClick={NewOperatorHandler} value='-'></input></li>
                    <li><input type='button' onClick={NewOperatorHandler} value='*'></input></li>
                    <li><input type='button' onClick={NewOperatorHandler} value='/'></input></li>
                </ul>

                <input className="enterNum" type="number" name="num2" placeholder="Number 2"
                    value={num2Input} onChange={NewNum2Handler} />
            </div>
            <div>
                <button type="submit">Run Calculation</button>
            </div>
        </form>
    )
}

export default RunCalculation;