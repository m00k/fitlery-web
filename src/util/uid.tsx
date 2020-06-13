const gen4 = (): string => Math.random().toString(16).slice(-4);

const uid = (): string => `${gen4()}-${gen4()}-${gen4()}-${gen4()}`;

export default uid;
