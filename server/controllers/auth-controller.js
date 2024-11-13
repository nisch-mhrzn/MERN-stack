//disptach tells what to do
// Controllers: Contain the business logic for handling incoming requests and generating responses. They perform tasks like querying the database, processing data, and returning responses to the client.

const home = async (req, res) => {
  //Try and catch block so we use async
  try {
    console.log(req.body);
    res.status(200).json({message: req.body});
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

const register = (req, res) => {
  try {
    console.log(req.body);
    res.status(200).json({message: req.body});
  } catch (error) {
    console.error(error);
    res.status(400).send("Server Error");
  }
};
module.exports = { home, register };
