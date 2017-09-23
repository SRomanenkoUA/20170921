function showList() {
let newContent="";

}

let elShowList = document.getElementById('showList'); // оторбразить список
elShowList.addEventListener('click',showList, false);

let elinsertRec = document.getElementById('insertRec'); // оторбразить список
elinsertRec.addEventListener('click',showList, false);

let eldeleteRec = document.getElementById('deleteRec'); // оторбразить список
eldeleteRec.addEventListener('click',showList, false);

let elfilterRec = document.getElementById('filterRec'); // оторбразить список
elfilterRec.addEventListener('click',showList, false);