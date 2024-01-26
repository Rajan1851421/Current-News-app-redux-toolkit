
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PlacedOrderSuccess() {
    const navigate = useNavigate();
    const [confirm, setConfirm] = useState(true);

    const handleClose = () => {       
        setConfirm(false);
        navigate('/shopping');
    };

    return (
        <div className='flex justify-center items-center'>
            
            {confirm && (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg">
                    <p className="text-lg font-semibold">Order Status: Confirmed</p>
                    <p>Your order has been successfully confirmed and is now being processed.</p>
                    <button onClick={handleClose} className='text-2xl float-right'>  X   </button>
                </div>
            )}
        </div>
    );
}

export default PlacedOrderSuccess;
