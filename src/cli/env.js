const parseEnv = () => {
  const result = [];
  Object.keys(process.env).forEach((el) => {
    el.match("RSS") && result.push(`${el}=${process.env[`${el}`]}`);
  });
  console.log(result.join("; "));
};

parseEnv();
