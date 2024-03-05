import { Component } from 'react';

class Footer extends Component {
    render() {
        const cred = "© 2024";

        return (
            <div className="h-14 bg-cream w-screen flex items-center justify-center">
                <p className="font-serif text-brown-light text-sm">{cred}</p> 
            </div>
        );
    }
}

export default Footer;