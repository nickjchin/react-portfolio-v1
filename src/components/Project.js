import React from "react";
import "../styles/Project.css";

function Project() {
  return (
    <div class="card">
      <div class="card-header">Project Title</div>
      <img src={"http://placehold.it/400x20&text=slide1"} alt="boohoo" className="img-responsive" />
      <div class="card-body">
        <h5 class="card-text">Description:</h5>
        <p class="card-text">lorem</p>
        <a href="#" class="btn btn-primary">
          Live Production
        </a>
        <a href="#" class="btn btn-primary">
          Source Code
        </a>
      </div>
    </div>
  );
}
