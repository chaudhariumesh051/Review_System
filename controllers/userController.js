import User from "../model/user.js";

export const admin = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({
      name,
      email,
      password,
      role: "admin",
    });

    const saveUser = await user.save();
    res.json({
      message: "admin created successfully",
      saveUser,
    });
  } catch (error) {
    res.json({
      error: "Error Occured",
    });
  }
};


export const alumini = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({
      name,
      email,
      password,
      role: "alumini",
    });

    const saveUser = await user.save();
    res.json({
      message: "alumini created successfully",
      saveUser,
    });
  } catch (error) {
    res.json({
      error: "Error Occured",
    });
  }
};

export const student = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({
      name,
      email,
      password,
      role: "student",
    });

    const saveUser = await user.save();
    res.json({
      message: "student created successfully",
      saveUser,
    });
  } catch (error) {
    console.log(error);
    res.json({
      error: "Error Occured",
    });
  }
};


export const getAllUsers=async(req,res)=>{
  try {
    const getusers=await User.find()
    res.json({
      getusers
    })
  } catch (error) {
    res.json({
      error:"Cannot fetch data"
    })
    console.log(error)
  }
}
