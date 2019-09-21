/*
 * Refer here for typescript version: https://github.com/nhn/tui.grid/blob/master/src/helper/observable.ts
 * Must follow dependency :(
 */

import idGenerator from '../utils/idGenerator';
import {
    last
} from '../utils/arrayHelpers';

const generateObserverId = idGenerator('@observer_');


// store all observer info
const observerMap = new Map;

// observerId stack for managing recursive observing calls
const observerIdStack = []; // stack 


function callObserver(observerId) {
    observerIdStack.push(observerId);
    observerMap.get(observerId).fn();
    observerIdStack.pop();
}


function setValue(storage, observerIdSet, key, value) {
    // console.log('>>> store update: ', storage, ' by key ', key, ' with ', value)
    if (storage[key] !== value) {
        storage[key] = value;
        Object.keys(observerIdSet).forEach(observerId => {
            callObserver(observerId);
        });
    }
}


function observe(fn) {
    const observerId = generateObserverId();

    console.log(`- Observer Id ${observerId} was generated!`)

    observerMap.set(observerId, {
        fn,
        targetObserverIdSets: []
    });

    callObserver(observerId);

    // return unobserve function
    return () => {
        observerMap.get(observerId).targetObserverIdSets.forEach(idSet => {
            delete idSet[observerId];
        });
    };
}



function observable(obj) {
    // check function is observable
    var resultObj = {};
    const storage = {};
    const propObserverIdSetMap = {};

    Object.defineProperties(resultObj, {
        __storage__: {
            value: storage,
        },
        __propObserverIdSetMap__: {
            value: propObserverIdSetMap,
        }
    });

    const getterKeys = [];
    Object.keys(obj).forEach(key => {
        propObserverIdSetMap[key] = {};
        const observerIdSet = propObserverIdSetMap[key]; // BooleanSet

        // define get 
        Object.defineProperty(resultObj, key, {
            configurable: true,
            enumerable: true, // use for print on nodejs 
            get() {
                // console.log('    + get attribute ', key, ' current stack ', observerIdStack )
                const observerId = last(observerIdStack);
                if (observerId && !observerIdSet[observerId]) {
                    // fill up info self & map 
                    observerIdSet[observerId] = true;
                    observerMap.get(observerId).targetObserverIdSets.push(observerIdSet);
                }
                return storage[key];
            }
        });

        const getter = (Object.getOwnPropertyDescriptor(obj, key) || {}).get;

        /// init storage & define set 
        if (typeof getter !== 'function') {
            storage[key] = obj[key];
            Object.defineProperty(resultObj, key, {
                set(value) {
                    setValue(storage, observerIdSet, key, value);
                }
            });
        } else {
            getterKeys.push(key);
        }
    });

    /// start to observe
    getterKeys.forEach((key) => {
        const observerIdSet = propObserverIdSetMap[key]; 
        const getter = (Object.getOwnPropertyDescriptor(obj, key) || {}).get;

        observe(() => {
            const value = getter.call(resultObj);
            setValue(storage, observerIdSet, key, value);
        });
    });

    return resultObj;
}

export { observe, observable };