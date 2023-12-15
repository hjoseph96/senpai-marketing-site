export default function ServiceItem({title, icon, active = false}: {title: string; icon: any, active?: boolean }) {
  let classNames = "service-item text-center rounded-lg flex flex-col items-center w-[168px] py-4";
  if (active) {
    classNames += " bg-primary text-white";
  } else {
    classNames += " border border-solid border-[#0000001a]";
  }
  return (
      <div className={classNames}>
        {icon}
        <div className="title3 uppercase mt-4">{title}</div>
      </div>
    );
}