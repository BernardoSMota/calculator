const screen = document.getElementById('p-screen')
var active = null
var value1 = null
function get_text(button){
    if (button.innerText == "AC"){
        screen.innerText = "0"
        // active = null
    }

    if (button.innerText == "C"){
        if(screen.innerText.length == 1){
            screen.innerText = '0'
        }
        else{
            screen.innerText = screen.innerText.slice(0, -1)
        } 
    }

    if (screen.innerText.length < 10){
        if (button.innerText == "%"){
            screen.innerText = Number(screen.innerText) / 100
        }

        else if (button.className.includes('number-button')){
            console.log(active)

            if (active == null){
                screen.innerText == `0` ? screen.innerText = button.innerText : screen.innerText += button.innerText
            }

            else{
                value1 = Number(screen.innerText)
                screen.innerText = button.innerText
                active = null
            }
        }
    }

    if (button.innerText == `.`){
        if  (!screen.innerText.includes(`.`)){
            screen.innerText += `.`
        }
    }

    if (button.className.includes(`operation-button`)){
        active = button.innerText
        operation = button.innerText
        console.log(active)    
    }        

    if (button.className.includes(`inverse-button`)){
        screen.innerText = Number(screen.innerText) * -1
    }

    if (button.className.includes(`equal-button`)){
        var value2 = Number(screen.innerText)

        switch(operation){
            case `÷`:
                screen.innerText = value1 / value2
                break
            case `x`:
                screen.innerText = value1 * value2
                break
            case `+`:
                screen.innerText = value1 + value2
                break
            case `-`:
                screen.innerText = value1 - value2
        }
    }
}


function isNumber(n){
    return Number(n) == n
}