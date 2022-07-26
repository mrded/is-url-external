# Is URL External?

A simple function that tells you whether an URL is external or not.

## Usage
```javascript
import { isUrlExternal } from "./index";

isUrlExternal('https://github.com/mrded/is-url-external', 'github.com'); // false 

const isExternal = (url: string) => isUrlExternal(url, window.location.hostname);
isExternal('https://github.com/mrded/is-url-external'); // true | false
```
