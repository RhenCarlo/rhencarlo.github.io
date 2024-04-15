const Footer = (props) => {

    return (
        <div className="h-14 bg-cream w-full flex items-center justify-center">
            <p className="font-serif text-brown-light text-sm">{props.data.footer}</p> 
        </div>
    );
}

export default Footer;