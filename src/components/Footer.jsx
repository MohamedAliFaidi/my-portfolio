const Footer = () => {
  return (
    <>
    <hr />
    <div className="footer-container">
        <p>
            &copy; {new Date().getFullYear()} Faidi's Portfolio
        </p>
        <div className="social_icons">
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
</>
  )
}

export default Footer