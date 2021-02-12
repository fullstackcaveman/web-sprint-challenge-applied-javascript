import axios from 'axios';

const Tabs = (topics) => {
	// TASK 3
	// ---------------------
	// Implement this function which takes an array of strings ("topics") as its only argument.
	// As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
	// then the function returns the markup below.
	// The tags used, the hierarchy of elements and their attributes must match the provided markup!
	// The text inside elements will be set using their `textContent` property (NOT `innerText`).
	//
	// <div class="topics">
	//   <div class="tab">javascript</div>
	//   <div class="tab">bootstrap</div>
	//   <div class="tab">technology</div>
	// </div>
	//
	const topicsEl = document.createElement('div');
	topicsEl.classList.add('topics');

	// Map over array and append items to the DOM
	topics.forEach((topic) => {
		// Instantiate element
		const tabEl = document.createElement('div');
		// Append new element to the parent element
		topicsEl.appendChild(tabEl);
		// Add text content from the array to the element
		tabEl.textContent = topic;
		// Add class name to new element
		tabEl.classList.add('tab');
	});

	return topicsEl;
};

const tabsAppender = (selector) => {
	// TASK 4
	// ---------------------
	// Implement this function which takes a css selector as its only argument.
	// It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
	// Find the array of topics inside the response, and create the tabs using the Tabs component.
	// Append the tabs to the element in the DOM that matches the selector passed to the function.
	//
	axios
		.get('https://lambda-times-api.herokuapp.com/topics')
		.then((res) => {
			// Assign response to a variable
			const data = Tabs(res.data.topics);

			// Set entry point to the argument passed-in to the tabsAppender funciton
			const entryPoint = document.querySelector(selector);
			// Append tabs to the entrypoint
			entryPoint.appendChild(data);
		})
		.catch((err) => {
			console.log(err);
		});
};

export { Tabs, tabsAppender };
