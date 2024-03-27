import React , {useState} from 'react';
import SingIn from '../component/SingIn';
import SingUp from '../component/Singup.jsx';

const GetStarted = () => {
    const [haveAccount , setHaveAccount] = useState(true)
  return (
    <div className="flex justify-center items-center h-[69.4vh]">
      <div className="flex w-[60vw] bg-gray-300 rounded-lg overflow-hidden shadow-lg">
        <div className="w-1/2">
          <img className="w-full h-full" src="https://misc.npru.ac.th/ici/images/5.jpg" alt="Login" />
        </div>
        <div className="w-1/2 bg-Gray p-8">
            {
                haveAccount === true ? <SingIn setHaveAccount={setHaveAccount} />
                : <SingUp setHaveAccount={setHaveAccount} />
            }
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
