export default function LeftTitle({title, whiteMode = false, className}: {title: string; whiteMode?: boolean; className?: string;}) {
  return (
      <div className="left-title">
        <div className={(className ? `${className} ` : "title2 pb-4 ") + 'left-title-heading text-primary uppercase pb-4' + (whiteMode ? " white-mode" : "")}>{title}</div>
      </div>
    );
}