const DEVICE_ASSIGNMENTS = {
  sc4500: {
    ph: { id: "ph-overview", channel: 1 },
    do: { id: "do-overview", channel: 2 },
    turbidity: { id: "turb-overview", channel: 3 }
  },
  sc200: {
    ph: { id: "ph-overview", channel: 1 },
    do: { id: "do-overview", channel: 2 }
  }
};

const LABEL_OVERRIDES = {
  sc4500: {},
  sc200: {}
};

function getLabel(key, controllerId) {
  const overrides = LABEL_OVERRIDES[controllerId] || {};
  if (overrides[key] !== undefined) return overrides[key];
  return null;
}

function getControllerDevices(controllerId) {
  const assignments = DEVICE_ASSIGNMENTS[controllerId] || {};
  const controller = CONTROLLERS[controllerId];
  if (!controller) return [];
  
  const supportedTypes = controller.supports || [];
  const devices = [];
  
  supportedTypes.forEach(type => {
    if (assignments[type] && DEVICE_TEMPLATES[type]) {
      devices.push({
        type,
        template: DEVICE_TEMPLATES[type],
        assignment: assignments[type]
      });
    }
  });
  
  return devices;
}

function buildControllerData(controllerId) {
  const controller = CONTROLLERS[controllerId];
  if (!controller) return null;
  
  const DATA = {};
  
  Object.keys(controller.mainMenu).forEach(sectionKey => {
    const section = controller.mainMenu[sectionKey];
    DATA[sectionKey] = {
      title: getLabel(sectionKey, controllerId) || section.label,
      desc: section.desc,
      children: section.children ? section.children.map(child => ({...child})) : []
    };
    
    if (sectionKey === 'devices') {
      const devices = getControllerDevices(controllerId);
      DATA[sectionKey].children = devices.map(d => ({
        id: d.assignment.id,
        label: d.template.title,
        icon: d.type === 'ph' ? 'pH' : d.type === 'do' ? 'O₂' : 'T',
        sub: d.template.description,
        color: '#e1f5ee',
        instrument: d.type
      }));
    }
  });
  
  const devices = getControllerDevices(controllerId);
  devices.forEach(d => {
    const deviceId = d.assignment.id;
    const template = d.template;
    
    DATA[deviceId] = {
      title: template.title,
      desc: template.description,
      instrument: d.type,
      children: template.children.map(c => ({...c}))
    };
    
    if (template.pages) {
      Object.keys(template.pages).forEach(pageKey => {
        const pageId = `${d.type}-${pageKey}`;
        DATA[pageId] = {...template.pages[pageKey]};
      });
    }
  });
  
  Object.keys(GLOBAL_PAGES).forEach(pageKey => {
    DATA[pageKey] = {...GLOBAL_PAGES[pageKey]};
  });
  
  return DATA;
}