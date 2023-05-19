var inv = {
  // INITIALIZE APP
  init : async () => {
    // INDEXED DATABASE SUPPORT
    if (!IDB) {
      alert("INDEXED DB IS NOT SUPPORTED ON THIS BROWSER!");
      return;
    }

    // SERVICE WORKER SUPPORT
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("js-inventory-worker.js");
    } else {
      alert("SERVICE WORKER IS NOT SUPPORTED ON THIS BROWSER!");
      return;
    }

    // DATABASE + INTERFACE SETUP
    if (await invDB.init()) { items.list(true); }
    else {
      alert("ERROR OPENING INDEXED DB!");
      return;
    }
  },

  // TOGGLE PAGE
  pg : p => { for (let i of ["A", "B"]) {
    if (p==i) {
      document.getElementById("pg" + i).classList.remove("ninja");
    } else {
      document.getElementById("pg" + i).classList.add("ninja");
    }
  }},
};
window.addEventListener("DOMContentLoaded", inv.init);