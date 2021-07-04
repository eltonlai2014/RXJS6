// 2 mb
import { Observable, from , of} from 'rxjs';
import { map, filter } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/filter';

// 從個別的模組載入 1 mb
// import { Observable } from 'rxjs/internal/Observable';
// import { from } from 'rxjs/internal/observable/from';
// import { map } from 'rxjs/internal/operators/map';
// import { filter } from 'rxjs/internal/operators/filter';

//example 1
var observable = Observable.create((observer: any) => {
	observer.next('Hello World!');
	observer.next('example 1:Hello Again!');
	observer.complete();
	observer.next('example 1:Bye Bye! After Complete');
});

observable.subscribe(
	(x: any) => logItem(`example 1:${x}`),
	(error: any) => logItem(`example 1:Error: ${error}`),
	() => logItem('example 1:Completed')
);

//example 2
let numbers = [1, 3, 5, 10];
let numbersSource = from(numbers).pipe(
	map(x => x + 1),
	filter(x => x > 3)
);
class NumberObserver {
	next(value: any) {
		logItem(`NumberObserver:${value}`);
	}

	error(e: any) {
		logItem(`NumberObserver:Error: ${e}`);
	}

	complete() {
		logItem('NumberObserver:Completed');
	}
}
numbersSource.subscribe(new NumberObserver());

//example 3 with error
var obsservableErr = Observable.create((observer: any) => {
	for (let n of numbers) {
		observer.next(n);
		if (n === 5) {
			observer.error(`number can't be 5`);
		}
	}

	observer.complete();
});
obsservableErr.subscribe(new NumberObserver());

//example 4 setTimeout
var obsservableTimeout = Observable.create((observer: any) => {
	let index = 0;
	let produceValue = () => {
		observer.next(numbers[index++]);
		if (index < numbers.length) {
			setTimeout(produceValue, 3000);
		} else {
			observer.complete();
		}
	};

	produceValue();
});
obsservableTimeout.subscribe(new NumberObserver());

function logItem(val: any) {
	var node = document.createElement('li');
	var textnode = document.createTextNode(val);
	node.appendChild(textnode);
	document.getElementById('list').appendChild(node);
}

var t1 = new Promise(function(a) {});
let ob = of (1,2,3,4,5);
console.log("hello");
console.log("aaaaaaaaaaaaa");