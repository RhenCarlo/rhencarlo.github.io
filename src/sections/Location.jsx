const Location = (props) => {

    return (
        <div id='location' className='bg-nude py-[6%] px-[4%] scroll-m-[107px]'>
            <div className="lg:md:flex items-center text-center mb-[7%] mx-[5%]">
                <div className="w-[40%]">
                    <div className='text-[130%]'>{props.data.section[1].alias}</div>
                    <div className='font-sans text-brown-dark text-[300%] text-center leading-loose'>{props.data.location[0].name}</div>
                    <div className='text-[150%] mb-[3%]'>{props.data.location[0].text}</div>
                    <div>{props.data.location[0].text2}</div>
                </div>
                <div className="w-[60%] pl-[3%]">
                    <img src={props.data.assets.venue}/>
                </div>
            </div>
            <div className="lg:md:flex items-center mx-[5%]">
                <div className="w-[40%]">
                    <iframe
                        className='border-2 border-brown-light w-full aspect-square'
                        src="https://www.openstreetmap.org/export/embed.html?bbox=121.06841325759889%2C14.534138459290633%2C121.07122689485553%2C14.536059767496228&amp;layer=mapnik&amp;marker=14.535099115481458%2C121.06982007622719" >
                    </iframe>
                </div>
                <div className="w-[60%] pl-[3%]">
                    <div className="text-brown-dark lg:text-[150%] text-[250%] mb-[2%]">{props.data.location[1].name}</div>
                    <div className="mb-[3%]">{props.data.location[1].text}</div>
                    <div className="text-brown">{props.data.location[2].name}</div>
                    <div className="mb-[3%]">{props.data.location[2].text}</div>
                    <div className="text-brown">{props.data.location[3].name}</div>
                    <div className="mb-[3%]">{props.data.location[3].text}</div>
                    <div className="text-brown">{props.data.location[4].name}</div>
                    <div>{props.data.location[4].text}</div>
                </div>
            </div>
        </div>
    );
}

export default Location;