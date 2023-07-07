import Link from 'next/link'

export default function Navbar() {
    return(
        <header>
            <div className="larrytheworm" style={{float:'left'}}>
                <img className="logo" src="https://cdn.discordapp.com/attachments/769220443692990474/1067965403944468552/larrytheworm2.png" />
                <ul className="homeLinks">
                    <li className="Bookwrm"><Link href="/">Bookwrm</Link></li>
                    <li className="Bookwrm  "><Link href='/math'>Math</Link></li>
                </ul>
            </div>
            <nav className="navbar">
                <ul className="navLinks">
                    <li className="Login"><Link href="#">Login</Link></li>
                    <li className="Signup"><Link href="#">Signup</Link></li>
                    <li className="About"><Link href="#">About</Link></li>
                </ul>
            </nav>
            <Link className="cta" href="#"><button className='contactbutton'>Contact</button></Link>
        </header>
    )
}