import Image from "next/image";


const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-text">
            <Image src='/me.png' className="profile-img" width={300} height={300} alt=" personal headshot" />
                <h1>Hey, I'm MohamedAli 👋</h1>
                <p>
                    I'm a Js developer based in Tunisia, I specialize in building (and occasionally designing) exceptional websites and mobile apps, and whatever in between.
                </p>
                <div className="social-icons">
                 
                    <a
                        href="https://github.com/MohamedAliFaidi"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/mouhamed-ali-faidi-b38a57234/"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;