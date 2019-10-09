import React from "react";

export function Topiccards({ uuid, name, sidea, sideb, image, description }) {
  return (
    <div className="toppolls">
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={image} className="card-img" alt="" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="card-title">
                <h3>{name}</h3>
                <h6>
                  {description}
                </h6>
              </div>
              <p className="card-text" />
              <p className="card-text">
                <small className="text-muted">
                  <div className="buttoncontent">
                    <a href={`/poll?uuid=${uuid}`} className="btn btn-light">
                      <div className="toppoll-link">GO TO TOPPOLL</div>
                    </a>
                  </div>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
