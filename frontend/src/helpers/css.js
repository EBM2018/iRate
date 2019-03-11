export const triggerActive = (e) => {
    e.target.className = e.target.className + " is-active"
};

export const triggerInactive = (e) => {
    e.target.className = e.target.className.replace(' is-active', '');
};
