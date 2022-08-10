function Device(name, plugin) {
    this.name = name,
        this.getOn = function (plugin) {
            if ((this.plugin = plugin)) {
                document.write('Включен, потребляемая мощность: ');
            } else {
                document.write('Выключен, потребляемая мощность: ');
            }
        }
}

function ElectricalAppliance(name, power, plugin) {
    this.name = name,
        this.power = power,
        this.plugin = plugin,
        this.getPower = function (power, plugin) {
            if (plugin === true) {
                document.write(power / 1000 + 'KWh' + '<br>');
            } else {
                document.write(power * 0);
            }
        }
}

ElectricalAppliance.prototype = new Device();
const device1 = new ElectricalAppliance('Device1');
device1.getOn(true);
device1.getPower(20, true)

const device2 = new ElectricalAppliance('Device2');
device2.getOn(false);
device2.getPower(10, false);