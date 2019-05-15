import React, { Component } from 'react';
import axios from 'axios';

export default class Uploader extends Component {
  state = {};

  getImage = e => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      this.setState({ file });
    }
  };

  uploadFile = e => {
    e.preventDefault();
    console.log('Uploading....');
    const { file } = this.state;

    const contentType = file.type; // eg. image/jpeg or image/svg+xml

    const generatePutUrl = 'http://localhost:3500/generate-put-url';
    const options = {
      params: {
        Key: file.name,
        ContentType: contentType
      },
      headers: {
        'Content-Type': contentType
      }
    };

    axios.get(generatePutUrl, options).then(res => {
      const {
        data: { putURL }
      } = res;

      console.log({ putURL, file, options });

      axios
        .put(putURL, file, options)
        .then(res => {
          console.log('Success');
          console.log('res', ': ', res);
        })
        .catch(err => {
          console.log('err', err);
        });
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Upload an image to AWS S3 bucket</h1>
        <input
          id='upload-image'
          type='file'
          accept='image/*'
          onChange={this.getImage}
        />

        <form onSubmit={this.uploadFile}>
          <button id='file-upload-button'>Upload</button>
        </form>
      </React.Fragment>
    );
  }
}
