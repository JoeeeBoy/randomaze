const randomze = {
  bestDropp: [
    ["motorcycle", 100],
    ["auto", 200],
    ["baggi", 40],
    ["plane", 500],
    ["house", 300],
    ["yacht", 500],
    ["goldWatch", 70],
    ["boutique", 450],
    ["smallBusiness", 150],
    ["fanDayson", 50],
  ],
  normalDropp: [
    ["comp", 10],
    ["phone", 7],
    ["moped", 10],
    ["clothes", 5],
    ["photoСamera", 15],
    ["ipad", 8],
    ["bicycle", 5],
    ["perfume", 4],
    ["tv", 9],
    ["furniture", 6],
  ],

  standartDropp: [
    ["book", 1],
    ["picture", 2],
    ["gamepad", 3],
    ["bag", 3],
    ["watch", 2],
    ["flowers", 1],
    ["fan", 1],
    ["strawberry", 3],
    ["headphones", 2],
    ["cat", -1],
  ],

  sectorDebt: [
    "arrears - 10",
    "arrears - 20",
    "arrears - 30",
    "arrears - 40",
    "arrears - 50",
    "arrears - 60",
    "arrears - 70",
    "arrears - 80",
    "arrears - 90",
    "arrears - 100",
    "arrears - 200",
    "arrears - 300",
    "arrears - 400",
    "arrears - 500",
    "arrears - 600",
    "arrears - 700",
    "arrears - 800",
    "arrears - 900",
    "arrears - 999",
    "arrears - 0",
  ],

  random: function (max) {
    return Math.floor(Math.random() * max);
  },
  go: function () {
    console.log(
      `${this.bestDropp[this.random(10)]} ${
        this.normalDropp[this.random(10)]
      }  ${this.standartDropp[this.random(10)]} ${
        this.sectorDebt[this.random(20)]
      }`
    );
  },
};
