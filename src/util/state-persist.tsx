export const loadState = <T extends any>(key: string): T | undefined => {
  try {
    const stateJson = localStorage.getItem(key);
    if (stateJson) {
      return JSON.parse(stateJson);
    }
  } catch (err) {
    console.warn('Unable to hypdrate state from storage', err);
  }
};

export const persistState = <T extends any>(key: string, state: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(state));
  } catch (err) {
    console.warn('Unable to persist state to storage', err);
  }
};
