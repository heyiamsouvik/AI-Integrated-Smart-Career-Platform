const pdfService = require("../services/pdf.service");
const { generateDesign } = require("../services/llm.service");
const deployService = require("../services/deploy.service");
const cloudinaryService = require("../services/cloudinary.service");
const { structureResume } = require("../utils/structureResume.service");
const { generatePortfolioHTML } = require("../templates/portfolio.template");
const { parseResumeText } = require("../utils/parseResume");

const fs = require("fs-extra");
const { v4: uuidv4 } = require("uuid");

exports.generatePortfolio = async (req, res) => {
  try {
    if (!req.files?.resume) {
      return res.status(400).json({ message: "Resume PDF required" });
    }

    const resumeBuffer = req.files.resume[0].buffer;
    const resumeText = await pdfService.extractText(resumeBuffer);

    const structuredText = structureResume(resumeText);
    const parsedData = parseResumeText(structuredText);

    console.log(parsedData);
    const design = await generateDesign();

    // Fix: Remove profileImageUrl parameter
    const html = generatePortfolioHTML(parsedData, design.css, design.js);

    // const deploymentUrl = await deployService.deploy(html);

    return res.json({
      success: true,
      html: html,
      // portfolioUrl: `https://${deploymentUrl}`
    });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({
        success: false,
        message: "Something went wrong",
        error: err.message,
      });
  }
};
