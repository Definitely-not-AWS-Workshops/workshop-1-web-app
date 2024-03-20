import {getAnimeService, createAnimeService } from "../services/anime.js"

const getAnimeController = async (_, res) => {
    try {
      const anime = await getAnimeService();
      res.json(anime);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

const createAnimeController = async (req, res) => {
    const { title, link, description } = req.body;
    const newAnime = { id: Date.now().toString(), title, link, description};
  
    try {
      await createAnimeService(newAnime);
      res.status(201).json(newAnime);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  }

  export {getAnimeController, createAnimeController}