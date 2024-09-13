import React, { useState } from 'react';
import AgeCalModal from './AgeCalModal';

function AgeCalculator() {
    window.scrollTo(0,0)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dob, setDOB] = useState('');
    const [ageDate, setAgeDate] = useState('');
    const [result, setResult] = useState({
        years: null,
        months: null,
        days: null,
    });

    const calculateAge = () => {
        // Ensure both dates are selected
        if (!dob || !ageDate) {
            alert('Please select both dates');
            return;
        }

        const dobDate = new Date(dob);
        const ageDateObj = new Date(ageDate);

        // Calculate the difference in milliseconds
        const ageInMillis = ageDateObj - dobDate;

        // Convert milliseconds to years, months, and days
        const ageInYears = ageInMillis / (1000 * 60 * 60 * 24 * 365.25);
        const years = Math.floor(ageInYears);

        const ageInMonths = (ageInYears - years) * 12;
        const months = Math.floor(ageInMonths);

        const days = Math.floor((ageInMonths - months) * (365.25 / 12));

        // Set the result in state
        setResult({ years, months, days });
        setIsModalOpen(true)
    };

    const closeModal = () => {
        // Close the modal
        setIsModalOpen(false);
    };

    return (
        <div className='flex items-center justify-center md:py-20 lg:py-20 '>
            <div className='py-6 px-10 shadow-lg md:w-96 lg:w-96 sm:w-full bg-rose-300 rounded-lg'>
            {result.years !== null && (
                    <div className='text-center mt-4 font-semibold shadow-lg py-3 bg-[#9AE6B4]'>
                        <p>Age: {result.years} years, {result.months} months, {result.days} days</p>
                    </div>
                )}
                <h3 className='text-center text-3xl font-bold py-6'>Age Calculator</h3>

                <div className='my-5'>
                    <label className='font-semibold text-right'>Date Of Birth:</label>
                    <input
                        type="date"
                        placeholder='Select date'
                        name='DOB'
                        value={dob}
                        onChange={(e) => setDOB(e.target.value)}
                        className='py-2 border outline-1 bg-slate-400 h-10 w-full rounded-full mx-auto'
                    />
                </div>

                <div className='my-5'>
                    <label className='font-semibold text-right'>Age at the Date of:</label>
                    <input
                        type="date"
                        placeholder='select date'
                        name='age'
                        value={ageDate}
                        onChange={(e) => setAgeDate(e.target.value)}
                        className='py-2 border outline-1 bg-slate-400 h-10 w-full rounded-full mx-auto'
                    />
                </div>

                <div className='flex justify-center mt-6'>
                    <button
                        onClick={calculateAge}
                        className='font-semibold text-white h-12 w-full rounded-full bg-blue-700'
                    >
                        Calculate
                    </button>
                </div>

                
                {/* uncomment for Open Modal show Result */}

                {/* {isModalOpen && (
                    <AgeCalModal result={result} onClose={closeModal} />
                )} */}
            </div>
        </div>
    );
}

export default AgeCalculator;
