// import { useState } from 'react';
// import html from '../images/html.png';
// import css from '../images/css.png';
// import javascript from '../images/javascript.png';
// import react from '../images/react.png';
// import typescript from '../images/typescript.png';
// import github from '../images/github.png';

// const Skills = () => {

//     const [activeTab, setActiveTab] = useState('hard');
//     const [isInitialLoad, setIsInitialLoad] = useState(true);

// // Массив иконок для Hard Skills
//     const hardSkillsIcons = [
//         { src: html, alt: 'HTML5', name: 'HTML5' },
//         { src: css, alt: 'CSS3', name: 'CSS3' },
//         { src: javascript, alt: 'JavaScript', name: 'JavaScript' },
//         { src: react, alt: 'React', name: 'React' },
//         { src: typescript, alt: 'TypeScript', name: 'TypeScript' },
//         { src: github, alt: 'GitHub', name: 'GitHub' }
//     ];

//     const skillsData = {
//         hard: {
//             title: 'Hard Skills',
//             skills: [
//             { name: 'HTML5' },
//             { name: 'CSS3' }, 
//             { name: 'JavaScript' },
//             { name: 'React' },
//             { name: 'TypeScript' },
//             { name: 'GitHub' }
//             ]
//         },

//         soft: {
//             title: 'Soft Skills',
//             skills: [
//                 { name: 'Адаптивность' },
//                 { name: 'Креативное мышление' },
//                 { name: 'Самоорганизация' },
//                 { name: 'Ответственность'}
//             ]
//         }
// };

//  const handleTabClick = (tab) => {
//         setActiveTab(tab);
//         if (isInitialLoad) {
//             setIsInitialLoad(false);
//         }
//     };

// const currentTab = skillsData[activeTab];

//     return (
//             <div className="skillsSection">
//                 <h3 className="titleSkills">Навыки и умения</h3>
               
//                 {/*кнопки*/}

//                         <div className="skillsTabs">
//                             <button 
//                             className={`skillsTab ${activeTab === 'hard' ? 'active' : ''}`}
//                             onClick = {() => handleTabClick('hard')}>
//                                 Hard Skills
//                                 <span className="tabIndicator"></span>
//                             </button>
//                             <button 
//                             className={`skillsTab ${activeTab === 'soft' ? 'active' : ''}`}
//                             onClick = {() => handleTabClick('soft')}>
//                                 Soft Skills
//                                 <span className="tabIndicator"></span>
//                             </button>
//                         </div>

//  {/* Внешние иконки для Hard Skills (за пределами border) */}
//             {activeTab === 'hard' && !isInitialLoad && (
//                 <div className="externalIconsContainer">
//                     {/* <div className="externalIconsRow topIcons"> */}
//                         {hardSkillsIcons.slice(0, 3).map((icon, index) => (
//                             <div key={`top-${index}`} className="externalIconItem">
//                                 <img 
//                                     src={icon.src} 
//                                     alt={icon.alt}
//                                     className="externalIcon"
//                                 />
//                                 <span className="externalIconLabel">{icon.name}</span>
//                             </div>
//                         ))}
//                     {/* </div> */}
                    
//                     <div className="externalIconsRow bottomIcons">
//                         {hardSkillsIcons.slice(3).map((icon, index) => (
//                             <div key={`bottom-${index}`} className="externalIconItem">
//                                 <img 
//                                     src={icon.src} 
//                                     alt={icon.alt}
//                                     className="externalIcon"
//                                 />
//                                 <span className="externalIconLabel">{icon.name}</span>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}



//                         {/*контент с анимацией*/}

//                         {/* <div className="skillsContentWrapper"> */}
//                         {!isInitialLoad && (
//                         <div className="skillsContent">
//                             <div className="skillsHeader">
//                                 <h3 className="skillsTitle">
//                                     {currentTab.title}
//                                 </h3>
//                                 <p className="skillsDescription">
//                                     {currentTab.description}
//                                 </p>
//                             </div>

//                             <div className="skillsGrid">
//                                 {currentTab.skills.map((skill, index) => (
//                                 <div 
//                                 key={index}
//                                 classNAme="skillItem"
//                                 style={{ animationDelay: `${index} * 0.1}s` }}
//                                 >
//                                     <span 
//                                     className="skillName"
//                                     >
//                                     {skill.name}
//                                     </span>
//                                      {skill.level && (
//                                 <div className="skill-level">
//                                     <div 
//                                         className="skill-level-bar" 
//                                         style={{ width: `${skill.level}%` }}
//                                     ></div>
//                                     <span className="skill-level-text">{skill.level}%</span>
//                                 </div>
//                             )}
//                                 </div>
//                             ))}</div>
//                         </div>
//                     )}
//                     </div>
//             //    </div>
//         // </div>
//     )
// }

