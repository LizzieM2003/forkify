import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

    //   console.log(btn.dataset.goto);
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const { page, results, resultsPerPage } = this._data;
    const numPages = Math.ceil(results.length / resultsPerPage);
    // console.log(numPages);
    // Page 1 and there are other pages
    if (page === 1 && numPages > 1) {
      return `
        <button class="btn--inline pagination__btn--next" data-goto="${page+1}">
            <span>Page ${page + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
      `;
    }

    // Last page
    if (page === numPages && numPages > 1) {
      return `
        <button class="btn--inline pagination__btn--prev" data-goto="${page-1}">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${page - 1}</span>
          </button>`;
    }

    // Other page
    if (page > 1 && page < numPages) {
      return `
        <button class="btn--inline pagination__btn--prev" data-goto="${page -1}">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${page - 1}</span>
          </button>
          <button class="btn--inline pagination__btn--next" data-goto="${page + 1}">
            <span>Page ${page + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
          `;
    }

    // Page 1, and there are no other pages
    if (page === 1 && numPages === 1) {
      return '';
    }
  }
}

export default new PaginationView();
