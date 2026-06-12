import { siteData } from "../data/landingContent";

export default function FooterNotice() {
  return (
    <footer className="footer">
      <div style={{ marginBottom: "16px" }}>
        <div className="footer-row"><span className="footer-label">소속</span><span className="footer-value">{siteData.brand}</span></div>
        <div className="footer-row"><span className="footer-label">보험설계사</span><span className="footer-value">{siteData.agentName}</span></div>
        <div className="footer-row"><span className="footer-label">등록번호</span><span className="footer-value">{siteData.registrationNumber}</span></div>
        <div className="footer-row"><span className="footer-label">연락처</span><span className="footer-value">{siteData.contactNumber}</span></div>
        <div className="footer-row"><span className="footer-label">카카오채널</span><span className="footer-value">{siteData.channelName}</span></div>
        <div className="footer-row"><span className="footer-label">광고심의필</span><span className="footer-value">{siteData.adReviewCode}</span></div>
      </div>
      <div className="footer-divider"></div>
      <p className="footer-legal">
        본 페이지는 보험 상담 신청 안내를 위한 페이지입니다.<br />
        보험계약 체결 전 상품설명서 및 약관을 반드시 확인하시기 바랍니다.<br />
        보험상품은 계약자의 연령, 직업, 건강상태, 가입 조건 등에 따라 가입 가능 여부 및 보험료가 달라질 수 있습니다.<br />
        기존 보험 해지 후 새로운 보험계약을 체결하는 경우 보장 내용, 보험료, 면책기간 등이 달라질 수 있으므로 신중히 비교 후 결정해야 합니다.
      </p>
    </footer>
  );
}
