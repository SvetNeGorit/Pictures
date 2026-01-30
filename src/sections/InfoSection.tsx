import './InfoSection.css'
import '../assets/fonts/fonts.css'
import { useState } from 'react';

const InfoSection = () => {
  const [activeContent, setActiveContent] = useState<string | null>(null);

  const sections = [
    {
      id: 'about',
      title: 'Обо мне',
      content: 'Приветствую Вас на моем сайте! Меня зовут Анна Михайлова, я художник и пишу картины на заказ и создаю красоту для Вашего пространства. Мой творческий опыт составляет около 8 лет.'
    },
    {
      id: 'stages',
      title: 'Об этапах выполнения заказа',
      content: 'В первую очередь я высылаю Вам небольшую анкету, где Вы описываете свои пожелания и особенности интерьера. После изучения анкеты я предлагаю Вам подходящий стиль и размер будущей картины, с учетом Ваших предпочтений и пожеланий мы утверждаем характеристики будущей картины и я начинаю работу.'
    },
    {
      id: 'price',
      title: 'Стоимость заказа',
      content: 'Стоимость заказа зависит от выбранного стиля и размера холста. Минимальная сумма заказа составляет 4 000 рублей.'
    },
    {
      id: 'delivery',
      title: 'Доставка и оплата',
      content: 'Доставляю СДЭК или Почтой России. Доставка оплачивается отдельно. Оплата производится в два этапа: первоначально оплачиваете консультацию в размере 1 000 рублей, в ходе которой вы заполянете анкету и я подбираю Вам подходящую картину. Затем после утверждения заказа производится оплата работы в целом'
    }
  ];

  return (
    <div className="info-container">
      <div className="sections-wrapper">
        {/* Левая колонка с разделами */}
        <div className="left-column">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`section-trigger ${activeContent === section.id ? 'active' : ''}`}
              onMouseEnter={() => setActiveContent(section.id)}
              onMouseLeave={() => setActiveContent(null)}
            >
              <p className="razdel">{section.title}</p>
            </div>
          ))}
        </div>

        {/* Правая колонка с контентом */}
        <div className="right-column">
          <div className="content-center">
            <div className="content-wrapper">
              <p>{sections.find(s => s.id === activeContent)?.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default InfoSection; 