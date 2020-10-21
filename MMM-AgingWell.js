Module.register("MMM-AgingWell", {
    // Default module config.
    defaults: {
        birthdays: {
            "Donald Duck": "09.07.1934",
            "Paul McCartney": "18.06.1942",
            "Archie Mountbatten-Windsor": "06.05.2019"
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
        wrapper.id = "ages-wrapper";
        this.updateDom();
    },


    // Override dom generator.
    getDom: function() {
        var wrapper = document.getElementById("ages-wrapper");
        var ageTable = document.createElement("table");
        agesTable.className = "ages-table";
        var ages = new Object({});
        for (var name in this.config.birthdays) {
            var birthday = moment(birthdays[name], this.config.format);
            var age = moment().diff(birthday, this.config.showAgeIn);
            ages[name] = age;
            var tr = document.createElement("tr");
            var nameTd = document.createElement("td");
            nameTd.className = "bold";
            nameTd.innerHTML = name;
            var ageTd = document.createElement("td");
            ageTd.innerHTML = age;
            tr.appendChild(nameTd);
            tr.appendChild(ageTd);
            ageTable.appendChild(tr);
        }
        Log.log(this.name + ": " + JSON.stringify(ages));
        wrapper.appendChild(ageTable);
    }
});
