function shout(string) {
  return string.toUpperCase() 
}

function whisper(string) {
  return string.toLowerCase()
}

// describe('logShout(string)', function() {
//   it('calls console.log() its one argument in all caps', function() {
//     const spy = expect.spyOn(console, 'log').andCallThrough()

//     logShout('hello')

//     expect(spy).toHaveBeenCalledWith('HELLO')

//     console.log.restore()
//   })
// })

function logShout(string) {
 var spy = string.toUpperCase
 console.log(spy)
}