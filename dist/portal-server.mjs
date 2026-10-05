import { useEffect, useRef, useState } from "react";
import { renderToString } from "react-dom/server";
import { ArrowRight, ArrowUpRight, BookOpen, Camera, Check, CheckCheck, ChevronDownIcon, ChevronRight, ClipboardCheck, KeyRound, MapPin, Package, Pause, Phone, Play, Plus, Recycle, RotateCcw, ScanLine, ShieldCheck, Sparkles, Truck, Volume2, XIcon } from "lucide-react";
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
		className: "portal-home n7-detail n7-route-" + route.slice(1),
		"data-portal-detail": route,
		children: [content, /* @__PURE__ */ jsx(Related, { exclude: route })]
	});
}
//#endregion
//#region src/portal-server.jsx
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
export { detailTitles, renderPortalDetail, renderPortalHome };
