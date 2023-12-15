import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Header({}) {
  return (
    <>
      <div className="top-bar">
        <div className="container">
          <div className="flex justify-between py-6 text-white">
              <div className="menu-top-bar-menu-container">
                <ul className="menu-top-bar-menu">
                  <li className="menu-item">
                    <a href="tel:8585364161" className="pr-2">
                      <FontAwesomeIcon icon={faPhone} height={14} />
                      <span>858.536.4161</span>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="mailto:example@example.com" className="pr-2">
                      <FontAwesomeIcon icon={faEnvelope} height={14} />
                      <span>example@example.com</span>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="pr-2">
                      <FontAwesomeIcon icon={faLocationDot} height={14} />
                      <span>1105 Saudi Arabia – Street, CA</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="menu-top-bar-menu">
                  <li className="menu-item facebook">
                    <a href="#" title="" target="_blank">
                      <FontAwesomeIcon icon={faFacebook} height={20} />
                    </a>
                  </li>
                  <li className="menu-item linkedin">
                    <a href="#" title="" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} height={20} />
                    </a>
                  </li>
                  <li className="menu-item google-plus">
                    <a href="#" title="" target="_blank">
                      <FontAwesomeIcon icon={faGoogle} height={20} />
                    </a>
                  </li>
                  <li className="menu-item twitter">
                    <a href="#" title="" target="_blank">
                      <FontAwesomeIcon icon={faTwitter} height={20} />
                    </a>
                  </li>
                  <li className="menu-item instagram">
                    <a href="#" title="" target="_blank">
                      <FontAwesomeIcon icon={faInstagram} height={20} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </div>
      <div className="nav sticky top-0 z-50 text-white">
        <div className="container">
            <div className="flex justify-between items-center py-6 border-t-[0.5px] border-solid border-primary">
              <div>
                <Image src="/logo.png" width={225} height={42} alt="logo"/>
              </div>
              <div className="">
                <div className="inline-block menu headline uppercase my-4 py-2 px-4 cursor-pointer">Home</div>
                <div className="inline-block menu headline uppercase my-4 py-2 px-4 cursor-pointer">ABOUT US</div>
                <div className="inline-block menu headline uppercase my-4 py-2 px-4 cursor-pointer">SERVICES</div>
                <div className="inline-block menu headline uppercase my-4 py-2 px-4 cursor-pointer">Portfolio</div>
                <div className="inline-block menu headline uppercase my-4 py-2 px-4 cursor-pointer">Contact Us</div>
                <div className="inline-block menu headline uppercase my-4 py-2 px-4 cursor-pointer">Shop</div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}