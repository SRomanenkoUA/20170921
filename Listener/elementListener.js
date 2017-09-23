function fshowList() {
let newContent="";

}

function finsertRec() {
    let newContent="";

}
function fdeleteRec() {
    let newContent="";

}
function ffilterRec() {
    let newContent="";

}


let elShowList = document.getElementById('showList'); // оторбразить список
elShowList.addEventListener('click',fshowList, false);

let elinsertRec = document.getElementById('insertRec'); // оторбразить список
elinsertRec.addEventListener('click',finsertRec, false);

let eldeleteRec = document.getElementById('deleteRec'); // оторбразить список
eldeleteRec.addEventListener('click',fdeleteRec, false);

let elfilterRec = document.getElementById('filterRec'); // оторбразить список
elfilterRec.addEventListener('click',ffilterRec, false);