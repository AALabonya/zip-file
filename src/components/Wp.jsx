import { useState } from "react";
import WP from '../assets/4485687-gyLRfVl4.png';

const Wp = () => {
    const [showNeedHelp, setShowNeedHelp] = useState(false);

    return (

        // Whatsapp +971544515235

        <div className="absolute right-5 bottom-5 !fixed z-[50000]">
            <div className="flex items-center gap-4">

                {showNeedHelp && <p className='font-semibold text-white'>Need Help?</p>}
                <a href="https://wa.me/+971544515235" target='_blank' rel='noreferrer' onMouseEnter={() => setShowNeedHelp(true)} onMouseLeave={() => setShowNeedHelp(false)}>  <img className="w-12 cursor-pointer hover:scale-110 transition-all" src={WP} alt="" /></a>
            </div>
        </div>
    );
};

export default Wp;