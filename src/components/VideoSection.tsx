import AnimateOnScroll from "./AnimateOnScroll";

export default function VideoSection() {
  return (
    <section className="section" style={{ paddingBottom: "10px", backgroundColor: "#fff" }}>
      <AnimateOnScroll>
        <div className="accent-line"></div>
        <h2 className="section-title">1분 만에 알아보는<br />내 보험의 문제점</h2>
        <p className="section-sub">아래 영상을 통해 지금 바로 확인해 보세요.</p>
        <div style={{ position: "relative", paddingBottom: "177.78%", height: 0, overflow: "hidden", borderRadius: "12px", boxShadow: "0 8px 24px rgba(0,0,0,0.12)", backgroundColor: "#000" }}>
          <iframe 
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
            src="https://www.youtube.com/embed/zUlRdFA71z0?rel=0&showinfo=0" 
            title="홍보 동영상" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
