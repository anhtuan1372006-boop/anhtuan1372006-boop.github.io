import React, { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  Check,
  CheckCheck,
  ChevronRight,
  Phone,
  MapPin,
  Package,
  Truck,
  Sparkles,
  KeyRound,
  ShieldCheck,
  ClipboardCheck,
  RotateCcw,
  Recycle,
  ScanLine,
  Layers,
  Clock3,
  Leaf,
  Camera,
  BookOpen,
  Plus,
  MoveRight,
  CalendarDays,
  FileCheck2,
  HeartHandshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { journey, faqItems, boxStates } from "./portal-data";

const money = (n) =>
  new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(n || 0);
const phoneText = (phone) => phone.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3");
const icons = { ClipboardCheck, Package, Truck, RotateCcw };
function Kicker({ children, light = false }) {
  return (
    <p className={"bx-kicker" + (light ? " bx-kicker-light" : "")}>
      <span />
      {children}
    </p>
  );
}
function SectionTitle({ number, eyebrow, title, children, light = false }) {
  return (
    <div
      className={"bx-section-title" + (light ? " bx-title-light" : "")}
      data-bx-reveal
    >
      <div>
        <Kicker light={light}>
          {number} / {eyebrow}
        </Kicker>
        <h2>{title}</h2>
      </div>
      {children && <div className="bx-section-description">{children}</div>}
    </div>
  );
}
function LinkButton({
  href,
  children,
  light = false,
  orange = false,
  className = "",
}) {
  return (
    <Button
      asChild
      className={`bx-button ${light ? "bx-button-light" : ""} ${orange ? "bx-button-orange" : ""} ${className}`}
    >
      <a href={href}>
        {children}
        <ArrowUpRight size={18} />
      </a>
    </Button>
  );
}

function useEntrance(root) {
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches || !root.current) return;
    const elements = [...root.current.querySelectorAll("[data-bx-reveal]")];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("bx-visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px 25px 0px" },
    );
    elements.forEach((el) => {
      el.classList.add("bx-enter");
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
}

export function QuickQuote({ config: c, onQuote }) {
  const [service, setService] = useState("full"),
    [boxes, setBoxes] = useState("10"),
    [distance, setDistance] = useState("5");
  const survey = ["cleaning", "handover"].includes(service),
    category = survey ? service : "moving";
  const [quote, setQuote] = useState({ total: c.fullBase, needsSurvey: false }),
    [busy, setBusy] = useState(false),
    [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    if (
      !survey &&
      (!(Number(boxes) >= 1 && Number(boxes) <= 60) ||
        !(Number(distance) >= 1 && Number(distance) <= 80))
    ) {
      setError("Nhập 1–60 hộp và quãng đường 1–80 km.");
      setBusy(false);
      return () => controller.abort();
    }
    setError("");
    setBusy(true);
    const timer = setTimeout(async () => {
      try {
        const response = await fetch("/api/quote", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service,
            boxes: Number(boxes),
            distance: Number(distance),
          }),
          signal: controller.signal,
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || "Chưa thể ước tính.");
        setQuote(result);
      } catch (e) {
        if (e.name !== "AbortError") setError(e.message);
      } finally {
        if (!controller.signal.aborted) setBusy(false);
      }
    }, 180);
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [service, boxes, distance, survey]);
  function choose(value) {
    setService(value === "moving" ? "full" : value);
    setQuote({ needsSurvey: value !== "moving", total: c.fullBase });
  }
  return (
    <section className="bx-quote-zone" id="uoc-tinh">
      <div className="bx-wrap">
        <div className="bx-quote-card">
          <div className="bx-quote-heading">
            <div>
              <span className="bx-label">BẮT ĐẦU TỪ NHU CẦU CỦA BẠN</span>
              <h2>Ước tính trước. Quyết định sau.</h2>
            </div>
            <p>
              Gửi yêu cầu chưa xác nhận lịch
              <br /> và chưa yêu cầu thanh toán.
            </p>
          </div>
          <Tabs
            value={category}
            onValueChange={choose}
            className="bx-quote-tabs"
          >
            <TabsList
              className="bx-tab-list"
              aria-label="Nhóm dịch vụ ước tính"
            >
              <TabsTrigger value="moving" className="bx-tab">
                <Truck size={18} />
                Chuyển trọ
              </TabsTrigger>
              <TabsTrigger value="cleaning" className="bx-tab">
                <Sparkles size={18} />
                Dọn phòng
              </TabsTrigger>
              <TabsTrigger value="handover" className="bx-tab">
                <KeyRound size={18} />
                Bàn giao phòng
              </TabsTrigger>
            </TabsList>
            <TabsContent value={category} className="bx-quote-tab-content">
              <form
                id="quick-quote"
                className="bx-quote-grid"
                onSubmit={(event) => {
                  event.preventDefault();
                  if (event.currentTarget.reportValidity() && !error)
                    onQuote?.({
                      service,
                      boxes: survey ? 0 : Number(boxes),
                      distance: survey ? 1 : Number(distance),
                    });
                }}
              >
                <div className="bx-quote-fields">
                  <label className="bx-field">
                    Dịch vụ
                    <select
                      aria-label="Gói dịch vụ ước tính"
                      name="service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                    >
                      <optgroup label="Chuyển trọ">
                        <option value="full">Chuyển trọ · Trọn gói</option>
                        <option value="small">Chuyển trọ · Gọn nhẹ</option>
                        <option value="boxes">Chỉ thuê hộp</option>
                      </optgroup>
                      <option value="cleaning">Dọn phòng</option>
                      <option value="handover">Bàn giao phòng</option>
                    </select>
                  </label>
                  {!survey && (
                    <>
                      <label className="bx-field">
                        Số hộp dự kiến
                        <input
                          aria-label="Số hộp ước tính"
                          type="number"
                          min="1"
                          max="60"
                          required
                          name="boxes"
                          value={boxes}
                          onChange={(e) => setBoxes(e.target.value)}
                        />
                      </label>
                      <label className="bx-field">
                        Quãng đường (km)
                        <input
                          aria-label="Quãng đường ước tính"
                          type="number"
                          min="1"
                          max="80"
                          required
                          name="distance"
                          value={distance}
                          onChange={(e) => setDistance(e.target.value)}
                        />
                      </label>
                    </>
                  )}
                  <p className="bx-quote-note" id="quick-note">
                    {survey
                      ? "Giá phụ thuộc diện tích, hiện trạng và hạng mục. BOXANH khảo sát trước khi xác nhận chi phí."
                      : "Chưa gồm cầu thang, đồ cồng kềnh, phí chờ, thêm người và ngoài giờ. Các khoản được tách rõ trước khi thực hiện."}
                  </p>
                </div>
                <div className="bx-quote-result" aria-busy={busy}>
                  <span className="bx-label">ƯỚC TÍNH THAM KHẢO</span>
                  <output id="quick-total" aria-live="polite">
                    {error
                      ? "Kiểm tra thông tin"
                      : quote.needsSurvey
                        ? "Cần khảo sát"
                        : money(quote.total)}
                    {busy && !error && <small>Đang cập nhật…</small>}
                  </output>
                  {error && (
                    <p className="bx-inline-error" role="alert">
                      {error}
                    </p>
                  )}
                  <Button
                    type="submit"
                    className="bx-button bx-button-orange"
                    disabled={Boolean(error)}
                  >
                    Nhận báo giá
                    <ArrowRight size={18} />
                  </Button>
                  <a className="bx-small-link" href="/dich-vu#phu-phi">
                    Xem cách tính phụ phí
                    <ChevronRight size={14} />
                  </a>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </div>
        <div className="bx-quote-foot">
          <span>
            <MapPin size={15} />
            Khu vực thử nghiệm: {c.area}
          </span>
          <a href="/tra-cuu">
            Đã gửi yêu cầu? Tra cứu tiến độ
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="bx-section bx-wrap" id="dich-vu">
      <SectionTitle
        number="01"
        eyebrow="DỊCH VỤ BOXANH"
        title={
          <>
            Một lần chuyển nơi ở.
            <br /> <em>Ba phần việc, cùng một đầu mối.</em>
          </>
        }
      >
        <p>
          Chọn từng dịch vụ hoặc kết hợp theo nhu cầu. BOXANH cùng bạn thống
          nhất phạm vi, lịch và chi phí trước khi thực hiện.
        </p>
      </SectionTitle>
      <div className="bx-services-grid">
        <article className="bx-service-main" data-bx-reveal>
          <div className="bx-service-photo">
            <img
              src="/assets/moving.webp"
              width="1200"
              height="800"
              loading="lazy"
              alt="Ảnh tham khảo người chuẩn bị đóng đồ chuyển nhà"
            />
            <span className="bx-photo-caption">Ảnh tham khảo</span>
            <span className="bx-image-chip">
              <Truck size={18} />
              CHUYỂN TRỌ
            </span>
          </div>
          <div className="bx-service-info">
            <span className="bx-service-number">01</span>
            <h3>
              Chuyển cả căn phòng.
              <br /> Nhẹ bớt phần bạn lo.
            </h3>
            <p>
              Hộp tái sử dụng, hỗ trợ đóng gói theo gói, bốc xếp và vận chuyển
              theo phương án đã khảo sát.
            </p>
            <div className="bx-service-tags">
              <span>Gọn nhẹ</span>
              <span>Trọn gói</span>
              <span>Thuê hộp</span>
            </div>
            <a className="bx-inline-link" href="/dat-lich?goi=full">
              Chọn dịch vụ chuyển trọ
              <ArrowUpRight size={19} />
            </a>
          </div>
        </article>
        <div className="bx-service-side">
          <article className="bx-service-small bx-clean-service" data-bx-reveal>
            <div className="bx-small-service-top">
              <span className="bx-service-number">02</span>
              <Sparkles size={42} />
            </div>
            <h3>
              Phòng sạch.
              <br /> Khởi đầu dễ chịu.
            </h3>
            <p>
              Dọn phòng cũ hoặc mới theo diện tích, hiện trạng và hạng mục bạn
              cần.
            </p>
            <a className="bx-inline-link" href="/dat-lich?goi=cleaning">
              Khảo sát dọn phòng
              <ArrowUpRight size={19} />
            </a>
          </article>
          <article
            className="bx-service-small bx-handover-service"
            data-bx-reveal
          >
            <div className="bx-small-service-top">
              <span className="bx-service-number">03</span>
              <KeyRound size={40} />
            </div>
            <h3>
              Bàn giao rõ ràng.
              <br /> Khép lại gọn gàng.
            </h3>
            <p>
              Kiểm tra hiện trạng, đối chiếu và ghi nhận bàn giao. Sửa chữa phát sinh
              thống nhất riêng.
            </p>
            <a className="bx-inline-link" href="/dat-lich?goi=handover">
              Khảo sát bàn giao
              <ArrowUpRight size={19} />
            </a>
          </article>
        </div>
      </div>
      <div className="bx-service-bottom">
        <p>
          <FileCheck2 size={17} />
          Dọn phòng & bàn giao: báo giá sau khảo sát.
        </p>
        <a className="bx-inline-link" href="/dich-vu">
          Phạm vi dịch vụ đầy đủ
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}

