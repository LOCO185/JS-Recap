//! mutate the original array

//! return < 0 b , a
//! return >= 0 a , b

const arr = [
    { name: 'Adam', attendance: true },
    { name: 'Shani', attendance: false },
    { name: 'Hila', attendance: true },
    { name: 'Aviad', attendance: false },
    { name: 'Harel', attendance: true },
  ];
  
  // our goal is:
  // sort arr by names but all truty first
  /**
   * [
    { name: 'Adam', attendance: true },
    { name: 'Harel', attendance: true },
    { name: 'Hila', attendance: true },
    { name: 'Aviad', attendance: false },
    { name: 'Shani', attendance: false },
  ]
   */
const mySort = (a, b) => {
    return  a.name > b.name ? 1 : -1;
};
const mySort2 = (a,b) => {
    return a.attendance > b.attendance ? -1 : 1;
}
arr.sort(mySort).sort(mySort2);
console.log(arr);
  