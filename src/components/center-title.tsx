export default function CenterTitle({title, whiteMode = false, className}: {title: string; whiteMode?: boolean; className?: string }) {
  return (
      <div className="home-title text-center">
        <h2 className={( className ?? "h2 pb-4 text-primary") + ' home-title-heading uppercase inline-block' + (whiteMode ? " white-mode" : "")}>{title}</h2>
      </div>
    );
}