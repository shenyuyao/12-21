/*
字符串的13种方法
1、charCodeAt方法 
2、fromCharCode方法
3、charAt方法
4、slice方法
5、substring方法
6、substr方法
7、indexOf方法
8、lastIndexOf方法 
9、search方法
10、concat方法
11、split
12、toLowerCase方法
13、toUpperCase方法
*/

/*1、charCodeAt()方法  获取字符串中指定的字符的Unicode值
参数  要获取字符的角标值 0-------length-1
返回值 要的获取的指定角标的字符，如果长度大于length-1 则返回NaN；
*/
var hello = 'hello node';
const charCodeAt = hello.charCodeAt(2)
console.log(charCodeAt) //108

/*2、fromCharCode() 可接受一个指定的 Unicode 值
参数  一个或多个 Unicode 值，即要创建的字符串中的字符的 Unicode 编码。
返回一个字符串。
*/
console.log(String.fromCharCode(72, 69, 76, 76, 79)) //HELLO

/*3.charAt()方法  获取字符串中指定的字符
参数  要获取字符的角标值 0-------length-1
返回值指定索引对应的字符；
*/
var hello = 'hello node';
const charAt = hello.charAt(1)
console.log(charAt) //e

/*4、slice(); 在指定字符串里获取子字符串 和 substring()用法一样
参数： 2个 第一个参数是从哪个为准获取，第二个参数是获取到哪个为准 不包括这个参数所在的位置。当第二个参数不传时 获取到最后的位置。
返回值：获取的新字符串 原字符串不变
*/
var hello = 'hello node';
const slice = hello.slice(2)
const slice2 = hello.slice(2,5)
console.log(slice) //llo node
console.log(slice2) //llo
/*5、substring();从指定字符串中获取字符串 从第一个参数的位置起 获取到第二个参数的位置 不包括第二个参数的位置。
参数： 两个参数 第一个参数 开始获取的索引，第二个参数结束获取的索引（不包括）  如果第二个参数不传 则获取到最后。
返回值：获取到的新字符串 原字符串不变
*/
var hello = 'hello node';
const substring = hello.substring(3)
const substring2 = hello.substring(3,8)
console.log(substring) //lo node
console.log(substring2) //lo no
/*
6、substr(); 从指定字符串中获取子串 从第一个参数起索引 获取第二个参数个, 如果第二个字符不传则获取到最后。
参数：两个参数 第一个参数 从什么位置起获取  第二个参数获取多少个字符
返回值：返回获取到的新字符串 原字符串不变
*/
var hello = 'hello node';
const substr = hello.substr(2)
const substr2 = hello.substr(2,4)
console.log(substr) //llo node
console.log(substr2) //llo 
/*
7、indexOf()  查找指定字符串索引
参数： 1、要查找的字符串 2、查找的起始位置（可选）0------length-1
返回值：如果查找到返回第一次出现位置的索引 没有找到则返回-1；
*/
var hello = 'hello node';
const indexOf = hello.indexOf('e')
const indexOf2 = hello.indexOf('e',6)
console.log(indexOf) //1
console.log(indexOf2) //9
/*8、lastIndexOf() 获取要查找字符串在指定字符串中最后出现的位置。
参数：  1、要查找的字符串 2、查找的起始位置（可选）0------length-1
返回值：如果查找到返回第一次出现位置的索引 没有找到则返回-1；
注意 查找顺序为从后往前 如果我们从角标为4的地方开始查找字符串“~”查找到索引0则为 -1；
*/
var hello = 'hello node';
const lastIndexOf = hello.lastIndexOf('o')
const lastIndexOf2 = hello.lastIndexOf('o',2)
console.log(lastIndexOf) //7
console.log(lastIndexOf2) //-1
/*9.search() 方法用于检索字符串中指定的子字符串
参数 可以是需要在原字符串中检索的子字符串，也可以是需要检索的新增字符串对象（要执行忽略大小写的检索，需追加标志 i）
返回值 第一个与指定查找的字符串或者正则表达式相匹配的 String对象起始位置。
*/
var hello = 'Hello Node';
const search = hello.search(/Node/)
const search2 = hello.search(/node/)
const search3 = hello.search(/node/i)
console.log(search) //6
console.log(search2) //-1
console.log(search3) //6
/*10.concat() 方法用于连接两个或多个字符串
参数 要连接的字符串，一个值或多个值
返回值 连接完成后的新字符串
*/
var hello = 'hello ';
var node = 'node';
const concat = hello.concat(node)
console.log(concat) //hello node
/*11、split() 将指定字符串以指定字符进行分割成数组
参数： 一个参数 用来分割字符串的字符
返回值：分割好的字符串组成的数组 原字符串不变
*/
var hello = 'Hello~Node';
const split = hello.split('')
const split2 = hello.split('~')
console.log(split) //[ 'H', 'e', 'l', 'l', 'o', '~', 'N', 'o', 'd', 'e' ]
console.log(split2) //[ 'Hello', 'Node' ]
/*12、toLowerCase方法 将指定字符串转换成小写
参数：没有参数
返回值：返回转换小写后的字符串 原字符串不变
*/
var hello = 'Hello Node';
const toLowerCase = hello.toLowerCase()
console.log(toLowerCase) //hello node
/*13、toUpperCase(); 将指定字符串转换为大写
参数：没有参数	
返回值：返回转换大写后的字符串 原字符串不变
*/
var hello = 'Hello Node';
const toUpperCase = hello.toUpperCase()
console.log(toUpperCase) //HELLO NODE