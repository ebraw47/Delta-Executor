/** Central brand / domain config for Delta Executor */
export const SITE_ORIGIN = "https://deltaexecutortr.com.tr";

export const BRAND = {
  name: "Delta Executor",
  shortName: "Delta",
  keyword: "Delta Executor",
  domain: "deltaexecutortr.com.tr",
  email: "contact@deltaexecutortr.com.tr",
  twitter: "@deltaexecutor",
  discord: "https://discord.gg/delta",
  version: "2.745",
  tagline: "Android, iOS, Windows, Mac ve VNG için Delta Executor indir",
  /** Primary SERP snippet — Turkish (deltaexecutortr.com.tr) */
  description:
    "Delta Executor; Android ve iOS odaklı, Roblox’ta özel Lua script’leri çalıştıran popüler bir üçüncü taraf araçtır. Bu sitede PC, Mac ve VNG için ücretsiz indirme rehberleri.",
} as const;

export const ROUTES = {
  home: "/",
  about: "/about-us",
  blog: "/category/blog",
  contact: "/contact-us",
  privacy: "/privacy-policy",
  disclaimer: "/disclaimer",
} as const;

export const IMAGES = {
  logo: "/feature/favicon.webp",
  icon: "/feature/favicon.webp",
  favicon: "/favicon.ico",
  brandLogo: "/feature/header-logo-nav.png",
  banner: "/feature/og-image-1200x630.webp",
  headerLogo: "/feature/header-logo-nav.png",
  headerLogoLight: "/feature/header-logo-nav.png",
  og: "/feature/og-image-1200x630.webp",
  ogSquare: "/feature/og-square-1200x1200.webp",
  twitter: "/feature/twitter-card-1200x600.webp",
  website: "/feature/og-image-1200x630.webp",
  tool: "/feature/og-image-1200x630.webp",
  heroAlt: "/feature/og-image-1200x630.webp",
  features: "/feature/og-image-1200x630.webp",
  howItWorks: "/guides/ios-step-1.webp",
  benefits: "/feature/og-square-1200x1200.webp",
  whoCanUse: "/guides/ios-step-2.webp",
  vsSentence: "/feature/twitter-card-1200x600.webp",
  showcase: "/guides/ios-step-3.webp",
} as const;

/** Step galleries — aspect matches each screenshot so frames fit exactly. */
export const IOS_PERFORMANCE_STEPS = [
  {
    src: "/guides/ios-step-1.webp",
    alt: "iPhone Ana Ekran — Delta performans ayarları için Ayarlar’a dokunun",
    caption: "Adım 1 — Ayarlar’ı açın",
    aspect: "301 / 600",
  },
  {
    src: "/guides/ios-step-2.webp",
    alt: "iPhone Ayarlar — Genel, ardından Arka Planda Uygulama Yenileme",
    caption: "Adım 2 — Arka Planda Uygulama Yenileme",
    aspect: "301 / 600",
  },
  {
    src: "/guides/ios-step-3.webp",
    alt: "Arka Planda Uygulama Yenileme — Delta için ayarı açın",
    caption: "Adım 3 — Arka Planda Uygulama Yenilemeyi açın",
    aspect: "301 / 600",
  },
  {
    src: "/guides/ios-step-4.webp",
    alt: "Arka Planda Uygulama Yenileme — Wi‑Fi ve Mobil Veri seçin",
    caption: "Adım 4 — Wi‑Fi ve Mobil Veri",
    aspect: "301 / 600",
  },
  {
    src: "/guides/ios-step-5.webp",
    alt: "iPhone Ayarlar — Pil’i açın",
    caption: "Adım 5 — Pil’i açın",
    aspect: "301 / 600",
  },
  {
    src: "/guides/ios-step-6.webp",
    alt: "Pil ayarları — daha akıcı Delta için Düşük Güç Modunu kapatın",
    caption: "Adım 6 — Düşük Güç Modunu kapatın",
    aspect: "301 / 600",
  },
] as const;

