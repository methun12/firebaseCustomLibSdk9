import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-database.js";
  export function writex(reference,data){
    	const db = getDatabase();
    return set(ref(db, reference), data);
  }
