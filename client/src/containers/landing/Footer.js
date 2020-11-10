import React, { Component } from 'react'

export class Footer extends Component {

    render() {
        return (
            <footer id="footer" className="mt-auto">
                <div className="footer-top p-4">
                    <div className="row" style={{'margin': '0'}}>

                        <div className="text-center col-lg-12 col-md-12 footer-contact pt-4">

                            <div className="social-links">
                                <a
                                    href="https://twitter.com/jssstuniv"
                                    className="twitter"
                                >
                                    <i className="fa fa-twitter"></i>
                                </a>
                                <a
                                    href="https://www.facebook.com/JSSSTUNIV/"
                                    className="facebook"
                                >
                                    <i className="fa fa-facebook"></i>
                                </a>
                                <a
                                    href="https://www.instagram.com/jssstuniv/"
                                    className="instagram"
                                >
                                    <i className="fa fa-instagram"></i>
                                </a>
                                <a
                                    href="https://www.youtube.com/channel/UCQxvuSKHiwlSzXpQX2rSRDw"
                                    className="youtube"
                                >
                                    <i className="fa fa-youtube-play"></i>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/jss-science-and-technology-university-301983175/"
                                    className="linkedin"
                                >
                                    <i className="fa fa-linkedin"></i>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <strong>JSS S&TU</strong>. All Rights Reserved
              </div>
                    <div className="credits">
                        Designed by{" "}
                        <a href="https://sites.google.com/view/dscjssuniversity/home">
                            DSC JSSSTU
                </a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
