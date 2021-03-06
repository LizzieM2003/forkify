import View from './View.js';
import previewView from './previewView.js';
// import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = `No recipes found for your query. Please try again!`;

//   _oldgenerateMarkup() {
//     return this._data.map(this._generateMarkupPreview).join('');
//   }

//   _oldgenerateMarkupPreview(recipe) {
//     const id = window.location.hash.slice(1);

//     return `
//         <li class="preview">
//             <a class="preview__link ${
//               id === recipe.id ? 'preview__link--active' : ''
//             }" href="#${recipe.id}">
//               <figure class="preview__fig">
//                 <img src="${recipe.image}" alt="${recipe.title}" />
//               </figure>
//               <div class="preview__data">
//                 <h4 class="preview__title">${recipe.title}</h4>
//                 <p class="preview__publisher">${recipe.publisher}</p>
//               </div>
//             </a>
//           </li>
//       `;
//   }
  _generateMarkup() {
    return this._data
      .map(result => previewView.render(result, false))
      .join('');
  }
}

export default new ResultsView();
