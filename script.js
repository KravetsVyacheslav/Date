class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
      days: document.querySelector(`${this.selector} [data-value="days"]`),
      hours: document.querySelector(`${this.selector} [data-value="hours"]`),
      mins: document.querySelector(`${this.selector} [data-value="mins"]`),
      secs: document.querySelector(`${this.selector} [data-value="secs"]`),
    };

    this.start();
  }

  start() {
    this.updateClockFace(0);

    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;
      this.updateClockFace(deltaTime);
    }, 1000);
  }

  updateClockFace(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.refs.days.textContent = days;
    this.refs.hours.textContent = hours;
    this.refs.mins.textContent = mins;
    this.refs.secs.textContent = secs;
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jan 1, 2025 00:00:00"),
});
