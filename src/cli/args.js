const parseArgs = () => {
  const result = [];
  process.argv.forEach((el, index) => {
    if (el.startsWith("--")) {
      result.push(`${el.split("--").join("")} is ${process.argv[index + 1]}`);
    }
  });
  console.log(result.join(", "));
};

parseArgs();
