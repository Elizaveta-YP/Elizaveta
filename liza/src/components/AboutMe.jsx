import { useState } from 'react';
import photoAboutMe from '../images/photoAboutMe.jpg';
import reading from '../images/reading.jpg';
import sport from '../images/sport.jpg';
import travel from '../images/travel.jpg';


import Stars from '../components/Stars';

const AboutMe = () => {
    //Состояние для отслеживания открытых карточек
    const [openCards, setOpenCards] = useState({});

    //Функция для переключения состояния карточки
    const toggleCard = (cardId) => {
        setOpenCards(prev => ({
            ...prev,
            [cardId]: !prev[cardId]
        }));
    };

    // Данные для всех разделов
    const sectionsData = [
        { 
            id: 1, 
            title: 'Давайте знакомиться',
            content: (
                <div className="sectionGrid">
                    <div className="sectionImage">
                        <img 
                            src={photoAboutMe} 
                            alt="Фотография Елизаветы" 
                            className="profilePhoto"
                        />
                    </div>
                    <div className="textSection">
                        <p>Приветствую! Меня зовут Чешейко Елизавета Олеговна, и я на старте своего пути в фронтенд-разработке.</p>
                        <p className=" acquaintance">Мой путь в программирование начался не с университетской скамьи, а с обычного любопытства: "А как вообще работают эти красивые сайты?". Это любопытство переросло в серьезное увлечение, затем в сотни часов практики и, наконец, в профессию.</p>
                        <br />
                        <p>Мои сильные стороны: быстрая обучаемость, внимательность к деталям и огромное желание развиваться в IT-сфере.</p>
                        <p className="acquaintance">Особенно ценю в работе возможность создавать продукты, которыми будут пользоваться тысячи людей. Ищу команду, где смогу принести пользу и вырасти как специалист.</p>
                    </div>
                </div>
            )
        },
        { 
            id: 2, 
            title: 'Образование',
            content: (
                <div className="textSection">
                    <p>В настоящее время активно развиваюсь в сфере IT: прохожу курс переквалификации на платформе «Яндекс Практикум» по специальности «Фронтенд-разработчик».</p>
                    <p>Обучение включает освоение современных технологий, таких как HTML, CSS, JavaScript, TypeScript, React, а также работу с Git и участие в проектах, максимально приближенных к реальным условиям.</p>
                </div>
            )
        },
        { 
            id: 3, 
            title: 'Опыт работы',
            content: (
                <div className="textSection">
                    <p>Коммерческого опыта в разработке пока нет, однако за время обучения на «Яндекс Практикум» я самостоятельно создаю учебные проекты, включая интерактивное веб-приложение.</p>
                    <p>Все проекты доступны на GitHub и демонстрируют умение работать по техническому заданию, писать чистый код и осваивать новые технологии.</p>
                </div>
            )
        },
        { 
            id: 4, 
            title: 'Хобби',
            content: (
                <div className="hobbiesContainer">
                    <div className="hobbiesGrid">
                        {/* Колонка 1: Спорт */}
                        <div className={`hobbyCard ${openCards[1] ? 'open' : ''}`}>
                            <h4 className="smallHeadlines">Спорт и здоровье</h4>

                            {/*Показ картинки в зависимости от состояния*/}
                            {!openCards[1] ? (
                                <div
                                    className="cardImageContainer"
                                    // onClick={() => toggleCard(1)}
                                >
                                <img 
                                    src={sport}
                                    alt='Коврик для фитнеса' 
                                    className="screensaver"
                                 />
                                     <button 
                                          className="sectionButtons expandButton"
                                          onClick={() => toggleCard(1)}
                                     >
                                       Развернуть
                                     </button>
                                </div>
                            ) : (
                                    <div className="cardOpenedContainer">
                                        <div className="cardTextContainer">
                                            <p className="hobbyDescription">
                                                 Я регулярно бегаю и плаваю в бассейне, это помогает поддерживать баланс между работой за компьютером и физической активностью.
                                            </p>
                                         </div>
                                         <button
                                            className="sectionButtons collapseButton"
                                            onClick={() => toggleCard(1)}
                                        >
                                            Свернуть
                                        </button>
                                    </div>
                            )}
                        </div>
                        
                        {/* Колонка 2: Чтение */}
                        <div className={`hobbyCard ${openCards[2] ? 'open' : ''}`}>
                            <h4 className="smallHeadlines">Чтение и саморазвитие</h4>

                             {/*Показ картинки в зависимости от состояния*/}
                             {!openCards[2] ? (
                                <div
                                    className="cardImageContainer"
                                    // onClick={() => toggleCard(2)}
                                >
                                <img 
                                src={reading}
                                alt='Книга' 
                                className="screensaver"
                                />
                                     <button 
                                          className="sectionButtons expandButton"
                                          onClick={() => toggleCard(2)}
                                     >
                                       Развернуть
                                     </button>
                                    </div>
                             ) : (
                                    <div className="cardOpenedContainer">
                                        <div className="cardTextContainer">
                                          <p className="hobbyDescription">
                                             Изучаю книги по программированию. Люблю читать классические произведения и книги по саморазвитию.  
                                          </p>
                                        </div>
                                         <button
                                            className="sectionButtons collapseButton"
                                            onClick={() => toggleCard(2)}
                                        >
                                            Свернуть
                                        </button>
                                        </div>
                             )}
                        </div>
                        
                        {/* Колонка 3: Природа */}
                        <div className={`hobbyCard ${openCards[3] ? 'open' : ''}`}>
                            <h4 className="smallHeadlines">Природа и путешествия</h4>

                            {/*Показ картинки в зависимости от состояния*/}
                             {!openCards[3] ? (
                                <div 
                                    className="cardImageContainer"
                                    // onClick={() => toggleCard(3)}
                                >
                            <img 
                                src={travel}
                                alt='Вид на небо' 
                                className="screensaver"
                            />
                             <button 
                                className="sectionButtons expandButton"
                                onClick={() => toggleCard(3)}
                             >
                               Развернуть
                            </button>
                            </div>
                             ) : (
                                  <div className="cardOpenedContainer">
                                    <div className="cardTextContainer">
                                      <p className="hobbyDescription">
                                         Нахожу энергию в прогулках на природе и путешествиях. 
                                         Смена обстановки часто помогает найти нестандартные решения сложных задач.
                                     </p>
                                   </div>
                                   <button
                                     className="sectionButtons collapseButton"
                                     onClick={() => toggleCard(3)}
                                   >
                                     Свернуть
                                  </button>
                               </div>
                             )}
                        </div>
                    </div>
                </div>
            )
        }
    ]

   return (
    <div className="one">
         <Stars />
    
  <div className="about-me-container" style={{ position: 'relative' }}>
    {/* <Stars /> */}
    <div className="about-me-wrapper">
      <div className="aboutMeContent">  
        {sectionsData.map(section => (
          <div key={section.id}>
            <h3 className="titleAboutMe">{section.title}</h3>
            {section.content}
          </div>
        ))}
      </div>
    </div>
  </div>
  </div>
);
}

export default AboutMe;

