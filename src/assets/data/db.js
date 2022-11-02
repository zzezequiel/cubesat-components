import electricalPower from "../../assets/img/EPS-3.jpg"
import solarPanel from "../../assets/img/solar-panels.png"
import EPSS2 from "../../assets/img/EPSS-2-2.jpg"
import SatBus from "../../assets/img/SatBus-3C2-1.jpg"
import SatBus4 from "../../assets/img/SatBus-4RW0-1.jpg"
import Magnetorques from "../../assets/img/Magnetorques.png"
import Payload_controller from "../../assets/img/Payload-controller.jpg"
import Transceiver from "../../assets/img/UHF-Transceiver.jpg"
import SatCOM from "../../assets/img/SatCOM-FMTP.jpg"


  export const Products = [
    {   id: 1,
        amount: 0,
        title: "CubeSat Electrical Power System EPS",
        description: "The NanoAvionics EPS Maximum Power Point Tracking (MPPT) power conditioning and distribution unit, designed to meet a wide variety of customer requirements, with high, (up to 96 %), MPPT and output converter efficiency. The EPS is compatible with different sizes and configurations of solar panels without any additional hardware or software configurations as it is equipped with four MPPT converters with eight solar panel input channels, with a wide range input voltage (2.6 – 18 V) for reliable and flexible power distribution. Each MPPT converter is integrated with Maximum Power Point Tracking capability for high, constant, and efficient energy harvest. <br> Four output converters, two of which can be voltage configured (3 – 12 V), with ten configurable output channels, allow a high number of subsystems to be connected to the EPS and ensure reliable power distribution due to integrated, hardware and software configurable overcurrent protection features. <br> NanoAvionics EPS comes with ready to use on-board Lithium-Ion batteries with an integrated Battery Management System (BMS), which help to prolong mission lifetime and ensure appropriate operating conditions. The EPS can also be configured up to 161 Wh battery capacity, for power hungry systems due to external battery pack support. By using an external battery pack EPS can provide up to 175 W of output power.<br>On-board monitoring and logging features allow the user to easily monitor the EPS operations in all input and output circuits. In the event of an unexpected malfunction occurrence, the EPS watchdog system ensures that the satellite and EPS are rebooted and brought back to reliable, working condition.<br>Additional support hardware, such as an external battery charger, that comes with the EPS allows the user to quickly and effortlessly set up the system for immediate work. The implemented USB port supports EPS configurations for user friendly operations. An industry approved, decentralized communication interface (CAN) with CSP protocol allows plug-and-play EPS integration to the main network.<br>The number of output channels can be expanded to up to 18 by using additional EPS output channel expander.",
        price: 22,
        img: electricalPower
    },
    {
        id: 2,
        amount: 0,
        title: "CubeSat GaAs Solar Panel",
        description: "NanoAvionics GaAs (Triple junction GaInP/GaInAs/Ge epitaxial structure) solar arrays are made of high-performance triple junction space grade solar cells that enable missions with high power requirements.<br>These solar cells reach up to 29.5 % efficiency and have an integrated by-pass diode to protect series connected solar cell string from shadowing effects.<br>Solar cells are assembled using NASA qualified low outgassing adhesive materials in clean room environment.",
        price: 50,
        img: solarPanel
    },
    {
        id: 3,
        amount: 0,
        title: "SmallSat Propulsion System EPSS",
        description: "NanoAvionics is the first aerospace company ready to offer a high-performance and environment-friendly CubeSat propulsion system, also suitable for small satellites. The system has the potential to unlock massive relaunch savings for satellite operators by an estimated 80%.<br>The propulsion system is modular in design, permitting integration with multiple present and future small satellite platforms on the market. The system is designed to be easily scaled to optimize for the client mission by adjusting the volume of the tank to accommodate different propellant quantity needs.<br>This system is fueled with ADN-based monopropellant, which has up to 6% higher specific impulse and 24% higher energy density as compared to the hydrazine employed systems, permitting significant levels of thrust to be stored within a relatively small storage volume. In addition, EPSS allows a high thrust-to-volume-to-weight ratio at a very low power budget requirement making it a very competitive and proven solution, even when compared with the electric (high Isp) propulsion.<br>As ADN-based propellant is “green”, its usage contributes to ESA’s and NASA’s clean space initiatives. Components such as valves, fuel tanks, propellant management system, and high-performance thrusters were designed, manufactured. and supplied by NanoAvionics’ partners – globally trusted aerospace companies.",
        price: 88,
        img: EPSS2
    },
    {
        id: 4,
        amount: 0,
        title: "CubeSat On-Board Computer – Main Bus Unit SatBus 3C2",
        description: "SatBus 3C2 is a flight computer tailored for small-sized satellites and complies with the CubeSat standard. The system is designed to reduce customers’ time and budget costs, minimize required integration effort and effectively increase volume for payload as well as overall system reliability through matched hardware on one board.<br>SatBus 3C2 architecture is based on an STM32 H7 series microcontroller with high-performance and low power ARM Cortex™ M7 32-bit core MCU, operating at a frequency of up to 400 MHz. The same M7-core MCU performs OBC and ADCS functions. External flash and F-RAM memories provide reliable storage for telemetry and user data. Various digital interfaces are available for sensor and other CubeSat hardware support.",
        price: 15,
        img: SatBus
    },
    {
        id: 5,
        amount: 0,
        title: "CubeSat Reaction Wheels Control System SatBus 4RW0",
        description: "NanoAvionics has designed reaction/momentum wheels (RW) which can be ordered as separate components or integral 4 reaction wheels redundant 3-axis control system, enabling precision pointing of the small satellite.<br>Reaction wheels includes DC brushless motors assembled in sealed housing providing no particle emissions and preventing contamination of peripheral devices.",
        price: 32,
        img: SatBus4
    },
    {
        id: 6,
        amount: 0,
        title: "CubeSat Magnetorquer SatBus MTQ",
        description: "Magnetorquers “SatBus MTQ”, designed by NanoAvionics, is a set of two (X and Y-axis) magnetorquer rods and one air core Z-axis magnetorquer coil that are mounted on a PC/104 form factor PCB to enable nanosatellite attitude control.<br>The system is designed as a part of NanoAvionics “SatBus” nanosatellite platform but can be used with any third party ADCS controllers that can provide 3 H-bridge PWM controlled voltage outputs to each torquer coil.",
        price: 7,
        img: Magnetorques
    },
    {
        id: 7,
        amount: 0,
        title: "Payload Controller",
        description: "The payload controller is a subsystem dedicated to the interface between the payloads and NanoAvionics CubeSat and Microsatellite buses. It has a number of different interfaces for payload connection and can buffer data from payloads. It also controls the S-band transmitter or transceiver to transmit the buffered data to Ground Station",
        price: 47,
    img: Payload_controller
    },
    {
        id: 8,
        amount: 0,
        title: "CubeSat UHF Digital Radio Transceiver SatCOM UHF",
        description: "CubeSat UHF Digital Radio Transceiver SatCOM UHF<br>This UHF radio utilizes a half-duplex architecture with a high-performance low power consumption transceiver which is controlled by a dedicated ARM Cortex-M4 MCU. The radio uses an ultra-high frequency band (UHF) that is programmable in 395 to 440 MHz range.<br>The module supports GFSK2 modulation and 2400 to 9600 bit rates. Modulation is configured to be ¼ of symbol rate and consequently, it is MSK modulation.",
        price: 77,
        img: Transceiver
    },
    {
        id: 9,
        amount: 0,
        title: "CubeSat FM Repeater SatCOM FMTP",
        description: "SatCOM TP0 is a high-quality FM repeater for small satellites, designed by NanoAvionics’ partner LY3H. It is fully pre-programmed and configured prior to shipment according to customer request. No dedicated power-on signal is required, the device is either ON or OFF state and is ready for operation immediately after turning on.<br>Right after the repeater is activated a voice/CW message is transmitted once. Later the message is transmitted repeatedly every 4 minutes if uplink (CQ) signal is detected. The repeater can share single reception antenna with other receivers working on a similar band through a passive, therefore highly reliable electronic splitter circuit.",
        price: 120,
        img: SatCOM
    }
    ]


    