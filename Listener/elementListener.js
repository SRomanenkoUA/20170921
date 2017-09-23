function showList() {
var newContent="";

}

var elShowList = document.getElementById('showList'); // оторбразить список
elShowList.addEventListener('click',showList, false);

var elinsertRec = document.getElementById('insertRec'); // оторбразить список
elinsertRec.addEventListener('click',showList, false);

var eldeleteRec = document.getElementById('deleteRec'); // оторбразить список
eldeleteRec.addEventListener('click',showList, false);

var elfilterRec = document.getElementById('filterRec'); // оторбразить список
elfilterRec.addEventListener('click',showList, false);