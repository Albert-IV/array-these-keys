# array-these-keys
Force a set of keys to be an array


### Usage

Inside Node.js

```javascript
var arrayThese = require('array-these-keys');
var someObj = { keyToArray: "value", anotherKey: "anotherValue" };

require('assert').deepEqual(
  { keyToArray: ["value"], anotherKey: "anotherValue" },
  arrayThese(someObj, ['keyToArray']);
);

```

Inside the Browser

```html
<!DOCTYPE html>
<html>
<body>
  <script src="arrayify.js"></script>
  <script type="text/javascript">
    var someObj = { keyToArray: "value", anotherKey: "anotherValue" };
    var converted = window.arrayTheseKeys(someObj, ['keyToArray']);

    // This is true
    // JSON.stringify(converted) == JSON.stringify({ keyToArray: ["value"], anotherKey: "anotherValue" })
  </script>  
</body>
</html>
```
