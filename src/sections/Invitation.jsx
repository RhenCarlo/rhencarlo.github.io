import { useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip";

const Invitation = (props) => {

    const [,setPage] = useState(0);
    const bookRef = useRef()
    
    const next = () => {
        bookRef.current.pageFlip().flipNext()
    };

    const prev = () => {
        bookRef.current.pageFlip().flipPrev();
    };

    const pageFlip = (e) => {
        setPage(e.data);
    };

    return (
        <div id='invitation' className="lg:py-24 pb-16 lg:px-40 scroll-m-[5rem]">
            <div className='font-sans text-brown text-5xl text-center lg:mb-12 md:mb-8 mb-1'>{props.data.section[0].name}</div>
            <div className="flex sm:px-6">
                <button type="button" onClick={prev} className="lg:w-16 w-14">
                    <img src={props.data.assets.arrow} className="scale-x-[-1]"/>
                </button>
                <HTMLFlipBook width={500} 
                    height={700}
                    minWidth={300}
                    minHeight={500}
                    size="stretch"
                    maxShadowOpacity={0.5}
                    renderOnlyPageLengthChange={true}
                    usePortrait={true}
                    ref={bookRef}
                    onFlip={pageFlip}
                    className="mx-2 w-full mx-auto cursor-pointer">
                    {props.data.invitation.map((o) => {
                        return <div key={o.id}>
                            <img src={o.photo}/>
                        </div>
                    })}
                </HTMLFlipBook>
                <button type="button" onClick={next} className="lg:w-16 w-14">
                    <img src={props.data.assets.arrow}/>
                </button>
            </div>
        </div>
    );
}

export default Invitation;