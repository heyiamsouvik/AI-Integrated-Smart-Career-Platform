// const pdfService = require("../services/createPDF.service");
// const { sendSuccess, sendError } = require("../utils/response");

// exports.generateResume = async (req, res) => {
//   try {
//     const pdfBuffer = await pdfService.generatePDF(req.body);

//     res.set({
//       "Content-Type": "application/pdf",
//       "Content-Disposition": "attachment; filename=resume.pdf",
//       "Content-Length": pdfBuffer.length
//     });

//     res.status(200).send(pdfBuffer);

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       success: false,
//       message: "Resume generation failed"
//     });
//   }
// };


// const pdfService = require("../services/createPDF.service");
// const cloudinaryService = require("../services/cloudinary.service");

// exports.generateResume = async (req, res) => {
//   try {

//     // 1. Generate PDF locally
//     const filePath = await pdfService.generatePDF(req.body);

//     // 2. Upload to Cloudinary
//     const uploadResult = await cloudinaryService.uploadPDF(filePath);

//     const publicUrl = uploadResult.secure_url;
//     const publicId = uploadResult.public_id;

// const downloadUrl = publicUrl.replace(
//   "/upload/",
//   "/upload/fl_attachment/"
// );


//     // 3. Auto delete after 24 hours
//     setTimeout(async () => {
//       await cloudinary.uploader.destroy(publicId, {
//         resource_type: "raw"
//       });
//     }, 24 * 60 * 60 * 1000);

//     return res.status(200).json({
//       success: true,
//       downloadUrl: downloadUrl
//     });

//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       success: false,
//       message: "Resume generation failed"
//     });
//   }
// };

// const fs = require('node:fs');

// const pdfService = require("../services/createPDF.service");
// const cloudinaryService = require("../services/cloudinary.service");

// exports.generateResume = async (req, res) => {
//   try {

//     // 1. Generate PDF locally
//     const filePath = await pdfService.generatePDF(req.body);
    
//     const pdfBuffer = fs.readFileSync(filePath);


//     // 2. Upload to Cloudinary
//     const uploadResult = await cloudinaryService.uploadPDF(filePath);

//     const publicUrl = uploadResult.secure_url;
//     const publicId = uploadResult.public_id;

// const downloadUrl = publicUrl.replace(
//   "/upload/",
//   "/upload/fl_attachment/"
// );


//     // 3. Auto delete after 24 hours
//     setTimeout(async () => {
//       await cloudinary.uploader.destroy(publicId, {
//         resource_type: "raw"
//       });
//     }, 24 * 60 * 60 * 1000);

//     return res.status(200).json({
//       success: true,
//       downloadUrl: downloadUrl
//     });

//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       success: false,
//       message: "Resume generation failed"
//     });
//   }
// };



const pdfService = require("../services/createPDF.service");
const cloudinaryService = require("../services/cloudinary.service");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

exports.generateResume = async (req, res) => {
  let filePath = null;
  
  try {
    console.log("📄 Generating PDF...");
    
    // 1. Generate PDF locally
    filePath = await pdfService.generatePDF(req.body);
    console.log("✅ PDF generated at:", filePath);

    // Verify file exists and has content
    if (!fs.existsSync(filePath)) {
      throw new Error("PDF file not found after generation");
    }

    const stats = fs.statSync(filePath);
    if (stats.size === 0) {
      throw new Error("Generated PDF is empty");
    }
    console.log(`📄 PDF size: ${stats.size} bytes`);

    // 2. Upload to Cloudinary
    console.log("☁️ Uploading to Cloudinary...");
    const uploadResult = await cloudinaryService.uploadPDF(filePath);
    console.log("✅ Uploaded to Cloudinary:", uploadResult.secure_url);

    // 3. Create download URL with attachment flag
    const downloadUrl = uploadResult.secure_url.replace(
      "/upload/",
      "/upload/fl_attachment/"
    );
    
    console.log("🔗 Download URL:", downloadUrl);

    // 4. Clean up local file after successful upload
    try {
      fs.unlinkSync(filePath);
      console.log("🗑️ Local file cleaned up");
    } catch (cleanupError) {
      console.warn("Could not delete local file:", cleanupError.message);
    }

    // 5. Schedule Cloudinary cleanup (after 24 hours)
    setTimeout(async () => {
      try {
        await cloudinary.uploader.destroy(uploadResult.public_id, {
          resource_type: "raw"
        });
        console.log(`🗑️ Cloudinary file ${uploadResult.public_id} deleted after 24h`);
      } catch (err) {
        console.error("Failed to delete from Cloudinary:", err);
      }
    }, 24 * 60 * 60 * 1000);

    return res.status(200).json({
      success: true,
      downloadUrl: downloadUrl,
      message: "Resume generated successfully",
      fileSize: stats.size
    });

  } catch (error) {
    console.error("❌ Resume generation failed:", error);
    
    // Clean up local file if it exists
    if (filePath && fs.existsSync(filePath)) {
      try {
        fs.unlinkSync(filePath);
      } catch (cleanupError) {
        console.warn("Could not delete failed file:", cleanupError.message);
      }
    }

    return res.status(500).json({
      success: false,
      message: error.message || "Resume generation failed",
      details: error.stack
    });
  }
};