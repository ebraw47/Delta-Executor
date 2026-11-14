import { createReadStream } from "fs";
import { stat } from "fs/promises";
import { Readable } from "stream";
import { NextRequest, NextResponse } from "next/server";
import {
  DOWNLOAD_FILES,
  downloadFilePath,
  isDownloadPlatformId,
} from "@/lib/downloads";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Params = { params: Promise<{ platform: string }> };

export async function GET(_request: NextRequest, { params }: Params) {
  const { platform } = await params;

  if (!isDownloadPlatformId(platform)) {
    return NextResponse.json({ error: "Unknown platform" }, { status: 404 });
  }

  const meta = DOWNLOAD_FILES[platform];
  const filePath = downloadFilePath(platform);

  try {
    const info = await stat(filePath);
    if (!info.isFile() || info.size < 1) {
      return NextResponse.json(
        {
          error: `Missing installer: ${meta.filename}. Place the real file in /public/downloads/`,
        },
        { status: 404 }
      );
    }

    const nodeStream = createReadStream(filePath);
    const webStream = Readable.toWeb(nodeStream) as ReadableStream;

    return new NextResponse(webStream, {
      status: 200,
      headers: {
        "Content-Type": meta.contentType,
        "Content-Length": String(info.size),
        "Content-Disposition": `attachment; filename="${meta.filename}"; filename*=UTF-8''${encodeURIComponent(meta.filename)}`,
        "Cache-Control": "private, no-cache, no-store, must-revalidate",
        "X-Content-Type-Options": "nosniff",
        "Accept-Ranges": "bytes",
      },
    });
  } catch (error) {
    console.error("[download]", platform, error);
    return NextResponse.json(
      { error: `Installer not found: ${meta.filename}` },
      { status: 404 }
    );
  }
}
