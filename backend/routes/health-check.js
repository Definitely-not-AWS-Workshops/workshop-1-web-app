import express from "express";
import colors from "colors";

colors.enable();

const router = express.Router();

router.get("/", (_, res) => {
    console.log("You are healthy!".rainbow);
  
    res.send("You are healthy!");
  });

export default router;
