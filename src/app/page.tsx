import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ProcessSection from "@/components/ProcessSection";
import RecommendSection from "@/components/RecommendSection";
import CtaSection from "@/components/CtaSection";
import FooterNotice from "@/components/FooterNotice";
import VideoSection from "@/components/VideoSection";
import { siteData } from "@/data/landingContent";

export default function Home() {
  return (
    <main className="page">
      <h2 className="sr-only">메리츠파트너스 보험설계사 구동호 보험 점검 상담 랜딩페이지</h2>

      {/* TOP BAR */}
      <div className="topbar">
        <span className="topbar-brand">{siteData.brand}</span>
        <span className="topbar-name">{siteData.agentRole} {siteData.agentName}</span>
      </div>
      <div className="divider-band"></div>

      <HeroSection />

      {/* TRUST */}
      <div className="trust-band">
        <span className="trust-pill">🔒 개인정보 안전</span>
        <span className="trust-pill">📋 현재 보험 기반 점검</span>
        <span className="trust-pill">✔ 가입 강요 없음</span>
      </div>

      <VideoSection />
      <ProblemSection />
      <ProcessSection />
      <RecommendSection />
      <CtaSection />
      <FooterNotice />
    </main>
  );
}