export const WINDOWS_SECURITY_STEPS = [
  {
    src: "/guides/windows-step-1.webp",
    alt: "Windows Başlat araması — Windows Güvenliği’ni bulun ve açın",
    caption: "Adım 1 — Windows Güvenliği’ni açın",
    aspect: "768 / 714",
  },
  {
    src: "/guides/windows-step-2.webp",
    alt: "Windows Güvenliği — Güvenlik Duvarı ve ağ koruması ayarları",
    caption: "Adım 2 — Güvenlik Duvarı ve ağ koruması",
    aspect: "1024 / 731",
  },
] as const;

export const KEY_SYSTEM_STEPS = [
  {
    src: "/guides/key-step-1.webp",
    alt: "Delta Android Keysystem — anahtar kontrol noktaları için Continue’a dokunun",
    caption: "Adım 1 — Keysystem’de Continue",
    aspect: "469 / 756",
  },
  {
    src: "/guides/key-step-2.webp",
    alt: "Delta Anahtarı Al — anket, uygulama ve video kontrol noktalarını tamamlayın",
    caption: "Adım 2 — Kontrol noktalarını tamamlayın",
    aspect: "614 / 1024",
  },
  {
    src: "/guides/key-step-3.webp",
    alt: "Başarıyla whitelist — ücretsiz Delta anahtarınızı kopyalayın",
    caption: "Adım 3 — Anahtarınızı kopyalayın",
    aspect: "610 / 1024",
  },
  {
    src: "/guides/key-step-4.webp",
    alt: "Delta Welcome back — Enter key alanına yapıştırın, Continue’a dokunun",
    caption: "Adım 4 — Anahtarı Delta’ya yapıştırın",
    aspect: "1024 / 455",
  },
  {
    src: "/guides/key-step-5.webp",
    alt: "Roblox — deneyiminizi açın (ör. Jujutsu Infinite) ve Play’e dokunun",
    caption: "Adım 5 — Roblox’u açın ve Play",
    aspect: "455 / 1024",
  },
] as const;

/**
 * Guides + step posts. Card covers use real webp assets from /public.
 */
