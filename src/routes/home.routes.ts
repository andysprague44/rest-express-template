import express from 'express';
const router = express.Router();

router.get("/", () => 'Hello from your Express API');

module.exports = router;
