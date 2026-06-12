import AnimateOnScroll from "./AnimateOnScroll";

export default function RecommendSection() {
  return (
    <section className="section section-alt">
      <AnimateOnScroll>
        <div className="accent-line"></div>
        <h2 className="section-title">이런 분께 추천드립니다</h2>
        <p className="section-sub">보험 상황이 다르면 점검 방향도 달라집니다.</p>
      </AnimateOnScroll>
      <div className="recommend-cards">
        <AnimateOnScroll delay={0.1}>
          <div className="recommend-card">
            <div className="ico">📅</div>
            <p className="txt">보험을 오래전에 가입하고 한 번도 점검하지 않은 분</p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.2}>
          <div className="recommend-card">
            <div className="ico">😰</div>
            <p className="txt">보험료가 부담되지만 해지하기는 불안한 분</p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.3}>
          <div className="recommend-card">
            <div className="ico">👨‍👩‍👧‍👦</div>
            <p className="txt">가족 보험을 한 번에 정리하고 싶은 분</p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.4}>
          <div className="recommend-card">
            <div className="ico">🔍</div>
            <p className="txt">보험 리모델링이 필요한지 궁금한 분</p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.5} className="full">
          <div className="recommend-card full">
            <div className="ico">🤝</div>
            <p className="txt">보험 가입 전 객관적인 설명을 먼저 듣고 싶은 분</p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
