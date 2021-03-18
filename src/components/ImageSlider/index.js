// import React, { useState } from 'react';
// import { SliderData } from './SliderData.js';
// import { SliderImage, SliderSection, RightArrow, LeftArrow } from './SliderElements.js';
// import './slider.css';

// const ImageSlider = ({ slides }) => {

//     const [current, setCurrent] = useState(0);
//     const length = slides.length;

//     const nextSlide = () => {
//         setCurrent(current === length - 1 ? 0 : current + 1)
//     }

//     const prevSlide = () => {
//         setCurrent(current === 0 ? length - 1 : current - 1)
//     }

//     if (!Array.isArray(slides) || slides.length <= 0) {
//         return null;
//     }

//     return (
//         <SliderSection>
//             <LeftArrow onClick={prevSlide} />
//             <RightArrow onClick={nextSlide} />
//             {SliderData.map((slide, index) => {
//                 return (
//                     <div className={index === current ? 'slide active' : 'slide'} key={index}>
//                         {index === current && (<SliderImage src={slide.image} alt="cookie image" />)}
//                     </div>
//                 )
//             })}
//         </SliderSection>
//     );
// };

// export default ImageSlider;