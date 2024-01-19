import React, { useState, useEffect } from 'react';

function Success({ onClose }) {
    const [close, setClose] = useState(true);
    const [isFixed, setIsFixed] = useState(false);

    const handleScroll = () => {
        // Check if the user has scrolled, and set isFixed accordingly
        if (window.scrollY > 0) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    };

    // Attach and detach scroll event listener when component mounts/unmounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleclose = () => {
        setClose(false);
    };

    const successStyle = {
        position: isFixed ? 'fixed' : 'relative',
        top: isFixed ? '5' : 'auto',
        left: '50%',
        width: '100%', // Set width to 100%
        transform: 'translateX(-50%)',
        zIndex: 1000, // Adjust the z-index as needed
    };

    return (
        <>
            {close && (
                <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded"
                    role="alert"
                    style={successStyle}
                >
                    <strong className="font-bold">Delete Item Successfully</strong>

                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                        <svg
                            onClick={onClose}
                            className="fill-current h-6 w-6 text-red-500"
                            role="button"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <title>Close</title>
                            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                        </svg>
                    </span>
                </div>
            )}
        </>
    );
}

export default Success;
