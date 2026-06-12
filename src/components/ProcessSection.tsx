import AnimateOnScroll from "./AnimateOnScroll";

export default function ProcessSection() {
  return (
    <>
      <section className="section section-alt">
        <AnimateOnScroll>
          <div className="accent-line"></div>
          <h2 className="section-title">가입 권유보다 먼저,<br />현재 보험을 이해하는 것부터</h2>
          <div className="highlight-quote">
            <p>보험은 많이 가입하는 것보다 내 상황에 맞게 정리되어 있는지가 중요합니다. 무리한 가입 권유보다 현재 보험을 정확히 이해하실 수 있도록 돕겠습니다.</p>
          </div>
        </AnimateOnScroll>
        <div className="approach-list">
          <AnimateOnScroll delay={0.1}>
            <div className="approach-item">
              <div className="approach-check">✓</div>
              <span className="approach-text">현재 가입 내역 확인</span>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <div className="approach-item">
              <div className="approach-check">✓</div>
              <span className="approach-text">중복 보장 여부 확인</span>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.3}>
            <div className="approach-item">
              <div className="approach-check">✓</div>
              <span className="approach-text">부족한 보장 여부 확인</span>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.4}>
            <div className="approach-item">
              <div className="approach-check">✓</div>
              <span className="approach-text">보험료 부담 요인 확인</span>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.5}>
            <div className="approach-item">
              <div className="approach-check">✓</div>
              <span className="approach-text">필요한 경우에만 개선 방향 안내</span>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="section">
        <AnimateOnScroll>
          <div className="accent-line"></div>
          <h2 className="section-title">상담은 이렇게 진행됩니다</h2>
          <p className="section-sub">복잡한 절차 없이 카카오톡으로 간편하게 시작하세요.</p>
        </AnimateOnScroll>
        <div className="steps">
          <AnimateOnScroll delay={0.1}>
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-body">
                <p className="step-label">카카오톡 상담 신청</p>
                <p className="step-desc">채널 추가 후 간단히 문의 메시지를 남겨주세요</p>
              </div>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-body">
                <p className="step-label">현재 가입 보험 확인</p>
                <p className="step-desc">보험증권 또는 가입 내역 기준으로 현황을 파악합니다</p>
              </div>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.3}>
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-body">
                <p className="step-label">중복·부족·과다 보장 점검</p>
                <p className="step-desc">내 상황에 맞는지 함께 살펴봅니다</p>
              </div>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.4}>
            <div className="step">
              <div className="step-num">4</div>
              <div className="step-body">
                <p className="step-label">개선 방향 안내</p>
                <p className="step-desc">필요한 경우에만 선택지를 안내드립니다</p>
              </div>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.5}>
            <div className="step">
              <div className="step-num">5</div>
              <div className="step-body">
                <p className="step-label">충분히 이해한 후 선택</p>
                <p className="step-desc">가입 여부는 고객이 직접 결정하십니다. 강요는 없습니다</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
