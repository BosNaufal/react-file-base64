# React File Base64
[React](http://facebook.github.io/react) Component for Converting Files to base64. It's based on [Dev Mozilla Website](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL)

[DEMO](https://rawgit.com/BosNaufal/react-file-base64/master/index.html)


## Install
You can import [react-file-base64.js](./src/js/components/react-file-base64.js) to your react component file like [this](./src/js/components/app.js) and process it with your preprocessor.

You can install it via NPM
```bash
npm install react-file-base64
```


## Usage
```javascript

import React from 'react';
import ReactDOM from 'react-dom';

import FileBase64 from 'react-file-base64';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      files: []
    }
  }

  // Callback~
  getFiles(files){
    this.setState({ files: files })
  }

  render() {
    return (
      <FileBase64
        multiple={ true }
        onDone={ this.getFiles.bind(this) } />
    )
  }

}


ReactDOM.render(<App />, document.getElementById("app"))

```

## Props
##### multiple (Boolean)
Is your component support multiple file?

##### onDone (Function)
Callback Function When all files have been proceed


## Thank You for Making this useful~

## Let's talk about some projects with me
Just Contact Me At:
- Email: [bosnaufalemail@gmail.com](mailto:bosnaufalemail@gmail.com)
- Skype Id: bosnaufal254
- twitter: [@BosNaufal](https://twitter.com/BosNaufal)

## License
[MIT](http://opensource.org/licenses/MIT)
Copyright (c) 2016 - forever Naufal Rabbani
