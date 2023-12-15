import Image from 'next/image'
import CenterTitle from '@/components/center-title';
import Testimonial from '@/components/home/testimonial';
import TeamMember from '@/components/home/team-member';
import LatestNews from '@/components/home/latest-news';
import WhatWeWork from '@/components/home/what-we-work';
import OurService from '@/components/home/our-service';
import LeftTitle from '@/components/left-title';
import ServiceItem from '@/components/home/service-item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faGlobe, faPhone, faTruck, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
   <div className="main">
     {/*Banner*/}
     <div className="banner h-[839px]">
         <div className="h-full w-full">
           <Image src="/assets/images/backgrounds/back1.jpeg" width={2000} height={1000} alt="back1" className="w-full h-full absolute top-0 left-0 object-cover -z-10" />
           {/*<div className="absolute top-0, left-0 w-full h-full bg-[#000000ac]"></div>*/}
         </div>
     </div>

     {/*Explore Service*/}
     <div className="explore">
       <div className="container pb-28 relative pt-[400px]">
         <div className="grid-cols-12 grid w-full -top-[200px] absolute left-0">
           <div className="col-span-4 bg-primary flex flex-col items-center text-white rounded-l-2xl px-12 py-24">
             <FontAwesomeIcon icon={faPhone} height={100} />
             <CenterTitle className="h2 mt-8 text-white pb-4" title={"Best Prices"} />
             <div className="caption1 mt-8 text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</div>
           </div>
           <div className="col-span-4 bg-dark-background">
             <form className="flex flex-col items-center px-12 py-24">
              <CenterTitle title={"Get Free Quote"} />
               <input type="text" name="name" className="rounded-full py-2 px-4 w-full mt-8 text-lg" placeholder="Enter Name" />
               <input type="text" name="email" className="rounded-full py-2 px-4 w-full mt-8 text-lg" placeholder="Enter Email" />
               <button type="submit" className="rounded-full bg-primary text-white py-2 w-full mt-8 text-xl font-bold">Get Quote</button>
             </form>
           </div>
           <div className="col-span-4 bg-primary flex flex-col items-center text-white rounded-r-2xl px-12 py-24">
             <FontAwesomeIcon icon={faPhone} height={100} />
             <CenterTitle className="h2 mt-8 text-white pb-4" title={"24/7 Support"} />
             <div className="caption1 mt-8 text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</div>
           </div>
         </div>

         <div className="flex flex-wrap gap-8">
           <div className="w-1/2">
             <LeftTitle title="EXPLORE THE FREIGHT SERVICE" whiteMode={true} className="h2 pb-8" />
             <div className="caption1 mt-8 text-black">
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s <br/> standard dummy text ever since the 1500s, when an unknown printer took.
             </div>
             <div className="mt-10">
               <div className="text-primary uppercase title3">BENEFITS:</div>
               <ul className="title4 mt-8 text-black">
                 <li>Ut enim ad minim veniam</li>
                 <li>Exercitation ullamco laboris</li>
                 <li>Duis aute irure dolorrerit</li>
                 <li>Voluptate velit esse cillum dolore</li>
                 <li>Excepteur sint occaecat</li>
               </ul>
               <div className="mt-12">
                <a href="#" target="_self" title="" className="px-12 py-2 bg-primary text-white rounded-full"> Read More </a>
               </div>
             </div>
           </div>
           <div>
             <Image src="/assets/images/explorer.jpeg" width={525} height={467} alt="explorer"/>
           </div>
         </div>
         <div className="mt-8 flex flex-wrap justify-center gap-8">
           <ServiceItem title={"24/7 Service"} icon={<FontAwesomeIcon icon={faPhone} height={50} />}  active />
           <ServiceItem title={"World Wide"} icon={<FontAwesomeIcon icon={faGlobe} height={50} />} />
           <ServiceItem title={"Delivery"} icon={<FontAwesomeIcon icon={faTruck} height={50} />} />
           <ServiceItem title={"Time"} icon={<FontAwesomeIcon icon={faClock} height={50} />} />
           <ServiceItem title={"Team"} icon={<FontAwesomeIcon icon={faUser} height={50} />} />
         </div>
       </div>
     </div>

     {/*Our Services*/}
     <div className="testimonial bg-white">
       <div className="relative h-[556px]"  style={{ backgroundImage: 'url(/assets/images/bg1.jpg)', backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
         <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#000000cc]"></div>
         <div className="container absolute top-0 bottom-0 left-0 right-0 pt-28">
           <CenterTitle title="OUR SERVICES"/>
           <div className="caption1 mt-8 text-white text-center">
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s <br/> standard dummy text ever since the 1500s, when an unknown printer took.
           </div>
         </div>
       </div>
       <div className="h-[700px]">
         <div className="container relative">
           <div className="-top-[250px] absolute rounded-xl bg-white" style={{ boxShadow: "0px 20px 20px 0 #e9e9e9" }}>
             <div className="grid grid-cols-12 p-12">
               <div className="col-span-4">
                 <OurService top={true} last={false} />
                 <OurService top={false} last={false} />
               </div>
               <div className="col-span-4">
                 <OurService top={true} last={false} />
                 <OurService top={false} last={false} />
               </div>
               <div className="col-span-4">
                 <OurService top={true} last={true} />
                 <OurService top={false} last={true} />
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>

     {/*What We Work*/}
     <div className="testimonial bg-white">
       <div className="pt-28">
         <CenterTitle title="What We Work" whiteMode={true} />
         <div className="flex justify-around mt-20">
           <WhatWeWork />
           <WhatWeWork />
           <WhatWeWork />
           <WhatWeWork />
         </div>
       </div>
     </div>

     {/*Latest News*/}
     <div className="testimonial bg-white">
       <div className="container py-28">
         <CenterTitle title="Latest News" whiteMode={true} />
         <div className="flex flex-wrap gap-8 justify-center mt-20">
           <LatestNews />
           <LatestNews />
           <LatestNews />
         </div>
       </div>
     </div>

     {/*Service Type*/}
     <div className="service-type relative text-white h-[596px]">
       <div className="left-skew">
         <Image width="1920" height="650" src="/assets/images/half-bg1.jpg" className="max-w-full" alt="" />
         <div className="skew-wrapper py-28 w-full pr-[180px]">
           <div className="float-right">
             <div className="title4">
               Here are a few places to explore shipping.
             </div>
             <h2 className="h2 mt-4">ARE YOU A SENDER?</h2>
              <ul className="title4 my-12">
                <li>Core freight</li>
                <li>Integrated logistics – LLP</li>
                <li>Strategic-Xpert</li>
                <li>One time solutions</li>
                <li>Geo-Gateways</li>
              </ul>
             <a href="#" target="_self" title="" className="px-8 py-2 bg-primary text-white rounded-full"> Read More </a>
           </div>
         </div>
       </div>
       <div className="right-skew float-right py-28">
         <Image width="1920" height="650" src="/assets/images/half-bg2.jpg" className="" alt="" />
         <div className="skew-wrapper py-28 pl-[120px]">
           <div className="title4">
             Here are a few places to explore shipping.
           </div>
           <h2 className="h2 mt-4">ARE YOU A SENDER?</h2>
           <ul className="skew-items title4 my-12">
             <li>Core freight</li>
             <li>Integrated logistics – LLP</li>
             <li>Strategic-Xpert</li>
             <li>One time solutions</li>
             <li>Geo-Gateways</li>
           </ul>
           <a href="#" target="_self" title="" className="px-8 py-2 bg-primary text-white rounded-full"> Read More </a>
         </div>
       </div>
     </div>

     {/*Our Team*/}
     <div className="testimonial bg-white">
       <div className="container py-28">
         <CenterTitle title="Out Team" whiteMode={true} />
         <div className="flex flex-wrap gap-8 justify-center mt-20">
           <TeamMember />
           <TeamMember />
           <TeamMember />
           <TeamMember />
           <TeamMember />
           <TeamMember />
           <TeamMember />
           <TeamMember />
         </div>
       </div>
     </div>

     {/*Testimonial*/}
     <div className="testimonial bg-[#212121e6]">
       <div className="container py-28">
         <CenterTitle title="Clients Say" />
         <div className="flex gap-8 justify-around mt-20">
            <Testimonial />
            <Testimonial />
         </div>
       </div>
     </div>

     {/*Clients*/}
     <div className="clients">
       <div className="container py-28">
        <div className="flex justify-around items-center">
          <Image src="/assets/images/clients/client1-1.png" width={158} height={158} alt="client1-1"/>
          <Image src="/assets/images/clients/client1-1.png" width={158} height={158} alt="client1-1"/>
          <Image src="/assets/images/clients/client1-1.png" width={158} height={158} alt="client1-1"/>
          <Image src="/assets/images/clients/client1-1.png" width={158} height={158} alt="client1-1"/>
        </div>
       </div>
     </div>
   </div>
  )
}
