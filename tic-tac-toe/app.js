const btn = document.querySelector('.new_game_btn')
const gameBoard = document.querySelector('.game')
const boardSquare = document.querySelectorAll('.board_square')
const game = document.querySelector('.game')
const squaresArray = [...document.querySelectorAll('.board_square')];
const refreshBtn = document.querySelector('.refresh_btn')
let count = 0;


refreshBtn.onclick = function () {
    window.location.reload()
}
btn.onclick = function () {
    btn.disabled = true
    gameBoard.style = `
    height: 300px;
    width: 300px;
    transition: 0.5s;
    text-align: center;
    `
    game.style = `
    transition: 0.5s;
    `
    boardSquare.forEach((item) => {
        item.style = `
        text-align: center;
        width: 100px;
        border: 1px solid black;
        height: 100px;
        grid-auto-rows: 100px;
        transition: 0.8s
        `
        })

}

for (let square of squaresArray) {
    square.onclick = function () {
        count++
        if(count % 2 !== 0) this.innerHTML = 'X'
        else this.innerHTML = 'O'
        if( squaresArray[0].innerHTML === 'X'
            && squaresArray[1].innerHTML  === 'X'
            && squaresArray[2].innerHTML === 'X') {
            setTimeout(() => {
                game.style = `
                background: black;
                color: white;
                display: flex;
                justify-content: center;
                `
                game.innerHTML = 'PLAYER ONE WINS'
            },100)
        }
        if( squaresArray[3].innerHTML === 'X'
            && squaresArray[4].innerHTML  === 'X'
            && squaresArray[5].innerHTML === 'X') {
            setTimeout(() => {
                game.style = `
                background: black;
                color: white;
                display: flex;
                justify-content: center;
                `
                game.innerHTML = 'PLAYER ONE WINS'
            },100)
        }
        if( squaresArray[2].innerHTML === 'X'
            && squaresArray[5].innerHTML  === 'X'
            && squaresArray[8].innerHTML === 'X') {
            setTimeout(() => {
                game.style = `
                background: black;
                color: white;
                display: flex;
                justify-content: center;
                `
                game.innerHTML = 'PLAYER ONE WINS'
            },100)
        }
        if( squaresArray[6].innerHTML === 'X'
            && squaresArray[7].innerHTML  === 'X'
            && squaresArray[8].innerHTML === 'X') {
            setTimeout(() => {
                game.style = `
                background: black;
                color: white;
                display: flex;
                justify-content: center;
                `
                game.innerHTML = 'PLAYER ONE WINS'
            },100)
        }
        if( squaresArray[0].innerHTML === 'X'
            && squaresArray[3].innerHTML  === 'X'
            && squaresArray[6].innerHTML === 'X') {
            setTimeout(() => {
                game.style = `
                background: black;
                color: white;
                display: flex;
                justify-content: center;
                `
                game.innerHTML = 'PLAYER ONE WINS'
            },100)
        }
        if( squaresArray[1].innerHTML === 'X'
            && squaresArray[4].innerHTML  === 'X'
            && squaresArray[7].innerHTML === 'X') {
            setTimeout(() => {
                game.style = `
                background: black;
                color: white;
                display: flex;
                justify-content: center;
                `
                game.innerHTML = 'PLAYER ONE WINS'
            },100)
        }
        if( squaresArray[0].innerHTML === 'X'
            && squaresArray[4].innerHTML  === 'X'
            && squaresArray[8].innerHTML === 'X') {
            setTimeout(() => {
                game.style = `
                background: black;
                color: white;
                display: flex;
                justify-content: center;
                `
                game.innerHTML = 'PLAYER ONE WINS'
            },100)
        }
        if( squaresArray[2].innerHTML === 'X'
            && squaresArray[4].innerHTML  === 'X'
            && squaresArray[6].innerHTML === 'X') {
            setTimeout(() => {
                game.style = `
                background: black;
                color: white;
                display: flex;
                justify-content: center;
                `
                game.innerHTML = 'PLAYER ONE WINS'
            },100)
        }
        if( squaresArray[0].innerHTML === 'O'
            && squaresArray[1].innerHTML  === 'O'
            && squaresArray[2].innerHTML === 'O') {
            setTimeout(() => {
                game.style = `
                background: black;
                color: white;
                display: flex;
                justify-content: center;
                `
                game.innerHTML = 'PLAYER TWO WINS'
            },100)
        }
        if( squaresArray[3].innerHTML === 'O'
            && squaresArray[4].innerHTML  === 'O'
            && squaresArray[5].innerHTML === 'O') {
            setTimeout(() => {
                game.style = `
                background: black;
                color: white;
                display: flex;
                justify-content: center;
                `
                game.innerHTML = 'PLAYER TWO WINS'
            },100)
        }
        if( squaresArray[2].innerHTML === 'O'
            && squaresArray[5].innerHTML  === 'O'
            && squaresArray[8].innerHTML === 'O') {
            setTimeout(() => {
                game.style = `
                background: black;
                color: white;
                display: flex;
                justify-content: center;
                `
                game.innerHTML = 'PLAYER TWO WINS'
            },100)
        }
        if( squaresArray[6].innerHTML === 'O'
            && squaresArray[7].innerHTML  === 'O'
            && squaresArray[8].innerHTML === 'O') {
            setTimeout(() => {
                game.style = `
                background: black;
                color: white;
                display: flex;
                justify-content: center;
                `
                game.innerHTML = 'PLAYER TWO WINS'
            },100)
        }
        if( squaresArray[0].innerHTML === 'O'
            && squaresArray[3].innerHTML  === 'O'
            && squaresArray[6].innerHTML === 'O') {
            setTimeout(() => {
                game.style = `
                background: black;
                color: white;
                display: flex;
                justify-content: center;
                `
                game.innerHTML = 'PLAYER TWO WINS'
            },100)
        }
        if( squaresArray[1].innerHTML === 'O'
            && squaresArray[4].innerHTML  === 'O'
            && squaresArray[7].innerHTML === 'O') {
            setTimeout(() => {
                game.style = `
                background: black;
                color: white;
                display: flex;
                justify-content: center;
                `
                game.innerHTML = 'PLAYER TWO WINS'
            },100)
        }
        if( squaresArray[0].innerHTML === 'O'
            && squaresArray[4].innerHTML  === 'O'
            && squaresArray[8].innerHTML === 'O') {
            setTimeout(() => {
                game.style = `
                background: black;
                color: white;
                display: flex;
                justify-content: center;
                `
                game.innerHTML = 'PLAYER TWO WINS'
            },100)
        }
        if( squaresArray[2].innerHTML === 'O'
            && squaresArray[4].innerHTML  === 'O'
            && squaresArray[6].innerHTML === 'O') {
            setTimeout(() => {
                game.style = `
                background: black;
                color: white;
                display: flex;
                justify-content: center;
                `
                game.innerHTML = 'PLAYER TWO WINS'
            },100)
        }
        else if(squaresArray[0].innerHTML
            && squaresArray[1].innerHTML
            && squaresArray[2].innerHTML
            && squaresArray[3].innerHTML
            && squaresArray[4].innerHTML
            && squaresArray[5].innerHTML
            && squaresArray[6].innerHTML
            && squaresArray[7].innerHTML
            && squaresArray[8].innerHTML) {
            game.style = `
                background: black;
                color: white;
                display: flex;
                justify-content: center;
                `
            game.innerHTML = 'NO ONE WINS'
        }
    }

}




