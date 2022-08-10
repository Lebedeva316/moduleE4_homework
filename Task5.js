class Device {
    constructor(name, plugin) {
        this.name = name
    }
    getOn(plugin) {
        if (this.plugin = plugin) {
            document.write(`Включен ${this.name}, потребляемая мощность: `);
        } else {
            document.write(`Выключен ${this.name}, потребляемая мощность: `);
        }
    }
}

class ElectricalAppliance extends Device {
    constructor(power, getOn, name) {
        super(getOn, name);
    }
    getPower(power, getOn, name) {
        if(getOn) {
            return super.getOn(true) + document.write(power / 1000 + 'Kwh' + '<br>');
        } else {
            return super.getOn() + document.write(power * 0);
        }
    }
}

const device1 = new ElectricalAppliance();

device1.name = 'Device1';
device1.getPower(20, true);

const device2 = new ElectricalAppliance();

device2.name = 'Device2';
device2.getPower(10, false);