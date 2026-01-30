import './EndSection.css'
import '../assets/fonts/fonts.css'
import tg from '../assets/img/Teleg.svg'
import vk from '../assets/img/Vkontakte.svg'
import max from '../assets/img/max.svg'


const EndSection = () => {
  return (
    <div className="background-container">
         <div className="contacts">
            <div className="contacts-info-vector">
            <div className="contacts-info">
            <p>Оформить заказ или задать вопрос, <br />можно написав мне:</p>
            </div>
            <div className="vectors-contacts">
            <img src={tg} alt="telegram" />
            <img src={vk} alt="vkontakte" />
            <img src={max} alt="maxm" />
            </div>
            </div>
         </div>
    </div>
  );
};





export default EndSection;