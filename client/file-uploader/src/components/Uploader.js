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
    const url = 'http://localhost:3500/file-upload';

    const file = this.file;
    const fileName = file.name;

    const config = {
      params: {
        Key: fileName,
        ContentType: 'image/jpeg'
      }
    };

    axios.get(url, config).then(res => {
      const {
        data: { putUrl }
      } = res;
      const s3PutUrl = putUrl;
      const options = {
        headers: {
          'Content-Type': 'image/jpeg'
        }
      };

      axios
        .put(s3PutUrl, file, options)
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
