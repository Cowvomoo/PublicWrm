import Link from 'next/link'

export default function Mommy() {
    return (
        <>
        <footer className="footer">
            <div className="footer-left">
                <img src="https://cdn.discordapp.com/attachments/769220443692990474/1067965403944468552/larrytheworm2.png" alt=""/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <div class="socials">
                    <Link href="#"><i className="fa-brands fa-facebook"></i></Link>
                    <Link href="#"><i className="fa-brands fa-twitter"></i></Link>
                    <Link href="#"><i className="fa-brands fa-youtube" id="youtube"></i></Link>
                    <Link href="#"><i className="fa-brands fa-instagram"></i></Link>
                    <Link href="#"><i className="fa-brands fa-discord" id="discord"></i></Link>
                </div>
            </div>
            <ul className="footer-right">
                <li>
                    <h2 className="Lessons">Lessons</h2>

                    <ul className="box">
                        <li><Link href="Algebra1.html">Algebra1</Link></li>
                        <li><Link href="Geometry.html">Geometry</Link></li>
                        <li><Link href="Algebra2.html">Algebra2</Link></li>
                        <li><Link href="pre-calc.html">pre-calc</Link></li>
                        <li><Link href="calcAB.html">calc AB</Link></li>
                    </ul>
                </li>
                <li className="features">
                    <h2 className="UseLinks">Useful Links</h2>

                    <ul className="box">
                        <li><Link href="#">Blog</Link></li>
                        <li><Link href="donations.html">Donations</Link></li>
                        <li><Link href="#">Certifications</Link></li>
                        <li><Link href="CustomerService.html">Customer Service</Link></li>
                    </ul>
                </li>
                <li>
                    <h2 className="Address">Address</h2>

                    <ul className="box">
                        <li><Link href="https://www.google.com/maps/place/25+NE+2nd+St,+Miami,+FL+33132/@25.7763438,-80.1957933,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9b69934efc473:0x84d7e078130045c1!8m2!3d25.776339!4d-80.193213!16s%2Fg%2F11bw411hdb?entry=ttu">25 NE 2nd St</Link></li>
                        <li><Link href="https://www.google.com/maps/place/25+NE+2nd+St,+Miami,+FL+33132/@25.7763438,-80.1957933,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9b69934efc473:0x84d7e078130045c1!8m2!3d25.776339!4d-80.193213!16s%2Fg%2F11bw411hdb?entry=ttu">Miami</Link></li>
                        <li><Link href="https://www.google.com/maps/place/25+NE+2nd+St,+Miami,+FL+33132/@25.7763438,-80.1957933,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9b69934efc473:0x84d7e078130045c1!8m2!3d25.776339!4d-80.193213!16s%2Fg%2F11bw411hdb?entry=ttu">FL 33132</Link></li>
                    </ul>
                </li>
            </ul>
            <div className="footer-bottom">
                <p>All Rights reserved by &copy;bookwrm 2023</p>
            </div>
        </footer>
        </>
    )
}   