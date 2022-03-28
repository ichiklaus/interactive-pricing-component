import React, { Component } from "react";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.myInfo.author.username,
    };
  }

  render() {
    return (
        <footer>
          <span className="social-links">
            <span className="copyright">@{this.state.username}</span> on
            <span className="social">
              <a
                href={`http://Instagram.com/${this.state.username}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {""}
                Instagram
              </a>{" "}
              |
              <a
                href={`http://github.com/${this.state.username}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {""}
                Github
              </a>{" "}
              |
              <a
                href={`http://frontendmentor.io/profile/${this.state.username}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {""}
                Frontend Mentor
              </a>
            </span>
          </span>
        </footer>
    );
  }
}
