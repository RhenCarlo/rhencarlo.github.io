import PrenupCarousel from "components/PrenupCarousel";
// import WeddingCarousel from "components/WeddingCarousel";

const Gallery = (props) => {

    return (
        <div id='gallery' className="py-[6%] scroll-m-[107px]">
            <img src={props.data.assets.leaves1} className="absolute left-[5%] mt-[-2%] hidden lg:block" />
            <img src={props.data.assets.leaves2} className="absolute right-[5%] mt-[22%] scale-y-[-1] hidden lg:block" />
            <PrenupCarousel {...props}/>
            {/* <WeddingCarousel {...props}/> */}
        </div>
    );
}

export default Gallery;