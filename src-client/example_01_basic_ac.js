import $ from "jquery";

const $title = $("#title");
const $result = $("#results");

let lastQuery = null;
let lastTimeout = null;
let nextQueryId = 0;
$title.on('keyup', e => {
    const title = e.target.value;
    if(title == lastQuery) {
        return;
    }

    lastQuery = title;

    if(lastTimeout)
        window.clearTimeout(lastTimeout);

    let ourQueryId = ++nextQueryId;
    lastTimeout = window.setTimeout(() => {
        getItems(title)
            .then(items => {
                if(ourQueryId != nextQueryId)
                    return;

                $result.empty();

                const $items = items.map(item => $(`<li />`).text(item));
                $result.append($items);
            })
    }, 500);
});

function getItems(title) {
    console.log(`Querying ${title}`);
    return new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve([title, "Item 2", `Another ${Math.random()}`]);
        }, 500 + (Math.random() * 5000));
    });
}

