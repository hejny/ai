const converter = new showdown.Converter({
    /*
    extensions: [
        showdownHighlight({
            // Whether to add the classes to the <pre> tag, default is false
            pre: true,
            // Whether to use hljs' auto language detection, default is true
            auto_detection: true,
        }),
    ],
    */
});
converter.setFlavor('github');

/* not await */ updateArticle();

async function updateArticle() {
    const contentElement = document.getElementById('content');
    const src = contentElement.dataset.markdownSource;
    const response = await fetch(src);
    const markdown = await response.text();

    const html = converter.makeHtml(markdown);

    contentElement.innerHTML = html;
}
