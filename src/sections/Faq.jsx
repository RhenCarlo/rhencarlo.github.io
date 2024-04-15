const Faq = (props) => {

    return (
        <div id='faq' className='pb-[6%] scroll-m-[107px]'>
            <div>
                <img src={props.data.assets.logo} className='object-cover mx-auto h-56 lg:w-[79%] sm:w-full'/>
            </div>
            <div className='font-sans text-brown text-[350%] sm:text-[250%] text-center my-[3%]'>{props.data.section[4].alias}</div>

            <div className="lg:px-[20%] px-[7%] divide-y divide-dashed">

                {props.data.faq.map((o, i) => {
                    return <div key={i} className="py-[3%] whitespace-pre-wrap">
                                <h3 className="text-brown text-[120%] uppercase mb-[2%] flex items-center">
                                    <img src={o.i} className="mr-[1%]"/>{o.q}
                                </h3>
                                <p>{o.a}</p>
                            </div>
                })}

            </div>
        </div>
    );
}

export default Faq;