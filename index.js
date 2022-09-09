// function saveLead() {
//     console.log("Button clicked")
// }
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el")
let diffLi = document.getElementById("diff-li")

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    renderLeads()
})


function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        listItems += "<li><a href=''>" + myLeads[i] + "</a></li>"

    }
    ulEl.innerHTML = listItems;

}

window.open(ulEl, '_blank').focus();



