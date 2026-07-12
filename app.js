(function () {
  const items = window.VERA_CONTENT || [];
  const grid = document.querySelector("#library-grid");
  const buttons = Array.from(document.querySelectorAll(".filter-button"));
  const sectionLists = Array.from(document.querySelectorAll("[data-section-list]"));

  function labelFor(category) {
    return category.charAt(0).toUpperCase() + category.slice(1);
  }

  function card(item, className) {
    const article = document.createElement("article");
    article.className = className;
    article.dataset.category = item.category;

    const body = document.createElement("div");
    const kicker = document.createElement("div");
    kicker.className = "card-kicker";
    kicker.textContent = labelFor(item.category);

    const title = document.createElement("h3");
    title.className = "card-title";
    title.textContent = item.title;

    const description = document.createElement("p");
    description.className = "card-description";
    description.textContent = item.description;

    const link = document.createElement("a");
    link.className = "open-link";
    link.href = item.href;
    link.textContent = "Open";

    body.append(kicker, title, description);
    article.append(body, link);
    return article;
  }

  function emptyState(category) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "Nothing staged here yet.";
    empty.dataset.category = category;
    return empty;
  }

  function renderGrid(filter) {
    grid.innerHTML = "";
    const visible = filter === "all" ? items : items.filter((item) => item.category === filter);

    if (!visible.length) {
      grid.append(emptyState(filter));
      return;
    }

    visible.forEach((item) => grid.append(card(item, "library-card")));
  }

  function renderSections() {
    sectionLists.forEach((list) => {
      const category = list.dataset.sectionList;
      const matches = items.filter((item) => item.category === category);
      list.innerHTML = "";

      if (!matches.length) {
        list.append(emptyState(category));
        return;
      }

      matches.forEach((item) => list.append(card(item, "module-card")));
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((candidate) => candidate.classList.remove("is-active"));
      button.classList.add("is-active");
      renderGrid(button.dataset.filter);
    });
  });

  renderGrid("all");
  renderSections();
})();
