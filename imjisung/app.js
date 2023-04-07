const time = new Date()

function tt () {
  let y = time.getFullYear ()
  let M = time.getMonth ()
  let d = time.getDate ()
  let h = time.getHours ()
  let m = time.getMinutes ()
  let c = time.getSeconds()
  let D = time.getDay ()
  console.log(`${y}.${M+1}.${d}.${h}.${m}.${c}.${D}`)


}
console.log(tt())