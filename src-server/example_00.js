import moment from "moment";
import Rx from 'rxjs/Rx';

console.log(moment().format());

var promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve((Math.floor((Math.random() * 10) + 1)));
  }, 500);
  console.log("promise started");
})
promise.then(x => console.log(x));
promise.then(x => console.log(x));

var source = Rx.Observable.create((observer) => {
  let id = setTimeout(() => {
    observer.next((Math.floor((Math.random() * 10) + 1)));

  }, 1000);
  console.log("observable started");
  return () => {
    console.log("dispose ..")
    clearTimeout(id);
  };
});


//var disposable = source.forEach(x => console.log(x));
//var subscription = source.subscribe(
 // function (x) { console.log('onNext: %s', x); },
 // function (e) { console.log('onError: %s', e); },
  //function () { console.log('onCompleted'); });


//setTimeout(()=> {
//  subscription.unsubscribe();
//}, 500);