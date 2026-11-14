import StepGallery from "@/components/StepGallery";
import {
  IOS_PERFORMANCE_STEPS,
  KEY_SYSTEM_STEPS,
  WINDOWS_SECURITY_STEPS,
} from "@/lib/siteConfig";

/** Homepage step galleries — iOS phone, Windows desktop, and key flow. */
export default function HomeStepGallery() {
  return (
    <>
      <StepGallery
        id="ios-steps"
        kicker="iOS setup"
        title="Delta Executor iOS — step by step"
        description="Follow these screenshots after install: Settings → Background App Refresh → Battery → turn Low Power Mode off."
        steps={IOS_PERFORMANCE_STEPS}
        href="/delta-executor-ios-performance"
        linkLabel="Full iOS performance guide →"
        maxWidthClass="max-w-[280px]"
        columnsClass="sm:grid-cols-2 lg:grid-cols-3"
        priorityCount={1}
      />

      <StepGallery
        id="windows-steps"
        kicker="Windows setup"
        title="Delta Executor Windows — step by step"
        description="Find Windows Security, then open Firewall & network protection before running the PC installer so Defender does not block the file."
        steps={WINDOWS_SECURITY_STEPS}
        href="/delta-executor-windows-security"
        linkLabel="Full Windows security guide →"
        maxWidthClass="max-w-full"
        columnsClass="sm:grid-cols-2"
      />

      <StepGallery
        id="key-steps"
        kicker="Key system"
        title="Delta Executor key — step by step"
        description="Continue on the key page, finish the checkpoints, copy your free key, paste it into Delta, then open Roblox and Play."
        steps={KEY_SYSTEM_STEPS}
        href="/delta-executor-key-steps"
        linkLabel="Full key steps guide →"
        maxWidthClass="max-w-[300px]"
        columnsClass="sm:grid-cols-2 lg:grid-cols-3"
      />
    </>
  );
}
