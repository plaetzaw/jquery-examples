let fizzbuzz = () => {
  for (let i = 0; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("Fizzbuss");
      three = 1;
      five = 1;
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
      three++;
      five++;
    }
  }
};
fizzbuzz();
