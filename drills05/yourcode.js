

function populateRecords(arr){
    const tbl = document.querySelector('#testArea table')
    let row = document.createElement("tr")
    
    let obj = {
        "charge": 0,
        "cash advance": 0
    }

    arr.forEach(x => {
        for (const prop in x) {
            let cell = document.createElement("td")
            cell.textContent = x[prop]
            row.append(cell)
        }
        tbl.append(row)
    })
    console.log(tbl)

    arr.forEach(x => {
        if (x.type === "charge") obj["charge"] += Number(x.amount)
        if (x.type === "cash advance") obj["cash advance"] += Number(x.amount)
    });
    return obj
}


