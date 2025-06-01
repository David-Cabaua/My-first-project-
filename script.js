let a = 0;
const timer = setInterval(() => {
  console.clear()
  console.log(`This timer will stop at 5 seconds`);
  if (a<5) {
    a+=0.03125
    console.log(a)
  } else {
    clearInterval(timer)
  }
}, 31.25)
