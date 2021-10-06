import React from "react";
import "../styles/Project.css";

function Project() {
  return (
    <div className="container-fluid m-0 project-card-group">
      <h2 className="text-center text-light p-4" id="work">
        Projects
      </h2>
      <div className="row d-flex justify-content-around p-5 align-items-center">
        {/* Card 1 */}
        <div className="col-md-4 col-sm-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h4>Baseball Direct</h4>
            </div>
            <img
              src={"https://nickjchin.github.io/my-portfolio/assets/images/baseball-direct-snippet.PNG"}
              alt="screenshot of baseball direct"
              className="img-responsive"
            />
            <div className="card-body">
              <p className="card-text">Description:</p>
              <p className="card-text">Group project using multiple APIs and Bulma</p>
              <a href="#" className="btn btn-primary mr-1">
                Live Production
              </a>
              <a href="#" className="btn btn-primary">
                Source Code
              </a>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-md-4 col-sm-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h4>Stock Shout</h4>
            </div>
            <img
              src={"https://nickjchin.github.io/my-portfolio/assets/images/stock-shout.PNG"}
              alt="boohoo"
              className="img-responsive"
            />
            <div className="card-body">
              <p className="card-text">Description:</p>
              <p className="card-text">
                Created using with Node, Express, Sequelize, MySQL, and Handlebars. Stock Shout
                allows the user to create an account, login, save a list of apps to their watchlist,
                and view tweets and stock information
              </p>
              <a href="#" className="btn btn-primary mr-1">
                Live Production
              </a>
              <a href="#" className="btn btn-primary">
                Source Code
              </a>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="col-md-4 col-sm-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h4>Work Day Scheduler</h4>
            </div>
            <img
              src={"https://nickjchin.github.io/my-portfolio/assets/images/workday-scheduler.PNG"}
              alt="boohoo"
              className="img-responsive"
            />
            <div className="card-body">
              <p className="card-text">Description:</p>
              <p className="card-text">
                Created using third party APIs like Moment.js, Twitter-Bootstrap, and Google Fonts
              </p>
              <a href="#" className="btn btn-primary mr-1">
                Live Production
              </a>
              <a href="#" className="btn btn-primary">
                Source Code
              </a>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="col-md-4 col-sm-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h4>Weather Dashboard</h4>
            </div>
            <img
              src={"https://nickjchin.github.io/my-portfolio/assets/images/weather-dashboard.PNG"}
              alt="boohoo"
              className="img-responsive"
            />
            <div className="card-body">
              <p className="card-text">Description:</p>
              <p className="card-text">
                Created using server-side API from OpenWeather API to display the current weather
                and 5 day forecasts for selected cities
              </p>
              <a href="#" className="btn btn-primary mr-1">
                Live Production
              </a>
              <a href="#" className="btn btn-primary">
                Source Code
              </a>
            </div>
          </div>
        </div>
        {/* Card 5 */}
        <div className="col-md-4 col-sm-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h4>Note Taker</h4>
            </div>
            <img
              src={"https://nickjchin.github.io/my-portfolio/assets/images/note-taker.PNG"}
              alt="boohoo"
              className="img-responsive"
            />
            <div className="card-body">
              <p className="card-text">Description:</p>
              <p className="card-text">
                Created using HTML, CSS, Bootstrap, Node and Express. Note Taker is hosted on Heroku
                and the app allows the user to create and notes.
              </p>
              <a href="#" className="btn btn-primary mr-1">
                Live Production
              </a>
              <a href="#" className="btn btn-primary">
                Source Code
              </a>
            </div>
          </div>
        </div>
        {/* Card 6 */}
        <div className="col-md-4 col-sm-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h4>Team Profile Generator</h4>
            </div>
            <img
              src={"https://nickjchin.github.io/my-portfolio/assets/images/team-profile-genertor.PNG"}
              alt="boohoo"
              className="img-responsive"
            />
            <div className="card-body">
              <p className="card-text">Description:</p>
              <p className="card-text">
                Created using with Node, HTML, CSS, and Bootstrap. Team Profile Generator is a
                command-line application that accepts user input to generate their team members and
                information
              </p>
              <a href="#" className="btn btn-primary mr-1">
                Live Production
              </a>
              <a href="#" className="btn btn-primary">
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
