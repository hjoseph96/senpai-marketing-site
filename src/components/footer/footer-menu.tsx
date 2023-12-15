import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function FooterMenu({title}: {title: string}) {
  return (
      <div className="footer-menu py-2">
        <div className="footer-menu-heading flex items-center gap-2">
          <FontAwesomeIcon icon={faChevronRight} className="w-[8px]" />
          <span className="text-white title4 capitalize">{title}</span>
        </div>
      </div>
    );
}