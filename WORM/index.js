const request = require('request')
const cheerio = require('cheerio')
const fs = require("fs")

const url = 'http://127.0.0.1'

request(url, (err, res, body) => {
  const $  = cheerio.load(body)
  let course = []

  $('.test .font1 tbody tr').each(function(i, elem) {
    course.push( $(this).text().split('\n'))
})

fs.writeFileSync("result.json", JSON.stringify(course))
console.log(course)

})