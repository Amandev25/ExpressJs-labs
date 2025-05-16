const homeController  = (req,res) => {
    const data = {
    name: "Aman Yadav",
    age : 22,
    userId : 20
    }
res.render("home" , data);
};

export {homeController}; 