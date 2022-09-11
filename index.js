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
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
})


function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li>
        <a target = '_blank' href='${myLeads[i]}'> ${myLeads[i]} </a>
        </li>`

    }
    ulEl.innerHTML = listItems;

}





