
class Clock {
    constructor(hours, minutes, seconds) {
        this._hours = hours;
        this._minutes = minutes;
        this._seconds = seconds;
    }

 time(sec){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(sec)
    
            },sec)
        })
    };
async tickTacK(){

    while (true) {
        await this.time(1000);
        this._seconds+=1
        // console.clear();
        console.log(`${this._hours} : ${this._minutes} : ${this._seconds}`);
        if (this._seconds > 59) {
            this._minutes += 1;
            this._seconds -= 60;
            if (this._minutes > 59) {
                this._hours += 1;
                this._minutes -= 60;
                if (this._hours > 23) {
                    this._hours -= 24
                }
            }
        } 
    } 
};
   async setAlert(hours, minutes, seconds) {

   await this.time((hours - this._hours) * 60 * 60 * 1000 + (minutes - this._minutes) * 60 * 1000 + (seconds - this._seconds) * 1000)
  
}
};

let clock = new Clock(14, 25, 35);

clock.tickTacK();


clock.setAlert(14, 25, 40).then(() => {
    console.log('WAKE UP NOW');
});

  clock.setAlert(14, 25, 45).then(() => {
    console.log('IT IS TOO LATE WAKE UP IMMEDIATELY');
});



