"use client";
import "../../styles/footer.css";

const Footer = () => {
  return (

    <footer className="main-footer ">
      <div className="bg-white">
        <div className="w-full max-h-96">

          <div className="container ">
            {/* Widgets Section */}
            <div className="widgets-section">
              <div className="row clearfix">
                {/* Column */}
                <div className="big-column col-lg-12 col-md-12 col-sm-12">
                  <div className="row clearfix">
                    {/* Footer Column */}
                    <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                      <div className="footer-widget about-widget">
                        <div className="logo pl-12 p-2">
                          <a href="#">
                            <img src="/images/logo/eavetopLogo.png" alt="Logo" />
                          </a>
                        </div>
                        <div className="text px-10">
                          <p>Your Eavetop Infra Company is dedicated to helping you find the perfect home. Whether you're looking to buy, sell, or rent, our team of experienced professionals is here to guide you every step of the way.</p>
                          {/* <p>Transforming spaces into legacies—Eavetop Infra, where quality meets imagination.</p> */}
                        </div>
                      </div>
                    </div>
                    {/* Footer Column */}
                    {/* <div className="footer-column col-lg-3 col-md-6 col-sm-12 p-4">
                          <div className="footer-widget links-widget">
                            <h2 className="pl-8">Quick Links</h2>
                            <ul className="footer-list">
                              <li><a href="/about">About Us</a></li>
                              <li><a href="/blog">Our Projects</a></li>
                              <li><a href="/contact">Contact Us</a></li>
                              <li><a href="#">Privacy Policy</a></li>
                            </ul>
                          </div>
                        </div> */}
                    {/* Footer Column */}
                    <div className="footer-column col-lg-4 col-md-12 col-sm-12 p-4 ml-80">
                      <div className="footer-widget info-widget">
                        <h2 className="pl-8">Contact Info</h2>
                        <ul className="info-list">
                          <li>Maruthi Industrial Estate,4th floor, Building No 3, ITPL Main Rd, KIADB Export Promotion Industrial Area, Bengaluru</li>
                          <li>+91-9480-243-905</li>
                          <li>EavetopInfra@gmail.com</li>
                        </ul>
                        {/* Social Links */}
                        <ul className="social-links">
                          <li className="google"><a href="https://google.com" target="_blank"><span className="fab fa-google-plus-g"></span></a></li>
                          <li className="facebook"><a href="https://facebook.com" target="_blank"><span className="fab fa-facebook-f "></span></a></li>
                          <li className="instagram"><a href="https://instagram.com" target="_blank"><span className="fab fa-instagram"></span></a></li>
                          <li className="twitter"><a href="https://x.com" target="_blank"><span className="fab fa-twitter"></span></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="footer-bottom">
                  <div className="">
                    <div className="row clearfix">
                      <div className="column col-lg-6 col-md-12 col-sm-12">
                        <div className="copyright text-[#0b2c3d]">
                          <span className="theme_color">&copy; 2024 Eavetop</span> All Right Reserved.
                        </div>
                      </div>
                      <div className="column col-lg-6 col-md-12 col-sm-12">
                        <ul className="footer-nav">
                          <li><a href="#">Terms of Service</a></li>
                          <li><a href="#">Privacy Policy</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          {/* Footer Bottom */}

        </div>
      </div>
    </footer>
  );
};

export default Footer;
