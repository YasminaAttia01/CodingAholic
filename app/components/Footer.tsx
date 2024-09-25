/* eslint-disable @next/next/no-img-element */
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/app/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
    return (
        <footer className="w-full bg-black text-white py-10" id="contact">
            <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
                {/* Main heading and contact section */}
                <div className="flex flex-col items-center text-center">
                    <h1 className="heading lg:max-w-[45vw] text-3xl font-bold mb-6">
                        Ready to take <span className="text-purple">your</span> digital presence to the next level?
                    </h1>
                    <p className="text-white-200 mb-8 text-lg">
                        Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
                    </p>
                    <a href="mailto:k.jendoubi@codingaholic.com">
                        <MagicButton
                            title="Let's get in touch"
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                    </a>
                </div>

                {/* Footer bottom section */}
                <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-12">
                    <p className="text-white-200 text-sm md:text-base mb-4 md:mb-0">
                        Copyright © 2024 CodingAholic
                    </p>

                    {/* Social Media Icons */}
                    <div className="flex gap-4">
                        {socialMedia.map((info) => (
                            <a
                                key={info.id}
                                href={info.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-800 hover:bg-gray-700 transition duration-300"
                            >
                                <img src={info.img} alt="icons" className="w-6 h-6" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
