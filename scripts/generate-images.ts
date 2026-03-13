/**
 * AI Image Generation Script for SAIDI Canada
 * Uses Google Gemini to generate images at build time.
 *
 * Usage: npx tsx scripts/generate-images.ts
 * Requires: GOOGLE_AI_API_KEY in .env.local
 */

import { GoogleGenAI } from "@google/genai";
import * as fs from "fs";
import * as path from "path";

// Load .env.local
const envPath = path.join(process.cwd(), ".env.local");
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, "utf-8").split("\n")) {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match && !process.env[match[1]]) {
      process.env[match[1]] = match[2]?.replace(/^["']|["']$/g, "") ?? "";
    }
  }
}

const images = [
  {
    filename: "hero-poster.jpg",
    outputDir: "public/videos",
    prompt:
      "Cinematic wide shot of a modern data center exterior at golden hour, set against a backdrop of Canadian Rocky Mountains. Clean architectural lines, subtle green LED accents on the building. Dramatic sky with warm light. Professional photography style, 16:9 aspect ratio.",
  },
  {
    filename: "about-datacenter.jpg",
    outputDir: "public/images",
    prompt:
      "Interior of a modern, clean data center server room with rows of server racks. Subtle green LED lighting. Organized cabling, cool blue-white overhead lighting. Professional and high-tech atmosphere. Wide angle shot.",
  },
  {
    filename: "services-header.jpg",
    outputDir: "public/images",
    prompt:
      "Abstract visualization of cloud computing and network infrastructure. Glowing green and teal connection lines forming a network topology. Dark background with luminous nodes. Modern, tech-forward aesthetic.",
  },
  {
    filename: "sustainability-bg.jpg",
    outputDir: "public/images",
    prompt:
      "Aerial view of a pristine Canadian boreal forest with a modern, low-profile data center campus integrated into the landscape. Green roof technology visible. Early morning mist. Harmony between technology and nature.",
  },
  {
    filename: "calculator-header.jpg",
    outputDir: "public/images",
    prompt:
      "Close-up of a professionally organized server rack in a data center. Neat fiber optic cabling in green and blue. Clean, well-lit environment. Shallow depth of field. Professional photography.",
  },
  {
    filename: "locations-header.jpg",
    outputDir: "public/images",
    prompt:
      "Aerial view of a Canadian city skyline (similar to Toronto or Vancouver) at twilight, with a modern data center campus visible. City lights beginning to glow. Professional aerial photography.",
  },
  {
    filename: "contact-bg.jpg",
    outputDir: "public/images",
    prompt:
      "Beautiful Canadian landscape with mountains and a calm lake at sunrise. Warm, welcoming, and professional atmosphere. Subtle tech overlay barely visible — conveying connection between nature and technology.",
  },
];

async function main() {
  const apiKey = process.env.GOOGLE_AI_API_KEY;
  if (!apiKey) {
    console.error("Error: GOOGLE_AI_API_KEY not found in environment.");
    console.error("Set it in .env.local or export it before running this script.");
    process.exit(1);
  }

  const ai = new GoogleGenAI({ apiKey });

  for (const image of images) {
    const outputPath = path.join(process.cwd(), image.outputDir, image.filename);

    // Skip if file already exists
    if (fs.existsSync(outputPath)) {
      console.log(`[SKIP] ${outputPath} already exists`);
      continue;
    }

    // Ensure output directory exists
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });

    console.log(`[GENERATING] ${image.filename}...`);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-pro-image-preview",
        contents: `Generate a high-quality image: ${image.prompt}`,
        config: {
          responseModalities: ["IMAGE", "TEXT"],
        },
      });

      // Extract image from response
      const parts = response.candidates?.[0]?.content?.parts;
      if (parts) {
        for (const part of parts) {
          if (part.inlineData) {
            const buffer = Buffer.from(part.inlineData.data!, "base64");
            fs.writeFileSync(outputPath, buffer);
            console.log(`[SAVED] ${outputPath} (${(buffer.length / 1024).toFixed(0)} KB)`);
            break;
          }
        }
      } else {
        console.warn(`[WARN] No image generated for ${image.filename}`);
      }
    } catch (error) {
      console.error(`[ERROR] Failed to generate ${image.filename}:`, error);
    }
  }

  console.log("\nDone! Generated images are in public/images/ and public/videos/");
}

main();
