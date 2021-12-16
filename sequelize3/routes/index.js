var express = require("express");
const models = require("../models");
var router = express.Router();
const app = express();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/board", function (req, res, next) {
  models.post.findAll().then(result => {
    res.render("show", {
      posts: result,
    });
  });
});

router.post("/board", (req, res, next) => {
  let body = req.body;
  models.post
    .create({
      title: body.inputTitle,
      writer: body.inputWriter,
    })
    .then(result => {
      console.log("데이터 추가 완료");
      res.redirect("/board");
    })
    .catch(err => {
      console.log("엌");
    });
});

router.put("/board/:id", (req, res, next) => {
  let postID = req.params.id;
  let body = req.body;

  models.post
    .update(
      {
        title: body.editTitle,
        writer: body.editWriter,
      },
      {
        where: { id: postID },
      }
    )
    .then(result => {
      console.log("데이터 수정 완료");
      res.redirect("/board");
    })
    .catch(err => {
      console.log("데이터 수정 실패");
    });
});

router.delete("/board/:id", (req, res, next) => {
  let postID = req.params.id;

  models.post
    .destroy({
      where: { id: postID },
    })
    .then(result => {
      res.redirect("/board");
    })
    .catch(err => {
      console.log("데이터 삭제 실패");
    });
});

router.get("/edit/:id", (req, res, next) => {
  let postID = req.params.id;
  models.post
    .findOne({
      where: { id: postID },
    })
    .then(result => {
      res.render("edit", {
        post: result,
      });
    })
    .catch(err => {
      console.log("데이터 조회 실패");
    });
});

module.exports = router;
