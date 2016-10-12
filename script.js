// javascript models

var turn = 'O'
var board = ['', '', '', '', '', '', '', '', '']
var win = false
var tie = false

// model update
// board[4] = '0'

// if you were to update view directly
// var square = document.querySelectorAll('.square')
// squares[4].textContent="0"


//draw board from model

function  draw() {
  var squares = document.querySelectorAll('.square')
  for (var i=0; i < squares.length; i++) {
      squares[i].textContent = board[i]
    }

    // changes turn
    document.querySelector('#turn').textContent = turn

    if (win) {
      document.querySelector('#result').textContent = win + 'Wins!'
    }
    else if (tie) {
      document.querySelector('#result').textContent = "Cats Game"
    }
}
//have to call function
draw()

//return 'X' if x Wins, '0' if 0 wins, "tie" if tie, false if none

function winCheck (){
  var winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    ]

    //win check
    for (var i=0; i < winCombos.length; i++) {
      var winCombo = winCombos[i]
      // if (board !== (winCombos[0,1,2,3,4,5,6,7])){
        var square1 = board[winCombo[0]]
        var square2 = board[winCombo[1]]
        var square3 = board[winCombo[2]]
        console.log(square1, square2, square3)

        if (square1 !== '' && square1 === square2 && square2 === square3){
              win = square1
        }

    }

         // tie check
         if (!win) {
          tie = true
          for (var i=0; i < board.length; i++) {
            if(board[i] === '') {
              tie = false
          }

         }
      }

    }


winCheck()

// capture user input aka:
//set event listeners for squares

var squares = document.querySelectorAll('.square')
for (var i=0; i < squares.length; i++) {
  // e = event object, can call it whatever you want
  squares[i].addEventListener('click', function (e) {
    // Handle user action logic
    // figure out index of square the was clicked
    var index = 0
    for (var j=0; j < squares.length; j++) {
      if (squares[j] === e.target) {
        index = j
      }
    }

    // exit function if square has already been clicked
      if (board[index] !== "") {
        return false
      }


      //model updates
      //index = number from 0 to 8
      //turn = 'X' or 'O'
      //update board

      board[index] = turn

      //check for win

      winCheck()


      // change turn
      if ( turn === 'X') {
        turn = 'O'
      }

      else {
        turn = 'X'
      }


      draw()
  })
}



//view update









