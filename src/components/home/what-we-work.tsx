import Image from 'next/image';

export default function WhatWeWork() {
  return (
    <div className="what-we-work-container relative w-full">
      <div className="">
          <Image width={630} height={912} src="/assets/images/works/what-we-works-1.jpg" alt="" className="" />
      </div>
      <div className="what-we-work-content absolute top-0 pt-10 pb-4 px-8 w-full">
        <div className="title2 uppercase text-white text-center">Cargo Transports</div>
      </div>
      <div className="what-we-work-details title4 text-center bg-[#000000cc] text-white absolute bottom-0 p-8 z-10">
        <div className="">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s dummy text ever since the 1500s.
        </div>
        <div className="mt-8">
          <a href="#" className="px-8 py-2 bg-primary text-white rounded-full">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}