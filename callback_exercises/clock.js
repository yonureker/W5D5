class Clock {
  constructor() {
    // 1. Create a Date object.
    const currentTime = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.hour = currentTime.getHours();
    this.minute = currentTime.getMinutes();
    this.seconds = currentTime.getSeconds();
    
    // 3. Call printTime.
    this.printTime();
    // 4. Schedule the tick at 1 second intervals.  
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    console.log(`${this.hour}:${this.minute}:${this.seconds}`);
    // Use console.log to print it.
  }

  _tick() {
    // 1. Increment the time by one second.
    this.seconds+= 1;
    if(this.seconds === 60){
      this.minute+=1;
      if(this.minute === 60) {
        this.hour +=1;
        if(this.hour === 24) {
          this.hour = 0;
        }
        this.minute = 0;
      }
      this.seconds = 0;
    }
    // 2. Call printTime.
    this.printTime();
  }
}

const clock = new Clock();