import { Student } from "../Models/student.model.js";

const submitData = async function (req, res) {
  try {
    console.log(req.body);
    const newStudent = new Student({
      name: req.body.name,
      rollNumber: req.body.rollNumber,
      phone: req.body.phone,
      email: req.body.email,
      linkedin: req.body.linkedin,
      github: req.body.github,
      performanceType: req.body.performanceType,
      add_link1: req.body.add_link1,
      add_link2: req.body.add_link2,
    });
    console.log(newStudent + "\nlogging new student");

    console.log("saving student data");

    await newStudent.save({ validateBeforeSave: false });

    return res.status(200).json({
      msg: "data saved successfully",
    });
  } catch (error) {}
};

export { submitData };
