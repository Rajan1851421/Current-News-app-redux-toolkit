import React, { useState, useEffect, useRef } from 'react';

function Texteditor() {
    const [fontsize, setFontSize] = useState(18)
    const [editText, setEditText] = useState('');
    const [italicStyle, setItalicStyle] = useState(false);
    const [boldStyle, setBoldStyle] = useState(false);
    const [underlineStyle, setUnderlineStyle] = useState(false);
    const [uppercaseStyle, setUppercaseStyle] = useState(false);
    const [lowercaseStyle, setLowercaseStyle] = useState(false);
    const [textLength, setTextLength] = useState(0);
    const [wordCount, setWordCount] = useState(0);
    const [textColor, setTextColor] = useState('#000000'); // Default color: black
    const colorPickerRef = useRef();



    useEffect(() => {
        window.scrollTo(0,0)
        // Remove leading and trailing whitespaces
        const trimmedText = editText.trim();
        // Remove extra whitespaces and count words
        const words = trimmedText.split(/\s+/);
        setWordCount(words.length);

        // Remove whitespace characters and then calculate length
        const cleanedText = editText.replace(/\s/g, '');
        setTextLength(cleanedText.length);
    }, [editText]);

    const handleItalic = () => {
        setItalicStyle(!italicStyle);
    };

    const handleBold = () => {
        setBoldStyle(!boldStyle);
    };

    const handleUnderline = () => {
        setUnderlineStyle(!underlineStyle);
    };

    const handleUppercase = () => {
        setUppercaseStyle(!uppercaseStyle);
        setLowercaseStyle(false);
    };

    const handleLowercase = () => {
        setLowercaseStyle(!lowercaseStyle);
        setUppercaseStyle(false);
    };

    const handleTextColorChange = () => {
        colorPickerRef.current.click();
    };

    const handleColorPickerChange = (e) => {
        setTextColor(e.target.value);
    };
    const handleIncreaseFontSize = () => {
        setFontSize((prevSize) => prevSize + 2); // You can adjust the step as needed
    };
    const handleDecreaseFontSize = () => {

        setFontSize((prevSize) => prevSize - 2)
        console.log("SIze:", fontsize);
    }


    const textStyles = {
        fontStyle: italicStyle ? 'italic' : 'normal',
        fontWeight: boldStyle ? 'bold' : 'normal',
        textDecoration: underlineStyle ? 'underline' : 'none',
        textTransform: uppercaseStyle ? 'uppercase' : lowercaseStyle ? 'lowercase' : 'none',
        color: textColor,
        fontSize: `${fontsize}px`
    };

    return (
        <>
            <div className=" my-2 lg:w-[75%] md:w-[75%] xl:w-[75%] sm:w-full md:mx-auto lg:mx-auto xl:mx-auto sm:mx-2 h-screen">
                <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                    Your Text (Length: {textLength}, Words: {wordCount})
                </label>
                <textarea
                    style={textStyles}
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    id="message"
                    rows="20"
                    className="block p-2.5 w-full text-sm text-black bg-white rounded-lg border"
                    placeholder="Your message..."
                ></textarea>
                <div className="flex justify-center my-1">
                    <button onClick={handleIncreaseFontSize} disabled={fontsize == 30} className="bg-gray-400 px-2">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                    <span className='mx-1'>{fontsize}</span>
                    <button onClick={handleDecreaseFontSize} disabled={fontsize == 10} className="bg-gray-400 px-2 mx-1 ">
                        <i class="fa-solid fa-minus"></i>
                    </button>
                    <button onClick={handleItalic} className="bg-gray-400 px-2">
                        <i className="fa-solid fa-italic"></i>
                    </button>
                    <button onClick={handleBold} className="bg-gray-400 px-2">
                        <i className="fa-solid fa-bold mx-1 font-bold"></i>

                    </button>
                    <button onClick={handleUnderline} className="bg-gray-400 px-2">
                        <i className="fa-solid fa-underline font-bold "></i>

                    </button>
                    <button onClick={handleUppercase} className="bg-gray-400 px-2">
                        <i className="fa-solid fa-arrow-down-z-a mx-1"></i>

                    </button>
                    <button onClick={handleLowercase} className="bg-gray-400 px-2">
                        <i className="fa-solid fa-arrow-down-z-a mx-1"></i>

                    </button>
                    <button onClick={handleTextColorChange} className="bg-gray-400 px-2" style={{ backgroundColor: textColor }}>
                        <span className='text-white'>AB</span>
                    </button>
                    <input
                        type="color"
                        ref={colorPickerRef}
                        value={textColor}
                        onChange={handleColorPickerChange}
                        style={{ display: 'none' }}
                    />
                </div>
            </div >
        </>
    );
}

export default Texteditor;
