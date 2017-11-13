# Code War Solutions

Code Wars Solutions is a Node.js CLI for running and testing Code War challenges and solutions.

### Run the Code War solution:

Each Code War solution is a function that takes the function as an argument and another argument that is passed into the function.  The following are the Code War functions and how to run these in the CLI:

[Extract the domain name from a URL](https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript) -
```bash
npm run start extractDomain [url]
```

[Break camelCase](https://www.codewars.com/kata/break-camelcase/train/javascript) -
```bash
npm run start camelCase [string]
```

[Roman Numeral Encoder](https://www.codewars.com/kata/roman-numerals-encoder/train/javascript) -
```bash
npm run start rNumeralEncoder [number]
```

[Range Extraction](https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript)
```bash
npm run start rangeExtract [array of ordered numbers]
```

[Daily Calorie Requirement](https://www.codewars.com/kata/daily-calorie-requirement/train/javascript)
```bash
npm run start dCalReq '[name, gender (m/f), age (y), height (cm), weight (kg), activity level]'
```
* Activity Levels: ```little activity```, ```moderately active```, ```very active```, ```extremely active```


### Running tests

To run tests use the following CLI command:

```bash
npm run test
```
