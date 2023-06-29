const parseEnv = () => {
  const result = [];
  Object.keys(process.env).forEach((el) => {
    el.startsWith("RSS") && result.push(`${el}=${process.env[`${el}`]}`);
  });
  const stringifiedEnvVars = result.join(", ");
  console.log(stringifiedEnvVars);
};

parseEnv();
