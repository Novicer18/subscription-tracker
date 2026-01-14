import express from "express";
import dotenv from "dotenv"; 
dotenv.config();
const app = express();
const PORT = process.env.PORT;

// Health check route
app.get("/", (_req, res) => {
	res.send("Subscription tracker API is running.");
});

app.listen(PORT, () => {
	console.log(`Server listening http://localhost:${PORT}`);
});

export default app;