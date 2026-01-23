import { motion } from 'framer-motion';

const Header = ({ onNavClick }) => {

    const navItems = [
        { label: 'Главная', href: '#hero', section: null },
        { label: 'Обо мне', href: '#', section: 'about' },
        { label: 'Ключевые навыки', href: '#', section: 'skills' },
        { label: 'Проекты', href: '#', section: 'project' },
        { label: 'Контакты', href: '#', section: 'contact' }
    ];

    const handleNavClick = (e, section) => {
        if (section) {
            e.preventDefault();
            onNavClick(section);
            
            // Плавная прокрутка к секции
            const element = document.querySelector(`.accordion-section[data-section="${section}"]`);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    return (
            <header className="headers">
                <div className="container">
                    <motion.h1 
                        className="logo"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 3, ease: "easeOut", delay: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        Чешейко Елизавета Олеговна
                    </motion.h1>
                    <nav className="nav">
                        <ul className="navList">
                            {navItems.map((item, index) => (
                                <li key={index} className="navItems">
                                    <a 
                                        href={item.href} 
                                        className="navLink"
                                        onClick={(e) => handleNavClick(e, item.section)}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>
    );
}

export default Header;