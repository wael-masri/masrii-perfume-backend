const router = require("express").Router();
const Post = require("../models/Post");
const Category = require("../models/Category");

//ADD CATEGORY
router.post("/add", async (req, res) => {
  try {
    const newCat = new Category({
      name: req.body.name,
      status: req.body.status,
    });
    const category = await newCat.save();
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE CATEGORY AND POST (BRAND)
router.put("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    const update = await Post.updateMany(
      {
        brand: category.name,
        //condition
      },
      {
        $set: {
          brand: req.body.name,
          //set
        },
      },
      {
        multi: true,
        // HERE FOR MULTI DOCUMENTS UPDATED (ALL)
      }
    );

    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    ); //hon new mn shen ybyen l jdid li n3mlou update
    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE CATEGORY AND ALL POST SAME NAME CATEGORY
router.delete("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    await Post.deleteMany({ brand: category.name });

    await Category.findByIdAndDelete(req.params.id);
    res.status(200).json("category has been deleted ..");
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET CATEGORIES
router.get("/", async (req, res) => {
  try {
    const category = await Category.find();

    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
