import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-analytics.js";
import {writex} from "./set.js"
import {readx} from "./get.js"
export function _initialize(config_obj){
      const app = initializeApp(config_obj);
      const analytics = getAnalytics(app);     
}
export function write(referenceName,dataObject){
  return writex(referenceName,dataObject);
}
export function read(referenceNameR){
  return readx(referenceNameR);
}
//export{write,read};
