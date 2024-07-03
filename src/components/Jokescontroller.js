// controllers/jokesController.js
import { getDB } from "../db.js";

// Create a new joke
export const createJoke = async (jokeData) => {
  const db = getDB();
  try {
    const result = await db.collection("jokes").insertOne(jokeData);
    return result.ops[0];
  } catch (error) {
    throw new Error("Error creating joke: " + error.message);
  }
};

// Get all jokes
export const getAllJokes = async () => {
  const db = getDB();
  try {
    return await db.collection("jokes").find({}).toArray();
  } catch (error) {
    throw new Error("Error fetching jokes: " + error.message);
  }
};

// Get a joke by ID
export const getJokeById = async (id) => {
  const db = getDB();
  try {
    return await db.collection("jokes").findOne({ id });
  } catch (error) {
    throw new Error("Error fetching joke: " + error.message);
  }
};

// Update a joke
export const updateJoke = async (id, jokeData) => {
  const db = getDB();
  try {
    const result = await db
      .collection("jokes")
      .findOneAndUpdate(
        { id },
        { $set: jokeData },
        { returnDocument: "after" }
      );
    return result.value;
  } catch (error) {
    throw new Error("Error updating joke: " + error.message);
  }
};

// Delete a joke
export const deleteJoke = async (id) => {
  const db = getDB();
  try {
    await db.collection("jokes").deleteOne({ id });
  } catch (error) {
    throw new Error("Error deleting joke: " + error.message);
  }
};
