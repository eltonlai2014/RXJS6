console.log("hello world");

import { of } from 'rxjs';
import { map } from 'rxjs/operators';
let ob = of(1, 2, 3);
ob.pipe(
       map(v => v * 5))
 .subscribe(v => console.log(v));