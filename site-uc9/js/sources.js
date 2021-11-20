const references = ["news", "promotion", "kit"];

for (let i = 0; i < references.length; i++) {
  $(`#${references[i]}`).attr('href', function () {
    return `${references[i]}.html`;
  });
}
