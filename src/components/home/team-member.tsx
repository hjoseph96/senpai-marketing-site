import Image from 'next/image';

export default function TeamMember() {
  return (
    <div className="team-member-container relative rounded-xl max-w-[285px] text-center bg-dark-background2">
      <div className="">
          <Image width={285} height={295} src="/assets/images/clients/client-1.jpeg" alt="" className="rounded-t-xl" />
      </div>
      <div className="team-member-details p-12">
        <div className="title2">MERRY JOE</div>
        <div className="title4">Marketing</div>
      </div>
    </div>
  );
}