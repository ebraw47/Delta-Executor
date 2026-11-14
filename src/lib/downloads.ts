import path from "path";

export type DownloadPlatformId =
  | "android"
  | "ios"
  | "vng"
  | "windows"
  | "mac"
  | "direct";

export const DOWNLOAD_FILES: Record<
  DownloadPlatformId,
  { filename: string; contentType: string; label: string }
> = {
  android: {
    filename: "Delta-Executor-Android.apk",
    contentType: "application/vnd.android.package-archive",
    label: "Android",
  },
  ios: {
    filename: "Delta-Executor-iOS.ipa",
    contentType: "application/octet-stream",
    label: "iOS",
  },
  vng: {
    filename: "Delta-Executor-VNG.apk",
    contentType: "application/vnd.android.package-archive",
    label: "VNG",
  },
  windows: {
    filename: "Delta-Executor-Windows.exe",
    contentType: "application/vnd.microsoft.portable-executable",
    label: "Windows",
  },
  mac: {
    filename: "Delta-Executor-Mac.dmg",
    contentType: "application/x-apple-diskimage",
    label: "Mac",
  },
  direct: {
    filename: "Delta-Executor-Direct-Install.ipa",
    contentType: "application/octet-stream",
    label: "Direct Install",
  },
};

export function downloadsDir() {
  return path.join(process.cwd(), "public", "downloads");
}

export function downloadFilePath(platform: DownloadPlatformId) {
  return path.join(downloadsDir(), DOWNLOAD_FILES[platform].filename);
}

export function isDownloadPlatformId(value: string): value is DownloadPlatformId {
  return value in DOWNLOAD_FILES;
}
