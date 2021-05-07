// function isSubsetOf(s1, s2){

//     // iterate over s2
//     // it's a set, so we can use for in
//     for(const item in s2)
//     {
//         // check if current value is in s1
//         // if not
//         if(!s1.has(item))
//         {
//             return false;
//         }
//     }

//     return true;

//   }

  function isSubsetOf(s1, s2){
    return [...s1].every(item => s2.has(item));
  }
  
  function isSupersetOf(s2, s1){
    return [...s1].every(item => s2.has(item));
  }




let A1 = new Set([1,2,3]), A2 = new Set([3,2,1]), B = new Set([1,2,3,4,5]), X = new Set([1,2,4,5,6,7]);

console.log( isSubsetOf(A1,A1));// "A is contained in A" );
console.log( isSubsetOf(A1,A2));// "{1,2,3} is contained in {3,2,1}" );
console.log( isSubsetOf(A1,B));//  "{1,2,3} is contained in {1,2,3,4,5}" );
console.log( !isSubsetOf(A1,X));// "{1,2,3} is not contained in {1,2,4,5,6,7}" );

console.log( isSupersetOf(A1,A1));// "A includes A" );
console.log( isSupersetOf(A1,A2));// "{1,2,3} includes {3,2,1}" );
console.log( isSupersetOf(B,A1));//  "{1,2,3} includes {1,2,3,4,5}" );
console.log( !isSupersetOf(A1,X));// "{1,2,3} doesnt include {1,2,4,5,6,7}" );