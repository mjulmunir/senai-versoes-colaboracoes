const linkArray = ["news", "promotion", "kit"];

linkArray.forEach((item) => {
    let link = document.getElementById(item);
    link.href = `${item}.html`;
});
