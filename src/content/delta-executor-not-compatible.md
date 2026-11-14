# Fix: Delta Executor Isn’t Compatible With My Phone

Seeing **“App isn’t compatible with your phone”** or `INSTALL_FAILED_UPDATE_INCOMPATIBLE` usually means the APK architecture does not match your device — not that Delta “banned” your phone.

This guide is for **Android**. For iOS trust / revoke issues, use [Direct Install](/delta-executor-direct-install).

## Why It Happens

Delta Android builds are commonly published for:

- **arm64 (64-bit)** — most modern phones
- **arm32 (32-bit)** — older or some budget devices

Installing a 64-bit APK on a 32-bit-only device (or the reverse, depending on the package) triggers the incompatible error.

## How to Check 32-bit vs 64-bit

1. Open your phone’s settings and look for **About phone → CPU / ABI** if shown.
2. Or install a hardware info app from the Play Store (many players use CPU info utilities), open the **CPU** section, and note whether the ABI lists **arm64-v8a** (64-bit) or **armeabi-v7a** (32-bit).
3. Match that result to the Android package you download from our [hub](/#download).

If the hub currently hosts a single Android APK, it is typically the **arm64** build used by most US / global players. Older 32-bit phones may need a matching arm32 package when available — check the Android guide notes after each update.

## Fix Steps

1. Uninstall any half-installed Delta package.
2. Delete the old APK from Downloads.
3. Confirm your CPU architecture (steps above).
4. Download **Android** again from the [homepage hub](/#download).
5. Install, then open Delta and finish the [key](/delta-executor-key) flow.

## Other Errors People Confuse With “Not Compatible”

| Message | Likely cause | Where to go |
| --- | --- | --- |
| Install blocked | Unknown sources off | [Android guide](/delta-executor-android) |
| App not installed | Corrupt download / low storage | Re-download from hub |
| Roblox upgrade error | Outdated executor after Roblox patch | Re-download latest build |
| Untrusted developer (iOS) | Profile not trusted | [Direct Install](/delta-executor-direct-install) |

## Related Guides

- [Android install](/delta-executor-android)
- [VNG](/delta-executor-vng)
- [FAQ](/delta-executor-faq)
