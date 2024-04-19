import PrenupCarousel from "components/PrenupCarousel";
import WeddingCarousel from "components/WeddingCarousel";

const Gallery = (props) => {

    return (
        <div id='gallery' className="lg:py-24 py-16 scroll-m-[5rem]">
            <img src={props.data.assets.leaves1} className="absolute left-20 -mt-1 hidden lg:block" />
            <img src={props.data.assets.leaves2} className="absolute right-20 mt-72 scale-y-[-1] hidden lg:block" />
            <div className='font-sans text-brown text-5xl text-center lg:mb-12 md:mb-8 mb-1'>{props.data.section[2].name}</div>
            <PrenupCarousel {...props}/>
            <WeddingCarousel {...props}/>
        </div>
    );
}

export default Gallery;