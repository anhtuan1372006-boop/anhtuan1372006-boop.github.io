import React, { useEffect, useRef, useState } from "react";
import { renderToString } from "react-dom/server";
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, CalendarDays, Camera, Check, CheckCheck, ChevronDown, ChevronDownIcon, ChevronRight, ChevronUp, ClipboardCheck, Copy, KeyRound, MapPin, Package, Pause, Phone, Play, Plus, Recycle, RotateCcw, ScanLine, Send, ShieldCheck, Sparkles, Square, Truck, Volume2, X, XIcon } from "lucide-react";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Accordion, Dialog, Slot, Tabs } from "radix-ui";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/lib/utils.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region src/components/ui/button.jsx
var buttonVariants = cva("inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/90",
			destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40",
			outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2 has-[>svg]:px-3",
			xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
			sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
			lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
			icon: "size-9",
			"icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
			"icon-sm": "size-8",
			"icon-lg": "size-10"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant = "default", size = "default", asChild = false, ...props }) {
	const Comp = asChild ? Slot.Root : "button";
	return /* @__PURE__ */ jsx(Comp, {
		"data-slot": "button",
		"data-variant": variant,
		"data-size": size,
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
//#endregion
//#region src/components/ui/tabs.jsx
function Tabs$1({ className, orientation = "horizontal", ...props }) {
	return /* @__PURE__ */ jsx(Tabs.Root, {
		"data-slot": "tabs",
		"data-orientation": orientation,
		orientation,
		className: cn("group/tabs flex gap-2 data-[orientation=horizontal]:flex-col", className),
		...props
	});
}
var tabsListVariants = cva("group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-[orientation=horizontal]/tabs:h-9 group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=line]:rounded-none", {
	variants: { variant: {
		default: "bg-muted",
		line: "gap-1 bg-transparent"
	} },
	defaultVariants: { variant: "default" }
});
function TabsList({ className, variant = "default", ...props }) {
	return /* @__PURE__ */ jsx(Tabs.List, {
		"data-slot": "tabs-list",
		"data-variant": variant,
		className: cn(tabsListVariants({ variant }), className),
		...props
	});
}
function TabsTrigger({ className, ...props }) {
	return /* @__PURE__ */ jsx(Tabs.Trigger, {
		"data-slot": "tabs-trigger",
		className: cn("relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent", "data-[state=active]:bg-background data-[state=active]:text-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground", "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100", className),
		...props
	});
}
function TabsContent({ className, ...props }) {
	return /* @__PURE__ */ jsx(Tabs.Content, {
		"data-slot": "tabs-content",
		className: cn("flex-1 outline-none", className),
		...props
	});
}
//#endregion
//#region src/components/ui/accordion.jsx
function Accordion$1({ ...props }) {
	return /* @__PURE__ */ jsx(Accordion.Root, {
		"data-slot": "accordion",
		...props
	});
}
function AccordionItem({ className, ...props }) {
	return /* @__PURE__ */ jsx(Accordion.Item, {
		"data-slot": "accordion-item",
		className: cn("border-b last:border-b-0", className),
		...props
	});
}
function AccordionTrigger({ className, children, ...props }) {
	return /* @__PURE__ */ jsx(Accordion.Header, {
		className: "flex",
		children: /* @__PURE__ */ jsxs(Accordion.Trigger, {
			"data-slot": "accordion-trigger",
			className: cn("flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180", className),
			...props,
			children: [children, /* @__PURE__ */ jsx(ChevronDownIcon, { className: "pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200" })]
		})
	});
}
function AccordionContent({ className, children, ...props }) {
	return /* @__PURE__ */ jsx(Accordion.Content, {
		"data-slot": "accordion-content",
		className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
		...props,
		children: /* @__PURE__ */ jsx("div", {
			className: cn("pt-0 pb-4", className),
			children
		})
	});
}
//#endregion
//#region src/components/ui/dialog.jsx
function Dialog$1({ ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Root, {
		"data-slot": "dialog",
		...props
	});
}
function DialogTrigger({ ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Trigger, {
		"data-slot": "dialog-trigger",
		...props
	});
}
function DialogPortal({ ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Portal, {
		"data-slot": "dialog-portal",
		...props
	});
}
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Overlay, {
		"data-slot": "dialog-overlay",
		className: cn("fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", className),
		...props
	});
}
function DialogContent({ className, children, showCloseButton = true, ...props }) {
	return /* @__PURE__ */ jsxs(DialogPortal, {
		"data-slot": "dialog-portal",
		children: [/* @__PURE__ */ jsx(DialogOverlay, {}), /* @__PURE__ */ jsxs(Dialog.Content, {
			"data-slot": "dialog-content",
			className: cn("fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg", className),
			...props,
			children: [children, showCloseButton && /* @__PURE__ */ jsxs(Dialog.Close, {
				"data-slot": "dialog-close",
				className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				children: [/* @__PURE__ */ jsx(XIcon, {}), /* @__PURE__ */ jsx("span", {
					className: "sr-only",
					children: "Đóng"
				})]
			})]
		})]
	});
}
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "dialog-header",
		className: cn("flex flex-col gap-2 text-center sm:text-left", className),
		...props
	});
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Title, {
		"data-slot": "dialog-title",
		className: cn("text-lg leading-none font-semibold", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Description, {
		"data-slot": "dialog-description",
		className: cn("text-sm text-muted-foreground", className),
		...props
	});
}
//#endregion
//#region src/portal-data.js
var journey = [
	{
		title: "Khảo sát & thống nhất",
		short: "Chốt phương án",
		icon: "ClipboardCheck",
		kicker: "TRƯỚC NGÀY CHUYỂN",
		description: "Gửi địa chỉ, ảnh đồ đạc và ngày mong muốn. BOXANH kiểm tra quãng đường, cầu thang, điều kiện bốc xếp và nguồn lực cần dùng.",
		tasks: [
			"Chọn phần việc bạn cần hỗ trợ",
			"Tách rõ giá chuyến và các khoản phụ phí",
			"Xác nhận phạm vi, giá và lịch cùng BOXANH"
		],
		you: "Thông tin đầy đủ giúp báo giá sát hơn.",
		link: "/dat-lich",
		cta: "Gửi thông tin khảo sát"
	},
	{
		title: "Nhận hộp & chuẩn bị",
		short: "Sắp xếp đồ",
		icon: "Package",
		kicker: "THEO LỊCH ĐÃ THỐNG NHẤT",
		description: "Kiểm đếm hộp và tình trạng khi nhận. Tách đồ mang theo, đồ để lại và đồ cần giữ riêng. Hộp được đóng phù hợp trước khi vận chuyển.",
		tasks: [
			"Không vượt tải trọng được xác nhận",
			"Giữ giấy tờ, tiền và đồ quý giá bên mình",
			"Tem niêm phong có mã riêng theo quy trình dự kiến"
		],
		you: "Đồ ngoài hộp cần có danh sách riêng.",
		link: "/dich-vu#chuan-bi",
		cta: "Xem danh sách chuẩn bị"
	},
	{
		title: "Vận chuyển & bàn giao",
		short: "Chuyển đến nơi",
		icon: "Truck",
		kicker: "NGÀY CHUYỂN TRỌ",
		description: "Đối chiếu số hộp, mã hộp và tình trạng tem niêm phong. Kiểm đếm đồ ngoài hộp, ghi nhận bằng ảnh khi giao và nhận tại nơi ở mới.",
		tasks: [
			"Có người giao và người nhận",
			"Trao đổi trước khi thay đổi phạm vi",
			"Ghi nhận ngay dấu hiệu bất thường"
		],
		you: "Giữ hộp, tem niêm phong và ảnh nếu cần CSKH đối chiếu.",
		link: "/tra-cuu",
		cta: "Tra cứu yêu cầu của bạn"
	},
	{
		title: "Thu hồi & hoàn tất",
		short: "Khép hành trình",
		icon: "RotateCcw",
		kicker: "SAU KHI DỠ ĐỒ",
		description: "Hẹn BOXANH thu hồi hộp. Hộp được kiểm tra, vệ sinh và chỉ đưa vào lượt tiếp theo khi đạt yêu cầu; đồ không mang theo xử lý theo thỏa thuận.",
		tasks: [
			"Kiểm đếm số hộp và tình trạng thu hồi",
			"Đối soát các khoản đã thống nhất",
			"Thu mua / ký gửi có hồ sơ riêng"
		],
		you: "Thu mua chỉ giảm phí sau khi nhận đồ và chốt giá.",
		link: "/gui-do",
		cta: "Gửi đồ không mang theo"
	}
];
var faqItems = [
	["BOXANH hiện hỗ trợ những dịch vụ nào?", "Ba nhóm chính là chuyển trọ, dọn phòng và bàn giao phòng tại Vinh, Nghệ An. Bạn có thể yêu cầu từng phần hoặc kết hợp. Sửa chữa phát sinh cần khảo sát và thống nhất riêng."],
	["Giá trên website đã là giá cuối cùng chưa?", "Các mức giá chuyển trọ và thuê hộp đang là tham khảo. Giá chính thức được xác nhận sau khi BOXANH có đủ thông tin. Chi phí cầu thang, chờ, thêm người, ngoài giờ và các phát sinh được tách rõ trước khi thực hiện. Dọn phòng và bàn giao cần khảo sát."],
	["Hộp được giao, thu hồi và vệ sinh thế nào?", "Hai bên thống nhất lịch giao và hạn thu hồi; kiểm đếm số lượng, tình trạng ở từng lần bàn giao. Hộp thu hồi được kiểm tra và vệ sinh trước khi dùng lại. Loại hộp, tải trọng, đặt cọc và cách xử lý hỏng/mất được xác nhận trước khi sử dụng."],
	["Tem niêm phong bất thường hoặc không tìm thấy đồ thì làm gì?", "Giữ hộp và tem niêm phong, chụp ảnh hiện trạng và gửi thông tin qua CSKH. BOXANH đối chiếu đơn, lịch sử QR nếu có, ảnh giao nhận, tem niêm phong và danh sách đồ ngoài hộp trước khi trao đổi trách nhiệm và phương án xử lý."],
	["BOXANH có bảo hiểm hoặc đền bù đồ đạc không?", "Dự án chưa công bố bảo hiểm hay mức bồi thường cố định. Các điều kiện trách nhiệm, kiểm đếm và xử lý sự cố cần được thống nhất trước khi nhận lịch. Website không đưa ra cam kết bồi thường chưa được xác nhận."],
	["Thu mua và ký gửi có trừ ngay vào phí chuyển không?", "Thu mua chỉ được giảm phí khi đồ đã được thẩm định, giá được đồng ý và BOXANH đã tiếp nhận. Phần vượt phí được đối soát riêng. Ký gửi được thanh toán sau khi bán; không trừ trước vào phí chuyển."],
	["Gửi yêu cầu có xác nhận lịch hoặc thu tiền chưa?", "Chưa. Gửi biểu mẫu là bước để BOXANH tiếp nhận thông tin, khảo sát và liên hệ. Lịch, phạm vi và giá cần được hai bên xác nhận sau đó."]
];
var boxStates = [
	[
		"Sẵn sàng",
		"Sẵn sàng tái sử dụng",
		"Đã kiểm tra và vệ sinh; chuẩn bị cho lượt giao tiếp theo."
	],
	[
		"Đã giao",
		"Đã giao",
		"Đối chiếu hộp, đơn liên quan và tình trạng ban đầu khi giao."
	],
	[
		"Đang dùng",
		"Đang sử dụng",
		"Khách đóng đồ và dùng tem niêm phong có mã riêng cho lần sử dụng."
	],
	[
		"Thu hồi",
		"Đã thu hồi",
		"Kiểm đếm hộp quay về và ghi nhận hiện trạng sau dùng."
	],
	[
		"Vệ sinh",
		"Kiểm tra / Vệ sinh",
		"Kiểm tra độ bền, vệ sinh. Hộp lỗi chuyển sang Bảo trì."
	],
	[
		"Dùng tiếp",
		"Sẵn sàng tái sử dụng",
		"Hộp đạt yêu cầu được quay lại phục vụ hành trình mới."
	]
];
//#endregion
//#region src/portal-home.jsx
var money = (n) => new Intl.NumberFormat("vi-VN", {
	style: "currency",
	currency: "VND",
	maximumFractionDigits: 0
}).format(n || 0);
var phoneText = (phone) => phone.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3");
var icons = {
	ClipboardCheck,
	Package,
	Truck,
	RotateCcw
};
function Kicker({ children, light = false }) {
	return /* @__PURE__ */ jsxs("p", {
		className: "bx-kicker" + (light ? " bx-kicker-light" : ""),
		children: [/* @__PURE__ */ jsx("span", {}), children]
	});
}
function SectionTitle({ number, eyebrow, title, children, light = false }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "bx-section-title" + (light ? " bx-title-light" : ""),
		"data-bx-reveal": true,
		children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs(Kicker, {
			light,
			children: [
				number,
				" / ",
				eyebrow
			]
		}), /* @__PURE__ */ jsx("h2", { children: title })] }), children && /* @__PURE__ */ jsx("div", {
			className: "bx-section-description",
			children
		})]
	});
}
function LinkButton({ href, children, light = false, orange = false, className = "" }) {
	return /* @__PURE__ */ jsx(Button, {
		asChild: true,
		className: `bx-button ${light ? "bx-button-light" : ""} ${orange ? "bx-button-orange" : ""} ${className}`,
		children: /* @__PURE__ */ jsxs("a", {
			href,
			children: [children, /* @__PURE__ */ jsx(ArrowUpRight, { size: 18 })]
		})
	});
}
function QuickQuote({ config: c, onQuote }) {
	const [service, setService] = useState("full"), [boxes, setBoxes] = useState("10"), [distance, setDistance] = useState("5");
	const survey = ["cleaning", "handover"].includes(service), category = survey ? service : "moving";
	const [quote, setQuote] = useState({
		total: c.fullBase,
		needsSurvey: false
	}), [busy, setBusy] = useState(false), [error, setError] = useState("");
	useEffect(() => {
		const controller = new AbortController();
		if (!survey && (!(Number(boxes) >= 1 && Number(boxes) <= 60) || !(Number(distance) >= 1 && Number(distance) <= 80))) {
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
						distance: Number(distance)
					}),
					signal: controller.signal
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
	}, [
		service,
		boxes,
		distance,
		survey
	]);
	function choose(value) {
		setService(value === "moving" ? "full" : value);
		setQuote({
			needsSurvey: value !== "moving",
			total: c.fullBase
		});
	}
	return /* @__PURE__ */ jsx("section", {
		className: "bx-quote-zone",
		id: "uoc-tinh",
		children: /* @__PURE__ */ jsxs("div", {
			className: "bx-wrap",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "bx-quote-card",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "bx-quote-heading",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
						className: "bx-label",
						children: "BẮT ĐẦU TỪ NHU CẦU CỦA BẠN"
					}), /* @__PURE__ */ jsx("h2", { children: "Ước tính trước. Quyết định sau." })] }), /* @__PURE__ */ jsxs("p", { children: [
						"Gửi yêu cầu chưa xác nhận lịch",
						/* @__PURE__ */ jsx("br", {}),
						" và chưa yêu cầu thanh toán."
					] })]
				}), /* @__PURE__ */ jsxs(Tabs$1, {
					value: category,
					onValueChange: choose,
					className: "bx-quote-tabs",
					children: [/* @__PURE__ */ jsxs(TabsList, {
						className: "bx-tab-list",
						"aria-label": "Nhóm dịch vụ ước tính",
						children: [
							/* @__PURE__ */ jsxs(TabsTrigger, {
								value: "moving",
								className: "bx-tab",
								children: [/* @__PURE__ */ jsx(Truck, { size: 18 }), "Chuyển trọ"]
							}),
							/* @__PURE__ */ jsxs(TabsTrigger, {
								value: "cleaning",
								className: "bx-tab",
								children: [/* @__PURE__ */ jsx(Sparkles, { size: 18 }), "Dọn phòng"]
							}),
							/* @__PURE__ */ jsxs(TabsTrigger, {
								value: "handover",
								className: "bx-tab",
								children: [/* @__PURE__ */ jsx(KeyRound, { size: 18 }), "Bàn giao phòng"]
							})
						]
					}), /* @__PURE__ */ jsx(TabsContent, {
						value: category,
						className: "bx-quote-tab-content",
						children: /* @__PURE__ */ jsxs("form", {
							id: "quick-quote",
							className: "bx-quote-grid",
							onSubmit: (event) => {
								event.preventDefault();
								if (event.currentTarget.reportValidity() && !error) onQuote?.({
									service,
									boxes: survey ? 0 : Number(boxes),
									distance: survey ? 1 : Number(distance)
								});
							},
							children: [/* @__PURE__ */ jsxs("div", {
								className: "bx-quote-fields",
								children: [
									/* @__PURE__ */ jsxs("label", {
										className: "bx-field",
										children: ["Dịch vụ", /* @__PURE__ */ jsxs("select", {
											"aria-label": "Gói dịch vụ ước tính",
											name: "service",
											value: service,
											onChange: (e) => setService(e.target.value),
											children: [
												/* @__PURE__ */ jsxs("optgroup", {
													label: "Chuyển trọ",
													children: [
														/* @__PURE__ */ jsx("option", {
															value: "full",
															children: "Chuyển trọ · Trọn gói"
														}),
														/* @__PURE__ */ jsx("option", {
															value: "small",
															children: "Chuyển trọ · Gọn nhẹ"
														}),
														/* @__PURE__ */ jsx("option", {
															value: "boxes",
															children: "Chỉ thuê hộp"
														})
													]
												}),
												/* @__PURE__ */ jsx("option", {
													value: "cleaning",
													children: "Dọn phòng"
												}),
												/* @__PURE__ */ jsx("option", {
													value: "handover",
													children: "Bàn giao phòng"
												})
											]
										})]
									}),
									!survey && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("label", {
										className: "bx-field",
										children: ["Số hộp dự kiến", /* @__PURE__ */ jsx("input", {
											"aria-label": "Số hộp ước tính",
											type: "number",
											min: "1",
											max: "60",
											required: true,
											name: "boxes",
											value: boxes,
											onChange: (e) => setBoxes(e.target.value)
										})]
									}), /* @__PURE__ */ jsxs("label", {
										className: "bx-field",
										children: ["Quãng đường (km)", /* @__PURE__ */ jsx("input", {
											"aria-label": "Quãng đường ước tính",
											type: "number",
											min: "1",
											max: "80",
											required: true,
											name: "distance",
											value: distance,
											onChange: (e) => setDistance(e.target.value)
										})]
									})] }),
									/* @__PURE__ */ jsx("p", {
										className: "bx-quote-note",
										id: "quick-note",
										children: survey ? "Giá phụ thuộc diện tích, hiện trạng và hạng mục. BOXANH khảo sát trước khi xác nhận chi phí." : "Chưa gồm cầu thang, đồ cồng kềnh, phí chờ, thêm người và ngoài giờ. Các khoản được tách rõ trước khi thực hiện."
									})
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "bx-quote-result",
								"aria-busy": busy,
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "bx-label",
										children: "ƯỚC TÍNH THAM KHẢO"
									}),
									/* @__PURE__ */ jsxs("output", {
										id: "quick-total",
										"aria-live": "polite",
										children: [error ? "Kiểm tra thông tin" : quote.needsSurvey ? "Cần khảo sát" : money(quote.total), busy && !error && /* @__PURE__ */ jsx("small", { children: "Đang cập nhật…" })]
									}),
									error && /* @__PURE__ */ jsx("p", {
										className: "bx-inline-error",
										role: "alert",
										children: error
									}),
									/* @__PURE__ */ jsxs(Button, {
										type: "submit",
										className: "bx-button bx-button-orange",
										disabled: Boolean(error),
										children: ["Nhận báo giá", /* @__PURE__ */ jsx(ArrowRight, { size: 18 })]
									}),
									/* @__PURE__ */ jsxs("a", {
										className: "bx-small-link",
										href: "/dich-vu#phu-phi",
										children: ["Xem cách tính phụ phí", /* @__PURE__ */ jsx(ChevronRight, { size: 14 })]
									})
								]
							})]
						})
					})]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "bx-quote-foot",
				children: [/* @__PURE__ */ jsxs("span", { children: [
					/* @__PURE__ */ jsx(MapPin, { size: 15 }),
					"Khu vực thử nghiệm: ",
					c.area
				] }), /* @__PURE__ */ jsxs("a", {
					href: "/tra-cuu",
					children: ["Đã gửi yêu cầu? Tra cứu tiến độ", /* @__PURE__ */ jsx(ArrowUpRight, { size: 15 })]
				})]
			})]
		})
	});
}
function Confidence() {
	return /* @__PURE__ */ jsx("section", {
		className: "bx-confidence",
		children: /* @__PURE__ */ jsxs("div", {
			className: "bx-wrap bx-confidence-grid",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "bx-confidence-title",
				"data-bx-reveal": true,
				children: [
					/* @__PURE__ */ jsx(Kicker, {
						light: true,
						children: "ĐIỀU TẠO NÊN KHÁC BIỆT"
					}),
					/* @__PURE__ */ jsxs("h2", { children: [
						"Rõ từng khoản.",
						/* @__PURE__ */ jsx("br", {}),
						" Chỉn chu từng bước.",
						/* @__PURE__ */ jsx("br", {}),
						" ",
						/* @__PURE__ */ jsx("em", { children: "Dùng lại từng hộp." })
					] }),
					/* @__PURE__ */ jsx("p", { children: "Những điều cần được thống nhất để bạn chủ động từ lúc chuẩn bị đến lúc nhận lại đồ." }),
					/* @__PURE__ */ jsxs("a", {
						href: "/chinh-sach",
						className: "bx-inline-link",
						children: ["Xem điều kiện dịch vụ", /* @__PURE__ */ jsx(ArrowUpRight, { size: 18 })]
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "bx-confidence-cards",
				children: [
					[
						ClipboardCheck,
						"01",
						"Giá có căn cứ",
						"Khảo sát nguồn lực, quãng đường và điều kiện bốc xếp. Giá chuyến và phụ phí tách rõ."
					],
					[
						ShieldCheck,
						"02",
						"Giao nhận có ghi nhận",
						"Kiểm đếm, ảnh bàn giao và đối chiếu tem niêm phong theo quy trình dự kiến; CSKH có đầu mối tiếp nhận."
					],
					[
						Recycle,
						"03",
						"Hộp tiếp tục hành trình",
						"Thu hồi, kiểm tra, vệ sinh rồi dùng tiếp. Hộp hết vòng đời được kiểm tra khả năng tái chế."
					]
				].map(([Icon, n, t, d]) => /* @__PURE__ */ jsxs("article", {
					"data-bx-reveal": true,
					children: [
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Icon, { size: 26 }), /* @__PURE__ */ jsx("span", { children: n })] }),
						/* @__PURE__ */ jsx("h3", { children: t }),
						/* @__PURE__ */ jsx("p", { children: d })
					]
				}, n))
			})]
		})
	});
}
function Prices({ config: c }) {
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
				"Giao và thu hồi hộp theo lịch"
			]
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
				"Tư vấn thu mua, ký gửi đồ còn tốt"
			]
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
				"Kiểm tra & vệ sinh sau mỗi lượt"
			]
		}
	];
	return /* @__PURE__ */ jsx("section", {
		className: "bx-section bx-pricing",
		id: "bang-gia",
		children: /* @__PURE__ */ jsxs("div", {
			className: "bx-wrap",
			children: [
				/* @__PURE__ */ jsx(SectionTitle, {
					number: "02",
					eyebrow: "BẢNG GIÁ THAM KHẢO",
					title: /* @__PURE__ */ jsxs(Fragment, { children: [
						"Chọn gói vừa với đồ.",
						/* @__PURE__ */ jsx("br", {}),
						" ",
						/* @__PURE__ */ jsx("em", { children: "Vừa với kế hoạch của bạn." })
					] }),
					children: /* @__PURE__ */ jsxs("p", { children: [
						"Mức dưới đây minh họa 10 hộp, ",
						c.rentalDays,
						" ngày tại ",
						c.area,
						". BOXANH xác nhận giá sau khảo sát."
					] })
				}),
				/* @__PURE__ */ jsx("div", {
					className: "bx-price-grid",
					children: packages.map((p, i) => /* @__PURE__ */ jsxs("article", {
						className: "bx-price-card" + (i === 1 ? " bx-price-featured" : ""),
						"data-bx-reveal": true,
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "bx-price-card-head",
								children: [/* @__PURE__ */ jsx("span", {
									className: "bx-label",
									children: p.tag
								}), i === 1 && /* @__PURE__ */ jsx("span", {
									className: "bx-feature-tag",
									children: "Trọn hành trình"
								})]
							}),
							/* @__PURE__ */ jsx("h3", { children: p.name }),
							/* @__PURE__ */ jsxs("div", {
								className: "bx-price",
								children: [/* @__PURE__ */ jsx("span", { children: "Từ" }), /* @__PURE__ */ jsx("strong", { children: money(p.price) })]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "bx-price-desc",
								children: p.desc
							}),
							/* @__PURE__ */ jsx("ul", { children: p.items.map((t) => /* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx(Check, { size: 17 }), t] }, t)) }),
							/* @__PURE__ */ jsxs("div", {
								className: "bx-price-actions",
								children: [/* @__PURE__ */ jsx(LinkButton, {
									href: "/dat-lich?goi=" + p.key,
									orange: i === 1,
									children: "Nhận báo giá gói này"
								}), /* @__PURE__ */ jsxs(Dialog$1, { children: [/* @__PURE__ */ jsx(DialogTrigger, {
									asChild: true,
									children: /* @__PURE__ */ jsxs(Button, {
										variant: "ghost",
										className: "bx-scope-button",
										children: ["Xem phạm vi & điều kiện", /* @__PURE__ */ jsx(Plus, { size: 14 })]
									})
								}), /* @__PURE__ */ jsxs(DialogContent, {
									className: "bx-dialog",
									children: [
										/* @__PURE__ */ jsxs(DialogHeader, { children: [
											/* @__PURE__ */ jsxs("span", {
												className: "bx-label",
												children: ["GÓI ", p.name.toUpperCase()]
											}),
											/* @__PURE__ */ jsxs(DialogTitle, { children: [p.name, ", theo điều kiện thực tế."] }),
											/* @__PURE__ */ jsx(DialogDescription, { children: p.desc })
										] }),
										/* @__PURE__ */ jsx("ul", {
											className: "bx-dialog-checks",
											children: p.items.map((t) => /* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx(Check, { size: 17 }), t] }, t))
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "bx-dialog-note",
											children: [/* @__PURE__ */ jsx("strong", { children: "Thống nhất trước khi nhận lịch" }), /* @__PURE__ */ jsx("p", { children: "Giá tham khảo chưa gồm cầu thang, đồ cồng kềnh, phí chờ, thêm người, ngoài giờ và đặt cọc hộp nếu có. Số hộp, tải trọng, hạng mục đóng gói và điều kiện trách nhiệm được xác nhận riêng." })]
										}),
										/* @__PURE__ */ jsx(LinkButton, {
											href: "/dat-lich?goi=" + p.key,
											children: "Gửi thông tin khảo sát"
										})
									]
								})] })]
							})
						]
					}, p.key))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "bx-pricing-note",
					children: [/* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx(ClipboardCheck, { size: 18 }), "Chi phí phát sinh được tách rõ và thống nhất trước khi thực hiện."] }), /* @__PURE__ */ jsxs("a", {
						href: "/dich-vu#so-sanh",
						children: ["So sánh chi tiết các gói", /* @__PURE__ */ jsx(ArrowUpRight, { size: 17 })]
					})]
				})
			]
		})
	});
}
function Journey() {
	return /* @__PURE__ */ jsxs("section", {
		className: "bx-section bx-wrap",
		id: "hanh-trinh",
		children: [/* @__PURE__ */ jsx(SectionTitle, {
			number: "03",
			eyebrow: "QUY TRÌNH PHỐI HỢP",
			title: /* @__PURE__ */ jsxs(Fragment, { children: [
				"Biết bước tiếp theo.",
				/* @__PURE__ */ jsx("br", {}),
				" ",
				/* @__PURE__ */ jsx("em", { children: "An tâm hơn từ đầu." })
			] }),
			children: /* @__PURE__ */ jsx("p", { children: "Bạn chuẩn bị gì, BOXANH hỗ trợ gì? Khám phá từng bước trước, trong và sau ngày chuyển." })
		}), /* @__PURE__ */ jsxs(Tabs$1, {
			defaultValue: "0",
			className: "bx-journey-tabs",
			children: [/* @__PURE__ */ jsx(TabsList, {
				className: "bx-journey-list",
				"aria-label": "Các bước chuyển trọ",
				children: journey.map((step, i) => {
					const Icon = icons[step.icon];
					return /* @__PURE__ */ jsxs(TabsTrigger, {
						value: String(i),
						className: "bx-journey-trigger",
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "bx-step-circle",
								children: ["0", i + 1]
							}),
							/* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsxs("small", { children: ["BƯỚC ", i + 1] }), step.short] }),
							/* @__PURE__ */ jsx(Icon, { size: 20 })
						]
					}, i);
				})
			}), journey.map((step, i) => {
				const Icon = icons[step.icon];
				return /* @__PURE__ */ jsxs(TabsContent, {
					value: String(i),
					className: "bx-journey-panel",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "bx-journey-visual",
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "bx-journey-big",
								children: ["0", i + 1]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "bx-journey-illustration",
								children: [/* @__PURE__ */ jsx(Icon, {
									size: 100,
									strokeWidth: 1
								}), /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(CheckCheck, { size: 25 }) })]
							}),
							/* @__PURE__ */ jsx("p", { children: step.you })
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "bx-journey-copy",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "bx-label",
								children: step.kicker
							}),
							/* @__PURE__ */ jsx("h3", { children: step.title }),
							/* @__PURE__ */ jsx("p", { children: step.description }),
							/* @__PURE__ */ jsx("ul", { children: step.tasks.map((task) => /* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx(Check, { size: 17 }), task] }, task)) }),
							/* @__PURE__ */ jsxs("a", {
								className: "bx-inline-link",
								href: step.link,
								children: [step.cta, /* @__PURE__ */ jsx(ArrowUpRight, { size: 18 })]
							})
						]
					})]
				}, i);
			})]
		})]
	});
}
function Boxes() {
	const [status, setStatus] = useState(0);
	return /* @__PURE__ */ jsx("section", {
		className: "bx-boxes",
		id: "hop",
		children: /* @__PURE__ */ jsxs("div", {
			className: "bx-wrap",
			children: [
				/* @__PURE__ */ jsx(SectionTitle, {
					number: "04",
					eyebrow: "HỘP BOXANH & GIAO NHẬN",
					light: true,
					title: /* @__PURE__ */ jsxs(Fragment, { children: [
						"Đồ đến nơi.",
						/* @__PURE__ */ jsx("br", {}),
						" ",
						/* @__PURE__ */ jsx("em", { children: "Hộp đi tiếp." })
					] }),
					children: /* @__PURE__ */ jsx("p", { children: "Thiết kế theo hướng bền, dùng nhiều lần, dễ vệ sinh, dễ thu hồi và có khả năng tái chế khi kết thúc vòng đời." })
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "bx-box-grid",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "bx-box-story",
						"data-bx-reveal": true,
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "bx-box-methods",
								children: [
									[
										ScanLine,
										"Mỗi hộp, một QR riêng.",
										"Quản lý vị trí, đơn liên quan và trạng thái của hộp theo lộ trình dự kiến."
									],
									[
										Camera,
										"Mỗi lần đóng, một mã tem niêm phong.",
										"Đối tác quét QR và chụp tem niêm phong khi nhận; kiểm tra lại tình trạng khi giao."
									],
									[
										Sparkles,
										"Mỗi lượt dùng, kiểm tra lại.",
										"Thu hồi, kiểm tra và vệ sinh trước khi đưa hộp đạt yêu cầu vào lượt tiếp theo."
									]
								].map(([Icon, t, d]) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(Icon, { size: 24 }) }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", { children: t }), /* @__PURE__ */ jsx("p", { children: d })] })] }, t))
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "bx-qr-record",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "bx-qr-icon",
										children: [/* @__PURE__ */ jsx(ScanLine, { size: 38 }), /* @__PURE__ */ jsx("small", { children: "QR" })]
									}),
									/* @__PURE__ */ jsxs("div", { children: [
										/* @__PURE__ */ jsx("span", {
											className: "bx-label",
											children: "THẺ HỘP MINH HỌA"
										}),
										/* @__PURE__ */ jsxs("strong", { children: ["BX-000128 ", /* @__PURE__ */ jsx("small", { children: "(1)" })] }),
										/* @__PURE__ */ jsxs("p", { children: [
											"Hộp tái sử dụng · Đơn BX2027-0015",
											/* @__PURE__ */ jsx("br", {}),
											" Ngày nhận 12/01/2027 · 10 hộp của đơn"
										] })
									] }),
									/* @__PURE__ */ jsx("a", {
										href: "/hop-minh-hoa",
										"aria-label": "Xem thông tin hộp minh họa",
										children: /* @__PURE__ */ jsx(ArrowUpRight, { size: 22 })
									})
								]
							}),
							/* @__PURE__ */ jsxs("a", {
								className: "bx-inline-link",
								href: "/dich-vu#hop",
								children: ["Tiêu chí hộp & hướng dẫn sử dụng", /* @__PURE__ */ jsx(ArrowUpRight, { size: 18 })]
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "bx-box-experience",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "n7-box-specimen",
							children: [/* @__PURE__ */ jsx("img", {
								src: "/assets/boxanh-concept.webp",
								width: "1536",
								height: "1024",
								loading: "lazy",
								alt: "Hình ý tưởng hộp nhựa xanh tái sử dụng"
							}), /* @__PURE__ */ jsx("p", { children: "Hình ý tưởng tạo bằng AI · Loại hộp và thông số thực tế được xác nhận sau khảo sát." })]
						}), /* @__PURE__ */ jsxs("div", {
							className: "bx-lifecycle",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "bx-lifecycle-top",
									children: [/* @__PURE__ */ jsx("span", {
										className: "bx-label",
										children: "VÒNG ĐỜI HỘP MINH HỌA"
									}), /* @__PURE__ */ jsxs("span", {
										className: "bx-live-dot",
										children: [
											"0",
											status + 1,
											" / 06"
										]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "bx-lifecycle-current",
									role: "status",
									"aria-live": "polite",
									children: [/* @__PURE__ */ jsx("h3", { children: boxStates[status][1] }), /* @__PURE__ */ jsx("p", { children: boxStates[status][2] })]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "bx-lifecycle-buttons",
									role: "group",
									"aria-label": "Khám phá vòng đời hộp",
									children: boxStates.map((s, i) => /* @__PURE__ */ jsxs("button", {
										type: "button",
										onClick: () => setStatus(i),
										"aria-pressed": status === i,
										children: [/* @__PURE__ */ jsxs("span", { children: ["0", i + 1] }), s[0]]
									}, i))
								})
							]
						})]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "bx-box-foot",
					children: [/* @__PURE__ */ jsx("p", { children: "Hộp lỗi → Bảo trì · Không xác định vị trí → Thất lạc · Hết vòng đời → Kiểm tra khả năng tái chế." }), /* @__PURE__ */ jsx("small", { children: "QR, tem niêm phong và lịch sử quét là quy trình dự kiến. Màn hình dùng dữ liệu minh họa." })]
				})
			]
		})
	});
}
function Surplus() {
	return /* @__PURE__ */ jsxs("section", {
		className: "bx-section bx-wrap bx-surplus",
		id: "do-khong-mang",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "bx-surplus-gallery",
			"data-bx-reveal": true,
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "bx-surplus-room",
					children: [/* @__PURE__ */ jsx("img", {
						src: "/assets/room-real.webp",
						width: "1200",
						height: "1800",
						loading: "lazy",
						alt: "Ảnh tham khảo căn phòng nhỏ gọn gàng"
					}), /* @__PURE__ */ jsx("span", { children: "Nhường chỗ cho điều bạn cần." })]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "bx-surplus-book",
					children: [/* @__PURE__ */ jsx("img", {
						src: "/assets/books.jpg",
						width: "1200",
						height: "800",
						loading: "lazy",
						alt: "Ảnh minh họa sách còn giá trị sử dụng"
					}), /* @__PURE__ */ jsx("span", { children: "Một món đồ. Một câu chuyện tiếp." })]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "bx-reuse-stamp",
					children: [/* @__PURE__ */ jsx(Recycle, { size: 28 }), /* @__PURE__ */ jsxs("span", { children: [
						"CÒN TỐT",
						/* @__PURE__ */ jsx("br", {}),
						" CÒN GIÁ TRỊ"
					] })]
				}),
				/* @__PURE__ */ jsx("small", { children: "Ảnh tham khảo · Không phải món đồ đang mở bán" })
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "bx-surplus-copy",
			children: [
				/* @__PURE__ */ jsx(Kicker, { children: "05 / ĐỒ KHÔNG MANG THEO" }),
				/* @__PURE__ */ jsxs("h2", { children: [
					"Gọn phòng cũ.",
					/* @__PURE__ */ jsx("br", {}),
					" ",
					/* @__PURE__ */ jsx("em", { children: "Giữ lại giá trị." })
				] }),
				/* @__PURE__ */ jsx("p", { children: "Đồ còn tốt có thể được thu mua hoặc ký gửi. Đồ hỏng cần kiểm tra khả năng thu gom và đầu ra phù hợp." }),
				/* @__PURE__ */ jsxs(Tabs$1, {
					defaultValue: "buyback",
					className: "bx-surplus-tabs",
					children: [
						/* @__PURE__ */ jsxs(TabsList, {
							className: "bx-line-tabs",
							"aria-label": "Phương án đồ không mang theo",
							children: [
								/* @__PURE__ */ jsx(TabsTrigger, {
									value: "buyback",
									className: "bx-line-tab",
									children: "Thu mua"
								}),
								/* @__PURE__ */ jsx(TabsTrigger, {
									value: "consign",
									className: "bx-line-tab",
									children: "Ký gửi"
								}),
								/* @__PURE__ */ jsx(TabsTrigger, {
									value: "recycle",
									className: "bx-line-tab",
									children: "Thu gom"
								})
							]
						}),
						/* @__PURE__ */ jsxs(TabsContent, {
							value: "buyback",
							className: "bx-surplus-panel",
							children: [
								/* @__PURE__ */ jsx("h3", { children: "Đã nhận đồ. Đã chốt giá." }),
								/* @__PURE__ */ jsx("p", { children: "Giá thu mua được trừ vào phí chuyển sau thẩm định, đồng ý và tiếp nhận. Phần giá trị vượt phí được đối soát riêng." }),
								/* @__PURE__ */ jsxs("div", {
									className: "bx-credit-example",
									children: [
										/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "Phí chuyển minh họa" }), /* @__PURE__ */ jsx("strong", { children: "500.000đ" })] }),
										/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "Thu mua đã chốt" }), /* @__PURE__ */ jsx("strong", { children: "−150.000đ" })] }),
										/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "Còn thanh toán" }), /* @__PURE__ */ jsx("strong", { children: "350.000đ" })] }),
										/* @__PURE__ */ jsx("small", { children: "Ví dụ minh họa, không phải định giá cam kết." })
									]
								})
							]
						}),
						/* @__PURE__ */ jsxs(TabsContent, {
							value: "consign",
							className: "bx-surplus-panel",
							children: [
								/* @__PURE__ */ jsx("h3", { children: "Trao tiếp sau khi bán được." }),
								/* @__PURE__ */ jsx("p", { children: "Giá bán, phí ký gửi, thời hạn và cách đối soát được thống nhất trước tiếp nhận. Ký gửi thanh toán sau bán, không trừ trước vào phí chuyển." }),
								/* @__PURE__ */ jsxs("ol", {
									className: "bx-mini-flow",
									children: [
										/* @__PURE__ */ jsx("li", { children: "Thẩm định & thỏa thuận" }),
										/* @__PURE__ */ jsx("li", { children: "Tiếp nhận & tìm người mua" }),
										/* @__PURE__ */ jsx("li", { children: "Bán được & đối soát" })
									]
								})
							]
						}),
						/* @__PURE__ */ jsxs(TabsContent, {
							value: "recycle",
							className: "bx-surplus-panel",
							children: [
								/* @__PURE__ */ jsx("h3", { children: "Đúng loại đồ. Đúng đầu ra." }),
								/* @__PURE__ */ jsx("p", { children: "Kiểm tra chất liệu và đơn vị tiếp nhận trước xác nhận thu gom. Không cam kết mọi món đồ đều được tái chế." }),
								/* @__PURE__ */ jsx("div", {
									className: "bx-soft-note",
									children: "Pin, hóa chất, vật sắc nhọn và rác nguy hại cần kênh chuyên biệt."
								})
							]
						})
					]
				}),
				/* @__PURE__ */ jsxs("a", {
					className: "bx-inline-link",
					href: "/gui-do",
					children: ["Gửi thông tin đồ cần xử lý", /* @__PURE__ */ jsx(ArrowUpRight, { size: 18 })]
				})
			]
		})]
	});
}
function Guides() {
	return /* @__PURE__ */ jsx("section", {
		className: "bx-guides",
		id: "huong-dan",
		children: /* @__PURE__ */ jsxs("div", {
			className: "bx-wrap",
			children: [
				/* @__PURE__ */ jsx(SectionTitle, {
					number: "06",
					eyebrow: "CHUẨN BỊ CÙNG BOXANH",
					title: /* @__PURE__ */ jsxs(Fragment, { children: [
						"Chuyển trọ lần đầu?",
						/* @__PURE__ */ jsx("br", {}),
						" ",
						/* @__PURE__ */ jsx("em", { children: "Có hướng dẫn để bắt đầu." })
					] }),
					children: /* @__PURE__ */ jsxs("a", {
						href: "/dich-vu#chuan-bi",
						className: "bx-inline-link",
						children: ["Xem danh sách chuẩn bị", /* @__PURE__ */ jsx(ArrowUpRight, { size: 18 })]
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "bx-guide-grid",
					children: [
						[
							Package,
							"01",
							"Đóng hộp có thứ tự",
							"Tách đồ theo nhóm. Giữ riêng giấy tờ, đồ quý giá; ghi nhận đồ ngoài hộp.",
							"/dich-vu#chuan-bi"
						],
						[
							ClipboardCheck,
							"02",
							"Hiểu khoản phí phát sinh",
							"Cầu thang, đường xe vào, phí chờ và đồ cồng kềnh: trao đổi trước, tránh bị động.",
							"/dich-vu#phu-phi"
						],
						[
							ShieldCheck,
							"03",
							"Khi đồ có bất thường",
							"Giữ tem niêm phong và ảnh hiện trạng. Gửi mã đơn để CSKH đối chiếu hồ sơ giao nhận.",
							"/ho-tro"
						]
					].map(([Icon, n, t, d, href]) => /* @__PURE__ */ jsxs("a", {
						className: "bx-guide-card",
						href,
						"data-bx-reveal": true,
						children: [
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Icon, { size: 28 }), /* @__PURE__ */ jsx("span", { children: n })] }),
							/* @__PURE__ */ jsx("h3", { children: t }),
							/* @__PURE__ */ jsx("p", { children: d }),
							/* @__PURE__ */ jsxs("span", {
								className: "bx-guide-link",
								children: ["Đọc hướng dẫn", /* @__PURE__ */ jsx(ArrowUpRight, { size: 17 })]
							})
						]
					}, n))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "bx-area-strip",
					id: "khu-vuc",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "bx-area-icon",
							children: /* @__PURE__ */ jsx(MapPin, { size: 33 })
						}),
						/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("span", {
								className: "bx-label",
								children: "BẮT ĐẦU TẠI VINH, NGHỆ AN"
							}),
							/* @__PURE__ */ jsx("h3", { children: "Gần bạn hơn. Khảo sát kỹ hơn." }),
							/* @__PURE__ */ jsx("p", { children: "Địa chỉ, đường xe vào, cầu thang và lịch mong muốn giúp BOXANH chọn phương án phù hợp. Đơn ngoài khu vực cần xác nhận riêng." })
						] }),
						/* @__PURE__ */ jsxs("a", {
							href: "/dat-lich",
							className: "bx-inline-link",
							children: ["Gửi địa chỉ khảo sát", /* @__PURE__ */ jsx(ArrowRight, { size: 18 })]
						})
					]
				})
			]
		})
	});
}
function FAQ({ config: c }) {
	return /* @__PURE__ */ jsxs("section", {
		className: "bx-section bx-wrap bx-faq",
		id: "cau-hoi",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "bx-faq-intro",
			children: [
				/* @__PURE__ */ jsx(Kicker, { children: "THÔNG TIN CẦN RÕ" }),
				/* @__PURE__ */ jsxs("h2", { children: [
					"Cứ hỏi.",
					/* @__PURE__ */ jsx("br", {}),
					" ",
					/* @__PURE__ */ jsx("em", { children: "Cùng làm rõ." })
				] }),
				/* @__PURE__ */ jsx("p", { children: "Phạm vi, chi phí, hộp và giao nhận — những câu hỏi thường gặp trước khi đặt lịch." }),
				/* @__PURE__ */ jsxs("div", {
					className: "bx-faq-contact",
					children: [/* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(Phone, { size: 22 }) }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("small", { children: "TRAO ĐỔI VỚI BOXANH" }), /* @__PURE__ */ jsx("a", {
						href: "tel:" + c.phone,
						children: phoneText(c.phone)
					})] })]
				}),
				/* @__PURE__ */ jsxs("a", {
					href: "/ho-tro",
					className: "bx-inline-link",
					children: ["CSKH & tiếp nhận sự cố", /* @__PURE__ */ jsx(ArrowUpRight, { size: 18 })]
				})
			]
		}), /* @__PURE__ */ jsx(Accordion$1, {
			type: "single",
			collapsible: true,
			className: "bx-faq-list",
			children: faqItems.map(([q, a], i) => /* @__PURE__ */ jsxs(AccordionItem, {
				value: "faq-" + i,
				className: "bx-faq-item",
				children: [/* @__PURE__ */ jsx(AccordionTrigger, {
					className: "bx-faq-trigger",
					children: q
				}), /* @__PURE__ */ jsx(AccordionContent, {
					className: "bx-faq-content",
					children: a
				})]
			}, i))
		})]
	});
}
//#endregion
//#region src/portal-scenes-v10.jsx
function Action({ href, children, light = false }) {
	return /* @__PURE__ */ jsxs("a", {
		className: "v10-action " + (light ? "v10-action-light" : ""),
		href,
		children: [children, /* @__PURE__ */ jsx(ArrowUpRight, { size: 19 })]
	});
}
function Label({ children }) {
	return /* @__PURE__ */ jsx("p", {
		className: "v10-label",
		children
	});
}
function MovingScene({ c, onQuote }) {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "v10-moving",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "n7-wrap v10-moving-layout",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "v10-moving-copy",
					children: [
						/* @__PURE__ */ jsx(Label, { children: "BOXANH / CHUYỂN TRỌ TẠI VINH" }),
						/* @__PURE__ */ jsxs("h1", { children: [
							"Đồ đạc đến nơi.",
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("em", { children: "Bạn đến khởi đầu mới." })
						] }),
						/* @__PURE__ */ jsxs("p", { children: [
							"Giao hộp trước. Chuyển đồ đúng kế hoạch.",
							/* @__PURE__ */ jsx("br", {}),
							"Thu hồi hộp khi bạn đã sắp xếp xong."
						] }),
						/* @__PURE__ */ jsx(Action, {
							href: "/dat-lich?goi=full",
							light: true,
							children: "Lên kế hoạch chuyển trọ"
						}),
						/* @__PURE__ */ jsxs("a", {
							className: "v10-underlink",
							href: "/dich-vu#so-sanh",
							children: ["So sánh phạm vi các gói ", /* @__PURE__ */ jsx(ArrowRight, { size: 16 })]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "v10-dispatch",
					"aria-label": "Minh họa kế hoạch chuyển trọ",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "v10-dispatch-head",
							children: [
								/* @__PURE__ */ jsx(Truck, { size: 25 }),
								/* @__PURE__ */ jsx("span", { children: "HÀNH TRÌNH CỦA BẠN" }),
								/* @__PURE__ */ jsx("span", { children: "VINH" })
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "v10-address",
							children: [/* @__PURE__ */ jsx("b", { children: "A" }), /* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("small", { children: "NƠI BẮT ĐẦU" }),
								/* @__PURE__ */ jsx("strong", { children: "Phòng hiện tại" }),
								/* @__PURE__ */ jsx("span", { children: "Khảo sát · Giao hộp · Chuẩn bị" })
							] })]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "v10-journey-line",
							children: [/* @__PURE__ */ jsx("i", {}), /* @__PURE__ */ jsx("span", { children: "Thống nhất quãng đường & điều kiện bốc xếp" })]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "v10-address",
							children: [/* @__PURE__ */ jsx("b", { children: "B" }), /* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("small", { children: "KHỞI ĐẦU MỚI" }),
								/* @__PURE__ */ jsx("strong", { children: "Phòng mới của bạn" }),
								/* @__PURE__ */ jsx("span", { children: "Giao nhận · Kiểm đếm · Hẹn thu hộp" })
							] })]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "v10-dispatch-foot",
							children: [/* @__PURE__ */ jsx(Package, { size: 18 }), /* @__PURE__ */ jsx("span", { children: "Hộp dùng lại, theo từng lượt chuyển" })]
						}),
						/* @__PURE__ */ jsx("small", {
							className: "v10-demo-note",
							children: "Sơ đồ quy trình · Chưa xác nhận lịch vận chuyển"
						})
					]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "n7-wrap v10-moving-bottom",
				children: [
					/* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx(ClipboardCheck, { size: 18 }), " Khảo sát trước khi chốt"] }),
					/* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx(ShieldCheck, { size: 18 }), " Giao nhận có kiểm đếm"] }),
					/* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx(RotateCcw, { size: 18 }), " Thu hồi hộp theo lịch"] })
				]
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "n7-wrap v10-moving-story",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx(Label, { children: "MỘT PHÒNG TRỌ. NHIỀU VIỆC CẦN LO." }),
				/* @__PURE__ */ jsxs("h2", { children: [
					"Gói việc cần làm",
					/* @__PURE__ */ jsx("br", {}),
					"vào một kế hoạch."
				] }),
				/* @__PURE__ */ jsx("p", { children: "Chọn phần việc phù hợp với bạn. Đồ cồng kềnh, cầu thang và hỗ trợ đóng gói được tách rõ khi khảo sát." }),
				/* @__PURE__ */ jsx(Action, {
					href: "/huong-dan#checklist",
					children: "Danh sách chuẩn bị"
				})
			] }), /* @__PURE__ */ jsxs("figure", { children: [/* @__PURE__ */ jsx("img", {
				src: "/assets/moving.webp",
				alt: "Ảnh tham khảo chuẩn bị đồ chuyển nơi ở",
				width: "1200",
				height: "800",
				loading: "lazy"
			}), /* @__PURE__ */ jsx("figcaption", { children: "Chuẩn bị gọn trước ngày chuyển · Ảnh tham khảo" })] })]
		}),
		/* @__PURE__ */ jsx(QuickQuote, {
			config: c,
			onQuote
		}),
		/* @__PURE__ */ jsx(Journey, {}),
		/* @__PURE__ */ jsx(Confidence, {}),
		/* @__PURE__ */ jsxs("div", {
			className: "n7-wrap v10-crosslinks",
			children: [/* @__PURE__ */ jsxs("a", {
				href: "/don-phong",
				children: ["Cần dọn phòng cũ?", /* @__PURE__ */ jsx(ArrowRight, { size: 18 })]
			}), /* @__PURE__ */ jsxs("a", {
				href: "/ban-giao",
				children: ["Cần hỗ trợ bàn giao?", /* @__PURE__ */ jsx(ArrowRight, { size: 18 })]
			})]
		})
	] });
}
var zones = [
	{
		name: "Phòng ở",
		icon: Package,
		copy: "Sàn, bề mặt, góc phòng và nội thất trong phạm vi đã khảo sát.",
		tasks: [
			"Sàn & góc phòng",
			"Bề mặt & nội thất",
			"Thu gom theo thỏa thuận"
		]
	},
	{
		name: "Bếp & vệ sinh",
		icon: Sparkles,
		copy: "Thống nhất trước mức độ bám bẩn, thiết bị và vật liệu cần xử lý.",
		tasks: [
			"Bề mặt bếp",
			"Khu vệ sinh",
			"Vật liệu & chất tẩy phù hợp"
		]
	},
	{
		name: "Phòng mới",
		icon: KeyRound,
		copy: "Dọn trước khi đưa đồ vào, theo tình trạng và lịch bạn mong muốn.",
		tasks: [
			"Dọn trước khi chuyển đồ",
			"Kiểm tra lại hiện trạng",
			"Sẵn sàng cho ngày nhận phòng"
		]
	}
];
function CleaningScene() {
	const [active, setActive] = useState(0);
	const zone = zones[active], Icon = zone.icon;
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "v10-cleaning",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "v10-cleaning-photo",
				children: [/* @__PURE__ */ jsx("img", {
					src: "/assets/room-real.webp",
					alt: "Ảnh tham khảo căn phòng sáng và gọn gàng",
					width: "900",
					height: "1350"
				}), /* @__PURE__ */ jsx("span", { children: "KHÔNG GIAN CHO MỘT KHỞI ĐẦU MỚI" })]
			}), /* @__PURE__ */ jsxs("div", {
				className: "v10-cleaning-copy",
				children: [
					/* @__PURE__ */ jsx(Label, { children: "BOXANH / CHĂM SÓC KHÔNG GIAN SỐNG" }),
					/* @__PURE__ */ jsxs("h1", { children: [
						"Không gian sạch.",
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("em", { children: "Tâm trí nhẹ." })
					] }),
					/* @__PURE__ */ jsxs("p", { children: [
						"Dọn phòng cũ trước khi trả.",
						/* @__PURE__ */ jsx("br", {}),
						"Dọn phòng mới trước khi vào."
					] }),
					/* @__PURE__ */ jsxs("div", {
						className: "v10-cleaning-note",
						children: [/* @__PURE__ */ jsx(Sparkles, { size: 26 }), /* @__PURE__ */ jsxs("span", { children: [
							"Khảo sát hiện trạng",
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("strong", { children: "Chốt đúng hạng mục bạn cần" })
						] })]
					}),
					/* @__PURE__ */ jsx(Action, {
						href: "/dat-lich?goi=cleaning",
						children: "Đặt khảo sát dọn phòng"
					})
				]
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "n7-wrap v10-clean-scope",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "v10-clean-section-head",
				children: [/* @__PURE__ */ jsx(Label, { children: "BẤM CHỌN KHU VỰC BẠN MUỐN DỌN" }), /* @__PURE__ */ jsx("h2", { children: "Sạch đúng chỗ bạn cần." })]
			}), /* @__PURE__ */ jsxs("div", {
				className: "v10-clean-workspace",
				children: [/* @__PURE__ */ jsx("div", {
					className: "v10-clean-zone-list",
					role: "tablist",
					"aria-label": "Khu vực cần dọn",
					children: zones.map((z, i) => /* @__PURE__ */ jsxs("button", {
						id: "v10-clean-tab-" + i,
						type: "button",
						role: "tab",
						"aria-selected": active === i,
						"aria-controls": "v10-clean-panel",
						tabIndex: active === i ? 0 : -1,
						onClick: () => setActive(i),
						onKeyDown: (e) => {
							let next;
							if (["ArrowDown", "ArrowRight"].includes(e.key)) next = (i + 1) % 3;
							if (["ArrowUp", "ArrowLeft"].includes(e.key)) next = (i + 2) % 3;
							if (e.key === "Home") next = 0;
							if (e.key === "End") next = 2;
							if (next !== void 0) {
								e.preventDefault();
								setActive(next);
								document.getElementById("v10-clean-tab-" + next)?.focus();
							}
						},
						children: [
							/* @__PURE__ */ jsxs("span", { children: ["0", i + 1] }),
							/* @__PURE__ */ jsx("strong", { children: z.name }),
							/* @__PURE__ */ jsx(ArrowRight, { size: 20 })
						]
					}, z.name))
				}), /* @__PURE__ */ jsxs("div", {
					id: "v10-clean-panel",
					role: "tabpanel",
					"aria-labelledby": "v10-clean-tab-" + active,
					className: "v10-clean-panel",
					children: [
						/* @__PURE__ */ jsx(Icon, { size: 44 }),
						/* @__PURE__ */ jsx("h3", { children: zone.name }),
						/* @__PURE__ */ jsx("p", { children: zone.copy }),
						/* @__PURE__ */ jsx("div", { children: zone.tasks.map((t) => /* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx(Check, { size: 16 }), t] }, t)) }),
						/* @__PURE__ */ jsx("small", { children: "Hạng mục cụ thể, vật tư, thời gian và phí được xác nhận sau khảo sát." })
					]
				})]
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "v10-clean-process",
			children: /* @__PURE__ */ jsxs("div", {
				className: "n7-wrap",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx(Label, { children: "TỪ HIỆN TRẠNG ĐẾN HOÀN TẤT" }),
					/* @__PURE__ */ jsxs("h2", { children: [
						"Ba bước.",
						/* @__PURE__ */ jsx("br", {}),
						"Một phòng sạch."
					] }),
					/* @__PURE__ */ jsx("p", { children: "Nấm mốc, côn trùng, chất thải đặc biệt và sửa chữa cần được khảo sát, xác nhận riêng." })
				] }), /* @__PURE__ */ jsx("ol", { children: [
					["Gửi ảnh hiện trạng", "Địa chỉ, diện tích và ngày bạn muốn dọn."],
					["Thống nhất hạng mục", "BOXANH gửi phạm vi, vật tư và chi phí để bạn đồng ý."],
					["Dọn & kiểm tra", "Thực hiện theo phương án đã chốt, kiểm tra lại cùng khách."]
				].map(([t, d], i) => /* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsxs("b", { children: ["0", i + 1] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", { children: t }), /* @__PURE__ */ jsx("p", { children: d })] })] }, t)) })]
			})
		}),
		/* @__PURE__ */ jsxs("div", {
			className: "n7-wrap v10-clean-footer",
			children: [/* @__PURE__ */ jsxs("h2", { children: [
				"Để bạn nhẹ việc,",
				/* @__PURE__ */ jsx("br", {}),
				"phòng mới thêm dễ chịu."
			] }), /* @__PURE__ */ jsx(Action, {
				href: "/dat-lich?goi=cleaning",
				children: "Gửi yêu cầu dọn phòng"
			})]
		})
	] });
}
var inspection = [
	"Ảnh hiện trạng phòng",
	"Nội thất & vật dụng",
	"Chỉ số điện, nước",
	"Khoản cần đối soát",
	"Chìa khóa & lịch bàn giao"
];
function HandoverScene() {
	const [checked, setChecked] = useState([]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("section", {
		className: "v10-handover n7-wrap",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "v10-handover-caption",
				children: [/* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx(ClipboardCheck, { size: 20 }), " HỖ TRỢ BÀN GIAO PHÒNG"] }), /* @__PURE__ */ jsx("span", { children: "BOXANH / VINH, NGHỆ AN" })]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "v10-handover-title",
				children: [/* @__PURE__ */ jsxs("h1", { children: [
					"Khép lại chỗ cũ.",
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("em", { children: "Rõ ràng từng việc." })
				] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", { children: "Cùng kiểm tra phòng, đối chiếu vật dụng và ghi nhận bàn giao với chủ trọ." }), /* @__PURE__ */ jsx(Action, {
					href: "/dat-lich?goi=handover",
					children: "Hẹn khảo sát bàn giao"
				})] })]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "v10-inspection",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "v10-inspection-index",
					children: [
						/* @__PURE__ */ jsx(KeyRound, { size: 42 }),
						/* @__PURE__ */ jsxs("h2", { children: [
							"Trước khi",
							/* @__PURE__ */ jsx("br", {}),
							"trả chìa khóa."
						] }),
						/* @__PURE__ */ jsx("p", { children: "Đánh dấu các phần bạn đã chuẩn bị." }),
						/* @__PURE__ */ jsxs("span", {
							role: "status",
							children: [
								checked.length,
								" / ",
								inspection.length,
								" phần đã chuẩn bị"
							]
						}),
						/* @__PURE__ */ jsx("small", { children: "Danh sách cá nhân trên màn hình; chưa phải biên bản bàn giao." })
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "v10-inspection-list",
					children: inspection.map((item, i) => /* @__PURE__ */ jsxs("label", { children: [
						/* @__PURE__ */ jsxs("span", { children: ["0", i + 1] }),
						/* @__PURE__ */ jsx("strong", { children: item }),
						/* @__PURE__ */ jsx("input", {
							type: "checkbox",
							checked: checked.includes(i),
							onChange: () => setChecked(checked.includes(i) ? checked.filter((n) => n !== i) : [...checked, i])
						})
					] }, item))
				})]
			})
		]
	}), /* @__PURE__ */ jsxs("section", {
		className: "v10-handover-notes n7-wrap",
		children: [
			/* @__PURE__ */ jsxs("article", { children: [
				/* @__PURE__ */ jsx(Label, { children: "BẠN MANG THEO" }),
				/* @__PURE__ */ jsx("h2", { children: "Thông tin để đối chiếu." }),
				/* @__PURE__ */ jsxs("ul", { children: [
					/* @__PURE__ */ jsx("li", { children: "Hợp đồng hoặc thỏa thuận thuê phòng" }),
					/* @__PURE__ */ jsx("li", { children: "Danh sách đồ nhận khi vào ở" }),
					/* @__PURE__ */ jsx("li", { children: "Ảnh hiện trạng và trao đổi liên quan" }),
					/* @__PURE__ */ jsx("li", { children: "Thông tin điện, nước và lịch hẹn chủ trọ" })
				] })
			] }),
			/* @__PURE__ */ jsxs("article", { children: [
				/* @__PURE__ */ jsx(Label, { children: "BOXANH CÙNG BẠN" }),
				/* @__PURE__ */ jsx("h2", { children: "Kiểm tra và ghi nhận." }),
				/* @__PURE__ */ jsxs("ul", { children: [
					/* @__PURE__ */ jsx("li", { children: "Chụp hiện trạng trước bàn giao" }),
					/* @__PURE__ */ jsx("li", { children: "Đối chiếu nội thất, vật dụng và chỉ số" }),
					/* @__PURE__ */ jsx("li", { children: "Ghi rõ hạng mục cần xử lý thêm" }),
					/* @__PURE__ */ jsx("li", { children: "Xác nhận chìa khóa, ghi nhận bàn giao" })
				] })
			] }),
			/* @__PURE__ */ jsxs("aside", { children: [
				/* @__PURE__ */ jsx(ShieldCheck, { size: 30 }),
				/* @__PURE__ */ jsx("h3", { children: "Thống nhất rõ từ đầu." }),
				/* @__PURE__ */ jsx("p", { children: "Dọn vệ sinh và sửa chữa nhỏ có thể đặt riêng sau khảo sát. Tiền thuê, tiền cọc do bạn và chủ trọ đối soát; BOXANH không cam kết hoàn trả tiền cọc." }),
				/* @__PURE__ */ jsx(Action, {
					href: "/dat-lich?goi=handover",
					children: "Gửi hiện trạng phòng"
				})
			] })
		]
	})] });
}
var boxCycle = [
	["Nhận hộp", "Giao theo lịch, cùng kiểm đếm số lượng và tình trạng."],
	["Đóng & chuyển", "Ghi nhóm đồ, giữ đồ quý bên mình, tuân thủ tải trọng được xác nhận."],
	["Dỡ đồ", "Sắp xếp tại phòng mới và hẹn ngày thu hồi."],
	["Dùng tiếp", "Kiểm tra, vệ sinh và đưa hộp đạt yêu cầu vào lượt tiếp theo."]
];
function BoxesScene() {
	const [stage, setStage] = useState(0);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("section", {
			className: "v10-boxes",
			children: /* @__PURE__ */ jsxs("div", {
				className: "n7-wrap v10-box-layout",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx(Label, { children: "HỆ THỐNG HỘP TÁI SỬ DỤNG" }),
					/* @__PURE__ */ jsxs("h1", { children: [
						"Một chiếc hộp.",
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("em", { children: "Nhiều lần khởi đầu." })
					] }),
					/* @__PURE__ */ jsxs("p", { children: [
						"Đóng đồ có trật tự. Chuyển cùng một hệ thống hộp.",
						/* @__PURE__ */ jsx("br", {}),
						"Dùng xong, BOXANH thu hồi để phục vụ lượt tiếp theo."
					] }),
					/* @__PURE__ */ jsx(Action, {
						href: "/dat-lich?goi=boxes",
						children: "Nhận báo giá thuê hộp"
					}),
					/* @__PURE__ */ jsxs("a", {
						className: "v10-underlink",
						href: "/hop-minh-hoa",
						children: ["Xem thẻ hộp minh họa ", /* @__PURE__ */ jsx(ArrowUpRight, { size: 16 })]
					})
				] }), /* @__PURE__ */ jsxs("div", {
					className: "v10-box-object",
					children: [
						/* @__PURE__ */ jsx("span", { children: "BOXANH / CIRCULAR PACKAGING" }),
						/* @__PURE__ */ jsx("img", {
							src: "/assets/banner-moving.svg",
							alt: "Hình minh họa chuyển đồ bằng hệ thống hộp",
							width: "144",
							height: "104"
						}),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("b", { children: "DÙNG LẠI" }), /* @__PURE__ */ jsx("span", { children: "Nhận · Chuyển · Trả · Tiếp tục" })] }),
						/* @__PURE__ */ jsx("small", { children: "Hình minh họa quy trình" })
					]
				})]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "n7-wrap v10-box-cycle",
			children: [
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, { children: "BẤM ĐỂ XEM TỪNG GIAI ĐOẠN" }), /* @__PURE__ */ jsxs("h2", { children: [
					"Vòng đời của hộp.",
					/* @__PURE__ */ jsx("br", {}),
					"Không dừng ở một chuyến."
				] })] }),
				/* @__PURE__ */ jsx("div", {
					className: "v10-cycle-controls",
					"aria-label": "Vòng đời hộp",
					children: boxCycle.map(([name], i) => /* @__PURE__ */ jsxs("button", {
						type: "button",
						"aria-pressed": stage === i,
						onClick: () => setStage(i),
						children: [
							/* @__PURE__ */ jsxs("span", { children: ["0", i + 1] }),
							name,
							/* @__PURE__ */ jsx(ArrowRight, { size: 17 })
						]
					}, name))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "v10-cycle-info",
					"aria-live": "polite",
					children: [
						/* @__PURE__ */ jsx(Package, { size: 32 }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", { children: boxCycle[stage][0] }), /* @__PURE__ */ jsx("p", { children: boxCycle[stage][1] })] }),
						/* @__PURE__ */ jsxs("strong", { children: [
							"0",
							stage + 1,
							/* @__PURE__ */ jsx("small", { children: "/ 04" })
						] })
					]
				})
			]
		}),
		/* @__PURE__ */ jsx(Boxes, {}),
		/* @__PURE__ */ jsxs("div", {
			className: "n7-wrap v10-crosslinks",
			children: [/* @__PURE__ */ jsxs("a", {
				href: "/dich-vu#hop",
				children: ["Tiêu chí, cách đóng & phí thuê", /* @__PURE__ */ jsx(ArrowRight, { size: 18 })]
			}), /* @__PURE__ */ jsxs("a", {
				href: "/hop-minh-hoa",
				children: ["Mã hộp & tem niêm phong dự kiến", /* @__PURE__ */ jsx(ArrowRight, { size: 18 })]
			})]
		})
	] });
}
var paths = [
	{
		title: "Thu mua",
		name: "buyback",
		intro: "Bạn nhường đồ. Nhận lại một phần giá trị.",
		copy: "Đồ được kiểm tra, thống nhất giá và tiếp nhận trước khi ghi nhận tiền thu mua hoặc giảm phí chuyến chuyển.",
		steps: [
			"Gửi ảnh & tình trạng",
			"Kiểm tra, thống nhất giá",
			"Tiếp nhận & đối soát"
		]
	},
	{
		title: "Ký gửi",
		name: "consign",
		intro: "Tìm người dùng mới cùng BOXANH.",
		copy: "Thống nhất giá bán, phí ký gửi, thời hạn và cách thanh toán. Khách nhận tiền sau khi món đồ đã bán và được đối soát.",
		steps: [
			"Chốt điều kiện ký gửi",
			"Tiếp nhận & đăng bán",
			"Bán xong, đối soát"
		]
	},
	{
		title: "Phân loại",
		name: "recycle",
		intro: "Đồ hỏng cũng cần một đầu ra phù hợp.",
		copy: "Phân loại theo vật liệu và tình trạng, xác nhận đối tác hoặc điểm thu gom phù hợp. BOXANH không tự nhận là cơ sở tái chế.",
		steps: [
			"Ghi nhận nhóm đồ",
			"Xác nhận đầu ra phù hợp",
			"Thu gom theo thỏa thuận"
		]
	}
];
function GreenScene() {
	const [mode, setMode] = useState(0);
	const item = paths[mode];
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "v10-green n7-wrap",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "v10-green-title",
					children: [
						/* @__PURE__ */ jsx(Label, { children: "GIẢI PHÓNG ĐỒ THỪA" }),
						/* @__PURE__ */ jsxs("h1", { children: [
							"Bớt một món đồ.",
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("em", { children: "Thêm một vòng đời." })
						] }),
						/* @__PURE__ */ jsxs("p", { children: [
							"Giữ thứ cần mang đi.",
							/* @__PURE__ */ jsx("br", {}),
							"Trao lại thứ còn giá trị."
						] })
					]
				}),
				/* @__PURE__ */ jsxs("figure", { children: [/* @__PURE__ */ jsx("img", {
					src: "/assets/books.jpg",
					width: "400",
					height: "300",
					alt: "Sách minh họa việc trao lại đồ còn giá trị"
				}), /* @__PURE__ */ jsxs("figcaption", { children: [/* @__PURE__ */ jsx(Recycle, { size: 22 }), " CÒN DÙNG ĐƯỢC, CÒN MỘT HÀNH TRÌNH"] })] }),
				/* @__PURE__ */ jsxs("div", {
					className: "v10-green-bottom",
					children: [
						/* @__PURE__ */ jsx("span", { children: "Đồ của bạn" }),
						/* @__PURE__ */ jsx(ArrowRight, { size: 24 }),
						/* @__PURE__ */ jsx("span", { children: "Giá trị mới" }),
						/* @__PURE__ */ jsx(ArrowRight, { size: 24 }),
						/* @__PURE__ */ jsx("span", { children: "Người dùng tiếp theo" })
					]
				})
			]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "v10-green-paths",
			children: /* @__PURE__ */ jsxs("div", {
				className: "n7-wrap",
				children: [/* @__PURE__ */ jsx("div", {
					className: "v10-green-tabs",
					role: "tablist",
					"aria-label": "Phương án cho đồ thừa",
					children: paths.map((p, i) => /* @__PURE__ */ jsxs("button", {
						id: "v10-green-tab-" + i,
						role: "tab",
						"aria-selected": mode === i,
						"aria-controls": "v10-green-panel",
						tabIndex: mode === i ? 0 : -1,
						type: "button",
						onClick: () => setMode(i),
						onKeyDown: (e) => {
							let next;
							if (e.key === "ArrowRight") next = (i + 1) % 3;
							if (e.key === "ArrowLeft") next = (i + 2) % 3;
							if (e.key === "Home") next = 0;
							if (e.key === "End") next = 2;
							if (next !== void 0) {
								e.preventDefault();
								setMode(next);
								document.getElementById("v10-green-tab-" + next)?.focus();
							}
						},
						children: [
							/* @__PURE__ */ jsxs("span", { children: ["0", i + 1] }),
							p.title,
							/* @__PURE__ */ jsx(ArrowUpRight, { size: 20 })
						]
					}, p.name))
				}), /* @__PURE__ */ jsxs("div", {
					className: "v10-green-panel",
					id: "v10-green-panel",
					role: "tabpanel",
					"aria-labelledby": "v10-green-tab-" + mode,
					children: [/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsxs(Label, { children: ["PHƯƠNG ÁN / ", item.title.toUpperCase()] }),
						/* @__PURE__ */ jsx("h2", { children: item.intro }),
						/* @__PURE__ */ jsx("p", { children: item.copy }),
						/* @__PURE__ */ jsxs(Action, {
							href: "/gui-do?phuong-an=" + item.name,
							children: ["Gửi đồ để ", item.title.toLowerCase()]
						})
					] }), /* @__PURE__ */ jsx("ol", { children: item.steps.map((s, i) => /* @__PURE__ */ jsxs("li", { children: [
						/* @__PURE__ */ jsxs("b", { children: ["0", i + 1] }),
						/* @__PURE__ */ jsx("span", { children: s }),
						/* @__PURE__ */ jsx(Check, { size: 18 })
					] }, s)) })]
				})]
			})
		}),
		/* @__PURE__ */ jsx(Surplus, {}),
		/* @__PURE__ */ jsxs("div", {
			className: "n7-wrap v10-green-market",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx(Label, { children: "VÒNG ĐỜI MỚI" }),
				/* @__PURE__ */ jsxs("h2", { children: [
					"Biết đâu, bạn tìm thấy",
					/* @__PURE__ */ jsx("br", {}),
					"đồ mình đang cần."
				] }),
				/* @__PURE__ */ jsx("p", { children: "Chỉ món đã tiếp nhận, có ảnh thật và được công khai mới nhận yêu cầu quan tâm." })
			] }), /* @__PURE__ */ jsx(Action, {
				href: "/do-cu",
				children: "Khám phá danh mục đồ cũ"
			})]
		})
	] });
}
function GuideScene({ c, video, checklist }) {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "v10-guide-intro n7-wrap",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx(Label, { children: "BOXANH / TRUNG TÂM HƯỚNG DẪN" }),
				/* @__PURE__ */ jsxs("h1", { children: [
					"Chuyển trọ lần đầu?",
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("em", { children: "Bắt đầu từ đây." })
				] }),
				/* @__PURE__ */ jsx("p", { children: "Một video ngắn, danh sách chuẩn bị và câu trả lời cho những điều bạn đang băn khoăn." })
			] }), /* @__PURE__ */ jsx(BookOpen, {
				size: 94,
				strokeWidth: 1
			})]
		}),
		/* @__PURE__ */ jsxs("div", {
			className: "v10-guide-layout n7-wrap",
			children: [/* @__PURE__ */ jsxs("nav", {
				className: "v10-guide-nav",
				"aria-label": "Mục lục hướng dẫn",
				children: [
					/* @__PURE__ */ jsx("span", { children: "TRONG TRANG NÀY" }),
					/* @__PURE__ */ jsxs("a", {
						href: "#video-huong-dan",
						children: [
							/* @__PURE__ */ jsx(Play, { size: 17 }),
							" Xem cách dùng website",
							/* @__PURE__ */ jsx(ArrowRight, { size: 16 })
						]
					}),
					/* @__PURE__ */ jsxs("a", {
						href: "#checklist",
						children: [
							/* @__PURE__ */ jsx(ClipboardCheck, { size: 17 }),
							" Chuẩn bị ngày chuyển",
							/* @__PURE__ */ jsx(ArrowRight, { size: 16 })
						]
					}),
					/* @__PURE__ */ jsxs("a", {
						href: "#cau-hoi",
						children: [
							/* @__PURE__ */ jsx(BookOpen, { size: 17 }),
							" Câu hỏi thường gặp",
							/* @__PURE__ */ jsx(ArrowRight, { size: 16 })
						]
					}),
					/* @__PURE__ */ jsx(Action, {
						href: "/dat-lich",
						children: "Bắt đầu yêu cầu"
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "v10-guide-content",
				children: [video, checklist]
			})]
		}),
		/* @__PURE__ */ jsx(Guides, {}),
		/* @__PURE__ */ jsx(FAQ, { config: c })
	] });
}
function QuoteScene({ c, onQuote }) {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "v10-quote-intro n7-wrap",
			id: "chi-phi",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx(Label, { children: "LẬP KẾ HOẠCH CHI PHÍ" }),
				/* @__PURE__ */ jsxs("h1", { children: [
					"Ước tính trước.",
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("em", { children: "Thống nhất sau khảo sát." })
				] }),
				/* @__PURE__ */ jsxs("p", { children: [
					"Chọn dịch vụ, số hộp và quãng đường. Giá ",
					c.priceMode === "reference" ? "đang là mức dự kiến" : "theo cấu hình hiện tại",
					"; BOXANH xác nhận phạm vi và tổng phí trước khi nhận lịch."
				] })
			] }), /* @__PURE__ */ jsxs("aside", { children: [
				/* @__PURE__ */ jsx(ClipboardCheck, { size: 24 }),
				/* @__PURE__ */ jsxs("strong", { children: [
					"Biết chi phí.",
					/* @__PURE__ */ jsx("br", {}),
					"Chủ động quyết định."
				] }),
				/* @__PURE__ */ jsx("span", { children: "Gửi yêu cầu chưa xác nhận lịch và chưa yêu cầu thanh toán." })
			] })]
		}),
		/* @__PURE__ */ jsx(QuickQuote, {
			config: c,
			onQuote
		}),
		/* @__PURE__ */ jsx(Prices, { config: c }),
		/* @__PURE__ */ jsxs("div", {
			className: "n7-wrap v10-crosslinks",
			children: [/* @__PURE__ */ jsxs("a", {
				href: "/dich-vu#so-sanh",
				children: ["Bảng so sánh đầy đủ", /* @__PURE__ */ jsx(ArrowRight, { size: 18 })]
			}), /* @__PURE__ */ jsxs("a", {
				href: "/dich-vu#phu-phi",
				children: ["Phụ phí & điều kiện", /* @__PURE__ */ jsx(ArrowRight, { size: 18 })]
			})]
		})
	] });
}
//#endregion
//#region public/assistant-knowledge.js
var guideTopics = [
	{
		id: "overview",
		title: "BOXANH là gì?",
		href: "/ve-boxanh",
		tags: "boxanh vinh nghệ an khu vực sinh viên liên hệ",
		text: "BOXANH hỗ trợ chuyển trọ, dọn phòng và bàn giao phòng tại Vinh, Nghệ An. Một đầu mối tiếp nhận nhu cầu, khảo sát, thống nhất phạm vi và chi phí. Hộp được thu hồi để dùng lại; đồ thừa có ba phương án riêng. Dự án đang thử nghiệm, lịch và địa chỉ phục vụ phải được xác nhận riêng. Chưa công bố đội xe, số đơn hoàn tất hoặc đánh giá khách hàng đã kiểm chứng."
	},
	{
		id: "services",
		title: "Chọn dịch vụ phù hợp",
		href: "/dich-vu#so-sanh",
		tags: "dịch vụ gọn nhẹ trọn gói thuê hộp so sánh đóng gói",
		text: "Gọn nhẹ: khách tự đóng đồ, BOXANH hỗ trợ vận chuyển theo phạm vi thống nhất. Trọn gói: có hỗ trợ đóng gói, vận chuyển và tiếp nhận nhu cầu xử lý đồ thừa. Chỉ thuê hộp: dành cho người đã có phương tiện, gồm hộp và việc giao/thu hồi theo khảo sát. Dọn phòng và bàn giao phòng được báo giá sau khảo sát. Bảng so sánh có lựa chọn chỉ xem điểm khác biệt. Chọn gói sẽ mở biểu mẫu với dịch vụ đã chọn."
	},
	{
		id: "moving",
		title: "Chuyển trọ từ A đến B",
		href: "/chuyen-tro",
		tags: "chuyển trọ chuyển đồ vận chuyển quy trình khảo sát",
		text: "Bốn phần trên trang chuyển trọ: Chốt phương án, Sắp xếp đồ, Chuyển đến nơi và Khép hành trình. Có lựa chọn từng giai đoạn, công cụ ước tính, thông tin ba gói và lối vào danh sách chuẩn bị. Quy trình dự kiến: gửi nhu cầu → khảo sát → báo giá → xác nhận lịch → giao hộp → đóng đồ → chuyển đồ → kiểm đếm → thu hồi hộp. Nhân sự cập nhật trạng thái thực tế; gửi yêu cầu chưa xác nhận đội vận chuyển."
	},
	{
		id: "cleaning",
		title: "Dọn phòng cũ hoặc mới",
		href: "/don-phong",
		tags: "dọn phòng vệ sinh bếp nhà vệ sinh diện tích",
		text: "Trang có ba lựa chọn Phòng ở, Bếp và vệ sinh, Phòng mới, mỗi lựa chọn hiển thị phạm vi công việc. Quy trình: gửi hiện trạng → thống nhất phạm vi → kiểm tra sau thực hiện. Biểu mẫu khảo sát nhận diện tích 1–500 m², địa chỉ, ngày, khung giờ, mô tả và tối đa bốn ảnh. Không có giá cố định cho mọi phòng. Sửa chữa, chờ, ngoài giờ và thêm người phải được khảo sát, thỏa thuận riêng."
	},
	{
		id: "handover",
		title: "Chuẩn bị bàn giao phòng",
		href: "/ban-giao",
		tags: "bàn giao trả phòng chìa khóa điện nước tiền cọc",
		text: "Danh sách năm mục tương tác: ảnh hiện trạng, nội thất/vật dụng, chỉ số điện nước, khoản cần đối soát, chìa khóa và lịch hẹn. Bộ đếm phản ánh việc đánh dấu; danh sách này chỉ ở phiên trên màn hình, chưa tạo biên bản điện tử. Gửi khảo sát bàn giao qua biểu mẫu riêng. Tiền thuê/cọc và thỏa thuận do khách với chủ trọ đối soát; BOXANH hỗ trợ ghi nhận hiện trạng, kiểm tra và thống nhất việc cần làm."
	},
	{
		id: "boxes",
		title: "Hộp tái sử dụng",
		href: "/hop-tai-su-dung",
		tags: "hộp thùng nhựa carton vệ sinh thu hồi thuê gia hạn vòng đời",
		text: "Trang có bốn giai đoạn và sáu trạng thái vòng đời để bấm đọc: sẵn sàng, đã giao, đang dùng, thu hồi, vệ sinh, dùng tiếp. Dự kiến giao hộp trước ngày chuyển 1–2 ngày; hẹn thu hồi sau lấy đồ ra, kiểm đếm và vệ sinh. Thời gian thuê và gia hạn dùng cấu hình hiện tại. Giữ hộp sạch, khô; kiểm đếm và thống nhất tải trọng. QR từng hộp và lịch sử quét chưa triển khai thật."
	},
	{
		id: "surplus",
		title: "Đồ không mang theo",
		href: "/song-xanh",
		tags: "đồ thừa đồ cũ bán thu mua ký gửi phân loại tái chế hỏng",
		text: "Ba phương án có nội dung và nút gửi đồ riêng. Thu mua: thẩm định → đồng ý giá → tiếp nhận thực tế; phần được phân bổ hợp lệ mới trừ vào phí đơn liên kết. Ký gửi: thanh toán sau khi bán được, không trừ trước phí chuyển và không bảo đảm bán được. Phân loại/thu gom: chỉ nhận khi xác nhận đầu ra phù hợp, không cam kết mọi đồ hỏng được tái chế. Pin, hóa chất, rác nguy hại và vật sắc nhọn cần kênh chuyên biệt."
	},
	{
		id: "quote",
		title: "Ước tính chi phí",
		href: "/uoc-tinh",
		tags: "giá báo giá phí bao nhiêu chi phí km tầng cầu thang cồng kềnh",
		text: "Công cụ có Chuyển trọ, Dọn phòng, Bàn giao. Chọn Gọn nhẹ/Trọn gói/Chỉ thuê hộp; nhập 1–60 hộp và 1–80 km. Giá thay đổi theo cấu hình hiện hành. Gói chuyển bao gồm 10 hộp và 5 km đầu; phụ phí có hộp thêm, quãng đường thêm, tầng không có thang máy, đồ cồng kềnh và hỗ trợ đóng gói cho Gọn nhẹ. Dọn/bàn giao cần khảo sát. Ước tính chưa tạo đơn, chưa giữ lịch, chưa thanh toán; nút Nhận báo giá chuyển lựa chọn sang biểu mẫu."
	},
	{
		id: "fees",
		title: "Phụ phí và điều kiện",
		href: "/dich-vu#phu-phi",
		tags: "phụ phí giá tầng thang máy đồ lớn km chờ ngoài giờ",
		text: "Bảng phụ phí và ví dụ giá dùng cấu hình hiện tại. Phí cầu thang tính tổng tầng nơi đi/nơi đến không có thang máy; tầng trệt là 0. Phí cồng kềnh tính theo món. Chờ, thêm nhân sự, tháo lắp, ngoài giờ và điều kiện tiếp cận đặc biệt cần khảo sát riêng. Mọi khoản bổ sung phải thống nhất trước thực hiện. Hỏng/mất hộp, tiền cọc, gia hạn và tải trọng phải xác nhận trước sử dụng."
	},
	{
		id: "booking",
		title: "Đặt lịch trong bốn bước",
		href: "/dat-lich",
		tags: "đặt lịch đặt dịch vụ đặt xe đăng ký hẹn đặt hộp ngày giờ",
		text: "Chuyển đồ/thuê hộp có bốn bước: (1) chọn gói, 1–60 hộp, 0–30 đồ cồng kềnh và đóng gói; (2) địa chỉ, ngày không quá khứ và không quá 12 tháng, quãng đường, tầng 0–15 và thang máy từng nơi; (3) phương án đồ thừa, mô tả và ảnh; (4) liên hệ, ghi chú, xem lại và đồng ý xử lý dữ liệu rồi Gửi yêu cầu báo giá. Có Tiếp tục và Quay lại, kiểm tra lỗi từng bước, bảng giá dự kiến cập nhật. AI chỉ chuẩn bị bản nháp; khách phải xác nhận trên biểu mẫu."
	},
	{
		id: "survey",
		title: "Đặt khảo sát dọn/bàn giao",
		href: "/dat-lich?goi=cleaning",
		tags: "khảo sát dọn vệ sinh bàn giao diện tích yêu cầu phòng",
		text: "Dọn phòng và Bàn giao sử dụng một biểu mẫu khảo sát thay cho bốn bước chuyển đồ. Nhập địa chỉ, diện tích 1–500 m², ngày, khung giờ, họ tên, điện thoại, mô tả bắt buộc và ảnh nếu cần. Nhận mã BX khi gửi hợp lệ; không giữ hộp trong kho. Ba khung giờ mong muốn: sáng 08:00–12:00, chiều 13:00–17:00, tối 17:00–20:00. Lịch và giá thực hiện chỉ được chốt sau nhân sự liên hệ."
	},
	{
		id: "photos",
		title: "Ảnh và thông tin biểu mẫu",
		href: "/dat-lich",
		tags: "ảnh tải ảnh xóa ảnh jpg png webp dung lượng điện thoại dữ liệu riêng tư",
		text: "Các biểu mẫu khảo sát, đồ thừa và sự cố nhận tối đa bốn ảnh JPG, PNG hoặc WebP, mỗi ảnh tối đa 2 MB. Có xem trước và bỏ ảnh trước khi gửi. Ảnh khảo sát/sự cố là ảnh riêng, chỉ nhân sự có quyền được xem. Khi gửi lỗi kết nối, biểu mẫu giữ thông tin để thử lại. Điện thoại Việt Nam được kiểm tra; cần đồng ý xử lý dữ liệu. Bản nháp giữ trong phiên, không cam kết phục hồi sau đóng/tải lại trình duyệt."
	},
	{
		id: "goods",
		title: "Gửi đồ để thẩm định",
		href: "/gui-do",
		tags: "gửi đồ hồ sơ định giá thu mua ký gửi ảnh tình trạng liên kết",
		text: "Chọn Thu mua/Ký gửi/Phân loại và thu gom, nhóm Nội thất/Đồ điện/Sách/Quần áo/Đồ khác, tình trạng và mô tả tối đa 2.000 ký tự. Có thể liên kết mã BX cùng số điện thoại; tối đa bốn ảnh và đồng ý liên hệ. Gửi hợp lệ nhận mã DG, sao chép và tra cứu được. Đồ đánh dấu hỏng không đi vào thu mua/ký gửi. Thu mua mới giảm phí khi đã tiếp nhận và phân bổ hợp lệ; thẩm định cần nhân sự, không tự định giá từ ảnh."
	},
	{
		id: "market",
		title: "Xem và quan tâm đồ cũ",
		href: "/do-cu",
		tags: "mua đồ cửa hàng sách quạt bàn ghế tìm lọc đồ cũ",
		text: "Sáu bộ lọc nhóm và tìm theo tên/mô tả. Thẻ có ảnh, tên, giá, tình trạng, nút xem. Khi chưa có hàng thật, chỉ là bộ sưu tập ý tưởng có nhãn tham khảo, chưa mở bán. Với hàng thật khả dụng, cửa sổ chi tiết hiện ảnh, mô tả, lỗi, điều kiện giao nhận; nhập họ tên/điện thoại và đồng ý để đăng ký quan tâm nhận mã MH. Có đóng, Escape. Quan tâm chưa giữ hàng, chưa thanh toán; nhân sự liên hệ xác nhận."
	},
	{
		id: "tracking",
		title: "Tra cứu bốn loại hồ sơ",
		href: "/tra-cuu",
		tags: "tra cứu tiến độ mã đơn bx dg mh sc trạng thái theo dõi",
		text: "Nhập đúng mã và đúng số điện thoại đã đăng ký rồi Xem tiến độ. BX: loại dịch vụ, ngày, giá dự kiến/chốt, giảm phí hợp lệ và dòng thời gian. DG: phương án, tình trạng, nhóm đồ, định giá và tiền đã ghi nhận. MH: món quan tâm và trạng thái. SC: sự cố và phản hồi CSKH. Không hiện ảnh riêng, địa chỉ đầy đủ hoặc ghi chú nội bộ. Không phải GPS; trạng thái cần vận hành cập nhật. Gửi thành công có sao chép mã và nút tra cứu điền trước mã."
	},
	{
		id: "support",
		title: "CSKH và báo sự cố",
		href: "/ho-tro",
		tags: "hỗ trợ sự cố mất đồ hỏng đồ tem niêm phong bồi thường bảo hiểm",
		text: "Nhập mã BX và điện thoại của đơn, chọn Không tìm thấy đồ/Tem niêm phong bất thường/Đồ bị hư hỏng/Vấn đề hộp/Vấn đề khác. Mã hộp và tem nếu có, mô tả 10–2.000 ký tự, tối đa bốn ảnh, đồng ý xử lý dữ liệu. Nhận mã SC để sao chép/tra cứu. Giữ hộp, tem, ảnh và bằng chứng; nhân sự đối chiếu và phản hồi. Website không tự kết luận trách nhiệm hoặc bồi thường; chưa công bố gói bảo hiểm/mức bồi thường cố định."
	},
	{
		id: "guide",
		title: "Video và cách dùng website",
		href: "/huong-dan#video-huong-dan",
		tags: "video hướng dẫn chức năng cách dùng website xem phim phụ đề",
		text: "Trung tâm hướng dẫn có mục lục bấm đến video, danh sách chuẩn bị, FAQ và bắt đầu yêu cầu. Video v10 khoảng 2 phút 12 giây, 13 chương, thuyết minh và phụ đề tiếng Việt, các màn hình website thật. Phát/tạm dừng, tua, âm lượng, toàn màn hình tùy trình duyệt; tải MP4. Không tự bật tiếng. Trang chủ có video và lối vào trung tâm hướng dẫn."
	},
	{
		id: "preparation",
		title: "Chuẩn bị ngày chuyển",
		href: "/huong-dan#checklist",
		tags: "chuẩn bị checklist đánh dấu sách đóng đồ lưu danh sách",
		text: "Sáu việc: chốt ngày/báo chủ trọ; phân đồ; giữ giấy tờ/đồ quý; chụp hiện trạng; ghi nhóm/kiểm đếm hộp; chuẩn bị lối đi/thang máy/đỗ xe. Đánh dấu cập nhật bộ đếm và lưu trên thiết bị. Trang Dịch vụ có danh sách riêng với Bắt đầu lại; hai danh sách không đồng bộ với nhau hay giữa thiết bị. Có ba thẻ đọc cách đóng hộp, phụ phí, xử lý bất thường và bảy FAQ mở/đóng."
	},
	{
		id: "policy",
		title: "Chính sách và quyền riêng tư",
		href: "/chinh-sach",
		tags: "chính sách quy định quyền riêng tư thay đổi hủy dữ liệu",
		text: "Chính sách hiện là nguyên tắc vận hành dự kiến, cần hoàn thiện trước kinh doanh chính thức. Gồm tiếp nhận/xác nhận, báo giá/thanh toán, hộp/giao nhận, thu mua/ký gửi, thu gom, thay đổi/hủy, sự cố, quyền riêng tư và ảnh tham khảo. Chưa có tự hủy/sửa lịch sau gửi hoặc tải/xóa toàn bộ hồ sơ bởi khách; liên hệ BOXANH để xử lý. Trò chuyện AI cần đồng ý theo nơi xử lý được ghi trên giao diện: AI chạy trên máy chủ BOXANH hoặc OpenAI. Không gửi mật khẩu, OTP hay thông tin thanh toán."
	},
	{
		id: "qr",
		title: "Thẻ hộp minh họa",
		href: "/hop-minh-hoa",
		tags: "qr mã hộp tem quét thẻ minh họa",
		text: "Thẻ hiện mã hộp/đơn/ngày/số hộp/trạng thái mẫu với nhãn minh họa. Bốn bước kiểm tra: đối chiếu mã, kiểm tra tem, chụp bất thường và giữ hộp, lấy đồ rồi giữ hộp để thu hồi. Có nút báo vấn đề dẫn sang hỗ trợ. Chưa nối hộp hoặc lịch sử quét thật, chưa quét camera, chưa định vị. Không công khai đồ trong hộp hoặc thông tin liên hệ khách."
	},
	{
		id: "navigation",
		title: "Di chuyển giữa các trang",
		href: "/",
		tags: "trang chủ menu quay lại điện thoại giao diện nút đường dẫn",
		text: "Logo về trang chủ; điều hướng có dịch vụ, đồ thừa, hướng dẫn, tra cứu, hỗ trợ và nhận báo giá. Menu dịch vụ có danh sách trang; menu điện thoại có nút mở/đóng. Trang con có Quay lại theo lịch sử và Trang chủ. Các thẻ có mũi tên và hiệu ứng để biết có thể bấm. Bố cục thích ứng điện thoại; thanh thao tác nhanh có gọi và nhận báo giá. Gọi điện mở ứng dụng gọi, chưa có chat Zalo tích hợp."
	},
	{
		id: "mascot",
		title: "Nhân vật và robot Bơ",
		href: "/",
		tags: "robot bơ nhân vật chuyển động lời chào âm thanh ai trò chuyện",
		text: "Nhân vật vận chuyển trên trang chủ là hình minh họa thương hiệu, tự chuyển động nhẹ; có tạm dừng và nghe/dừng lời chào. Âm thanh không tự phát, dừng nguồn khác để tránh chồng tiếng. Robot Bơ màu tím/cam là lối mở phòng trò chuyện riêng /tro-ly-ai. Chuyển động tôn trọng lựa chọn giảm chuyển động. AI tạo câu trả lời chỉ hoạt động khi máy chủ đã kết nối mô hình ngôn ngữ; cẩm nang vẫn dùng được khi AI chưa bật."
	},
	{
		id: "operations",
		title: "Nhân sự tiếp nhận và vận hành",
		href: "/ho-tro",
		tags: "quản trị vận hành kho đối tác trạng thái csv nhân viên",
		text: "Nhân sự có cổng quản trị riêng để xử lý đơn/báo giá/trạng thái, giao/thu hồi và số lượng hộp, thẩm định đồ/giảm phí, danh mục hàng, khách quan tâm, sự cố, cấu hình giá/liên hệ, nhật ký và xuất đơn CSV. Nội dung QR/đối tác là kế hoạch hướng dẫn, chưa quản lý hoặc quét thật. Khách không truy cập quản trị qua GitHub Pages. AI không đọc hồ sơ khách khác, không sửa kho, không quyết định bồi thường và không tự xác nhận lịch."
	},
	{
		id: "availability",
		title: "Giới hạn và liên hệ nhân sự",
		href: "/ho-tro",
		tags: "online lỗi kết nối thanh toán gps chatbot không hoạt động liên hệ",
		text: "GitHub Pages phục vụ giao diện; đặt yêu cầu, tra cứu, danh mục thật và AI cần máy chủ dữ liệu đang chạy. Chưa có thanh toán trực tuyến, giỏ hàng, SMS/email/Zalo tự động, GPS, tài khoản khách hoặc lịch trống theo thời gian thực. Khi mất kết nối, thử lại hoặc gọi BOXANH; không coi lỗi là đã nhận đơn. AI chưa bật sẽ được ghi rõ; trả lời từ cẩm nang không phải câu trả lời do mô hình AI tạo."
	}
];
var topicById = (id) => guideTopics.find((t) => t.id === id);
var serviceNames = {
	small: "Gọn nhẹ",
	full: "Trọn gói",
	boxes: "Chỉ thuê hộp",
	cleaning: "Dọn phòng",
	handover: "Bàn giao phòng"
};
var moneyVND = (n) => new Intl.NumberFormat("vi-VN", {
	style: "currency",
	currency: "VND",
	maximumFractionDigits: 0
}).format(n || 0);
function normalize(s) {
	return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/đ/g, "d");
}
function lookupGuide(query) {
	const q = normalize(query), tokens = q.split(/[^a-z0-9]+/).filter((w) => w.length > 2 && ![
		"minh",
		"ban",
		"toi",
		"muon",
		"giup",
		"nao",
		"duoc",
		"nhung",
		"nhu",
		"the",
		"voi",
		"nay",
		"khong",
		"cho",
		"mot",
		"cac",
		"ngay",
		"co",
		"phi",
		"cua"
	].includes(w));
	const intent = [
		["ky gui", "surplus"],
		["thu mua", "surplus"],
		["do hong", "surplus"],
		["do thua", "surplus"],
		["khong mang theo", "surplus"],
		["tra cuu", "tracking"],
		["dat lich", "booking"],
		["tai anh", "photos"],
		["bao gia", "quote"],
		["chi phi", "quote"],
		["gia bao nhieu", "quote"],
		["huong dan", "guide"],
		["mat do", "support"],
		["su co", "support"],
		["don phong", "cleaning"],
		["ve sinh phong", "cleaning"],
		["ban giao", "handover"],
		["tra phong", "handover"],
		["thue hop", "boxes"],
		["thue thung", "boxes"],
		["chuyen tro", "moving"],
		["chuyen do", "moving"],
		["gon nhe", "services"],
		["tron goi", "services"],
		["chon goi", "services"]
	].filter(([phrase]) => q.includes(phrase));
	const explicit = new Set(intent.map(([, id]) => id));
	return guideTopics.map((t) => {
		const title = normalize(t.title), tags = new Set(normalize(t.tags).split(/[^a-z0-9]+/)), body = normalize(t.text);
		return {
			topic: t,
			score: tokens.reduce((n, w) => n + (title.split(/[^a-z0-9]+/).includes(w) ? 5 : tags.has(w) ? 3 : body.split(/[^a-z0-9]+/).includes(w) ? 1 : 0), 0) + intent.filter(([, id]) => id === t.id).length * 30
		};
	}).filter((x) => x.score >= 5).sort((a, b) => b.score - a.score).slice(0, explicit.size > 1 ? Math.min(3, explicit.size) : 1).map((x) => x.topic);
}
function guideReply(query, c, history = []) {
	const q = normalize(query.trim()), links = (ids) => ids.map(topicById).filter(Boolean);
	if (/^(xin chao|chao|hello|hi|alo)[!. ]*$/.test(q)) return {
		text: "Chào bạn! Mình có thể giúp bạn chọn dịch vụ, xem cách tính chi phí và chuẩn bị yêu cầu tại " + c.area + ". Bạn đang cần chuyển trọ, dọn phòng, bàn giao hay xử lý đồ thừa?",
		links: links([
			"services",
			"booking",
			"guide"
		])
	};
	if (/(chuc nang|lam duoc gi|giup.*nhung gi|tat ca.*website)/.test(q)) return {
		text: "Bạn có thể bắt đầu từ những việc này:\n\n- Chọn và so sánh dịch vụ chuyển trọ.\n- Ước tính chi phí, xem phụ phí, chuẩn bị đặt lịch.\n- Đặt khảo sát dọn phòng hoặc bàn giao phòng.\n- Thuê hộp tái sử dụng.\n- Gửi đồ để thu mua, ký gửi hoặc phân loại.\n- Xem đồ cũ và đăng ký quan tâm khi có hàng thật.\n- Tra cứu yêu cầu và báo sự cố.\n- Xem video, danh sách chuẩn bị và chính sách.\n\nBạn muốn giải quyết việc nào trước? Mục “Khám phá mọi chức năng” có đầy đủ từng lối mở.",
		links: links([
			"services",
			"quote",
			"booking",
			"cleaning",
			"handover",
			"boxes",
			"goods",
			"market",
			"tracking",
			"support",
			"guide",
			"policy"
		])
	};
	const previous = [...history].reverse().find((m) => m.role === "assistant" && m.links?.length)?.links[0];
	let found = lookupGuide(query);
	if (previous && /(cai do|goi do|viec do|the thi|nhu vay|con gia|bao nhieu|co duoc khong|tiep theo)/.test(q) && !/(don phong|ban giao|chuyen tro|thue hop|ky gui|thu mua|tra cuu)/.test(q)) found = links([previous.id]);
	if (/(lan dau|tu dong|it do|di mot minh|ngan sach|tiet kiem)/.test(q) && !/(don phong|ban giao|thu mua|ky gui)/.test(q)) found = links(["services"]);
	if (found[0] && ["cleaning", "handover"].includes(found[0].id) && /(gia|chi phi|bao nhieu)/.test(q)) return {
		text: (found[0].id === "cleaning" ? "Dọn phòng" : "Bàn giao phòng") + " hiện chưa có giá cố định. BOXANH cần xem diện tích, hiện trạng và phạm vi cần hỗ trợ rồi mới thống nhất chi phí.\n\nBạn có thể chuẩn bị mô tả và ảnh phòng, rồi mở “Chuẩn bị đặt lịch” để tạo nhu cầu khảo sát. Giá được xác nhận sau trao đổi, chưa có khoản thanh toán ở bước này.",
		links: found
	};
	if (!found.length) return {
		text: "Mình chưa chắc bạn đang cần hỗ trợ việc nào. Bạn có thể nói cụ thể hơn, chẳng hạn “chuyển ít đồ, muốn tiết kiệm” hoặc “cần dọn phòng trước khi trả trọ”.\n\nHiện mình đang trả lời từ cẩm nang, chưa có AI hội thoại để xử lý mọi tình huống. Nếu cần trao đổi trực tiếp, đội BOXANH ở số " + c.phone + ".",
		links: links([
			"services",
			"booking",
			"support"
		])
	};
	const answers = {
		services: "Nếu bạn tự đóng đồ và chủ yếu cần chuyển đi, hãy xem Gọn nhẹ. Nếu muốn được hỗ trợ đóng gói cùng vận chuyển, hãy xem Trọn gói. Khi đã có xe, bạn có thể chỉ thuê hộp.\n\nGiá gói tham khảo hiện tại: Gọn nhẹ từ " + moneyVND(c.smallBase) + ", Trọn gói từ " + moneyVND(c.fullBase) + ". Phụ phí và giá cuối cùng cần khảo sát.\n\nBạn muốn tự đóng đồ hay cần đội BOXANH hỗ trợ?",
		moving: "Mình sẽ giúp bạn bắt đầu từ ba việc: chọn phạm vi hỗ trợ, ước tính theo đồ đạc/quãng đường, rồi gửi yêu cầu để BOXANH xác nhận. Hộp có thể được giao trước ngày chuyển 1–2 ngày và thu hồi sau khi bạn lấy đồ ra.\n\nBạn muốn tự đóng đồ hay cần hỗ trợ đóng gói?",
		cleaning: "Dọn phòng cần xem hiện trạng và phạm vi công việc trước khi báo giá; hiện chưa có một mức giá áp dụng cho mọi phòng. Bạn gửi địa chỉ, diện tích, ngày mong muốn, mô tả và ảnh nếu có qua biểu mẫu khảo sát.\n\nBạn cần dọn phòng cũ trước khi trả trọ hay phòng mới trước khi vào ở?",
		handover: "Trước khi bàn giao, nên kiểm tra ảnh hiện trạng, nội thất, chỉ số điện/nước, khoản cần đối soát và chìa khóa/lịch hẹn. BOXANH hỗ trợ ghi nhận, còn tiền cọc do bạn và chủ trọ đối soát theo thỏa thuận.\n\nBạn muốn mở danh sách kiểm tra hay chuẩn bị khảo sát bàn giao?",
		surplus: "Đồ còn dùng được có thể gửi để thẩm định thu mua hoặc ký gửi. Thu mua chỉ được trừ phí sau thỏa thuận, tiếp nhận và phân bổ hợp lệ; ký gửi thanh toán sau khi bán được. Đồ hỏng cần xác nhận kênh thu gom phù hợp.\n\nBạn đang có đồ còn dùng được hay đồ đã hỏng?",
		boxes: "Nếu đã có phương tiện, bạn có thể chỉ thuê hộp. Hộp được giao theo lịch thống nhất, kiểm đếm khi bàn giao và thu hồi, rồi vệ sinh để dùng tiếp. Thời gian thuê và gia hạn cần xem điều kiện trước khi nhận.\n\nBạn muốn xem điều kiện thuê hay chuẩn bị yêu cầu thuê hộp?",
		quote: "Ước tính cần biết gói dịch vụ, số hộp, quãng đường, tầng ở hai nơi, thang máy và đồ cồng kềnh. Dọn phòng/bàn giao phải khảo sát hiện trạng. Bạn dùng nút “Chuẩn bị đặt lịch” để nhập nhu cầu và xem giá từ bộ tính thật.\n\nBạn cần ước tính chuyển trọ, thuê hộp hay khảo sát phòng?",
		booking: "Đặt lịch chuyển đồ gồm bốn bước: chọn gói/đồ đạc → địa chỉ/ngày/điều kiện vận chuyển → đồ thừa → liên hệ và xem lại. Chọn “Chuẩn bị đặt lịch” để tạo bản nháp; khi kiểm tra xong bạn tự gửi yêu cầu trên biểu mẫu.\n\nGửi yêu cầu chưa có nghĩa là đã chốt lịch. BOXANH sẽ trao đổi và xác nhận riêng. Bạn cần chuyển trọ, thuê hộp, dọn phòng hay bàn giao?",
		support: "Mình hiểu việc gặp vấn đề với đồ đạc khiến bạn lo lắng. Bạn hãy giữ ảnh, hộp/tem nếu có và mô tả cụ thể. Mở CSKH, nhập mã BX cùng số điện thoại đã đăng ký để gửi hồ sơ và nhận mã SC.\n\nĐội BOXANH sẽ đối chiếu; Bơ không tự kết luận trách nhiệm hay mức bồi thường. Nếu cần hỗ trợ trực tiếp, gọi " + c.phone + ".",
		tracking: "Bạn mở Tra cứu, nhập mã yêu cầu và đúng số điện thoại đã đăng ký. Website hỗ trợ mã BX, DG, MH và SC. Tiến độ do nhân sự cập nhật, chưa có GPS trực tiếp.\n\nBạn không cần gửi mã hoặc số điện thoại trong cuộc trò chuyện; hãy nhập ở trang tra cứu."
	};
	return {
		text: found.length === 1 ? answers[found[0].id] || found[0].title + "\n\n" + found[0].text : found.map((t) => "**" + t.title + "**\n" + t.text).join("\n\n") + "\n\nBạn muốn mình hướng dẫn phần nào trước?",
		links: found
	};
}
//#endregion
//#region public/assistant-conversation.js
var conversationStarters = [
	{
		id: "moving",
		title: "Mình cần chuyển trọ",
		prompt: "Mình muốn chuyển trọ. Bạn hỏi mình từng bước để chọn dịch vụ phù hợp nhé.",
		topic: "moving"
	},
	{
		id: "quote",
		title: "Mình muốn biết chi phí",
		prompt: "Giúp mình ước tính chi phí. Bạn cần những thông tin gì?",
		topic: "quote"
	},
	{
		id: "cleaning",
		title: "Dọn phòng cũ hoặc mới",
		prompt: "Mình cần dọn phòng. Bạn tư vấn phạm vi công việc và cách gửi khảo sát nhé.",
		topic: "cleaning"
	},
	{
		id: "handover",
		title: "Chuẩn bị trả phòng",
		prompt: "Mình sắp trả phòng. Cần kiểm tra những gì trước khi bàn giao?",
		topic: "handover"
	},
	{
		id: "surplus",
		title: "Xử lý đồ không mang theo",
		prompt: "Mình có đồ không muốn mang theo. Giúp mình chọn thu mua, ký gửi hoặc thu gom.",
		topic: "surplus"
	},
	{
		id: "boxes",
		title: "Mình chỉ cần thuê hộp",
		prompt: "Mình đã có xe, chỉ cần thuê hộp. Cách giao, sử dụng và thu hồi thế nào?",
		topic: "boxes"
	},
	{
		id: "booking",
		title: "Chuẩn bị đặt lịch",
		prompt: "Mình muốn chuẩn bị đặt lịch. Hãy hỏi thông tin còn thiếu, đừng hỏi lại những gì mình đã nói.",
		topic: "booking"
	},
	{
		id: "tracking",
		title: "Tra cứu yêu cầu đã gửi",
		prompt: "Mình đã gửi yêu cầu rồi. Làm sao xem tiến độ?",
		topic: "tracking"
	},
	{
		id: "support",
		title: "Mình đang gặp sự cố",
		prompt: "Mình gặp vấn đề với đồ đạc sau chuyển trọ. Bạn hướng dẫn mình cách báo sự cố nhé.",
		topic: "support"
	},
	{
		id: "guide",
		title: "Khám phá toàn bộ website",
		prompt: "Bạn có thể giúp mình những gì? Giới thiệu tất cả chức năng chính và cách bắt đầu.",
		topic: "guide"
	}
];
function openingGreeting(area) {
	return `Chào bạn, mình là Bơ, trợ lý của BOXANH tại ${area}. Hôm nay bạn đang cần chuyển trọ, dọn phòng, bàn giao phòng hay xử lý đồ không mang theo?\n\nBạn có thể kể tình huống của mình hoặc chọn một gợi ý bên dưới. Mình sẽ cùng bạn tìm cách bắt đầu phù hợp.`;
}
var followUps = {
	moving: [
		"Mình tự đóng đồ được, nên chọn gói nào?",
		"Nếu muốn hỗ trợ từ đóng gói đến chuyển đồ thì sao?",
		"Cần chuẩn bị những gì trước ngày chuyển?"
	],
	services: [
		"So sánh Gọn nhẹ và Trọn gói cho mình.",
		"Mình có xe rồi, thuê hộp thế nào?",
		"Giúp mình chuẩn bị đặt lịch."
	],
	quote: [
		"Những khoản phụ phí nào có thể phát sinh?",
		"Mình muốn chuẩn bị bản nháp để xem chi phí.",
		"Nếu có đồ cũ thì có được giảm phí không?"
	],
	fees: [
		"Nếu có thang máy thì phí cầu thang tính thế nào?",
		"Giá dự kiến có phải giá cuối cùng không?",
		"Giúp mình chuẩn bị đặt lịch."
	],
	cleaning: [
		"Dọn phòng cũ và phòng mới khác nhau thế nào?",
		"Cần gửi ảnh và diện tích phòng thế nào?",
		"Giúp mình chuẩn bị khảo sát dọn phòng."
	],
	handover: [
		"Cho mình danh sách kiểm tra trước bàn giao.",
		"BOXANH có quyết định tiền cọc không?",
		"Giúp mình chuẩn bị khảo sát bàn giao."
	],
	boxes: [
		"Khi nào giao và thu hồi hộp?",
		"Giữ hộp lâu hơn có được không?",
		"Mình muốn chuẩn bị yêu cầu thuê hộp."
	],
	surplus: [
		"Thu mua và ký gửi khác nhau thế nào?",
		"Đồ hỏng thì xử lý như thế nào?",
		"Hướng dẫn gửi ảnh và hồ sơ đồ cũ."
	],
	goods: [
		"Ký gửi có được trừ phí chuyển ngay không?",
		"Mình muốn liên kết đồ cũ với đơn chuyển trọ.",
		"Cần ảnh và thông tin nào để thẩm định?"
	],
	booking: [
		"Chưa biết số hộp thì làm thế nào?",
		"Cần nhập thông tin liên hệ ở đâu?",
		"Gửi yêu cầu có nghĩa là đã chốt lịch chưa?"
	],
	survey: [
		"Dọn phòng có giá cố định không?",
		"Cần ảnh và diện tích phòng thế nào?",
		"Sau khi gửi khảo sát thì bước tiếp theo là gì?"
	],
	tracking: [
		"Mình quên mã yêu cầu thì làm thế nào?",
		"Có xem vị trí xe theo GPS không?",
		"Mình cần đội BOXANH hỗ trợ trực tiếp."
	],
	support: [
		"Cần giữ những bằng chứng gì khi báo sự cố?",
		"Hướng dẫn gửi hồ sơ sự cố.",
		"Sau khi gửi, mình theo dõi phản hồi ở đâu?"
	],
	guide: [
		"Chỉ cho mình cách đặt lịch.",
		"Mở hướng dẫn chuẩn bị ngày chuyển.",
		"Có những chức năng nào đang hoạt động?"
	]
};
function suggestedPrompts(messages) {
	const last = messages.at(-1);
	if (last?.pending || last?.error) return [];
	const supplied = last?.actions?.find((a) => a.type === "suggestions")?.prompts;
	if (supplied?.length) return supplied.slice(0, 3);
	if (last?.actions?.some((a) => ["draft", "quote"].includes(a.type))) return [
		"Giải thích giúp mình các khoản trong ước tính.",
		"Nếu mình thay đổi số hộp thì sao?",
		"Mình cần kiểm tra gì trước khi gửi yêu cầu?"
	];
	const latestUser = [...messages].reverse().find((m) => m.role === "user");
	return followUps[last?.links?.[0]?.id || lookupGuide(latestUser?.text || "")[0]?.id] || [
		"Giúp mình chọn dịch vụ phù hợp.",
		"Mình muốn biết chi phí dự kiến.",
		"Hướng dẫn mình bước tiếp theo."
	];
}
function buildConversationHistory(messages, user) {
	const history = [];
	let characters = 0;
	for (const message of [...messages, user].filter((m) => !m.error && !m.pending && (m.text || m.actions?.length)).slice(-16).reverse()) {
		let content = (message.text || "").slice(0, 2500);
		const draft = message.actions?.filter((a) => ["draft", "quote"].includes(a.type)).map((a) => ({
			draft: a.draft,
			quote: {
				total: a.quote?.total,
				needsSurvey: a.quote?.needsSurvey
			},
			assumptions: a.assumptions,
			bookingCreated: false
		}));
		if (draft?.length) content += "\nThông tin bản nháp đã hiển thị (cần công cụ kiểm tra lại): " + JSON.stringify(draft);
		content = content.slice(0, 4e3);
		if (characters + content.length > 18e3) break;
		characters += content.length;
		history.unshift({
			role: message.role,
			content
		});
	}
	return history;
}
function replyBlocks(text) {
	return text.split(/\n\n+/).map((block) => {
		const lines = block.split("\n");
		if (lines.every((line) => /^\s*[-•]\s+/.test(line))) return {
			kind: "list",
			ordered: false,
			lines: lines.map((l) => l.replace(/^\s*[-•]\s+/, ""))
		};
		if (lines.every((line) => /^\s*\d+[.)]\s+/.test(line))) return {
			kind: "list",
			ordered: true,
			lines: lines.map((l) => l.replace(/^\s*\d+[.)]\s+/, ""))
		};
		if (/^#{1,3} /.test(block) && lines.length === 1) return {
			kind: "heading",
			text: block.replace(/^#{1,3} /, "")
		};
		return {
			kind: "paragraph",
			text: block
		};
	});
}
//#endregion
//#region src/assistant.jsx
var session = {
	messages: [],
	consent: false,
	consentDestination: ""
};
var starterIcons = {
	moving: Package,
	quote: Sparkles,
	cleaning: Sparkles,
	handover: Check,
	boxes: Package,
	surplus: Recycle,
	booking: CalendarDays,
	tracking: BookOpen,
	support: ShieldCheck,
	guide: BookOpen
};
var uid = () => crypto.randomUUID();
function BoRobot({ mini = false, paused = false }) {
	const id = React.useId().replaceAll(":", "");
	return /* @__PURE__ */ jsx("span", {
		className: "bo-robot " + (mini ? "bo-mini " : "") + (paused ? "bo-paused" : ""),
		"aria-hidden": "true",
		children: /* @__PURE__ */ jsxs("svg", {
			viewBox: "0 0 220 235",
			fill: "none",
			children: [
				/* @__PURE__ */ jsxs("defs", { children: [
					/* @__PURE__ */ jsxs("linearGradient", {
						id: "body" + id,
						x1: "54",
						y1: "95",
						x2: "163",
						y2: "196",
						gradientUnits: "userSpaceOnUse",
						children: [
							/* @__PURE__ */ jsx("stop", { stopColor: "#b29aff" }),
							/* @__PURE__ */ jsx("stop", {
								offset: ".55",
								stopColor: "#8258e7"
							}),
							/* @__PURE__ */ jsx("stop", {
								offset: "1",
								stopColor: "#4d2c96"
							})
						]
					}),
					/* @__PURE__ */ jsxs("linearGradient", {
						id: "head" + id,
						x1: "39",
						y1: "42",
						x2: "171",
						y2: "130",
						gradientUnits: "userSpaceOnUse",
						children: [
							/* @__PURE__ */ jsx("stop", { stopColor: "#cdb7ff" }),
							/* @__PURE__ */ jsx("stop", {
								offset: ".5",
								stopColor: "#9572ee"
							}),
							/* @__PURE__ */ jsx("stop", {
								offset: "1",
								stopColor: "#6641b7"
							})
						]
					}),
					/* @__PURE__ */ jsxs("linearGradient", {
						id: "face" + id,
						x1: "63",
						y1: "50",
						x2: "169",
						y2: "110",
						gradientUnits: "userSpaceOnUse",
						children: [/* @__PURE__ */ jsx("stop", { stopColor: "#312553" }), /* @__PURE__ */ jsx("stop", {
							offset: "1",
							stopColor: "#171a30"
						})]
					})
				] }),
				/* @__PURE__ */ jsx("ellipse", {
					cx: "110",
					cy: "218",
					rx: "57",
					ry: "8",
					fill: "#3d206c",
					opacity: ".12"
				}),
				/* @__PURE__ */ jsxs("g", {
					className: "bo-floating",
					children: [
						/* @__PURE__ */ jsx("path", {
							d: "M105 32v-9",
							stroke: "#7351bd",
							strokeWidth: "7",
							strokeLinecap: "round"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "105",
							cy: "16",
							r: "9",
							fill: "#ffad68"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "102",
							cy: "13",
							r: "3",
							fill: "#fff0d9"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M62 169v29c0 7 11 11 18 3l12-18M148 169v29c0 7-11 11-18 3l-12-18",
							stroke: "#7d58c6",
							strokeWidth: "15",
							strokeLinecap: "round"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M76 116c-10 14-17 43-6 62 11 20 63 22 78 1 10-15 1-51-7-63",
							fill: "url(#body" + id + ")"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "83",
							y: "137",
							width: "43",
							height: "30",
							rx: "12",
							fill: "#fcd3a2"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M93 153h23M105 145v16",
							stroke: "#4b3279",
							strokeWidth: "4",
							strokeLinecap: "round"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M59 131c-15 9-22 24-12 39",
							stroke: "#a586ef",
							strokeWidth: "17",
							strokeLinecap: "round"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "48",
							cy: "169",
							r: "10",
							fill: "#ffc17e"
						}),
						/* @__PURE__ */ jsxs("g", {
							className: "bo-wave",
							children: [
								/* @__PURE__ */ jsx("path", {
									d: "M146 130c26-4 30-23 27-35",
									stroke: "#a586ef",
									strokeWidth: "17",
									strokeLinecap: "round"
								}),
								/* @__PURE__ */ jsx("path", {
									d: "M169 99c-9-8-8-16-1-19l1-9c0-5 7-5 7 0l1 7c8-6 14-1 11 8l-6 13",
									fill: "#ffc17e"
								}),
								/* @__PURE__ */ jsx("path", {
									d: "M167 85l7 6",
									stroke: "#e68f54",
									strokeWidth: "3",
									strokeLinecap: "round"
								})
							]
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "31",
							y: "59",
							width: "14",
							height: "30",
							rx: "7",
							fill: "#6d4cab"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "163",
							y: "59",
							width: "14",
							height: "30",
							rx: "7",
							fill: "#6d4cab"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "40",
							y: "34",
							width: "128",
							height: "91",
							rx: "32",
							fill: "url(#head" + id + ")"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M55 52c13-13 73-16 92-1",
							stroke: "#e2d4ff",
							strokeWidth: "4",
							strokeLinecap: "round",
							opacity: ".65"
						}),
						/* @__PURE__ */ jsx("rect", {
							x: "54",
							y: "51",
							width: "102",
							height: "58",
							rx: "21",
							fill: "url(#face" + id + ")"
						}),
						/* @__PURE__ */ jsx("g", {
							className: "bo-eyes",
							children: /* @__PURE__ */ jsx("path", {
								d: "M72 76c0-8 12-8 12 0M124 76c0-8 12-8 12 0",
								stroke: "#f8efd9",
								strokeWidth: "6",
								strokeLinecap: "round"
							})
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M91 86c7 8 19 8 26 0",
							stroke: "#ffbd7e",
							strokeWidth: "4",
							strokeLinecap: "round"
						}),
						/* @__PURE__ */ jsx("ellipse", {
							cx: "72",
							cy: "88",
							rx: "7",
							ry: "3",
							fill: "#ec8faa",
							opacity: ".7"
						}),
						/* @__PURE__ */ jsx("ellipse", {
							cx: "137",
							cy: "88",
							rx: "7",
							ry: "3",
							fill: "#ec8faa",
							opacity: ".7"
						})
					]
				}),
				/* @__PURE__ */ jsx("g", {
					className: "bo-spark",
					children: /* @__PURE__ */ jsx("path", {
						d: "M190 29v12m-6-6h12M25 123v10m-5-5h10",
						stroke: "#ed9350",
						strokeWidth: "3",
						strokeLinecap: "round"
					})
				})
			]
		})
	});
}
function AIHomeInvite() {
	const [paused, setPaused] = useState(false), [visible, setVisible] = useState(true), root = useRef(null);
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => setVisible(entries[0].isIntersecting));
		observer.observe(root.current);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ jsx("div", {
		ref: root,
		className: "bo-home-invite " + (paused || !visible ? "bo-paused" : ""),
		"data-ai-invite": true,
		children: /* @__PURE__ */ jsxs("div", {
			className: "bo-invite-inner",
			children: [/* @__PURE__ */ jsxs("a", {
				href: "/tro-ly-ai",
				className: "bo-invite-link",
				"aria-label": "Gặp Bơ, mở trang trò chuyện với trợ lý BOXANH",
				children: [
					/* @__PURE__ */ jsx(BoRobot, {
						mini: true,
						paused: paused || !visible
					}),
					/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsxs("span", {
							className: "bo-invite-label",
							children: [/* @__PURE__ */ jsx(Sparkles, { size: 13 }), " TRỢ LÝ BOXANH"]
						}),
						/* @__PURE__ */ jsx("strong", { children: "Chào bạn, mình là Bơ!" }),
						/* @__PURE__ */ jsx("p", { children: "Chọn dịch vụ, hiểu chi phí, chuẩn bị đặt lịch. Cứ hỏi mình nhé." })
					] }),
					/* @__PURE__ */ jsxs("span", {
						className: "bo-invite-cta",
						children: ["Trò chuyện cùng Bơ ", /* @__PURE__ */ jsx(ArrowUpRight, { size: 19 })]
					})
				]
			}), /* @__PURE__ */ jsx("button", {
				type: "button",
				className: "bo-invite-pause",
				"aria-label": paused ? "Tiếp tục chuyển động robot" : "Tạm dừng chuyển động robot",
				onClick: () => setPaused(!paused),
				children: paused ? /* @__PURE__ */ jsx(Sparkles, { size: 15 }) : /* @__PURE__ */ jsx(Square, { size: 12 })
			})]
		})
	});
}
function Emphasis({ text }) {
	return text.split(/(\*\*[^*\n]+\*\*)/g).map((part, i) => part.startsWith("**") && part.endsWith("**") ? /* @__PURE__ */ jsx("strong", { children: part.slice(2, -2) }, i) : part);
}
function SafeText({ text }) {
	return /* @__PURE__ */ jsx("div", {
		className: "bo-message-text",
		children: replyBlocks(text).map((block, i) => block.kind === "list" ? React.createElement(block.ordered ? "ol" : "ul", { key: i }, block.lines.map((line, j) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Emphasis, { text: line }) }, j))) : block.kind === "heading" ? /* @__PURE__ */ jsx("h3", { children: /* @__PURE__ */ jsx(Emphasis, { text: block.text }) }, i) : /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(Emphasis, { text: block.text }) }, i))
	});
}
function SourceLinks({ links }) {
	const allowed = new Set(guideTopics.map((t) => t.href));
	return /* @__PURE__ */ jsx("div", {
		className: "bo-source-links",
		children: links.filter((l) => allowed.has(l.href)).map((l) => /* @__PURE__ */ jsxs("a", {
			href: l.href,
			children: [l.title, /* @__PURE__ */ jsx(ArrowUpRight, { size: 15 })]
		}, l.href))
	});
}
function BookingPlanner({ open, onOpenChange, onPrepared, onQuote }) {
	const [draft, setDraft] = useState({
		service: "small",
		boxes: 10,
		distance: 5,
		originFloor: 0,
		destinationFloor: 0,
		originElevator: false,
		destinationElevator: false,
		bulky: 0,
		packing: false,
		date: ""
	}), [loading, setLoading] = useState(false), [error, setError] = useState("");
	const moving = ["small", "full"].includes(draft.service), today = new Date(Date.now() + 252e5).toISOString().slice(0, 10), lastDay = new Date(Date.now() + 316224e5).toISOString().slice(0, 10);
	const set = (key, value) => setDraft((d) => ({
		...d,
		[key]: value
	}));
	const clean = () => Object.fromEntries(Object.entries(draft).filter(([k, v]) => k !== "date" || v));
	async function prepare(e) {
		e.preventDefault();
		setLoading(true);
		setError("");
		try {
			const response = await fetch("/api/quote", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(clean()),
				signal: AbortSignal.timeout(1e4)
			});
			const result = await response.json();
			if (!response.ok) throw Error(result.error || "Chưa nhận được báo giá.");
			onPrepared({
				type: "draft",
				draft: clean(),
				quote: result,
				assumptions: [],
				bookingCreated: false
			});
			onOpenChange(false);
		} catch {
			setError("Chưa kết nối được bộ tính giá. Bạn vẫn có thể mở biểu mẫu để điền nhu cầu.");
		} finally {
			setLoading(false);
		}
	}
	return /* @__PURE__ */ jsx(Dialog.Root, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(Dialog.Portal, { children: [/* @__PURE__ */ jsx(Dialog.Overlay, { className: "bo-modal-overlay" }), /* @__PURE__ */ jsxs(Dialog.Content, {
			className: "bo-planner-dialog",
			children: [
				/* @__PURE__ */ jsx(Dialog.Close, {
					className: "bo-close-reset",
					"aria-label": "Đóng kế hoạch",
					children: /* @__PURE__ */ jsx(X, { size: 19 })
				}),
				/* @__PURE__ */ jsx(Dialog.Title, { children: "Chuẩn bị lịch cùng Bơ" }),
				/* @__PURE__ */ jsx(Dialog.Description, { children: "Chọn nhu cầu và ngày mong muốn. Đây là bản nháp; lịch và giá cần BOXANH xác nhận." }),
				/* @__PURE__ */ jsxs("form", {
					onSubmit: prepare,
					children: [
						/* @__PURE__ */ jsxs("label", {
							className: "bo-planner-service",
							children: ["Dịch vụ", /* @__PURE__ */ jsx("select", {
								value: draft.service,
								onChange: (e) => set("service", e.target.value),
								children: Object.entries(serviceNames).map(([v, label]) => /* @__PURE__ */ jsx("option", {
									value: v,
									children: label
								}, v))
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "bo-planner-fields",
							children: [!["cleaning", "handover"].includes(draft.service) && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("label", { children: ["Số hộp", /* @__PURE__ */ jsx("input", {
								type: "number",
								min: "1",
								max: "60",
								required: true,
								value: draft.boxes,
								onChange: (e) => set("boxes", e.target.value === "" ? "" : Number(e.target.value))
							})] }), moving && /* @__PURE__ */ jsxs(Fragment, { children: [
								/* @__PURE__ */ jsxs("label", { children: ["Quãng đường (km)", /* @__PURE__ */ jsx("input", {
									type: "number",
									min: "1",
									max: "80",
									required: true,
									value: draft.distance,
									onChange: (e) => set("distance", e.target.value === "" ? "" : Number(e.target.value))
								})] }),
								/* @__PURE__ */ jsxs("label", { children: ["Tầng nơi đi", /* @__PURE__ */ jsx("input", {
									type: "number",
									min: "0",
									max: "15",
									required: true,
									value: draft.originFloor,
									onChange: (e) => set("originFloor", e.target.value === "" ? "" : Number(e.target.value))
								})] }),
								/* @__PURE__ */ jsxs("label", { children: ["Tầng nơi đến", /* @__PURE__ */ jsx("input", {
									type: "number",
									min: "0",
									max: "15",
									required: true,
									value: draft.destinationFloor,
									onChange: (e) => set("destinationFloor", e.target.value === "" ? "" : Number(e.target.value))
								})] }),
								/* @__PURE__ */ jsxs("label", { children: ["Đồ cồng kềnh (món)", /* @__PURE__ */ jsx("input", {
									type: "number",
									min: "0",
									max: "30",
									required: true,
									value: draft.bulky,
									onChange: (e) => set("bulky", e.target.value === "" ? "" : Number(e.target.value))
								})] })
							] })] }), /* @__PURE__ */ jsxs("label", { children: ["Ngày mong muốn (tùy chọn)", /* @__PURE__ */ jsx("input", {
								type: "date",
								min: today,
								max: lastDay,
								value: draft.date,
								onChange: (e) => set("date", e.target.value)
							})] })]
						}),
						moving && /* @__PURE__ */ jsx("div", {
							className: "bo-planner-checks",
							children: [
								["originElevator", "Nơi đi có thang máy"],
								["destinationElevator", "Nơi đến có thang máy"],
								...draft.service === "small" ? [["packing", "Cần hỗ trợ đóng gói"]] : []
							].map(([key, label]) => /* @__PURE__ */ jsxs("label", { children: [/* @__PURE__ */ jsx("input", {
								type: "checkbox",
								checked: draft[key],
								onChange: (e) => set(key, e.target.checked)
							}), label] }, key))
						}),
						error && /* @__PURE__ */ jsx("p", {
							className: "bo-composer-error",
							role: "alert",
							children: error
						}),
						/* @__PURE__ */ jsxs("button", {
							className: "bo-planner-submit",
							type: "submit",
							disabled: loading,
							children: [loading ? "Đang lấy ước tính…" : "Xem bản nháp & chi phí", /* @__PURE__ */ jsx(ArrowRight, { size: 17 })]
						}),
						/* @__PURE__ */ jsxs("button", {
							type: "button",
							className: "bo-planner-skip",
							onClick: () => onQuote(clean()),
							children: ["Mở biểu mẫu đặt lịch ", /* @__PURE__ */ jsx(ArrowUpRight, { size: 14 })]
						})
					]
				})
			]
		})] })
	});
}
function DraftCard({ action, onQuote, config: c }) {
	return /* @__PURE__ */ jsxs("section", {
		className: "bo-draft-card",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "bo-draft-head",
				children: [
					/* @__PURE__ */ jsx(CalendarDays, { size: 20 }),
					/* @__PURE__ */ jsx("strong", { children: action.type === "draft" ? "Kế hoạch bạn vừa chuẩn bị" : "Ước tính cho nhu cầu của bạn" }),
					/* @__PURE__ */ jsx("span", { children: "Bản nháp" })
				]
			}),
			/* @__PURE__ */ jsx("h3", { children: serviceNames[action.draft.service] }),
			/* @__PURE__ */ jsxs("div", {
				className: "bo-draft-data",
				children: [!action.quote.needsSurvey && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("span", { children: [action.draft.boxes ?? 10, " hộp"] }), action.draft.service !== "boxes" && /* @__PURE__ */ jsxs("span", { children: [action.draft.distance ?? 5, " km"] })] }), action.draft.date && /* @__PURE__ */ jsx("span", { children: (/* @__PURE__ */ new Date(action.draft.date + "T12:00:00")).toLocaleDateString("vi-VN") })]
			}),
			/* @__PURE__ */ jsxs("strong", {
				className: "bo-draft-price",
				children: [action.quote.needsSurvey ? "Báo giá sau khảo sát" : moneyVND(action.quote.total), /* @__PURE__ */ jsx("small", { children: action.quote.needsSurvey ? "Cần kiểm tra hiện trạng phòng" : "Dự kiến · chưa phải giá chốt" })]
			}),
			action.quote.lines?.length > 0 && /* @__PURE__ */ jsxs("details", { children: [/* @__PURE__ */ jsxs("summary", { children: ["Xem cách tính ", /* @__PURE__ */ jsx(ChevronDown, { size: 15 })] }), action.quote.lines.map((l) => /* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("span", { children: l.label }), /* @__PURE__ */ jsx("b", { children: moneyVND(l.amount) })] }, l.label))] }),
			action.assumptions?.length > 0 && /* @__PURE__ */ jsxs("p", {
				className: "bo-assumptions",
				children: [
					"Đang tạm tính: ",
					action.assumptions.join(", "),
					". Bạn có thể chỉnh lại trên biểu mẫu."
				]
			}),
			/* @__PURE__ */ jsxs("button", {
				type: "button",
				onClick: () => onQuote(action.draft),
				children: ["Kiểm tra & tiếp tục đặt lịch ", /* @__PURE__ */ jsx(ArrowRight, { size: 17 })]
			}),
			/* @__PURE__ */ jsx("p", {
				className: "bo-draft-note",
				children: "Chưa gửi yêu cầu, chưa giữ lịch. BOXANH xác nhận sau khảo sát và trao đổi."
			}),
			c.bookingEnabled === false && /* @__PURE__ */ jsx("p", {
				role: "status",
				children: "BOXANH đang tạm ngừng nhận đơn mới. Bạn có thể gọi để trao đổi."
			})
		]
	});
}
function Message({ message, onQuote, config }) {
	const [copied, setCopied] = useState(false);
	async function copy() {
		try {
			await navigator.clipboard.writeText(message.text);
			setCopied(true);
			setTimeout(() => setCopied(false), 1800);
		} catch {
			setCopied(false);
		}
	}
	return /* @__PURE__ */ jsxs("article", {
		className: "bo-message bo-from-" + message.role,
		"aria-label": message.role === "user" ? "Tin nhắn của bạn" : "Câu trả lời của Bơ",
		children: [
			message.role === "assistant" && /* @__PURE__ */ jsxs("div", {
				className: "bo-message-identity",
				children: [
					/* @__PURE__ */ jsx(BoRobot, {
						mini: true,
						paused: true
					}),
					/* @__PURE__ */ jsx("strong", { children: "Bơ" }),
					/* @__PURE__ */ jsx("span", { children: message.mode === "guide" ? "Từ cẩm nang BOXANH" : "Trợ lý AI" })
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "bo-bubble",
				children: [
					/* @__PURE__ */ jsx(SafeText, { text: message.text }),
					message.pending && /* @__PURE__ */ jsxs("span", {
						className: "bo-typing",
						"aria-label": "Bơ đang trả lời",
						children: [
							/* @__PURE__ */ jsx("i", {}),
							/* @__PURE__ */ jsx("i", {}),
							/* @__PURE__ */ jsx("i", {})
						]
					}),
					message.error && /* @__PURE__ */ jsx("p", {
						className: "bo-message-error",
						role: "alert",
						children: message.error
					}),
					message.links && /* @__PURE__ */ jsx(SourceLinks, { links: message.links }),
					/* @__PURE__ */ jsxs("div", {
						className: "bo-action-stack",
						children: [message.actions?.filter((a) => ["draft", "quote"].includes(a.type)).map((a, i) => /* @__PURE__ */ jsx(DraftCard, {
							action: a,
							onQuote,
							config
						}, i)), message.actions?.filter((a) => a.type === "links").map((a, i) => /* @__PURE__ */ jsx(SourceLinks, { links: a.links || [] }, "l" + i))]
					})
				]
			}),
			message.role === "assistant" && message.text && !message.pending && /* @__PURE__ */ jsxs("button", {
				className: "bo-copy",
				type: "button",
				onClick: copy,
				children: [
					copied ? /* @__PURE__ */ jsx(Check, { size: 13 }) : /* @__PURE__ */ jsx(Copy, { size: 13 }),
					" ",
					copied ? "Đã sao chép" : "Sao chép"
				]
			})
		]
	});
}
function AssistantPage({ config: c, onQuote }) {
	const [messages, setMessages] = useState(() => session.messages.map((m) => m.pending ? {
		...m,
		pending: false,
		error: "Câu trả lời trước đã dừng khi bạn rời trang."
	} : m));
	const [input, setInput] = useState(""), [status, setStatus] = useState({
		ready: false,
		loading: true
	}), [consent, setConsent] = useState(session.consent);
	const [busy, setBusy] = useState(false), [open, setOpen] = useState(false), [error, setError] = useState(""), [resetOpen, setResetOpen] = useState(false), [plannerOpen, setPlannerOpen] = useState(false);
	const scroll = useRef(null), abort = useRef(null), inputRef = useRef(null), stick = useRef(true);
	useEffect(() => {
		const controller = new AbortController();
		fetch("/api/assistant/status", { signal: AbortSignal.any([controller.signal, AbortSignal.timeout(5e3)]) }).then((r) => {
			if (!r.ok) throw Error();
			return r.json();
		}).then((s) => {
			setStatus({
				...s,
				loading: false
			});
			if (s.ready && session.consentDestination !== (s.dataDestination || "openai")) {
				session.consent = false;
				setConsent(false);
			}
		}).catch(() => {
			if (!controller.signal.aborted) setStatus({
				ready: false,
				loading: false,
				offline: true
			});
		});
		return () => {
			controller.abort();
			abort.current?.abort();
		};
	}, []);
	useEffect(() => {
		session.messages = messages;
		if (stick.current && scroll.current) scroll.current.scrollTop = messages.length ? scroll.current.scrollHeight : 0;
	}, [messages, busy]);
	function update(id, change) {
		setMessages((m) => m.map((x) => x.id === id ? {
			...x,
			...typeof change === "function" ? change(x) : change
		} : x));
	}
	function showTopic(topic) {
		stick.current = true;
		setOpen(false);
		setMessages((m) => [...m, {
			id: uid(),
			role: "assistant",
			mode: "guide",
			text: topic.title + "\n\n" + topic.text,
			links: [topic]
		}]);
	}
	async function send(text, previous = messages) {
		const content = text.trim();
		if (busy || !content) return;
		if (content.length > 1800) {
			setError("Mỗi tin nhắn tối đa 1.800 ký tự.");
			return;
		}
		if (status.loading) {
			setInput(content);
			setError("Bơ đang kiểm tra kết nối. Câu hỏi của bạn vẫn ở đây.");
			return;
		}
		if (status.ready && !consent) {
			setInput(content);
			setError("Vui lòng đồng ý gửi nội dung đến AI trước khi trò chuyện. Câu hỏi của bạn đã được giữ lại.");
			inputRef.current?.focus();
			return;
		}
		setError("");
		setInput("");
		setOpen(false);
		stick.current = true;
		const user = {
			id: uid(),
			role: "user",
			text: content
		}, replyId = uid();
		if (!status.ready) {
			const reply = guideReply(content, c, previous);
			setMessages([
				...previous,
				user,
				{
					id: replyId,
					role: "assistant",
					mode: "guide",
					text: reply.text,
					links: reply.links
				}
			]);
			return;
		}
		setMessages([
			...previous,
			user,
			{
				id: replyId,
				role: "assistant",
				mode: "ai",
				text: "",
				pending: true,
				actions: []
			}
		]);
		setBusy(true);
		const controller = new AbortController();
		abort.current = controller;
		try {
			const response = await fetch("/api/assistant/chat", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/x-ndjson"
				},
				body: JSON.stringify({
					messages: buildConversationHistory(previous, user),
					consent: true
				}),
				signal: controller.signal
			});
			if (!response.ok) {
				const body = await response.json();
				throw Error(body.error || "Chưa kết nối được Bơ.");
			}
			if (!response.body) throw Error("Chưa nhận được câu trả lời.");
			const reader = response.body.getReader(), decoder = new TextDecoder(), ndjson = response.headers.get("content-type")?.includes("application/x-ndjson");
			let buffer = "", finished = false;
			try {
				while (true) {
					const { value, done } = await reader.read();
					if (done) break;
					buffer = (buffer + decoder.decode(value, { stream: true })).replace(/\r\n/g, "\n");
					let position;
					while ((position = buffer.indexOf(ndjson ? "\n" : "\n\n")) >= 0) {
						const frame = buffer.slice(0, position);
						buffer = buffer.slice(position + (ndjson ? 1 : 2));
						const data = ndjson ? frame.trim() : frame.split("\n").filter((line) => line.startsWith("data:")).map((line) => line.slice(5).trimStart()).join("\n");
						if (!data) continue;
						const event = JSON.parse(data);
						if (event.type === "delta") update(replyId, (m) => ({ text: m.text + event.text }));
						else if (event.type === "action") update(replyId, (m) => ({ actions: [...m.actions, event.action] }));
						else if (event.type === "done") {
							finished = true;
							update(replyId, {
								text: event.text,
								pending: false,
								actions: event.actions
							});
						} else if (event.type === "error") throw Error(event.message);
					}
				}
			} finally {
				reader.releaseLock();
			}
			if (!finished) throw Error("Câu trả lời bị gián đoạn. Bạn có thể thử lại.");
		} catch (e) {
			update(replyId, {
				pending: false,
				error: e.name === "AbortError" ? "Đã dừng câu trả lời." : e.message
			});
		} finally {
			setBusy(false);
			abort.current = null;
		}
	}
	function retry() {
		const index = messages.findLastIndex((m) => m.role === "user");
		if (index >= 0) send(messages[index].text, messages.slice(0, index));
	}
	function prepared(action) {
		stick.current = true;
		setOpen(false);
		setMessages((m) => [...m, {
			id: uid(),
			role: "assistant",
			mode: "guide",
			text: "Mình đã chuẩn bị bản nháp bên dưới. Bạn kiểm tra thông tin và chi phí, rồi tiếp tục trên biểu mẫu khi sẵn sàng.",
			actions: [action]
		}]);
	}
	function newChat() {
		abort.current?.abort();
		setMessages([]);
		session.messages = [];
		setInput("");
		setError("");
		setResetOpen(false);
		stick.current = true;
	}
	const prompts = messages.length ? suggestedPrompts(messages) : [];
	return /* @__PURE__ */ jsxs("div", {
		className: "bo-chat-page",
		"data-assistant-page": true,
		children: [
			/* @__PURE__ */ jsxs("header", {
				className: "bo-chat-header",
				children: [
					/* @__PURE__ */ jsxs("a", {
						className: "bo-chat-back",
						href: "/",
						"aria-label": "Về trang chủ BOXANH",
						children: [/* @__PURE__ */ jsx(ArrowLeft, { size: 18 }), /* @__PURE__ */ jsx("span", { children: "BOXANH" })]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "bo-chat-brand",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "bo-brand-star",
								children: /* @__PURE__ */ jsx(Sparkles, { size: 16 })
							}),
							/* @__PURE__ */ jsx("strong", { children: "Bơ" }),
							/* @__PURE__ */ jsx("span", { children: "Phòng trò chuyện" })
						]
					}),
					/* @__PURE__ */ jsxs("a", {
						className: "bo-header-call",
						href: "tel:" + c.phone,
						children: [/* @__PURE__ */ jsx(Phone, { size: 16 }), /* @__PURE__ */ jsx("span", { children: "Gặp đội BOXANH" })]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "bo-chat-layout",
				children: [/* @__PURE__ */ jsxs("aside", {
					className: "bo-sidebar " + (open ? "bo-sidebar-open" : ""),
					children: [/* @__PURE__ */ jsxs("button", {
						type: "button",
						className: "bo-sidebar-toggle",
						onClick: () => setOpen(!open),
						"aria-expanded": open,
						children: [
							/* @__PURE__ */ jsx(BookOpen, { size: 17 }),
							" Lối tắt & cẩm nang ",
							open ? /* @__PURE__ */ jsx(ChevronUp, { size: 17 }) : /* @__PURE__ */ jsx(ChevronDown, { size: 17 })
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "bo-sidebar-content",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "bo-sidebar-title",
								children: [
									/* @__PURE__ */ jsx("span", { children: "NGƯỜI BẠN CHUYỂN TRỌ" }),
									/* @__PURE__ */ jsxs("h2", { children: [
										"Kể mình nghe.",
										/* @__PURE__ */ jsx("br", {}),
										"Cùng tìm cách nhé."
									] }),
									/* @__PURE__ */ jsx("p", { children: "Bạn có thể viết tự nhiên, hỏi tiếp hoặc thay đổi nhu cầu trong cuộc trò chuyện." })
								]
							}),
							/* @__PURE__ */ jsxs("button", {
								type: "button",
								className: "bo-new-chat",
								onClick: () => messages.length ? setResetOpen(true) : newChat(),
								disabled: busy,
								children: [/* @__PURE__ */ jsx(Plus, { size: 17 }), " Cuộc trò chuyện mới"]
							}),
							/* @__PURE__ */ jsxs("button", {
								type: "button",
								className: "bo-sidebar-plan",
								onClick: () => {
									setPlannerOpen(true);
									setOpen(false);
								},
								children: [
									/* @__PURE__ */ jsx(CalendarDays, { size: 17 }),
									" Chuẩn bị đặt lịch ",
									/* @__PURE__ */ jsx(ArrowUpRight, { size: 16 })
								]
							}),
							/* @__PURE__ */ jsx("span", {
								className: "bo-sidebar-label",
								children: "BẠN ĐANG CẦN GÌ?"
							}),
							/* @__PURE__ */ jsx("nav", {
								"aria-label": "Nhu cầu tư vấn",
								children: conversationStarters.map((starter) => /* @__PURE__ */ jsxs("button", {
									type: "button",
									disabled: busy,
									onClick: () => send(starter.prompt),
									children: [/* @__PURE__ */ jsx("span", { children: starter.title }), /* @__PURE__ */ jsx(ArrowRight, { size: 15 })]
								}, starter.id))
							}),
							/* @__PURE__ */ jsxs("details", {
								className: "bo-all-topics",
								children: [/* @__PURE__ */ jsxs("summary", { children: ["Toàn bộ cẩm nang ", /* @__PURE__ */ jsx(ChevronDown, { size: 15 })] }), guideTopics.map((topic) => /* @__PURE__ */ jsxs("button", {
									type: "button",
									onClick: () => showTopic(topic),
									disabled: busy,
									children: [topic.title, /* @__PURE__ */ jsx(ArrowUpRight, { size: 14 })]
								}, topic.id))]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "bo-human-card",
								children: [
									/* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx(ShieldCheck, { size: 18 }), " Cần người hỗ trợ?"] }),
									/* @__PURE__ */ jsx("p", { children: "Đội BOXANH xác nhận giá, lịch và xử lý các tình huống cần đối chiếu." }),
									/* @__PURE__ */ jsxs("a", {
										href: "tel:" + c.phone,
										children: [
											c.phone.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3"),
											" ",
											/* @__PURE__ */ jsx(ArrowUpRight, { size: 16 })
										]
									})
								]
							})
						]
					})]
				}), /* @__PURE__ */ jsxs("section", {
					className: "bo-conversation",
					"aria-label": "Trò chuyện với trợ lý BOXANH",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "bo-conversation-status",
							children: [/* @__PURE__ */ jsxs("span", {
								className: status.ready ? "bo-status-ready" : "bo-status-guide",
								children: [/* @__PURE__ */ jsx("i", {}), status.loading ? "Đang kiểm tra kết nối" : status.ready ? status.dataDestination === "boxanh" ? "AI trên máy BOXANH sẵn sàng" : "AI sẵn sàng hỗ trợ" : "Đang dùng cẩm nang · AI chưa bật"]
							}), /* @__PURE__ */ jsx("span", {
								className: "bo-status-area",
								children: c.area
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							ref: scroll,
							className: "bo-chat-scroll",
							onScroll: () => {
								const el = scroll.current;
								stick.current = el.scrollHeight - el.scrollTop - el.clientHeight < 100;
							},
							children: !messages.length ? /* @__PURE__ */ jsxs("div", {
								className: "bo-welcome bo-welcome-v12",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "bo-opening-head",
										children: [/* @__PURE__ */ jsx(BoRobot, {}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
											className: "bo-kicker",
											children: "MÌNH LÀ BƠ, TRỢ LÝ BOXANH"
										}), /* @__PURE__ */ jsxs("h1", { children: [
											"Hôm nay, bạn cần",
											/* @__PURE__ */ jsx("br", {}),
											/* @__PURE__ */ jsx("em", { children: "mình giúp gì?" })
										] })] })]
									}),
									/* @__PURE__ */ jsx("div", {
										className: "bo-opening-message",
										"aria-label": "Lời chào và câu hỏi của Bơ",
										children: /* @__PURE__ */ jsx(SafeText, { text: openingGreeting(c.area) })
									}),
									/* @__PURE__ */ jsx("p", {
										className: "bo-start-label",
										children: "CHỌN MỘT ĐIỀU BẠN CẦN, HOẶC NHẮN MÌNH BÊN DƯỚI"
									}),
									/* @__PURE__ */ jsx("div", {
										className: "bo-prompt-grid",
										children: conversationStarters.map((starter) => {
											const Icon = starterIcons[starter.id];
											return /* @__PURE__ */ jsxs("button", {
												type: "button",
												onClick: () => send(starter.prompt),
												disabled: status.loading,
												children: [
													/* @__PURE__ */ jsx(Icon, { size: 19 }),
													/* @__PURE__ */ jsx("strong", { children: starter.title }),
													/* @__PURE__ */ jsx(ArrowRight, { size: 15 })
												]
											}, starter.id);
										})
									}),
									/* @__PURE__ */ jsxs("details", {
										className: "bo-capabilities",
										children: [/* @__PURE__ */ jsxs("summary", { children: ["Khám phá mọi chức năng BOXANH ", /* @__PURE__ */ jsx(ChevronDown, { size: 16 })] }), /* @__PURE__ */ jsx("div", { children: guideTopics.map((topic) => /* @__PURE__ */ jsxs("button", {
											type: "button",
											onClick: () => showTopic(topic),
											children: [topic.title, /* @__PURE__ */ jsx(ArrowUpRight, { size: 14 })]
										}, topic.id)) })]
									})
								]
							}) : /* @__PURE__ */ jsxs("div", {
								className: "bo-messages",
								role: "log",
								"aria-label": "Lịch sử hội thoại",
								"aria-relevant": "additions",
								children: [
									/* @__PURE__ */ jsx("p", {
										className: "bo-session-label",
										children: "CÙNG BƠ TÌM CÁCH PHÙ HỢP"
									}),
									messages.map((message) => /* @__PURE__ */ jsx(Message, {
										message,
										onQuote,
										config: c
									}, message.id)),
									messages.at(-1)?.error && /* @__PURE__ */ jsxs("button", {
										type: "button",
										className: "bo-retry",
										onClick: retry,
										disabled: busy,
										children: [/* @__PURE__ */ jsx(ArrowRight, { size: 15 }), " Thử lại câu hỏi"]
									}),
									!!prompts.length && /* @__PURE__ */ jsxs("div", {
										className: "bo-followups",
										"aria-label": "Gợi ý tiếp tục cuộc trò chuyện",
										children: [/* @__PURE__ */ jsx("span", { children: "BẠN MUỐN TÌM HIỂU TIẾP?" }), prompts.map((prompt) => /* @__PURE__ */ jsxs("button", {
											type: "button",
											disabled: busy,
											onClick: () => send(prompt),
											children: [prompt, /* @__PURE__ */ jsx(ArrowRight, { size: 14 })]
										}, prompt))]
									})
								]
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "bo-composer-area",
							children: [
								!status.loading && !status.ready && /* @__PURE__ */ jsxs("div", {
									className: "bo-mode-note",
									children: [/* @__PURE__ */ jsx(BookOpen, { size: 16 }), /* @__PURE__ */ jsxs("p", { children: [
										/* @__PURE__ */ jsx("strong", { children: "AI hội thoại đang chờ kích hoạt." }),
										" ",
										status.offline ? "Chưa kết nối được máy chủ. " : "",
										"Bơ hiện hướng dẫn từ cẩm nang, chưa thể trò chuyện tự do như ChatGPT."
									] })]
								}),
								status.ready && /* @__PURE__ */ jsxs("label", {
									className: "bo-ai-consent",
									children: [/* @__PURE__ */ jsx("input", {
										type: "checkbox",
										checked: consent,
										onChange: (e) => {
											setConsent(e.target.checked);
											session.consent = e.target.checked;
											session.consentDestination = status.dataDestination || "openai";
											setError("");
										}
									}), /* @__PURE__ */ jsxs("span", { children: [
										status.dataDestination === "boxanh" ? "Tôi đồng ý xử lý nội dung trò chuyện bằng AI trên máy chủ BOXANH. Không gửi nội dung tới OpenAI." : "Tôi đồng ý gửi nội dung trò chuyện tới OpenAI để nhận tư vấn AI.",
										" Không nhập mật khẩu, OTP hoặc thông tin thanh toán. ",
										/* @__PURE__ */ jsx("a", {
											href: "/chinh-sach#bao-mat",
											children: "Quyền riêng tư"
										})
									] })]
								}),
								/* @__PURE__ */ jsxs("form", {
									className: "bo-composer",
									onSubmit: (e) => {
										e.preventDefault();
										send(input);
									},
									children: [
										/* @__PURE__ */ jsx("label", {
											className: "sr-only",
											htmlFor: "bo-chat-input",
											children: "Câu hỏi dành cho Bơ"
										}),
										/* @__PURE__ */ jsx("textarea", {
											ref: inputRef,
											id: "bo-chat-input",
											placeholder: "Kể Bơ nghe tình huống của bạn, hoặc hỏi tiếp điều vừa trao đổi…",
											value: input,
											maxLength: 1800,
											rows: 2,
											onChange: (e) => setInput(e.target.value),
											onKeyDown: (e) => {
												if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
													e.preventDefault();
													send(input);
												}
											}
										}),
										busy ? /* @__PURE__ */ jsx("button", {
											type: "button",
											className: "bo-send",
											"aria-label": "Dừng câu trả lời",
											onClick: () => abort.current?.abort(),
											children: /* @__PURE__ */ jsx(Square, { size: 16 })
										}) : /* @__PURE__ */ jsx("button", {
											type: "submit",
											className: "bo-send",
											"aria-label": "Gửi câu hỏi",
											disabled: !input.trim() || status.loading,
											children: /* @__PURE__ */ jsx(Send, { size: 19 })
										})
									]
								}),
								error && /* @__PURE__ */ jsx("p", {
									className: "bo-composer-error",
									role: "alert",
									children: error
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "bo-composer-footer",
									children: [
										/* @__PURE__ */ jsxs("button", {
											type: "button",
											onClick: () => setPlannerOpen(true),
											children: [/* @__PURE__ */ jsx(CalendarDays, { size: 13 }), " Chuẩn bị đặt lịch"]
										}),
										/* @__PURE__ */ jsx("span", { children: "Giá & lịch do BOXANH xác nhận." }),
										/* @__PURE__ */ jsx("span", { children: input.length ? input.length + "/1.800" : "Enter để gửi · Shift + Enter xuống dòng" })
									]
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx(BookingPlanner, {
				open: plannerOpen,
				onOpenChange: setPlannerOpen,
				onPrepared: prepared,
				onQuote
			}),
			/* @__PURE__ */ jsx(Dialog.Root, {
				open: resetOpen,
				onOpenChange: setResetOpen,
				children: /* @__PURE__ */ jsxs(Dialog.Portal, { children: [/* @__PURE__ */ jsx(Dialog.Overlay, { className: "bo-modal-overlay" }), /* @__PURE__ */ jsxs(Dialog.Content, {
					className: "bo-reset-dialog",
					children: [
						/* @__PURE__ */ jsx(Dialog.Close, {
							className: "bo-close-reset",
							"aria-label": "Đóng xác nhận",
							children: /* @__PURE__ */ jsx(X, { size: 18 })
						}),
						/* @__PURE__ */ jsx(Dialog.Title, { children: "Bắt đầu câu chuyện mới?" }),
						/* @__PURE__ */ jsx(Dialog.Description, { children: "Hội thoại hiện tại sẽ được bỏ khỏi phiên này. Các yêu cầu dịch vụ bạn đã gửi vẫn được giữ nguyên." }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: () => setResetOpen(false),
							children: "Giữ hội thoại"
						}), /* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: newChat,
							children: "Bắt đầu mới"
						})] })
					]
				})] })
			})
		]
	});
}
//#endregion
//#region src/portal-multipage.jsx
var entries = [
	{
		href: "/chuyen-tro",
		title: "Chuyển trọ",
		copy: "Đóng đồ. Chuyển đi. An tâm đến nơi.",
		icon: Truck,
		image: "/assets/moving.webp",
		className: "move",
		index: "01"
	},
	{
		href: "/don-phong",
		title: "Dọn phòng",
		copy: "Trả phòng sạch. Đón khởi đầu mới.",
		icon: Sparkles,
		image: "/assets/room-real.webp",
		className: "clean",
		index: "02"
	},
	{
		href: "/ban-giao",
		title: "Bàn giao phòng",
		copy: "Kiểm tra kỹ. Ghi nhận rõ ràng.",
		icon: KeyRound,
		image: "/assets/room.jpg",
		className: "hand",
		index: "03"
	}
];
function ArrowLink({ href, children, className = "" }) {
	return /* @__PURE__ */ jsxs("a", {
		className: "n7-link " + className,
		href,
		children: [children, /* @__PURE__ */ jsx(ArrowUpRight, { size: 19 })]
	});
}
function Title({ eyebrow, title, children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "n7-section-head",
		children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
			className: "n7-eyebrow",
			children: eyebrow
		}), /* @__PURE__ */ jsx("h2", { children: title })] }), children]
	});
}
function Ambassador() {
	const root = useRef(null), audio = useRef(null);
	const [paused, setPaused] = useState(false), [speaking, setSpeaking] = useState(false);
	useEffect(() => {
		const sound = audio.current;
		const observer = new IntersectionObserver(([entry]) => {
			root.current?.classList.toggle("n7-offscreen", !entry.isIntersecting);
			if (!entry.isIntersecting) sound?.pause();
		});
		observer.observe(root.current);
		return () => {
			observer.disconnect();
			sound?.pause();
		};
	}, []);
	async function greet() {
		if (speaking) {
			audio.current.pause();
			setSpeaking(false);
			return;
		}
		try {
			document.querySelectorAll("video").forEach((video) => video.pause());
			audio.current.currentTime = 0;
			await audio.current.play();
			setSpeaking(true);
		} catch {
			setSpeaking(false);
		}
	}
	return /* @__PURE__ */ jsxs("div", {
		ref: root,
		className: "n7-ambassador " + (paused ? "n7-paused" : ""),
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "n7-character-disc",
				"aria-hidden": "true",
				children: /* @__PURE__ */ jsx("span", { children: "CHUYỂN TRỌ · SỐNG XANH ·" })
			}),
			/* @__PURE__ */ jsx("img", {
				className: "n7-character",
				src: "/assets/boxanh-ambassador.png",
				width: "1024",
				height: "1536",
				fetchPriority: "high",
				alt: "Nhân vật minh họa BOXANH mặc đồng phục vận chuyển xanh, mỉm cười và cầm hộp bằng hai tay"
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "n7-speech",
				children: [
					/* @__PURE__ */ jsx("span", { children: "BOXANH CHÀO BẠN" }),
					/* @__PURE__ */ jsxs("p", { children: [
						"“Hãy đến và sử dụng",
						/* @__PURE__ */ jsx("br", {}),
						"dịch vụ của chúng tôi”"
					] }),
					/* @__PURE__ */ jsxs("button", {
						type: "button",
						onClick: greet,
						"aria-pressed": speaking,
						children: [/* @__PURE__ */ jsx(Volume2, { size: 15 }), speaking ? "Dừng lời chào" : "Nghe lời chào"]
					})
				]
			}),
			/* @__PURE__ */ jsx("span", {
				className: "n7-character-note",
				children: "Nhân vật minh họa thương hiệu"
			}),
			/* @__PURE__ */ jsx("button", {
				type: "button",
				className: "n7-motion-control",
				onClick: () => setPaused(!paused),
				"aria-label": paused ? "Tiếp tục chuyển động nhân vật" : "Tạm dừng chuyển động nhân vật",
				"aria-pressed": paused,
				children: paused ? /* @__PURE__ */ jsx(Play, { size: 14 }) : /* @__PURE__ */ jsx(Pause, { size: 14 })
			}),
			/* @__PURE__ */ jsx("audio", {
				ref: audio,
				src: "/assets/boxanh-loi-chao.mp3",
				preload: "none",
				onEnded: () => setSpeaking(false),
				onPause: () => setSpeaking(false)
			})
		]
	});
}
function TutorialVideo() {
	const ref = useRef(null), [playing, setPlaying] = useState(false), [error, setError] = useState("");
	useEffect(() => {
		const video = ref.current;
		return () => video.pause();
	}, []);
	async function play() {
		try {
			setError("");
			document.querySelectorAll("audio").forEach((a) => a.pause());
			await ref.current.play();
		} catch {
			setError("Chưa phát được video. Bạn có thể tải về để xem.");
		}
	}
	return /* @__PURE__ */ jsxs("div", {
		className: "n7-player",
		children: [
			/* @__PURE__ */ jsxs("video", {
				ref,
				controls: true,
				playsInline: true,
				preload: "none",
				poster: "/assets/boxanh-video-v10-poster.png",
				"aria-label": "Video hướng dẫn sử dụng website BOXANH",
				onPlaying: () => setPlaying(true),
				onPause: () => setPlaying(false),
				onEnded: () => setPlaying(false),
				children: [
					/* @__PURE__ */ jsx("source", {
						src: "/assets/boxanh-huong-dan-v10.mp4",
						type: "video/mp4"
					}),
					/* @__PURE__ */ jsx("track", {
						kind: "captions",
						src: "/assets/boxanh-huong-dan-v10.vtt",
						srcLang: "vi",
						label: "Tiếng Việt",
						default: true
					}),
					"Trình duyệt của bạn chưa hỗ trợ video. ",
					/* @__PURE__ */ jsx("a", {
						href: "/assets/boxanh-huong-dan-v10.mp4",
						download: true,
						children: "Tải video hướng dẫn"
					})
				]
			}),
			!playing && /* @__PURE__ */ jsx("button", {
				className: "n7-video-play",
				type: "button",
				onClick: play,
				"aria-label": "Phát video hướng dẫn BOXANH",
				children: /* @__PURE__ */ jsx(Play, {
					size: 22,
					fill: "currentColor"
				})
			}),
			error && /* @__PURE__ */ jsx("p", {
				className: "n7-video-error",
				role: "alert",
				children: error
			})
		]
	});
}
function Tutorial({ compact = false }) {
	return /* @__PURE__ */ jsxs("section", {
		id: "video-huong-dan",
		className: "n7-tutorial " + (compact ? "n7-tutorial-compact" : ""),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "n7-tutorial-copy",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "n7-eyebrow",
					children: "HƯỚNG DẪN NHANH CHO BẠN MỚI"
				}),
				/* @__PURE__ */ jsxs("h2", { children: [
					"Một vòng BOXANH.",
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("em", { children: "Biết ngay cách dùng." })
				] }),
				/* @__PURE__ */ jsx("p", { children: "Xem cách chọn dịch vụ, gửi yêu cầu, xử lý đồ thừa và tra cứu tiến độ." }),
				/* @__PURE__ */ jsx(ArrowLink, {
					href: compact ? "/huong-dan" : "/dat-lich",
					children: compact ? "Mở trung tâm hướng dẫn" : "Thử đặt dịch vụ"
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "n7-video-wrap",
			children: [/* @__PURE__ */ jsx(TutorialVideo, {}), /* @__PURE__ */ jsxs("div", {
				className: "n7-video-caption",
				children: [/* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx(Play, { size: 14 }), " Hướng dẫn bằng các màn hình thực tế"] }), /* @__PURE__ */ jsxs("a", {
					href: "/assets/boxanh-huong-dan-v10.mp4",
					download: true,
					children: ["Tải video ", /* @__PURE__ */ jsx(ArrowUpRight, { size: 14 })]
				})]
			})]
		})]
	});
}
function PortalHome({ config: c }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "portal-home n7-home",
		"data-portal-home": true,
		children: [
			/* @__PURE__ */ jsxs("section", {
				className: "n7-home-hero",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "n7-wrap n7-hero-grid",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "n7-hero-copy",
						children: [
							/* @__PURE__ */ jsxs("p", {
								className: "n7-eyebrow",
								children: [
									/* @__PURE__ */ jsx("span", { className: "n7-dot" }),
									" KHỞI ĐẦU TẠI ",
									c.area.toUpperCase()
								]
							}),
							/* @__PURE__ */ jsxs("h1", { children: [
								"Chuyển nơi ở.",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsxs("span", { children: ["Nhẹ cả ", /* @__PURE__ */ jsx("em", { children: "hành trình." })] })
							] }),
							/* @__PURE__ */ jsxs("p", {
								className: "n7-hero-description",
								children: [
									"Chuyển đồ, dọn phòng, bàn giao.",
									/* @__PURE__ */ jsx("br", {}),
									"Một đầu mối. Hộp dùng lại. Chi phí rõ ràng."
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "n7-hero-actions",
								children: [/* @__PURE__ */ jsx(ArrowLink, {
									href: "/uoc-tinh",
									className: "n7-primary",
									children: "Ước tính & nhận báo giá"
								}), /* @__PURE__ */ jsxs("a", {
									href: "#dich-vu",
									className: "n7-explore",
									children: ["Khám phá dịch vụ ", /* @__PURE__ */ jsx(ArrowRight, { size: 18 })]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "n7-hero-assurances",
								children: [/* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx(CheckCheck, { size: 17 }), " Khảo sát trước khi chốt"] }), /* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx(Recycle, { size: 17 }), " Thu hồi hộp để dùng tiếp"] })]
							})
						]
					}), /* @__PURE__ */ jsx(Ambassador, {})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "n7-hero-bottom n7-wrap",
					children: [
						/* @__PURE__ */ jsx("span", { children: "CHUYỂN TRỌ. SỐNG XANH." }),
						/* @__PURE__ */ jsxs("a", {
							href: "/ve-boxanh",
							children: ["Câu chuyện BOXANH ", /* @__PURE__ */ jsx(ArrowUpRight, { size: 16 })]
						}),
						/* @__PURE__ */ jsxs("span", {
							className: "n7-hero-location",
							children: [/* @__PURE__ */ jsx(MapPin, { size: 15 }), " Vinh, Nghệ An"]
						})
					]
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "n7-wrap n7-home-services",
				id: "dich-vu",
				children: [
					/* @__PURE__ */ jsx(Title, {
						eyebrow: "BẠN CẦN LÀM GÌ?",
						title: "Chọn việc. BOXANH lo tiếp.",
						children: /* @__PURE__ */ jsx(ArrowLink, {
							href: "/dich-vu",
							children: "Tất cả dịch vụ & bảng giá"
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "n7-service-grid",
						children: entries.map(({ icon: Icon, ...entry }) => /* @__PURE__ */ jsxs("a", {
							href: entry.href,
							className: "n7-service-card n7-" + entry.className,
							children: [/* @__PURE__ */ jsxs("div", {
								className: "n7-service-image",
								children: [
									/* @__PURE__ */ jsx("img", {
										src: entry.image,
										alt: "",
										width: "1200",
										height: "800",
										loading: "lazy"
									}),
									/* @__PURE__ */ jsx("span", {
										className: "n7-service-number",
										children: entry.index
									}),
									/* @__PURE__ */ jsx("span", {
										className: "n7-card-arrow",
										children: /* @__PURE__ */ jsx(ArrowUpRight, { size: 23 })
									})
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "n7-service-card-copy",
								children: [
									/* @__PURE__ */ jsx(Icon, { size: 22 }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", { children: entry.title }), /* @__PURE__ */ jsx("p", { children: entry.copy })] }),
									/* @__PURE__ */ jsxs("span", {
										className: "n7-open-label",
										children: ["Khám phá ", /* @__PURE__ */ jsx(ArrowRight, { size: 15 })]
									})
								]
							})]
						}, entry.href))
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "n7-click-hint",
						children: [/* @__PURE__ */ jsx(ArrowUpRight, { size: 15 }), " Bấm vào từng thẻ để mở trang riêng · Ảnh phòng và dịch vụ mang tính tham khảo"]
					})
				]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "n7-features-zone",
				children: /* @__PURE__ */ jsx("div", {
					className: "n7-wrap n7-features-grid",
					children: [
						[
							Package,
							"/hop-tai-su-dung",
							"Hộp dùng lại",
							"Giao hộp trước. Thu hồi sau."
						],
						[
							Recycle,
							"/song-xanh",
							"Đồ thừa, giá trị mới",
							"Thu mua · Ký gửi · Phân loại"
						],
						[
							ScanLine,
							"/tra-cuu",
							"Tra cứu hành trình",
							"Mã yêu cầu + số điện thoại"
						],
						[
							BookOpen,
							"/huong-dan",
							"Chuẩn bị thật gọn",
							"Chuẩn bị, quy trình & giải đáp"
						]
					].map(([Icon, href, title, desc]) => /* @__PURE__ */ jsxs("a", {
						className: "n7-feature-link",
						href,
						children: [
							/* @__PURE__ */ jsx(Icon, { size: 26 }),
							/* @__PURE__ */ jsx("h3", { children: title }),
							/* @__PURE__ */ jsx("p", { children: desc }),
							/* @__PURE__ */ jsxs("span", { children: ["Mở chi tiết ", /* @__PURE__ */ jsx(ArrowUpRight, { size: 17 })] })
						]
					}, href))
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "n7-wrap",
				children: /* @__PURE__ */ jsx(Tutorial, { compact: true })
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "n7-wrap n7-home-end",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", { children: "Căn phòng mới đang chờ." }), /* @__PURE__ */ jsx("p", { children: "Gửi nhu cầu của bạn. Cùng thống nhất một kế hoạch phù hợp." })] }), /* @__PURE__ */ jsx(ArrowLink, {
					href: "/dat-lich",
					className: "n7-primary",
					children: "Bắt đầu với BOXANH"
				})]
			})
		]
	});
}
var detailTitles = {
	"/tro-ly-ai": "Bơ · Trợ lý BOXANH",
	"/chuyen-tro": "Chuyển trọ",
	"/don-phong": "Dọn phòng",
	"/ban-giao": "Bàn giao phòng",
	"/hop-tai-su-dung": "Hộp tái sử dụng",
	"/song-xanh": "Đồ thừa & sống xanh",
	"/huong-dan": "Trung tâm hướng dẫn",
	"/uoc-tinh": "Ước tính dịch vụ"
};
function Related({ exclude }) {
	return /* @__PURE__ */ jsxs("section", {
		className: "n7-wrap n7-related",
		children: [/* @__PURE__ */ jsx(Title, {
			eyebrow: "TIẾP TỤC KHÁM PHÁ",
			title: "Cùng một hành trình."
		}), /* @__PURE__ */ jsxs("div", { children: [
			entries.filter((e) => e.href !== exclude).map((e) => /* @__PURE__ */ jsx(ArrowLink, {
				href: e.href,
				children: e.title
			}, e.href)),
			/* @__PURE__ */ jsx(ArrowLink, {
				href: "/hop-tai-su-dung",
				children: "Hộp tái sử dụng"
			}),
			/* @__PURE__ */ jsx(ArrowLink, {
				href: "/song-xanh",
				children: "Xử lý đồ thừa"
			})
		] })]
	});
}
function Checklist() {
	const labels = [
		"Chốt ngày chuyển và báo chủ trọ",
		"Tách đồ mang đi, đồ còn giá trị và đồ hỏng",
		"Giữ riêng giấy tờ, đồ quý và đồ dùng trong ngày",
		"Chụp hiện trạng đồ cần lưu ý",
		"Ghi nhóm đồ và kiểm đếm từng hộp",
		"Sắp xếp lối đi, thang máy và điểm đỗ xe"
	];
	const [checked, setChecked] = useState([]);
	useEffect(() => {
		try {
			setChecked(JSON.parse(localStorage.getItem("boxanh-preparation-v7") || "[]"));
		} catch {}
	}, []);
	function toggle(i) {
		const next = checked.includes(i) ? checked.filter((v) => v !== i) : [...checked, i];
		setChecked(next);
		try {
			localStorage.setItem("boxanh-preparation-v7", JSON.stringify(next));
		} catch {}
	}
	return /* @__PURE__ */ jsxs("section", {
		className: "n7-checklist",
		id: "checklist",
		children: [/* @__PURE__ */ jsxs("div", { children: [
			/* @__PURE__ */ jsx("p", {
				className: "n7-eyebrow",
				children: "DANH SÁCH CỦA BẠN"
			}),
			/* @__PURE__ */ jsxs("h2", { children: [
				"Chuẩn bị từng chút.",
				/* @__PURE__ */ jsx("br", {}),
				/* @__PURE__ */ jsx("em", { children: "Ngày chuyển nhẹ hơn." })
			] }),
			/* @__PURE__ */ jsx("p", { children: "Đánh dấu việc đã làm trên thiết bị này." }),
			/* @__PURE__ */ jsxs("span", {
				className: "n7-checklist-progress",
				role: "status",
				children: [
					checked.length,
					" / ",
					labels.length,
					" việc đã xong"
				]
			})
		] }), /* @__PURE__ */ jsx("div", { children: labels.map((t, i) => /* @__PURE__ */ jsxs("label", { children: [/* @__PURE__ */ jsx("input", {
			type: "checkbox",
			checked: checked.includes(i),
			onChange: () => toggle(i)
		}), /* @__PURE__ */ jsx("span", { children: t })] }, t)) })]
	});
}
function PortalDetail({ route, config: c, onQuote }) {
	const root = useRef(null);
	useEffect(() => {
		if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const elements = [...root.current.querySelectorAll("[data-bx-reveal]")];
		const obs = new IntersectionObserver((entries) => entries.forEach((e) => {
			if (e.isIntersecting) {
				e.target.classList.add("bx-visible");
				obs.unobserve(e.target);
			}
		}), { threshold: .06 });
		elements.forEach((e) => {
			e.classList.add("bx-enter");
			obs.observe(e);
		});
		return () => obs.disconnect();
	}, [route]);
	let content;
	if (route === "/tro-ly-ai") content = /* @__PURE__ */ jsx(AssistantPage, {
		config: c,
		onQuote
	});
	if (route === "/chuyen-tro") content = /* @__PURE__ */ jsx(MovingScene, {
		c,
		onQuote
	});
	if (route === "/don-phong") content = /* @__PURE__ */ jsx(CleaningScene, {});
	if (route === "/ban-giao") content = /* @__PURE__ */ jsx(HandoverScene, {});
	if (route === "/hop-tai-su-dung") content = /* @__PURE__ */ jsx(BoxesScene, {});
	if (route === "/song-xanh") content = /* @__PURE__ */ jsx(GreenScene, {});
	if (route === "/huong-dan") content = /* @__PURE__ */ jsx(GuideScene, {
		c,
		video: /* @__PURE__ */ jsx(Tutorial, {}),
		checklist: /* @__PURE__ */ jsx(Checklist, {})
	});
	if (route === "/uoc-tinh") content = /* @__PURE__ */ jsx(QuoteScene, {
		c,
		onQuote
	});
	return /* @__PURE__ */ jsxs("div", {
		ref: root,
		className: route === "/tro-ly-ai" ? "bo-route-root" : "portal-home n7-detail n7-route-" + route.slice(1),
		"data-portal-detail": route,
		children: [content, route !== "/tro-ly-ai" && /* @__PURE__ */ jsx(Related, { exclude: route })]
	});
}
//#endregion
//#region src/portal-server.jsx
function renderHomeAssistant() {
	return renderToString(/* @__PURE__ */ jsx(AIHomeInvite, {}), { identifierPrefix: "boxanh-invite-" });
}
function renderPortalHome(config) {
	return renderToString(/* @__PURE__ */ jsx(PortalHome, { config }), { identifierPrefix: "boxanh-home-" });
}
function renderPortalDetail(route, config) {
	return renderToString(/* @__PURE__ */ jsx(PortalDetail, {
		route,
		config
	}), { identifierPrefix: "boxanh-detail-" });
}
//#endregion
export { detailTitles, renderHomeAssistant, renderPortalDetail, renderPortalHome };