export const ARTICLES = [
  {
    slug: "delta-executor-android",
    title: "Delta Executor Android İndir — APK Kurulum Rehberi",
    metaTitle: "Delta Executor Android İndir | Ücretsiz APK Rehberi",
    description:
      "Android için Delta Executor APK indirin. Bilinmeyen kaynakları açın, kurun, anahtarınızı alın ve Roblox script’lerini güvenle çalıştırın.",
    date: "2026-11-11",
    image: "/feature/og-image-1200x630.webp",
    label: "Android",
  },
  {
    slug: "delta-executor-ios",
    title: "Delta Executor iOS İndir — Direkt Kurulum ve Sideload",
    metaTitle: "Delta Executor iOS Direkt Kurulum | Ücretsiz Rehber",
    description:
      "iPhone ve iPad’de Direkt Kurulum veya sideload ile Delta Executor kurun. Profili güvenin, yeniden başlatın ve oynayın.",
    date: "2026-11-11",
    image: "/guides/ios-step-1.webp",
    label: "iOS",
  },
  {
    slug: "delta-executor-ios-performance",
    title: "Delta Executor iOS Performans — Adım Adım Rehber",
    metaTitle: "Delta iOS Performans Adımları | Ayarlar Rehberi",
    description:
      "iPhone ayarları adım adım: Arka Planda Uygulama Yenileme, Wi‑Fi ve Mobil Veri, Düşük Güç Modunu kapatın.",
    date: "2026-11-12",
    image: "/guides/ios-step-2.webp",
    label: "iOS Adımları",
  },
  {
    slug: "delta-executor-direct-install",
    title: "Delta Executor Direkt Kurulum — iOS Rehberi",
    metaTitle: "Delta Executor Direkt Kurulum | iOS IPA Rehberi",
    description:
      "Direkt Kurulum ile iPhone veya iPad’e Delta Executor kurun. Kurumsal profili güvenin, yeniden başlatın, sideload uygulamalarını atlayın.",
    date: "2026-11-11",
    image: "/guides/ios-step-3.webp",
    label: "Direkt Kurulum",
  },
  {
    slug: "delta-executor-windows",
    title: "PC / Windows için Delta Executor — Emülatör ve Kurulum",
    metaTitle: "Delta Executor PC Windows İndir | Ücretsiz",
    description:
      "Windows PC için Delta Executor indirin. Emülatör kurulumu (MuMu/LDPlayer), antivirüs ipuçları ve anahtar aktivasyonu.",
    date: "2026-11-10",
    image: "/feature/og-square-1200x1200.webp",
    label: "Windows",
  },
  {
    slug: "delta-executor-windows-security",
    title: "Delta Executor Windows Güvenliği — Adım Adım",
    metaTitle: "Delta Windows Güvenlik Adımları | Güvenlik Duvarı Rehberi",
    description:
      "Windows Güvenliği adım adım: Windows Güvenliği’ni açın, Güvenlik Duvarı ve ağ koruması, ardından Delta’yı güvenle kurun.",
    date: "2026-11-12",
    image: "/guides/windows-step-1.webp",
    label: "PC Adımları",
  },
  {
    slug: "delta-executor-mac",
    title: "Mac için Delta Executor — DMG Kurulum Rehberi",
    metaTitle: "Delta Executor Mac İndir | DMG Rehberi",
    description:
      "Mac için Delta Executor indirin. DMG’yi kurun, Applications’a sürükleyin, Intel veya Apple Silicon’da çalıştırın.",
    date: "2026-11-10",
    image: "/feature/og-image-1200x630.webp",
    label: "Mac",
  },
  {
    slug: "delta-executor-key",
    title: "Delta Executor Anahtarı Nasıl Alınır (24 Saatlik Anahtar Sistemi)",
    metaTitle: "Delta Executor Anahtar Rehberi | 24 Saatlik Sistem",
    description:
      "Delta Executor anahtar sistemi nasıl çalışır. Receive Key, kontrol noktalarını bitirin, anahtarı oluşturun, 24 saat açın.",
    date: "2026-11-09",
    image: "/guides/ios-step-4.webp",
    label: "Anahtar",
  },
  {
    slug: "delta-executor-key-steps",
    title: "Delta Executor Anahtarı — Adım Adım",
    metaTitle: "Delta Anahtar Adımları | Receive Key Rehberi",
    description:
      "Adım adım Delta anahtar sistemi: Continue, kontrol noktaları, anahtarı kopyala, Delta’ya yapıştır, Roblox’ta Play.",
    date: "2026-11-14",
    image: "/guides/key-step-4.webp",
    label: "Anahtar Adımları",
  },
  {
    slug: "delta-executor-vng",
    title: "Delta Executor VNG İndir — Vietnam (Roblox VN)",
    metaTitle: "Delta Executor VNG İndir | Vietnam Roblox APK",
    description:
      "Roblox Vietnam için Delta Executor VNG indirin. Kim kullanmalı, kim kullanmamalı ve VN APK’yı güvenle kurma.",
    date: "2026-11-09",
    image: "/feature/og-square-1200x1200.webp",
    label: "VNG",
  },
  {
    slug: "delta-executor-premium",
    title: "Delta Executor Premium — iOS ve Anahtar Açıklaması",
    metaTitle: "Delta Executor Premium | iOS ve Günlük Anahtar",
    description:
      "Premium neleri kapsar: günlük anahtarı atlama ve ücretsiz Direkt Kurulum iptallerinde daha stabil iOS kurulumu.",
    date: "2026-11-11",
    image: "/guides/ios-step-6.webp",
    label: "Premium",
  },
  {
    slug: "delta-executor-not-compatible",
    title: "Düzeltme: Delta Executor Telefonumla Uyumlu Değil",
    metaTitle: "Delta Executor Uyumlu Değil | APK Düzeltmesi",
    description:
      "Genelde 32-bit / 64-bit APK uyumsuzluğu. CPU mimarinizi kontrol edin ve bu siteden doğru Android sürümünü yeniden indirin.",
    date: "2026-11-11",
    image: "/feature/twitter-card-1200x600.webp",
    label: "Uyum",
  },
  {
    slug: "delta-executor-faq",
    title: "Delta Executor SSS — İndirmeler, Anahtar, Premium, PC ve VNG",
    metaTitle: "Delta Executor SSS | İndirme ve Anahtar Yardımı",
    description:
      "Delta Executor hakkında sık sorulan sorular: indirmeler, Direkt Kurulum, anahtarlar, Premium, VNG ve sahte siteler.",
    date: "2026-11-11",
    image: "/feature/og-image-1200x630.webp",
    label: "SSS",
  },
] as const;

