let day = "Happy Monday Hello Shakti"
console.log(day.length)
console.log(day.charAt(2))
console.log(day.indexOf('d'))
console.log(day.endsWith('k'))
console.log(day.concat('Happy'))
console.log("Happy " + day.concat(' Hello Shakti'))
console.log(day.replace("n", "oooon"))
console.log(day.slice(0,3))
console.log(day[2])
let split_day = day.split(" ");
console.log(split_day)
let str1 = " Sir"
console.log(str1.trim())

let date = '28'
let nextDate = '25'
let diff = parseInt(date - nextDate)
console.log(diff)

let quote = "Tuesday us funday"
//find totoal number of time 'day' occured in this string
let count = 0
let val = quote.indexOf('day')
while (val != -1){
    count++
    val = quote.indexOf('day', val + 1)
}

console.log(count)