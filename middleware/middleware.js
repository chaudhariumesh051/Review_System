import UserModel from "../model/user.js"

export const isAdmin = async (req, res, next) => {
  try {
    const { email } = req.body;

    const userInfo = await UserModel.findOne({ email })

    if(userInfo && userInfo.role=="admin")
    {
        next();
        
    }
    else{
        res.status(403).json({
            message:"Access Denied, only Admin can access"
        })
    }

  } catch (error) {
    res.status(500).json({
        message:"Internal server error"
    })
  }
};