/**
 * One-click downloads from /public/downloads on this domain.
 */
export const PLATFORMS = [
  {
    id: "android",
    name: "Android",
    blurb: "APK · indirmek için dokunun",
    file: "/downloads/Delta-Executor-Android.apk",
    filename: "Delta-Executor-Android.apk",
    guide: "/delta-executor-android",
  },
  {
    id: "ios",
    name: "iOS",
    blurb: "IPA · indirmek için dokunun",
    file: "/downloads/Delta-Executor-iOS.ipa",
    filename: "Delta-Executor-iOS.ipa",
    guide: "/delta-executor-ios",
  },
  {
    id: "vng",
    name: "VNG",
    blurb: "VN APK · indirmek için dokunun",
    file: "/downloads/Delta-Executor-VNG.apk",
    filename: "Delta-Executor-VNG.apk",
    guide: "/delta-executor-vng",
  },
  {
    id: "windows",
    name: "Windows",
    blurb: "EXE · indirmek için dokunun",
    file: "/downloads/Delta-Executor-Windows.exe",
    filename: "Delta-Executor-Windows.exe",
    guide: "/delta-executor-windows",
  },
  {
    id: "mac",
    name: "Mac",
    blurb: "DMG · indirmek için dokunun",
    file: "/downloads/Delta-Executor-Mac.dmg",
    filename: "Delta-Executor-Mac.dmg",
    guide: "/delta-executor-mac",
  },
  {
    id: "direct",
    name: "Direkt Kurulum",
    blurb: "iOS · indirmek için dokunun",
    file: "/downloads/Delta-Executor-Direct-Install.ipa",
    filename: "Delta-Executor-Direct-Install.ipa",
    guide: "/delta-executor-direct-install",
  },
  {
    id: "key",
    name: "Delta Anahtar",
    blurb: "Anahtarınızı nasıl alırsınız",
    file: null,
    filename: null,
    guide: "/delta-executor-key",
  },
] as const;

