import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import '../styles/Portfolio.css';

import do_you_need_it from '../images/do_you_need_it.jpg';
import look_out_the_window from '../images/look_out_the_window.jpg';
import no_focus from '../images/no_focus.jpg';
import closing_tag from '../images/closing_tag.jpg';
import smart_table from '../images/smart_table.jpg';
import website from '../images/website.jpg';


import Confetti from '../components/Confetti';

const Portfolio = () => {

    const projects = [
        { 
            id: 1, 
            title: 'Проект «Оно тебе надо»', 
             content: ( 
                <div>
                <p>В этом проекте я практиковала:</p>
                    <ul className="blockPracticalSkills">
                        <li className="practicalSkills">Полный цикл верстки</li>
                        <li className="practicalSkills">Работу с современными CSS-технологиями</li>
                        <li className="practicalSkills">Семантическую верстку и организацию кода</li>
                    </ul>
                </div>
             ),
            image: do_you_need_it, 
            alt: 'Надпись «Оно тебе надо» на фоне цветов.',
            githubUrl: ' https://github.com/Elizaveta-YP/ono-tebe-nado-fd',
            figmaUrl: 'https://www.figma.com/design/PqHJvUBvwCsv8UmOUPWBXJ/1-%D1%81%D0%BF%D1%80%D0%B8%D0%BD%D1%82.-%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%BD%D0%B0%D1%8F-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0?node-id=0-1&p=f'
        },
        { 
            id: 2,
            title: 'Проект «Посмотри в окно»',
            content: ( 
                <div>
                <p>В этом проекте я практиковала:</p>
                    <ul className="blockPracticalSkills">
                        <li className="practicalSkills">Стилизацию форм и их состояний</li>
                        <li className="practicalSkills">Точную pixel-perfect верстку по макету</li>
                    </ul>
                </div>
             ),
            image: look_out_the_window,
            alt: 'Видео городского пейзажа выбранного города.',
            githubUrl: ' https://github.com/Elizaveta-YP/posmotri-v-okno-fd',
            figmaUrl: 'https://www.figma.com/design/ApJjZAA3pBv2tCZM9E2ul2/2-спринт.-Посмотри-в-окно?node-id=0-1&p=f',
        },
        { 
            id: 3,
            title: 'Проект «Нет фокуса»',
             content: ( 
                <div>
                <p>В этом проекте я практиковала:</p>
                    <ul className="blockPracticalSkills">
                        <li className="practicalSkills">Работу с адаптивной версткой</li>
                        <li className="practicalSkills">Mobile First подход</li>
                        <li className="practicalSkills">Реализацию темной и светлой темы с системным переключением</li>
                    </ul>
                </div>
             ),
            image: no_focus,
            alt: 'Заголовок «No focus» и текст о концентрации.',
            githubUrl: ' https://github.com/Elizaveta-YP/slozhno-sosredotochitsya-fd',
            figmaUrl: 'https://www.figma.com/design/qhgelUhPHUbJVf3jgZsaD7/3-спринт.-Проектная-работа',
        },
        { 
            id: 4,
            title: 'Проект «Закрывающий тег»',
            content: ( 
                <div>
                <p>В этом проекте я практиковала:</p>
                    <ul className="blockPracticalSkills">
                        <li className="practicalSkills">CSS анимации</li>
                        <li className="practicalSkills">Работу с диалоговыми окнами</li>
                        <li className="practicalSkills">Резиновую верстку</li>
                        <li className="practicalSkills">Оптимизацию графики</li>
                    </ul>
                </div>
             ),
            image: closing_tag,
            alt: 'Фотография фургона и параграф о вёрстке.',
            githubUrl: ' https://github.com/Elizaveta-YP/zakrivayuschiy-teg-f',
            figmaUrl: 'https://www.figma.com/design/Yg5IFeWSyl6Js98kWROjVP/4-спринт.-Проектная--работа?node-id=0-1&p=f',
        },
        { 
            id: 5,
            title: 'Проект «Умная таблица»',
            content: ( 
                <div>
                <p>В этом проекте я практиковала:</p>
                    <ul className="blockPracticalSkills">
                        <li className="practicalSkills">Создание и работу в модульной архитектуре</li>
                        <li className="practicalSkills">Разработку алгоритмов обработки данных</li>
                        <li className="practicalSkills">Работу с формами (сбор данных, фильтры, сортировка, текущая страница)</li>
                    </ul>
                </div>
             ), 
            image: smart_table,
            alt: 'Сведения покупателя.',
            githubUrl: ' https://github.com/Elizaveta-YP/smart-table',
        },
        { 
            id: 6,
            title: 'Проект «Веб-сайт»',
            content: ( 
                <div>
                <p>В этом проекте я практиковала:</p>
                    <ul className="blockPracticalSkills">
                        <li className="practicalSkills">Проектирование архитектуры приложения</li>
                        <li className="practicalSkills">Типизацию в TypeScript</li>
                        <li className="practicalSkills">Создание интерфейсов для сущностей</li>
                        <li className="practicalSkills">Работу с API</li>
                    </ul>
                </div>
             ),
            image: website,
            alt: 'Отображаются названия товаров, добавленных в корзину.',
            githubUrl: ' https://github.com/Elizaveta-YP/weblarek',
            figmaUrl: 'https://www.figma.com/design/92C0vV1ZCsVpgN9cH2DZ2d/Yandex--Веб-ларёк-?node-id=201-9445&p=f',
        }
    ];

    return (
        <div className="portfolio" style={{ position: 'relative', overflow: 'hidden' }}>
            <Confetti />
            <h3 className="titlePortfolio">Портфолио</h3>
            
            <div className="swiperContainerWrapper">
                <Swiper 
                    modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0, 
                        stretch: 0, 
                        depth: 100, 
                        modifier: 2.5, 
                        slideShadows: true, 
                    }}
                    navigation
                    pagination={{ 
                        clickable: true,
                        dynamicBullets: true 
                    }}
                    autoplay={{ 
                        delay: 3000, 
                        disableOnInteraction: false 
                    }}
                    loop={true}
                    className="portfolioSwiper"
                >
                    {projects.map(project => (
                       
                       <SwiperSlide key={project.id} className="customSlide">
  <div className="projectSlide">
    <div className="projectImageContainer">
      <img 
        src={project.image}
        alt={project.alt} 
        className="projectImage"
      />
    </div>
    
    <div className="projectInfo">
      <div className="projectHeader">
        <h4 className="projectTitle">{project.title}</h4>
        <div className="projectContent">
          {project.content}
        </div>
      </div>
      
      <div className="projectButtons">
        <button
          onClick={() => window.open(
            project.githubUrl,
            '_blank',
            'noopener, noreferrer'
          )}
          className='sectionButtons cardButtons ' 
        >
          Код на GitHub
        </button>

        {project.id !== 5 && project.figmaUrl && (
          <button
            onClick={() => window.open(
              project.figmaUrl,
              '_blank',
              'noopener, noreferrer'
            )}
            className='sectionButtons cardButtons '
          >
            Макет в Figma
          </button>
        )}
      </div>
    </div>
  </div>
</SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Portfolio;