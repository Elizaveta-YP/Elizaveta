import '../styles/Contacts.css';
import { useState } from 'react';


import Phone from '../components/Phone';

const Contacts = () => {
    const [copied, setCopied] = useState(false);
    const [copyType, setCopyType] = useState('');
    const [showMap, setShowMap] = useState(true);
    
    const handleCopy = async (text, type) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setCopyType(type);

            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch (err) {
            console.error('Ошибка при копировании: ', err);
        }
    };

    const handleEmailClick = (e) => {
        e.preventDefault();
        handleCopy('elizavetacesejko@gmail.com', 'email');
    };

    const handleTelegramClick = (e) => {
        e.preventDefault();
        handleCopy('@ElizavetaCheshejko', 'telegram');
    };

    return (
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: '600px' }}>
            <Phone />
            
            <div style={{ position: 'relative', zIndex: 10 }}>
                <h3 className='titleContacts'>
                    Контакты
                </h3>
                <p className='textContacts'>Я готова участвовать в интересных проектах и открывать новые возможности. 
                   Если у вас есть вопросы, предложения или вы хотите обсудить сотрудничество, 
                   свяжитесь со мной по почте или в мессенджере.
                </p>

                <div className='section'>
                    <h4 className='smallHeadlinesContact'>Email</h4>
                    <a 
                        href="/contact" 
                        className='dataContacts email copyLink'
                        onClick={handleEmailClick}
                        title="Нажмите, чтобы скопировать email"
                    >
                        elizavetacesejko@gmail.com
                    </a>
                    
                    <h4 className='smallHeadlinesContact'>Telegram</h4>
                    <a 
                        href="/contact" 
                        className='dataContacts telegram copyLink'
                        onClick={handleTelegramClick}
                        title="Нажмите, чтобы скопировать Telegram"
                    >
                        @ElizavetaCheshejko
                    </a>
                    
                    <h4 className='smallHeadlinesContact'>Местоположение</h4>
                    <button 
                        className='dataContacts city'
                        onClick={() => setShowMap(true)}
                        title="Нажмите, чтобы увидеть на карте"
                    >
                        Екатеринбург
                    </button>
                </div>
                
                {copied && (
                    <div className="copyNotification">
                        {copyType === 'email' ? 'Email скопирован!' : 'Telegram скопирован!'}
                    </div>
                )}

      {showMap && (
        <div className="map-modal-overlay" onClick={() => setShowMap(false)}>
          <div className="mapModalContent" onClick={(e) => e.stopPropagation()}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42832.70990195519!2d60.597659667455226!3d56.83800268240109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c165eaa6dd9c5d%3A0x3c2015c6d5c5b3b6!2z0KXQvNC_0LDQudGALdCb0LDQvdC00YDQsNGC0L7RgNC40LXQstCw!5e0!3m2!1sru!2sru!4v1700000000000!5m2!1sru!2sru"
              width="400"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта Екатеринбурга"
            ></iframe>
            
            <button 
              className="mapCloseBtn"
              onClick={() => setShowMap(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
               
            </div>
        </div>
    );
};

export default Contacts;