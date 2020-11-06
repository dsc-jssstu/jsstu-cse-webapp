import React from "react";
import Footer from "../landing/Footer";
import "./faculty.css";
import "./version.css";

const Faculty = () => {
  return (

      <div id="faculty" className="section wb">
        <div className="container">
          <div className="section-title text-center mt-5">
            <h3>FACULTY</h3>
          </div>

          <div className="row dev-list text-center" style={{ padding: "10px" }}>
            <div
              className="col-lg-4 col-md-6 col-sm-12 col-xs-12 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div className="widget clearfix">
                <img
                  src="https://sjce.ac.in/wp-content/uploads/2018/05/Capture.png"
                  alt=""
                  className="img-fluid rounded-circle"
                />
                <div className="widget-title">
                  <h3>Dr. M P Pushpalatha</h3>
                  <small>Head Of Department</small>
                </div>

                <p>
                Her research focuses mainly on ML and Healthcare Informatics with a particular emphasis on
                the applications of healthcare technology to socially relevant issues.

                </p>

                <div className="faculty-social d-flex justify-content-center" >
                  <a href="#" className="btn global-radius">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#" className="btn global-radius">
                    <i className="fa fa-github"></i>
                  </a>

                  <a href="#" className="btn global-radius">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-12 col-xs-12 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.4s"
            >
              <div className="widget clearfix">
                <img
                  width="458px"
                  height="463px"
                  src="https://jssstuniv.in/wp-content/uploads/2017/05/viji.jpg"
                  alt=""
                  className="img-fluid rounded-circle"
                />
                <div className="widget-title">
                  <h3>Dr.Vijaylakshmi H C</h3>
                  <small>Professor</small>
                </div>

                <p>
                  Current research interest in the area of Image Processing and Analysis, Information Retrieval and Data Mining.
                </p>

                <div className="faculty-social d-flex justify-content-center" >
                  <a href="#" className="btn global-radius">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#" className="btn global-radius">
                    <i className="fa fa-github"></i>
                  </a>

                  <a href="#" className="btn global-radius">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-12 col-xs-12 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div className="widget clearfix">
                <img
                  src="https://jssstuniv.in/wp-content/uploads/2017/05/srinath-1.jpg"
                  alt=""
                  className="img-fluid rounded-circle"
                />
                <div className="widget-title">
                  <h3>Dr. Srinath.S </h3>
                  <small>Associate Professor</small>
                </div>

                <p>
                  He works in the area of document image processing, Natural Language Processing and Digital Image processing.
                </p>

                <div className="faculty-social d-flex justify-content-center" >
                  <a href="#" className="btn global-radius">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#" className="btn global-radius">
                    <i className="fa fa-github"></i>
                  </a>

                  <a href="#" className="btn global-radius">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>


          {/*</div>

          <div className="row dev-list text-center" style={{ padding: "10px" }}>*/}

          <div
            className="col-lg-4 col-md-6 col-sm-12 col-xs-12 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
          >
            <div className="widget clearfix">
              <img
                src="https://jssstuniv.in/wp-content/uploads/2017/05/anil2.png"
                alt=""
                className="img-fluid rounded-circle"
              />
              <div className="widget-title">
                <h3>Dr Anil Kumar KM</h3>
                <small>Associate Professor</small>
              </div>

              <p>
                His area of Interest are Text mining, Sentiment Analysis, Data mining, Opinion mining, Web Mining, Data Analytics and Computer Network.
              </p>

              <div className="faculty-social d-flex justify-content-center" >
                <a href="#" className="btn global-radius">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" className="btn global-radius">
                  <i className="fa fa-github"></i>
                </a>

                <a href="#" className="btn global-radius">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-12 col-xs-12 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.6s"
          >
            <div className="widget clearfix">
              <img
                src="https://jssstuniv.in/wp-content/uploads/2017/05/photo-2.jpg"
                alt=""
                className="img-fluid rounded-circle"
              />
              <div className="widget-title">
                <h3>Dr. M A Anusuya</h3>
                <small>Associate professor</small>
              </div>

              <p>
                She works in the area of speech signal processing,Computational Intelligence, Machine Translation and Natural Language Processing.
              </p>

              <div className="faculty-social d-flex justify-content-center" >
                <a href="#" className="btn global-radius">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" className="btn global-radius">
                  <i className="fa fa-github"></i>
                </a>

                <a href="#" className="btn global-radius">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-12 col-xs-12 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
          >
            <div className="widget clearfix">
              <img
                src="https://jssstuniv.in/wp-content/uploads/2017/05/prasi-photo.jpg"
                alt=""
                className="img-fluid rounded-circle"
              />
              <div className="widget-title">
                <h3>Dr. Prasanna B T</h3>
                <small>Associate Professor</small>
              </div>
              <p>
                His research interest is in the area of Computer Networks, Security, Cloud Computing, IoT, Machine Learning and has industry experience too.
              </p>

              <div className="faculty-social d-flex justify-content-center" >
                <a href="#" className="btn global-radius">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" className="btn global-radius">
                  <i className="fa fa-github"></i>
                </a>

                <a href="#" className="btn global-radius">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          {/*</div>

          <div className="row dev-list text-center" style={{ padding: "10px" }}>*/}

           <div
            className="col-lg-4 col-md-6 col-sm-12 col-xs-12 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
           >
            <div className="widget clearfix">
              <img
                src="https://jssstuniv.in/wp-content/uploads/2017/05/amc4-e1541823725812.jpg"
                alt=""
                className="img-fluid rounded-circle"
              />
              <div className="widget-title">
                <h3>A M Chandrashekar </h3>
                <small>Assistant Professor</small>
              </div>

              <p>
                His areas of specialization are Data Mining, Computer Networks and Software Engineering. He is pursuing his research in Data Mining & Network Security.
              </p>

              <div className="faculty-social d-flex justify-content-center" >
                <a href="#" className="btn global-radius">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" className="btn global-radius">
                  <i className="fa fa-github"></i>
                </a>

                <a href="#" className="btn global-radius">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
           </div>

           <div
             className="col-lg-4 col-md-6 col-sm-12 col-xs-12 wow fadeIn"
             data-wow-duration="1s"
             data-wow-delay="0.4s"
           >
             <div className="widget clearfix">
               <img
                 src="https://jssstuniv.in/wp-content/uploads/2017/05/citations.jpg"
                 alt=""
                 className="img-fluid rounded-circle"
               />
               <div className="widget-title">
                 <h3>Dr. Manimala. S </h3>
                 <small>Assistant Professor</small>
               </div>

               <p>
                 Her research interests are Machine Learning, Image Processing, Big Data Analytics and Cognitive Computing.
               </p>

               <div className="faculty-social d-flex justify-content-center" >
                 <a href="#" className="btn global-radius">
                   <i className="fa fa-facebook"></i>
                 </a>
                 <a href="#" className="btn global-radius">
                   <i className="fa fa-github"></i>
                 </a>

                 <a href="#" className="btn global-radius">
                   <i className="fa fa-linkedin"></i>
                 </a>
               </div>
             </div>
           </div>

           <div
             className="col-lg-4 col-md-6 col-sm-12 col-xs-12 wow fadeIn"
             data-wow-duration="1s"
             data-wow-delay="0.4s"
           >
             <div className="widget clearfix">
               <img
                 src="https://jssstuniv.in/wp-content/uploads/2017/05/pms_id-500x500.jpg"
                 alt=""
                 className="img-fluid rounded-circle"
               />
               <div className="widget-title">
                 <h3>P M Shivamurthy</h3>
                 <small>Assistant Professor</small>
               </div>

               <p>
                 He is pursuing his Ph.D at Mysore university
                 in the area of Digital Pathology and Medical Imaging. His research interests are Medical Imaging, AI and HPC.
               </p>

               <div className="faculty-social d-flex justify-content-center" >
                 <a href="#" className="btn global-radius">
                   <i className="fa fa-facebook"></i>
                 </a>
                 <a href="#" className="btn global-radius">
                   <i className="fa fa-github"></i>
                 </a>

                 <a href="#" className="btn global-radius">
                   <i className="fa fa-linkedin"></i>
                 </a>
               </div>
             </div>
           </div>

          {/*</div>

          <div className="row dev-list text-center" style={{ padding: "10px" }}>*/}
            <div
              className="col-lg-4 col-md-6 col-sm-12 col-xs-12 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.4s"
            >
              <div className="widget clearfix">
                <img
                  src="https://jssstuniv.in/wp-content/uploads/2017/05/IMG_20180119_102117-500x500.jpg"
                  alt=""
                  className="img-fluid rounded-circle"
                />
                <div className="widget-title">
                  <h3>Dr Trisiladevi C. Nagavi</h3>
                  <small>Assistant Professor</small>
                </div>
                <p>
                  She has an expertise in the area of Audio, Music,
                  Speech and Image Signal Processing, Information Retrieval and Machine Learning.
                </p>

                <div className="faculty-social d-flex justify-content-center" >
                  <a href="#" className="btn global-radius">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#" className="btn global-radius">
                    <i className="fa fa-github"></i>
                  </a>

                  <a href="#" className="btn global-radius">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-12 col-xs-12 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.4s"
            >
              <div className="widget clearfix">
                <img
                  src="https://jssstuniv.in/wp-content/uploads/2017/05/Dr_Mahesha-P-500x500.jpg"
                  alt=""
                  className="img-fluid rounded-circle"
                />
                <div className="widget-title">
                  <h3>Dr. Mahesha P</h3>
                  <small>Assistant Professor</small>
                </div>
                <p>
                  His areas of interest include Speech Signal Processing, Machine Learning, Data analytics and Web Technologies.
                  He is currently involved in Clinical Speech Processing research.
                </p>

                <div className="faculty-social d-flex justify-content-center" >
                  <a href="#" className="btn global-radius">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#" className="btn global-radius">
                    <i className="fa fa-github"></i>
                  </a>

                  <a href="#" className="btn global-radius">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>


            <div
              className="col-lg-4 col-md-6 col-sm-12 col-xs-12 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.4s"
            >
              <div className="widget clearfix">
                <img
                  src="https://jssstuniv.in/wp-content/uploads/2018/11/IMG_20181109_200358-500x500.jpg"
                  alt=""
                  className="img-fluid rounded-circle"
                />
                <div className="widget-title">
                  <h3>Sheela N</h3>
                  <small>Assistant Professor</small>
                </div>
                <p>
                  She is pursuing P.hD in the area of Medical Image Processing and Machine Learning.
                </p>

                <div className="faculty-social d-flex justify-content-center" >
                  <a href="#" className="btn global-radius">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#" className="btn global-radius">
                    <i className="fa fa-github"></i>
                  </a>

                  <a href="#" className="btn global-radius">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          {/*</div>

          <div className="row dev-list text-center" style={{ padding: "10px" }}>*/}

          <div
            className="col-lg-4 col-md-6 col-sm-12 col-xs-12 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
          >
            <div className="widget clearfix">
              <img
                src="https://jssstuniv.in/wp-content/uploads/2017/05/pic2-500x500.jpg"
                alt=""
                className="img-fluid rounded-circle"
              />
              <div className="widget-title">
                <h3>Vani Ashok</h3>
                <small>Assistant Professor</small>
              </div>

              <p>
                She is pursuing P.hD in the area of Image Processing and Artificial Intelligence.
              </p>

              <div className="faculty-social d-flex justify-content-center" >
                <a href="#" className="btn global-radius">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" className="btn global-radius">
                  <i className="fa fa-github"></i>
                </a>

                <a href="#" className="btn global-radius">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-12 col-xs-12 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
          >
            <div className="widget clearfix">
              <img
                src="https://jssstuniv.in/wp-content/uploads/2017/05/madhu-sir.jpg"
                alt=""
                className="img-fluid rounded-circle"
              />
              <div className="widget-title">
                <h3>G Madhusudhan</h3>
                <small>Assistant Professor</small>
              </div>

              <p>
                He is pursuing Ph.D. in the area of computer and Mobile Adhoc Networks.
              </p>

              <div className="faculty-social d-flex justify-content-center" >
                <a href="#" className="btn global-radius">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" className="btn global-radius">
                  <i className="fa fa-github"></i>
                </a>

                <a href="#" className="btn global-radius">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-12 col-xs-12 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="widget clearfix">
              <img
                src="https://jssstuniv.in/wp-content/uploads/2017/05/Brunda1-1.jpg"
                alt=""
                className="img-fluid rounded-circle"
              />
              <div className="widget-title">
                <h3>S Brunda</h3>
                <small>Assistant Professor</small>
              </div>

              <p>
                She is currently pursuing her Doctoral Degree. Her research interest are Image Forensic and Computer Vision.
              </p>

              <div className="faculty-social d-flex justify-content-center" >
                <a href="#" className="btn global-radius">
                  <i
                    className="fa fa-facebook"
                    style={{ padding: "2px" }}
                  ></i>
                </a>
                <a href="#" className="btn global-radius">
                  <i className="fa fa-github" style={{ padding: "2px" }}></i>
                </a>

                <a href="#" className="btn global-radius">
                  <i
                    className="fa fa-linkedin"
                    style={{ padding: "2px" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>

          {/*</div>

          <div className="row dev-list text-center" style={{ padding: "10px" }}>*/}

          <div
            className="col-lg-4 col-md-6 col-sm-12 col-xs-12 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
          >
            <div className="widget clearfix">
              <img
                src="https://jssstuniv.in/wp-content/uploads/2017/05/photo-4-e1541604122746.jpg"
                alt=""
                className="img-fluid rounded-circle"
              />
              <div className="widget-title">
                <h3>Manjula S</h3>
                <small>Assistant Professor</small>
              </div>

              <p>
                She works in the areas of Wireless Networks in Computer Networking.
              </p>

              <div className="faculty-social d-flex justify-content-center" >
                <a href="#" className="btn global-radius">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" className="btn global-radius">
                  <i className="fa fa-github"></i>
                </a>

                <a href="#" className="btn global-radius">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-12 col-xs-12 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.6s"
          >
            <div className="widget clearfix">
              <img
                src="https://jssstuniv.in/wp-content/uploads/2017/05/DNA-YogaDay2017.jpg"
                alt=""
                className="img-fluid rounded-circle"
              />
              <div className="widget-title">
                <h3>Divakara N</h3>
                <small>Assistant Professor</small>
              </div>

              <p>
                 His teaching and research interest are Programming Languages & Paradigms,
                 Operating Systems and Web Technologies.
              </p>

              <div className="faculty-social d-flex justify-content-center" >
                <a href="#" className="btn global-radius">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" className="btn global-radius">
                  <i className="fa fa-github"></i>
                </a>

                <a href="#" className="btn global-radius">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-12 col-xs-12 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.6s"
          >
            <div className="widget clearfix">
              <img
                src="https://jssstuniv.in/wp-content/uploads/2018/11/guru-116x150.jpg"
                alt=""
                className="img-fluid rounded-circle"
              />
              <div className="widget-title">
                <h3>Dr. R Guru </h3>
                <small>Assistant Professor </small>
              </div>

              <p>
               His areas of interest are Computer Network, Wireless Sensor Networks, Cloud Computing, IoT.
              </p>

              <div className="faculty-social d-flex justify-content-center" >
                <a href="#" className="btn global-radius">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" className="btn global-radius">
                  <i className="fa fa-github"></i>
                </a>

                <a href="#" className="btn global-radius">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          {/*</div>

          <div className="row dev-list text-center" style={{ padding: "10px" }}>*/}

          <div
            className="col-lg-4 col-md-6 col-sm-12 col-xs-12 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
          >
            <div className="widget clearfix">
              <img
                src="https://jssstuniv.in/wp-content/uploads/2017/05/1-439x500.jpg"
                alt=""
                className="img-fluid rounded-circle"
              />
              <div className="widget-title">
                <h3>Vijay M B</h3>
                <small>Assistant Professor</small>
              </div>

              <p>
                He is currently pursuing his Doctoral Degree and
                His teaching and research interests are Distributed System and Networking.
              </p>

              <div className="faculty-social d-flex justify-content-center" >
                <a href="#" className="btn global-radius">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" className="btn global-radius">
                  <i className="fa fa-github"></i>
                </a>

                <a href="#" className="btn global-radius">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-12 col-xs-12 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.6s"
          >
            <div className="widget clearfix">
              <img
                src="https://jssstuniv.in/wp-content/uploads/2017/05/KSMphoto-e1509019949503.jpg"
                alt=""
                className="img-fluid rounded-circle"
              />
              <div className="widget-title">
                <h3>Mahesh K S</h3>
                <small>Associate professor</small>
              </div>

              <p>
                He is pursuing Ph.D. in the area of Cyber Security and Data Analytics.
                He is having 17 years of industry experience.
              </p>

              <div className="faculty-social d-flex justify-content-center" >
                <a href="#" className="btn global-radius">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" className="btn global-radius">
                  <i className="fa fa-github"></i>
                </a>

                <a href="#" className="btn global-radius">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-12 col-xs-12 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
          >
            <div className="widget clearfix">
              <img
                src="https://jssstuniv.in/wp-content/uploads/2017/05/MyPhoto2-413x500.jpg"
                alt=""
                className="img-fluid rounded-circle"
              />
              <div className="widget-title">
                <h3>Sreenivas T</h3>
                <small>Assistant Professor </small>
              </div>

              <p>
                His area of specialization is Cloud Computing and Image Processing.
              </p>

              <div className="faculty-social d-flex justify-content-center" >
                <a href="#" className="btn global-radius">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" className="btn global-radius">
                  <i className="fa fa-github"></i>
                </a>

                <a href="#" className="btn global-radius">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          {/*</div>

          <div className="row dev-list text-center" style={{ padding: "10px" }}>*/}

          <div
            className="col-lg-4 col-md-6 col-sm-12 col-xs-12 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
          >
            <div className="widget clearfix">
              <img
                src="https://jssstuniv.in/wp-content/uploads/2017/05/20181107_111750-424x500.png"
                alt=""
                className="img-fluid rounded-circle"
              />
              <div className="widget-title">
                <h3>Bindiya A R</h3>
                <small>Assistant Professor</small>
              </div>
              <p>
                She is pursuing PhD in the area of Image Processing and Data Mining.
              </p>

              <div className="faculty-social d-flex justify-content-center" >
                <a href="#" className="btn global-radius">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" className="btn global-radius">
                  <i className="fa fa-github"></i>
                </a>

                <a href="#" className="btn global-radius">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-12 col-xs-12 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
          >
            <div className="widget clearfix">
              <img
                src="https://jssstuniv.in/wp-content/uploads/2017/05/IMG_20190813_121418-500x500.jpg"
                alt=""
                className="img-fluid rounded-circle"
              />
              <div className="widget-title">
                <h3>Ashritha R Murthy </h3>
                <small>Assistant Professor</small>
              </div>
              <p>
                She is pursuing Ph.D in the area of Text Analytics and Web Mining.
              </p>

              <div className="faculty-social d-flex justify-content-center" >
                <a href="#" className="btn global-radius">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" className="btn global-radius">
                  <i className="fa fa-github"></i>
                </a>

                <a href="#" className="btn global-radius">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-12 col-xs-12 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
          >
            <div className="widget clearfix">
              <img
                src="https://jssstuniv.in/wp-content/uploads/2017/05/DSC08303-2-500x500.jpg"
                alt=""
                className="img-fluid rounded-circle"
              />
              <div className="widget-title">
                <h3>Varsha V</h3>
                <small>Assistant Professor</small>
              </div>
              <p>
                She is pursuing PhD in the area of Networking.
              </p>

              <div className="faculty-social d-flex justify-content-center" >
                <a href="#" className="btn global-radius">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" className="btn global-radius">
                  <i className="fa fa-github"></i>
                </a>

                <a href="#" className="btn global-radius">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          {/*</div>

          <div className="row dev-list text-center" style={{ padding: "10px" }}>*/}

          <div
            className="col-lg-4 col-md-6 col-sm-12 col-xs-12 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
          >
            <div className="widget clearfix">
              <img
                src="https://jssstuniv.in/wp-content/uploads/2017/05/20180413_175921-500x500.jpg"
                alt=""
                className="img-fluid rounded-circle"
              />
              <div className="widget-title">
                <h3>Shruthi N M</h3>
                <small>Assistant Professor</small>
              </div>

              <p>
                 She is pursuing P.hD in the area of Image Processing.
              </p>

              <div className="faculty-social d-flex justify-content-center" >
                <a href="#" className="btn global-radius">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" className="btn global-radius">
                  <i className="fa fa-github"></i>
                </a>

                <a href="#" className="btn global-radius">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-12 col-xs-12 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
          >
            <div className="widget clearfix">
              <img
                src="https://jssstuniv.in/wp-content/uploads/2017/05/DSC08292-500x500.jpg"
                alt=""
                className="img-fluid rounded-circle"
              />
              <div className="widget-title">
                <h3>Shalini K C </h3>
                <small>Assistant Professor</small>
              </div>
              <p>
                She is currently pursuing PhD in the area of Machine Learning and Neural Networks.
              </p>

              <div className="faculty-social d-flex justify-content-center" >
                <a href="#" className="btn global-radius">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" className="btn global-radius">
                  <i className="fa fa-github"></i>
                </a>

                <a href="#" className="btn global-radius">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-12 col-xs-12 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
          >
            <div className="widget clearfix">
              <img
                src="https://jssstuniv.in/wp-content/uploads/2019/09/Parashiva-Murthy-B-M-e1568694889693-481x500.jpg"
                alt=""
                className="img-fluid rounded-circle"
              />
              <div className="widget-title">
                <h3>Parashiva Murthy B M</h3>
                <small>Assistant Professor</small>
              </div>
              <p>
                His research interest are Big Data, Data Mining, Cloud Computing.
              </p>

              <div className="faculty-social d-flex justify-content-center" >
                <a href="#" className="btn global-radius">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" className="btn global-radius">
                  <i className="fa fa-github"></i>
                </a>

                <a href="#" className="btn global-radius">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          </div>

        </div>
       <Footer />
      </div>
  );
};

export default Faculty;
