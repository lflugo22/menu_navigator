const DATA = {
  devices: {
    title: "Devices",
    desc: "Connected sensors and analyzers. Select a device to view measurements, configure settings, and run calibrations.",
    children: [
      { id: "ph-overview", label: "pH sensor", icon: "pH", sub: "View live readings and device status", color: "#e1f5ee" }
    ]
  },
  "ph-overview": {
    title: "pH sensor",
    desc: "Connected on Channel 1. Live measurement and device menu.",
    instrument: "ph",
    children: [
      { id: "ph-readings", label: "Live readings", icon: "~", sub: "Current pH, ORP, and temperature", color: "#e6f1fb" },
      { id: "ph-device-menu", label: "Device menu", icon: "≡", sub: "Configuration and calibration", color: "#faeeda" },
      { id: "ph-maintenance", label: "Maintenance", icon: "↺", sub: "Sensor maintenance tasks", color: "#eaf3de" },
      { id: "ph-historical", label: "Historical data", icon: "↗", sub: "View data log and trends", color: "#eeedfe" }
    ]
  },
  "ph-readings": { title: "Live readings — pH sensor", type: "readings" },
  "ph-device-menu": {
    title: "Device menu — pH sensor",
    desc: "Configure sensor settings, run calibration, and manage sensor operation.",
    children: [
      { id: "ph-calibration", label: "Calibration", icon: "◎", sub: "1-point, 2-point, and reset", color: "#faeeda" },
      { id: "ph-settings", label: "Settings", icon: "⚙", sub: "Measurement parameters", color: "#e6f1fb" },
      { id: "ph-diagnostics", label: "Diagnostics", icon: "✓", sub: "Sensor health and error log", color: "#eaf3de" }
    ]
  },
  "ph-calibration": {
    title: "Calibration — pH sensor", type: "detail",
    note: "Remove sensor from process and clean before calibration. Use fresh buffer solutions.",
    settings: [
      { name: "1-point calibration", value: "Adjust slope at one pH buffer", path: "Devices → pH sensor → Device menu → Calibration → 1-point", tag: "optional" },
      { name: "2-point calibration", value: "Recommended — use pH 4 and pH 7 buffers", path: "Devices → pH sensor → Device menu → Calibration → 2-point", tag: "optional" },
      { name: "Calibration options", value: "Timeout, buffer recognition", path: "Devices → pH sensor → Device menu → Calibration → Options", tag: "optional" },
      { name: "Reset to default", value: "Clears all calibration data", path: "Devices → pH sensor → Device menu → Calibration → Reset", tag: "optional" }
    ]
  },
  "ph-settings": {
    title: "Settings — pH sensor", type: "detail",
    settings: [
      { name: "Measurement mode", value: "Continuous (default)", path: "Devices → pH sensor → Device menu → Settings", tag: "optional" },
      { name: "Temperature compensation", value: "Auto (NTC or Pt1000)", path: "Devices → pH sensor → Device menu → Settings", tag: "optional" },
      { name: "Manual temperature", value: "Used when no temp sensor connected", path: "Devices → pH sensor → Device menu → Settings", tag: "optional" },
      { name: "Display resolution", value: "0.01 pH (default)", path: "Devices → pH sensor → Device menu → Settings", tag: "optional" },
      { name: "Hold output on calibration", value: "Enabled by default", path: "Devices → pH sensor → Device menu → Settings", tag: "optional" },
      { name: "Signal filter / damping", value: "Smoothing time in seconds", path: "Devices → pH sensor → Device menu → Settings", tag: "optional" }
    ]
  },
  "ph-diagnostics": {
    title: "Diagnostics — pH sensor", type: "detail",
    settings: [
      { name: "Sensor status", value: "OK / Warning / Error", path: "Devices → pH sensor → Device menu → Diagnostics", tag: "optional" },
      { name: "Last calibration date", value: "Timestamp of last successful cal", path: "Devices → pH sensor → Device menu → Diagnostics", tag: "optional" },
      { name: "Calibration slope", value: "mV/pH — healthy range: 54–60 mV/pH", path: "Devices → pH sensor → Device menu → Diagnostics", tag: "optional" },
      { name: "Glass impedance", value: "Indicates sensor aging (MΩ)", path: "Devices → pH sensor → Device menu → Diagnostics", tag: "optional" },
      { name: "Reference impedance", value: "Indicates reference electrode condition", path: "Devices → pH sensor → Device menu → Diagnostics", tag: "optional" },
      { name: "Error log", value: "Last 20 error/warning events", path: "Devices → pH sensor → Device menu → Diagnostics", tag: "optional" }
    ]
  },
  "ph-maintenance": {
    title: "Maintenance — pH sensor", type: "detail",
    warn: "Put outputs on hold before performing maintenance to avoid false alarms.",
    settings: [
      { name: "Clean sensor", value: "Step-by-step cleaning guide", path: "Devices → pH sensor → Maintenance", tag: "optional" },
      { name: "Replace membrane/gel", value: "Reference junction maintenance", path: "Devices → pH sensor → Maintenance", tag: "optional" },
      { name: "Replace electrode", value: "Log replacement date", path: "Devices → pH sensor → Maintenance", tag: "optional" },
      { name: "Storage mode", value: "Prepare sensor for storage", path: "Devices → pH sensor → Maintenance", tag: "optional" }
    ]
  },
  "ph-historical": {
    title: "Historical data — pH sensor", type: "detail",
    note: "The controller stores ~20,000 data points per sensor. Download to USB flash drive via Controller → USB transfer → Logs.",
    settings: [
      { name: "View trend graph", value: "pH, ORP, temperature over time", path: "Devices → pH sensor → Historical data", tag: "optional" },
      { name: "Data log interval", value: "Set in sensor Settings (5 s to 60 min)", path: "Devices → pH sensor → Device menu → Settings", tag: "optional" }
    ]
  },
  notifications: {
    title: "Notifications",
    desc: "System messages, active alarms, and maintenance reminders.",
    children: [
      { id: "notif-errors", label: "Errors", icon: "!", sub: "Active sensor and system errors", color: "#fcebeb" },
      { id: "notif-warnings", label: "Warnings", icon: "△", sub: "Calibration due, maintenance alerts", color: "#faeeda" },
      { id: "notif-reminders", label: "Reminders", icon: "◷", sub: "Scheduled maintenance tasks", color: "#e6f1fb" }
    ]
  },
  "notif-errors": {
    title: "Errors", type: "detail",
    danger: "Address errors promptly. An active error can cause the controller to output a transfer value on analog outputs.",
    settings: [
      { name: "Sensor communication error", value: "Check cable connection and sensor", path: "Notifications → Errors", tag: "required" },
      { name: "Unknown device connected", value: "Rotary switch or firmware mismatch", path: "Notifications → Errors", tag: "required" },
      { name: "System error", value: "Internal controller fault", path: "Notifications → Errors", tag: "required" }
    ]
  },
  "notif-warnings": {
    title: "Warnings", type: "detail",
    settings: [
      { name: "Calibration due", value: "Sensor calibration interval exceeded", path: "Notifications → Warnings", tag: "optional" },
      { name: "Maintenance due", value: "Cleaning or part replacement needed", path: "Notifications → Warnings", tag: "optional" },
      { name: "Sensor warning", value: "Glass impedance, reference drift", path: "Notifications → Warnings", tag: "optional" }
    ]
  },
  "notif-reminders": {
    title: "Reminders", type: "detail",
    settings: [
      { name: "Electrode replacement", value: "Based on configured interval", path: "Notifications → Reminders", tag: "optional" },
      { name: "Filter/membrane service", value: "Reference junction service reminder", path: "Notifications → Reminders", tag: "optional" }
    ]
  },
  controller: {
    title: "Controller",
    desc: "SC4500 system settings — general configuration, connectivity, USB transfer, and service.",
    children: [
      { id: "ctrl-general", label: "General", icon: "G", sub: "Language, time, display, facility", color: "#e6f1fb" },
      { id: "ctrl-password", label: "Password", icon: "🔒", sub: "Access protection settings", color: "#eeedfe" },
      { id: "ctrl-connectivity", label: "Connectivity", icon: "⇌", sub: "LAN, Wi-Fi, Cellular, Claros", color: "#e1f5ee" },
      { id: "ctrl-usb", label: "USB transfer", icon: "↓", sub: "Firmware updates and data logs", color: "#faeeda" },
      { id: "ctrl-license", label: "License", icon: "✦", sub: "Enter and view license keys", color: "#eaf3de" },
      { id: "ctrl-service", label: "Service", icon: "⚙", sub: "Restore firmware, restart, reset", color: "#fcebeb" }
    ]
  },
  "ctrl-general": {
    title: "General — Controller settings", type: "detail",
    settings: [
      { name: "Language", value: "Display and log file language", path: "Controller → General → Language", tag: "optional" },
      { name: "Time zone", value: "Region and city — not available when connected to Claros", path: "Controller → General → Time zone", tag: "optional" },
      { name: "Time format", value: "12 h (default) or 24 h", path: "Controller → General → Time format", tag: "optional" },
      { name: "Time", value: "Set current time — not available when Claros is connected", path: "Controller → General → Time", tag: "optional" },
      { name: "Date", value: "Set current date — not available when Claros is connected", path: "Controller → General → Date", tag: "optional" },
      { name: "Facility", value: "32 characters max, default: not set", path: "Controller → General → Facility", tag: "optional" },
      { name: "Location", value: "32 characters max, default: serial number", path: "Controller → General → Location", tag: "optional" },
      { name: "Device menu", value: "Controller name and serial number", path: "Controller → General → Device menu", tag: "optional" },
      { name: "Brightness", value: "20%, 40%, 60% (default), 80%, 100%", path: "Controller → General → Display → Brightness", tag: "optional" },
      { name: "Screen lock", value: "Auto-lock after inactivity — enabled by default", path: "Controller → General → Display → Screen lock", tag: "optional" },
      { name: "Waiting time", value: "1, 3, 5, 10, or 15 minutes before lock", path: "Controller → General → Display → Waiting time", tag: "optional" }
    ]
  },
  "ctrl-password": {
    title: "Password — Controller settings", type: "detail",
    note: "Default password is 'SC4500'. Password protects menus for 30 minutes after entry. 4–8 characters, case-sensitive.",
    settings: [
      { name: "Password protection", value: "ON / OFF — default: OFF", path: "Controller → Password → Password protection", tag: "optional" },
      { name: "Change password", value: "Enter old password, then new (4–8 chars)", path: "Controller → Password → Change password", tag: "optional" },
      { name: "Reset password", value: "Via Controller → Service → Reset password", path: "Controller → Service → Reset password", tag: "optional" }
    ]
  },
  "ctrl-connectivity": {
    title: "Connectivity — Controller settings",
    desc: "Network connection options depend on controller version.",
    children: [
      { id: "conn-lan", label: "LAN", icon: "⇌", sub: "Ethernet port configuration", color: "#e6f1fb" },
      { id: "conn-wifi", label: "Wi-Fi", icon: "◉", sub: "External USB box WiFi required", color: "#eeedfe" },
      { id: "conn-cellular", label: "Cellular", icon: "▲", sub: "External USB box cellular required", color: "#e1f5ee" },
      { id: "conn-claros", label: "Claros", icon: "☁", sub: "Hach cloud platform connection", color: "#faeeda" }
    ]
  },
  "conn-lan": {
    title: "LAN — Connectivity", type: "detail",
    note: "Ethernet cable M12 to RJ45 required (user-supplied). An Ethernet port upgrade kit may be needed based on controller config.",
    settings: [
      { name: "Ethernet ports mode", value: "None / Chaining / Split / Mix IEP / IEP only", path: "Controller → Connectivity → LAN → Ethernet ports", tag: "required" },
      { name: "DHCP", value: "ON (default) — auto IP address from network", path: "Controller → Connectivity → LAN → LAN port config", tag: "optional" },
      { name: "IP address", value: "Set manually if DHCP is OFF", path: "Controller → Connectivity → LAN → LAN port config", tag: "optional" },
      { name: "Netmask", value: "Set manually if DHCP is OFF", path: "Controller → Connectivity → LAN → LAN port config", tag: "optional" },
      { name: "Default gateway", value: "Set manually if DHCP is OFF", path: "Controller → Connectivity → LAN → LAN port config", tag: "optional" },
      { name: "DNS address", value: "Set manually if DHCP is OFF", path: "Controller → Connectivity → LAN → LAN port config", tag: "optional" },
      { name: "LAN server", value: "Share connection with other controllers (Chaining only)", path: "Controller → Connectivity → LAN → LAN port config", tag: "optional" }
    ]
  },
  "conn-wifi": {
    title: "Wi-Fi — Connectivity", type: "detail",
    note: "External USB box WiFi required. Supported auth: WEP (not recommended), WPA2 Personal/PSK, WPA2 Enterprise.",
    settings: [
      { name: "Wi-Fi connectivity", value: "ON / OFF", path: "Controller → Connectivity → Wi-Fi", tag: "required" },
      { name: "Network (SSID)", value: "Select access point from list", path: "Controller → Connectivity → Wi-Fi → Network", tag: "required" },
      { name: "Authentication", value: "WEP / WPA2 PSK / WPA2 Enterprise", path: "Controller → Connectivity → Wi-Fi → Network", tag: "optional" },
      { name: "Wi-Fi password", value: "PSK or Enterprise password", path: "Controller → Connectivity → Wi-Fi → Network", tag: "optional" },
      { name: "User name", value: "Enterprise networks only", path: "Controller → Connectivity → Wi-Fi → Network", tag: "optional" }
    ]
  },
  "conn-cellular": {
    title: "Cellular — Connectivity", type: "detail",
    note: "Cellular is for Claros connection only. External USB box cellular required.",
    settings: [
      { name: "Cellular connectivity", value: "ON / OFF", path: "Controller → Connectivity → Cellular", tag: "required" },
      { name: "Provider (APN)", value: "Telenor (default) or Other", path: "Controller → Connectivity → Cellular", tag: "optional" },
      { name: "APN name", value: "Set when Provider = Other", path: "Controller → Connectivity → Cellular", tag: "optional" },
      { name: "SIM PIN", value: "Set if SIM card is PIN-locked", path: "Controller → Connectivity → Cellular", tag: "optional" },
      { name: "Internet sharing", value: "Share connection with other controllers", path: "Controller → Connectivity → Cellular", tag: "optional" }
    ]
  },
  "conn-claros": {
    title: "Claros — Connectivity", type: "detail",
    note: "Ensure controller has internet access before enabling Claros. Time and date will be managed by Claros once connected.",
    settings: [
      { name: "Claros", value: "ON / OFF", path: "Controller → Connectivity → Claros", tag: "required" },
      { name: "Provision in Claros", value: "Complete setup in the Claros web interface", path: "Claros web interface", tag: "required" }
    ]
  },
  "ctrl-usb": {
    title: "USB transfer", type: "detail",
    note: "USB drive must be FAT12/16, FAT32, exFAT, or NTFS with at least 350 MB free. Use the front panel USB port.",
    settings: [
      { name: "Controller update", value: "Install firmware from USB — .swu file in root", path: "Controller → USB transfer → Controller update", tag: "optional" },
      { name: "Sensor update", value: "Install sensor firmware — .tar file in root", path: "Controller → USB transfer → Sensor update", tag: "optional" },
      { name: "Software module", value: "Install or delete a software module (e.g., RTC)", path: "Controller → USB transfer → Software module", tag: "optional" },
      { name: "Logs", value: "Download .csv data and event logs for all devices", path: "Controller → USB transfer → Logs", tag: "optional" },
      { name: "Service logs", value: "Download diagnostic data", path: "Controller → USB transfer → Service logs", tag: "optional" }
    ]
  },
  "ctrl-license": {
    title: "License", type: "detail",
    note: "Contact Hach sales or technical support to obtain a license key for Prognosys, Modbus TCP, or software modules.",
    settings: [
      { name: "Enter license keys", value: "Activate Prognosys, Modbus TCP, RTC modules", path: "Controller → License → Enter license keys", tag: "optional" },
      { name: "Activated license keys", value: "View list of activated software", path: "Controller → License → Activated license keys", tag: "optional" }
    ]
  },
  "ctrl-service": {
    title: "Service — Controller settings", type: "detail",
    danger: "Restore firmware and restart will interrupt measurements. Ensure outputs are in safe state before proceeding.",
    settings: [
      { name: "Restore firmware", value: "Roll back to pre-update firmware (once only)", path: "Controller → Service → Restore firmware", tag: "optional" },
      { name: "Restart controller", value: "Soft reboot — settings preserved", path: "Controller → Service → Restart controller", tag: "optional" },
      { name: "Reset password", value: "Resets password to default 'SC4500'", path: "Controller → Service → Reset password", tag: "optional" },
      { name: "Hach service", value: "Service diagnostics — Hach technician use", path: "Controller → Service → Hach service", tag: "optional" }
    ]
  },
  outputs: {
    title: "Outputs",
    desc: "Configure relays, analog outputs, and digital communication protocols.",
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
  "out-hvrelay": {
    title: "High voltage relay — Outputs", type: "detail",
    note: "Two SPDT relays, NC/COM/NO. AC max 240 VAC / 5 A resistive. Wire through the high-voltage barrier strain relief.",
    settings: [
      { name: "Source", value: "Select sensor or analog input", path: "Outputs → High voltage relay → System setup", tag: "required" },
      { name: "Parameter", value: "pH, ORP, temperature, etc.", path: "Outputs → High voltage relay → System setup", tag: "required" },
      { name: "Function", value: "Alarm / Feeder control / 2-point / Warning / PWM / Frequency / Timer / System error", path: "Outputs → High voltage relay → System setup", tag: "required" },
      { name: "Transfer", value: "Relay energized or de-energized on fault", path: "Outputs → High voltage relay → System setup", tag: "optional" },
      { name: "Data logger interval", value: "OFF / 5–30 min", path: "Outputs → High voltage relay → System setup", tag: "optional" },
      { name: "Function test", value: "Force relay ON/OFF for testing", path: "Outputs → High voltage relay → Test/Maintenance", tag: "optional" }
    ]
  },
  "out-lvrelay": {
    title: "Low voltage relay — Outputs", type: "detail",
    note: "Optional low voltage relay module required (Slot 2). Max 30 VDC / 1 A. Cannot be used in hazardous locations.",
    settings: [
      { name: "Configuration", value: "Same options as high voltage relay", path: "Outputs → Low voltage relay → System setup", tag: "optional" },
      { name: "4 relay channels", value: "ch1–ch4, each independently configurable", path: "Outputs → Low voltage relay → System setup", tag: "optional" }
    ]
  },
  "out-ma": {
    title: "mA outputs — Outputs", type: "detail",
    note: "4–20 mA output module required (Slot 1). Only one module can be installed. Five output channels.",
    settings: [
      { name: "Source / Parameter", value: "Select measurement source for each channel", path: "Outputs → mA outputs → System setup", tag: "required" },
      { name: "Scale", value: "0–20 mA or 4–20 mA", path: "Outputs → mA outputs → System setup", tag: "required" },
      { name: "Low value / High value", value: "Engineering units at 0/4 mA and 20 mA", path: "Outputs → mA outputs → System setup", tag: "required" },
      { name: "Function", value: "Linear control or PID control", path: "Outputs → mA outputs → System setup", tag: "optional" },
      { name: "Transfer value", value: "Output on sensor fault — default 10 mA", path: "Outputs → mA outputs → System setup", tag: "optional" },
      { name: "Error mode", value: "Hold last value or Transfer on error", path: "Outputs → mA outputs → System setup", tag: "optional" },
      { name: "Data logger interval", value: "OFF / 5–30 min", path: "Outputs → mA outputs → System setup", tag: "optional" }
    ]
  },
  "out-modbus": {
    title: "Modbus RS232/RS485 — Outputs", type: "detail",
    note: "Optional Modbus RS module required (Slot 0). Configure before connecting to Modbus master.",
    settings: [
      { name: "Modbus address", value: "Slave address (1–247)", path: "Outputs → Modbus RS232/RS485", tag: "required" },
      { name: "Baud rate", value: "9600 / 19200 (default) / 38.4K / 57.6K / 115.2K", path: "Outputs → Modbus RS232/RS485", tag: "required" },
      { name: "Modbus mode", value: "RTU (default) or ASCII", path: "Outputs → Modbus RS232/RS485", tag: "optional" },
      { name: "Parity", value: "None (default) / Even / Odd", path: "Outputs → Modbus RS232/RS485", tag: "optional" },
      { name: "Stop bits", value: "1 (default) or 2", path: "Outputs → Modbus RS232/RS485", tag: "optional" },
      { name: "Data order", value: "Little endian (default) or Big endian", path: "Outputs → Modbus RS232/RS485", tag: "optional" }
    ]
  },
  "out-modbustcp": {
    title: "Modbus TCP — Outputs", type: "detail",
    note: "License key required. Configure LAN port to Split or Modbus TCP mode before use. Recommended poll rate: 500 ms–5 s.",
    settings: [
      { name: "Modbus TCP", value: "ON / OFF", path: "Outputs → Modbus TCP", tag: "required" },
      { name: "Telegram", value: "Add devices and tags to the data structure", path: "Outputs → Modbus TCP → Telegram", tag: "required" },
      { name: "Modbus address", value: "Slave address 1–255", path: "Outputs → Modbus TCP", tag: "optional" },
      { name: "Data order", value: "Normal (default) or Swapped float byte pairs", path: "Outputs → Modbus TCP", tag: "optional" },
      { name: "Virtual Modbus slave", value: "Copies of configured devices", path: "Outputs → Modbus TCP", tag: "optional" }
    ]
  },
  "out-profibus": {
    title: "Profibus DP — Outputs", type: "detail",
    note: "Profibus DP module required (Slot 0). Used in factory/production automation with centralized PLC.",
    settings: [
      { name: "Profibus DP", value: "ON / OFF", path: "Outputs → Profibus DP", tag: "required" },
      { name: "Fieldbus address", value: "Slave address on Profibus network", path: "Outputs → Profibus DP", tag: "required" },
      { name: "Telegram", value: "Add devices and tags to data structure", path: "Outputs → Profibus DP → Telegram", tag: "required" },
      { name: "Data order", value: "Normal IEEE Big Endian (default) or Swapped", path: "Outputs → Profibus DP", tag: "optional" }
    ]
  },
  "out-profinet": {
    title: "PROFINET — Outputs", type: "detail",
    note: "PROFINET module required (Slot 2). Set Ethernet ports to IEP only or Mix IEP. Line, Star, and Ring topologies supported.",
    settings: [
      { name: "Ethernet ports", value: "Must be set to IEP only or Mix IEP first", path: "Controller → Connectivity → LAN → Ethernet ports", tag: "required" },
      { name: "Configuration", value: "See PROFINET documentation DOC343.52.90752", path: "Outputs → PROFINET", tag: "required" }
    ]
  },
  "out-ethernetip": {
    title: "EtherNet/IP — Outputs", type: "detail",
    note: "EtherNet/IP module required (Slot 2). Set Ethernet ports to IEP only or Mix IEP. Line, Star, and Ring topologies supported.",
    settings: [
      { name: "Ethernet ports", value: "Must be set to IEP only or Mix IEP first", path: "Controller → Connectivity → LAN → Ethernet ports", tag: "required" },
      { name: "Configuration", value: "See EtherNet/IP documentation DOC343.52.90750", path: "Outputs → EtherNet/IP", tag: "required" }
    ]
  },
  "out-hold": {
    title: "Hold outputs", type: "detail",
    note: "Use Hold before calibration or maintenance to prevent false output changes. Release all outputs when done.",
    settings: [
      { name: "Set outputs on hold", value: "Hold last value or show Transfer value", path: "Outputs → Hold outputs → Set outputs on hold", tag: "optional" },
      { name: "Release all outputs", value: "Returns all analog outputs to live measurement", path: "Outputs → Hold outputs → Release all outputs", tag: "optional" }
    ]
  },
  information: {
    title: "Information",
    desc: "Controller details, connected device information, and network status.",
    children: [
      { id: "info-controller", label: "Controller details", icon: "i", sub: "Serial, firmware, facility, location", color: "#e6f1fb" },
      { id: "info-devices", label: "SC devices details", icon: "◈", sub: "Connected device firmware and status", color: "#e1f5ee" },
      { id: "info-software", label: "Software details", icon: "✦", sub: "Installed software modules", color: "#eeedfe" },
      { id: "info-connectivity", label: "Connectivity status", icon: "⇌", sub: "Network connection health", color: "#faeeda" }
    ]
  },
  "info-controller": {
    title: "Controller details", type: "detail",
    settings: [
      { name: "Serial number", value: "Controller serial number", path: "Information → Controller details", tag: "optional" },
      { name: "Software package", value: "Installed firmware version", path: "Information → Controller details", tag: "optional" },
      { name: "Facility", value: "User-defined facility name", path: "Information → Controller details", tag: "optional" },
      { name: "Location", value: "User-defined location name", path: "Information → Controller details", tag: "optional" }
    ]
  },
  "info-devices": {
    title: "SC devices details", type: "detail",
    settings: [
      { name: "Device type", value: "Sensor or analyzer model", path: "Information → SC devices details", tag: "optional" },
      { name: "Serial number", value: "Per connected device", path: "Information → SC devices details", tag: "optional" },
      { name: "Firmware version", value: "Device firmware installed", path: "Information → SC devices details", tag: "optional" },
      { name: "Claros status", value: "Provisioned or not provisioned", path: "Information → SC devices details", tag: "optional" }
    ]
  },
  "info-software": {
    title: "Software details", type: "detail",
    settings: [
      { name: "Module type", value: "E.g., RTC-N/DN, RTC-P", path: "Information → Software details", tag: "optional" },
      { name: "Serial number", value: "Module serial number", path: "Information → Software details", tag: "optional" },
      { name: "Firmware version", value: "Module firmware version", path: "Information → Software details", tag: "optional" }
    ]
  },
  "info-connectivity": {
    title: "Connectivity status", type: "detail",
    settings: [
      { name: "Claros", value: "Internet and Claros connection state", path: "Information → Connectivity status → Claros", tag: "optional" },
      { name: "Wi-Fi", value: "Connection state and error guidance", path: "Information → Connectivity status → Wi-Fi", tag: "optional" },
      { name: "Cellular", value: "Connection state and error guidance", path: "Information → Connectivity status → Cellular", tag: "optional" },
      { name: "LAN", value: "State, MAC address, and IP per port", path: "Information → Connectivity status → LAN", tag: "optional" }
    ]
  }
};