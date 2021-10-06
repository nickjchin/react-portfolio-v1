import React from "react";
import "../styles/Project.css";

function Project() {
  return (
    <div className="container-fluid m-0 project-card-group">
      <h2 className="text-center text-light p-4" id="work">Projects</h2>
      <div className="row d-flex justify-content-around p-5 ">
        {/* Card 1 */}
        <div className="col-md-4 col-sm-6 mb-4">
          <div className="card">
            <div className="card-header">Project Title</div>
            <img
              src={"http://placehold.it/400x200&text=slide1"}
              alt="boohoo"
              className="img-responsive"
            />
            <div className="card-body">
              <h5 className="card-text">Description:</h5>
              <p className="card-text">lorem</p>
              <a href="#" className="btn btn-primary">
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
            <div className="card-header">Project Title</div>
            <img
              src={"http://placehold.it/400x200&text=slide1"}
              alt="boohoo"
              className="img-responsive"
            />
            <div className="card-body">
              <h5 className="card-text">Description:</h5>
              <p className="card-text">lorem</p>
              <a href="#" className="btn btn-primary">
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
            <div className="card-header">Project Title</div>
            <img
              src={"http://placehold.it/400x200&text=slide1"}
              alt="boohoo"
              className="img-responsive"
            />
            <div className="card-body">
              <h5 className="card-text">Description:</h5>
              <p className="card-text">lorem</p>
              <a href="#" className="btn btn-primary">
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
            <div className="card-header">Project Title</div>
            <img
              src={"http://placehold.it/400x200&text=slide1"}
              alt="boohoo"
              className="img-responsive"
            />
            <div className="card-body">
              <h5 className="card-text">Description:</h5>
              <p className="card-text">lorem</p>
              <a href="#" className="btn btn-primary">
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
            <div className="card-header">Project Title</div>
            <img
              src={"http://placehold.it/400x200&text=slide1"}
              alt="boohoo"
              className="img-responsive"
            />
            <div className="card-body">
              <h5 className="card-text">Description:</h5>
              <p className="card-text">lorem</p>
              <a href="#" className="btn btn-primary">
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
            <div className="card-header">Project Title</div>
            <img
              src={"http://placehold.it/400x200&text=slide1"}
              alt="boohoo"
              className="img-responsive"
            />
            <div className="card-body">
              <h5 className="card-text">Description:</h5>
              <p className="card-text">lorem</p>
              <a href="#" className="btn btn-primary">
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
