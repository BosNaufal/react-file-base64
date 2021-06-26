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
Does your component support multiple files?

##### resetFlag (Boolean) (option)
Description: reset the `FileBase` component state. 

Update the `resetFlag` to `!resetFlag` can tigger the reset function.

Usage: Update the `resetFlag` variable in `FileBase64` parent component and pass `resetFlag` to `FileBase64` component as a props

Your parent component shoud like this:
```jsx
// add state in parent component
const [resetFlag, setResetFlag] = useState(false);

// add reset function in parent component
// call this function if you want reset the FileBase component
const reset = () => {
  setResetFlag(!resetFlag);
}

// send the resetFlag props to FileBase component
return (
  <div >
    <FileBase resetFlag={resetFlag} onDone={uploadFile} /> 
  </div>
)

```

##### onDone (Function)
Callback function when all files have been processed


## Thank You for Making this useful~

## Let's talk about some projects with me
Just Contact Me At:
- Email: [bosnaufalemail@gmail.com](mailto:bosnaufalemail@gmail.com)
- Skype Id: bosnaufal254
- twitter: [@BosNaufal](https://twitter.com/BosNaufal)

## License
[MIT](http://opensource.org/licenses/MIT)
Copyright (c) 2016 - forever Naufal Rabbani
