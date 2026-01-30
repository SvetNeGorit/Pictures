import './BannerSections.css'
import '../assets/fonts/fonts.css'
import logo from '/src/assets/img/logo.svg';
import vector from '/src/assets/img/Vector.svg';
import vectorBottom from '/src/assets/img/Vector-2.svg';
import imgBanner from '/src/assets/img/room-banner.svg';

const BannerSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
      <div className="header-logo"> 
      <img src={logo} alt="Logo" className="image-logo" />
      </div>
      <img src={vector} alt="" className="vector-top" />
      <div className="text-banner">
        <div className="text-banner-title"> 
      <p className="hero-section__title">Притягивает взгляды.</p>
      <p className="hero-section__title">Отражает вас.</p>
      </div>
      <p className="hero-section-text">Картины на заказ <br /> для Вашего <br /> интерьера</p>
      </div>
      <div className="vector-bottom"> 
      <img src={vectorBottom} alt="" className="vector-bottom-img" />
      </div>
      <div className="banner-image-container">
      <img src={imgBanner} alt="" className="image-banner-room" />
      </div>
      </div>
    </section>
  );
};

export default BannerSection;