# Belt

Minimal Lodash-like utilities.

Purpose: To avoid installing Lodash in favor of "babel" ESNext features (like `map`, `filter`, `reduce`) but at the same time making available some missing features.

### List of methods:
- compact (`array`) => (`array`)
- get (`obj`, `key`, `defaultValue`) => (`any`)
- has (`obj`, `key`) => (`boolean`)
- last (`array`) => (`any`)
- omit (`object`, `[keys]`) => (`object`)
- pick (`object`, `[keys]`) => (`object`)
- random (low `number`, high `number`) => (`number`)
- range (low `number`, high `number`) => (`array`)
- sample (`array`) => (`any`)
- uid (strLength `number`) => (`string`)
- uniq (`array`) => (`array`)

### Usage
```javascript
import _ from '@jmaguirrei/belt';
const array = [ 1, 2, 3, 4 ];
console.log(_.last(array)) // 4
```
