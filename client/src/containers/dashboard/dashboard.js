import React, { Component } from "react";
// import { Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./dashboard.css";
import Footer from "../landing/Footer";
import Axios from "axios";
import { apiBaseUrl } from "../../constants";
import ChangePasswordModal from "./changePasswordModal/changePasswordModal";


class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      subjects: [],
      "baseUrl": apiBaseUrl,
      isChangePasswordModalOpen: false
      // "baseUrl": "http://localhost:4000",
    };
  }

  publications = event => {
    event.preventDefault();
    this.props.history.push({
      pathname: "/dashboard/publications"
    });
  };

  researchs = event => {
    event.preventDefault();
    this.props.history.push({
      pathname: "/dashboard/researchs"
    });
  };

  awards = event => {
    event.preventDefault();
    this.props.history.push({
      pathname: "/dashboard/awards"
    });
  };

  trainingConducted = event => {
    event.preventDefault();
    this.props.history.push({
      pathname: "/dashboard/training/conducted"
    });
  };

  trainingAttended = event => {
    event.preventDefault();
    this.props.history.push({
      pathname: "/dashboard/training/attended"
    });
  };

  subject = event => {
    event.preventDefault();
    this.props.history.push({
      pathname: "/dashboard/subject",
    });
  };

  documents = event => {
    event.preventDefault();
    this.props.history.push({
      pathname: "/dashboard/documents",
    })
  }
  
  toggleChangePasswordModal = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        isChangePasswordModalOpen: !prevState.isChangePasswordModalOpen
      }
    })
  }

  componentDidMount() {
    Axios.get(this.state.baseUrl + '/subject/' + this.props.user._id)
      .then(subjects => {
        // console.log(subjects);
        this.setState({ subjects: subjects.data })
        // console.log(this.state.Subjects)
      })
  }

  componentDidUpdate() { }

  onDummyHandler = () => {
    console.log("Card Clicked");
  };

  render() {
    const subjects = this.state.subjects;
    return (
      <>
        <ChangePasswordModal isOpen={this.state.isChangePasswordModalOpen} toggleOpen={this.toggleChangePasswordModal} />
        <div className="Dashboard  mt-2">
          <div className="container mt-4">
            <div className="box well">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={this.props.user.image}
                    alt=""
                    className="img-fluid mx-auto rounded-circle"
                  />
                </div>
                <div className="col-md-8">
                  <h2>{this.props.user.name}</h2>
                  <p>
                    <strong>About: </strong>
                    {this.props.user.designation.split("_").join(" ")}
                  </p>
                  <p>
                    <strong>Subjects Handled: </strong>
                    {
                      subjects.map(subject => (
                        <span key={subject._id}><span className="tags">{subject.code}</span> <span> </span></span>
                      ))
                    }
                  </p>
                </div>
              </div>
            </div>
            <section id="dashboard" className="section-bg">
              <div className="row">
                <div className="col-md-6 col-lg-5 offset-lg-1">
                  <div className="box" onClick={this.publications}>
                    <div className="icon">
                      <i className="fa fa-pencil card-img-top"></i>
                    </div>
                    <h4 className="title">
                      <a href={this.onDummyHandler} onClick={this.publications}>Publications</a>
                    </h4>
                  </div>
                </div>
                <div className="col-md-6 col-lg-5">
                  <div className="box" onClick={this.researchs}>
                    <div className="icon">
                      <i className="fas fa-search card-img-top"></i>
                    </div>
                    <h4 className="title">
                      <a href={this.onDummyHandler}>Research Projects</a>
                    </h4>
                  </div>
                </div>

                <div className="col-md-6 col-lg-5 offset-lg-1">
                  <div className="box" onClick={this.awards}>
                    <div className="icon">
                      <i className="fa fa-trophy " aria-hidden="true"></i>                  </div>
                    <h4 className="title">
                      <a href={this.onDummyHandler}>Achievments & Awards</a>
                    </h4>
                  </div>
                </div>
                <div className="col-md-6 col-lg-5">
                  <div className="box" onClick={this.subject}>
                    <div className="icon">
                      <i className="fas fa-chalkboard-teacher card-img-top"></i>
                    </div>
                    <h4 className="title">
                      <a href={this.onDummyHandler}>Subjects Handled</a>
                    </h4>
                  </div>
                </div>

                <div className="col-md-6 col-lg-5 offset-lg-1">
                  <div className="box" onClick={this.trainingConducted}>
                    <div className="icon">
                      <i className="fas fa-chalkboard card-img-top"></i>
                    </div>
                    <h4 className="title">
                      <a href={this.onDummyHandler}>
                        Trainings & Workshops Conducted
                    </a>
                    </h4>
                  </div>
                </div>
                <div className="col-md-6 col-lg-5">
                  <div className="box" onClick={this.trainingAttended}>
                    <div className="icon">
                      <i className="fas fa-school card-img-top"></i>
                    </div>
                    <h4 className="title">
                      <a href={this.onDummyHandler}>
                        Trainings & Workshops Attended
                    </a>
                    </h4>
                  </div>
                </div>
                <div className="col-md-6 col-lg-5 offset-lg-1">
                  <div className="box" onClick={this.documents}>
                    <div className="icon">
                      <i className="fas fa-file card-img-top"></i>
                    </div>
                    <h4 className="title">
                      <a href={this.onDummyHandler}>
                        Documents
                    </a>
                    </h4>
                  </div>
                </div>
                <div className="col-md-6 col-lg-5">
                  <div className="box" onClick={this.toggleChangePasswordModal}>
                    <div className="icon">
                      <i className="fas fa-lock card-img-top"></i>
                    </div>
                    <h4 className="title">
                      <a href={this.onDummyHandler}>
                        Change Password
                    </a>
                    </h4>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default (withRouter(Dashboard));
