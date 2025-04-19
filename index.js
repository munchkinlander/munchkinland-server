import express from "express";
import "dotenv/config";
import cors from "cors";
import imagesRoute from "./routes/images.js";
import carouselRoute from "./routes/carousel.js";
import emailRoute from "./routes/email.js"; 
import aboutRoute from "./routes/about.js";

const PORT = process.env.PORT ?? 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/images", imagesRoute);
app.use("/pictures", aboutRoute);
app.use("/carousel", carouselRoute);
app.use("/send-email", emailRoute); 

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
  