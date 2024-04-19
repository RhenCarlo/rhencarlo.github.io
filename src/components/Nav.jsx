import { useState, useEffect } from "react";

const Nav = (props) => {

    const [lgPos, setLgPos] = useState("top");
    const [pos, setPos] = useState("top");
    const [open, setOpen] = useState(false);

    useEffect (() => {
        document.addEventListener("scroll", () => {
            let lgNavTop = document.getElementById("nav-lg").getBoundingClientRect().top;
            let smNav = document.documentElement.scrollTop;

            lgNavTop <= 0 ? setLgPos("moved") : setLgPos("top");
            smNav > 0 ? setPos('moved') : setPos('top');
        })
    },[])

    const handleNav = () => {
        setOpen(!open);
    };

    return (
        <>
            {/* desktop */}
            <img src={props.data.assets.flower} className='sm:hidden md:hidden lg:block mx-auto mt-[-18rem] z-30 w-[23rem] relative'/>
            <div className="sm:hidden md:hidden lg:block sticky top-0 -mt-16 mb-64 z-20">
                <div id='nav-lg' className={'absolute left-0 right-0 mx-auto transition-all duration-500' + (lgPos == "top" ? ' w-[65rem] bg-cream py-9':' bg-white w-full py-7')}>
                    <ul className={'text-lg flex items-center ' + (lgPos == 'top' ? 'justify-evenly' : 'justify-around')}>
                        <li className={'font-sans text-brown-dark ' + (lgPos == 'top' ? ' leading-snug text-5xl text-center' : 'text-4xl mr-52')}>
                            <a className="whitespace-pre" href='#'>{lgPos == 'top' ? props.data.title.two : props.data.title.one}</a>
                        </li>
                        {props.data.section && props.data.section.map((o, i) => {
                            if (o.nav == true){
                                return <li className={lgPos == 'top' ? 'underline' : 'hover:text-brown'} key={i}>
                                            <a href={o.link}>{o.name}</a>
                                        </li>
                            }
                        })}
                    </ul>
                </div>
            </div>

            {/* mobile and tablet */}

            <div id='nav' className={'lg:hidden fixed top-0 md:p-7 p-3.5 w-screen flex justify-between z-20' + (pos == 'top' ? ' text-white' : ' bg-white text-brown-dark')}>
                <div className="md:text-3xl text-xl">{props.data.title.hashtag}</div>
                <img onClick={handleNav} src={pos == 'top' ? props.data.assets.white : props.data.assets.brown}/>
                <div className={
                    open
                    ? "fixed right-0 top-0 md:w-96 w-60 h-screen bg-white text-black ease-in-out duration-500 md:py-8 py-4 md:pl-14 pl-8 md:pr-7 pr-4"
                    : "ease-in-out md:w-96 w-60 duration-500 fixed top-0 bottom-0 md:-right-96 -right-60 md:py-8 py-4 md:pl-14 pl-8 md:pr-7 pr-4"
                    }
                >
                    <img onClick={handleNav} src={props.data.assets.close} className='ml-auto md:mb-10 mb-5'/>
                    <ul>
                        <li onClick={handleNav} className="active:text-brown md:mb-10 mb-5 text-base md:text-xl">
                            <a href="#" className="active:text-brown">Home</a>
                        </li>
                        {props.data.section && props.data.section.map((o, i) => {
                            if (o.nav == true){
                                return <li onClick={handleNav} className="md:mb-10 mb-5 text-base md:text-xl" key={i}>
                                            <a href={o.link} className="active:text-brown">{o.name}</a>
                                        </li>
                            }
                        })}
                    </ul>
                </div>
            </div>
            
        </>
    );
}

export default Nav;