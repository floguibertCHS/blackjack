/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/
function handValue(hand) {
  var result = 0;
  var ace = 0;
  for (let i = 0; i < hand.length; i++) {
    // console.log(hand[i]);
    if (hand[i] === 'K' || hand[i] === 'Q' || hand[i] === 'J') {
      // console.log("im a face card");
      // console.log(hand[i]);
      result += 10;
      // console.log(result);
    } else if (hand[i] === 'A') {
      // console.log("im a face card");
      // console.log(hand[i]);
      result += 11;
      ace += 1;
    } else {
      // console.log("im a value card");
      // console.log(hand[i]);
      result += parseInt(hand[i]);
      // console.log(result);
    }
        while (result > 21) {
          if (ace >= 1) {
            result -= 10;
            ace -= 10;
          }
        }
      }
  console.log(result);
  return result;
    }

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11
