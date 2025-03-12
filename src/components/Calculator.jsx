import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Calculator() {
    window.scrollTo(0, 0)

    const [number, setNumber] = useState('');

    const handleButtonClick = (value) => {
        setNumber(number + value);
    };

    const handleClear = () => {
        setNumber('');
    };

    const handleCalculate = () => {
        try {
            setNumber(eval(number).toString());
        } catch (error) {
            setNumber('Error');
        }
    };

    const handleAddition = () => {
        setNumber(number + '+');
    };

    const subtraction = () => {
        setNumber(number + '-');
    };

    const handleMultiplication = () => {
        setNumber(number + '*');
    };
    const handleDivision = () => {
        setNumber(number + '/')
    }
    const handleBackspace = () => {
        setNumber(number.slice(0, -1));
    };


    return (
        <div className='py-6 flex flex-col items-center justify-center h-screen'>
            <div className="body bg-gray-400 p-6 rounded-sm ">
                <input type="text" value={number} readOnly
                    className='bg-green-200 w-full h-14 rounded-sm py-2 text-right font-bold text-2xl '
                    placeholder="0000000"
                />

                <div className='my-2 row flex  justify-between mt-4'>
                    <button
                        onClick={handleClear}
                        className=' mx-1 border bg-gray-400 px-6 py-2 font-bold hover:bg-gay-500'
                    >Clear</button>

                    <button
                        onClick={handleBackspace}
                        className='mx-1 bg-gray-400 px-10 py-2 font-bold hover:bg-gray-500 border'
                    >
                        <i class="fa-solid fa-delete-left"></i>
                    </button>

                </div>
                <div className='my-2 row flex  justify-between'>
                    <button
                        onClick={() => handleButtonClick('1')}
                        className='mx-1 rounded-full bg-orange-300 px-6 py-4 font-bold hover:bg-orange-500'
                    >1</button>
                    <button
                        onClick={() => handleButtonClick('2')}
                        className='mx-1 rounded-full bg-orange-300 px-6 py-4 font-bold hover:bg-orange-500'
                    >2</button>
                    <button
                        onClick={() => handleButtonClick('3')}
                        className='mx-1 rounded-full bg-orange-300 px-6 py-4 font-bold hover:bg-orange-500'
                    >3</button>
                    <button
                        onClick={handleAddition}
                        className='mx-1 rounded-sm bg-blue-300 px-11 py-3 font-bold hover:bg-blue-500'
                    >+</button>
                </div>
                <div className='my-2 row flex  justify-between'>
                    <button
                        onClick={() => handleButtonClick('4')}
                        className='mx-1 rounded-full bg-orange-300 px-6 py-4 font-bold hover:bg-orange-500'
                    >4</button>
                    <button
                        onClick={() => handleButtonClick('5')}
                        className='mx-1 rounded-full bg-orange-300 px-6 py-4 font-bold hover:bg-orange-500'
                    >5</button>
                    <button
                        onClick={() => handleButtonClick('6')}
                        className='mx-1 rounded-full bg-orange-300 px-6 py-4 font-bold hover:bg-orange-500'
                    >6</button>
                    <button
                        onClick={subtraction}
                        className='mx-1 rounded-sm bg-blue-300 px-[46px] py-3  font-bold hover:bg-blue-500'
                    >-</button>
                </div>

                <div className='my-2 row flex  justify-between'>
                    <button
                        onClick={() => handleButtonClick('7')}
                        className='mx-1 rounded-full bg-orange-300 px-6 py-4 font-bold hover:bg-orange-500'
                    >7</button>
                    <button
                        onClick={() => handleButtonClick('8')}
                        className='mx-1 rounded-full bg-orange-300 px-6 py-4 font-bold hover:bg-orange-500'
                    >8</button>
                    <button
                        onClick={() => handleButtonClick('9')}
                        className='mx-1 rounded-full bg-orange-300 px-6 py-4 font-bold hover:bg-orange-500'
                    >9</button>
                    <button
                        onClick={handleMultiplication}
                        className='mx-1 rounded-sm bg-blue-300 px-11 py-3  font-bold hover:bg-blue-500'
                    >x</button>
                </div>

                <div className='my-2 row flex  justify-between'>
                    <button
                        onClick={() => handleButtonClick('0')}
                        className='mx-1 rounded-full bg-orange-300 px-6 py-4 font-bold hover:bg-orange-500'
                    >0</button>
                    <button
                        onClick={handleCalculate}
                        className='mx-1 w-full rounded-sm bg-green-500 px-[41px] pl-[43px] py-3  font-bold hover:bg-blue-800'
                    >=</button>

                    <button
                        onClick={() => handleDivision('/')}
                        className='mx-1 rounded-sm bg-blue-300 px-11 py-3  font-bold hover:bg-blue-500'
                    >/</button>

                </div>
            </div>
            <Link className='text-blue-500 underline mt-4 text-start' to='/ageCalculator'>Age Calculator</Link>


        </div>
    );
}

export default Calculator;
