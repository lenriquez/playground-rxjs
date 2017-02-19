import $ from "jquery";
import Rx from "rxjs/Rx";

const $title = $("#title");
const $results = $("#results");

// Problems
// - Moving the keys trigger an event
// - On every key press the event is trigger (want to wait to finish a word)
// - show only results of the last keyup

Rx.Observable.fromEvent($title, "keyup")
  .map(e => e.target.value)
  .distinctUntilChanged()
  .debounceTime(250)
  .switchMap(getItems)
  .subscribe(items => {
    $results.empty();
    $results.append(items.map(i =>$(`<li />`).text(i)));
  })




// const keyUps$ = Rx.Observable.fromEvent($title, "keyup");
// const queries$ = keyUps$
//   .map(e => e.target.value)
//   .distinctUntilChanged()
//   .debounceTime(500).
//    // .mergeMap(getItems);
//     .switchMap(getItems);

// queries$.subscribe(items => {
//   //getItems(e)
//     //.then(items => {
//       $results.empty();
//       $results.append(items.map(r => $(`<li />`).text(r)));
//     //})
// });

function getItems(title) {
    console.log(`Querying ${title}`);
    return new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve([title, "Item 2", `Another ${Math.random()}`]);
        }, 500 + (Math.random() * 2000));
    });
}


