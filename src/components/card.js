import axios from 'axios';

const Card = (article) => {
	// TASK 5
	// ---------------------
	// Implement this function, which should return the markup you see below.
	// It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
	// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
	// The text inside elements will be set using their `textContent` property (NOT `innerText`).
	// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
	//
	// <div class="card">
	//   <div class="headline">{ headline }</div>
	//   <div class="author">
	//     <div class="img-container">
	//       <img src={ authorPhoto }>
	//     </div>
	//     <span>By { authorName }</span>
	//   </div>
	// </div>
	//

	const cardEl = document.createElement('div');
	const headlineEl = document.createElement('div');
	const authorContainerEl = document.createElement('div');
	const imgContainerEl = document.createElement('div');
	const imgEl = document.createElement('img');
	const authorEl = document.createElement('span');

	cardEl.classList.add('card');
	headlineEl.classList.add('headline');
	authorContainerEl.classList.add('author');
	imgContainerEl.classList.add('img-container');

	cardEl.appendChild(headlineEl);
	cardEl.appendChild(authorContainerEl);
	authorContainerEl.appendChild(imgContainerEl);
	imgContainerEl.appendChild(imgEl);
	authorContainerEl.appendChild(authorEl);

	authorEl.textContent = article.authorName;
	headlineEl.textContent = article.headline;
	imgEl.src = article.authorPhoto;

	headlineEl.addEventListener('click', (e) => {
		e.preventDefault();
		console.log(e.target.innerText);
	});

	return cardEl;

	// console.log(article);
};

const cardAppender = (selector) => {
	// TASK 6
	// ---------------------
	// Implement this function that takes a css selector as its only argument.
	// It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
	// However, the articles do not come organized in a single, neat array. Inspect the response closely!
	// Create a card from each and every article object in the response, using the Card component.
	// Append each card to the element in the DOM that matches the selector passed to the function.
	//

	axios
		.get('https://lambda-times-api.herokuapp.com/articles')
		.then((res) => {
			const dataObj = res.data.articles;
			const entryPoint = document.querySelector(selector);

			dataObj.bootstrap.forEach((article) => {
				const newArticle = Card(article);
				entryPoint.appendChild(newArticle);
			});

			dataObj.javascript.forEach((article) => {
				const newArticle = Card(article);
				entryPoint.appendChild(newArticle);
			});

			dataObj.jquery.forEach((article) => {
				const newArticle = Card(article);
				entryPoint.appendChild(newArticle);
			});

			dataObj.node.forEach((article) => {
				const newArticle = Card(article);
				entryPoint.appendChild(newArticle);
			});

			dataObj.technology.forEach((article) => {
				const newArticle = Card(article);
				entryPoint.appendChild(newArticle);
			});
		})
		.catch((err) => {
			console.log(err);
		});
};

export { Card, cardAppender };
