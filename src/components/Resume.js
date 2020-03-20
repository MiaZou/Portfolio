import React from 'react';

class Resume extends React.Component {
  render() {
    return (
      <div className="resume">
        <iframe src="/resume.pdf" width="100%" height="2500px">Resume</iframe>
      </div>
    );
  }
};

export default Resume;