// export default Skills;












// import { useState } from 'react';
// import html from '../images/html.png';
// import css from '../images/css.png';
// import javascript from '../images/javascript.png';
// import react from '../images/react.png';
// import typescript from '../images/typescript.png';
// import github from '../images/github.png';

// const Skills = () => {
//     const [activeTab, setActiveTab] = useState('hard');
//     const [isInitialLoad, setIsInitialLoad] = useState(true);

//     // Массив иконок для Hard Skills
//     const hardSkillsIcons = [
//         { src: html, alt: 'HTML5', name: 'HTML5' },
//         { src: css, alt: 'CSS3', name: 'CSS3' },
//         { src: javascript, alt: 'JavaScript', name: 'JavaScript' },
//         { src: react, alt: 'React', name: 'React' },
//         { src: typescript, alt: 'TypeScript', name: 'TypeScript' },
//         { src: github, alt: 'GitHub', name: 'GitHub' }
//     ];

//     const skillsData = {
//         hard: {
//             title: 'Hard Skills',
//             description: 'Технологии, которыми я владею',
//             skills: [
//                 { name: 'HTML5' },
//                 { name: 'CSS3' }, 
//                 { name: 'JavaScript' },
//                 { name: 'React' },
//                 { name: 'TypeScript' },
//                 { name: 'GitHub' }
//             ]
//         },
//         soft: {
//             title: 'Soft Skills',
//             description: 'Личностные качества и навыки',
//             skills: [
//                 { name: 'Адаптивность' },
//                 { name: 'Креативное мышление' },
//                 { name: 'Самоорганизация' },
//                 { name: 'Ответственность'}
//             ]
//         }
//     };

//     const handleTabClick = (tab) => {
//         setActiveTab(tab);
//         if (isInitialLoad) {
//             setIsInitialLoad(false);
//         }
//     };

//     const currentTab = skillsData[activeTab];

//     return (
//         <div className="skillsSection">
//             <h3 className="titleSkills">Навыки и умения</h3>
            
//             {/* Кнопки */}
//             <div className="skillsTabs">
//                 <button 
//                     className={`skillsTab ${activeTab === 'hard' ? 'active' : ''}`}
//                     onClick={() => handleTabClick('hard')}
//                 >
//                     Hard Skills
//                     <span className="tabIndicator"></span>
//                 </button>
//                 <button 
//                     className={`skillsTab ${activeTab === 'soft' ? 'active' : ''}`}
//                     onClick={() => handleTabClick('soft')}
//                 >
//                     Soft Skills
//                     <span className="tabIndicator"></span>
//                 </button>
//             </div>

//             {/* Контент с анимацией */}
//             {!isInitialLoad && (
//                 <div className="skillsContent">
//                     {/* Иконки вокруг рамки (только для hard skills) */}
//                     {activeTab === 'hard' && (
//                         <div className="skillsIconsAround">
//                             {hardSkillsIcons.map((icon, index) => (
//                                 <div 
//                                     key={index} 
//                                     className={`skillIconPosition icon-${index}`}
//                                 >
//                                     <div className="skillIconWrapper">
//                                         <img 
//                                             src={icon.src} 
//                                             alt={icon.alt}
//                                             className="skillIcon"
//                                         />
//                                         <span className="skillIconLabel">{icon.name}</span>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     )}
                    
//                     <div className="skillsContentInner">
//                         <div className="skillsHeader">
//                             <h3 className="skillsTitle">
//                                 {currentTab.title}
//                             </h3>
//                             <p className="skillsDescription">
//                                 {currentTab.description}
//                             </p>
//                         </div>

//                         <div className="skillsGrid">
//                             {currentTab.skills.map((skill, index) => (
//                                 <div 
//                                     key={index}
//                                     className="skillItem"
//                                     style={{ animationDelay: `${index * 0.1}s` }}
//                                 >
//                                     <span className="skillName">
//                                         {skill.name}
//                                     </span>
//                                     {skill.level && (
//                                         <div className="skillLevel">
//                                             <div 
//                                                 className="skillLevelBar" 
//                                                 style={{ width: `${skill.level}%` }}
//                                             ></div>
//                                             <span className="skillLevelText">{skill.level}%</span>
//                                         </div>
//                                     )}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Skills;



import { useState } from 'react';
import html from '../images/html.png';
import css from '../images/css.png';
import javascript from '../images/javascript.png';
import react from '../images/react.png';
import typescript from '../images/typescript.png';
import github from '../images/github.png';
import adaptability from '../images/adaptability.png';
import creativeThinking from '../images/creativeThinking.png';
import selfOrganization from '../images/selfOrganization.png';
import responsibility from '../images/responsibility.png';

