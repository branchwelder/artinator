# Getting Started with Create React App

### Remove Unnecessary Things from Create React App

You see a page that says "edit src/App.js and save to reload." That's exactly
what we're going to do!

I removed:

- public/

  - favicon.ico
  - logo192.png
  - logo512.png
  - manifest.json
  - robots.txt

- src/
  - App.test.js
  - logo.svg
  - setupTests.js
  - reportWebVitals.js

I modified `index.js` to read:

```javascript
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

I modified `App.js` to read:

```javascript
import "./App.css";

function App() {
  return <div className='appContainer'>Hello world!</div>;
}

export default App;
```

I modified `App.css` to read:

```css
.appContainer {
  text-align: center;
  background-color: rgb(66, 66, 66);
  color: white;
  height: 100rem;
}
```

I modified `public/index.html` to read:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

Now, we have a much simpler starting point to talk about backends. You don't
necessarily want to remove all of these things in your own projects, but I think
it will help us focus on what is going on.

## Make a backend

`python -m pip install flask`

In your backend folder, make a file called `app.py`. Paste the following starter
code inside of it:

```python
from flask import Flask

app = Flask(__name__)


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"
```

cd into your backend folder, and run `python -m flask run` You can navigate to
`http://127.0.0.1:5000/` and see your site!
