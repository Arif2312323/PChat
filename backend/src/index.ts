import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors"
import authRoutes from "./routes/auth.route";
import messageRoutes from "./routes/message.route";

import dotenv from "dotenv";
import { app, server } from "./socket/socket";

dotenv.config();

const PORT = process.env.PORT || 5001;

app.use(cookieParser()); 
app.use(express.json()); 
app.use(cors(
	{
	  origin: '*',
	  credentials : true
	}
  ));
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use(express.static(path.join(__dirname,"../../frontend/dist")));

server.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});
