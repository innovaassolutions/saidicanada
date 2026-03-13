/**
 * AI Video Generation Script for SAIDI Canada
 * Uses Google Veo via the @google/genai SDK to generate the hero background video.
 *
 * Usage: npx tsx scripts/generate-video.ts
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

const VIDEO_PROMPT =
  "Slow cinematic drone shot panning over a modern data center campus surrounded by Canadian wilderness — pine forests and distant mountains. Golden hour lighting. Light mist rising from the ground. Smooth, looping camera movement. Professional cinematic quality, 16:9 aspect ratio. No text or logos.";

const OUTPUT_PATH = path.join(process.cwd(), "public/videos/hero.mp4");
const POSTER_PATH = path.join(process.cwd(), "public/videos/hero-poster.jpg");

async function main() {
  const apiKey = process.env.GOOGLE_AI_API_KEY;
  if (!apiKey) {
    console.error("Error: GOOGLE_AI_API_KEY not found in environment.");
    console.error("Set it in .env.local or export it before running this script.");
    process.exit(1);
  }

  const ai = new GoogleGenAI({ apiKey });

  // Ensure output directory exists
  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });

  // Generate video
  if (!fs.existsSync(OUTPUT_PATH)) {
    console.log("[GENERATING VIDEO] This may take several minutes...");
    console.log(`Prompt: ${VIDEO_PROMPT}\n`);

    try {
      let operation = await ai.models.generateVideos({
        model: "veo-3.1-generate-preview",
        request: {
          prompt: VIDEO_PROMPT,
        },
      });

      // Poll for completion
      while (!operation.done) {
        console.log("[WAITING] Video generation in progress...");
        await new Promise((resolve) => setTimeout(resolve, 10000));
        operation = await ai.operations.get({ operationName: operation.name! });
      }

      // Save the generated video
      if (operation.response?.generatedVideos) {
        for (const video of operation.response.generatedVideos) {
          if (video.video?.uri) {
            const response = await fetch(video.video.uri);
            const buffer = Buffer.from(await response.arrayBuffer());
            fs.writeFileSync(OUTPUT_PATH, buffer);
            console.log(
              `[SAVED] ${OUTPUT_PATH} (${(buffer.length / (1024 * 1024)).toFixed(1)} MB)`
            );
            break;
          }
        }
      } else {
        console.warn("[WARN] No video generated");
      }
    } catch (error) {
      console.error("[ERROR] Video generation failed:", error);
    }
  } else {
    console.log(`[SKIP] ${OUTPUT_PATH} already exists`);
  }

  // Generate poster frame if not exists
  if (!fs.existsSync(POSTER_PATH)) {
    console.log("\n[GENERATING POSTER] Creating poster frame...");

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-pro-image-preview",
        contents: `Generate a high-quality image: Cinematic wide shot of a modern data center exterior at golden hour, set against Canadian Rocky Mountains. Clean architecture with subtle green LED accents. Dramatic sky. 16:9 aspect ratio.`,
        config: {
          responseModalities: ["IMAGE", "TEXT"],
        },
      });

      const parts = response.candidates?.[0]?.content?.parts;
      if (parts) {
        for (const part of parts) {
          if (part.inlineData) {
            const buffer = Buffer.from(part.inlineData.data!, "base64");
            fs.writeFileSync(POSTER_PATH, buffer);
            console.log(
              `[SAVED] ${POSTER_PATH} (${(buffer.length / 1024).toFixed(0)} KB)`
            );
            break;
          }
        }
      }
    } catch (error) {
      console.error("[ERROR] Poster generation failed:", error);
    }
  } else {
    console.log(`[SKIP] ${POSTER_PATH} already exists`);
  }

  console.log("\nDone!");
}

main();
