export const saveState = state => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('data', serializedState);
    } catch (e) {
        console.log('Could not save state');
    }
};

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('data');
        if (serializedState === null) {
            return undefined;
        }

        return JSON.parse(serializedState);
    } catch (e) {
        return undefined;
    }
};
