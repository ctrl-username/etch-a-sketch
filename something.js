router.post("/register", async (req, res) => {
  let user = new User({
    name: req.body.name,
    email: req.body.email,
    passwordHash: bcrypt.hashSync(req.body.password, 10),
    phone: req.body.phone,
    isAdmin: req.body.isAdmin,
    address: req.body.address,
  });

  user = await user.save();

  if (!user) return res.status(404).send("User cannot be created");
  res.send(user);
});
