import { useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip";

const Invitation = (props) => {

    const [,setPage] = useState(0);
    const bookRef = useRef(null)
    
    const next = () => {
        bookRef.current.pageFlip().flipNext()
    };

    const prev = () => {
        bookRef.current.pageFlip().flipPrev();
    };

    const onFlip = (e) => {
        setPage(e.data);
    };

    return (
        <div id='invitation' className="py-[6%] lg:px-[15%]">
            <div className='font-sans text-brown text-[350%] sm:text-[250%] text-center mb-[3%]'>Invitation</div>
            <div className="flex sm:px-[5%]">
                <button type="button" onClick={prev} className="lg:w-[6%] w-[7%]">
                    <img src={props.data.assets.arrow} className="scale-x-[-1]"/>
                </button>
                <HTMLFlipBook width={500} 
                    height={700}
                    minWidth={200}
                    minHeight={250}
                    size="stretch"
                    maxShadowOpacity={0.5} 
                    mobileScrollSupport={true}
                    ref={bookRef}
                    onFlip={onFlip}
                    className="lg:mx-[2%]">
                    {props.data.invitation.map((o) => {
                        return <div className="demoPage" key={o.id}>
                            <img src={o.photo}/>
                        </div>
                    })}
                </HTMLFlipBook>
                <button type="button" onClick={next} className="lg:w-[6%] w-[7%]">
                    <img src={props.data.assets.arrow}/>
                </button>
            </div>
        </div>
    );
}

export default Invitation;