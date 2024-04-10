import { SectionTitle } from "../sectionTitle/section-title";
import Image from "next/image";
import "./experience.scss";

export function Experience() {
    return (
        <div className="experience">
        <SectionTitle text="Experience"></SectionTitle>
        <p>texto</p>
        <div className="experience-time">
          <div className="experience-language">
            <Image
              src="/csharp.png"
              alt="CSharp Logo"
              width={40}
              height={40}
              priority
            />
            <div className="experience-unit">
              <div className="experience-measure measure-3">
                <span>3 Years</span>
              </div>
            </div>
          </div>
          <div className="experience-language">
            <Image
              src="/python.png"
              alt="Python Logo"
              width={40}
              height={40}
              priority
            />
            <div className="experience-unit">
              <div className="experience-measure measure-1">
                <span>1 Year</span>
              </div>
            </div>
          </div>
          <div className="experience-language">
            <Image
              src="/java.png"
              alt="Java Logo"
              width={40}
              height={40}
              priority
            />
            <div className="experience-unit">
              <div className="experience-measure measure-2">
                <span>2 Years</span>
              </div>
            </div>
          </div>
          <div className="experience-language">
            <Image
              src="/react.png"
              alt="React Logo"
              width={40}
              height={40}
              priority
            />
            <div className="experience-unit">
              <div className="experience-measure measure-1">
                <span>1 Year</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}