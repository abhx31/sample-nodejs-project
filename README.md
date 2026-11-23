# greenbranch-sample

A small Node.js project with three planted bugs, for testing GreenBranch.

```bash
npm install
npm test
```

Three of the seven tests fail:

| Test | Bug |
|------|-----|
| `add returns the sum of two numbers` | `add` subtracts (`src/calc.js`) |
| `average returns the mean of a list` | `average` divides by `length - 1` (`src/calc.js`) |
| `capitalize uppercases the first letter` | `capitalize` keeps the first letter twice (`src/strings.js`) |

The tests are correct; the fixes belong in `src/calc.js` and `src/strings.js`.

In GreenBranch, choose **Node.js**, with install command `npm install` and test command `npm test`.
