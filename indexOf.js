const transactions = ['jhfkjbkj', 'lkfkjrgkj', 'jfgkjrgk','jdffhkdhfo', 'kfirehlk'];
const test = [ 44, 55, 66, 77, 88, 99, 5, 4, 3, 2, 1];
if (transactions.includes('jfgkjrgk',2)){
 // console.log('yes');
} else {
 // console.log('no');
}



const users = [
    {'name':  'Ivanchyk', 'age': 44},
    {'name':  'Anoshin', 'age': 34},
    {'name':  'lazar', 'age': 14},
    {'name':  'potapenko', 'age': 23},
    {'name':  'Ivanov', 'age': 23},
] 

let newUsers = users.filter(item => {item.name.includes('v')
});
console.log(newUsers);