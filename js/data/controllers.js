const CONTROLLERS = {
  sc4500: {
    name: "SC4500",
    mainMenu: {
       devices: {
         id: "devices",
         label: "Devices",
         desc: "Connected sensors and analyzers. Select a device to view measurements, configure settings, and run calibrations.",
         layout: "single-column",
         children: []
       },
       notifications: {
         id: "notifications",
         label: "Notifications",
         desc: "System messages, active alarms, and maintenance reminders.",
         layout: "single-column",
         children: [
           { id: "notif-errors", label: "Errors", icon: "!", sub: "Active sensor and system errors", color: "#fcebeb" },
           { id: "notif-warnings", label: "Warnings", icon: "△", sub: "Calibration due, maintenance alerts", color: "#faeeda" },
           { id: "notif-reminders", label: "Reminders", icon: "◷", sub: "Scheduled maintenance tasks", color: "#e6f1fb" }
         ]
       },
       controller: {
         id: "controller",
         label: "Controller",
         desc: "SC4500 system settings — general configuration, connectivity, USB transfer, and service.",
         layout: "single-column",
         children: [
           { id: "ctrl-general", label: "General", sub: "Language, time, display, facility", color: "#e6f1fb" },
           { id: "ctrl-password", label: "Password", sub: "Access protection settings", color: "#eeedfe" },
           { id: "ctrl-connectivity", label: "Connectivity", sub: "LAN, Wi-Fi, Cellular, Claros", color: "#e1f5ee" },
           { id: "ctrl-usb", label: "USB transfer", sub: "Firmware updates and data logs", color: "#faeeda" },
           { id: "ctrl-license", label: "License", sub: "Enter and view license keys", color: "#eaf3de" },
           { id: "ctrl-service", label: "Service", sub: "Restore firmware, restart, reset", color: "#fcebeb" }
         ]
       },
       outputs: {
         id: "outputs",
         label: "Outputs",
         desc: "Configure relays, analog outputs, and digital communication protocols.",
         layout: "single-column",
         children: [
           { id: "out-hvrelay", label: "High voltage relay", sub: "2 SPDT relays — alarm, control, timer", color: "#faeeda" },
           { id: "out-lvrelay", label: "Low voltage relay", sub: "4 SPDT relays — optional module", color: "#eeedfe" },
           { id: "out-ma", label: "mA outputs", sub: "4–20 mA analog output module", color: "#e1f5ee" },
           { id: "out-modbus", label: "Modbus RS232/RS485", sub: "Serial fieldbus — optional module", color: "#e6f1fb" },
           { id: "out-modbustcp", label: "Modbus TCP", sub: "Ethernet fieldbus — license required", color: "#eaf3de" },
           { id: "out-profibus", label: "Profibus DP", sub: "Factory automation fieldbus", color: "#faece7" },
           { id: "out-profinet", label: "PROFINET", sub: "Industrial Ethernet — optional module", color: "#fbeaf0" },
           { id: "out-ethernetip", label: "EtherNet/IP", sub: "Industrial Ethernet — optional module", color: "#e6f1fb" },
           { id: "out-hold", label: "Hold outputs", sub: "Pause analog outputs during maintenance", color: "#f1efe8" }
         ]
       },
       information: {
         id: "information",
         label: "Information",
         desc: "Controller details, connected device information, and network status.",
         layout: "single-column",
         children: [
           { id: "info-controller", label: "Controller details", sub: "Serial, firmware, facility, location", color: "#e6f1fb" },
           { id: "info-devices", label: "SC devices details", sub: "Connected device firmware and status", color: "#e1f5ee" },
           { id: "info-software", label: "Software details", sub: "Installed software modules", color: "#eeedfe" },
           { id: "info-connectivity", label: "Connectivity status", sub: "Network connection health", color: "#faeeda" }
         ]
       }
    },
    supports: ["ph", "do", "turbidity"],
    settings: {
      default: true
    }
  },
  sc200: {
    name: "SC200",
    mainMenu: {
      diagnostics: {
        id: "diagnostics",
        label: "Diagnostics",
        desc: "Select the device (controller, sensor, network card) with the warning or error and push ENTER.",
        children: [
          { id: "diag-controller", label: "sc200", icon: "!", sub: "System errors and warnings", color: "#fcebeb" },
          { id: "diag-sensor", label: "Sensors", icon: "!", sub: "Active sensor errors and warnings", color: "#fcebeb" },
          { id: "diag-modules", label: "Modules", icon: "◷", sub: "Installed modules diagnostics", color: "#e6f1fb" }
        ]
      },
      devices: {
        id: "devices",
        label: "Sensor setup",
        desc: "Connected sensors and analyzers. Select a device to view measurements, configure settings, and run calibrations.",        
        children: []
      },
        controller: {
          id: "controller",
          label: "sc200 setup",
          desc: "SC200 system settings — general configuration and connectivity.",
          children: [
            { id: "sc200-security", label: "Security setup", sub: "Access protection settings", color: "#fcebeb" },
            { id: "sc200-output", label: "Output setup", sub: "Configure 4-20 mA analog outputs", color: "#e1f5ee" },
            { id: "sc200-relay", label: "Relay setup", sub: "Configure SPDT relay contacts", color: "#faeeda" },
            { id: "sc200-display", label: "Display setup", sub: "Measurement order and contrast adjustment", color: "#e6f1fb" },
            { id: "sc200-datetime", label: "Set Date/Time", sub: "Temporal baseline for data logging", color: "#eeedfe" },
            { id: "sc200-datalog", label: "Datalog setup", sub: "Data logging intervals and modes", color: "#f1efe8" },
            { id: "sc200-managedata", label: "Manage Data", sub: "Extract and view data/event logs", color: "#eaf3de" },
            { id: "sc200-errorhold", label: "Error Hold Mode", sub: "System response during communication loss", color: "#fcebeb" },
            { id: "sc200-calculation", label: "Calculation", sub: "Mathematical logic using sensor variables", color: "#eaf3de" },
            { id: "sc200-info", label: "sc200 Information", sub: "Hardware/software data", color: "#e6f1fb" },
            { id: "sc200-discrete", label: "Discrete Input Setup", sub: "Configures three discrete input channels", color: "#e1f5ee" },
            { id: "sc200-language", label: "Language", sub: "Assigns the language used in the controller", color: "#e6f1fb" }
          ]
        },
    },
    supports: ["ph", "do"]
  }
};