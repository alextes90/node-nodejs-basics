const parseArgs = () => {
  process.argv.forEach((el, index) => {
    if (el.startsWith("--")) {
      console.log(`${el.split("--").join("")} is ${process.argv[index + 1]}`);
    }
  });
};

parseArgs();
