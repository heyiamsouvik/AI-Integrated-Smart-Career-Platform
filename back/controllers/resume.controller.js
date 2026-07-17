

const pdfService = require("../services/createPDF.service");
const cloudinaryService = require("../services/cloudinary.service");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

exports.generateResume = async (req, res) => {
  let filePath = null;
  
  try {
    filePath = await pdfService.generatePDF(req.body);


    if (!fs.existsSync(filePath)) {
      throw new Error("PDF file not found after generation");
    }

    const stats = fs.statSync(filePath);
    if (stats.size === 0) {
      throw new Error("Generated PDF is empty");
    }



    const uploadResult = await cloudinaryService.uploadPDF(filePath);


    const downloadUrl = uploadResult.secure_url.replace(
      "/upload/",
      "/upload/fl_attachment/"
    );
    

    try {
      fs.unlinkSync(filePath);
    } catch (cleanupError) {
      console.warn("Could not delete local file:", cleanupError.message);
    }

    setTimeout(async () => {
      try {
        await cloudinary.uploader.destroy(uploadResult.public_id, {
          resource_type: "raw"
        });
      } catch (err) {
        console.error("Failed to delete from Cloudinary:", err);
      }
    }, 5 * 60 * 60 * 1000);

    return res.status(200).json({
      success: true,
      downloadUrl: downloadUrl,
      message: "Resume generated successfully",
      fileSize: stats.size
    });

  } catch (error) {
    console.error("Resume generation failed:", error);
    
    if (filePath && fs.existsSync(filePath)) {
      try {
        fs.unlinkSync(filePath);
      } catch (cleanupError) {
        console.warn("Could not delete failed file:", cleanupError.message);
      }
    }

    return res.status(500).json({
      success: false,
      message: "Resume generation failed",
    });
  }
};