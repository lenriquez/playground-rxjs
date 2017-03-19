"use strict";

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log((0, _moment2.default)().format());

var promise = new Promise(function (resolve) {
  setTimeout(function () {
    resolve(Math.floor(Math.random() * 10 + 1));
  }, 500);
  console.log("promise started");
});
promise.then(function (x) {
  return console.log(x);
});
promise.then(function (x) {
  return console.log(x);
});

var source = _Rx2.default.Observable.create(function (observer) {
  var id = setTimeout(function () {
    observer.next(Math.floor(Math.random() * 10 + 1));
  }, 1000);
  console.log("observable started");
  return function () {
    console.log("dispose ..");
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