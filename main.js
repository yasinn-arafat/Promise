/**
 *  ------  Promise object can be  -----
 * 1) Pending
 * 2) Fulfilled
 * 3) Rejected
 */

// ------ Promise Creation -------

const myPromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("Your Data is fetching");
  }, 2000);
});

//  ------- Promise Consuming -------

myPromise
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });

// ----------- Promise Functionality ------------

function one() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("one");
    }, 500);
  });
}

function two(p1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("two " + p1);
    }, 100);
  });
}

function three(p2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Three " + p2);
    }, 1000);
  });
}

function four(p3) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Four " + p3);
    }, 400);
  });
}

function five(p4) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Five " + p4);
    }, 200);
  });
}

function six(p5) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Six " + p5);
    }, 100);
  });
}

function seven(p6) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Seven " + p6);
    }, 1000);
  });
}
function finalOutput(p7) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Final Data " + p7);
    }, 100);
  });
}

one()
  .then((v1) => {
    return two(v1);
  })
  .then((v2) => {
    return three(v2);
  })
  .then((v3) => {
    return four(v3);
  })
  .then((v4) => {
    return five(v4);
  })
  .then((v5) => {
    return six(v5);
  })
  .then((v6) => {
    return seven(v6);
  })
  .then((v7) => {
    return finalOutput(v7);
  })
  .then((finalResult) => {
    console.log(finalResult);
  })
  .catch((error) => {
    console.log(error);
  });

// ---------- Fetch Api ------------

const api = "https://dummyjson.com/products";

fetch(api)
  .then((data) => {
    return data;
  })
  .then((daat) => {
    return daat.json();
  })
  .then((jasondata) => {
    return jasondata.product;
  })
  .then((productsData) => {
    return productsData;
  })
  .then((finalData) => {
    console.log(finalData[1]);
  })
  .catch((err) => {
    console.log("ERROR" + err);
  });
