import React from "react";
import { Card } from "react-bootstrap";

export function BriefInfo() {
  return (
    <div className="briefer">
      <div className="row">
        <div className="col-8">
          <div className="topic-text">
            <h1>Pick your poison</h1>
            <h3>Just choose the topic you want to debate on and begin!!</h3>
          </div>
        </div>
        <div className="col-8">
          <div className="topic-image">
            <img src="https://media.giphy.com/media/jFrkAItzRyZsA/giphy.gif" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <div className="topic-image">
            <img src="https://media0.giphy.com/media/Eq3UZDvFalEiwh5Raj/source.gif" />
          </div>
        </div>
        <div className="col-8">
          <div className="topic-text">
            <h1>Suggest something</h1>
            <h3>If you have a topic that you want to see here, let us know about it!!</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <div className="topic-text">
            <h1>Pick your side</h1>
            <h3>With our poll system, you'll be able to pick your side on a Toppoll </h3>
          </div>
        </div>
        <div className="col-8">
          <div className="topic-image">
            <img src="https://media.giphy.com/media/TFUGLiAZFJzZGaLh4J/giphy.gif" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <div className="topic-image">
            <img src="https://media.giphy.com/media/5WfZuc1xpMfEdbmfqx/giphy.gif" />
          </div>
        </div>
        <div className="col-8">
          <div className="topic-text">
            <h1>Spread the word</h1>
            <h3>Share this site on social media or any other comunication platforms</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
