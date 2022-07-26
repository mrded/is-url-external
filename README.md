# Is URL External?

A simple function that tells you whether an URL is external or not.

## Usage
```javascript
import { isUrlExternal } from "./index";

isExternal('https://github.com/mrded/is-url-external', 'github.com'); // true | false
isExternal('https://github.com/mrded/is-url-external', window.location.hostname); // true | false
```
