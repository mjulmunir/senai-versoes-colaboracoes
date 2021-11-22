const navbarPages = ["news", "promotion", "kit"];

for (let i = 0; i < navbarPages.length; i++) {
  $(`#${navbarPages[i]}`).attr('href', function () {
    return `${navbarPages[i]}.html`;
  });
}
