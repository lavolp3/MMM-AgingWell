Module.register("MMM-AgingWell", {
  // Default module config.
  defaults: {
    birthdays: {
      "Babsi": "27.11.1984",
      "Dirki": "24.05.1983",
      "Johan": "16.09.2015",
      "Mattheo": "09.07.2019"
    },
    format: "DD.MM.YYYY",
    showAgeIn: "days"
  },

  getScripts: function () {
    return [
      'moment.js',
    ];
  },

  start: function () {
    var wrapper = document.createElement("div");
    wrapper.id = "wrapper";
    //return wrapper;
    this.updateDom();
  },


  // Override dom generator.
  getDom: function() {
    var wrapper = document.getElementById("wrapper");
    var birthdays = this.config.birthdays;
    var ages = new Object({});
    for (var name in birthdays) {
      birthday = moment.duration(moment().diff(moment(birthdays[name], this.config.format))).as(this.config.showAgeIn).toFixed(0);
      ages[name] = birthday;
    }
    Log.log(this.name + ": " + JSON.stringify(ages));
  }
});
