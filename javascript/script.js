simplyCountdown(".simply-countdown", {
  year: 2023, // required
  month: 12, // required
  day: 5, // required
  hours: 8, // Default is 0 [0-23] integer
  minutes: 0, // Default is 0 [0-59] integer
  seconds: 0, // Default is 0 [0-59] integer
  words: {
    //words displayed into the countdown
    days: { singular: "hari", plural: "hari" },
    hours: { singular: "jam", plural: "jam" },
    minutes: { singular: "menit", plural: "menit" },
    seconds: { singular: "detik", plural: "detik" },
  },
  // in case of inline set to false
  onEnd: function () {
    // your code
    return;
  },
});
