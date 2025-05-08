const Course = require("../models/course.model");

const allCourses = async (req, res) => {
  res.json({
    message: "All Courses...",
  });
};

const createCourse = async (req, res) => {
  const creatorId = req.userId;
  const { title, description, price } = req.body;

  try {
    if (title === "" || description === "" || price === null) {
      res.status(408).json({
        message: "All Credentials are Required !!!",
      });
    }

    const course = await Course.create({
      title,
      description,
      price,
      creatorId: creatorId,
    });

    res.status(200).json({
      message: "Course Created Successfully.",
      CourseData: {
        Title: course.title,
        Desctiption: course.description,
        Price: course.price,
        creatorId: course.creatorId,
      },
    });
  } catch (error) {
    res.status(406).json({
      message: "Something Went Wrong !!!",
    });
  }
};

const updateCourse = async (req, res) => {
  res.json({
    message: "Update Courses...",
  });
};

const deleteCourse = async (req, res) => {
  res.json({
    message: "Delete Courses...",
  });
};

module.exports = {
  allCourses,
  createCourse,
  updateCourse,
  deleteCourse,
};
