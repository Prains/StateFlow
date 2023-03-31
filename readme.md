
StateFlow - альтернатива Redux для маленьких личных проектов. Экономит оперативную память пользователя, позволяет избавить архитектуру и структуру кода от огромных сторов, редюсеров, и экшенов, привносимых Redux. Крайне не рекомендуется использовать в крупных проектах - ограничение на хранение памяти в каждом сторе 10 МБ.

Установка
npm install @your-namespace/state
Использование
import State from '@your-namespace/state';

const state = new State();

// Сохраняем состояние в локальное хранилище
state.permanentStorage('myState', { count: 0 });

// Сохраняем состояние в сеансовое хранилище
state.temporaryStorage('myState', { count: 0 });

// Получаем состояние из хранилища
const myState = state.getItemFromStorage('myState');
console.log(myState); // { count: 0 }
Методы
permanentStorage(stateName, initialStateValue)
Сохраняет состояние в локальное хранилище.

stateName - название состояния, которое будет использоваться в качестве ключа при сохранении в локальное хранилище.
initialStateValue - начальное значение состояния, которое будет сохранено в локальное хранилище при первом вызове метода.
temporaryStorage(stateName, initialStateValue)
Сохраняет состояние в сеансовое хранилище.

stateName - название состояния, которое будет использоваться в качестве ключа при сохранении в сеансовое хранилище.
initialStateValue - начальное значение состояния, которое будет сохранено в сеансовое хранилище при первом вызове метода.
getItemFromStorage(stateName)
Получает состояние из хранилища.

stateName - название состояния, которое будет использоваться в качестве ключа при получении из локального или сеансового хранилища.
Метод getItemFromStorage(stateName) возвращает сохраненное состояние из локального или сеансового хранилища в зависимости от того, где оно было сохранено. Если состояние не было найдено в локальном и сеансовом хранилищах, метод вернет null.

Примечание
Обратите внимание, что сохранение больших объемов данных в локальное или сеансовое хранилище может привести к снижению производительности вашего приложения, а также к превышению лимитов хранилища.


StateFlow is an alternative to Redux for small personal projects. It saves the user's memory, allows you to get rid of the architecture and code structure of huge stores, reducers, and actions that Redux introduces. It is highly not recommended for use in large projects - there is a limit of 10 MB of memory storage in each store.

Installation

npm install @your-namespace/state

Usage

import State from '@your-namespace/state';

const state = new State();

// Save state to local storage
state.permanentStorage('myState', { count: 0 });

// Save state to session storage
state.temporaryStorage('myState', { count: 0 });

// Get state from storage
const myState = state.getItemFromStorage('myState');
console.log(myState); // { count: 0 }
Methods
permanentStorage(stateName, initialStateValue)
Saves the state to local storage.

stateName - the name of the state that will be used as a key when saving to local storage.
initialStateValue - the initial value of the state that will be saved to local storage on the first call of the method.
temporaryStorage(stateName, initialStateValue)
Saves the state to session storage.

stateName - the name of the state that will be used as a key when saving to session storage.
initialStateValue - the initial value of the state that will be saved to session storage on the first call of the method.
getItemFromStorage(stateName)
Retrieves the state from storage.

stateName - the name of the state that will be used as a key when retrieving from local or session storage.
The getItemFromStorage(stateName) method returns the saved state from the local or session storage depending on where it was saved. If the state was not found in the local and session storage, the method returns null.

Note
Note that saving large amounts of data to local or session storage can degrade the performance of your application as well as exceed the limits of the storage.