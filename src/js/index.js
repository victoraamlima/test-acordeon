// console.log("helggo

let accordions = document.getElementsByClassName("close")

console.log(accordions)

function openCloseAccordion(button) {

    // if (button === 0) 
    // console.log(this.name)
    console.log(accordions[button].classList)
    console.log(accordions[button].classList.length)

    // console.log(accordions

    if (accordions[button].classList.length == 1) {
        // accordions[button].classList.add("close")
        console.log("hello")
    }

    accordions[button].classList.remove("close")

    console.log(accordions[button].classList.length)

    // } if (button === 1) {
    //     console.log("1")


    // } if (button === 2) {
    //     console.log("2")


    // }
}