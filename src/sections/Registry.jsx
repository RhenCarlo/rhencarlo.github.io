const Registry = (props) => {

    return (
        <div id='registry' className='bg-cream py-[6%] px-[10%] scroll-m-[107px]'>
            <div className='text-center'>
                <div className='text-[130%] mb-[2%]'>{props.data.section[3].alias}</div>
                <div className='px-[7%] sm:px-0'>Your presence and prayers on our big day are all we ask for! However, should you wish to help us celebrate with a gift,<br/>please find our registry information below.</div>
            </div>
            <div className='lg:flex justify-evenly mt-[4.5%]'>
                {props.data.qr && props.data.qr.map((o, i) => {
                    return <div key={i} className="lg:mb-0 mb-[3%]">
                        <div className='font-sans text-brown text-[250%] text-center mb-[3%]'>{o.name}</div>
                        <img src={o.photo} className="sm:mx-auto"/>
                    </div>
                })}
            </div>
        </div>
    );
}

export default Registry;