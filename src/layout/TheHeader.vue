<template>
    <header class="header">
        <img src="src/img/logo.png" alt="Logo" class="header__logo" />
        <form class="search">
          <input
            type="text"
            class="search__field"
            placeholder="Search over 1,000,000 recipes..."
          />
          <button class="btn search__btn">
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-search"></use>
            </svg>
            <span>Search</span>
          </button>
        </form>

        <nav class="nav">
          <ul class="nav__list">
            <li class="nav__item">
              <button class="nav__btn nav__btn--add-recipe">
                <svg class="nav__icon">
                  <use href="src/img/icons.svg#icon-edit"></use>
                </svg>
                <span>Add recipe</span>
              </button>
            </li>
            <li class="nav__item">
              <button class="nav__btn nav__btn--bookmarks">
                <svg class="nav__icon">
                  <use href="src/img/icons.svg#icon-bookmark"></use>
                </svg>
                <span>Bookmarks</span>
              </button>
              <div class="bookmarks">
                <ul class="bookmarks__list">
                  <div class="message">
                    <div>
                      <svg>
                        <use href="src/img/icons.svg#icon-smile"></use>
                      </svg>
                    </div>
                    <p>
                      No bookmarks yet. Find a nice recipe and bookmark it :)
                    </p>
                  </div>

                  <!-- <li class="preview">
                    <a class="preview__link" href="#23456">
                      <figure class="preview__fig">
                        <img src="src/img/test-1.jpg" alt="Test" />
                      </figure>
                      <div class="preview__data">
                        <h4 class="preview__name">
                          Pasta with Tomato Cream ...
                        </h4>
                        <p class="preview__publisher">The Pioneer Woman</p>
                      </div>
                    </a>
                  </li> -->
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </header>
</template>