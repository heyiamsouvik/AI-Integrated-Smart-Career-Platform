const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.uploadPDF = async (pdfBuffer) => {
  try {
    // Ensure we have a Buffer
    let buffer;
    if (Buffer.isBuffer(pdfBuffer)) {
      buffer = pdfBuffer;
    } else if (pdfBuffer && typeof pdfBuffer === 'object' && pdfBuffer.buffer) {
      // If it's a file object
      buffer = pdfBuffer.buffer;
    } else {
      // Try to convert
      buffer = Buffer.from(pdfBuffer);
    }
    
    console.log(`📊 Uploading PDF: ${buffer.length} bytes`);
    
    // Convert to base64
    const base64String = buffer.toString('base64');
    const dataURI = `data:application/pdf;base64,${base64String}`;
    
    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(dataURI, {
      resource_type: "auto",
      folder: "cover-letters",
      access_mode: "public",
    });

    console.log("✅ Cloudinary upload successful:", result.secure_url);
    return result;

  } catch (error) {
    console.error("❌ Cloudinary upload error:", error.message);
    throw new Error(`Cloudinary upload failed: ${error.message}`);
  }
};