import Snowflakes from '../components/Snowflakes';

const Skills = () => {
    const [activeTab, setActiveTab] = useState('hard');
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const [selectedSkill, setSelectedSkill] = useState(null);

    // Массив иконок для Hard Skills как отдельные кнопки
    const hardSkillsButtons = [
        { id: 'html', src: html, alt: 'HTML5', name: 'HTML5'},
        { id: 'css', src: css, alt: 'CSS3', name: 'CSS3'},
        { id: 'js', src: javascript, alt: 'JavaScript', name: 'JavaScript'},
        { id: 'react', src: react, alt: 'React', name: 'React'},
        { id: 'ts', src: typescript, alt: 'TypeScript', name: 'TypeScript'},
        { id: 'git', src: github, alt: 'GitHub', name: 'Git/GitHub'}
    ];

    // Soft skills кнопки (без иконок или с эмодзи)
    const softSkillsButtons = [
    { id: 'adaptability', name: 'Адаптивность', img: <img src={adaptability} alt='Адаптивность' />},
        { id: 'creativity', name: 'Креативное мышление', img: <img src={creativeThinking} alt='Креативное мышление' />},
        { id: 'organization', name: 'Самоорганизация', img: <img src={selfOrganization} alt='Самоорганизация' />},
        { id: 'responsibility', name: 'Ответственность', img: <img src={responsibility} alt='Ответственность' />}
    ];

    const skillsData = {
        hard: {
            title: 'Hard Skills',
            description: selectedSkill ? 
                `${selectedSkill.name}: ${selectedSkill.description}` : 
                'Технологии, которыми я владею',
            buttons: hardSkillsButtons
        },
        soft: {
            title: 'Soft Skills',
            description: selectedSkill ? 
                `${selectedSkill.name}: ${selectedSkill.description}` : 
                'Навыки, которыми я владею',
            buttons: softSkillsButtons
        }
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setSelectedSkill(null); // Сбрасываем выбранный навык при смене вкладки
        if (isInitialLoad) {
            setIsInitialLoad(false);
        }
    };

    const handleSkillClick = (skill) => {
        setSelectedSkill(skill);
    };

    const currentTab = skillsData[activeTab];

    return (
        <div className="skillsSection" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Добавляем снежинки на фон */}
      <Snowflakes />
            <h3 className="titleSkills">Навыки и умения</h3>
            
            {/* Основные вкладки Hard/Soft Skills */}
            <div className="skillsTabs">
                <button 
                    className={`skillsTab ${activeTab === 'hard' ? 'active' : ''}`}
                    onClick={() => handleTabClick('hard')}
                >
                    Hard Skills
                    <span className="tabIndicator"></span>
                </button>
                <button 
                    className={`skillsTab ${activeTab === 'soft' ? 'active' : ''}`}
                    onClick={() => handleTabClick('soft')}
                >
                    Soft Skills
                    <span className="tabIndicator"></span>
                </button>
            </div>

            {/* Контент с анимацией */}
            {!isInitialLoad && (
                <div className="skillsContent">
        

                    {/* Информация о выбранном навыке */}
                    <div className="skillsContentInner">
                        <div className="skillsHeader">
                            <h3 className="skillsTitle">
                                {currentTab.title}
                            </h3>
                            <p className="skillsDescription">
                                {currentTab.description}
                            </p>
                        </div>

                      

                        {/* Если навык не выбран, показываем общий список */}
                        
                            <div className="skillsGrid">
                                {activeTab === 'hard' ? (
                                    // Для hard skills - сетка с иконками
                                    hardSkillsButtons.map((skill, index) => (
                                        <div 
                                            key={skill.id}
                                            className="skillItem"
                                            style={{ animationDelay: `${index * 0.1}s` }}
                                        >
                                            <img 
                                                src={skill.src} 
                                                alt={skill.alt}
                                                className="skillGridIcon"
                                            />
                                            <span className="skillName">{skill.name}</span>
                                        </div>
                                    ))
                                ) : (
                                    // Для soft skills - просто список
                                    softSkillsButtons.map((skill, index) => (
                                        <div 
                                            key={skill.id}
                                            className="skillItem softSkillItem"
                                            style={{ animationDelay: `${index * 0.1}s` }}
                                        >
                                            <span className="skillImg">{skill.img}</span>
                                            <span className="skillName">{skill.name}</span>
                                        </div>
                                    ))
                                )}
                            </div>
                       
                    </div>
                </div>
            )}
        </div>
    );
};

export default Skills;