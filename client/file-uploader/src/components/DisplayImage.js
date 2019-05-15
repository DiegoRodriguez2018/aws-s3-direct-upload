import React, { Component } from 'react';
import axios from 'axios';

export default class DisplayImage extends Component {
  state = {};
  componentDidMount() {}

  formHandler = e => {
    e.preventDefault();
    const filename = document.querySelector('#filename').value;

    const generateGetUrl = 'http://localhost:3500/generate-get-url';
    const options = {
      params: {
        Key: filename,
        ContentType: 'image/jpeg'
      }
    };

    axios.get(generateGetUrl, options).then(res => {
      const { data: getURL } = res;
      this.setState({ getURL });
    });
  };
  render() {
    const { getURL } = this.state;
    console.log('getURL', ': ', getURL);

    return (
      <React.Fragment>
        <h1>Preview Image from AWS S3 Bucket</h1>

        <form onSubmit={this.formHandler}>
          <label> Image name:</label>
          <input id='filename' />
          <p>
            <i>Image name must include the extension, eg. cat.jpeg</i>
          </p>
          <button>Load</button>
        </form>

        <div className='preview-container'>
          {getURL && (
            <React.Fragment>
              <div className='preview'>
                <img
                  id='show-picture'
                  src={getURL.getURL}
                  alt='stored in AWS'
                />
              </div>
            </React.Fragment>
          )}
        </div>
      </React.Fragment>
    );
  }
}
