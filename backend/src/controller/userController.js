const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../modal/user");

// Register user => /api/v1/users/register
exports.registerUser = catchAsyncErrors(async (req, res, next) => {

    const { name, email, password } = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: 'sameple_id_str',
            url: 'sample.url'
        }
    });

    const token = user.getJwt();

    // send json web token as the response
    res.status(201).json({
        success: true,
        token
    });
});