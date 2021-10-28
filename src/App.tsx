import * as React from "react";
//https://www.typescriptlang.org/docs/handbook/utility-types.html  //link utility types
import {RecorType} from './RecorType'
import {PickType}  from './PickType'
import {OmitTYpe} from './OmitType'
import {Enum} from './Enum'
import {TupleTYpe} from './TupleType'
import {Union} from './Union'
import {Aeertion} from './AssertionType'
import {Ineterface}  from './InterfaceType'
export const App: React.FC = () => {
 const [counter, setCounter] = React.useState<number>(0)
 
 return (
    <div className="App">
      <h1>Result: { counter }</h1>
      <RecorType />
<Enum/>
<TupleTYpe/>
<Union/>
<Aeertion/>
<Ineterface/>

      <PickType />
      <OmitTYpe/>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
}
function getFavoriteNumber(): number {
  //                        ^^^^^^^^
  return 26;
}
let a=getFavoriteNumber();
console.log(a)

interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
 console.log(cats.miffy)
 
 