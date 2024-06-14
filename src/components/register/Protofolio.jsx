
import { Link } from 'react-router-dom';

function Portfolio() {
  const nameArray = ["R", "a", "j", "a", "n", "  ", "P", "r", "a", "j", "a", "p", "a", "t", "i"];
  const [currentElement, setCurrentElement] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentElement((prev) => prev + nameArray[currentIndex]);

      if (currentIndex === nameArray.length - 1) {
        setTimeout(() => {
          setCurrentElement('');
          setCurrentIndex(0);
        }, 300);
      } else {
        setCurrentIndex((prev) => prev + 1);
      }
    }, 300);

    return () => clearInterval(intervalId);
  }, [currentIndex]);
  return (
    <div className="container mx-auto p-4 bg-[#eeeef0] my-3 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4">
          {/* Your content for the frist part */}
          <img className="rounded-full" src="https://avatars.githubusercontent.com/u/105105537?v=4" alt="" />
        </div>
        {/* second Part */}
        <div className="p-4">
          {/* Your content for the first part */}
          <div className="text-center  h-16">
            <h2 className="text-4xl md:text-4xl lg:text-4xl font-bold text-[#ea580c] uppercase">{currentElement}</h2>

          </div>
          <h2 className="text-center text-sm text-blue-700 mb-4 capitalize sm:mb-3">Web Developer | Frontend Engineer</h2>


          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-2">
              <ul className="list-disc list-inside">
                <li className="text-[#1D4ED8] font-medium ">HTML5</li>
                <li className="text-[#92400E] font-medium ">CSS3</li>
                <li className="text-[#9D174D] font-medium ">JavaScript</li>
                <li className="font-medium text-[#1D4ED8] ">Node Js & Express Js</li>
              </ul>
            </div>
            <div className="p-2">
              <ul className="list-disc list-inside">
                <li className="font-medium text-[#111827] ">React JS</li>
                <li className="font-medium text-[#7F1D1D] ">Redux Toolkit</li>
                <li className="font-medium text-[#1D4ED8] ">Tailwind CSS, Bootstrap</li>
                <li className="text-[#9D174D] font-medium ">MongoDB</li>
              </ul>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Contact</h2>
          </div>
          <span className="text-red-600">
            <i className="fa-regular fa-envelope fa-beat"></i>{' '}
          </span>
          <Link
            to="https://mail.google.com/mail/u/0/#inbox"
            target="_blank"
            rel="no"
          >
            &nbsp;rajanprajapati743@gmail.com
          </Link>
          <br />{' '}
          <Link
            to="https://www.linkedin.com/in/rajan-prajapati-717337192/"
            target="_blank"
            rel="linkedIN"
            className="text-gray-600"
          >
            <i className="fa-brands fa-linkedin" style={{ color: ' #125fe2' }}></i>{' '}
            &nbsp;https://www.linkedin.com/in/rajan-prajapati-717337192/
          </Link>
          <br />
          <Link
            to="https://web.whatsapp.com/"
            target="_blank"
            rel="no"
            className="text-gray-600"
          >
            <i className="fa-brands fa-whatsapp" style={{ color: '#34da07' }}></i>{' '}
            &nbsp;
            <i className="fa-solid fa-mobile" style={{ color: '#f0059a' }}></i>
            +91-7460033731
          </Link>
          <br />
          <Link
            to="https://github.com/Rajan1851421"
            target="_blank"
            rel="No github"
            className="text-gray-600"
          >
            <i className="fa-brands fa-square-github fa-shake" style={{ color: '#0c0d0d' }}></i>{' '}
            &nbsp;Github Profile
          </Link>
          <br />
          {/* Displaying the characters on the UI */}
          {/* <div className="text-3xl font-bold my-4">{currentElement}</div> */}
        </div>
        {/* Second Part */}
      </div>
    </div>
  );
}

export default Portfolio;
