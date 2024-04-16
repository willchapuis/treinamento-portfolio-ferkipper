import { SectionTitle } from "../sectionTitle/section-title";
import ExperienceEntry from '../experienceEntry/experience-entry';
import './experience.scss';

export function Experience() {
  const experiences = [
    { src: "/csharp.png", alt: "CSharp Logo", years: 3, percentage: 75 },
    { src: "/python.png", alt: "Python Logo", years: 1, percentage: 25 },
    { src: "/java.png", alt: "Java Logo", years: 2, percentage: 50 },
    { src: "/react.png", alt: "React Logo", years: 1, percentage: 25 }
  ];

  return (
    <div className="experience">
      <SectionTitle text="Experience" />
      <p>texto</p>
      <div className="experience-time">
        {experiences.map((exp) => (
          <ExperienceEntry key={exp.alt} {...exp} />
        ))}
      </div>
    </div>
  );
}


// export function Experience() {
//     return (
//         <div className="experience">
//         <SectionTitle text="Experience"></SectionTitle>
//         <p>texto</p>
//         <div className="experience-time">
//           <div className="experience-language">
//             <Image
//               src="/csharp.png"
//               alt="CSharp Logo"
//               width={40}
//               height={40}
//               priority
//             />
//             <div className="experience-unit">
//               <div className="experience-measure measure-3">
//                 <span>3 Years</span>
//               </div>
//             </div>
//           </div>
//           <div className="experience-language">
//             <Image
//               src="/python.png"
//               alt="Python Logo"
//               width={40}
//               height={40}
//               priority
//             />
//             <div className="experience-unit">
//               <div className="experience-measure measure-1">
//                 <span>1 Year</span>
//               </div>
//             </div>
//           </div>
//           <div className="experience-language">
//             <Image
//               src="/java.png"
//               alt="Java Logo"
//               width={40}
//               height={40}
//               priority
//             />
//             <div className="experience-unit">
//               <div className="experience-measure measure-2">
//                 <span>2 Years</span>
//               </div>
//             </div>
//           </div>
//           <div className="experience-language">
//             <Image
//               src="/react.png"
//               alt="React Logo"
//               width={40}
//               height={40}
//               priority
//             />
//             <div className="experience-unit">
//               <div className="experience-measure measure-1">
//                 <span>1 Year</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
// }