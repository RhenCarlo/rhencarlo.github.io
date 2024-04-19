const Faq = (props) => {

    return (
        <div id='faq' className='pb-16 scroll-m-[5rem]'>
            <div>
                <img src={props.data.assets.logo} className='object-cover mx-auto h-56 lg:w-[70rem] sm:w-full'/>
            </div>
            <div className='font-sans text-brown text-5xl text-center my-8'>{props.data.section[4].alias}</div>

            <div className="lg:px-64 md:px-12 px-7 divide-y divide-dashed">

                {props.data.faq.map((o, i) => {
                    return <div key={i} className="py-6 whitespace-pre-wrap">
                                <h3 className="text-brown text-lg uppercase mb-5 flex items-center">
                                    <img src={o.i} className="mr-2"/>{o.q}
                                </h3>
                                <p>{o.a}</p>
                            </div>
                })}

            </div>
        </div>
    );
}

export default Faq;