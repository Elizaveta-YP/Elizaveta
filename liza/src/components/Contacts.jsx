import '../styles/Contacts.css';


const Contacts = () => {
return (
        <div >
            <h3 className='titleContacts'>
                Контакты
            </h3>
            <p className='textContacts'>Я готова участвовать в интересных проектах и открывать новые возможности. 
               Если у вас есть вопросы, предложения или вы хотите обсудить сотрудничество, 
               свяжитесь со мной любым удобным способом. Вы можете написать мне на почту или в мессенджер.
            </p>
        <div className='section'>
            <h4 className='smallHeadlines'>Email</h4>
            <a href="mailto:elizavetacesejko@gmail.com?subject=Сообщение с сайта" className='dataContacts email'>elizavetacesejko@gmail.com</a>
            <h4 className='smallHeadlines'>Telegram</h4>
            <a className='dataContacts telegram'>@ElizavetaCheshejko</a>
            <h4 className='smallHeadlines'>Местоположение</h4>
            <p className='dataContacts city'>Екатеринбург</p>
        </div>
        </div>
)
}

export default Contacts;