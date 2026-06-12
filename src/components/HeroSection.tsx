import { KAKAO_CHANNEL_URL } from "../data/landingContent";

export default function HeroSection() {
  return (
    <section className="hero">
      <span className="hero-eyebrow">🔍 보험 점검 상담</span>
      <h1>보험, 더 가입하기 전에<br /><em>먼저 정리하세요.</em></h1>
      <p className="hero-sub">
        매달 보험료는 나가는데, 내가 어떤 보장을 받고 있는지 정확히 알고 계신가요?<br /><br />
        현재 가입하신 보험을 기준으로 중복 보장, 부족한 보장, 불필요한 보험료를 함께 확인해드립니다.
      </p>
      <a className="btn-kakao" href={KAKAO_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
        <span className="kakao-dot">K</span>
        카카오톡으로 보험 정리 상담하기
      </a>
      <p className="btn-note">상담 신청 후 가입 여부는 자유롭게 결정하실 수 있습니다.</p>
    </section>
  );
}
