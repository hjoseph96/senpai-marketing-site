import Image from 'next/image';

export default function OurService({top, last}: {top: boolean, last: boolean}) {
  let styles = {};
  if (top) {
    if (last) {
      styles = { borderBottom: "0.5px solid #40404a" };
    } else {
      styles = { borderBottom: "0.5px solid #40404a", borderRight: "0.5px solid #40404a" };
    }
  } else {
    if (!last) {
      styles = { borderRight: "0.5px solid #40404a" };
    }
  }

  return (
    <div className="oue-service-container relative flex items-center flex-col w-full p-12" style={styles}>
      <Image width={60} height={52} src="/assets/images/services/service-1.png" alt="" className="bg-dark-background" />
      <div className="title2 uppercase mt-8">AIR FREIGHT</div>
      <div className="bg-dark-background h-[2px] w-[50px] my-8"></div>
      <div className="our-service-details title4">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s dummy text ever since the 1500s.
      </div>
    </div>
  );
}