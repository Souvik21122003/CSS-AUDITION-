import { Student } from "../Models/student.model.js";

const submitData = async function (req, res) {
  try {
    const newStudent = new Student({
      name: req.body.name,
      rollNumber: req.body.rollNumber,
      phone: req.body.phone,
      email: req.body.email,
      linkedin: req.body.linkedin,
      github: req.body.github,
      domain: req.body.domain,
      add_link1: req.body.add_link1,
      add_link2: req.body.add_link2,
    });

    console.log("saving student data");

    await newStudent.save({ validateBeforeSave: false });

    return res.status(200).json({
      msg: "data saved successfully",
    });
  } catch (error) {}
};

export { submitData };
