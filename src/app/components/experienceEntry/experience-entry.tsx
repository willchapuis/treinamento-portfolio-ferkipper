import Image from "next/image";
import './experience-entry.scss';

interface ExperienceEntryProps {
    src: string
    alt: string
    years: number
    percentage: number
}

function ExperienceEntry({ src, alt, years, percentage }: ExperienceEntryProps) {
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
        <div className={"experience-measure"} style={{width: `${percentage}%`}}>
          <span>{years} Year{years > 1 ? 's' : ''}</span>
        </div>
      </div>
    </div>
  );
}

export default ExperienceEntry;