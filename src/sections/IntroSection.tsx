import './IntroSection.css'
import '../assets/fonts/fonts.css'
import vector from '/src/assets/img/Vector3.svg'
import am from '/src/assets/img/A.M..svg'
import decor from '/src/assets/img/decor.svg'



const IntroSection = () => {
  return (
    <section className="intro-section">
      <div className="container-intro">
      <div className="intro-text">
        <p className="intro-title">Интерьерная картина на заказ — <br /> это не роскошь, <br /> а ключ к гармонии.</p>
        <img src={vector} alt="" className="vector" />
        <p className="intro-text-info">Ваш дом — это ваше отражение. Я создаю картины, которые идеально соответствуют размерам, цветовой палитре и стилю вашего интерьера, несут в себе вашу историю, эмоцию или мечту.
От первой консультации до готового холста — индивидуальный подход и ваше видение на первом месте. Давайте наполним ваши стены смыслом.</p>
      </div>
      <div className="img-AM">
        <img src={am} alt="" className="AM" />
      </div>
      <div className="img-decor">
        <img src={decor} alt="" className="decor-paint" />
      </div>
      </div>
    </section>
  );
};

export default IntroSection;