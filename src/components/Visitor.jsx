import { useState, useEffect } from 'react';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Retrieve the visitor count from localStorage
    const storedCount = localStorage.getItem('visitorCount');

    if (storedCount) {
      setVisitorCount(parseInt(storedCount, 10));
    } else {
      // Set the initial count if it's the first visit
      setVisitorCount(1);
    }

    // Increment the visitor count
    setVisitorCount((prevCount) => {
      const newCount = prevCount + 1;
      // Update localStorage with the new count
      localStorage.setItem('visitorCount', newCount.toString());
      return newCount;
    });
  }, []);

  return (
    <div className="max-w-md mx-auto bg-transparent rounded ">    

      <p className="text-lg mb-4">Total Visitors: {visitorCount}</p>
    </div>
  );
};

export default VisitorCounter;
