import Image from "next/image";
import './experience-entry.scss';
import { useEffect, useState } from "react";

interface ExperienceEntryProps {
    src: string
    alt: string
    years: number
    percentage: number
}

function ExperienceEntry({ src, alt, years, percentage }: ExperienceEntryProps) {
  const [currentWidth, setCurrentWidth] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timerWidth = setTimeout(() => {
      setCurrentWidth(percentage);
    }, 100);

    const timerText = setTimeout(() => {
      setShowText(true);
    }, 2200);

    return () => {
      clearTimeout(timerWidth);
      clearTimeout(timerText);
    }
  }, [percentage]);

  return (
    <div className="experience-language">
      <Image
        src={src}
        alt={alt}
        width={40}
        height={40}
        priority
      />
      <div className="experience-unit">
        {/* <div className={"experience-measure"} style={{width: `${percentage}%`}}> */}
        <div className={"experience-measure"} style={{width: `${currentWidth}%`, transition: 'width 2s ease-in-out'}}>
          {showText && <span>{years} Year{years > 1 ? 's' : ''}</span>}
        </div>
      </div>
    </div>
  );
}

export default ExperienceEntry;