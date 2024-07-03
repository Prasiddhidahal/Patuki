// routes/jokes.js
import express from "express";
import {
  createJoke,
  getAllJokes,
  getJokeById,
  updateJoke,
  deleteJoke,
} from "../controllers/jokesController.js";

const router = express.Router();

// Create a new joke
router.post("/jokes", async (req, res) => {
  try {
    const joke = await createJoke(req.body);
    res.status(201).json(joke);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all jokes
router.get("/jokes", async (req, res) => {
  try {
    const jokes = await getAllJokes();
    res.status(200).json(jokes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get joke by ID
router.get("/jokes/:id", async (req, res) => {
  try {
    const joke = await getJokeById(req.params.id);
    if (!joke) return res.status(404).json({ message: "Joke not found" });
    res.status(200).json(joke);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a joke
router.put("/jokes/:id", async (req, res) => {
  try {
    const joke = await updateJoke(req.params.id, req.body);
    if (!joke) return res.status(404).json({ message: "Joke not found" });
    res.status(200).json(joke);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a joke
router.delete("/jokes/:id", async (req, res) => {
  try {
    await deleteJoke(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
