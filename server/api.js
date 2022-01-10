import { Router } from "express";
require("dotenv").config();

const router = new Router();

router.get("/", (_, res) => {
	res.json({ message: "Hello, world!" });
});
const { Pool } = require("pg");
const dbUrl = process.env.DATABASE_URL;

const pool = new Pool({
	connectionString: dbUrl,
	connectionTimeoutMillis: 5000,
	ssl: { rejectUnauthorized: false },
});

router.get("/wholelist", function (req, res) {
	pool
		.query("SELECT * FROM projects")
		.then((result) => res.json(result.rows))
		.catch((e) => console.error(e));
});


router.get("/scorelist", function (req, res) {
	pool
		.query("SELECT projects.id, projects.image, (accessories.trait_score + background.trait_score + clothing.trait_score + earrings.trait_score + eyes.trait_score + fish.trait_score + headware.trait_score + tattoos.trait_score) as score FROM projects JOIN accessories ON projects.accessories = accessories.trait INNER JOIN background ON projects.background = background.trait INNER JOIN clothing ON projects.clothing = clothing.trait INNER JOIN earrings ON projects.earrings = earrings.trait INNER JOIN eyes ON projects.eyes = eyes.trait INNER JOIN fish ON projects.fish = fish.trait INNER JOIN headware ON projects.headware = headware.trait INNER JOIN tattoos ON projects.tattoos = tattoos.trait ORDER BY score DESC")
		.then((result) => res.json(result.rows))
		.catch((e) => console.error(e));
});

router.get("/id/:id", function (req, res) {
	const { id } = req.params;
	pool
		.query("SELECT * FROM projects WHERE id = $1", [id])
		.then((result) => res.json(result.rows))
		.catch((e) => console.error(e));
});

router.get("/images", function (req, res) {
	pool
		.query("SELECT id,image FROM projects")
		.then((result) => res.json(result.rows))
		.catch((e) => console.error(e));
});

router.get("/image/:id", function (req, res) {
	const { id } = req.params;
	pool
		.query("SELECT image FROM projects WHERE id = $1", [id])
		.then((result) => res.json(result.rows))
		.catch((e) => console.error(e));
});


export default router;
