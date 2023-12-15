import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function LatestNews() {
  return (
    <div className="lastest-news-container relative rounded-xl max-w-[370px] text-center bg-dark-background2 p-8">
      <div className="">
          <Image width={310} height={232} src="/assets/images/blogs/blog-1.jpeg" alt="" className="rounded-xl" />
      </div>
      <div className="lastest-news-details mt-12">
        <div className="title2">Hallway Storage for Small Spaces</div>
        <div className="flex justify-between items-center mt-8">
          <div className="entry-date">
            January 18, 2019
          </div>
          <div className="w-[2px] h-[20px] bg-black"></div>
          <div className="entry-button">
            <a href="#" className="dt-sc-button">
              <span className="fas fa-arrow-alt-circle-right"></span>
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}