export function Confidence() {
  return (
    <section className="bx-confidence">
      <div className="bx-wrap bx-confidence-grid">
        <div className="bx-confidence-title" data-bx-reveal>
          <Kicker light>ĐIỀU TẠO NÊN KHÁC BIỆT</Kicker>
          <h2>
            Rõ từng khoản.
            <br /> Chỉn chu từng bước.
            <br /> <em>Dùng lại từng hộp.</em>
          </h2>
          <p>
            Những điều cần được thống nhất để bạn chủ động từ lúc chuẩn bị đến
            lúc nhận lại đồ.
          </p>
          <a href="/chinh-sach" className="bx-inline-link">
            Xem điều kiện dịch vụ
            <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="bx-confidence-cards">
          {[
            [
              ClipboardCheck,
              "01",
              "Giá có căn cứ",
              "Khảo sát nguồn lực, quãng đường và điều kiện bốc xếp. Giá chuyến và phụ phí tách rõ.",
            ],
            [
              ShieldCheck,
              "02",
              "Giao nhận có ghi nhận",
              "Kiểm đếm, ảnh bàn giao và đối chiếu tem niêm phong theo quy trình dự kiến; CSKH có đầu mối tiếp nhận.",
            ],
            [
              Recycle,
              "03",
              "Hộp tiếp tục hành trình",
              "Thu hồi, kiểm tra, vệ sinh rồi dùng tiếp. Hộp hết vòng đời được kiểm tra khả năng tái chế.",
            ],
          ].map(([Icon, n, t, d]) => (
            <article key={n} data-bx-reveal>
              <div>
                <Icon size={26} />
                <span>{n}</span>
              </div>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Prices({ config: c }) {
  const packages = [
    {
      key: "small",
      name: "Gọn nhẹ",
      tag: "BẠN TỰ ĐÓNG ĐỒ",
      price: c.smallBase,
      desc: "Phù hợp khi bạn có thể chuẩn bị và đóng đồ trước.",
      items: [
        "Hộp theo phương án khảo sát",
        "Hỗ trợ bốc xếp & vận chuyển",
        "Giao và thu hồi hộp theo lịch",
      ],
    },
    {
      key: "full",
      name: "Trọn gói",
      tag: "THÊM HỖ TRỢ CHUẨN BỊ",
      price: c.fullBase,
      desc: "Cùng BOXANH lo thêm việc đóng gói và đồ để lại.",
      items: [
        "Các phần việc của gói Gọn nhẹ",
        "Hỗ trợ đóng gói theo thỏa thuận",
        "Tư vấn thu mua, ký gửi đồ còn tốt",
      ],
    },
    {
      key: "boxes",
      name: "Chỉ thuê hộp",
      tag: "BẠN CÓ PHƯƠNG TIỆN",
      price: c.boxBase + 10 * c.boxUnit,
      desc: "Dùng hộp bền để chủ động chuyển bằng phương tiện của bạn.",
      items: [
        "Ví dụ thuê 10 hộp",
        "Giao hộp và hẹn thu hồi",
        "Kiểm tra & vệ sinh sau mỗi lượt",
      ],
    },
  ];
  return (
    <section className="bx-section bx-pricing" id="bang-gia">
      <div className="bx-wrap">
        <SectionTitle
          number="02"
          eyebrow="BẢNG GIÁ THAM KHẢO"
          title={
            <>
              Chọn gói vừa với đồ.
              <br /> <em>Vừa với kế hoạch của bạn.</em>
            </>
          }
        >
          <p>
            Mức dưới đây minh họa 10 hộp, {c.rentalDays} ngày tại {c.area}.
            BOXANH xác nhận giá sau khảo sát.
          </p>
        </SectionTitle>
        <div className="bx-price-grid">
          {packages.map((p, i) => (
            <article
              className={
                "bx-price-card" + (i === 1 ? " bx-price-featured" : "")
              }
              key={p.key}
              data-bx-reveal
            >
              <div className="bx-price-card-head">
                <span className="bx-label">{p.tag}</span>
                {i === 1 && (
                  <span className="bx-feature-tag">Trọn hành trình</span>
                )}
              </div>
              <h3>{p.name}</h3>
              <div className="bx-price">
                <span>Từ</span>
                <strong>{money(p.price)}</strong>
              </div>
              <p className="bx-price-desc">{p.desc}</p>
              <ul>
                {p.items.map((t) => (
                  <li key={t}>
                    <Check size={17} />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="bx-price-actions">
                <LinkButton href={"/dat-lich?goi=" + p.key} orange={i === 1}>
                  Nhận báo giá gói này
                </LinkButton>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className="bx-scope-button">
                      Xem phạm vi & điều kiện
                      <Plus size={14} />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bx-dialog">
                    <DialogHeader>
                      <span className="bx-label">
                        GÓI {p.name.toUpperCase()}
                      </span>
                      <DialogTitle>
                        {p.name}, theo điều kiện thực tế.
                      </DialogTitle>
                      <DialogDescription>{p.desc}</DialogDescription>
                    </DialogHeader>
                    <ul className="bx-dialog-checks">
                      {p.items.map((t) => (
                        <li key={t}>
                          <Check size={17} />
                          {t}
                        </li>
                      ))}
                    </ul>
                    <div className="bx-dialog-note">
                      <strong>Thống nhất trước khi nhận lịch</strong>
                      <p>
                        Giá tham khảo chưa gồm cầu thang, đồ cồng kềnh, phí chờ,
                        thêm người, ngoài giờ và đặt cọc hộp nếu có. Số hộp, tải
                        trọng, hạng mục đóng gói và điều kiện trách nhiệm được
                        xác nhận riêng.
                      </p>
                    </div>
                    <LinkButton href={"/dat-lich?goi=" + p.key}>
                      Gửi thông tin khảo sát
                    </LinkButton>
                  </DialogContent>
                </Dialog>
              </div>
            </article>
          ))}
        </div>
        <div className="bx-pricing-note">
          <span>
            <ClipboardCheck size={18} />
            Chi phí phát sinh được tách rõ và thống nhất trước khi thực hiện.
          </span>
          <a href="/dich-vu#so-sanh">
            So sánh chi tiết các gói
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Journey() {
  return (
    <section className="bx-section bx-wrap" id="hanh-trinh">
      <SectionTitle
        number="03"
        eyebrow="QUY TRÌNH PHỐI HỢP"
        title={
          <>
            Biết bước tiếp theo.
            <br /> <em>An tâm hơn từ đầu.</em>
          </>
        }
      >
        <p>
          Bạn chuẩn bị gì, BOXANH hỗ trợ gì? Khám phá từng bước trước, trong và
          sau ngày chuyển.
        </p>
      </SectionTitle>
      <Tabs defaultValue="0" className="bx-journey-tabs">
        <TabsList className="bx-journey-list" aria-label="Các bước chuyển trọ">
          {journey.map((step, i) => {
            const Icon = icons[step.icon];
            return (
              <TabsTrigger
                key={i}
                value={String(i)}
                className="bx-journey-trigger"
              >
                <span className="bx-step-circle">0{i + 1}</span>
                <span>
                  <small>BƯỚC {i + 1}</small>
                  {step.short}
                </span>
                <Icon size={20} />
              </TabsTrigger>
            );
          })}
        </TabsList>
        {journey.map((step, i) => {
          const Icon = icons[step.icon];
          return (
            <TabsContent key={i} value={String(i)} className="bx-journey-panel">
              <div className="bx-journey-visual">
                <span className="bx-journey-big">0{i + 1}</span>
                <div className="bx-journey-illustration">
                  <Icon size={100} strokeWidth={1} />
                  <span>
                    <CheckCheck size={25} />
                  </span>
                </div>
                <p>{step.you}</p>
              </div>
              <div className="bx-journey-copy">
                <span className="bx-label">{step.kicker}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <ul>
                  {step.tasks.map((task) => (
                    <li key={task}>
                      <Check size={17} />
                      {task}
                    </li>
                  ))}
                </ul>
                <a className="bx-inline-link" href={step.link}>
                  {step.cta}
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </section>
  );
}

export function Boxes() {
  const [status, setStatus] = useState(0);
  return (
    <section className="bx-boxes" id="hop">
      <div className="bx-wrap">
        <SectionTitle
          number="04"
          eyebrow="HỘP BOXANH & GIAO NHẬN"
          light
          title={
            <>
              Đồ đến nơi.
              <br /> <em>Hộp đi tiếp.</em>
            </>
          }
        >
          <p>
            Thiết kế theo hướng bền, dùng nhiều lần, dễ vệ sinh, dễ thu hồi và
            có khả năng tái chế khi kết thúc vòng đời.
          </p>
        </SectionTitle>
        <div className="bx-box-grid">
          <div className="bx-box-story" data-bx-reveal>
            <div className="bx-box-methods">
              {[
                [
                  ScanLine,
                  "Mỗi hộp, một QR riêng.",
                  "Quản lý vị trí, đơn liên quan và trạng thái của hộp theo lộ trình dự kiến.",
                ],
                [
                  Camera,
                  "Mỗi lần đóng, một mã tem niêm phong.",
                  "Đối tác quét QR và chụp tem niêm phong khi nhận; kiểm tra lại tình trạng khi giao.",
                ],
                [
                  Sparkles,
                  "Mỗi lượt dùng, kiểm tra lại.",
                  "Thu hồi, kiểm tra và vệ sinh trước khi đưa hộp đạt yêu cầu vào lượt tiếp theo.",
                ],
              ].map(([Icon, t, d]) => (
                <div key={t}>
                  <span>
                    <Icon size={24} />
                  </span>
                  <div>
                    <h3>{t}</h3>
                    <p>{d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bx-qr-record">
              <div className="bx-qr-icon">
                <ScanLine size={38} />
                <small>QR</small>
              </div>
              <div>
                <span className="bx-label">THẺ HỘP MINH HỌA</span>
                <strong>
                  BX-000128 <small>(1)</small>
                </strong>
                <p>
                  Hộp tái sử dụng · Đơn BX2027-0015
                  <br /> Ngày nhận 12/01/2027 · 10 hộp của đơn
                </p>
              </div>
              <a href="/hop-minh-hoa" aria-label="Xem thông tin hộp minh họa">
                <ArrowUpRight size={22} />
              </a>
            </div>
            <a className="bx-inline-link" href="/dich-vu#hop">
              Tiêu chí hộp & hướng dẫn sử dụng
              <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="bx-box-experience">
            <div className="n7-box-specimen"><img src="/assets/boxanh-concept.webp" width="1536" height="1024" loading="lazy" alt="Hình ý tưởng hộp nhựa xanh tái sử dụng"/><p>Hình ý tưởng tạo bằng AI · Loại hộp và thông số thực tế được xác nhận sau khảo sát.</p></div>
            <div className="bx-lifecycle">
              <div className="bx-lifecycle-top">
                <span className="bx-label">VÒNG ĐỜI HỘP MINH HỌA</span>
                <span className="bx-live-dot">0{status + 1} / 06</span>
              </div>
              <div
                className="bx-lifecycle-current"
                role="status"
                aria-live="polite"
              >
                <h3>{boxStates[status][1]}</h3>
                <p>{boxStates[status][2]}</p>
              </div>
              <div
                className="bx-lifecycle-buttons"
                role="group"
                aria-label="Khám phá vòng đời hộp"
              >
                {boxStates.map((s, i) => (
                  <button
                    type="button"
                    key={i}
                    onClick={() => setStatus(i)}
                    aria-pressed={status === i}
                  >
                    <span>0{i + 1}</span>
                    {s[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bx-box-foot">
          <p>
            Hộp lỗi → Bảo trì · Không xác định vị trí → Thất lạc · Hết vòng đời
            → Kiểm tra khả năng tái chế.
          </p>
          <small>
            QR, tem niêm phong và lịch sử quét là quy trình dự kiến. Màn hình dùng dữ liệu
            minh họa.
          </small>
        </div>
      </div>
    </section>
  );
}

export function Surplus() {
  return (
    <section className="bx-section bx-wrap bx-surplus" id="do-khong-mang">
      <div className="bx-surplus-gallery" data-bx-reveal>
        <div className="bx-surplus-room">
          <img
            src="/assets/room-real.webp"
            width="1200"
            height="1800"
            loading="lazy"
            alt="Ảnh tham khảo căn phòng nhỏ gọn gàng"
          />
          <span>Nhường chỗ cho điều bạn cần.</span>
        </div>
        <div className="bx-surplus-book">
          <img
            src="/assets/books.jpg"
            width="1200"
            height="800"
            loading="lazy"
            alt="Ảnh minh họa sách còn giá trị sử dụng"
          />
          <span>Một món đồ. Một câu chuyện tiếp.</span>
        </div>
        <div className="bx-reuse-stamp">
          <Recycle size={28} />
          <span>
            CÒN TỐT
            <br /> CÒN GIÁ TRỊ
          </span>
        </div>
        <small>Ảnh tham khảo · Không phải món đồ đang mở bán</small>
      </div>
      <div className="bx-surplus-copy">
        <Kicker>05 / ĐỒ KHÔNG MANG THEO</Kicker>
        <h2>
          Gọn phòng cũ.
          <br /> <em>Giữ lại giá trị.</em>
        </h2>
        <p>
          Đồ còn tốt có thể được thu mua hoặc ký gửi. Đồ hỏng cần kiểm tra khả
          năng thu gom và đầu ra phù hợp.
        </p>
        <Tabs defaultValue="buyback" className="bx-surplus-tabs">
          <TabsList
            className="bx-line-tabs"
            aria-label="Phương án đồ không mang theo"
          >
            <TabsTrigger value="buyback" className="bx-line-tab">
              Thu mua
            </TabsTrigger>
            <TabsTrigger value="consign" className="bx-line-tab">
              Ký gửi
            </TabsTrigger>
            <TabsTrigger value="recycle" className="bx-line-tab">
              Thu gom
            </TabsTrigger>
          </TabsList>
          <TabsContent value="buyback" className="bx-surplus-panel">
            <h3>Đã nhận đồ. Đã chốt giá.</h3>
            <p>
              Giá thu mua được trừ vào phí chuyển sau thẩm định, đồng ý và tiếp
              nhận. Phần giá trị vượt phí được đối soát riêng.
            </p>
            <div className="bx-credit-example">
              <div>
                <span>Phí chuyển minh họa</span>
                <strong>500.000đ</strong>
              </div>
              <div>
                <span>Thu mua đã chốt</span>
                <strong>−150.000đ</strong>
              </div>
              <div>
                <span>Còn thanh toán</span>
                <strong>350.000đ</strong>
              </div>
              <small>Ví dụ minh họa, không phải định giá cam kết.</small>
            </div>
          </TabsContent>
          <TabsContent value="consign" className="bx-surplus-panel">
            <h3>Trao tiếp sau khi bán được.</h3>
            <p>
              Giá bán, phí ký gửi, thời hạn và cách đối soát được thống nhất
              trước tiếp nhận. Ký gửi thanh toán sau bán, không trừ trước vào
              phí chuyển.
            </p>
            <ol className="bx-mini-flow">
              <li>Thẩm định & thỏa thuận</li>
              <li>Tiếp nhận & tìm người mua</li>
              <li>Bán được & đối soát</li>
            </ol>
          </TabsContent>
          <TabsContent value="recycle" className="bx-surplus-panel">
            <h3>Đúng loại đồ. Đúng đầu ra.</h3>
            <p>
              Kiểm tra chất liệu và đơn vị tiếp nhận trước xác nhận thu gom.
              Không cam kết mọi món đồ đều được tái chế.
            </p>
            <div className="bx-soft-note">
              Pin, hóa chất, vật sắc nhọn và rác nguy hại cần kênh chuyên biệt.
            </div>
          </TabsContent>
        </Tabs>
        <a className="bx-inline-link" href="/gui-do">
          Gửi thông tin đồ cần xử lý
          <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}

export function Guides() {
  return (
    <section className="bx-guides" id="huong-dan">
      <div className="bx-wrap">
        <SectionTitle
          number="06"
          eyebrow="CHUẨN BỊ CÙNG BOXANH"
          title={
            <>
              Chuyển trọ lần đầu?
              <br /> <em>Có hướng dẫn để bắt đầu.</em>
            </>
          }
        >
          <a href="/dich-vu#chuan-bi" className="bx-inline-link">
            Xem danh sách chuẩn bị
            <ArrowUpRight size={18} />
          </a>
        </SectionTitle>
        <div className="bx-guide-grid">
          {[
            [
              Package,
              "01",
              "Đóng hộp có thứ tự",
              "Tách đồ theo nhóm. Giữ riêng giấy tờ, đồ quý giá; ghi nhận đồ ngoài hộp.",
              "/dich-vu#chuan-bi",
            ],
            [
              ClipboardCheck,
              "02",
              "Hiểu khoản phí phát sinh",
              "Cầu thang, đường xe vào, phí chờ và đồ cồng kềnh: trao đổi trước, tránh bị động.",
              "/dich-vu#phu-phi",
            ],
            [
              ShieldCheck,
              "03",
              "Khi đồ có bất thường",
              "Giữ tem niêm phong và ảnh hiện trạng. Gửi mã đơn để CSKH đối chiếu hồ sơ giao nhận.",
              "/ho-tro",
            ],
          ].map(([Icon, n, t, d, href]) => (
            <a className="bx-guide-card" key={n} href={href} data-bx-reveal>
              <div>
                <Icon size={28} />
                <span>{n}</span>
              </div>
              <h3>{t}</h3>
              <p>{d}</p>
              <span className="bx-guide-link">
                Đọc hướng dẫn
                <ArrowUpRight size={17} />
              </span>
            </a>
          ))}
        </div>
        <div className="bx-area-strip" id="khu-vuc">
          <div className="bx-area-icon">
            <MapPin size={33} />
          </div>
          <div>
            <span className="bx-label">BẮT ĐẦU TẠI VINH, NGHỆ AN</span>
            <h3>Gần bạn hơn. Khảo sát kỹ hơn.</h3>
            <p>
              Địa chỉ, đường xe vào, cầu thang và lịch mong muốn giúp BOXANH
              chọn phương án phù hợp. Đơn ngoài khu vực cần xác nhận riêng.
            </p>
          </div>
          <a href="/dat-lich" className="bx-inline-link">
            Gửi địa chỉ khảo sát
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export function FAQ({ config: c }) {
  return (
    <section className="bx-section bx-wrap bx-faq" id="cau-hoi">
      <div className="bx-faq-intro">
        <Kicker>THÔNG TIN CẦN RÕ</Kicker>
        <h2>
          Cứ hỏi.
          <br /> <em>Cùng làm rõ.</em>
        </h2>
        <p>
          Phạm vi, chi phí, hộp và giao nhận — những câu hỏi thường gặp trước
          khi đặt lịch.
        </p>
        <div className="bx-faq-contact">
          <span>
            <Phone size={22} />
          </span>
          <div>
            <small>TRAO ĐỔI VỚI BOXANH</small>
            <a href={"tel:" + c.phone}>{phoneText(c.phone)}</a>
          </div>
        </div>
        <a href="/ho-tro" className="bx-inline-link">
          CSKH & tiếp nhận sự cố
          <ArrowUpRight size={18} />
        </a>
      </div>
      <Accordion type="single" collapsible className="bx-faq-list">
        {faqItems.map(([q, a], i) => (
          <AccordionItem key={i} value={"faq-" + i} className="bx-faq-item">
            <AccordionTrigger className="bx-faq-trigger">{q}</AccordionTrigger>
            <AccordionContent className="bx-faq-content">{a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export function PortalHome({ config: c, onQuote }) {
  const root = useRef(null);
  useEntrance(root);
  return (
    <div ref={root} className="portal-home" data-portal-home>
      <section className="bx-hero">
        <div className="bx-wrap bx-hero-layout">
          <div className="bx-hero-copy">
            <Kicker>CHUYỂN TRỌ · DỌN PHÒNG · BÀN GIAO</Kicker>
            <h1>
              Chuyển nơi ở.
              <br />{" "}
              <span>
                Nhẹ việc, <em>rõ phí.</em>
              </span>
            </h1>
            <p className="bx-hero-description">
              Từ căn phòng cũ đến khởi đầu mới.
              <br /> BOXANH cùng bạn lo chuyển đồ, dọn phòng và bàn giao — với
              hộp dùng lại và phương án rõ ràng.
            </p>
            <div className="bx-hero-actions">
              <LinkButton href="#uoc-tinh" orange>
                Ước tính dịch vụ
              </LinkButton>
              <a href="#dich-vu" className="bx-hero-explore">
                Khám phá BOXANH
                <ArrowRight size={19} />
              </a>
            </div>
            <div className="bx-hero-proof">
              <div>
                <ShieldCheck size={20} />
                <span>
                  Khảo sát trước
                  <br /> <strong>Xác nhận giá & lịch</strong>
                </span>
              </div>
              <div>
                <Recycle size={21} />
                <span>
                  Hộp dùng nhiều lần
                  <br /> <strong>Thu hồi để dùng tiếp</strong>
                </span>
              </div>
            </div>
          </div>
          <div className="bx-hero-art">
            <div className="bx-hero-art-frame">
              <img
                src="/assets/boxanh-concept.webp"
                width="1536"
                height="1024"
                fetchPriority="high"
                alt="Hình ý tưởng hai hộp nhựa xanh tái sử dụng và đồ dùng trong căn phòng có ánh sáng tự nhiên"
              />
              <span className="bx-hero-image-label">
                Hình ý tưởng tạo bằng AI · Hộp thực tế sẽ được xác nhận
              </span>
              <div className="bx-hero-art-brand">
                <Package size={20} />
                <strong>BOXANH</strong>
              </div>
            </div>
            <div className="bx-hero-ticket">
              <span className="bx-ticket-icon">
                <Leaf size={28} />
              </span>
              <div>
                <small>GIỮ LẠI ĐIỀU TỐT</small>
                <strong>
                  Đồ đến nơi.
                  <br /> Hộp đi tiếp.
                </strong>
              </div>
              <ArrowUpRight size={21} />
            </div>
            <div className="bx-hero-service-seal">
              <span>01</span>
              <Truck size={20} />
              <small>
                MỘT ĐẦU MỐI
                <br /> BA DỊCH VỤ
              </small>
            </div>
          </div>
        </div>
      </section>
      <QuickQuote config={c} onQuote={onQuote} />
      <Services />
      <Confidence />
      <Prices config={c} />
      <Journey />
      <Boxes />
      <Surplus />
      <Guides />
      <FAQ config={c} />
      <section className="bx-final">
        <div className="bx-wrap bx-final-inner">
          <div>
            <Kicker light>SẴN SÀNG CHO CĂN PHÒNG MỚI</Kicker>
            <h2>
              Bạn lo khởi đầu.
              <br /> <em>BOXANH lo hành trình.</em>
            </h2>
          </div>
          <div>
            <p>
              Một vài thông tin về phòng, đồ đạc và lịch.
              <br /> Cùng thống nhất kế hoạch chuyển phù hợp.
            </p>
            <LinkButton href="/dat-lich" orange>
              Nhận báo giá từ BOXANH
            </LinkButton>
            <a className="bx-final-phone" href={"tel:" + c.phone}>
              <Phone size={18} />
              {phoneText(c.phone)}
            </a>
          </div>
        </div>
        <div className="bx-wrap bx-project-status">
          <span>BOXANH đang chuẩn bị thử nghiệm tại {c.area}.</span>
          <span>
            Ảnh vận hành & đánh giá khách sẽ công bố khi có dữ liệu thực tế.
          </span>
        </div>
      </section>
    </div>
  );
}
