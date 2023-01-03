import  { FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa"

const currentDate = new Date();
const currentYear = currentDate.getFullYear();


function Footer (){

   return (
      <div className="footer" >
         <div className="email-footer" >
            <h5>JOIN OUR NEWSLETTER - ENTER YOUR EMAIL ADDRESS</h5>
            <input type="email" className="input-footer" placeholder={`Your email`}></input>
         </div>
         <div className="footer-link">
            <div className="social-media">
               <h5>FOLLOW US</h5>
               <div className="icon"> <FaFacebook /> <FaInstagram /> <FaTwitter /> </div>
            </div>

            <div className="social-media">
               <h5>MY ACCOUNT</h5>
              <p className="footer-links">ORDERS & RETURNS</p>
              <p className="footer-links">ACCOUNT SETTINGS</p>
              <p className="footer-links">EMAIL PREFERENCES</p>

            </div>

            <div className="social-media">
               <h5>COMPANY INFORMATION </h5>
              <p className="footer-links">ABOUT US</p>
              <p className="footer-links">CAREER</p>
              <p className="footer-links">PRESS</p>
              <p className="footer-links">SOCIAL RESPONSIBILITY</p>
            </div>

            <div className="social-media">
               <h5>HEPP & SUPPORT </h5>
              <p className="footer-links">SHIPPING INFO</p>
              <p className="footer-links">HOW TO ORDER</p>
              <p className="footer-links">HOW TO TRACK</p>
              <p className="footer-links">LEGAL & PRIVACY</p>
            </div>
         </div>
         
         <div className="copyRight">
            <small> Designed & Created By ILNURA TASHBAEVA, {currentYear}</small>
         </div>
      </div>
   )
}

export default Footer;