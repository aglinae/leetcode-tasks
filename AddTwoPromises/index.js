var addTwoPromises = async function (promise1, promise2) {
  return await Promise.all([promise1, promise2]).then(([prom, prom2]) => {
    return (prom += prom2);
  });
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log);
