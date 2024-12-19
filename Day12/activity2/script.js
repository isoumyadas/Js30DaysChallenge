try {
  console.log("Try is logged");
} catch (error) {
  console.log("catch is logged");
} finally {
  console.log("finally is logged");
}

// ^ So first execution happens in try (try is executing if try throws any error or exception it goes direclty to catch but if there is no exception then catch is skipped and finally will execute everytime after the try block and catch block is executed.)
