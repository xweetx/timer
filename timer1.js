const args = process.argv.slice(2);

const scheduleAlarm = function(time) {
  
  if (time <= 0 || isNaN(time)) {
    console.log(`No letters or negative numbers please`);
    return;
  }


  setTimeout(() => {
    console.log('Beep!');
    process.stdout.write('\x07'); //sound
  }, time * 1000);
};

for (const arg of args) {
  const time = parseInt(arg, 10);
  scheduleAlarm(time);
  if (!isNaN(time) && time > 0) {
    console.log(`Alarm scheduled in ${time} seconds`);
  }
}