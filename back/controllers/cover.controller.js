const { extractText } = require("../services/pdf.service");
const { generateCoverLetter } = require("../services/coverLetter.service");
const { generatePDFBuffer } = require("../services/pdfForCover.service");
const { generateCoverLetterHTML } = require("../templates/cover.template");


const cloudinaryService = require("../services/newcloudinary.service");

exports.generateCoverLetterController = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Resume required" });
    }

    const { company, role, jobDescription } = req.body;

    if (!company || !role || !jobDescription) {
      return res.status(400).json({ message: "All fields required" });
    }

    console.log("📝 Extracting text from resume...");
    const resumeText = await extractText(req.file.buffer);

    console.log("🤖 Generating cover letter...");
    const coverLetter = await generateCoverLetter({
      resumeText,
      company,
      role,
      jobDescription,
    });
    
    console.log("📄 Generating HTML...");
    const finalHTML = generateCoverLetterHTML(coverLetter);
    
    console.log("📑 Generating PDF...");
    const pdfBuffer = await generatePDFBuffer(finalHTML);
    
    // Debug: Check buffer type
    console.log("PDF Buffer type:", typeof pdfBuffer);
    console.log("Is Buffer?", Buffer.isBuffer(pdfBuffer));
    console.log("Buffer length:", pdfBuffer.length);
    
    // Upload to Cloudinary
    console.log("☁️ Uploading to Cloudinary...");
    const cloudinaryResult = await cloudinaryService.uploadPDF(pdfBuffer);

    return res.status(200).json({
      success: true,
      message: "Cover letter generated successfully!",
      downloadLink: {
        secure_url: cloudinaryResult.secure_url
      }
    });

  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ 
      message: "Server error", 
      error: error.message 
    });
  }
};