export const HOME_FAQS = [
  {
    q: "Delta Executor nedir?",
    a: "Delta Executor; Android ve iOS odaklı, Roblox oyunlarında özel Lua script’leri çalıştıran popüler bir üçüncü taraf araçtır. Script’leri Roblox uygulamasına enjekte eder — bir mod menüsüne benzer. Windows, Mac ve VNG sürümleri de vardır.",
  },
  {
    q: "Delta Executor nasıl çalışır?",
    a: "Executor, Roblox’un üstünde bir katman gibi durur ve özel Lua’yı oyun sürecine enjekte eder. Android’de APK kurarsınız; iOS’ta Direkt Kurulum veya IPA sideload kullanırsınız. PC’de birçok oyuncu Android APK’yı emülatörde çalıştırır. Kurulumdan sonra genelde anahtar akışını tamamlar, oyuna girer, script yapıştırır veya yükler ve çalıştırırsınız.",
  },
  {
    q: "Delta Executor’ı nereden indirmeliyim?",
    a: "Doğrudan bu siteden (deltaexecutortr.com.tr) indirin. Platform düğmeleri, burada barındırılan kurulum dosyasını tek tıkla indirir — üçüncü taraf indirme bağlantısı yoktur.",
  },
  {
    q: "Android’de Delta Executor ücretsiz mi?",
    a: "Evet. Android sürümü ücretsizdir. Kurulumdan sonra günlük anahtar akışını tamamlarsınız (anahtar başına yaklaşık 24 saat), Premium kullanmazsanız.",
  },
  {
    q: "iOS’ta Direkt Kurulum nasıl çalışır?",
    a: "Direkt Kurulum, ESign veya KSign gibi sideload uygulamaları olmadan iPhone veya iPad’e Delta kurmanıza olanak tanır. Kurulumdan sonra Ayarlar → Genel → VPN ve Cihaz Yönetimi altında kurumsal profili güvenin, sonra yeniden başlatın. Tam adımlar Direkt Kurulum rehberindedir.",
  },
  {
    q: "PC’de Delta Executor kullanabilir miyim?",
    a: "Evet. Birçok oyuncu Android APK’yı emülatörde (MuMu Player, LDPlayer veya BlueStacks) çalıştırır. Bazı sürümlerde Windows derlemesi de vardır — masaüstü kurulumlarını açmadan önce çakışan antivirüsü kapatın.",
  },
  {
    q: "Delta Executor Mac’te çalışır mı?",
    a: "Evet. 2025 sonundan beri Delta Mac DMG yayınlıyor. İndirin, Applications’a sürükleyin, kurun, ardından mobildeki gibi anahtar sistemini tamamlayın.",
  },
  {
    q: "Delta Executor VNG nedir?",
    a: "VNG, Roblox VN için Vietnam’a özel Delta sürümüdür. Yalnızca Roblox Vietnam oynuyorsanız kullanın. Küresel Roblox oyuncuları standart Android/iOS sürümlerinde kalsın.",
  },
  {
    q: "Delta anahtarı ne kadar sürer?",
    a: "Ücretsiz anahtarlar genelde her 24 saatte dolar. Delta’yı açın, Receive Key’e dokunun, ekrandaki kontrol noktalarını bitirin, anahtarı oluşturun ve uygulamaya yapıştırın.",
  },
  {
    q: "Delta iOS Premium nedir?",
    a: "Delta iOS Premium; iOS kurulumlarını daha stabil kılan ve ücretsiz Direkt Kurulum iptallerini azaltabilen ücretli bir plandır. Bu sitedeki Premium rehberine bakın — rastgele satıcılardan uzak durun.",
  },
  {
    q: "Uygulama telefonumla neden uyumlu değil?",
    a: "Genelde 32-bit / 64-bit APK uyumsuzluğudur. CPU mimarinizi kontrol edin ve bu sitenin merkezinden eşleşen Android sürümünü yeniden indirin.",
  },
  {
    q: "Neden Roblox yükseltme hatası alıyorum?",
    a: "Roblox istemci güncellemeleri eski executor sürümlerini sıkça bozar. Bu siteyi yer imlerine ekleyin ve her Roblox güncellemesinden sonra platformunuz için en son Delta sürümünü yeniden indirin.",
  },
  {
    q: "Yazımı Executor mı Executer mı?",
    a: "Doğru yazım Delta Executor’dır. Sitemiz deltaexecutortr.com.tr’dir. “Executer” yazan sonuçlar genelde yazım hatası veya sahte aynadır — bu alanı yer imlerine ekleyin.",
  },
  {
    q: "Delta Executor kullanmak Roblox kurallarına aykırı mı?",
    a: "Evet. Üçüncü taraf executor’lar Roblox Kullanım Şartları’nı ihlal eder ve kalıcı hesap ban’ına yol açabilir. Roblox tespiti de sık günceller; eski sürümler istemci güncellemesinden sonra çalışmayı bırakır. Kurmadan önce sorumluluk reddimizi okuyun.",
  },
  {
    q: "Delta Executor kurmak güvenli mi?",
    a: "Herhangi bir resmi olmayan APK/IPA sideload etmek zararlı yazılım riski taşır — özellikle rastgele ayna sitelerden. Yalnızca bu alandan indirin, mümkünse tarayın ve anahtar kontrol sayfalarında Roblox şifresi yazmayın. Executor kullanımı yine de hesapları banlayabilir.",
  },
] as const;
