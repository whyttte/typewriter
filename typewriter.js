const sentence = "hello there from lighthouse labs";
let delay = 0
for (const char of sentence) {
  setTimeout(() => {
    // print the char here
    process.stdout.write(char), console.log("\n");
  }, 1000)
   // <= 1s delay to make it noticeable. Can dial it down later.
  delay += 50;
}
