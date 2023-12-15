import Image from 'next/image';

export default function Testimonial() {
  return (
    <div className="testimonial-container relative rounded-xl bg-white p-10 max-w-[585px] text-center">
      <div className="testimonial-author -mt-20">
        <span className="">
          <Image width="90" height="90" src="/assets/images/clients/client-1.jpeg" alt="" className="rounded-full mx-auto mb-4"/>
        </span>
        <cite className="text-primary title2 font-semibold">Michel Johnson,<small className="text-black title4 ml-2">Moscow</small></cite>
      </div>
      <div className="testimonial-quote mt-8 title4">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s” when an unknown printer took.
      </div>
    </div>
  );
}