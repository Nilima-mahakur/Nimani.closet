import "./Footer.css"
import { FaFacebook,FaInstagram,FaLinkedin ,FaCartPlus} from "react-icons/fa";

const Footer =() =>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Nimani.closet</h1>
                    <p>Shop here with lot of offers</p>
                </div>
                <div >
                    <a href="/">
                         <FaFacebook className="tag"/>
                    </a>
                    <a href="/">
                        <FaInstagram className="tag"/>
                    </a>
                    <a href="/">
                      <FaLinkedin className="tag"/>
                    </a>
                    <a href="/">
                        <FaCartPlus className="tag"/>
                     
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Categories</h4>
                    <a href="/">Men</a>
                    <a href="/">Women</a>
                    <a href="/">Shoes</a>
                    <a href="/">Accessories</a>
                    <a href="/">New Arrivals</a>
                </div>
               
                <div>
                    <h4>More</h4>
                    <a href="/">FAQ</a>
                    <a href="/">Issues</a>
                    <a href="/">Pages</a>
                    <a href="/">Store</a>
                    <a href="/">Cookies</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Troublerecording</a>
                    <a href="/">Contact us</a>
                    <a href="/">Query email us</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of services</a>
                    <a href="/">Conditions</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>
            </div>
        </div>
    )
}
export default Footer