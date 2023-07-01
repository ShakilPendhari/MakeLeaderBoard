# Make a Leaderboard

<br/>
<br/>

**You need to install this package**
```npm i make_leaderboard```
<br/>

**You need to import from package**
```const makeLeaderBoard = require("make_leaderboard")```
<br/>

**Now you need to give parameters as a 2d array with name(String) and marks(number) in that package**
```const LeaderBoard = makeLeaderBoard([["rancho", 45],["chatur", 32],["raju", 30],["farhan", 28],["virus", 32],["joy", 45]])
console.log(LeaderBoard)```

<br/>

**Final output will look like**
```[
  [ 1, 'joy' ],
  [ 1, 'rancho' ],
  [ 3, 'chatur' ],
  [ 3, 'virus' ],
  [ 5, 'raju' ],
  [ 6, 'farhan' ]
]```