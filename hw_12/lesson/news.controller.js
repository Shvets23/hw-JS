const newsService = new NewsService();
const uiService = new NewsUI();

// UI Elements
const form = document.forms['newsControlForm'];
const countrySelect = form['country'];
const categorySelect = form['category'];
const searchInput = document.getElementById('search');
const closeButton = document.getElementById('close');

function onSelectChange(event) {
    const country = countrySelect.value;
    const category = categorySelect.value;

    if (!country || !category) return console.error('Введите страну и категорию для поиска');

    newsService.getTopHeadlinesNews(category, country, (response) => {
        const { totalResults, articles } = response;

        // console.time();
        uiService.clearContainer();
        // console.timeEnd();

        // console.time();
        articles.forEach((article) => uiService.addArticle(article));
        // console.timeEnd();
    });
};

function onSearch(event) {
    const phrase = searchInput.value;
    
    if (phrase.length < 4) return console.error('Переформулируйте запрос');

    newsService.getNewsByPhrase(phrase, (response) => {
        const { totalResults, articles } = response;
        console.log(response.totalResults);
        if(response.totalResults == 0){
            uiService.notFound()
        } ;
        // console.time();
        uiService.clearContainer();
        // console.timeEnd();

        // console.time();
        articles.forEach((article) => uiService.addArticle(article));
        // console.timeEnd();
    });
}


countrySelect.addEventListener('change', onSelectChange);
categorySelect.addEventListener('change', onSelectChange);
searchInput.addEventListener('keyup', onSearch);
closeButton.addEventListener('click', ()=>{
    let modal = document.getElementById('modal1');
        modal.style.display = 'none';
})

