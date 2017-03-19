import Rx from 'rxjs/Rx'

// const promise = new Promise((resolve, reject) => {
//   console.log("In Promise");
//   resolve("Hey");
// });

// const simple$ = new Rx.Observable(observer => {
//   console.log("Generating observable");
//   setTimeout(() => { 
//     observer.next("An Item");
//     setTimeout(() => {
//       observer.next("Another item!");
//       observer.complete();
//     }, 1000)
//   },1000);
// });

// const error$ = new Rx OBsservable(observer => {
//   observer.error( new Error("Stuff"))
// });

// simple$.subscribe(
//   item => console.log(`one.next ${item}`),
//   error => console.log(`one.error ${error.stack}`)
//   () => console.log("one.complete"));

// setTimeout(() => {
//   simple$.subscribe({
//     next: item => console.log(`two.next ${item}`),
//     error(error) {
//       console.log(`two.error ${error}`)
//     },
//     complete: function () {
//       console.log("two.complete");
//     }
//   });
// }, 3000);




// ================================= Part 2 
function createInterval$(time) {
  return new Rx.Observable(observer => {
    let index = 0;
    let interval = setInterval(() =>{
      console.log(`Generating ${index}`);
      observer.next(index++);
    }, time);

    return () => {
      clearInterval(interval);
    }

  });
}

function createSubscriber(tag){
    return {
        next(item) { console.log(`${tag}.next ${item}`); },
        error(error) {console.log(`${tag}error ${error.stack || error}`);},
        complete() { console.log(`${tag}.complete`); }
    };
}

// function take$(sourceObservable, amount) {
//   return new Rx.Observable(observer => {
//     let count = 0
//     const subscription = obeserver.subscribe({
//       next(item) {
//         obeserver.next(item);
//         if(++count >= amount)
//           observer.complete();

//       },
//       error(error) (parameter) observer: any
//       complete() { observer.complete(); }
//     });

//     return () => subscription.unsubscribe();
//   });
// }


// const test$ = createInterval$(1000);

// //everySecond$.subscribe(createSubscriber("one"));
// const firstFiveSecond$ = take$(test$, 5 );
// const subscription = firstFiveSecond$.subscribe(createSubscriber("one"));

// setTimeout(()=> {
//   subscription.unsubscribe();
// }, 3000);