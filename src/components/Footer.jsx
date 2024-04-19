const Footer = (props) => {

    return (
        <div className="bg-cream w-full flex items-center justify-center py-6">
            <p className="text-brown-light text-lg">{props.data.footer}</p> 
        </div>
    );
}

export default Footer;