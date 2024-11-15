// to check registration and zod details are same or not

//parseAsync

const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
      const { message } = err.errors;
      console.error(message);
    res.status(400).json({ msg: message});
  }
};

module.exports = validate;
