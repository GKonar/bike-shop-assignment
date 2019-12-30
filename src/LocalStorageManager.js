class LocalStorageManager {
  loadState(localStorageItem) { 
    try {
      const serializedState = localStorage.getItem(localStorageItem);
      if ( serializedState === null ) {
        return;
      }
      return JSON.parse(serializedState);
    } catch(err) {
      return;
    }
  };
  
  saveState(nameOfItem, stateToSave) {
    try {
      const serializedState = JSON.stringify(stateToSave);
      localStorage.setItem(nameOfItem, serializedState);   
      console.log('state saved'); 
    } catch(err) {
      console.log('Local storage error: ', err);
    }
  };
}

export default LocalStorageManager;