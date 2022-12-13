
function BubbleSort(myTable) {
	var change, temp;
	do {
		change = false;
		for(var i=myTable.length; i>0; i--) {
			if (myTable[i] < myTable[i-1]) {
				temp = myTable[i-1];
				myTable[i-1] = myTable[i];
				myTable[i] = temp;
				change = true;
			}
		}
	} while (change);
  console.log('Tablica  posortowana : ', myTable);
	return myTable;
}
let myTable  = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];
console.log('Tablica nie posortowana : ', myTable)
BubbleSort(myTable);
