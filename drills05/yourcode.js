

function populateRecords(arr){
    let testArea = document.querySelector('#testArea')
    var tbl = document.createElement("table")
    let row = document.createElement("tr")
    row.insertAdjacentHTML("afterbegin", "<th>TYPE</th>")
    row.insertAdjacentHTML("beforeend", "<th>SOURCE</th>")
    row.insertAdjacentHTML("beforeend", "<th>AMOUNT</th>")
    row.classList.add("transactionRecord")
    tbl.append(row)

    row.childNodes[0].classList.add("transactionType")
    row.childNodes[1].classList.add("transactionLocation")
    row.childNodes[2].classList.add("transactionAmount")
    let obj = {
        "charge": 0,
        "cash advance": 0
    }

    arr.forEach(x => {
        let row = document.createElement("tr") 
        for (const prop in x) {
            let cell = document.createElement("td")
            cell.textContent = x[prop]
            row.append(cell)
        }
        tbl.append(row)
    })
    testArea.append(tbl)

    arr.forEach(x => {
        if (x.type === "charge") obj["charge"] += Number(x.amount)
        if (x.type === "cash advance") obj["cash advance"] += Number(x.amount)
    });
    return obj
}


