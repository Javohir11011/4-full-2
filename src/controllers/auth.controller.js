import { registreUser } from "../services";

export const registerUserController = async (req, res, next) => {
  try {
    const result = await registreUser(req.body);
    if (!result) {
      res.status(404).send("User Not Found");
    }
    return res.status(201).send({ data: result });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
