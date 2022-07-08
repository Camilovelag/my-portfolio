let string = "A bigboxerfighter nancy is very awesome freelancer jjk"
let str = string.split(" ")
console.log(str)

let maxLength = str[0].length
let longestValue = ""

for (let i = 1; i < str.length; i++) {
    if(str[i].length > maxLength) {
        maxLength = str[i].length
        longestValue = str[i]
    }
  
}
console.log(longestValue)