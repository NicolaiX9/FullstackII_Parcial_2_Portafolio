import '@testing-library/jest-dom'

// Mock de MatchMedia de Ant Design
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => {},
    }),
});

// Mock de ResizeObserver para componentes de Ant Design en jsdom
global.ResizeObserver = class ResizeObserver {
    constructor(callback) {}
    observe() {}
    unobserve() {}
    disconnect() {}
};