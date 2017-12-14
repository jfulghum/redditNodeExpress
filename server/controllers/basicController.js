const basicController = {}

basicController.get = (req, res) => {
    res.json({
      message: 'Welcome to our APi'
    });
};

export default basicController