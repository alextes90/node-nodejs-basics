const parseEnv = () => {
  Object.keys(process.env).forEach((el) => {
    el.match("RSS") && console.log(`${el}=${process.env[`${el}`]}`);
  });
};

parseEnv();
