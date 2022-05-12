import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-database.js";
let xx="h";
export function readx(refer){
  const dbRef = ref(getDatabase());
  return get(child(dbRef, refer));
}

