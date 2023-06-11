import Link from 'next/link'
const Navbar = () => {
  return (
    <div className="nav-container">
        <div className="logo">
            <Link href="/">
                MohameAli's Portfolio
            </Link>
        </div>
        <Link href='https://drive.google.com/file/d/1U4rtxDj0FOcLpF7RKWA-Bo7X4AEUUodt/view?usp=sharing' className='cta-btn'>Resume</Link>
    </div>
  )
}

export default Navbar