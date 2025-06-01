let a = 0;
const timer = setInterval(() => {
  console.log(`This timer will stop at 5 seconds`);
  if (a<5) {
    a+=0.03125
    console.log(a)
  } else {
    stopInterval(timer)
  }
}, 31.25)
