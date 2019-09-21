const instance = {}; 

const PREFIX_ITEM = 'eform.';

function currentTime(){
    var d = new Date();
    let year = d.getFullYear(), 
        month = d.getMonth() + 1, 
        date = d.getDate(), 
        hours = d.getHours(),
        mins = d.getMinutes(), 
        sec = d.getSeconds();

    if(month < 10)  month = '0' + month;
    if(date < 10)  date = '0' + date;
    if(hours < 10)  hours = '0' + hours;
    if(mins < 10)  mins = '0' + mins;
    if(sec < 10)  sec = '0' + sec;
  
    return `${year}-${month}-${date}_${hours}:${mins}:${sec}`;
}

function generateTemplateKey() {
    return PREFIX_ITEM + currentTime();
}

function listTemplateKeys() {
    let keys = Object.keys(localStorage);

    keys = keys.filter( item => item.startsWith(PREFIX_ITEM));
    return keys;
}

instance.getLastestItem = function() {
    let keys = listTemplateKeys();

    if (keys.length == 0) {
        return null; // 
    }
    keys = keys.sort();

    // get last item
    const key = keys[keys.length - 1];
    return localStorage.getItem(key);
}

instance.saveToLocalStorage = function(pageStructure) {

    // grab data 
    const structureData = pageStructure.getPageState(); 
    const value = JSON.stringify(structureData); 

    // generate template key  
    const key = generateTemplateKey();

    localStorage.setItem(key, value);
}

export default instance;