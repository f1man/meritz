import { KAKAO_CHANNEL_URL } from "../data/landingContent";
import AnimateOnScroll from "./AnimateOnScroll";

export default function ProblemSection() {
  return (
    <>
      <section className="section">
        <AnimateOnScroll>
          <div className="accent-line"></div>
          <h2 className="section-title">이런 고민이 있다면<br />보험 점검이 필요합니다</h2>
          <p className="section-sub">지금 이 중 하나라도 해당된다면 한 번쯤 확인해보세요.</p>
        </AnimateOnScroll>
        <div className="problem-cards">
          <AnimateOnScroll delay={0.1}>
            <div className="problem-card">
              <div className="problem-icon">💸</div>
              <p className="problem-text">매달 보험료는 나가는데 보장 내용을 잘 모른다</p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <div className="problem-card">
              <div className="problem-icon">🕰️</div>
              <p className="problem-text">예전에 가입한 보험이 지금도 괜찮은지 모르겠다</p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.3}>
            <div className="problem-card">
              <div className="problem-icon">🔀</div>
              <p className="problem-text">실손, 암, 운전자, 종신보험이 복잡하게 섞여 있다</p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.4}>
            <div className="problem-card">
              <div className="problem-icon">✂️</div>
              <p className="problem-text">보험료를 줄이고 싶은데 어디서 줄여야 할지 모르겠다</p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.5}>
            <div className="problem-card">
              <div className="problem-icon">👨‍👩‍👧</div>
              <p className="problem-text">부모님, 배우자, 자녀 보험까지 한 번에 정리하고 싶다</p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <div className="mid-cta-wrap">
        <AnimateOnScroll>
          <div className="mid-cta">
            <p>&quot;내 보험이 맞게 들어있는지<br />한 번도 확인해본 적 없다면&quot;</p>
            <a className="btn-kakao" href={KAKAO_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
              <span className="kakao-dot">K</span>
              지금 바로 카카오톡 상담 신청
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </>
  );
}
