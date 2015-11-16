function arrayTheseKeys(obj, arrayKeys) {
  arrayKeys = arrayKeys || [];

  // Ensure if array, we map the values as well, hitting the nested objects
  if (Array.isArray(obj)) {
    return obj.map(function(val) {
      return arrayTheseKeys(val, arrayKeys);
    });

  // And if it's just a value, we know we just need to return the value back
  // to the previous call of arrayTheseKeys
  } else if (typeof obj !== "object") {
    return obj;
  }

  // Go over the keys of the object
  var keys = Object.keys(obj);
  keys.forEach(function(key) {

    // If the value is in the list of array keys, set it
    if (arrayKeys.indexOf(key) >= 0 && !Array.isArray(obj[key])) {
      var oldVal = obj[key];
      obj[key] = [oldVal];
    }

    // If the value isn't a 'value', then map over the value's keys
    // (This is why we have checks at the start of the function)
    if (typeof obj[key] === "object") {
      obj[key] = arrayTheseKeys(obj[key], arrayKeys);
    }
  });

  // At this point, the object should be fully mapped over.
  return obj;
}

if( module && module.exports ) {
  module.exports = arrayTheseKeys;
} else if( window ) {
  window.arrayTheseKeys = arrayTheseKeys;
}
