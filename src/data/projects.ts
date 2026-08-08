import type { Project } from "@/types/portfolio";

export const projects = [
  {
    slug: "printed-circuit-board-project",
    title: "Printed circuit board project",
    kicker: "Electronics / PCB design",
    what: "Design and fabricate a toggle-switch circuit using a 555 timer IC configured in astable mode and a dual D-type flip-flop.",
    how: [
      "Designed and simulated the circuit, PCB layout, and 3D model in Proteus 8 Professional.",
      "Transferred the mirrored layout onto a copper board, then etched, drilled, soldered, and tested the single-layer PCB.",
      "Resolved production issues through additional toner-transfer pressure, connection verification, and resoldering where needed.",
    ],
    result:
      "The design and fabrication of the toggle circuit was successfully completed using Proteus 8 Professional for simulation and PCB layout, followed by physical production through the toner-transfer method.",
    tags: ["Proteus 8", "PCB fabrication", "555 timer / 74LS74"],
    image: {
      src: "/images/projects/pcb/design.png",
      alt: "Single-layer PCB layout for the printed circuit board project",
    },
    gallery: [
      {
        label: "Design",
        src: "/images/projects/pcb/design.png",
        alt: "PCB layout designed in Proteus",
      },
      {
        label: "Testing",
        src: "/images/projects/pcb/testing.jpeg",
        alt: "Printed circuit board being tested",
      },
      {
        label: "Final product",
        src: "/images/projects/pcb/finished-product.jpeg",
        alt: "Finished assembled printed circuit board",
      },
    ],
  },
  {
    slug: "smart-home-project",
    title: "Smart home project",
    kicker: "Embedded systems / IoT",
    what: " I built a browser-based smart home control system that uses an ESP32-S3 to switch lights over Wi-Fi and display their current status.",
    how: [
      "Programmed the ESP32-S3 in C++ with Arduino IDE, using WiFi and WebServer libraries to host the control interface.",
      "Created a login-protected dashboard with separate controls for each light, status feedback, and GPIO outputs documented in the report.",
      "Built and tested the low-voltage prototype with LEDs and relay hardware before demonstrating the final setup according to electrical safety standards.",
    ],
    result:
      "The project successfully demonstrated browser-based control of lights through an ESP32 IoT system, creating a working foundation for future smart home features such as more devices, sensors, schedules, and mobile access.",
    tags: ["ESP32-S3", "C++ / Arduino", "Wi-Fi control", "Web dashboard (HTML / CSS / TypeScript / Oracle SQL)", "Electrial/Electeonics principles"],
    image: {
      src: "/images/projects/smart-home/schematic-drawing.png",
      alt: "Smart home project schematic showing the ESP32, relay and light connections",
    },
    gallery: [
      {
        label: "Design",
        src: "/images/projects/smart-home/schematic-drawing.png",
        alt: "Schematic drawing for the ESP32 smart home project",
      },
      {
        label: "UI",
        src: "/images/projects/smart-home/ui.jpeg",
        alt: "Browser dashboard for controlling the smart home lights",
      },
      {
        label: "Final phase",
        src: "/images/projects/smart-home/final-phase.jpeg",
        alt: "Final smart home lighting and relay setup",
      },
    ],
  },
  {
    slug: "bluetooth-access-control-system",
    title: "Bluetooth access control system",
    kicker: "Embedded systems / smart security",
    what: "Designed and implimented a secure access-control system that unlocks a relay-controlled mechanism when an authorised Bluetooth device is detected.",
    how: [
      "Designed the ESP32 circuit with a relay, LCD display, buzzer, and green, red, and yellow status LEDs, using Arduino IDE with BluetoothSerial and LiquidCrystal libraries.",
      "Implemented MAC-address verification so the system could distinguish an authorised Bluetooth device from an unauthorised one.",
      "Tested the complete access flow, including LCD messages, LED states, buzzer patterns, and relay switching for waiting, granted, and denied scenarios.",
    ],
    result:
      "The Bluetooth-based access-control system successfully detected authorised devices and granted access, while consistently denying unauthorised devices. It responded quickly and reliably during multiple test cycles, with clear visual and audible feedback.",
    tags: ["ESP32", "Bluetooth", "MAC verification", "Relay control"],
    image: {
      src: "/images/projects/bluetooth-access-control/circuit-diagram.png",
      alt: "Circuit diagram for the ESP32 Bluetooth access control system",
    },
    gallery: [
      {
        label: "Design",
        src: "/images/projects/bluetooth-access-control/circuit-diagram.png",
        alt: "ESP32 Bluetooth access control circuit diagram with LCD, relay, LEDs and buzzer",
      },
      {
        label: "Code",
        src: "/images/projects/bluetooth-access-control/code-snippet.png",
        alt: "Arduino code for Bluetooth access verification and feedback control",
      },
      {
        label: "Assembly",
        src: "/images/projects/bluetooth-access-control/assembly-troubleshooting.jpeg",
        alt: "Assembly and troubleshooting of the Bluetooth access control prototype",
      },
    ],
  },
  {
    slug: "temperature-sensor-prototype",
    title: "Temperature sensor prototype",
    kicker: "Embedded systems / sensor design",
    what: "Designed an embedded temperature-monitoring system that measures an LM35 sensor signal and displays the temperature on two 7-segment displays.",
    how: [
      "Designed and simulated the circuit in Proteus using an ATmega328P, LM35 temperature sensor, two 7-segment displays, and current-limiting resistors.",
      "Programmed the microcontroller in C to read the sensor through its ADC, convert the analog voltage into a temperature value, and separate the value into tens and units digits.",
      "Troubleshot unstable readings, compilation errors, ADC configuration, and display connections through repeated verification of the circuit and program logic.",
    ],
    result:
      "The temperature-monitoring system was successfully designed and simulated. The ATmega328P correctly converted the LM35 sensor voltage into a digital temperature value and displayed it on the two 7-segment displays.",
    tags: ["ATmega328P", "LM35 sensor", "ADC", "Proteus simulation"],
    image: {
      src: "/images/projects/temperature-sensor-prototype/schematic.png",
      alt: "Proteus schematic for the ATmega328P temperature sensor prototype",
    },
    gallery: [
      {
        label: "Design",
        src: "/images/projects/temperature-sensor-prototype/schematic.png",
        alt: "Proteus circuit schematic with an ATmega328P, LM35 sensor and two 7-segment displays",
      },
      {
        label: "Code",
        src: "/images/projects/temperature-sensor-prototype/code.png",
        alt: "C code for reading the LM35 temperature sensor and driving the displays",
      },
    ],
  },
  {
    slug: "avr-dual-mode-temperature-timer",
    title: "AVR dual-mode temperature and timer",
    kicker: "Embedded systems / AVR control",
    what: "Designed and simulated an interrupt-driven AVR system that counts upward to 28 and temporarily displays the temperature measured by an LM35 sensor.",
    how: [
      "Designed and simulated the Proteus circuit using an ATmega328P, LM35 temperature sensor, 74LS47 display drivers, two 7-segment displays, and an indicator LED.",
      "Programmed the system in embedded C using the ADC to convert the sensor reading, Timer1 to manage the up-count, and interrupt routines to control the display behavior.",
      "Configured the external interrupt to interrupt the up-count and show the current temperature, demonstrating coordinated timer, ADC, and display operation.",
    ],
    result:
      "Both the up-counter and temperature display were successfully simulated. The counter operated up to 28, while the interrupt-driven temperature mode demonstrated practical understanding of AVR interrupts, timers, ADCs, and embedded C programming.",
    tags: ["ATmega328P", "AVR interrupts", "Timer1", "ADC", "Embedded C"],
    image: {
      src: "/images/projects/avr-dual-mode-temperature-timer/schematic.png",
      alt: "Proteus schematic for the AVR dual-mode temperature and timer prototype",
    },
    gallery: [
      {
        label: "Design",
        src: "/images/projects/avr-dual-mode-temperature-timer/schematic.png",
        alt: "ATmega328P schematic with LM35 sensor, timer display and interrupt input",
      },
      {
        label: "Code",
        src: "/images/projects/avr-dual-mode-temperature-timer/code.png",
        alt: "Embedded C code using AVR timer, ADC and external interrupt routines",
      },
    ],
  },
] satisfies Project[];
