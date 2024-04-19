import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const PrenupCarousel = (props) => {

    return (
        <Carousel responsive={responsive}
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            containerClass="lg:pl-[25%] overflow-hidden"
            className="z-10"
            itemClass="px-[0.1%] flex items-center"
            keyBoardControl
            minimumTouchDrag={80}
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            rewind={false}
            rewindWithAnimation={false}
            showDots
            slidesToSlide={1}
            swipeable>
            {props.data.prenup.map((o) => {
                if (o.photo != ""){
                    return <img src={o.photo} key={o.id}/>
                }
                else {
                    return <a href={o.album} target="_blank" key={o.id} className="underline text-brown-dark mx-auto lg:mx-0">See full gallery</a>
                }
            })}
        </Carousel>
    );
}

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1023, min: 768 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };

export default PrenupCarousel;