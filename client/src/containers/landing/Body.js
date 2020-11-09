import React, { Component } from "react";
import { Link } from "react-router-dom";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tabs';

class Body extends Component {
  render() {
    return (
      <div>
        <section id="intro" className="clearfix">
          {/*<h1 className="text-center text-white font-weight-bold p-2">
            Department Of Computer Science & Engineering
          </h1>*/}
          <div className="container">
            <div className="intro-img">
              <img
                src={
                  "https://sjce.ac.in/wp-content/uploads/2015/08/IMG_5045-900x600.jpg"
                }
                alt=""
                className="img-fluid front-image"
              />
            </div>

            <div className="intro-info pr-3">
              <h1 className="text-capitalize">
                Department Of Computer Science & Engineering
              </h1>
              <h4>JSSSTU (Formerly known as SJCE)</h4>
            </div>
          </div>
        </section>
        {/* <!-- #intro --> */}

        <main id="main">
          {/* <!--==========================
      About Us Section
    ============================--> */}
          <section id="about">
            <div className="container">
              <header className="section-header py-5 text-justify">
                <h3>ABOUT US</h3>
                <p>
                  The inception of Department of Computer Science and
                  Engineering (CS&E) was one among the first to be established
                  in the State of Karnataka in the year 1982.
                  <br />
                  Our mission is to create ideas that deepen and advance our
                  understanding of the realm of Computer Science and Engineering
                  and with those ideas to develop innovative, principled, and
                  insightful leaders who change the world.
                  <br />
                  Classes are conducted on a full-time and on part time basis in
                  an intimate-scale environment, and take full advantage of the
                  assets provided by JSS Science and Technology and its
                  surrounding communities.
                  <br />
                  <br />
                  The department is actively involved in International
                  collaborative research and also in sponsored research projects
                  through various funding agencies:
                  <br />
                </p>
                <ol typeof="I" className="mb-4">
                  <li>Science and Engineering Research Board (SERB)</li>
                  <li>Ministry of Human Resource Development (MHRD)</li>
                  <li>University Grant Commission (UGC)</li>
                  <li>Department of Science and Technology (DST)</li>
                </ol>
              </header>

              <div className="row mt-2 p-2 about-container">
                <div className="col-md-6">
                  <div className="icon-box wow fadeInUp">
                    <div className="icon">
                      <i className="fa fa-shopping-bag"></i>
                    </div>
                    <h4 className="title">
                      <a href="#1">Vision</a>
                    </h4>
                    <p className="description text-justify">
                      Seek to become a universally well known academic centre for teaching, learning, research and innovation in the field of Computer Science & Engineering
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="icon-box wow fadeInUp" data-wow-delay="0.2s">
                    <div className="icon">
                      <i className="fa fa-photo"></i>
                    </div>
                    <h4 className="title">
                      <a href="#1">Mission </a>
                    </h4>

                    <ul className="description text-justify">
                      <li>Impart quality education with an emphasis on basic principles of Computer Science and Engineering.</li>
                      <li>Inculcate advancements in curriculum and pedagogy to enhance teaching and learning process.</li>
                      <li>Foster research and collaboration with premier institutions and industries.</li>
                      <li>Promote innovation and entrepreneurship for the betterment of society.</li>
                    </ul>

                  </div>
                </div>

                {/* <div
                      className="icon-box wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <div className="icon">
                        <i className="fa fa-bar-chart"></i>
                      </div>
                      <h4 className="title">
                        <a href="#1">Motto</a>
                      </h4>
                      <p className="description">
                        True to JSS legacy and dedication to the service of
                        mankind the JSS Science & Technological University
                        adopted
                      </p>
                    </div> */}
              </div>

              <div className="row py-5">
                <div className="col">
                <Tabs defaultActiveKey="peo" id="uncontrolled-tab-example">
                  <Tab eventKey="peo" title="&nbsp;&nbsp;&nbsp;PEO&nbsp;&nbsp;&nbsp;">
                    <div className="py-5">
                      <strong>Program Educational Objectives (PEOs)</strong>
                      <ul>
                       	<li><strong>PEO1</strong>: Excel in professional career across industries and institutes that emphasizes on Innovation and problem solving.</li>
                       	<li><strong>PEO2</strong>: Collaborate successfully with peers, colleagues and organizations.</li>
                       	<li><strong>PEO3</strong>: Work as ethical and responsible members of the computing profession and society.</li>
                      </ul>
                    </div>
                  </Tab>
                  <Tab eventKey="pso" title="&nbsp;&nbsp;&nbsp;PSO&nbsp;&nbsp;&nbsp;">
                    <div className="py-5">
                      <strong>PROGRAMME SPECIFIC OUTCOMES (PSOs)</strong>
                      <ul>
                        <li><strong>PSO-1:&nbsp; Problem-Solving Skills:</strong>&nbsp; Ability to apply standard practices and mathematical methodologies to solve computational tasks, model real world problems in the areas of database systems, system software, web technologies and Networking solutions with an appropriate knowledge of Data structures and Algorithms</li>
                        <li><strong>PSO-2: Knowledge of Computer Systems:</strong>&nbsp; An understanding of the structure and working of the computer systems with performance study of various computing architectures</li>
                        <li><strong>PSO-3: Successful Career and Entrepreneurship:</strong> The ability to get acquaintance with the state of the art software technologies leading to entrepreneurship and higher studies.</li>
                        <li><strong>PSO-4: Computing and Research Ability:</strong> Ability to use knowledge in various domains to identify research gaps and to provide solution to new ideas leading to innovations.</li>
                      </ul>
                    </div>
                  </Tab>
                  <Tab eventKey="po" title="&nbsp;&nbsp;&nbsp;PO&nbsp;&nbsp;&nbsp;">
                    <div className="py-5">
                      <strong>PROGRAMME OUTCOMES (POs)</strong><br/>
                      Engineering Graduates will be able to:
                      <ol>
                        <li>Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.</li>
                        <li>Problem analysis: Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.</li>
                        <li>Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.</li>
                        <li>Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.</li>
                        <li>Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.</li>
                        <li>The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.</li>
                        <li>Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.</li>
                        <li>Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.</li>
                        <li>Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.</li>
                        <li>Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.</li>
                        <li>Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.</li>
                        <li>Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.</li>
                      </ol>

                    </div>
                  </Tab>
                </Tabs>
                </div>
              </div>

              <div className="row py-5 obe">
              <header className="section-header col-md-12">
                <h3>OBE ADMINISTRATION</h3>
              </header>

                <div className="col">
                <Tabs defaultActiveKey="dpa" id="uncontrolled-tab-example">
                  <Tab eventKey="dpa" title="&nbsp;Department Advisory Board&nbsp;">
                    <div className="py-5">
                      <ol>
                        <li>Dr. B.G.Prasad , Professor, BMS College, Bangalore</li>
                        <li>C. Chandra Sekhar, Professor, IIT Madras, Chennai</li>
                        <li>Lawrence Mohanraj, IBM India, Bangalore</li>
                        <li>K. Kesavasamy, TCS, Bangalore</li>
                      </ol>
                    </div>
                  </Tab>
                  <Tab eventKey="bos" title="&nbsp;Board of Studies&nbsp;">
                    <div className="py-5">
                    <table width="100%">
                      <tbody>
                        <tr>
                          <td width="4%"><strong>Sl. No.</strong></td>
                          <td width="34%"><strong>Category</strong></td>
                          <td width="20%"><strong>Designation</strong></td>
                          <td colSpan="2" width="40%"><strong>Name of the Person</strong></td>
                          </tr>
                          <tr>
                          <td width="4%">1</td>
                          <td width="34%">The Dean(s) of the Faculties</td>
                          <td width="20%">Ex-Officio Member</td>
                          <td colSpan="2" width="40%">Dr. T.N. Nagabushan, Principal</td>
                        </tr>
                        <tr>
                          <td width="4%">2</td>
                          <td width="34%">Head of the Dept.</td>
                          <td width="20%">Chairperson</td>
                          <td width="4%">1.</td>
                          <td width="35%">Dr. H. C. Vijayalakshmi</td>
                          </tr>
                          <tr>
                          <td width="4%">3</td>
                          <td width="34%">All Professors of the Department</td>
                          <td width="20%">Members</td>
                          <td width="4%">2</td>
                          <td width="35%">Dr. M. P Pushpalatha</td>
                        </tr>
                        <tr>
                          <td rowSpan="2" width="4%">4</td>
                          <td rowSpan="2" width="34%">Two Senior Associate Professors of the concerned Department by rotation</td>
                          <td rowSpan="2" width="20%">Members</td>
                          <td width="4%">1</td>
                          <td width="35%">&nbsp;Dr. Anil Kumar K.M<p></p>
                          <p>&nbsp;</p></td>
                          </tr>
                          <tr>
                          <td width="4%">2</td>
                          <td width="35%">Dr. M.A. Anusuya<p></p>
                          <p>&nbsp;</p></td>
                        </tr>
                        <tr>
                        <td width="4%">5</td>
                          <td width="34%">One Senior Assistant Professor of the concerned Department by rotation</td>
                          <td width="20%">Member</td>
                          <td width="4%">1</td>
                          <td width="35%">Dr. S. Srinath</td>
                          </tr>
                          <tr>
                          <td width="4%"></td>
                          <td width="34%"></td>
                          <td width="20%"></td>
                          <td width="4%">1</td>
                          <td width="35%">Dr. Ananthanarayana&nbsp;V.S.<p></p>
                          <p>Professor,</p>
                          <p>Dept.&nbsp;Of&nbsp;Information&nbsp;Technology</p>
                          <p>N.I.T.K.,&nbsp;Surathkal<br/>
                          Mangaluru&nbsp;– 575 025<br/>
                          Email-id: anvs@ nitk.ac.in, dean.rc @nitk.edu.in,</p>
                          <p>Phone: 91-824-2473550, 91-824-247067.<br/>
                          Mobile:&nbsp; 9980250204</p></td>
                        </tr>
                        <tr>
                        <td width="4%">7<p></p>
                          <p>&nbsp;</p></td>
                          <td width="34%">One External subject expert&nbsp;&nbsp; from any reputed Academic/Research Institutions/other Universities nominated by the Vice Chancellor upon recommendation by the Dean of respective faculty.</td>
                          <td width="20%">Member</td>
                          <td width="4%">1</td>
                          <td width="35%">Prof. Chandrashekar<p></p>
                          <p>Professor,</p>
                          <p>Dept. of CS&amp;E,</p>
                          <p>IIT Madras,</p>
                          <p>Chennai-600036</p>
                          <p>Email-id: <a href="mailto:cchandra@iitm.ac.in">cchandra@iitm.ac.in</a></p>
                          <p>Mobile:9840986782</p>
                          <p>&nbsp;</p></td>
                        </tr>
                        <tr>
                          <td rowSpan="2" width="4%">8</td>
                          <td rowSpan="2" width="34%">Two external members from concerned&nbsp; industry/ Government Departments/ Public Sector undertakings/ allied area relating to placement, nominated by the Academic Council upon recommendation by the Dean of respective faculty.</td>
                          <td width="20%">Members</td>
                          <td width="4%">1</td>
                          <td width="35%">&nbsp;Ms. RuchiraKamdar<p></p>
                          <p>Manager, Software Executive Briefing Center,</p>
                          <p>IBM India,</p>
                          <p>Bengaluru<br/>
                          Email-id:<a href="mailto:kruchir@in.ibm.com">kruchir@in.ibm.com</a><br/>
                          Mobile: 9844307488</p></td>
                        </tr>
                        <tr>
                          <td width="20%"></td>
                          <td width="4%">2</td>
                          <td width="35%">Mr. Sundar K.S<p></p>
                          <p>Associate Vice President ETA,</p>
                          <p>Infosys Pvt. Ltd.</p>
                          <p>Mysuru</p>
                          <p>Email-Id:sundarks@infosys.com</p>
                          <p>Mobile: 9845289330</p></td>
                        </tr>
                        <tr>
                          <td width="4%">9</td>
                          <td width="34%">One postgraduate meritorious alumnus, to be nominated by the Head of the Department.<p></p>
                          <p>&nbsp;</p></td>
                          <td width="20%">Member</td>
                          <td width="4%">1</td>
                          <td width="35%">Dr. Ramakanth Kumar,<p></p>
                          <p>Professor &amp; Academic Dean,</p>
                          <p>RV college of Engineering,</p>
                          <p>8th mile,</p>
                          <p>Mysore road,</p>
                          <p>Bengaluru-560059.</p>
                          <p>Email-id: <a href="mailto:ramakanthkp@rvce.edu.in">ramakanthkp@rvce.edu.in</a></p>
                          <p>Mobile: 9886309520</p></td>
                        </tr>
                        <tr>
                          <td rowSpan="3" width="4%"></td>
                          <td rowSpan="3" width="34%"></td>
                          <td rowSpan="3" width="20%"></td>
                          <td width="4%"></td>
                          <td width="35%">Dr. Suresha,<p></p>
                          <p>Professor,</p>
                          <p>DOS in Computer Science,</p>
                          <p>University of Mysore,</p>
                          <p>Mysuru -570006.</p>
                          <p>Email-id: <a href="mailto:sureshabm@yahoo.co.in">sureshabm@yahoo.co.in</a></p>
                          <p>sureshasuvi@gmail.com</p>
                          <p>Mobile: 9449810894</p></td>
                        </tr>
                        <tr>
                          <td width="4%">1</td>
                          <td width="35%">Dr. Guru R<p></p>
                          <p>Assistant Professor</p></td>
                        </tr>
                        <tr>
                          <td width="4%">2<p></p>
                          <p>&nbsp;</p></td>
                          <td width="35%">Dr. Manimala S<p></p>
                          <p>Assistant Professor</p></td>
                        </tr>
                      </tbody>
                    </table>
                    </div>
                  </Tab>
                  <Tab eventKey="mc" title="&nbsp;Mentoring Committee&nbsp;">
                    <div className="py-5">
                      <table width="100%">
                        <tbody>
                          <tr>
                            <td width="32"><strong>SI. No</strong></td>
                            <td width="84"><strong>Semester and section</strong></td>
                            <td colSpan="5" width="500" className="text-center"><strong>Faculties</strong></td>
                          </tr>
                          <tr>
                            <td width="32">1.</td>
                            <td width="84">1st semster</td>
                            <td width="109">Dr. M P Pushpalatha M P(P)</td>
                            <td width="130">Dr. S Srinath(A)</td>
                            <td width="76">Dr. M A Anusuya(B)</td>
                            <td width="83">Prof. R Guru(C)</td>
                            <td width="101">Dr. T D Roopamala(D)</td>
                          </tr>
                          <tr>
                            <td width="32">2.</td>
                            <td width="84">3<sup>rd</sup> semester</td>
                            <td width="109">Dr. T D Roopamala</td>
                            <td width="130">Prof. Madhusudan G(A)</td>
                            <td width="76">Prof. Varsha V(B)</td>
                            <td width="83">Dr. M A Anusuya(C)</td>
                            <td width="101"></td>
                          </tr>
                          <tr>
                            <td width="32">3.</td>
                            <td width="84">5<sup>th</sup> semster</td>
                            <td width="109">Prof. P M Shivamurthy(A)</td>
                            <td width="130">Prof. A M Chandrashekar(B)</td>
                            <td width="76"></td>
                            <td width="83"></td>
                            <td width="101"></td>
                          </tr>
                          <tr>
                            <td width="32">4.</td>
                            <td width="84">7<sup>th</sup> semster</td>
                            <td width="109">Dr. B T Prasanna(A)</td>
                            <td width="130">Prof. M B Vijay(B)</td>
                            <td width="76"></td>
                            <td width="83"></td>
                            <td width="101"></td>
                          </tr>
                          <tr>
                            <td width="32">5.</td>
                            <td width="84">M.Tech(CE)</td>
                            <td width="109">Dr. H C Vijayalakshmi</td>
                            <td width="130"></td>
                            <td width="76"></td>
                            <td width="83"></td>
                            <td width="101"></td>
                          </tr>
                        </tbody>
                      </table>
                      <iframe id="s_pdf_frame" src="//docs.google.com/gview?embedded=true&amp;url=http://jssstuniv.in/wp-content/uploads/2018/12/CSE-Mentoring-list.pdf" style={{width: "100%", height:500}} frameBorder="0"></iframe>
                    </div>
                  </Tab>
                  <Tab eventKey="dc" title="&nbsp;Department Committee&nbsp;">
                    <div className="py-5">
                        ---
                    </div>
                  </Tab>
                  <Tab eventKey="tp" title="&nbsp;Test Policies&nbsp;">
                    <div className="py-5">
                      <iframe id="s_pdf_frame" src="//docs.google.com/gview?embedded=true&amp;url=http://jssstuniv.in/wp-content/uploads/2018/12/CS-Test-conduction-or-Evaluation-policies.pdf" style={{width: "100%", height:500}} frameBorder="0"></iframe>
                    </div>
                  </Tab>
                </Tabs>
                </div>
              </div>

              <div className="row about-extra">
                <div className="col-md-4 wow fadeInUp">
                  <img
                    src={
                      "https://jssstuniv.in/wp-content/uploads/2018/11/MPP-Picture-500x500.jpg"
                    }
                    className="img-fluid w-80 img-hod"
                    alt=""
                  />
                </div>
                <div className="col-md-8 wow fadeInUp pt-5 pt-md-0">
                  <h4>HoD and Professor</h4>
                  <p class="text-justify">
                    Dr. M P Pushpalatha, HOD pf department of Computer Science
                    and Engineering, graduated from Visvesvaraya Technological University (VTU), Belagavi.
                  </p>
                  <p class="text-justify">
                    Professor in the department of Computer Science and
                    Engineering, with nearly three decades of teaching
                    experience. Passionate and committed to inspire students to
                    pursue academic and personal excellence. Driven by the
                    motto, “Anything worth doing is worth doing well,” to create
                    a challenging and engaging learning environment for students
                    and self. My research focuses mainly on Machine Learning and
                    Healthcare Informatics with a particular emphasis on the
                    applications of healthcare technology to socially relevant
                    issues. Currently guiding four (4) Ph.d Research scholars.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="p-md-4">
            <div className="background order-lg-2 order-1 wow fadeInUp">
              <img
                src={require("../../views/img/cs.JPG")}
                className="img-fluid img-branch"
                alt="group photo"
              />
            </div>
          </div>

          {/* SERVICES ABOUT SECTION */}

          <section id="services" className="section-bg">
            <div className="container">
              <header className="section-header">
                <h3>Department Profile</h3>
              </header>

              <div className="row">
                <div
                  className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
                  data-wow-duration="1.4s"
                >
                  <div className="box">
                    <div className="icon">
                      <i
                        className="ion-ios-analytics-outline"
                        style={{ color: "#ff689b" }}
                      ></i>
                    </div>
                    <h4 className="title">
                      <a href="http://jssstuniv.in/academics-calendar-of-events/">
                        Calendar
                      </a>
                    </h4>
                    <p className="description">

                    </p>
                  </div>
                </div>
                <div
                  className="col-md-6 col-lg-5 wow bounceInUp"
                  data-wow-duration="1.4s"
                >
                  <div className="box">
                    <div className="icon">
                      <i
                        className="ion-ios-bookmarks-outline"
                        style={{ color: "#e9bf06" }}
                      ></i>
                    </div>
                    <h4 className="title">
                      <a href="/faculty">Faculty</a>
                    </h4>
                    <p className="description">

                    </p>
                  </div>
                </div>

                {/*<div
                  className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
                  data-wow-delay="0.1s"
                  data-wow-duration="1.4s"
                >
                  <div className="box">
                    <div className="icon">
                      <i
                        className="ion-ios-paper-outline"
                        style={{ color: "#3fcdc7" }}
                      ></i>
                    </div>
                    <h4 className="title">
                      <a href="#1">Past Events</a>
                    </h4>
                    <p className="description">

                    </p>
                  </div>
                </div>
                <div
                  className="col-md-6 col-lg-5 wow bounceInUp"
                  data-wow-delay="0.1s"
                  data-wow-duration="1.4s"
                >
                  <div className="box">
                    <div className="icon">
                      <i
                        className="ion-ios-speedometer-outline"
                        style={{ color: "#41cf2e" }}
                      ></i>
                    </div>
                    <h4 className="title">
                      <a href="#1">Upcoming Events</a>
                    </h4>
                    <p className="description">

                    </p>
                  </div>
                </div>*/}

                <div
                  className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
                  data-wow-delay="0.2s"
                  data-wow-duration="1.4s"
                >
                  <div className="box">
                    <div className="icon">
                      <i
                        className="ion-ios-world-outline"
                        style={{ color: " #d6ff22" }}
                      ></i>
                    </div>
                    <h4 className="title">
                      <a href="https://jssstuniv.in/departments-cs/#tab-5c1ba017eed61">
                        Department Acheivements
                      </a>
                    </h4>
                    <p className="description">

                    </p>
                  </div>
                </div>
                <div
                  className="col-md-6 col-lg-5 wow bounceInUp"
                  data-wow-delay="0.2s"
                  data-wow-duration="1.4s"
                >
                  <div className="box">
                    <div className="icon">
                      <i
                        className="ion-ios-clock-outline"
                        style={{ color: " #4680ff" }}
                      ></i>
                    </div>
                    <h4 className="title">
                      <a href="#1">Workshops / Conference</a>
                    </h4>
                    <p className="description">

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- #services -->

    <!--==========================
      Why Us Section
    ============================--> */}
          {/*<!--<section id="why-us" className="wow fadeIn">
            <div className="container">
              <header className="section-header">
                <h3>Department Stats</h3>
                <p>

                </p>
              </header>

              <div className="row counters">
                <div className="col-lg-3 col-6 text-center">
                  <span data-toggle="counter-up">181</span>
                  <p>Research Publications</p>
                </div>

                <div className="col-lg-3 col-6 text-center">
                  <span data-toggle="counter-up">135</span>
                  <p>Workshops Conducted</p>
                </div>

                <div className="col-lg-3 col-6 text-center">
                  <span data-toggle="counter-up">49</span>
                  <p>PHD Scholars</p>
                </div>

                <div className="col-lg-3 col-6 text-center">
                  <span data-toggle="counter-up">20</span>
                  <p>Teacher To Student ratio</p>
                </div>
              </div>
            </div>
          </section>-->*/}

          {/* <!--==========================
      Clients Section
    ============================--> */}
    {/*<!--
          <section id="testimonials" className="section-bg">
            <div className="container">
              <header className="section-header">
                <h3>Student Achievers</h3>
              </header>

              <div className="row justify-content-center">
                <div className="col-md-12">
                  <div className="owl-carousel testimonials-carousel wow fadeInUp">
                    <div className="testimonial-item">
                      <img
                        src={require("../../views/img/akhilesh.jpg")}
                        className="testimonial-img img-fluid rounded-circle"
                        alt=""
                        width="200"
                      />
                      <h3>Akhilesh Yadav</h3>
                      <h4>Indian Politician</h4>
                      <p>
                        "Akhilesh Yadav, born on 1 July 1973, is the current and
                        the 20th Chief Minister of the Indian state of Uttar
                        Pradesh. He is the youngest person to have held this
                        office. His first significant success in politics was
                        his election as a member of the Lok Sabha for the
                        constituency of Kannauj in 2000.He was born to Mulayam
                        Singh Yadav, later a Chief Minister of Uttar Pradesh,
                        and Malti Devi. He was schooled at the Dholpur Military
                        School in Rajasthan, then obtained his Bachelor's and
                        master's degrees in Civil Environmental Engineering from
                        Sri Jayachamarajendra College of Engineering (SJCE),
                        Mysuru. He also has a master's degree in environmental
                        engineering from the University of Sydney, Australia."
                      </p>
                      <p>
                        For more information:
                        <a href="https://en.wikipedia.org/wiki/Akhilesh_Yadav">
                          "https://en.wikipedia.org/wiki/Akhilesh_Yadav"
                        </a>
                      </p>
                    </div>

                    <div className="testimonial-item">
                      <img
                        src={
                          "http://www.sjcealumni.org/assets/content_files/151337948//files/shanmugam.jpg"
                        }
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Shanmugam Manjunath</h3>
                      <h4>Indian Oil Corporation Officer(Grade A)</h4>
                      <p>
                        "Shanmugam Manjunath (23 February 1978 – 19 November
                        2005) was a manager (grade A officer) for the Indian Oil
                        Corporation (IOC) who was murdered for sealing a corrupt
                        petrol station in Lakhimpur Kheri, UP. This incident
                        inspired several students at IIM, IIT and other
                        institutes culminating with the IIM students setting up
                        the "The Manjunath Shanmugam Trust". Manjunath did his
                        initial schooling from Kendriya Vidyalaya, BEML Nagar,
                        Kolar Gold Fields, Karnataka. He finished his 10th in
                        1993 and 12th std in science stream in 1995 from the
                        same school. Later on he did his Computer Science
                        Engineering degree from Sri Jayachamarajendra College of
                        Engineering, Mysore, and an MBA from Indian Institute of
                        Management Lucknow."
                      </p>
                    </div>

                    <div className="testimonial-item">
                      <img
                        src={
                          "http://www.sjcealumni.org/assets/content_files/151337948//files/Nidhi-Subbaiah.jpg"
                        }
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Nidhi Subbaiah</h3>
                      <h4>Indian Actress</h4>
                      <p>
                        "Nidhi Subbaiah (born 16 February 1987) is an Indian
                        film actress and model, who has appeared in various
                        television advertisements and in South Indian Films, she
                        rose to fame by acting in few successful Kannada movies
                        such as Pancharangi (2010) and Krishnan Marriage Story
                        (2011). Both these films brought her nominations for
                        South Filmfare Awardsand the latter film won her SIIMA
                        Special Appreciation Award-Kannada. Nidhi was born on 16
                        February 1987 in the Kodagu district of Karnataka as the
                        only child to Bollachanda Subhash Subbaiah and Jhansi
                        Subbaiah. Soon afterwards, her family later moved to
                        Gokulam in the historic city of Mysore, where she spent
                        most of her childhood and pursued her education. An
                        alumnus of St. Joseph's Central, Mysore, she went on to
                        study civil Engineering from Sri Jayachamarajendra
                        College of Engineering (SJCE), Mysore."
                      </p>
                    </div>

                    <div className="testimonial-item">
                      <img
                        src={
                          "http://www.sjcealumni.org/assets/content_files/151337948//files/Adarsh_Founder.jpg"
                        }
                        alt=""
                        className="testimonial-img"
                      />
                      <h3>B M Jayeshankar</h3>
                      <h4>Builder/Real Estate</h4>
                      <p>
                        "Coming from a modest background, Mr. B M Jayeshankar
                        always had an urge to be different. After completing his
                        Civil Engineering from Sri. Jaychamarajendra College of
                        Engineering, Mysore he decided to take a plunge in the
                        real estate sector. With a clear focus on good quality
                        and construction, Mr. Jayeshankar formed Adarsh Group in
                        1988. Combining his innovative ideas with devote
                        attitude towards accommodating customer needs along with
                        an uncompromising outlook towards quality, Adarsh has
                        been able to achieve greater heights in the past 21
                        years. Today with around 5 million sq.ft of constructed
                        space, Adarsh commands the repute of being an exclusive
                        builder delivering unprecedented superior lifestyles
                        under his command."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>-->*/}
          {/* <!-- #testimonials -->

    <!--==========================
      Team Section
    ============================--> */}
        {/* <!-- <section id="team">
            <div className="container">
              <div className="section-header">
                <h3>CLUBS</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque
                </p>
              </div>

              <div className="row no-gutters owl-carousel clubs-carousel wow fadeInUp">
                <div className="member">
                  <img
                    src={
                      "https://cdn-images-1.medium.com/max/344/1*GUnXaV_rVzuce67X__7G6w@2x.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>DSC JSSSTU</h4>
                      <span>Chief Executive Officer</span>
                      <div className="social">
                        <a href="#1">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href="#1">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href="#1">
                          <i className="fa fa-google-plus"></i>
                        </a>
                        <a href="#1">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="member">
                  <img
                    src={
                      "http://www.innovatekarnataka.com/wp-content/uploads/2015/04/02-K-tech_logo_1791x481-04.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>K-Tech</h4>
                      <span>Product Manager</span>
                      <div className="social">
                        <a href="#1">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href="#1">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href="#1">
                          <i className="fa fa-google-plus"></i>
                        </a>
                        <a href="#1">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="member text-center">
                  <img
                    src={
                      "https://samfoss15.azurewebsites.net/images/lcclogo.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>LCC SJCE</h4>
                      <span>CTO</span>
                      <div className="social">
                        <a href="#1">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href="#1">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href="#1">
                          <i className="fa fa-google-plus"></i>
                        </a>
                        <a href="#1">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="member">
                  <img
                    src={
                      "https://scontent.fblr4-2.fna.fbcdn.net/v/t1.0-9/22815067_1974239449455990_8227355219962562949_n.jpg?_nc_cat=111&_nc_oc=AQnccq1h9VYZj2QLsRLHqbdFCp76mf3xPDvnTyzPScfzgSA0ppgNnq13Kx6GnJ91yTY&_nc_ht=scontent.fblr4-2.fna&oh=0298000eb5d52a92f3fb3e2beff7b6c8&oe=5E2DF24E"
                    }
                    className="img-fluid"
                    alt=""
                  />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Sparsh Talks</h4>
                      <span>Accountant</span>
                      <div className="social">
                        <a href="#1">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href="#1">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href="#1">
                          <i className="fa fa-google-plus"></i>
                        </a>
                        <a href="#1">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>-->*/}
          {/* <!-- #team -->

    <!--==========================
      Clients Section
    ============================--> */}
          {/*<!--<section id="clients" className="section-bg">
            <div className="container">
              <div className="section-header">
                <h3>Our Recruiters</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque dere santome nida.
                </p>
              </div>

              <div className="row no-gutters clients-wrap clearfix wow fadeInUp owl-carousel company-carousel">
                <div className="client-logo">
                  <img
                    src={
                      "http://jssstuniv.in/wp-content/uploads/2017/08/placement_2.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="client-logo">
                  <img
                    src={
                      "http://jssstuniv.in/wp-content/uploads/2017/08/placement_3.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="client-logo">
                  <img
                    src={
                      "https://yt3.ggpht.com/a/AGF-l7-AXHAlBMHkxZZN2521nZp3YQ995sCWnQ0IIw=s900-c-k-c0xffffffff-no-rj-mo"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="client-logo">
                  <img
                    src={
                      "http://jssstuniv.in/wp-content/uploads/2017/08/placement_5.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="client-logo">
                  <img
                    src={
                      "http://jssstuniv.in/wp-content/uploads/2017/08/placement_6.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="client-logo">
                  <img
                    src={
                      "https://sandiegoisbetter.com/wp-content/uploads/2016/10/Tacos-and-Tech-UltimateLifeHack-Event-Intuit-Logo-Icon-1.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="client-logo">
                  <img
                    src={
                      "https://yt3.ggpht.com/a/AGF-l7-BBIcC888A2qYc3rB44rST01IEYDG3uzbU_A=s900-c-k-c0xffffffff-no-rj-mo"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="client-logo">
                  <img
                    src={
                      "http://jssstuniv.in/wp-content/uploads/2017/08/placement_9.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="client-logo">
                  <img
                    src={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH_CK5Brz0nkScXcr-blUCRbjhsngiLHAsiVCk4SjtGMozYIyw"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>-->*/}

          {/* <!--==========================
      Contact Section
    ============================--> */}
          <section id="contact">
            <div className="container-fluid">
              <div className="section-header">
                <h3>Contact Us</h3>
              </div>

              <div className="row wow fadeInUp">
                <div className="col-lg-6">
                  <div className="map mb-4 mb-lg-0">
                    <iframe
                      src={
                        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15592.149409781525!2d76.6134265!3d12.3132715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1ad797cbfc78d07a!2sJSS%20Science%20and%20Technology%20University%2C%20Mysuru.!5e0!3m2!1sen!2sin!4v1571046705180!5m2!1sen!2sin"
                      }
                      title="map"
                      frameBorder="0"
                      style={{ border: "0", width: "100%", height: "312px" }}
                      allowFullScreen
                    ></iframe>

                    <h3 className="font-weight-bold pt-3">JSS STU</h3>
                    <p class="text-justify">
                        JSS Science and Technology University is one of the recent
                        additions to the institutions administered by JSS
                        Mahavidyapeetha, and is the second University being
                        established besides a Medical University at Mysuru.
                        India’s higher education system is on the verge of major
                        reforms and JSS Science and Technology University has been
                        established envisioning to create a bright future and a
                        desired learner centric eco-system and transform into a
                        futuristic global University.
                    </p>

                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="row">
                    <div className="offset-md-2 col-md-10 info">
                      <i className="ion-ios-location-outline"></i>
                      <p>
                        JSS Science and Technology University (Formerly SJCE)
                      </p>
                    </div>
                    <div className="offset-md-2 col-md-10 info">
                      <i className="ion-ios-email-outline"></i>
                      <p>office@jssstuniv.in</p>
                    </div>
                    <div className="offset-md-2 col-md-10 info">
                      <i className="ion-ios-telephone-outline"></i>
                      <p>0821-2548285,86,87</p>
                    </div>
                  </div>

                  <div className="form">
                    <div id="sendmessage">
                      Your message has been sent. Thank you!
                    </div>
                    <div id="errormessage"></div>
                    <form action="" method="post" className="contactForm">

                        <div className="form-group ">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="name"
                            placeholder="Your Name"
                            data-rule="minlen:4"
                            data-msg="Please enter at least 4 chars"
                          />
                          <div className="validation"></div>
                        </div>
                        <div className="form-group ">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Your Email"
                            data-rule="email"
                            data-msg="Please enter a valid email"
                          />
                          <div className="validation"></div>

                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          id="subject"
                          placeholder="Subject"
                          data-rule="minlen:4"
                          data-msg="Please enter at least 8 chars of subject"
                        />
                        <div className="validation"></div>
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          name="message"
                          rows="5"
                          data-rule="required"
                          data-msg="Please write something for us"
                          placeholder="Message"
                        ></textarea>
                        <div className="validation"></div>
                      </div>
                      <div className="text-center">
                        <button type="submit" title="Send Message">
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- #contact --> */}
        </main>

        <Link to="/" className="back-to-top">
          <i className="fa fa-chevron-up"></i>
        </Link>
      </div>
    );
  }
}

export default Body;
