import { KAKAO_CHANNEL_URL } from "../data/landingContent";
import AnimateOnScroll from "./AnimateOnScroll";

export default function CtaSection() {
  return (
    <section className="cta-section">
      <AnimateOnScroll>
        <h2>지금 내 보험,<br />한 번 정리해보세요</h2>
        <p>
          보험은 가입보다 점검이 먼저입니다.<br />
          카카오톡으로 문의 주시면 현재 상황에 맞춰<br />
          차근차근 안내드리겠습니다.
        </p>
      </AnimateOnScroll>
      <AnimateOnScroll delay={0.2}>
        <a className="btn-kakao" href={KAKAO_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
          <span className="kakao-dot">K</span>
          카카오톡 1:1 상담 요청하기
        </a>
        <p style={{ textAlign: "center", fontSize: "11px", color: "rgba(255,255,255,0.5)", marginTop: "10px" }}>
          상담은 카카오톡으로 간편하게 진행됩니다.
        </p>
      </AnimateOnScroll>
    </section>
  );
}
