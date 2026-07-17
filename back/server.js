const cors=require('cors');
require("dotenv").config();
const express = require("express");
const generateRoute = require("./routes/generate.route");
const jobRoutes = require("./routes/job.route");
const resumeRoutes = require("./routes/resume.route");
const analyzeRoutes = require("./routes/analyze.route");
const coverRoute = require("./routes/cover.route");


const app = express();

const allowedOrigins = [
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept']
}));


app.options('{*any}', cors());


app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Resume Builder Route
app.use("/api/resume", resumeRoutes);

// Resume Analyser Route
app.use("/api/analyze", analyzeRoutes);

//Cover Letter Generation Route
app.use("/api", coverRoute);

//POrtfolio Generatioin Route
app.use("/api/generate", generateRoute);

//Job Matching Route
app.use("/api/jobs", jobRoutes);

const port = process.env.PORT || 3000;
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});


