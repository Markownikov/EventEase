window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input1 = document.querySelector("#nameTask");
	// const input2 = document.querySelector("#nameDate");
	const input3 = document.querySelector("#nameTime");
	const input=input1+input3;
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task1 = input1.value;
		// const task2 = input2.value;
		const task3 = input3.value;

		const task = task1+"  "+task3;
		if(input1.value=="" ||  input3.value==""){
			// alert("Please fill all the details of Event!");
			return;
		}

		const task_el = document.createElement('div');
		task_el.classList.add('task','my-2','justify-content-center');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Remove';

		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input1.value = '';
		// input2.value = '';
		input3.value = '';

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	});
});
