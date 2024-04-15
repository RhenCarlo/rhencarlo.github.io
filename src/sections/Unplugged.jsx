const Unplugged = (props) => {

    return (
        <div id='unplugged' className="lg:px-[15%]">
            <img src={props.data.unplugged} className="mx-auto"/>
        </div>
    );
}

export default Unplugged;