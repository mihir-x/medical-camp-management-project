import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { Link } from "react-router-dom";

const SiteFooter = () => {
    return (
        <div>
            <Footer bgDark>
                <div className="w-full">
                    <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
                        <div>
                            <Footer.Title title="Site Links" />
                            <Footer.LinkGroup col>
                                <Link to='/'>Home</Link>
                                <Link to='/available-camps'>Available Camps</Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="help center" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Discord Server</Footer.Link>
                                <Link to='/contact-us'>Contact Us</Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Privacy Policy</Footer.Link>
                                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="download" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">iOS</Footer.Link>
                                <Footer.Link href="#">Android</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                    <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright href="#" by="Flowbite™" year={2022} />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <Footer.Icon href="#" icon={BsFacebook} />
                            <Footer.Icon href="#" icon={BsInstagram} />
                        </div>
                    </div>
                </div>
            </Footer>
        </div>
    );
};

export default SiteFooter;