import { useState} from 'react';
import './PortfolioSection.css'
import '../assets/fonts/fonts.css'
import photo1 from '../assets/img/gorod-sad.svg'
import photo2 from '../assets/img/sovremenno.svg'
import photo3 from '../assets/img/popugai.svg'
import photo4 from '../assets/img/pastel-siren.svg'
import photo5 from '../assets/img/art-glaz.svg'
import photo6 from '../assets/img/pastel.svg'
import photo7 from '../assets/img/flowers-blue.svg'
import photo8 from '../assets/img/pytno.svg'
import photo9 from '../assets/img/flowers.svg'
import photo10 from '../assets/img/cool-art.svg'
import photo11 from '../assets/img/botanic.svg'


const ArrowLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const PortfolioSection = () => {
  // Собираем все фотографии в массив
  const photos = [
    photo1, photo2, photo3, photo4, photo5, 
    photo6, photo7, photo8, photo9, photo10, photo11
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  
   
  const goToPrevious = () => {
        setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };
  
  const goToNext = () => {
        setCurrentIndex((prevIndex) => 
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const goToSlide = (index: number) => {
        setCurrentIndex(index);
  };
  
  return (
    <div className="portfolio-container">
      {/* Заголовок */}
      <div className="carousel-header">
        <h1 className="portfolio-title">A.Mikhailova</h1>
        </div>
      
      {/* Основная карусель */}
      <div className="carousel-wrapper">
        <div className="carousel">
          {/* Кнопка назад */}
          <button 
            className="carousel-button prev-button" 
            onClick={goToPrevious}
            aria-label="Предыдущее фото"
          >
            <ArrowLeft />
          </button>
          
          {/* Основное изображение */}
          <div className="slide-container">
            <img
              src={photos[currentIndex]}
              alt={`Artwork ${currentIndex + 1}`}
              className="main-slide"
            />
            
            </div>
          
          {/* Кнопка вперед */}
          <button 
            className="carousel-button next-button" 
            onClick={goToNext}
            aria-label="Следующее фото"
          >
            <ArrowRight />
          </button>
        </div>
        
        {/* Миниатюры */}
        <div className="thumbnails">
          {photos.map((photo, index) => (
            <button
              key={index}
              className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Перейти к фото ${index + 1}`}
            >
              <img
                src={photo}
                alt={`Миниатюра ${index + 1}`}
                className="thumbnail-img"
              />
            </button>
          ))}
        </div>
        
        
       </div>
    </div>
  );
};

export default PortfolioSection;