import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface MySliderProps {
  images: string[];
  alt: string;
}

export default function MySlider(props: MySliderProps) {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <Slider {...settings}>
        {props.images.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={props.alt} />
          </div>
        ))}
      </Slider>
    );
}