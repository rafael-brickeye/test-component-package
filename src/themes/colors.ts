// All values used here come from Figma file design styling

const background = {
  white: '#ffffff',
};

const surface = {
  grey: '#C5CCD6',
};

const text = {
  black: '#000000DE',
  grey: '#71727A',
  white: '#ffffff',
};

const brand = {
  protect: {
    primary: {
      main: '#0048BB',
    },
  },
  lumicon: {
    primary: {
      light: '#FF9F34',
      main: '#FF8C4D',
      dark: '#FF5968',
    },
    secondary: {
      light: '#F46167',
      main: '#F05E40',
      dark: '#9E9E9E',
    },
    info: {
      light: '#64B6F7',
      main: '#2196F3',
      dark: '#0B79D0',
    },
    error: {
      light: '#F88078',
      main: '#F44336',
      dark: '#E31B0C',
    },
    warning: {
      light: '#FFB547',
      main: '#FF9800',
      dark: '#C77700',
    },
    success: {
      light: '#7BC67E',
      main: '#4CAF50',
      dark: '#3B873E',
    },
  },
};

const shadow = {
  default: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  wide: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
};

export const color = {text, brand, surface, background, shadow};
