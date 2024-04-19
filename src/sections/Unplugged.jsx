const Unplugged = (props) => {

    return (
        <div id='unplugged' className="lg:px-40">
            <img src={props.data.unplugged} className="mx-auto"/>
        </div>
    );
}

export default Unplugged;