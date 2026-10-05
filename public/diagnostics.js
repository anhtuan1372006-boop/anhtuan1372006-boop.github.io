// Opt-in diagnostics. Nothing runs on normal customer visits.
if (new URLSearchParams(location.search).has('perf')) {
  const panel = document.createElement('aside');
  panel.id = 'performance-diagnostics';
  panel.style.cssText = 'position:fixed;bottom:16px;left:16px;z-index:150;background:#fff;color:#172e27;border:1px solid #aac4af;border-radius:8px;padding:12px;max-width:300px;font:12px system-ui;box-shadow:0 3px 12px #0002';
  panel.innerHTML = '<strong>BOXANH · kiểm tra cuộn</strong><br><button type="button">Bắt đầu đo cuộn</button><output style="display:block;white-space:pre-wrap;margin-top:8px">Chưa đo</output>';
  document.body.append(panel);
  const button = panel.querySelector('button'), output = panel.querySelector('output');
  let active = false, raf = 0, previous = 0, lastScroll = 0, frames = [], tasks = [], shifts = 0;
  let observers = [];
  addEventListener('scroll', () => { if (active) lastScroll = performance.now(); }, {passive:true});
  function finish() {
    active = false; cancelAnimationFrame(raf); observers.forEach(o => o.disconnect());
    const sorted = [...frames].sort((a,b) => a-b);
    output.textContent = JSON.stringify({scrollFrames:frames.length,medianFrameMs:+(sorted[Math.floor(sorted.length*.5)]||0).toFixed(1),p95FrameMs:+(sorted[Math.floor(sorted.length*.95)]||0).toFixed(1),framesOver50ms:frames.filter(t=>t>50).length,longTasks:tasks.length,longTaskTotalMs:Math.round(tasks.reduce((a,b)=>a+b,0)),layoutShift:+shifts.toFixed(4)},null,2);
    button.textContent = 'Bắt đầu đo cuộn';
  }
  button.addEventListener('click', () => {
    if (active) { finish(); return; }
    frames=[];tasks=[];shifts=0;previous=0;lastScroll=0;active=true;observers=[];
    for (const type of ['longtask','layout-shift']) {
      if (!PerformanceObserver.supportedEntryTypes.includes(type)) continue;
      const observer = new PerformanceObserver(list => list.getEntries().forEach(e => {
        if (type==='longtask') tasks.push(e.duration);
        else if (!e.hadRecentInput) shifts += e.value;
      }));
      observer.observe({type}); observers.push(observer);
    }
    button.textContent='Kết thúc đo cuộn';output.textContent='Đang đo — cuộn lên và xuống, sau đó kết thúc.';
    function tick(t) { if (!active) return; if (previous && t-lastScroll<180) frames.push(t-previous);previous=t;raf=requestAnimationFrame(tick); }
    raf=requestAnimationFrame(tick);
  });
}
