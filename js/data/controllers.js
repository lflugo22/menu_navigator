const CONTROLLERS = {
  sc4500: {
    name: "SC4500",
    mainMenu: {
      devices: {
        id: "devices",
        label: "Devices",
        desc: "Connected sensors and analyzers. Select a device to view measurements, configure settings, and run calibrations.",
        icon: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="2" width="5" height="5" rx="1" stroke="currentColor" stroke-width="1.2"/><rect x="8" y="2" width="5" height="5" rx="1" stroke="currentColor" stroke-width="1.2"/><rect x="1" y="8" width="5" height="5" rx="1" stroke="currentColor" stroke-width="1.2"/><rect x="8" y="8" width="5" height="5" rx="1" stroke="currentColor" stroke-width="1.2"/></svg>',
        children: []
      },
      notifications: {
        id: "notifications",
        label: "Notifications",
        desc: "System messages, active alarms, and maintenance reminders.",
        icon: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1.5a3.5 3.5 0 00-3.5 3.5v2.5L2 9h10l-1.5-1.5V5A3.5 3.5 0 007 1.5z" stroke="currentColor" stroke-width="1.2"/><path d="M5.5 9v.5a1.5 1.5 0 003 0V9" stroke="currentColor" stroke-width="1.2"/></svg>',
        badge: 2,
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
        icon: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="currentColor" stroke-width="1.2"/><path d="M7 4v3l2 1.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>',
        children: [
          { id: "ctrl-general", label: "General", icon: "G", sub: "Language, time, display, facility", color: "#e6f1fb" },
          { id: "ctrl-password", label: "Password", icon: "🔒", sub: "Access protection settings", color: "#eeedfe" },
          { id: "ctrl-connectivity", label: "Connectivity", icon: "⇌", sub: "LAN, Wi-Fi, Cellular, Claros", color: "#e1f5ee" },
          { id: "ctrl-usb", label: "USB transfer", icon: "↓", sub: "Firmware updates and data logs", color: "#faeeda" },
          { id: "ctrl-license", label: "License", icon: "✦", sub: "Enter and view license keys", color: "#eaf3de" },
          { id: "ctrl-service", label: "Service", icon: "⚙", sub: "Restore firmware, restart, reset", color: "#fcebeb" }
        ]
      },
      outputs: {
        id: "outputs",
        label: "Outputs",
        desc: "Configure relays, analog outputs, and digital communication protocols.",
        icon: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h8m0 0L7 4m3 3l-3 3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.5 4v6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>',
        children: [
          { id: "out-hvrelay", label: "High voltage relay", icon: "⚡", sub: "2 SPDT relays — alarm, control, timer", color: "#faeeda" },
          { id: "out-lvrelay", label: "Low voltage relay", icon: "~", sub: "4 SPDT relays — optional module", color: "#eeedfe" },
          { id: "out-ma", label: "mA outputs", icon: "→", sub: "4–20 mA analog output module", color: "#e1f5ee" },
          { id: "out-modbus", label: "Modbus RS232/RS485", icon: "⇌", sub: "Serial fieldbus — optional module", color: "#e6f1fb" },
          { id: "out-modbustcp", label: "Modbus TCP", icon: "⇌", sub: "Ethernet fieldbus — license required", color: "#eaf3de" },
          { id: "out-profibus", label: "Profibus DP", icon: "⇌", sub: "Factory automation fieldbus", color: "#faece7" },
          { id: "out-profinet", label: "PROFINET", icon: "⇌", sub: "Industrial Ethernet — optional module", color: "#fbeaf0" },
          { id: "out-ethernetip", label: "EtherNet/IP", icon: "⇌", sub: "Industrial Ethernet — optional module", color: "#e6f1fb" },
          { id: "out-hold", label: "Hold outputs", icon: "⏸", sub: "Pause analog outputs during maintenance", color: "#f1efe8" }
        ]
      },
      information: {
        id: "information",
        label: "Information",
        desc: "Controller details, connected device information, and network status.",
        icon: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="currentColor" stroke-width="1.2"/><path d="M7 6v4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><circle cx="7" cy="4" r="0.75" fill="currentColor"/></svg>',
        children: [
          { id: "info-controller", label: "Controller details", icon: "i", sub: "Serial, firmware, facility, location", color: "#e6f1fb" },
          { id: "info-devices", label: "SC devices details", icon: "◈", sub: "Connected device firmware and status", color: "#e1f5ee" },
          { id: "info-software", label: "Software details", icon: "✦", sub: "Installed software modules", color: "#eeedfe" },
          { id: "info-connectivity", label: "Connectivity status", icon: "⇌", sub: "Network connection health", color: "#faeeda" }
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
        icon: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1.5a3.5 3.5 0 00-3.5 3.5v2.5L2 9h10l-1.5-1.5V5A3.5 3.5 0 007 1.5z" stroke="currentColor" stroke-width="1.2"/><path d="M5.5 9v.5a1.5 1.5 0 003 0V9" stroke="currentColor" stroke-width="1.2"/></svg>',
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
        icon: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="2" width="5" height="5" rx="1" stroke="currentColor" stroke-width="1.2"/><rect x="8" y="2" width="5" height="5" rx="1" stroke="currentColor" stroke-width="1.2"/><rect x="1" y="8" width="5" height="5" rx="1" stroke="currentColor" stroke-width="1.2"/><rect x="8" y="8" width="5" height="5" rx="1" stroke="currentColor" stroke-width="1.2"/></svg>',
        children: []
      },
      controller: {
        id: "controller",
        label: "sc200 setup",
        desc: "SC200 system settings — general configuration and connectivity.",
        icon: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="currentColor" stroke-width="1.2"/><path d="M7 4v3l2 1.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>',
        children: [
          { id: "ctrl-general", label: "General", icon: "G", sub: "Language, time, display", color: "#e6f1fb" },
          { id: "ctrl-password", label: "Password", icon: "🔒", sub: "Access protection settings", color: "#eeedfe" },
          { id: "ctrl-connectivity", label: "Connectivity", icon: "⇌", sub: "LAN, Modbus", color: "#e1f5ee" },
          { id: "ctrl-service", label: "Service", icon: "⚙", sub: "Restart, reset", color: "#fcebeb" }
        ]
      },
      outputs: {
        id: "outputs",
        label: "Outputs",
        desc: "Configure relays and analog outputs.",
        icon: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h8m0 0L7 4m3 3l-3 3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.5 4v6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>',
        children: [
          { id: "out-relay", label: "Relays", icon: "⚡", sub: "Alarm and control relays", color: "#faeeda" },
          { id: "out-ma", label: "mA outputs", icon: "→", sub: "4–20 mA analog output", color: "#e1f5ee" },
          { id: "out-modbus", label: "Modbus", icon: "⇌", sub: "Serial fieldbus", color: "#e6f1fb" }
        ]
      },
      information: {
        id: "information",
        label: "Information",
        desc: "Controller details and device information.",
        icon: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="currentColor" stroke-width="1.2"/><path d="M7 6v4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><circle cx="7" cy="4" r="0.75" fill="currentColor"/></svg>',
        children: [
          { id: "info-controller", label: "Controller details", icon: "i", sub: "Serial, firmware", color: "#e6f1fb" },
          { id: "info-devices", label: "Device details", icon: "◈", sub: "Connected device info", color: "#e1f5ee" }
        ]
      }
    },
    supports: ["ph", "do"]
  }
};