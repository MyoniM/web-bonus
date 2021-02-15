//tagged template function
function cap(strings, ...x) {
	return x.reduce((acc, exp) => {
		return acc + exp.toUpperCase();
	}, strings[0]);
}

const display = (x, set, fun, funn) => {
	// console.log(set.size);
	x.innerHTML = '';
	function* generateTask() {
		for (let task of set) {
			yield task;
		}
	}
	let iterator = generateTask();
	// console.log(!iterator.next().done);

	for (let i = 0; i < set.size; i++) {
		//Create List Item
		var listItem = document.createElement('li');
		//input (checkbox)
		var checkBox = document.createElement('input'); // checkbox
		//label
		var label = document.createElement('label');
		//input (text)
		var editInput = document.createElement('input'); // text
		//button.edit
		var editButton = document.createElement('button');
		//button.delete
		var deleteButton = document.createElement('button');

		//Each element needs modifying

		checkBox.type = 'checkbox';
		editInput.type = 'text';

		editButton.innerText = 'Edit';
		editButton.className = 'edit';
		deleteButton.innerText = 'Delete';
		deleteButton.className = 'delete';

		var y = Reflect.get(iterator.next().value, i);
		// console.log(y);
		label.innerText = cap`${y}`;

		//Each element needs appending
		listItem.appendChild(checkBox);
		listItem.appendChild(label);
		listItem.appendChild(editInput);
		listItem.appendChild(editButton);
		listItem.appendChild(deleteButton);

		//Append listItem to x
		x.appendChild(listItem);
		fun(listItem, funn);
	}
};

export default display;
