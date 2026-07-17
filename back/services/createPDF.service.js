

const puppeteer = require("puppeteer-core");
const path = require("path");
const fs = require("fs");

exports.generatePDF = async (data) => {
  let browser;
  try {
    const { generateResumeHTML } = require("../templates/resume.template");
    const html = generateResumeHTML(data);

    console.log("HTML generated successfully");

    browser = await puppeteer.launch({
      executablePath: process.env.CHROME_PATH || "C:/Program Files/Google/Chrome/Application/chrome.exe",
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });

    const page = await browser.newPage();
    
    await page.setViewport({
      width: 1200,
      height: 800,
      deviceScaleFactor: 1,
    });

    await page.setContent(html, { 
      waitUntil: "networkidle0",
      timeout: 30000 
    });

    const fileName = `resume-${Date.now()}.pdf`;
    const filePath = path.join(__dirname, "../../", fileName);

    await page.pdf({
      path: filePath,
      format: "A4",
      printBackground: true,
      margin: {
        top: '20px',
        bottom: '20px',
        left: '20px',
        right: '20px'
      },
      timeout: 60000
    });

    await browser.close();

    if (!fs.existsSync(filePath)) {
      throw new Error("PDF file was not created");
    }

    const stats = fs.statSync(filePath);
    if (stats.size === 0) {
      throw new Error("PDF file is empty");
    }

    
    return filePath;

  } catch (error) {
    console.error("PDF generation error:", error);
    if (browser) await browser.close();
    throw error;
  }
};