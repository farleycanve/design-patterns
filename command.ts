// Command interface
interface Command {
  execute(): void;
}

// Concrete command for turning the light on
class TurnOnLightCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.turnOn();
  }
}

// Concrete command for turning the light off
class TurnOffLightCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.turnOff();
  }
}

// Receiver
class Light {
  turnOn(): void {
    console.log("Light is ON");
  }

  turnOff(): void {
    console.log("Light is OFF");
  }
}

// Invoker
class RemoteControl {
  private command: Command;

  setCommand(command: Command): void {
    this.command = command;
  }

  pressButton(): void {
    this.command.execute();
  }
}

// Client code
const light = new Light();
const turnOnCommand = new TurnOnLightCommand(light);
const turnOffCommand = new TurnOffLightCommand(light);

const remote = new RemoteControl();

remote.setCommand(turnOnCommand);
remote.pressButton(); // Output: Light is ON

remote.setCommand(turnOffCommand);
remote.pressButton(); // Output: Light is OFF
