const requiredParamsExist = (club) => {
  const requiredParams = ['name', 'area', 'shortName', 'tla', 'address', 'clubColors', 'founded', 'email'];
  let result = true;

  for (let i = 0; i < requiredParams.length; i += 1) {
    if (club[requiredParams[i]] === undefined) result = false;
  }

  return result;
};

module.exports = requiredParamsExist;
