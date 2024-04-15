import { useState, useEffect } from "react";

const Nav = (props) => {

    const [lgPos, setLgPos] = useState("top");
    const [pos, setPos] = useState("top");
    const [open, setOpen] = useState(false);

    useEffect (() => {
        document.addEventListener("scroll", () => {
            let nav = document.getElementById('nav-lg').offsetTop;
            let lgScrolled = nav - document.documentElement.scrollTop;
            let scrolled = document.documentElement.scrollTop;

            lgScrolled <= 0 ? setLgPos('moved') : setLgPos('top');
            scrolled > 0 ? setPos('moved') : setPos('top');
        })
    },[])

    const handleNav = () => {
        setOpen(!open);
    };

    return (
        <>
            {/* desktop */}
            
            <img src={props.data.assets.flower} className='sm:hidden md:hidden lg:block mx-auto mt-[-30%] z-30 min-w-[30%] relative'/>
            <nav id='nav-lg' className={'sm:hidden md:hidden lg:block w-3/4 mx-auto top-0 -mt-[4%] mb-[5%] z-20 sticky transition-all duration-[0.5s]' + (lgPos == "top" ? ' bg-cream py-[4%]':' bg-white w-full py-[2%]')}>
                <ul className={'text-[110%] flex items-center ' + (lgPos == 'top' ? 'space-x-[6%] justify-center ' : 'justify-around')}>
                    <li className={'font-sans text-brown-dark ' + (lgPos == 'top' ? ' leading-snug text-[250%] text-center' : 'text-[200%] mr-[20%]')}>
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
            </nav>

            {/* mobile and tablet */}

            <div id='nav' className={'lg:hidden fixed top-0 left-0 p-[3.5%] text-[140%] w-full flex justify-between' + (pos == 'top' ? ' text-white' : ' bg-white text-brown')}>
                <div>{props.data.title.hashtag}</div>
                <div onClick={handleNav}>
                    <img src={pos == 'top' ? props.data.assets.white : props.data.assets.brown} className='inline'/>
                </div>
            {/* <div className="lg:hidden abosolute h-screen w-[50%] bg-cream">
hehehehhe
            </div> */}
            </div>
            
        </>
    );
}

export default Nav;