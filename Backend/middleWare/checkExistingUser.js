import { Student } from "../Models/student.model.js";

const verify = async function (req, res, next) {
  const email = req.body.email;

  const exist = await Student.find({ email: email });
  console.log(email, exist);

  if (exist.length > 0) {
    console.log("inside if");

    return res.status(400).json({
      msg: "you are already registered",
      foundUser: "yes",
    });
  }

  next();
};

export { verify };
