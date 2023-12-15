import Image from 'next/image'
import LeftTitle from '@/components/left-title';
import FooterMenu from '@/components/footer/footer-menu';

export default function Index({}) {
  return (
    <div className="footer relative bg-dark-background text-white">
      <div className="container py-20">
        <div className="grid grid-cols-12">
          <div className="col-span-3 px-8">
            <div>
              <Image src="/logo.png" width={225} height={42} alt="logo"/>
            </div>
            <div className="mt-8">
              Ut enim ad minim veniam, quis nostrud cittion ullamco laboris nisi ut aliquip cosquat uis aute irure
            </div>
            <div className="mt-12">
              <LeftTitle title={"WORKING HOURS"} />
              <div className="mt-8">
                <div>Mon-Fri ............ 8:00 am - 06:00pm</div>
                <div>Sat-Sun ............. 8:00 am - 12:00pm</div>
              </div>
            </div>
          </div>
          <div className="col-span-3 px-8">
            <LeftTitle title="Our Services" />
            <div className="mt-8">
              <FooterMenu title="Automaotive Lines" />
              <FooterMenu title="Automaotive Lines" />
              <FooterMenu title="Automaotive Lines" />
              <FooterMenu title="Automaotive Lines" />
              <FooterMenu title="Automaotive Lines" />
              <FooterMenu title="Automaotive Lines" />
            </div>
          </div>
          <div className="col-span-3 px-8">
            <LeftTitle title="Quick Links" />
            <div className="mt-8">
              <FooterMenu title="About Us" />
              <FooterMenu title="About Us" />
              <FooterMenu title="About Us" />
              <FooterMenu title="About Us" />
              <FooterMenu title="About Us" />
            </div>
          </div>
          <div className="col-span-3 px-8"></div>
        </div>
      </div>
      <div className="footer-bar bg-primary relative">
        <div className="container">
          <p className="text-center py-4">Copyright © 2024 <a href="#">Capsigns</a>. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}