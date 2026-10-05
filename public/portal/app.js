//#region \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), s = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, c = (n, r, o) => (o = n == null ? {} : e(i(n)), s(r || !n || !n.__esModule || !a.call(n, "default") ? t(o, "default", {
	value: n,
	enumerable: !0
}) : o, n)), l = /* @__PURE__ */ o(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), f = Symbol.for("react.activity"), p = Symbol.for("react.view_transition"), m = Symbol.iterator;
	function h(e) {
		return typeof e != "object" || !e ? null : (e = m && e[m] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var g = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	}, _ = Object.assign, v = {};
	function y(e, t, n) {
		this.props = e, this.context = t, this.refs = v, this.updater = n || g;
	}
	y.prototype.isReactComponent = {}, y.prototype.setState = function(e, t) {
		if (typeof e != "object" && typeof e != "function" && e != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, e, t, "setState");
	}, y.prototype.forceUpdate = function(e) {
		this.updater.enqueueForceUpdate(this, e, "forceUpdate");
	};
	function b() {}
	b.prototype = y.prototype;
	function x(e, t, n) {
		this.props = e, this.context = t, this.refs = v, this.updater = n || g;
	}
	var S = x.prototype = new b();
	S.constructor = x, _(S, y.prototype), S.isPureReactComponent = !0;
	var C = Array.isArray;
	function w() {}
	var T = {
		H: null,
		A: null,
		T: null,
		S: null
	}, ee = Object.prototype.hasOwnProperty;
	function E(e, n, r) {
		var i = r.ref;
		return {
			$$typeof: t,
			type: e,
			key: n,
			ref: i === void 0 ? null : i,
			props: r
		};
	}
	function te(e, t) {
		return E(e.type, t, e.props);
	}
	function ne(e) {
		return typeof e == "object" && !!e && e.$$typeof === t;
	}
	function re(e) {
		var t = {
			"=": "=0",
			":": "=2"
		};
		return "$" + e.replace(/[=:]/g, function(e) {
			return t[e];
		});
	}
	var D = /\/+/g;
	function ie(e, t) {
		return typeof e == "object" && e && e.key != null ? re("" + e.key) : t.toString(36);
	}
	function ae(e) {
		switch (e.status) {
			case "fulfilled": return e.value;
			case "rejected": throw e.reason;
			default: switch (typeof e.status == "string" ? e.then(w, w) : (e.status = "pending", e.then(function(t) {
				e.status === "pending" && (e.status = "fulfilled", e.value = t);
			}, function(t) {
				e.status === "pending" && (e.status = "rejected", e.reason = t);
			})), e.status) {
				case "fulfilled": return e.value;
				case "rejected": throw e.reason;
			}
		}
		throw e;
	}
	function oe(e, r, i, a, o) {
		var s = typeof e;
		(s === "undefined" || s === "boolean") && (e = null);
		var c = !1;
		if (e === null) c = !0;
		else switch (s) {
			case "bigint":
			case "string":
			case "number":
				c = !0;
				break;
			case "object": switch (e.$$typeof) {
				case t:
				case n:
					c = !0;
					break;
				case d: return c = e._init, oe(c(e._payload), r, i, a, o);
			}
		}
		if (c) return o = o(e), c = a === "" ? "." + ie(e, 0) : a, C(o) ? (i = "", c != null && (i = c.replace(D, "$&/") + "/"), oe(o, r, i, "", function(e) {
			return e;
		})) : o != null && (ne(o) && (o = te(o, i + (o.key == null || e && e.key === o.key ? "" : ("" + o.key).replace(D, "$&/") + "/") + c)), r.push(o)), 1;
		c = 0;
		var l = a === "" ? "." : a + ":";
		if (C(e)) for (var u = 0; u < e.length; u++) a = e[u], s = l + ie(a, u), c += oe(a, r, i, s, o);
		else if (u = h(e), typeof u == "function") for (e = u.call(e), u = 0; !(a = e.next()).done;) a = a.value, s = l + ie(a, u++), c += oe(a, r, i, s, o);
		else if (s === "object") {
			if (typeof e.then == "function") return oe(ae(e), r, i, a, o);
			throw r = String(e), Error("Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.");
		}
		return c;
	}
	function O(e, t, n) {
		if (e == null) return e;
		var r = [], i = 0;
		return oe(e, r, "", "", function(e) {
			return t.call(n, e, i++);
		}), r;
	}
	function k(e) {
		if (e._status === -1) {
			var t = e._result, n = t();
			n.then(function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 1, e._result = t, n.status === void 0 && (n.status = "fulfilled", n.value = t));
			}, function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 2, e._result = t, n.status === void 0 && (n.status = "rejected", n.reason = t));
			}), e._status === -1 && (e._status = 0, e._result = n);
		}
		if (e._status === 1) return e._result.default;
		throw e._result;
	}
	var A = typeof reportError == "function" ? reportError : function(e) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var t = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(t)) return;
		} else if (typeof process == "object" && typeof process.emit == "function") {
			process.emit("uncaughtException", e);
			return;
		}
		console.error(e);
	};
	function se(e) {
		var t = T.T, n = {};
		n.types = t === null ? null : t.types, T.T = n;
		try {
			var r = e(), i = T.S;
			i !== null && i(n, r), typeof r == "object" && r && typeof r.then == "function" && r.then(w, A);
		} catch (e) {
			A(e);
		} finally {
			t !== null && n.types !== null && (t.types = n.types), T.T = t;
		}
	}
	function ce(e) {
		var t = T.T;
		if (t !== null) {
			var n = t.types;
			n === null ? t.types = [e] : n.indexOf(e) === -1 && n.push(e);
		} else se(ce.bind(null, e));
	}
	var le = {
		map: O,
		forEach: function(e, t, n) {
			O(e, function() {
				t.apply(this, arguments);
			}, n);
		},
		count: function(e) {
			var t = 0;
			return O(e, function() {
				t++;
			}), t;
		},
		toArray: function(e) {
			return O(e, function(e) {
				return e;
			}) || [];
		},
		only: function(e) {
			if (!ne(e)) throw Error("React.Children.only expected to receive a single React element child.");
			return e;
		}
	};
	e.Activity = f, e.Children = le, e.Component = y, e.Fragment = r, e.Profiler = a, e.PureComponent = x, e.StrictMode = i, e.Suspense = l, e.ViewTransition = p, e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T, e.__COMPILER_RUNTIME = {
		__proto__: null,
		c: function(e) {
			return T.H.useMemoCache(e);
		}
	}, e.addTransitionType = ce, e.cache = function(e) {
		return function() {
			return e.apply(null, arguments);
		};
	}, e.cacheSignal = function() {
		return null;
	}, e.cloneElement = function(e, t, n) {
		if (e == null) throw Error("The argument must be a React element, but you passed " + e + ".");
		var r = _({}, e.props), i = e.key;
		if (t != null) for (a in t.key !== void 0 && (i = "" + t.key), t) !ee.call(t, a) || a === "key" || a === "__self" || a === "__source" || a === "ref" && t.ref === void 0 || (r[a] = t[a]);
		var a = arguments.length - 2;
		if (a === 1) r.children = n;
		else if (1 < a) {
			for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
			r.children = o;
		}
		return E(e.type, i, r);
	}, e.createContext = function(e) {
		return e = {
			$$typeof: s,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null
		}, e.Provider = e, e.Consumer = {
			$$typeof: o,
			_context: e
		}, e;
	}, e.createElement = function(e, t, n) {
		var r, i = {}, a = null;
		if (t != null) for (r in t.key !== void 0 && (a = "" + t.key), t) ee.call(t, r) && r !== "key" && r !== "__self" && r !== "__source" && (i[r] = t[r]);
		var o = arguments.length - 2;
		if (o === 1) i.children = n;
		else if (1 < o) {
			for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
			i.children = s;
		}
		if (e && e.defaultProps) for (r in o = e.defaultProps, o) i[r] === void 0 && (i[r] = o[r]);
		return E(e, a, i);
	}, e.createRef = function() {
		return { current: null };
	}, e.forwardRef = function(e) {
		return {
			$$typeof: c,
			render: e
		};
	}, e.isValidElement = ne, e.lazy = function(e) {
		return {
			$$typeof: d,
			_payload: {
				_status: -1,
				_result: e
			},
			_init: k
		};
	}, e.memo = function(e, t) {
		return {
			$$typeof: u,
			type: e,
			compare: t === void 0 ? null : t
		};
	}, e.startTransition = se, e.unstable_useCacheRefresh = function() {
		return T.H.useCacheRefresh();
	}, e.use = function(e) {
		return T.H.use(e);
	}, e.useActionState = function(e, t, n) {
		return T.H.useActionState(e, t, n);
	}, e.useCallback = function(e, t) {
		return T.H.useCallback(e, t);
	}, e.useContext = function(e) {
		return T.H.useContext(e);
	}, e.useDebugValue = function() {}, e.useDeferredValue = function(e, t) {
		return T.H.useDeferredValue(e, t);
	}, e.useEffect = function(e, t) {
		return T.H.useEffect(e, t);
	}, e.useEffectEvent = function(e) {
		return T.H.useEffectEvent(e);
	}, e.useId = function() {
		return T.H.useId();
	}, e.useImperativeHandle = function(e, t, n) {
		return T.H.useImperativeHandle(e, t, n);
	}, e.useInsertionEffect = function(e, t) {
		return T.H.useInsertionEffect(e, t);
	}, e.useLayoutEffect = function(e, t) {
		return T.H.useLayoutEffect(e, t);
	}, e.useMemo = function(e, t) {
		return T.H.useMemo(e, t);
	}, e.useOptimistic = function(e, t) {
		return T.H.useOptimistic(e, t);
	}, e.useReducer = function(e, t, n) {
		return T.H.useReducer(e, t, n);
	}, e.useRef = function(e) {
		return T.H.useRef(e);
	}, e.useState = function(e) {
		return T.H.useState(e);
	}, e.useSyncExternalStore = function(e, t, n) {
		return T.H.useSyncExternalStore(e, t, n);
	}, e.useTransition = function() {
		return T.H.useTransition();
	}, e.version = "19.3.0";
})), u = /* @__PURE__ */ o(((e, t) => {
	t.exports = l();
})), d = /* @__PURE__ */ o(((e) => {
	function t(e, t) {
		var n = e.length;
		e.push(t);
		a: for (; 0 < n;) {
			var r = n - 1 >>> 1, a = e[r];
			if (0 < i(a, t)) e[r] = t, e[n] = a, n = r;
			else break a;
		}
	}
	function n(e) {
		return e.length === 0 ? null : e[0];
	}
	function r(e) {
		if (e.length === 0) return null;
		var t = e[0], n = e.pop();
		if (n !== t) {
			e[0] = n;
			a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
				var s = 2 * (r + 1) - 1, c = e[s], l = s + 1, u = e[l];
				if (0 > i(c, n)) l < a && 0 > i(u, c) ? (e[r] = u, e[l] = n, r = l) : (e[r] = c, e[s] = n, r = s);
				else if (l < a && 0 > i(u, n)) e[r] = u, e[l] = n, r = l;
				else break a;
			}
		}
		return t;
	}
	function i(e, t) {
		var n = e.sortIndex - t.sortIndex;
		return n === 0 ? e.id - t.id : n;
	}
	if (e.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
		var a = performance;
		e.unstable_now = function() {
			return a.now();
		};
	} else {
		var o = Date, s = o.now();
		e.unstable_now = function() {
			return o.now() - s;
		};
	}
	var c = [], l = [], u = 1, d = null, f = 3, p = !1, m = !1, h = !1, g = !1, _ = typeof setTimeout == "function" ? setTimeout : null, v = typeof clearTimeout == "function" ? clearTimeout : null, y = typeof setImmediate < "u" ? setImmediate : null;
	function b(e) {
		for (var i = n(l); i !== null;) {
			if (i.callback === null) r(l);
			else if (i.startTime <= e) r(l), i.sortIndex = i.expirationTime, t(c, i);
			else break;
			i = n(l);
		}
	}
	function x(e) {
		if (h = !1, b(e), !m) {
			if (n(c) !== null) m = !0, S || (S = !0, te());
			else {
				var t = n(l);
				t !== null && D(x, t.startTime - e);
			}
		}
	}
	var S = !1, C = -1, w = 5, T = -1;
	function ee() {
		return g ? !0 : !(e.unstable_now() - T < w);
	}
	function E() {
		if (g = !1, S) {
			var t = e.unstable_now();
			T = t;
			var i = !0;
			try {
				a: {
					m = !1, h && (h = !1, v(C), C = -1), p = !0;
					var a = f;
					try {
						b: {
							for (b(t), d = n(c); d !== null && !(d.expirationTime > t && ee());) {
								var o = d.callback;
								if (typeof o == "function") {
									d.callback = null, f = d.priorityLevel;
									var s = o(d.expirationTime <= t);
									if (t = e.unstable_now(), typeof s == "function") {
										d.callback = s, b(t), i = !0;
										break b;
									}
									d === n(c) && r(c), b(t);
								} else r(c);
								d = n(c);
							}
							if (d !== null) i = !0;
							else {
								var u = n(l);
								u !== null && D(x, u.startTime - t), i = !1;
							}
						}
						break a;
					} finally {
						d = null, f = a, p = !1;
					}
					i = void 0;
				}
			} finally {
				i ? te() : S = !1;
			}
		}
	}
	var te;
	if (typeof y == "function") te = function() {
		y(E);
	};
	else if (typeof MessageChannel < "u") {
		var ne = new MessageChannel(), re = ne.port2;
		ne.port1.onmessage = E, te = function() {
			re.postMessage(null);
		};
	} else te = function() {
		_(E, 0);
	};
	function D(t, n) {
		C = _(function() {
			t(e.unstable_now());
		}, n);
	}
	e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(e) {
		e.callback = null;
	}, e.unstable_forceFrameRate = function(e) {
		0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : w = 0 < e ? Math.floor(1e3 / e) : 5;
	}, e.unstable_getCurrentPriorityLevel = function() {
		return f;
	}, e.unstable_next = function(e) {
		switch (f) {
			case 1:
			case 2:
			case 3:
				var t = 3;
				break;
			default: t = f;
		}
		var n = f;
		f = t;
		try {
			return e();
		} finally {
			f = n;
		}
	}, e.unstable_requestPaint = function() {
		g = !0;
	}, e.unstable_runWithPriority = function(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: break;
			default: e = 3;
		}
		var n = f;
		f = e;
		try {
			return t();
		} finally {
			f = n;
		}
	}, e.unstable_scheduleCallback = function(r, i, a) {
		var o = e.unstable_now();
		switch (typeof a == "object" && a ? (a = a.delay, a = typeof a == "number" && 0 < a ? o + a : o) : a = o, r) {
			case 1:
				var s = -1;
				break;
			case 2:
				s = 250;
				break;
			case 5:
				s = 1073741823;
				break;
			case 4:
				s = 1e4;
				break;
			default: s = 5e3;
		}
		return s = a + s, r = {
			id: u++,
			callback: i,
			priorityLevel: r,
			startTime: a,
			expirationTime: s,
			sortIndex: -1
		}, a > o ? (r.sortIndex = a, t(l, r), n(c) === null && r === n(l) && (h ? (v(C), C = -1) : h = !0, D(x, a - o))) : (r.sortIndex = s, t(c, r), m || p || (m = !0, S || (S = !0, te()))), r;
	}, e.unstable_shouldYield = ee, e.unstable_wrapCallback = function(e) {
		var t = f;
		return function() {
			var n = f;
			f = t;
			try {
				return e.apply(this, arguments);
			} finally {
				f = n;
			}
		};
	};
})), f = /* @__PURE__ */ o(((e, t) => {
	t.exports = d();
})), p = /* @__PURE__ */ o(((e) => {
	var t = u();
	function n(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function r() {}
	var i = {
		d: {
			f: r,
			r: function() {
				throw Error(n(522));
			},
			D: r,
			C: r,
			L: r,
			m: r,
			X: r,
			S: r,
			M: r
		},
		p: 0,
		findDOMNode: null
	}, a = Symbol.for("react.portal"), o = Symbol.for("react.recoverable"), s = Symbol.for("react.optimistic_key");
	function c(e, t, n) {
		var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: a,
			key: r == null ? null : r === s ? s : "" + r,
			children: e,
			containerInfo: t,
			implementation: n
		};
	}
	var l = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function d(e, t) {
		if (e === "font") return "";
		if (typeof t == "string") return t === "use-credentials" ? t : "";
	}
	e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, e.browser = function(e) {
		return {
			$$typeof: o,
			_reason: e
		};
	}, e.createPortal = function(e, t) {
		var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
		if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11) throw Error(n(299));
		return c(e, t, null, r);
	}, e.flushSync = function(e) {
		var t = l.T, n = i.p;
		try {
			if (l.T = null, i.p = 2, e) return e();
		} finally {
			l.T = t, i.p = n, i.d.f();
		}
	}, e.preconnect = function(e, t) {
		typeof e == "string" && (t ? (t = t.crossOrigin, t = typeof t == "string" ? t === "use-credentials" ? t : "" : void 0) : t = null, i.d.C(e, t));
	}, e.prefetchDNS = function(e) {
		typeof e == "string" && i.d.D(e);
	}, e.preinit = function(e, t) {
		if (typeof e == "string" && t && typeof t.as == "string") {
			var n = t.as, r = d(n, t.crossOrigin), a = typeof t.integrity == "string" ? t.integrity : void 0, o = typeof t.fetchPriority == "string" ? t.fetchPriority : void 0;
			n === "style" ? i.d.S(e, typeof t.precedence == "string" ? t.precedence : void 0, {
				crossOrigin: r,
				integrity: a,
				fetchPriority: o
			}) : n === "script" && i.d.X(e, {
				crossOrigin: r,
				integrity: a,
				fetchPriority: o,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0
			});
		}
	}, e.preinitModule = function(e, t) {
		if (typeof e == "string") {
			if (typeof t == "object" && t) {
				if (t.as == null || t.as === "script") {
					var n = d(t.as, t.crossOrigin);
					i.d.M(e, {
						crossOrigin: n,
						integrity: typeof t.integrity == "string" ? t.integrity : void 0,
						nonce: typeof t.nonce == "string" ? t.nonce : void 0,
						fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0
					});
				}
			} else t ?? i.d.M(e);
		}
	}, e.preload = function(e, t) {
		if (typeof e == "string" && typeof t == "object" && t && typeof t.as == "string") {
			var n = t.as, r = d(n, t.crossOrigin);
			i.d.L(e, n, {
				crossOrigin: r,
				integrity: typeof t.integrity == "string" ? t.integrity : void 0,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0,
				type: typeof t.type == "string" ? t.type : void 0,
				fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0,
				referrerPolicy: typeof t.referrerPolicy == "string" ? t.referrerPolicy : void 0,
				imageSrcSet: typeof t.imageSrcSet == "string" ? t.imageSrcSet : void 0,
				imageSizes: typeof t.imageSizes == "string" ? t.imageSizes : void 0,
				media: typeof t.media == "string" ? t.media : void 0
			});
		}
	}, e.preloadModule = function(e, t) {
		if (typeof e == "string") {
			if (t) {
				var n = d(t.as, t.crossOrigin);
				i.d.m(e, {
					as: typeof t.as == "string" && t.as !== "script" ? t.as : void 0,
					crossOrigin: n,
					integrity: typeof t.integrity == "string" ? t.integrity : void 0,
					nonce: typeof t.nonce == "string" ? t.nonce : void 0,
					fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0
				});
			} else i.d.m(e);
		}
	}, e.requestFormReset = function(e) {
		i.d.r(e);
	}, e.unstable_batchedUpdates = function(e, t) {
		return e(t);
	}, e.useFormState = function(e, t, n) {
		return l.H.useFormState(e, t, n);
	}, e.useFormStatus = function() {
		return l.H.useHostTransitionStatus();
	}, e.version = "19.3.0";
})), m = /* @__PURE__ */ o(((e, t) => {
	function n() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function") try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = p();
})), h = /* @__PURE__ */ o(((e) => {
	var t = f(), n = u(), r = m();
	function i(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function a(e) {
		return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
	}
	function o(e) {
		for (var t = e, n = t; n && !n.alternate;) t = n, t.flags & 4098 && (e = t.return), n = t.return;
		for (; t.return;) t = t.return;
		return t.tag === 3 ? e : null;
	}
	function s(e) {
		if (e.tag === 13) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function c(e) {
		if (e.tag === 31) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function l(e) {
		if (o(e) !== e) throw Error(i(188));
	}
	function d(e) {
		var t = e.alternate;
		if (!t) {
			if (t = o(e), t === null) throw Error(i(188));
			return t === e ? e : null;
		}
		for (var n = e, r = t;;) {
			var a = n.return;
			if (a === null) break;
			var s = a.alternate;
			if (s === null) {
				if (r = a.return, r !== null) {
					n = r;
					continue;
				}
				break;
			}
			if (a.child === s.child) {
				for (s = a.child; s;) {
					if (s === n) return l(a), e;
					if (s === r) return l(a), t;
					s = s.sibling;
				}
				throw Error(i(188));
			}
			if (n.return !== r.return) n = a, r = s;
			else {
				for (var c = !1, u = a.child; u;) {
					if (u === n) {
						c = !0, n = a, r = s;
						break;
					}
					if (u === r) {
						c = !0, r = a, n = s;
						break;
					}
					u = u.sibling;
				}
				if (!c) {
					for (u = s.child; u;) {
						if (u === n) {
							c = !0, n = s, r = a;
							break;
						}
						if (u === r) {
							c = !0, r = s, n = a;
							break;
						}
						u = u.sibling;
					}
					if (!c) throw Error(i(189));
				}
			}
			if (n.alternate !== r) throw Error(i(190));
		}
		if (n.tag !== 3) throw Error(i(188));
		return n.stateNode.current === n ? e : t;
	}
	function p(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e;
		for (e = e.child; e !== null;) {
			if (t = p(e), t !== null) return t;
			e = e.sibling;
		}
		return null;
	}
	function h(e, t, n, r, i, a) {
		for (; e !== null;) {
			if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && n(e, r, i, a) || (e.tag !== 22 || e.memoizedState === null) && (t || e.tag !== 5 && e.tag !== 27) && h(e.child, t, n, r, i, a)) return !0;
			e = e.sibling;
		}
		return !1;
	}
	function g(e) {
		for (e = e.return; e !== null;) {
			if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
			e = e.return;
		}
		return null;
	}
	function _(e) {
		var t = !1;
		for (e = e.return; e !== null && (e.tag === 4 && (t = !0), e.tag !== 3 && e.tag !== 5 && e.tag !== 27);) e = e.return;
		return t;
	}
	function v(e) {
		var t = [null, null], n = g(e);
		return n === null || y(t, e, n.child, { foundSelf: !1 }), t;
	}
	function y(e, t, n, r) {
		for (; n !== null;) {
			if (n === t) r.foundSelf = !0;
			else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
				if (r.foundSelf) return e[1] = n, !0;
				e[0] = n;
			} else if ((n.tag !== 22 || n.memoizedState === null) && y(e, t, n.child, r)) return !0;
			n = n.sibling;
		}
		return !1;
	}
	function b(e) {
		switch (e.tag) {
			case 5:
			case 27:
			case 6: return e.stateNode;
			case 3: return e.stateNode.containerInfo;
			default: throw Error(i(559));
		}
	}
	var x = null, S = null;
	function C(e, t, n) {
		return e === n || e === t && (x = e, !0);
	}
	function w(e, t, n) {
		return e === n ? (S = e, !1) : e === t && (S !== null && (x = e), !0);
	}
	function T(e) {
		if (e === null) return null;
		do
			e = e === null ? null : e.return;
		while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
		return e || null;
	}
	function ee(e, t, n) {
		for (var r = 0, i = e; i; i = n(i)) r++;
		i = 0;
		for (var a = t; a; a = n(a)) i++;
		for (; 0 < r - i;) e = n(e), r--;
		for (; 0 < i - r;) t = n(t), i--;
		for (; r--;) {
			if (e === t || t !== null && e === t.alternate) return e;
			e = n(e), t = n(t);
		}
		return null;
	}
	var E = Object.assign, te = Symbol.for("react.element"), ne = Symbol.for("react.transitional.element"), re = Symbol.for("react.portal"), D = Symbol.for("react.fragment"), ie = Symbol.for("react.strict_mode"), ae = Symbol.for("react.profiler"), oe = Symbol.for("react.consumer"), O = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), se = Symbol.for("react.suspense_list"), ce = Symbol.for("react.memo"), le = Symbol.for("react.lazy"), ue = Symbol.for("react.activity"), de = Symbol.for("react.legacy_hidden"), fe = Symbol.for("react.memo_cache_sentinel"), pe = Symbol.for("react.view_transition"), me = Symbol.for("react.recoverable"), he = Symbol.iterator;
	function ge(e) {
		return typeof e != "object" || !e ? null : (e = he && e[he] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var _e = Symbol.for("react.client.reference");
	function ve(e) {
		if (e == null) return null;
		if (typeof e == "function") return e.$$typeof === _e ? null : e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case D: return "Fragment";
			case ae: return "Profiler";
			case ie: return "StrictMode";
			case A: return "Suspense";
			case se: return "SuspenseList";
			case ue: return "Activity";
			case pe: return "ViewTransition";
		}
		if (typeof e == "object") switch (e.$$typeof) {
			case re: return "Portal";
			case O: return e.displayName || "Context";
			case oe: return (e._context.displayName || "Context") + ".Consumer";
			case k:
				var t = e.render;
				return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
			case ce: return t = e.displayName || null, t === null ? ve(e.type) || "Memo" : t;
			case le:
				t = e._payload, e = e._init;
				try {
					return ve(e(t));
				} catch {}
		}
		return null;
	}
	var ye = Array.isArray, j = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, M = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, be = {
		pending: !1,
		data: null,
		method: null,
		action: null
	}, xe = [], Se = -1;
	function Ce(e) {
		return { current: e };
	}
	function we(e) {
		0 > Se || (e.current = xe[Se], xe[Se] = null, Se--);
	}
	function N(e, t) {
		Se++, xe[Se] = e.current, e.current = t;
	}
	var Te = Ce(null), Ee = Ce(null), De = Ce(null), Oe = Ce(null);
	function ke(e, t) {
		switch (N(De, t), N(Ee, e), N(Te, null), t.nodeType) {
			case 9:
			case 11:
				e = (e = t.documentElement) && (e = e.namespaceURI) ? up(e) : 0;
				break;
			default: if (e = t.tagName, t = t.namespaceURI) t = up(t), e = dp(t, e);
			else switch (e) {
				case "svg":
					e = 1;
					break;
				case "math":
					e = 2;
					break;
				default: e = 0;
			}
		}
		we(Te), N(Te, e);
	}
	function Ae() {
		we(Te), we(Ee), we(De);
	}
	function je(e) {
		var t = e.memoizedState;
		t !== null && (sh._currentValue = t.memoizedState, N(Oe, e)), t = Te.current;
		var n = dp(t, e.type);
		t !== n && (N(Ee, e), N(Te, n));
	}
	function Me(e) {
		Ee.current === e && (we(Te), we(Ee)), Oe.current === e && (we(Oe), sh._currentValue = be);
	}
	var Ne, Pe;
	function Fe(e) {
		if (Ne === void 0) try {
			throw Error();
		} catch (e) {
			var t = e.stack.trim().match(/\n( *(at )?)/);
			Ne = t && t[1] || "", Pe = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
		}
		return "\n" + Ne + e + Pe;
	}
	var Ie = !1;
	function Le(e, t) {
		if (!e || Ie) return "";
		Ie = !0;
		var n = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var r = { DetermineComponentFrameRoot: function() {
				try {
					if (t) {
						var n = function() {
							throw Error();
						};
						if (Object.defineProperty(n.prototype, "props", { set: function() {
							throw Error();
						} }), typeof Reflect == "object" && Reflect.construct) {
							try {
								Reflect.construct(n, []);
							} catch (e) {
								var r = e;
							}
							Reflect.construct(e, [], n);
						} else {
							try {
								n.call();
							} catch (e) {
								r = e;
							}
							n = !1;
							try {
								var i = Object.getOwnPropertyDescriptor(e.prototype, "props");
								Object.defineProperty(e.prototype, "props", {
									configurable: !0,
									set: function() {
										throw Error();
									}
								}), n = !0, new e();
							} finally {
								n && (i === void 0 ? delete e.prototype.props : Object.defineProperty(e.prototype, "props", i));
							}
						}
					} else {
						try {
							throw Error();
						} catch (e) {
							r = e;
						}
						(n = e()) && typeof n.catch == "function" && n.catch(function() {});
					}
				} catch (e) {
					if (e && r && typeof e.stack == "string") return [e.stack, r.stack];
				}
				return [null, null];
			} };
			r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
			i && i.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
			var a = r.DetermineComponentFrameRoot(), o = a[0], s = a[1];
			if (o && s) {
				var c = o.split("\n"), l = s.split("\n");
				for (i = r = 0; r < c.length && !c[r].includes("DetermineComponentFrameRoot");) r++;
				for (; i < l.length && !l[i].includes("DetermineComponentFrameRoot");) i++;
				if (r === c.length || i === l.length) for (r = c.length - 1, i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i];) i--;
				for (; 1 <= r && 0 <= i; r--, i--) if (c[r] !== l[i]) {
					if (r !== 1 || i !== 1) do
						if (r--, i--, 0 > i || c[r] !== l[i]) {
							var u = "\n" + c[r].replace(" at new ", " at ");
							return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
						}
					while (1 <= r && 0 <= i);
					break;
				}
			}
		} finally {
			Ie = !1, Error.prepareStackTrace = n;
		}
		return (n = e ? e.displayName || e.name : "") ? Fe(n) : "";
	}
	function Re(e, t) {
		switch (e.tag) {
			case 26:
			case 27:
			case 5: return Fe(e.type);
			case 16: return Fe("Lazy");
			case 13: return e.child !== t && t !== null ? Fe("Suspense Fallback") : Fe("Suspense");
			case 19: return Fe("SuspenseList");
			case 0:
			case 15: return Le(e.type, !1);
			case 11: return Le(e.type.render, !1);
			case 1: return Le(e.type, !0);
			case 31: return Fe("Activity");
			case 30: return Fe("ViewTransition");
			default: return "";
		}
	}
	function ze(e) {
		try {
			var t = "", n = null;
			do
				t += Re(e, n), n = e, e = e.return;
			while (e);
			return t;
		} catch (e) {
			return "\nError generating stack: " + e.message + "\n" + e.stack;
		}
	}
	var Be = Object.prototype.hasOwnProperty, Ve = t.unstable_scheduleCallback, He = t.unstable_cancelCallback, Ue = t.unstable_shouldYield, We = t.unstable_requestPaint, Ge = t.unstable_now, Ke = t.unstable_getCurrentPriorityLevel, qe = t.unstable_ImmediatePriority, Je = t.unstable_UserBlockingPriority, Ye = t.unstable_NormalPriority, Xe = t.unstable_LowPriority, Ze = t.unstable_IdlePriority, Qe = t.log, $e = t.unstable_setDisableYieldValue, et = null, tt = null;
	function nt(e) {
		if (typeof Qe == "function" && $e(e), tt && typeof tt.setStrictMode == "function") try {
			tt.setStrictMode(et, e);
		} catch {}
	}
	var rt = Math.clz32 ? Math.clz32 : ot, it = Math.log, at = Math.LN2;
	function ot(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - (it(e) / at | 0) | 0;
	}
	var st = 256, ct = 262144, lt = 4194304;
	function ut(e) {
		var t = e & 42;
		if (t !== 0) return t;
		switch (e & -e) {
			case 1: return 1;
			case 2: return 2;
			case 4: return 4;
			case 8: return 8;
			case 16: return 16;
			case 32: return 32;
			case 64: return 64;
			case 128: return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072: return e & -e;
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return e & 3932160;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return e & 62914560;
			case 67108864: return 67108864;
			case 134217728: return 134217728;
			case 268435456: return 268435456;
			case 536870912: return 536870912;
			case 1073741824: return 0;
			default: return e;
		}
	}
	function dt(e, t, n) {
		var r = e.pendingLanes;
		if (r === 0) return 0;
		var i = 0, a = e.suspendedLanes, o = e.pingedLanes;
		e = e.warmLanes;
		var s = r & 134217727;
		return s === 0 ? (s = r & ~a, s === 0 ? o === 0 ? n || (n = r & ~e, n !== 0 && (i = ut(n))) : i = ut(o) : i = ut(s)) : (r = s & ~a, r === 0 ? (o &= s, o === 0 ? n || (n = s & ~e, n !== 0 && (i = ut(n))) : i = ut(o)) : i = ut(r)), i === 0 ? 0 : t !== 0 && t !== i && (t & a) === 0 && (a = i & -i, n = t & -t, a >= n || a === 32 && n & 4194048) ? t : i;
	}
	function ft(e, t) {
		return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
	}
	function pt(e, t) {
		t & 8 && (t |= t & 32);
		var n = e.entangledLanes;
		if (n !== 0) for (e = e.entanglements, n &= t; 0 < n;) {
			var r = 31 - rt(n), i = 1 << r;
			t |= e[r], n &= ~i;
		}
		return t;
	}
	function mt(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64: return t + 250;
			case 16:
			case 32:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return t + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824: return -1;
			default: return -1;
		}
	}
	function ht() {
		var e = lt;
		return lt <<= 1, !(lt & 62914560) && (lt = 4194304), e;
	}
	function gt(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t;
	}
	function _t(e, t) {
		e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
	}
	function vt(e, t, n, r, i, a) {
		var o = e.pendingLanes;
		e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
		var s = e.entanglements, c = e.expirationTimes, l = e.hiddenUpdates;
		for (n = o & ~n; 0 < n;) {
			var u = 31 - rt(n), d = 1 << u;
			s[u] = 0, c[u] = -1;
			var f = l[u];
			if (f !== null) for (l[u] = null, u = 0; u < f.length; u++) {
				var p = f[u];
				p !== null && (p.lane &= -536870913);
			}
			n &= ~d;
		}
		r !== 0 && yt(e, r, 0), a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t));
	}
	function yt(e, t, n) {
		e.pendingLanes |= t, e.suspendedLanes &= ~t;
		var r = 31 - rt(t);
		e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930;
	}
	function bt(e, t) {
		var n = e.entangledLanes |= t;
		for (e = e.entanglements; n;) {
			var r = 31 - rt(n), i = 1 << r;
			i & t | e[r] & t && (e[r] |= t), n &= ~i;
		}
	}
	function xt(e, t) {
		var n = t & -t;
		return n = n & 42 ? 1 : St(n), (n & (e.suspendedLanes | t)) === 0 ? n : 0;
	}
	function St(e) {
		switch (e) {
			case 2:
				e = 1;
				break;
			case 8:
				e = 4;
				break;
			case 32:
				e = 16;
				break;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				e = 128;
				break;
			case 268435456:
				e = 134217728;
				break;
			default: e = 0;
		}
		return e;
	}
	function Ct(e) {
		return e &= -e, 2 < e ? 8 < e ? e & 134217727 ? 32 : 268435456 : 8 : 2;
	}
	function wt() {
		var e = M.p;
		return e === 0 ? (e = window.event, e === void 0 ? 32 : Ch(e.type)) : e;
	}
	function Tt(e, t) {
		var n = M.p;
		try {
			return M.p = e, t();
		} finally {
			M.p = n;
		}
	}
	var Et = Math.random().toString(36).slice(2), Dt = "__reactFiber$" + Et, Ot = "__reactProps$" + Et, kt = "__reactContainer$" + Et, At = "__reactEvents$" + Et, jt = "__reactListeners$" + Et, Mt = "__reactHandles$" + Et, Nt = "__reactResources$" + Et, Pt = "__reactMarker$" + Et, Ft = "__reactLoad$" + Et;
	function It(e) {
		delete e[Dt], delete e[Ot], delete e[jt], delete e[Mt];
	}
	function Lt(e) {
		var t;
		if (t = e[Dt]) return t;
		for (var n = e.parentNode; n;) {
			if (t = n[kt] || n[Dt]) {
				if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = fm(e); e !== null;) {
					if (n = e[Dt]) return n;
					e = fm(e);
				}
				return t;
			}
			e = n, n = e.parentNode;
		}
		return null;
	}
	function Rt(e) {
		if (e = e[Dt] || e[kt]) {
			var t = e.tag;
			if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
		}
		return null;
	}
	function zt(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
		throw Error(i(33));
	}
	function Bt(e) {
		var t = e[Nt];
		return t ||= e[Nt] = {
			hoistableStyles: /* @__PURE__ */ new Map(),
			hoistableScripts: /* @__PURE__ */ new Map()
		}, t;
	}
	function Vt(e) {
		e[Pt] = !0;
	}
	function Ht(e) {
		e[Ft] = void 0;
	}
	var Ut = /* @__PURE__ */ new Set(), Wt = {};
	function Gt(e, t) {
		Kt(e, t), Kt(e + "Capture", t);
	}
	function Kt(e, t) {
		for (Wt[e] = t, e = 0; e < t.length; e++) Ut.add(t[e]);
	}
	var qt = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Jt = {}, Yt = {};
	function Xt(e) {
		return Be.call(Yt, e) ? !0 : Be.call(Jt, e) ? !1 : qt.test(e) ? Yt[e] = !0 : (Jt[e] = !0, !1);
	}
	var P = !1;
	function Zt() {
		var e = P;
		return P = !1, e;
	}
	function Qt(e, t, n) {
		if (Xt(t)) {
			if (n === null) e.removeAttribute(t);
			else {
				switch (typeof n) {
					case "undefined":
					case "function":
					case "symbol":
						e.removeAttribute(t);
						return;
					case "boolean":
						var r = t.toLowerCase().slice(0, 5);
						if (r !== "data-" && r !== "aria-") {
							e.removeAttribute(t);
							return;
						}
				}
				e.setAttribute(t, n);
			}
		}
	}
	function F(e, t, n) {
		if (n === null) e.removeAttribute(t);
		else {
			switch (typeof n) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(t);
					return;
			}
			e.setAttribute(t, n);
		}
	}
	function $t(e, t, n, r) {
		if (r === null) e.removeAttribute(n);
		else {
			switch (typeof r) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(n);
					return;
			}
			e.setAttributeNS(t, n, r);
		}
	}
	function en(e) {
		switch (typeof e) {
			case "bigint":
			case "boolean":
			case "number":
			case "string":
			case "undefined": return e;
			case "object": return e;
			default: return "";
		}
	}
	function tn(e) {
		var t = e.type;
		return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
	}
	function nn(e, t, n) {
		var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
		if (!e.hasOwnProperty(t) && r !== void 0 && typeof r.get == "function" && typeof r.set == "function") {
			var i = r.get, a = r.set;
			return Object.defineProperty(e, t, {
				configurable: !0,
				get: function() {
					return i.call(this);
				},
				set: function(e) {
					n = "" + e, a.call(this, e);
				}
			}), Object.defineProperty(e, t, { enumerable: r.enumerable }), {
				getValue: function() {
					return n;
				},
				setValue: function(e) {
					n = "" + e;
				},
				stopTracking: function() {
					e._valueTracker = null, delete e[t];
				}
			};
		}
	}
	function rn(e) {
		if (!e._valueTracker) {
			var t = tn(e) ? "checked" : "value";
			e._valueTracker = nn(e, t, "" + e[t]);
		}
	}
	function an(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(), r = "";
		return e && (r = tn(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n && (t.setValue(e), !0);
	}
	var on = /[\n"\\]/g;
	function sn(e) {
		return e.replace(on, function(e) {
			return "\\" + e.charCodeAt(0).toString(16) + " ";
		});
	}
	function cn(e, t, n, r, i, a, o, s) {
		e.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.type = o : e.removeAttribute("type"), t == null ? o !== "submit" && o !== "reset" || e.removeAttribute("value") : o === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + en(t)) : e.value !== "" + en(t) && (e.value = "" + en(t)), t == null ? n == null ? r != null && e.removeAttribute("value") : un(e, en(n)) : o === "number" && e.value == t ? un(e, en(e.value)) : un(e, en(t)), i == null && a != null && (e.defaultChecked = !!a), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.name = "" + en(s) : e.removeAttribute("name");
	}
	function ln(e, t, n, r, i, a, o, s) {
		if (a != null && typeof a != "function" && typeof a != "symbol" && typeof a != "boolean" && (e.type = a), t != null || n != null) {
			if (!(a !== "submit" && a !== "reset" || t != null)) {
				rn(e);
				return;
			}
			n = n == null ? "" : "" + en(n), t = t == null ? n : "" + en(t), s || t === e.value || (e.value = t), e.defaultValue = t;
		}
		r ??= i, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = s ? e.checked : !!r, e.defaultChecked = !!r, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (e.name = o), rn(e);
	}
	function un(e, t) {
		e.defaultValue !== "" + t && (e.defaultValue = "" + t);
	}
	function I(e, t, n, r) {
		if (e = e.options, t) {
			t = {};
			for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
			for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
		} else {
			for (n = "" + en(n), t = null, i = 0; i < e.length; i++) {
				if (e[i].value === n) {
					e[i].selected = !0, r && (e[i].defaultSelected = !0);
					return;
				}
				t !== null || e[i].disabled || (t = e[i]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function dn(e, t, n) {
		if (t != null && (t = "" + en(t), t !== e.value && (e.value = t), n == null)) {
			e.defaultValue !== t && (e.defaultValue = t);
			return;
		}
		e.defaultValue = n == null ? "" : "" + en(n);
	}
	function fn(e, t, n, r) {
		if (t == null) {
			if (r != null) {
				if (n != null) throw Error(i(92));
				if (ye(r)) {
					if (1 < r.length) throw Error(i(93));
					r = r[0];
				}
				n = r;
			}
			n ??= "", t = n;
		}
		n = en(t), e.defaultValue = n, r = e.textContent, r === n && r !== "" && r !== null && (e.value = r), rn(e);
	}
	function pn(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && n.nodeType === 3) {
				n.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var mn = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
	function hn(e, t, n) {
		var r = t.indexOf("--") === 0;
		n == null || typeof n == "boolean" || n === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : typeof n != "number" || n === 0 || mn.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
	}
	function gn(e, t, n) {
		if (t != null && typeof t != "object") throw Error(i(62));
		if (e = e.style, n != null) {
			for (var r in n) !n.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "", P = !0);
			for (var a in t) r = t[a], t.hasOwnProperty(a) && n[a] !== r && (hn(e, a, r), P = !0);
		} else for (var o in t) t.hasOwnProperty(o) && hn(e, o, t[o]);
	}
	function _n(e) {
		if (e.indexOf("-") === -1) return !1;
		switch (e) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": return !1;
			default: return !0;
		}
	}
	var L = /* @__PURE__ */ new Map([
		["acceptCharset", "accept-charset"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"],
		["crossOrigin", "crossorigin"],
		["accentHeight", "accent-height"],
		["alignmentBaseline", "alignment-baseline"],
		["arabicForm", "arabic-form"],
		["baselineShift", "baseline-shift"],
		["capHeight", "cap-height"],
		["clipPath", "clip-path"],
		["clipRule", "clip-rule"],
		["colorInterpolation", "color-interpolation"],
		["colorInterpolationFilters", "color-interpolation-filters"],
		["colorProfile", "color-profile"],
		["colorRendering", "color-rendering"],
		["dominantBaseline", "dominant-baseline"],
		["enableBackground", "enable-background"],
		["fillOpacity", "fill-opacity"],
		["fillRule", "fill-rule"],
		["floodColor", "flood-color"],
		["floodOpacity", "flood-opacity"],
		["fontFamily", "font-family"],
		["fontSize", "font-size"],
		["fontSizeAdjust", "font-size-adjust"],
		["fontStretch", "font-stretch"],
		["fontStyle", "font-style"],
		["fontVariant", "font-variant"],
		["fontWeight", "font-weight"],
		["glyphName", "glyph-name"],
		["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
		["glyphOrientationVertical", "glyph-orientation-vertical"],
		["horizAdvX", "horiz-adv-x"],
		["horizOriginX", "horiz-origin-x"],
		["imageRendering", "image-rendering"],
		["letterSpacing", "letter-spacing"],
		["lightingColor", "lighting-color"],
		["markerEnd", "marker-end"],
		["markerMid", "marker-mid"],
		["markerStart", "marker-start"],
		["maskType", "mask-type"],
		["overlinePosition", "overline-position"],
		["overlineThickness", "overline-thickness"],
		["paintOrder", "paint-order"],
		["panose-1", "panose-1"],
		["pointerEvents", "pointer-events"],
		["renderingIntent", "rendering-intent"],
		["shapeRendering", "shape-rendering"],
		["stopColor", "stop-color"],
		["stopOpacity", "stop-opacity"],
		["strikethroughPosition", "strikethrough-position"],
		["strikethroughThickness", "strikethrough-thickness"],
		["strokeDasharray", "stroke-dasharray"],
		["strokeDashoffset", "stroke-dashoffset"],
		["strokeLinecap", "stroke-linecap"],
		["strokeLinejoin", "stroke-linejoin"],
		["strokeMiterlimit", "stroke-miterlimit"],
		["strokeOpacity", "stroke-opacity"],
		["strokeWidth", "stroke-width"],
		["textAnchor", "text-anchor"],
		["textDecoration", "text-decoration"],
		["textRendering", "text-rendering"],
		["transformOrigin", "transform-origin"],
		["underlinePosition", "underline-position"],
		["underlineThickness", "underline-thickness"],
		["unicodeBidi", "unicode-bidi"],
		["unicodeRange", "unicode-range"],
		["unitsPerEm", "units-per-em"],
		["vAlphabetic", "v-alphabetic"],
		["vHanging", "v-hanging"],
		["vIdeographic", "v-ideographic"],
		["vMathematical", "v-mathematical"],
		["vectorEffect", "vector-effect"],
		["vertAdvY", "vert-adv-y"],
		["vertOriginX", "vert-origin-x"],
		["vertOriginY", "vert-origin-y"],
		["wordSpacing", "word-spacing"],
		["writingMode", "writing-mode"],
		["xmlnsXlink", "xmlns:xlink"],
		["xHeight", "x-height"]
	]), vn = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function yn(e) {
		return vn.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
	}
	function bn() {}
	var xn = null;
	function Sn(e) {
		return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
	}
	var Cn = null, wn = null;
	function Tn(e) {
		var t = Rt(e);
		if (t && (e = t.stateNode)) {
			var n = e[Ot] || null;
			a: switch (e = t.stateNode, t.type) {
				case "input":
					if (cn(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
						for (n = e; n.parentNode;) n = n.parentNode;
						for (n = n.querySelectorAll("input[name=\"" + sn("" + t) + "\"][type=\"radio\"]"), t = 0; t < n.length; t++) {
							var r = n[t];
							if (r !== e && r.form === e.form) {
								var a = r[Ot] || null;
								if (!a) throw Error(i(90));
								cn(r, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
							}
						}
						for (t = 0; t < n.length; t++) r = n[t], r.form === e.form && an(r);
					}
					break a;
				case "textarea":
					dn(e, n.value, n.defaultValue);
					break a;
				case "select": t = n.value, t != null && I(e, !!n.multiple, t, !1);
			}
		}
	}
	var En = !1;
	function Dn(e, t, n) {
		if (En) return e(t, n);
		En = !0;
		try {
			return e(t);
		} finally {
			if (En = !1, (Cn !== null || wn !== null) && (zd(), Cn && (t = Cn, e = wn, wn = Cn = null, Tn(t), e))) for (t = 0; t < e.length; t++) Tn(e[t]);
		}
	}
	function On(e, t) {
		var n = e.stateNode;
		if (n === null) return null;
		var r = n[Ot] || null;
		if (r === null) return null;
		n = r[t];
		a: switch (t) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(r = !r.disabled) || (e = e.type, r = e !== "button" && e !== "input" && e !== "select" && e !== "textarea"), e = !r;
				break a;
			default: e = !1;
		}
		if (e) return null;
		if (n && typeof n != "function") throw Error(i(231, t, typeof n));
		return n;
	}
	var kn = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, An = !1;
	if (kn) try {
		var jn = {};
		Object.defineProperty(jn, "passive", { get: function() {
			An = !0;
		} }), window.addEventListener("test", jn, jn), window.removeEventListener("test", jn, jn);
	} catch {
		An = !1;
	}
	var Mn = null, Nn = null, Pn = null;
	function Fn() {
		if (Pn) return Pn;
		var e, t = Nn, n = t.length, r, i = "value" in Mn ? Mn.value : Mn.textContent, a = i.length;
		for (e = 0; e < n && t[e] === i[e]; e++);
		var o = n - e;
		for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
		return Pn = i.slice(e, 1 < r ? 1 - r : void 0);
	}
	function In(e) {
		var t = e.keyCode;
		return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
	}
	function Ln() {
		return !0;
	}
	function Rn() {
		return !1;
	}
	function zn(e) {
		function t(t, n, r, i, a) {
			for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
			return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? Ln : Rn, this.isPropagationStopped = Rn, this;
		}
		return E(t.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var e = this.nativeEvent;
				e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Ln);
			},
			stopPropagation: function() {
				var e = this.nativeEvent;
				e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Ln);
			},
			persist: function() {},
			isPersistent: Ln
		}), t;
	}
	var Bn = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	}, Vn = zn(Bn), Hn = E({}, Bn, {
		view: 0,
		detail: 0
	}), Un = zn(Hn), Wn, Gn, Kn, qn = E({}, Hn, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: ir,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== Kn && (Kn && e.type === "mousemove" ? (Wn = e.screenX - Kn.screenX, Gn = e.screenY - Kn.screenY) : Gn = Wn = 0, Kn = e), Wn);
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : Gn;
		}
	}), Jn = zn(qn), Yn = zn(E({}, qn, { dataTransfer: 0 })), Xn = zn(E({}, Hn, { relatedTarget: 0 })), Zn = zn(E({}, Bn, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Qn = zn(E({}, Bn, { clipboardData: function(e) {
		return "clipboardData" in e ? e.clipboardData : window.clipboardData;
	} })), $n = zn(E({}, Bn, { data: 0 })), er = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified"
	}, tr = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta"
	}, nr = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function rr(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : (e = nr[e]) ? !!t[e] : !1;
	}
	function ir() {
		return rr;
	}
	var R = zn(E({}, Hn, {
		key: function(e) {
			if (e.key) {
				var t = er[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress" ? (e = In(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? tr[e.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: ir,
		charCode: function(e) {
			return e.type === "keypress" ? In(e) : 0;
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function(e) {
			return e.type === "keypress" ? In(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		}
	})), ar = zn(E({}, qn, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	})), or = zn(E({}, Bn, { submitter: 0 })), sr = zn(E({}, Hn, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: ir
	})), cr = zn(E({}, Bn, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), lr = zn(E({}, qn, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	})), ur = zn(E({}, Bn, {
		newState: 0,
		oldState: 0,
		source: 0
	})), dr = [
		9,
		13,
		27,
		32
	], fr = kn && "CompositionEvent" in window, pr = null;
	kn && "documentMode" in document && (pr = document.documentMode);
	var mr = kn && "TextEvent" in window && !pr, hr = kn && (!fr || pr && 8 < pr && 11 >= pr), gr = " ", _r = !1;
	function vr(e, t) {
		switch (e) {
			case "keyup": return dr.indexOf(t.keyCode) !== -1;
			case "keydown": return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function yr(e) {
		return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
	}
	var br = !1;
	function xr(e, t) {
		switch (e) {
			case "compositionend": return yr(t);
			case "keypress": return t.which === 32 ? (_r = !0, gr) : null;
			case "textInput": return e = t.data, e === gr && _r ? null : e;
			default: return null;
		}
	}
	function Sr(e, t) {
		if (br) return e === "compositionend" || !fr && vr(e, t) ? (e = Fn(), Pn = Nn = Mn = null, br = !1, e) : null;
		switch (e) {
			case "paste": return null;
			case "keypress":
				if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case "compositionend": return hr && t.locale !== "ko" ? null : t.data;
			default: return null;
		}
	}
	var Cr = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0
	};
	function wr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!Cr[e.type] : t === "textarea";
	}
	function Tr(e, t, n, r) {
		Cn ? wn ? wn.push(r) : wn = [r] : Cn = r, t = Jf(t, "onChange"), 0 < t.length && (n = new Vn("onChange", "change", null, n, r), e.push({
			event: n,
			listeners: t
		}));
	}
	var Er = null, Dr = null;
	function Or(e) {
		Vf(e, 0);
	}
	function kr(e) {
		if (an(zt(e))) return e;
	}
	function Ar(e, t) {
		if (e === "change") return t;
	}
	var jr = !1;
	if (kn) {
		var Mr;
		if (kn) {
			var Nr = "oninput" in document;
			if (!Nr) {
				var Pr = document.createElement("div");
				Pr.setAttribute("oninput", "return;"), Nr = typeof Pr.oninput == "function";
			}
			Mr = Nr;
		} else Mr = !1;
		jr = Mr && (!document.documentMode || 9 < document.documentMode);
	}
	function Fr() {
		Er && (Er.detachEvent("onpropertychange", Ir), Dr = Er = null);
	}
	function Ir(e) {
		if (e.propertyName === "value" && kr(Dr)) {
			var t = [];
			Tr(t, Dr, e, Sn(e)), Dn(Or, t);
		}
	}
	function Lr(e, t, n) {
		e === "focusin" ? (Fr(), Er = t, Dr = n, Er.attachEvent("onpropertychange", Ir)) : e === "focusout" && Fr();
	}
	function Rr(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown") return kr(Dr);
	}
	function zr(e, t) {
		if (e === "click") return kr(t);
	}
	function Br(e, t) {
		if (e === "input" || e === "change") return kr(t);
	}
	function Vr(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var Hr = typeof Object.is == "function" ? Object.is : Vr;
	function Ur(e, t) {
		if (Hr(e, t)) return !0;
		if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
		var n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++) {
			var i = n[r];
			if (!Be.call(t, i) || !Hr(e[i], t[i])) return !1;
		}
		return !0;
	}
	function Wr(e) {
		if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	function Gr(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e;
	}
	function Kr(e, t) {
		var n = Gr(e);
		e = 0;
		for (var r; n;) {
			if (n.nodeType === 3) {
				if (r = e + n.textContent.length, e <= t && r >= t) return {
					node: n,
					offset: t - e
				};
				e = r;
			}
			a: {
				for (; n;) {
					if (n.nextSibling) {
						n = n.nextSibling;
						break a;
					}
					n = n.parentNode;
				}
				n = void 0;
			}
			n = Gr(n);
		}
	}
	function qr(e, t) {
		return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? qr(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
	}
	function Jr(e) {
		e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
		for (var t = Wr(e.document); t instanceof e.HTMLIFrameElement;) {
			try {
				var n = typeof t.contentWindow.location.href == "string";
			} catch {
				n = !1;
			}
			if (n) e = t.contentWindow;
			else break;
			t = Wr(e.document);
		}
		return t;
	}
	function Yr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
	}
	var Xr = kn && "documentMode" in document && 11 >= document.documentMode, Zr = null, Qr = null, $r = null, ei = !1;
	function ti(e, t, n) {
		var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		ei || Zr == null || Zr !== Wr(r) || (r = Zr, "selectionStart" in r && Yr(r) ? r = {
			start: r.selectionStart,
			end: r.selectionEnd
		} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
			anchorNode: r.anchorNode,
			anchorOffset: r.anchorOffset,
			focusNode: r.focusNode,
			focusOffset: r.focusOffset
		}), $r && Ur($r, r) || ($r = r, r = Jf(Qr, "onSelect"), 0 < r.length && (t = new Vn("onSelect", "select", null, t, n), e.push({
			event: t,
			listeners: r
		}), t.target = Zr)));
	}
	function ni(e, t) {
		var n = {};
		return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
	}
	var ri = {
		animationend: ni("Animation", "AnimationEnd"),
		animationiteration: ni("Animation", "AnimationIteration"),
		animationstart: ni("Animation", "AnimationStart"),
		transitionrun: ni("Transition", "TransitionRun"),
		transitionstart: ni("Transition", "TransitionStart"),
		transitioncancel: ni("Transition", "TransitionCancel"),
		transitionend: ni("Transition", "TransitionEnd")
	}, ii = {}, ai = {};
	kn && (ai = document.createElement("div").style, "AnimationEvent" in window || (delete ri.animationend.animation, delete ri.animationiteration.animation, delete ri.animationstart.animation), "TransitionEvent" in window || delete ri.transitionend.transition);
	function oi(e) {
		if (ii[e]) return ii[e];
		if (!ri[e]) return e;
		var t = ri[e], n;
		for (n in t) if (t.hasOwnProperty(n) && n in ai) return ii[e] = t[n];
		return e;
	}
	var si = oi("animationend"), ci = oi("animationiteration"), li = oi("animationstart"), ui = oi("transitionrun"), di = oi("transitionstart"), fi = oi("transitioncancel"), pi = oi("transitionend"), mi = /* @__PURE__ */ new Map(), hi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	hi.push("scrollEnd");
	function gi(e, t) {
		mi.set(e, t), Gt(t, [e]);
	}
	var _i = 0;
	function vi(e, t) {
		if (e.name != null && e.name !== "auto") return e.name;
		if (t.autoName !== null) return t.autoName;
		e = bd.identifierPrefix;
		var n = _i++;
		return e = "_" + e + "t_" + n.toString(32) + "_", t.autoName = e;
	}
	function yi(e) {
		if (e == null || typeof e == "string") return e;
		var t = null, n = Od;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = e[n[r]];
			if (i != null) {
				if (i === "none") return "none";
				t = t == null ? i : t + (" " + i);
			}
		}
		return t ?? e.default;
	}
	function bi(e, t) {
		return e = yi(e), t = yi(t), t == null ? e === "auto" ? null : e : t === "auto" ? null : t;
	}
	var xi = typeof reportError == "function" ? reportError : function(e) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var t = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(t)) return;
		} else if (typeof process == "object" && typeof process.emit == "function") {
			process.emit("uncaughtException", e);
			return;
		}
		console.error(e);
	}, Si = [], Ci = 0, wi = 0;
	function Ti() {
		for (var e = Ci, t = wi = Ci = 0; t < e;) {
			var n = Si[t];
			Si[t++] = null;
			var r = Si[t];
			Si[t++] = null;
			var i = Si[t];
			Si[t++] = null;
			var a = Si[t];
			if (Si[t++] = null, r !== null && i !== null) {
				var o = r.pending;
				o === null ? i.next = i : (i.next = o.next, o.next = i), r.pending = i;
			}
			a !== 0 && ki(n, i, a);
		}
	}
	function Ei(e, t, n, r) {
		Si[Ci++] = e, Si[Ci++] = t, Si[Ci++] = n, Si[Ci++] = r, wi |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
	}
	function Di(e, t, n, r) {
		return Ei(e, t, n, r), Ai(e);
	}
	function Oi(e, t) {
		return Ei(e, null, null, t), Ai(e);
	}
	function ki(e, t, n) {
		e.lanes |= n;
		var r = e.alternate;
		r !== null && (r.lanes |= n);
		for (var i = !1, a = e.return; a !== null;) a.childLanes |= n, r = a.alternate, r !== null && (r.childLanes |= n), a.tag === 22 && (e = a.stateNode, e === null || e._visibility & 1 || (i = !0)), e = a, a = a.return;
		return e.tag === 3 ? (a = e.stateNode, i && t !== null && (i = 31 - rt(n), e = a.hiddenUpdates, r = e[i], r === null ? e[i] = [t] : r.push(t), t.lane = n | 536870912), a) : null;
	}
	function Ai(e) {
		if (50 < kd) throw kd = 0, Ad = null, Error(i(185));
		for (var t = e.return; t !== null;) e = t, t = e.return;
		return e.tag === 3 ? e.stateNode : null;
	}
	var ji = {};
	function Mi(e, t, n, r) {
		this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
	}
	function Ni(e, t, n, r) {
		return new Mi(e, t, n, r);
	}
	function Pi(e) {
		return e = e.prototype, !(!e || !e.isReactComponent);
	}
	function Fi(e, t) {
		var n = e.alternate;
		return n === null ? (n = Ni(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 1206910976, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
	}
	function Ii(e, t) {
		e.flags &= 1206910978;
		var n = e.alternate;
		return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}), e;
	}
	function Li(e, t, n, r, a, o) {
		var s = 0;
		if (r = e, typeof r == "function") Pi(r) && (s = 1);
		else if (typeof r == "string") s = qm(e, n, Te.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
		else a: switch (r) {
			case ue: return e = Ni(31, n, t, a), e.elementType = ue, e.lanes = o, e;
			case D: return Ri(n.children, a, o, t);
			case ie:
				s = 8, a |= 24;
				break;
			case ae: return e = Ni(12, n, t, a | 2), e.elementType = ae, e.lanes = o, e;
			case A: return e = Ni(13, n, t, a), e.elementType = A, e.lanes = o, e;
			case se: return e = Ni(19, n, t, a), e.elementType = se, e.lanes = o, e;
			case de:
			case pe: return e = a | 32, e = Ni(30, n, t, e), e.elementType = pe, e.lanes = o, e.stateNode = {
				autoName: null,
				paired: null,
				clones: null,
				ref: null
			}, e;
			default:
				if (typeof r == "object" && r) switch (r.$$typeof) {
					case O:
						s = 10;
						break a;
					case oe:
						s = 9;
						break a;
					case k:
						s = 11;
						break a;
					case ce:
						s = 14;
						break a;
					case le:
						s = 16, r = null;
						break a;
				}
				s = 29, n = Error(i(130, e === null ? "null" : typeof e, "")), r = null;
		}
		return t = Ni(s, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
	}
	function Ri(e, t, n, r) {
		return e = Ni(7, e, r, t), e.lanes = n, e;
	}
	function zi(e, t, n) {
		return e = Ni(6, e, null, t), e.lanes = n, e;
	}
	function Bi(e) {
		var t = Ni(18, null, null, 0);
		return t.stateNode = e, t;
	}
	function Vi(e, t, n) {
		return t = Ni(4, e.children === null ? [] : e.children, e.key, t), t.lanes = n, t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}, t;
	}
	var Hi = /* @__PURE__ */ new WeakMap();
	function Ui(e, t) {
		if (typeof e == "object" && e) {
			var n = Hi.get(e);
			return n === void 0 ? (t = {
				value: e,
				source: t,
				stack: ze(t)
			}, Hi.set(e, t), t) : n;
		}
		return {
			value: e,
			source: t,
			stack: ze(t)
		};
	}
	var Wi = [], Gi = 0, Ki = null, qi = 0, Ji = [], Yi = 0, Xi = null, Zi = 1, Qi = "";
	function $i(e, t) {
		Wi[Gi++] = qi, Wi[Gi++] = Ki, Ki = e, qi = t;
	}
	function ea(e, t, n) {
		Ji[Yi++] = Zi, Ji[Yi++] = Qi, Ji[Yi++] = Xi, Xi = e;
		var r = Zi;
		e = Qi;
		var i = 32 - rt(r) - 1;
		r &= ~(1 << i), n += 1;
		var a = 32 - rt(t) + i;
		if (30 < a) {
			var o = i - i % 5;
			a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, Zi = 1 << 32 - rt(t) + i | n << i | r, Qi = a + e;
		} else Zi = 1 << a | n << i | r, Qi = e;
	}
	function ta(e) {
		e.return !== null && ($i(e, 1), ea(e, 1, 0));
	}
	function na(e) {
		for (; e === Ki;) Ki = Wi[--Gi], Wi[Gi] = null, qi = Wi[--Gi], Wi[Gi] = null;
		for (; e === Xi;) Xi = Ji[--Yi], Ji[Yi] = null, Qi = Ji[--Yi], Ji[Yi] = null, Zi = Ji[--Yi], Ji[Yi] = null;
	}
	function ra(e, t) {
		Ji[Yi++] = Zi, Ji[Yi++] = Qi, Ji[Yi++] = Xi, Zi = t.id, Qi = t.overflow, Xi = e;
	}
	var ia = null, z = null, B = !1, aa = null, oa = !1, sa = Error(i(519));
	function ca(e) {
		throw ma(Ui(Error(i(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), e)), sa;
	}
	function la(e) {
		var t = e.stateNode, n = e.type, r = e.memoizedProps;
		switch (t[Dt] = e, t[Ot] = r, n) {
			case "dialog":
				Q("cancel", t), Q("close", t);
				break;
			case "iframe":
			case "object":
			case "embed":
				Q("load", t);
				break;
			case "video":
			case "audio":
				for (n = 0; n < zf.length; n++) Q(zf[n], t);
				break;
			case "source":
				Q("error", t);
				break;
			case "img":
			case "image":
			case "link":
				Q("error", t), Q("load", t);
				break;
			case "details":
				Q("toggle", t);
				break;
			case "input":
				Q("invalid", t), ln(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
				break;
			case "select":
				Q("invalid", t);
				break;
			case "textarea": Q("invalid", t), fn(t, r.value, r.defaultValue, r.children);
		}
		n = r.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || !0 === r.suppressHydrationWarning || ep(t.textContent, n) ? (r.popover != null && (Q("beforetoggle", t), Q("toggle", t)), r.onScroll != null && Q("scroll", t), r.onScrollEnd != null && Q("scrollend", t), r.onClick != null && (t.onclick = bn), t = !0) : t = !1, t || ca(e, !0);
	}
	function ua(e) {
		for (ia = e.return; ia;) switch (ia.tag) {
			case 5:
			case 31:
			case 13:
				oa = !1;
				return;
			case 27:
			case 3:
				oa = !0;
				return;
			default: ia = ia.return;
		}
	}
	function da(e) {
		if (e !== ia) return !1;
		if (!B) return ua(e), B = !0, !1;
		var t = e.tag, n;
		if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = n === "form" || n === "button" || pp(e.type, e.memoizedProps)), n = !n), n && z && ca(e), ua(e), t === 13) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			z = dm(e);
		} else if (t === 31) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			z = dm(e);
		} else t === 27 ? (t = z, Sp(e.type) ? (e = um, um = null, z = e) : z = t) : z = ia ? lm(e.stateNode.nextSibling) : null;
		return !0;
	}
	function fa() {
		z = ia = null, B = !1;
	}
	function pa() {
		var e = aa;
		return e !== null && (fd === null ? fd = e : fd.push.apply(fd, e), aa = null), e;
	}
	function ma(e) {
		aa === null ? aa = [e] : aa.push(e);
	}
	var ha = Ce(null), ga = null, _a = null;
	function va(e, t, n) {
		N(ha, t._currentValue), t._currentValue = n;
	}
	function ya(e) {
		e._currentValue = ha.current, we(ha);
	}
	function ba(e, t, n) {
		for (; e !== null;) {
			var r = e.alternate;
			if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
			e = e.return;
		}
	}
	function xa(e, t, n, r) {
		var a = e.child;
		for (a !== null && (a.return = e); a !== null;) {
			var o = a.dependencies;
			if (o !== null) {
				var s = a.child;
				o = o.firstContext;
				a: for (; o !== null;) {
					var c = o;
					o = a;
					for (var l = 0; l < t.length; l++) if (c.context === t[l]) {
						o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), ba(o.return, n, e), r || (s = null);
						break a;
					}
					o = c.next;
				}
			} else if (a.tag === 18) {
				if (s = a.return, s === null) throw Error(i(341));
				s.lanes |= n, o = s.alternate, o !== null && (o.lanes |= n), ba(s, n, e), s = null;
			} else a.tag === 13 && a.memoizedState !== null && a.memoizedState.dehydrated === null ? (a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), ba(a.return, n, e), s = a.child, s = s === null ? null : s.sibling) : s = a.child;
			if (s !== null) s.return = a;
			else for (s = a; s !== null;) {
				if (s === e) {
					s = null;
					break;
				}
				if (a = s.sibling, a !== null) {
					a.return = s.return, s = a;
					break;
				}
				s = s.return;
			}
			a = s;
		}
	}
	function Sa(e, t, n, r) {
		e = null;
		for (var a = t, o = !1; a !== null;) {
			if (!o) {
				if (a.flags & 524288) o = !0;
				else if (a.flags & 262144) break;
			}
			if (a.tag === 10) {
				var s = a.alternate;
				if (s === null) throw Error(i(387));
				if (s = s.memoizedProps, s !== null) {
					var c = a.type;
					Hr(a.pendingProps.value, s.value) || (e === null ? e = [c] : e.push(c));
				}
			} else if (a === Oe.current) {
				if (s = a.alternate, s === null) throw Error(i(387));
				s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e === null ? e = [sh] : e.push(sh));
			}
			a = a.return;
		}
		return e !== null && xa(t, e, n, r), t.flags |= 262144, e !== null;
	}
	function Ca(e) {
		for (e = e.firstContext; e !== null;) {
			if (!Hr(e.context._currentValue, e.memoizedValue)) return !0;
			e = e.next;
		}
		return !1;
	}
	function wa(e) {
		ga = e, _a = null, e = e.dependencies, e !== null && (e.firstContext = null);
	}
	function Ta(e) {
		return Da(ga, e);
	}
	function Ea(e, t) {
		return ga === null && wa(e), Da(e, t);
	}
	function Da(e, t) {
		var n = t._currentValue;
		if (t = {
			context: t,
			memoizedValue: n,
			next: null
		}, _a === null) {
			if (e === null) throw Error(i(308));
			_a = t, e.dependencies = {
				lanes: 0,
				firstContext: t
			}, e.flags |= 524288;
		} else _a = _a.next = t;
		return n;
	}
	var Oa = typeof AbortController < "u" ? AbortController : function() {
		var e = [], t = this.signal = {
			aborted: !1,
			addEventListener: function(t, n) {
				e.push(n);
			}
		};
		this.abort = function() {
			t.aborted = !0, e.forEach(function(e) {
				return e();
			});
		};
	}, ka = t.unstable_scheduleCallback, Aa = t.unstable_NormalPriority, ja = {
		$$typeof: O,
		Consumer: null,
		Provider: null,
		_currentValue: null,
		_currentValue2: null,
		_threadCount: 0
	};
	function Ma() {
		return {
			controller: new Oa(),
			data: /* @__PURE__ */ new Map(),
			refCount: 0
		};
	}
	function Na(e) {
		e.refCount--, e.refCount === 0 && ka(Aa, function() {
			e.controller.abort();
		});
	}
	function Pa(e, t) {
		if (e.pendingLanes & 4194048) {
			var n = e.transitionTypes;
			for (n === null && (n = e.transitionTypes = []), e = 0; e < t.length; e++) {
				var r = t[e];
				n.indexOf(r) === -1 && n.push(r);
			}
		}
	}
	var Fa = null;
	function Ia(e) {
		var t = e.transitionTypes;
		return e.transitionTypes = null, t;
	}
	var La = null, Ra = 0, za = 0, Ba = null;
	function Va(e, t) {
		if (La === null) {
			var n = La = [];
			Ra = 0, za = Pf(), Ba = {
				status: "pending",
				value: void 0,
				then: function(e) {
					n.push(e);
				}
			};
		}
		return Ra++, t.then(Ha, Ha), t;
	}
	function Ha() {
		if (--Ra === 0 && (Fa = null, La !== null)) {
			Ba !== null && (Ba.status = "fulfilled");
			var e = La;
			La = null, za = 0, Ba = null;
			for (var t = 0; t < e.length; t++) (0, e[t])();
		}
	}
	function Ua(e, t) {
		var n = [], r = {
			status: "pending",
			value: null,
			reason: null,
			then: function(e) {
				n.push(e);
			}
		};
		return e.then(function() {
			r.status = "fulfilled", r.value = t;
			for (var e = 0; e < n.length; e++) (0, n[e])(t);
		}, function(e) {
			for (r.status = "rejected", r.reason = e, e = 0; e < n.length; e++) (0, n[e])(void 0);
		}), r;
	}
	var Wa = j.S;
	j.S = function(e, t) {
		if (hd = Ge(), typeof t == "object" && t && typeof t.then == "function" && Va(e, t), Fa !== null) for (var n = bf; n !== null;) Pa(n, Fa), n = n.next;
		if (n = e.types, n !== null) {
			for (var r = bf; r !== null;) Pa(r, n), r = r.next;
			if (za !== 0) {
				r = Fa, r === null && (r = Fa = []);
				for (var i = 0; i < n.length; i++) {
					var a = n[i];
					r.indexOf(a) === -1 && r.push(a);
				}
			}
		}
		Wa !== null && Wa(e, t);
	};
	var Ga = Ce(null);
	function Ka() {
		var e = Ga.current;
		return e === null ? q.pooledCache : e;
	}
	function qa(e, t) {
		t === null ? N(Ga, Ga.current) : N(Ga, t.pool);
	}
	function Ja() {
		var e = Ka();
		return e === null ? null : {
			parent: ja._currentValue,
			pool: e
		};
	}
	var Ya = Error(i(460)), Xa = Error(i(474)), Za = Error(i(542)), Qa = { then: function() {} };
	function $a(e) {
		return e = e.status, e === "fulfilled" || e === "rejected";
	}
	function eo(e, t, n) {
		switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(bn, bn), t = n), t.status) {
			case "fulfilled": return t.value;
			case "rejected": throw e = t.reason, io(e), e === void 0 && !("reason" in t) ? Error(i(600)) : e;
			default:
				if (typeof t.status == "string") t.then(bn, bn);
				else {
					if (e = q, e !== null && 100 < e.shellSuspendCounter) throw Error(i(482));
					e = t, e.status = "pending", e.then(function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "fulfilled", n.value = e;
						}
					}, function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "rejected", n.reason = e;
						}
					});
				}
				switch (t.status) {
					case "fulfilled": return t.value;
					case "rejected": throw e = t.reason, io(e), e;
				}
				throw no = t, Ya;
		}
	}
	function to(e) {
		try {
			var t = e._init;
			return t(e._payload);
		} catch (e) {
			throw typeof e == "object" && e && typeof e.then == "function" ? (no = e, Ya) : e;
		}
	}
	var no = null;
	function ro() {
		if (no === null) throw Error(i(459));
		var e = no;
		return no = null, e;
	}
	function io(e) {
		if (e === Ya || e === Za) throw Error(i(483));
	}
	var ao = null, oo = 0;
	function so(e) {
		var t = oo;
		return oo += 1, ao === null && (ao = []), eo(ao, e, t);
	}
	function co(e, t) {
		t = t.props.ref, e.ref = t === void 0 ? null : t;
	}
	function lo(e, t) {
		throw t.$$typeof === te ? Error(i(525)) : (e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
	}
	function uo(e) {
		function t(t, n) {
			if (e) {
				var r = t.deletions;
				r === null ? (t.deletions = [n], t.flags |= 16) : r.push(n);
			}
		}
		function n(n, r) {
			if (!e) return null;
			for (; r !== null;) t(n, r), r = r.sibling;
			return null;
		}
		function r(e) {
			for (var t = /* @__PURE__ */ new Map(); e !== null;) e.key === null ? t.set(e.index, e) : t.set(e.key, e), e = e.sibling;
			return t;
		}
		function a(e, t) {
			return e = Fi(e, t), e.index = 0, e.sibling = null, e;
		}
		function o(t, n, r) {
			return t.index = r, e ? (r = t.alternate, r === null ? (t.flags |= 134217730, n) : (r = r.index, r < n ? (t.flags |= 2, n) : r)) : (t.flags |= 1048576, n);
		}
		function s(t) {
			return e && t.alternate === null && (t.flags |= 134217730), t;
		}
		function c(e, t, n, r) {
			return t === null || t.tag !== 6 ? (t = zi(n, e.mode, r), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function l(e, t, n, r) {
			var i = n.type;
			return i === D ? (e = d(e, t, n.props.children, r, n.key), co(e, n), e) : t !== null && (t.elementType === i || typeof i == "object" && i && i.$$typeof === le && to(i) === t.type) ? (t = a(t, n.props), co(t, n), t.return = e, t) : (t = Li(n.type, n.key, n.props, null, e.mode, r), co(t, n), t.return = e, t);
		}
		function u(e, t, n, r) {
			return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = Vi(n, e.mode, r), t.return = e, t) : (t = a(t, n.children || []), t.return = e, t);
		}
		function d(e, t, n, r, i) {
			return t === null || t.tag !== 7 ? (t = Ri(n, e.mode, r, i), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function f(e, t, n) {
			if (typeof t == "string" && t !== "" || typeof t == "number" || typeof t == "bigint") return t = zi("" + t, e.mode, n), t.return = e, t;
			if (typeof t == "object" && t) {
				switch (t.$$typeof) {
					case ne: return n = Li(t.type, t.key, t.props, null, e.mode, n), co(n, t), n.return = e, n;
					case re: return t = Vi(t, e.mode, n), t.return = e, t;
					case le: return t = to(t), f(e, t, n);
				}
				if (ye(t) || ge(t)) return t = Ri(t, e.mode, n, null), t.return = e, t;
				if (typeof t.then == "function") return f(e, so(t), n);
				if (t.$$typeof === O) return f(e, Ea(e, t), n);
				lo(e, t);
			}
			return null;
		}
		function p(e, t, n, r) {
			var i = t === null ? null : t.key;
			if (typeof n == "string" && n !== "" || typeof n == "number" || typeof n == "bigint") return i === null ? c(e, t, "" + n, r) : null;
			if (typeof n == "object" && n) {
				switch (n.$$typeof) {
					case ne: return n.key === i ? l(e, t, n, r) : null;
					case re: return n.key === i ? u(e, t, n, r) : null;
					case le: return n = to(n), p(e, t, n, r);
				}
				if (ye(n) || ge(n)) return i === null ? d(e, t, n, r, null) : null;
				if (typeof n.then == "function") return p(e, t, so(n), r);
				if (n.$$typeof === O) return p(e, t, Ea(e, n), r);
				lo(e, n);
			}
			return null;
		}
		function m(e, t, n, r, i) {
			if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint") return e = e.get(n) || null, c(t, e, "" + r, i);
			if (typeof r == "object" && r) {
				switch (r.$$typeof) {
					case ne: return e = e.get(r.key === null ? n : r.key) || null, l(t, e, r, i);
					case re: return e = e.get(r.key === null ? n : r.key) || null, u(t, e, r, i);
					case le: return r = to(r), m(e, t, n, r, i);
				}
				if (ye(r) || ge(r)) return e = e.get(n) || null, d(t, e, r, i, null);
				if (typeof r.then == "function") return m(e, t, n, so(r), i);
				if (r.$$typeof === O) return m(e, t, n, Ea(t, r), i);
				lo(t, r);
			}
			return null;
		}
		function h(i, a, s, c) {
			for (var l = null, u = null, d = a, h = a = 0, g = null; d !== null && h < s.length; h++) {
				d.index > h ? (g = d, d = null) : g = d.sibling;
				var _ = p(i, d, s[h], c);
				if (_ === null) {
					d === null && (d = g);
					break;
				}
				e && d && _.alternate === null && t(i, d), a = o(_, a, h), u === null ? l = _ : u.sibling = _, u = _, d = g;
			}
			if (h === s.length) return n(i, d), B && $i(i, h), l;
			if (d === null) {
				for (; h < s.length; h++) d = f(i, s[h], c), d !== null && (a = o(d, a, h), u === null ? l = d : u.sibling = d, u = d);
				return B && $i(i, h), l;
			}
			for (d = r(d); h < s.length; h++) g = m(d, i, h, s[h], c), g !== null && (e && (_ = g.alternate, _ !== null && d.delete(_.key === null ? h : _.key)), a = o(g, a, h), u === null ? l = g : u.sibling = g, u = g);
			return e && d.forEach(function(e) {
				return t(i, e);
			}), B && $i(i, h), l;
		}
		function g(a, s, c, l) {
			if (c == null) throw Error(i(151));
			for (var u = null, d = null, h = s, g = s = 0, _ = null, v = c.next(); h !== null && !v.done; g++, v = c.next()) {
				h.index > g ? (_ = h, h = null) : _ = h.sibling;
				var y = p(a, h, v.value, l);
				if (y === null) {
					h === null && (h = _);
					break;
				}
				e && h && y.alternate === null && t(a, h), s = o(y, s, g), d === null ? u = y : d.sibling = y, d = y, h = _;
			}
			if (v.done) return n(a, h), B && $i(a, g), u;
			if (h === null) {
				for (; !v.done; g++, v = c.next()) v = f(a, v.value, l), v !== null && (s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
				return B && $i(a, g), u;
			}
			for (h = r(h); !v.done; g++, v = c.next()) v = m(h, a, g, v.value, l), v !== null && (e && (_ = v.alternate, _ !== null && h.delete(_.key === null ? g : _.key)), s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
			return e && h.forEach(function(e) {
				return t(a, e);
			}), B && $i(a, g), u;
		}
		function _(e, r, o, c) {
			if (typeof o == "object" && o && o.type === D && o.key === null && o.props.ref === void 0 && (o = o.props.children), typeof o == "object" && o) {
				switch (o.$$typeof) {
					case ne:
						a: {
							for (var l = o.key; r !== null;) {
								if (r.key === l) {
									if (l = o.type, l === D) {
										if (r.tag === 7) {
											n(e, r.sibling), c = a(r, o.props.children), co(c, o), c.return = e, e = c;
											break a;
										}
									} else if (r.elementType === l || typeof l == "object" && l && l.$$typeof === le && to(l) === r.type) {
										n(e, r.sibling), c = a(r, o.props), co(c, o), c.return = e, e = c;
										break a;
									}
									n(e, r);
									break;
								}
								t(e, r), r = r.sibling;
							}
							o.type === D ? (c = Ri(o.props.children, e.mode, c, o.key), co(c, o), c.return = e, e = c) : (c = Li(o.type, o.key, o.props, null, e.mode, c), co(c, o), c.return = e, e = c);
						}
						return s(e);
					case re:
						a: {
							for (l = o.key; r !== null;) {
								if (r.key === l) {
									if (r.tag === 4 && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
										n(e, r.sibling), c = a(r, o.children || []), c.return = e, e = c;
										break a;
									}
									n(e, r);
									break;
								}
								t(e, r), r = r.sibling;
							}
							c = Vi(o, e.mode, c), c.return = e, e = c;
						}
						return s(e);
					case le: return o = to(o), _(e, r, o, c);
				}
				if (ye(o)) return h(e, r, o, c);
				if (ge(o)) {
					if (l = ge(o), typeof l != "function") throw Error(i(150));
					return o = l.call(o), g(e, r, o, c);
				}
				if (typeof o.then == "function") return _(e, r, so(o), c);
				if (o.$$typeof === O) return _(e, r, Ea(e, o), c);
				lo(e, o);
			}
			return typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint" ? (o = "" + o, r !== null && r.tag === 6 ? (n(e, r.sibling), c = a(r, o), c.return = e, e = c) : (n(e, r), c = zi(o, e.mode, c), c.return = e, e = c), s(e)) : n(e, r);
		}
		return function(e, t, n, r) {
			try {
				oo = 0;
				var i = _(e, t, n, r);
				return ao = null, i;
			} catch (t) {
				if (t === Ya || t === Za) throw t;
				var a = Ni(29, t, null, e.mode);
				return a.lanes = r, a.return = e, a;
			}
		};
	}
	var fo = uo(!0), po = uo(!1), mo = !1;
	function ho(e) {
		e.updateQueue = {
			baseState: e.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: {
				pending: null,
				lanes: 0,
				hiddenCallbacks: null
			},
			callbacks: null
		};
	}
	function go(e, t) {
		e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
			baseState: e.baseState,
			firstBaseUpdate: e.firstBaseUpdate,
			lastBaseUpdate: e.lastBaseUpdate,
			shared: e.shared,
			callbacks: null
		});
	}
	function _o(e) {
		return {
			lane: e,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function vo(e, t, n) {
		var r = e.updateQueue;
		if (r === null) return null;
		if (r = r.shared, K & 2) {
			var i = r.pending;
			return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, t = Ai(e), ki(e, null, n), t;
		}
		return Ei(e, r, t, n), Ai(e);
	}
	function yo(e, t, n) {
		if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194048)) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, bt(e, n);
		}
	}
	function bo(e, t) {
		var n = e.updateQueue, r = e.alternate;
		if (r !== null && (r = r.updateQueue, n === r)) {
			var i = null, a = null;
			if (n = n.firstBaseUpdate, n !== null) {
				do {
					var o = {
						lane: n.lane,
						tag: n.tag,
						payload: n.payload,
						callback: null,
						next: null
					};
					a === null ? i = a = o : a = a.next = o, n = n.next;
				} while (n !== null);
				a === null ? i = a = t : a = a.next = t;
			} else i = a = t;
			n = {
				baseState: r.baseState,
				firstBaseUpdate: i,
				lastBaseUpdate: a,
				shared: r.shared,
				callbacks: r.callbacks
			}, e.updateQueue = n;
			return;
		}
		e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
	}
	var xo = !1;
	function So() {
		if (xo) {
			var e = Ba;
			if (e !== null) throw e;
		}
	}
	function Co(e, t, n, r) {
		xo = !1;
		var i = e.updateQueue;
		mo = !1;
		var a = i.firstBaseUpdate, o = i.lastBaseUpdate, s = i.shared.pending;
		if (s !== null) {
			i.shared.pending = null;
			var c = s, l = c.next;
			c.next = null, o === null ? a = l : o.next = l, o = c;
			var u = e.alternate;
			u !== null && (u = u.updateQueue, s = u.lastBaseUpdate, s !== o && (s === null ? u.firstBaseUpdate = l : s.next = l, u.lastBaseUpdate = c));
		}
		if (a !== null) {
			var d = i.baseState;
			o = 0, u = l = c = null, s = a;
			do {
				var f = s.lane & -536870913, p = f !== s.lane;
				if (p ? (Y & f) === f : (r & f) === f) {
					f !== 0 && f === za && (xo = !0), u !== null && (u = u.next = {
						lane: 0,
						tag: s.tag,
						payload: s.payload,
						callback: null,
						next: null
					});
					a: {
						var m = e, h = s;
						f = t;
						var g = n;
						switch (h.tag) {
							case 1:
								if (m = h.payload, typeof m == "function") {
									d = m.call(g, d, f);
									break a;
								}
								d = m;
								break a;
							case 3: m.flags = m.flags & -65537 | 128;
							case 0:
								if (m = h.payload, f = typeof m == "function" ? m.call(g, d, f) : m, f == null) break a;
								d = E({}, d, f);
								break a;
							case 2: mo = !0;
						}
					}
					f = s.callback, f !== null && (e.flags |= 64, p && (e.flags |= 8192), p = i.callbacks, p === null ? i.callbacks = [f] : p.push(f));
				} else p = {
					lane: f,
					tag: s.tag,
					payload: s.payload,
					callback: s.callback,
					next: null
				}, u === null ? (l = u = p, c = d) : u = u.next = p, o |= f;
				if (s = s.next, s === null) {
					if (s = i.shared.pending, s === null) break;
					p = s, s = p.next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null;
				}
			} while (1);
			u === null && (c = d), i.baseState = c, i.firstBaseUpdate = l, i.lastBaseUpdate = u, a === null && (i.shared.lanes = 0), od |= o, e.lanes = o, e.memoizedState = d;
		}
	}
	function wo(e, t) {
		if (typeof e != "function") throw Error(i(191, e));
		e.call(t);
	}
	function To(e, t) {
		var n = e.callbacks;
		if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) wo(n[e], t);
	}
	var Eo = Ce(null), Do = Ce(0);
	function Oo(e, t) {
		e = id, N(Do, e), N(Eo, t), id = e | t.baseLanes;
	}
	function ko() {
		N(Do, id), N(Eo, Eo.current);
	}
	function Ao() {
		id = Do.current, we(Eo), we(Do);
	}
	var jo = Ce(null), Mo = null;
	function No(e) {
		var t = e.alternate;
		N(Ro, Ro.current & 1), N(jo, e), Mo === null && (t === null || Eo.current !== null || t.memoizedState !== null) && (Mo = e);
	}
	function Po(e) {
		N(Ro, Ro.current), N(jo, e), Mo === null && (Mo = e);
	}
	function Fo(e) {
		e.tag === 22 ? (N(Ro, Ro.current), N(jo, e), Mo === null && (Mo = e)) : Io();
	}
	function Io() {
		N(Ro, Ro.current), N(jo, jo.current);
	}
	function Lo(e) {
		we(jo), Mo === e && (Mo = null), we(Ro);
	}
	var Ro = Ce(0);
	function zo(e, t) {
		N(jo, jo.current), N(Ro, t);
	}
	function Bo(e) {
		we(Ro), we(jo), Mo === e && (Mo = null);
	}
	function Vo(e) {
		for (var t = e; t !== null;) {
			if (t.tag === 13) {
				var n = t.memoizedState;
				if (n !== null && (n = n.dehydrated, n === null || om(n) || sm(n))) return t;
			} else if (t.tag === 19 && t.memoizedProps.revealOrder !== "independent") {
				if (t.flags & 128) return t;
			} else if (t.child !== null) {
				t.child.return = t, t = t.child;
				continue;
			}
			if (t === e) break;
			for (; t.sibling === null;) {
				if (t.return === null || t.return === e) return null;
				t = t.return;
			}
			t.sibling.return = t.return, t = t.sibling;
		}
		return null;
	}
	var Ho = 0, V = null, H = null, Uo = null, Wo = !1, Go = !1, Ko = !1, qo = 0, Jo = 0, Yo = null, Xo = 0;
	function Zo() {
		throw Error(i(321));
	}
	function Qo(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++) if (!Hr(e[n], t[n])) return !1;
		return !0;
	}
	function $o(e, t, n, r, i, a) {
		return Ho = a, V = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, j.H = e === null || e.memoizedState === null ? hc : gc, Ko = !1, a = n(r, i), Ko = !1, Go && (a = ts(t, n, r, i)), es(e), a;
	}
	function es(e) {
		j.H = mc;
		var t = H !== null && H.next !== null;
		if (Ho = 0, Uo = H = V = null, Wo = !1, Jo = 0, Yo = null, t) throw Error(i(300));
		e === null || Nc || (e = e.dependencies, e !== null && Ca(e) && (Nc = !0));
	}
	function ts(e, t, n, r) {
		V = e;
		var a = 0;
		do {
			if (Go && (Yo = null), Jo = 0, Go = !1, 25 <= a) throw Error(i(301));
			if (a += 1, Uo = H = null, e.updateQueue != null) {
				var o = e.updateQueue;
				o.lastEffect = null, o.events = null, o.stores = null, o.memoCache != null && (o.memoCache.index = 0);
			}
			j.H = _c, o = t(n, r);
		} while (Go);
		return o;
	}
	function ns() {
		var e = j.H, t = e.useState()[0];
		return t = typeof t.then == "function" ? cs(t) : t, e = e.useState()[0], (H === null ? null : H.memoizedState) !== e && (V.flags |= 1024), t;
	}
	function rs() {
		var e = qo !== 0;
		return qo = 0, e;
	}
	function is(e, t, n) {
		t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
	}
	function as(e) {
		if (Wo) {
			for (e = e.memoizedState; e !== null;) {
				var t = e.queue;
				t !== null && (t.pending = null), e = e.next;
			}
			Wo = !1;
		}
		Ho = 0, Uo = H = V = null, Go = !1, Jo = qo = 0, Yo = null;
	}
	function os() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return Uo === null ? V.memoizedState = Uo = e : Uo = Uo.next = e, Uo;
	}
	function U() {
		if (H === null) {
			var e = V.alternate;
			e = e === null ? null : e.memoizedState;
		} else e = H.next;
		var t = Uo === null ? V.memoizedState : Uo.next;
		if (t !== null) Uo = t, H = e;
		else {
			if (e === null) throw V.alternate === null ? Error(i(467)) : Error(i(310));
			H = e, e = {
				memoizedState: H.memoizedState,
				baseState: H.baseState,
				baseQueue: H.baseQueue,
				queue: H.queue,
				next: null
			}, Uo === null ? V.memoizedState = Uo = e : Uo = Uo.next = e;
		}
		return Uo;
	}
	function ss() {
		return {
			lastEffect: null,
			events: null,
			stores: null,
			memoCache: null
		};
	}
	function cs(e) {
		var t = Jo;
		return Jo += 1, Yo === null && (Yo = []), e = eo(Yo, e, t), t = V, (Uo === null ? t.memoizedState : Uo.next) === null && (t = t.alternate, j.H = t === null || t.memoizedState === null ? hc : gc), e;
	}
	function ls(e) {
		if (typeof e == "object" && e) {
			if (typeof e.then == "function") return cs(e);
			if (e.$$typeof === me) return;
			if (e.$$typeof === O) return Ta(e);
		}
		throw Error(i(438, String(e)));
	}
	function us(e) {
		var t = null, n = V.updateQueue;
		if (n !== null && (t = n.memoCache), t == null) {
			var r = V.alternate;
			r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
				data: r.data.map(function(e) {
					return e.slice();
				}),
				index: 0
			})));
		}
		if (t ??= {
			data: [],
			index: 0
		}, n === null && (n = ss(), V.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0) for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = fe;
		return t.index++, n;
	}
	function ds(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function fs(e) {
		return ps(U(), H, e);
	}
	function ps(e, t, n) {
		var r = e.queue;
		if (r === null) throw Error(i(311));
		r.lastRenderedReducer = n;
		var a = e.baseQueue, o = r.pending;
		if (o !== null) {
			if (a !== null) {
				var s = a.next;
				a.next = o.next, o.next = s;
			}
			t.baseQueue = a = o, r.pending = null;
		}
		if (o = e.baseState, a === null) e.memoizedState = o;
		else {
			t = a.next;
			var c = s = null, l = null, u = t, d = !1;
			do {
				var f = u.lane & -536870913;
				if (f === u.lane ? (Ho & f) === f : (Y & f) === f) {
					var p = u.revertLane;
					if (p === 0) l !== null && (l = l.next = {
						lane: 0,
						revertLane: 0,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}), f === za && (d = !0);
					else if ((Ho & p) === p) {
						u = u.next, p === za && (d = !0);
						continue;
					} else f = {
						lane: 0,
						revertLane: u.revertLane,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}, l === null ? (c = l = f, s = o) : l = l.next = f, V.lanes |= p, od |= p;
					f = u.action, Ko && n(o, f), o = u.hasEagerState ? u.eagerState : n(o, f);
				} else p = {
					lane: f,
					revertLane: u.revertLane,
					gesture: u.gesture,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null
				}, l === null ? (c = l = p, s = o) : l = l.next = p, V.lanes |= f, od |= f;
				u = u.next;
			} while (u !== null && u !== t);
			if (l === null ? s = o : l.next = c, !Hr(o, e.memoizedState) && (Nc = !0, d && (n = Ba, n !== null))) throw n;
			e.memoizedState = o, e.baseState = s, e.baseQueue = l, r.lastRenderedState = o;
		}
		return a === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
	}
	function ms(e) {
		var t = U(), n = t.queue;
		if (n === null) throw Error(i(311));
		n.lastRenderedReducer = e;
		var r = n.dispatch, a = n.pending, o = t.memoizedState;
		if (a !== null) {
			n.pending = null;
			var s = a = a.next;
			do
				o = e(o, s.action), s = s.next;
			while (s !== a);
			Hr(o, t.memoizedState) || (Nc = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
		}
		return [o, r];
	}
	function hs(e, t, n) {
		var r = V, a = U(), o = B;
		if (o) {
			if (n === void 0) throw Error(i(407));
			n = n();
		} else n = t();
		var s = !Hr((H || a).memoizedState, n);
		if (s && (a.memoizedState = n, Nc = !0), a = a.queue, Bs(vs.bind(null, r, a, e), [e]), e = a.getSnapshot !== t || s || Uo !== null && !!(Uo.memoizedState.tag & 1), Fs(e ? 9 : 8, { destroy: void 0 }, _s.bind(null, r, a, n, t), null), e) {
			if (r.flags |= 2048, q === null) throw Error(i(349));
			o || Ho & 127 || gs(r, t, n);
		}
		return n;
	}
	function gs(e, t, n) {
		e.flags |= 16384, e = {
			getSnapshot: t,
			value: n
		}, t = V.updateQueue, t === null ? (t = ss(), V.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
	}
	function _s(e, t, n, r) {
		t.value = n, t.getSnapshot = r, ys(t) && bs(e);
	}
	function vs(e, t, n) {
		return n(function() {
			ys(t) && bs(e);
		});
	}
	function ys(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !Hr(e, n);
		} catch {
			return !0;
		}
	}
	function bs(e) {
		var t = Oi(e, 2);
		t !== null && Pd(t, e, 2);
	}
	function xs(e) {
		var t = os();
		if (typeof e == "function") {
			var n = e;
			if (e = n(), Ko) {
				nt(!0);
				try {
					n();
				} finally {
					nt(!1);
				}
			}
		}
		return t.memoizedState = t.baseState = e, t.queue = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: ds,
			lastRenderedState: e
		}, t;
	}
	function Ss(e, t, n, r) {
		return e.baseState = n, ps(e, H, typeof r == "function" ? r : ds);
	}
	function Cs(e, t, n, r, a) {
		if (dc(e)) throw Error(i(485));
		if (e = t.action, e !== null) {
			var o = {
				payload: a,
				action: e,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: function(e) {
					o.listeners.push(e);
				}
			};
			j.T === null ? o.isTransition = !1 : n(!0), r(o), n = t.pending, n === null ? (o.next = t.pending = o, ws(t, o)) : (o.next = n.next, t.pending = n.next = o);
		}
	}
	function ws(e, t) {
		var n = t.action, r = t.payload, i = e.state;
		if (t.isTransition) {
			var a = j.T, o = {};
			o.types = a === null ? null : a.types, j.T = o;
			try {
				var s = n(i, r), c = j.S;
				c !== null && c(o, s), Ts(e, t, s);
			} catch (n) {
				Ds(e, t, n);
			} finally {
				a !== null && o.types !== null && (a.types = o.types), j.T = a;
			}
		} else try {
			a = n(i, r), Ts(e, t, a);
		} catch (n) {
			Ds(e, t, n);
		}
	}
	function Ts(e, t, n) {
		typeof n == "object" && n && typeof n.then == "function" ? n.then(function(n) {
			Es(e, t, n);
		}, function(n) {
			return Ds(e, t, n);
		}) : Es(e, t, n);
	}
	function Es(e, t, n) {
		t.status = "fulfilled", t.value = n, Os(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, ws(e, n)));
	}
	function Ds(e, t, n) {
		var r = e.pending;
		if (e.pending = null, r !== null) {
			r = r.next;
			do
				t.status = "rejected", t.reason = n, Os(t), t = t.next;
			while (t !== r);
		}
		e.action = null;
	}
	function Os(e) {
		e = e.listeners;
		for (var t = 0; t < e.length; t++) (0, e[t])();
	}
	function ks(e, t) {
		return t;
	}
	function As(e, t) {
		if (B) {
			var n = q.formState;
			if (n !== null) {
				a: {
					var r = V;
					if (B) {
						if (z) {
							b: {
								for (var i = z, a = oa; i.nodeType !== 8;) {
									if (!a) {
										i = null;
										break b;
									}
									if (i = lm(i.nextSibling), i === null) {
										i = null;
										break b;
									}
								}
								a = i.data, i = a === "F!" || a === "F" ? i : null;
							}
							if (i) {
								z = lm(i.nextSibling), r = i.data === "F!";
								break a;
							}
						}
						ca(r);
					}
					r = !1;
				}
				r && (t = n[0]);
			}
		}
		return n = os(), n.memoizedState = n.baseState = t, r = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: ks,
			lastRenderedState: t
		}, n.queue = r, n = cc.bind(null, V, r), r.dispatch = n, r = xs(!1), a = uc.bind(null, V, !1, r.queue), r = os(), i = {
			state: t,
			dispatch: null,
			action: e,
			pending: null
		}, r.queue = i, n = Cs.bind(null, V, i, a, n), i.dispatch = n, r.memoizedState = e, [
			t,
			n,
			!1
		];
	}
	function js(e) {
		return Ms(U(), H, e);
	}
	function Ms(e, t, n) {
		if (t = ps(e, t, ks)[0], e = fs(ds)[0], typeof t == "object" && t && typeof t.then == "function") try {
			var r = cs(t);
		} catch (e) {
			throw e === Ya ? Za : e;
		}
		else r = t;
		t = U();
		var i = t.queue, a = i.dispatch;
		return n !== t.memoizedState && (V.flags |= 2048, Fs(9, { destroy: void 0 }, Ns.bind(null, i, n), null)), [
			r,
			a,
			e
		];
	}
	function Ns(e, t) {
		e.action = t;
	}
	function Ps(e) {
		var t = U(), n = H;
		if (n !== null) return Ms(t, n, e);
		U(), t = t.memoizedState, n = U();
		var r = n.queue.dispatch;
		return n.memoizedState = e, [
			t,
			r,
			!1
		];
	}
	function Fs(e, t, n, r) {
		return e = {
			tag: e,
			create: n,
			deps: r,
			inst: t,
			next: null
		}, t = V.updateQueue, t === null && (t = ss(), V.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e;
	}
	function Is() {
		return U().memoizedState;
	}
	function Ls(e, t, n, r) {
		var i = os();
		V.flags |= e, i.memoizedState = Fs(1 | t, { destroy: void 0 }, n, r === void 0 ? null : r);
	}
	function Rs(e, t, n, r) {
		var i = U();
		r = r === void 0 ? null : r;
		var a = i.memoizedState.inst;
		H !== null && r !== null && Qo(r, H.memoizedState.deps) ? i.memoizedState = Fs(t, a, n, r) : (V.flags |= e, i.memoizedState = Fs(1 | t, a, n, r));
	}
	function zs(e, t) {
		Ls(8390656, 8, e, t);
	}
	function Bs(e, t) {
		Rs(2048, 8, e, t);
	}
	function Vs(e) {
		V.flags |= 4;
		var t = V.updateQueue;
		if (t === null) t = ss(), V.updateQueue = t, t.events = [e];
		else {
			var n = t.events;
			n === null ? t.events = [e] : n.push(e);
		}
	}
	function Hs(e) {
		var t = U().memoizedState;
		return Vs({
			ref: t,
			nextImpl: e
		}), function() {
			if (K & 2) throw Error(i(440));
			return t.impl.apply(void 0, arguments);
		};
	}
	function Us(e, t) {
		return Rs(4, 2, e, t);
	}
	function Ws(e, t) {
		return Rs(4, 4, e, t);
	}
	function Gs(e, t) {
		if (typeof t == "function") {
			e = e();
			var n = t(e);
			return function() {
				typeof n == "function" ? n() : t(null);
			};
		}
		if (t != null) return e = e(), t.current = e, function() {
			t.current = null;
		};
	}
	function Ks(e, t, n) {
		n = n == null ? null : n.concat([e]), Rs(4, 4, Gs.bind(null, t, e), n);
	}
	function qs() {}
	function Js(e, t) {
		var n = U();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return t !== null && Qo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
	}
	function Ys(e, t) {
		var n = U();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		if (t !== null && Qo(t, r[1])) return r[0];
		if (r = e(), Ko) {
			nt(!0);
			try {
				e();
			} finally {
				nt(!1);
			}
		}
		return n.memoizedState = [r, t], r;
	}
	function Xs(e, t, n) {
		return n === void 0 || Ho & 1073741824 && !(Y & 261930) ? e.memoizedState = t : (e.memoizedState = n, e = Md(), V.lanes |= e, od |= e, n);
	}
	function Zs(e, t, n, r) {
		return Hr(n, t) ? n : Eo.current === null ? !(Ho & 106) || Ho & 1073741824 && !(Y & 261930) ? (Nc = !0, e.memoizedState = n) : (e = Md(), V.lanes |= e, od |= e, t) : (e = Xs(e, n, r), Hr(e, t) || (Nc = !0), e);
	}
	function Qs(e, t, n, r, i) {
		var a = M.p;
		M.p = a !== 0 && 8 > a ? a : 8;
		var o = j.T, s = {};
		s.types = o === null ? null : o.types, j.T = s, uc(e, !1, t, n);
		try {
			var c = i(), l = j.S;
			l !== null && l(s, c), typeof c == "object" && c && typeof c.then == "function" ? lc(e, t, Ua(c, r), jd(e)) : lc(e, t, r, jd(e));
		} catch (n) {
			lc(e, t, {
				then: function() {},
				status: "rejected",
				reason: n
			}, jd());
		} finally {
			M.p = a, o !== null && s.types !== null && (o.types = s.types), j.T = o;
		}
	}
	function $s() {}
	function ec(e, t, n, r) {
		if (e.tag !== 5) throw Error(i(476));
		var a = tc(e).queue;
		Qs(e, a, t, be, n === null ? $s : function() {
			return nc(e), n(r);
		});
	}
	function tc(e) {
		var t = e.memoizedState;
		if (t !== null) return t;
		t = {
			memoizedState: be,
			baseState: be,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: ds,
				lastRenderedState: be
			},
			next: null
		};
		var n = {};
		return t.next = {
			memoizedState: n,
			baseState: n,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: ds,
				lastRenderedState: n
			},
			next: null
		}, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
	}
	function nc(e) {
		var t = tc(e);
		t.next === null && (t = e.alternate.memoizedState), lc(e, t.next.queue, {}, jd());
	}
	function rc() {
		return Ta(sh);
	}
	function ic() {
		return U().memoizedState;
	}
	function ac() {
		return U().memoizedState;
	}
	function oc(e) {
		for (var t = e.return; t !== null;) {
			switch (t.tag) {
				case 24:
				case 3:
					var n = jd();
					e = _o(n);
					var r = vo(t, e, n);
					r !== null && (Pd(r, t, n), yo(r, t, n)), t = { cache: Ma() }, e.payload = t;
					return;
			}
			t = t.return;
		}
	}
	function sc(e, t, n) {
		var r = jd();
		n = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, dc(e) ? fc(t, n) : (n = Di(e, t, n, r), n !== null && (Pd(n, e, r), pc(n, t, r)));
	}
	function cc(e, t, n) {
		lc(e, t, n, jd());
	}
	function lc(e, t, n, r) {
		var i = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (dc(e)) fc(t, i);
		else {
			var a = e.alternate;
			if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
				var o = t.lastRenderedState, s = a(o, n);
				if (i.hasEagerState = !0, i.eagerState = s, Hr(s, o)) return Ei(e, t, i, 0), q === null && Ti(), !1;
			} catch {}
			if (n = Di(e, t, i, r), n !== null) return Pd(n, e, r), pc(n, t, r), !0;
		}
		return !1;
	}
	function uc(e, t, n, r) {
		if (r = {
			lane: 2,
			revertLane: Pf(),
			gesture: null,
			action: r,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, dc(e)) {
			if (t) throw Error(i(479));
		} else t = Di(e, n, r, 2), t !== null && Pd(t, e, 2);
	}
	function dc(e) {
		var t = e.alternate;
		return e === V || t !== null && t === V;
	}
	function fc(e, t) {
		Go = Wo = !0;
		var n = e.pending;
		n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
	}
	function pc(e, t, n) {
		if (n & 4194048) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, bt(e, n);
		}
	}
	var mc = {
		readContext: Ta,
		use: ls,
		useCallback: Zo,
		useContext: Zo,
		useEffect: Zo,
		useImperativeHandle: Zo,
		useLayoutEffect: Zo,
		useInsertionEffect: Zo,
		useMemo: Zo,
		useReducer: Zo,
		useRef: Zo,
		useState: Zo,
		useDebugValue: Zo,
		useDeferredValue: Zo,
		useTransition: Zo,
		useSyncExternalStore: Zo,
		useId: Zo,
		useHostTransitionStatus: Zo,
		useFormState: Zo,
		useActionState: Zo,
		useOptimistic: Zo,
		useMemoCache: Zo,
		useCacheRefresh: Zo,
		useEffectEvent: Zo
	}, hc = {
		readContext: Ta,
		use: ls,
		useCallback: function(e, t) {
			return os().memoizedState = [e, t === void 0 ? null : t], e;
		},
		useContext: Ta,
		useEffect: zs,
		useImperativeHandle: function(e, t, n) {
			n = n == null ? null : n.concat([e]), Ls(4194308, 4, Gs.bind(null, t, e), n);
		},
		useLayoutEffect: function(e, t) {
			return Ls(4194308, 4, e, t);
		},
		useInsertionEffect: function(e, t) {
			Ls(4, 2, e, t);
		},
		useMemo: function(e, t) {
			var n = os();
			t = t === void 0 ? null : t;
			var r = e();
			if (Ko) {
				nt(!0);
				try {
					e();
				} finally {
					nt(!1);
				}
			}
			return n.memoizedState = [r, t], r;
		},
		useReducer: function(e, t, n) {
			var r = os();
			if (n !== void 0) {
				var i = n(t);
				if (Ko) {
					nt(!0);
					try {
						n(t);
					} finally {
						nt(!1);
					}
				}
			} else i = t;
			return r.memoizedState = r.baseState = i, e = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: i
			}, r.queue = e, e = e.dispatch = sc.bind(null, V, e), [r.memoizedState, e];
		},
		useRef: function(e) {
			var t = os();
			return e = { current: e }, t.memoizedState = e;
		},
		useState: function(e) {
			e = xs(e);
			var t = e.queue, n = cc.bind(null, V, t);
			return t.dispatch = n, [e.memoizedState, n];
		},
		useDebugValue: qs,
		useDeferredValue: function(e, t) {
			return Xs(os(), e, t);
		},
		useTransition: function() {
			var e = xs(!1);
			return e = Qs.bind(null, V, e.queue, !0, !1), os().memoizedState = e, [!1, e];
		},
		useSyncExternalStore: function(e, t, n) {
			var r = V, a = os();
			if (B) {
				if (n === void 0) throw Error(i(407));
				n = n();
			} else {
				if (n = t(), q === null) throw Error(i(349));
				Y & 127 || gs(r, t, n);
			}
			a.memoizedState = n;
			var o = {
				value: n,
				getSnapshot: t
			};
			return a.queue = o, zs(vs.bind(null, r, o, e), [e]), r.flags |= 2048, Fs(9, { destroy: void 0 }, _s.bind(null, r, o, n, t), null), n;
		},
		useId: function() {
			var e = os(), t = q.identifierPrefix;
			if (B) {
				var n = Qi, r = Zi;
				n = (r & ~(1 << 32 - rt(r) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = qo++, 0 < n && (t += "H" + n.toString(32)), t += "_";
			} else n = Xo++, t = "_" + t + "r_" + n.toString(32) + "_";
			return e.memoizedState = t;
		},
		useHostTransitionStatus: rc,
		useFormState: As,
		useActionState: As,
		useOptimistic: function(e) {
			var t = os();
			t.memoizedState = t.baseState = e;
			var n = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: null,
				lastRenderedState: null
			};
			return t.queue = n, t = uc.bind(null, V, !0, n), n.dispatch = t, [e, t];
		},
		useMemoCache: us,
		useCacheRefresh: function() {
			return os().memoizedState = oc.bind(null, V);
		},
		useEffectEvent: function(e) {
			var t = os(), n = { impl: e };
			return t.memoizedState = n, function() {
				if (K & 2) throw Error(i(440));
				return n.impl.apply(void 0, arguments);
			};
		}
	}, gc = {
		readContext: Ta,
		use: ls,
		useCallback: Js,
		useContext: Ta,
		useEffect: Bs,
		useImperativeHandle: Ks,
		useInsertionEffect: Us,
		useLayoutEffect: Ws,
		useMemo: Ys,
		useReducer: fs,
		useRef: Is,
		useState: function() {
			return fs(ds);
		},
		useDebugValue: qs,
		useDeferredValue: function(e, t) {
			return Zs(U(), H.memoizedState, e, t);
		},
		useTransition: function() {
			var e = fs(ds)[0], t = U().memoizedState;
			return [typeof e == "boolean" ? e : cs(e), t];
		},
		useSyncExternalStore: hs,
		useId: ic,
		useHostTransitionStatus: rc,
		useFormState: js,
		useActionState: js,
		useOptimistic: function(e, t) {
			return Ss(U(), H, e, t);
		},
		useMemoCache: us,
		useCacheRefresh: ac,
		useEffectEvent: Hs
	}, _c = {
		readContext: Ta,
		use: ls,
		useCallback: Js,
		useContext: Ta,
		useEffect: Bs,
		useImperativeHandle: Ks,
		useInsertionEffect: Us,
		useLayoutEffect: Ws,
		useMemo: Ys,
		useReducer: ms,
		useRef: Is,
		useState: function() {
			return ms(ds);
		},
		useDebugValue: qs,
		useDeferredValue: function(e, t) {
			var n = U();
			return H === null ? Xs(n, e, t) : Zs(n, H.memoizedState, e, t);
		},
		useTransition: function() {
			var e = ms(ds)[0], t = U().memoizedState;
			return [typeof e == "boolean" ? e : cs(e), t];
		},
		useSyncExternalStore: hs,
		useId: ic,
		useHostTransitionStatus: rc,
		useFormState: Ps,
		useActionState: Ps,
		useOptimistic: function(e, t) {
			var n = U();
			return H === null ? (n.baseState = e, [e, n.queue.dispatch]) : Ss(n, H, e, t);
		},
		useMemoCache: us,
		useCacheRefresh: ac,
		useEffectEvent: Hs
	};
	function vc(e, t, n, r) {
		t = e.memoizedState, n = n(r, t), n = n == null ? t : E({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
	}
	var yc = {
		enqueueSetState: function(e, t, n) {
			e = e._reactInternals;
			var r = jd(), i = _o(r);
			i.payload = t, n != null && (i.callback = n), t = vo(e, i, r), t !== null && (Pd(t, e, r), yo(t, e, r));
		},
		enqueueReplaceState: function(e, t, n) {
			e = e._reactInternals;
			var r = jd(), i = _o(r);
			i.tag = 1, i.payload = t, n != null && (i.callback = n), t = vo(e, i, r), t !== null && (Pd(t, e, r), yo(t, e, r));
		},
		enqueueForceUpdate: function(e, t) {
			e = e._reactInternals;
			var n = jd(), r = _o(n);
			r.tag = 2, t != null && (r.callback = t), t = vo(e, r, n), t !== null && (Pd(t, e, n), yo(t, e, n));
		}
	};
	function bc(e, t, n, r, i, a, o) {
		return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Ur(n, r) || !Ur(i, a) : !0;
	}
	function xc(e, t, n, r) {
		e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && yc.enqueueReplaceState(t, t.state, null);
	}
	function Sc(e, t) {
		var n = t;
		if ("ref" in t) for (var r in n = {}, t) r !== "ref" && (n[r] = t[r]);
		if (e = e.defaultProps) for (var i in n === t && (n = E({}, n)), e) n[i] === void 0 && (n[i] = e[i]);
		return n;
	}
	function Cc(e) {
		xi(e);
	}
	function wc(e) {
		console.error(e);
	}
	function Tc(e) {
		xi(e);
	}
	function Ec(e, t) {
		try {
			var n = e.onUncaughtError;
			n(t.value, { componentStack: t.stack });
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function Dc(e, t, n) {
		try {
			var r = e.onCaughtError;
			r(n.value, {
				componentStack: n.stack,
				errorBoundary: t.tag === 1 ? t.stateNode : null
			});
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function Oc(e, t, n) {
		return n = _o(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
			Ec(e, t);
		}, n;
	}
	function kc(e) {
		return e = _o(e), e.tag = 3, e;
	}
	function Ac(e, t, n, r) {
		var i = n.type.getDerivedStateFromError;
		if (typeof i == "function") {
			var a = r.value;
			e.payload = function() {
				return i(a);
			}, e.callback = function() {
				Dc(t, n, r);
			};
		}
		var o = n.stateNode;
		o !== null && typeof o.componentDidCatch == "function" && (e.callback = function() {
			Dc(t, n, r), typeof i != "function" && (vd === null ? vd = /* @__PURE__ */ new Set([this]) : vd.add(this));
			var e = r.stack;
			this.componentDidCatch(r.value, { componentStack: e === null ? "" : e });
		});
	}
	function jc(e, t, n, r, a) {
		if (n.flags |= 32768, typeof r == "object" && r && typeof r.then == "function") {
			if (t = n.alternate, t !== null && Sa(t, n, a, !0), n = jo.current, n !== null) {
				switch (n.tag) {
					case 31:
					case 13:
					case 19: return Mo === null ? Kd() : n.alternate === null && ad === 0 && (ad = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, r === Qa ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([r]) : t.add(r), mf(e, r, a)), !1;
					case 22: return n.flags |= 65536, r === Qa ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
						transitions: null,
						markerInstances: null,
						retryQueue: /* @__PURE__ */ new Set([r])
					}, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([r]) : n.add(r)), mf(e, r, a)), !1;
				}
				throw Error(i(435, n.tag));
			}
			return mf(e, r, a), Kd(), !1;
		}
		if (B) return t = jo.current, t === null ? (r !== sa && (t = Error(i(423), { cause: r }), ma(Ui(t, n))), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, r = Ui(r, n), a = Oc(e.stateNode, r, a), bo(e, a), ad !== 4 && (ad = 2)) : (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = a, r !== sa && (e = Error(i(422), { cause: r }), ma(Ui(e, n)))), !1;
		var o = Error(i(520), { cause: r });
		if (o = Ui(o, n), dd === null ? dd = [o] : dd.push(o), ad !== 4 && (ad = 2), t === null) return !0;
		r = Ui(r, n), n = t;
		do {
			switch (n.tag) {
				case 3: return n.flags |= 65536, e = a & -a, n.lanes |= e, e = Oc(n.stateNode, r, e), bo(n, e), !1;
				case 1:
					if (t = n.type, o = n.stateNode, !(n.flags & 128) && (typeof t.getDerivedStateFromError == "function" || o !== null && typeof o.componentDidCatch == "function" && (vd === null || !vd.has(o)))) return n.flags |= 65536, a &= -a, n.lanes |= a, a = kc(a), Ac(a, e, n, r), bo(n, a), !1;
					break;
				case 22: if (n.memoizedState !== null) return n.flags |= 65536, !1;
			}
			n = n.return;
		} while (n !== null);
		return !1;
	}
	var Mc = Error(i(461)), Nc = !1;
	function Pc(e, t, n, r) {
		t.child = e === null ? po(t, null, n, r) : fo(t, e.child, n, r);
	}
	function Fc(e, t, n, r, i) {
		n = n.render;
		var a = t.ref;
		if ("ref" in r) {
			var o = {};
			for (var s in r) s !== "ref" && (o[s] = r[s]);
		} else o = r;
		return wa(t), r = $o(e, t, n, o, a, i), s = rs(), e !== null && !Nc ? (is(e, t, i), ll(e, t, i)) : (B && s && ta(t), t.flags |= 1, Pc(e, t, r, i), t.child);
	}
	function Ic(e, t, n, r, i) {
		if (e === null) {
			var a = n.type;
			return typeof a == "function" && !Pi(a) && a.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = a, Lc(e, t, a, r, i)) : (e = Li(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
		}
		if (a = e.child, !ul(e, i)) {
			var o = a.memoizedProps;
			if (n = n.compare, n = n === null ? Ur : n, n(o, r) && e.ref === t.ref) return ll(e, t, i);
		}
		return t.flags |= 1, e = Fi(a, r), e.ref = t.ref, e.return = t, t.child = e;
	}
	function Lc(e, t, n, r, i) {
		if (e !== null) {
			var a = e.memoizedProps;
			if (Ur(a, r) && e.ref === t.ref) {
				if (Nc = !1, t.pendingProps = r = a, ul(e, i)) e.flags & 131072 && (Nc = !0);
				else return t.lanes = e.lanes, ll(e, t, i);
			}
		}
		return Gc(e, t, n, r, i);
	}
	function Rc(e, t, n, r) {
		var i = r.children, a = e === null ? null : e.memoizedState;
		if (e === null && t.stateNode === null && (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), r.mode === "hidden") {
			if (t.flags & 128) {
				if (a = a === null ? n : a.baseLanes | n, e !== null) {
					for (r = t.child = e.child, i = 0; r !== null;) i = i | r.lanes | r.childLanes, r = r.sibling;
					r = i & ~a;
				} else r = 0, t.child = null;
				return Bc(e, t, a, n, r);
			}
			if (n & 536870912) t.memoizedState = {
				baseLanes: 0,
				cachePool: null
			}, e !== null && qa(t, a === null ? null : a.cachePool), a === null ? ko() : Oo(t, a), Fo(t);
			else return r = t.lanes = 536870912, Bc(e, t, a === null ? n : a.baseLanes | n, n, r);
		} else a === null ? (e !== null && qa(t, null), ko(), Io()) : (qa(t, a.cachePool), Oo(t, a), Io(), t.memoizedState = null);
		return Pc(e, t, i, n), t.child;
	}
	function zc(e, t) {
		return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), t.sibling;
	}
	function Bc(e, t, n, r, i) {
		var a = Ka();
		return a = a === null ? null : {
			parent: ja._currentValue,
			pool: a
		}, t.memoizedState = {
			baseLanes: n,
			cachePool: a
		}, e !== null && qa(t, null), ko(), Fo(t), e !== null && Sa(e, t, r, !0), t.childLanes = i, null;
	}
	function Vc(e, t) {
		return t = el({
			mode: t.mode,
			children: t.children
		}, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
	}
	function Hc(e, t, n) {
		return fo(t, e.child, null, n), e = Vc(t, t.pendingProps), e.flags |= 2, Lo(t), t.memoizedState = null, e;
	}
	function Uc(e, t, n) {
		var r = t.pendingProps, a = !!(t.flags & 128);
		if (t.flags &= -129, e === null) {
			if (B) {
				if (r.mode === "hidden") return e = Vc(t, r), t.lanes = 536870912, e.memoizedState = {
					baseLanes: 0,
					cachePool: null
				}, zc(null, e);
				if (Po(t), (e = z) ? (e = am(e, oa), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Xi === null ? null : {
						id: Zi,
						overflow: Qi
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = Bi(e), n.return = t, t.child = n, ia = t, z = null)) : e = null, e === null) throw ca(t);
				return t.lanes = 536870912, null;
			}
			return Vc(t, r);
		}
		var o = e.memoizedState;
		if (o !== null) {
			var s = o.dehydrated;
			if (Po(t), a) {
				if (t.flags & 256) t.flags &= -257, t = Hc(e, t, n);
				else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
				else throw Error(i(558));
			} else if (Nc || Sa(e, t, n, !1), a = (n & e.childLanes) !== 0, Nc || a) {
				if (Eo.current === null) {
					if (r = q, r !== null && (s = xt(r, n), s !== 0 && s !== o.retryLane)) throw o.retryLane = s, Oi(e, s), Pd(r, e, s), Mc;
					Kd();
				}
				t = Hc(e, t, n);
			} else e = o.treeContext, z = lm(s.nextSibling), ia = t, B = !0, aa = null, oa = !1, e !== null && ra(t, e), t = Vc(t, r), t.flags |= 134221824;
			return t;
		}
		return e = Fi(e.child, {
			mode: r.mode,
			children: r.children
		}), e.ref = t.ref, t.child = e, e.return = t, e;
	}
	function Wc(e, t) {
		var n = t.ref;
		if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
		else {
			if (typeof n != "function" && typeof n != "object") throw Error(i(284));
			(e === null || e.ref !== n) && (t.flags |= 4194816);
		}
	}
	function Gc(e, t, n, r, i) {
		return wa(t), n = $o(e, t, n, r, void 0, i), r = rs(), e !== null && !Nc ? (is(e, t, i), ll(e, t, i)) : (B && r && ta(t), t.flags |= 1, Pc(e, t, n, i), t.child);
	}
	function Kc(e, t, n, r, i, a) {
		return wa(t), t.updateQueue = null, n = ts(t, r, n, i), es(e), r = rs(), e !== null && !Nc ? (is(e, t, a), ll(e, t, a)) : (B && r && ta(t), t.flags |= 1, Pc(e, t, n, a), t.child);
	}
	function qc(e, t, n, r, i) {
		if (wa(t), t.stateNode === null) {
			var a = ji, o = n.contextType;
			typeof o == "object" && o && (a = Ta(o)), a = new n(r, a), t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = yc, t.stateNode = a, a._reactInternals = t, a = t.stateNode, a.props = r, a.state = t.memoizedState, a.refs = {}, ho(t), o = n.contextType, a.context = typeof o == "object" && o ? Ta(o) : ji, a.state = t.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (vc(t, n, o, r), a.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (o = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), o !== a.state && yc.enqueueReplaceState(a, a.state, null), Co(t, r, a, i), So(), a.state = t.memoizedState), typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !0;
		} else if (e === null) {
			a = t.stateNode;
			var s = t.memoizedProps, c = Sc(n, s);
			a.props = c;
			var l = a.context, u = n.contextType;
			o = ji, typeof u == "object" && u && (o = Ta(u));
			var d = n.getDerivedStateFromProps;
			u = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function", s = t.pendingProps !== s, u || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s || l !== o) && xc(t, a, r, o), mo = !1;
			var f = t.memoizedState;
			a.state = f, Co(t, r, a, i), So(), l = t.memoizedState, s || f !== l || mo ? (typeof d == "function" && (vc(t, n, d, r), l = t.memoizedState), (c = mo || bc(t, n, c, r, f, l, o)) ? (u || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = o, r = c) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
		} else {
			a = t.stateNode, go(e, t), o = t.memoizedProps, u = Sc(n, o), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, c = ji, typeof l == "object" && l && (c = Ta(l)), s = n.getDerivedStateFromProps, (l = typeof s == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== d || f !== c) && xc(t, a, r, c), mo = !1, f = t.memoizedState, a.state = f, Co(t, r, a, i), So();
			var p = t.memoizedState;
			o !== d || f !== p || mo || e !== null && e.dependencies !== null && Ca(e.dependencies) ? (typeof s == "function" && (vc(t, n, s, r), p = t.memoizedState), (u = mo || bc(t, n, u, r, f, p, c) || e !== null && e.dependencies !== null && Ca(e.dependencies)) ? (l || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, p, c), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, p, c)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), a.props = r, a.state = p, a.context = c, r = u) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
		}
		return a = r, Wc(e, t), r = !!(t.flags & 128), a || r ? (a = t.stateNode, n = r && typeof n.getDerivedStateFromError != "function" ? null : a.render(), t.flags |= 1, e !== null && r ? (t.child = fo(t, e.child, null, i), t.child = fo(t, null, n, i)) : Pc(e, t, n, i), t.memoizedState = a.state, e = t.child) : e = ll(e, t, i), e;
	}
	function Jc(e, t, n, r) {
		return fa(), t.flags |= 256, Pc(e, t, n, r), t.child;
	}
	var Yc = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null
	};
	function Xc(e) {
		return {
			baseLanes: e,
			cachePool: Ja()
		};
	}
	function Zc(e, t, n) {
		return e = e === null ? 0 : e.childLanes & ~n, t && (e |= ld), e;
	}
	function Qc(e, t, n) {
		var r = t.pendingProps, i = !1, a = !!(t.flags & 128), o;
		if ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : !!(Ro.current & 2)), o && (i = !0, t.flags &= -129), o = !!(t.flags & 32), t.flags &= -33, e === null) {
			if (B) {
				if (i ? No(t) : Io(), (e = z) ? (e = am(e, oa), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Xi === null ? null : {
						id: Zi,
						overflow: Qi
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = Bi(e), n.return = t, t.child = n, ia = t, z = null)) : e = null, e === null) throw ca(t);
				return t.lanes = sm(e) ? 32 : 536870912, null;
			}
			return a = r.children, r = r.fallback, i ? (Io(), i = t.mode, a = el({
				mode: "hidden",
				children: a
			}, i), r = Ri(r, i, n, null), a.return = t, r.return = t, a.sibling = r, t.child = a, r = t.child, r.memoizedState = Xc(n), r.childLanes = Zc(e, o, n), t.memoizedState = Yc, zc(null, r)) : (No(t), $c(t, a));
		}
		var s = e.memoizedState;
		if (s !== null) {
			var c = s.dehydrated;
			if (c !== null) return nl(e, t, a, o, r, c, s, n);
		}
		return i ? (Io(), i = r.fallback, a = t.mode, s = e.child, c = s.sibling, r = Fi(s, {
			mode: "hidden",
			children: r.children
		}), r.subtreeFlags = s.subtreeFlags & 1206910976, c === null ? (i = Ri(i, a, n, null), i.flags |= 2) : i = Fi(c, i), i.return = t, r.return = t, r.sibling = i, t.child = r, zc(null, r), r = t.child, i = e.child.memoizedState, i === null ? i = Xc(n) : (a = i.cachePool, a === null ? a = Ja() : (s = ja._currentValue, a = a.parent === s ? a : {
			parent: s,
			pool: s
		}), i = {
			baseLanes: i.baseLanes | n,
			cachePool: a
		}), r.memoizedState = i, r.childLanes = Zc(e, o, n), t.memoizedState = Yc, zc(e.child, r)) : (No(t), n = e.child, e = n.sibling, n = Fi(n, {
			mode: "visible",
			children: r.children
		}), n.return = t, n.sibling = null, e !== null && (o = t.deletions, o === null ? (t.deletions = [e], t.flags |= 16) : o.push(e)), t.child = n, t.memoizedState = null, n);
	}
	function $c(e, t) {
		return t = el({
			mode: "visible",
			children: t
		}, e.mode), t.return = e, e.child = t;
	}
	function el(e, t) {
		return e = Ni(22, e, null, t), e.lanes = 0, e;
	}
	function tl(e, t, n) {
		return fo(t, e.child, null, n), e = $c(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
	}
	function nl(e, t, n, r, a, o, s, c) {
		if (n) return t.flags & 256 ? (No(t), t.flags &= -257, tl(e, t, c)) : t.memoizedState === null ? (Io(), o = a.fallback, s = t.mode, a = el({
			mode: "visible",
			children: a.children
		}, s), o = Ri(o, s, c, null), o.flags |= 2, a.return = t, o.return = t, a.sibling = o, t.child = a, fo(t, e.child, null, c), a = t.child, a.memoizedState = Xc(c), a.childLanes = Zc(e, r, c), t.memoizedState = Yc, zc(null, a)) : (Io(), t.child = e.child, t.flags |= 128, null);
		if (No(t), sm(o)) {
			if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
			return r = l, r !== "" && (a = Error(i(419)), a.stack = "", a.digest = r, ma({
				value: a,
				source: null,
				stack: null
			})), tl(e, t, c);
		}
		if (Nc || Sa(e, t, c, !1), r = (c & e.childLanes) !== 0, Nc || r) {
			if (Eo.current !== null) return tl(e, t, c);
			if (r = q, r !== null && (a = xt(r, c), a !== 0 && a !== s.retryLane)) throw s.retryLane = a, Oi(e, a), Pd(r, e, a), Mc;
			return om(o) || Kd(), tl(e, t, c);
		}
		return om(o) ? (t.flags |= 192, t.child = e.child, null) : (e = s.treeContext, z = lm(o.nextSibling), ia = t, B = !0, aa = null, oa = !1, e !== null && ra(t, e), t = $c(t, a.children), t.flags |= 134221824, t);
	}
	function rl(e, t, n) {
		e.lanes |= t;
		var r = e.alternate;
		r !== null && (r.lanes |= t), ba(e.return, t, n);
	}
	function il(e) {
		for (var t = null; e !== null;) {
			var n = e.alternate;
			n !== null && Vo(n) === null && (t = e), e = e.sibling;
		}
		return t;
	}
	function al(e, t, n, r, i, a) {
		var o = e.memoizedState;
		o === null ? e.memoizedState = {
			isBackwards: t,
			rendering: null,
			renderingStartTime: 0,
			last: r,
			tail: n,
			tailMode: i,
			treeForkCount: a
		} : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i, o.treeForkCount = a);
	}
	function ol(e) {
		var t = e.child;
		for (e.child = null; t !== null;) {
			var n = t.sibling;
			t.sibling = e.child, e.child = t, t = n;
		}
	}
	function sl(e, t, n) {
		var r = t.pendingProps, i = r.revealOrder, a = r.tail;
		r = r.children;
		var o = Ro.current;
		if (t.flags & 128) return zo(t, o), null;
		var s = !!(o & 2);
		if (s ? (o = o & 1 | 2, t.flags |= 128) : o &= 1, zo(t, o), i === "backwards" && e !== null ? (ol(e), Pc(e, t, r, n), ol(e)) : Pc(e, t, r, n), r = B ? qi : 0, !s && e !== null && e.flags & 128) a: for (e = t.child; e !== null;) {
			if (e.tag === 13) e.memoizedState !== null && rl(e, n, t);
			else if (e.tag === 19) rl(e, n, t);
			else if (e.child !== null) {
				e.child.return = e, e = e.child;
				continue;
			}
			if (e === t) break a;
			for (; e.sibling === null;) {
				if (e.return === null || e.return === t) break a;
				e = e.return;
			}
			e.sibling.return = e.return, e = e.sibling;
		}
		switch (i) {
			case "backwards":
				n = il(t.child), n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null, ol(t)), al(t, !0, i, null, a, r);
				break;
			case "unstable_legacy-backwards":
				for (n = null, i = t.child, t.child = null; i !== null;) {
					if (e = i.alternate, e !== null && Vo(e) === null) {
						t.child = i;
						break;
					}
					e = i.sibling, i.sibling = n, n = i, i = e;
				}
				al(t, !0, n, null, a, r);
				break;
			case "together":
				al(t, !1, null, null, void 0, r);
				break;
			case "independent":
				t.memoizedState = null;
				break;
			default: n = il(t.child), n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), al(t, !1, i, n, a, r);
		}
		return t.child;
	}
	function cl(e, t, n) {
		var r = t.pendingProps;
		return va(t, t.type, r.value), Pc(e, t, r.children, n), t.child;
	}
	function ll(e, t, n) {
		if (e !== null && (t.dependencies = e.dependencies), od |= t.lanes, (n & t.childLanes) === 0) {
			if (e !== null) {
				if (Sa(e, t, n, !1), (n & t.childLanes) === 0) return null;
			} else return null;
		}
		if (e !== null && t.child !== e.child) throw Error(i(153));
		if (t.child !== null) {
			for (e = t.child, n = Fi(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Fi(e, e.pendingProps), n.return = t;
			n.sibling = null;
		}
		return t.child;
	}
	function ul(e, t) {
		return (e.lanes & t) !== 0 || (e = e.dependencies, !!(e !== null && Ca(e)));
	}
	function dl(e, t, n) {
		switch (t.tag) {
			case 3:
				ke(t, t.stateNode.containerInfo), va(t, ja, e.memoizedState.cache), fa();
				break;
			case 27:
			case 5:
				je(t);
				break;
			case 4:
				ke(t, t.stateNode.containerInfo);
				break;
			case 10:
				va(t, t.type, t.memoizedProps.value);
				break;
			case 31:
				if (t.memoizedState !== null) return t.flags |= 128, Po(t), null;
				break;
			case 13:
				var r = t.memoizedState;
				if (r !== null) {
					if (r.dehydrated !== null) return No(t), t.flags |= 128, null;
					r = Sa(e, t, n, !1);
					var i = t.child.childLanes;
					return r || (n & i) !== 0 ? Qc(e, t, n) : (No(t), e = ll(e, t, n), e === null ? null : e.sibling);
				}
				No(t);
				break;
			case 19:
				if (t.flags & 128) return sl(e, t, n);
				if (i = !!(e.flags & 128), r = (n & t.childLanes) !== 0, r ||= (Sa(e, t, n, !1), (n & t.childLanes) !== 0), i) {
					if (r) return sl(e, t, n);
					t.flags |= 128;
				}
				if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), zo(t, Ro.current), r) break;
				return null;
			case 22: return t.lanes = 0, Rc(e, t, n, t.pendingProps);
			case 24: va(t, ja, e.memoizedState.cache);
		}
		return ll(e, t, n);
	}
	function fl(e, t, n) {
		if (e !== null) {
			if (e.memoizedProps !== t.pendingProps) Nc = !0;
			else {
				if (!ul(e, n) && !(t.flags & 128)) return Nc = !1, dl(e, t, n);
				Nc = !!(e.flags & 131072);
			}
		} else Nc = !1, B && t.flags & 1048576 && ea(t, qi, t.index);
		switch (t.lanes = 0, t.tag) {
			case 16:
				a: {
					var r = t.pendingProps;
					if (e = to(t.elementType), t.type = e, typeof e == "function") Pi(e) ? (r = Sc(e, r), t.tag = 1, t = qc(null, t, e, r, n)) : (t.tag = 0, t = Gc(null, t, e, r, n));
					else {
						if (e != null) {
							var a = e.$$typeof;
							if (a === k) {
								t.tag = 11, t = Fc(null, t, e, r, n);
								break a;
							}
							if (a === ce) {
								t.tag = 14, t = Ic(null, t, e, r, n);
								break a;
							}
							if (a === O) {
								t.tag = 10, t.type = e, t = cl(null, t, n);
								break a;
							}
						}
						throw t = ve(e) || e, Error(i(306, t, ""));
					}
				}
				return t;
			case 0: return Gc(e, t, t.type, t.pendingProps, n);
			case 1: return r = t.type, a = Sc(r, t.pendingProps), qc(e, t, r, a, n);
			case 3:
				a: {
					if (ke(t, t.stateNode.containerInfo), e === null) throw Error(i(387));
					r = t.pendingProps;
					var o = t.memoizedState;
					a = o.element, go(e, t), Co(t, r, null, n);
					var s = t.memoizedState;
					if (r = s.cache, va(t, ja, r), r !== o.cache && xa(t, [ja], n, !0), So(), r = s.element, o.isDehydrated) {
						if (o = {
							element: r,
							isDehydrated: !1,
							cache: s.cache
						}, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
							t = Jc(e, t, r, n);
							break a;
						}
						if (r !== a) {
							a = Ui(Error(i(424)), t), ma(a), t = Jc(e, t, r, n);
							break a;
						}
						switch (e = t.stateNode.containerInfo, e.nodeType) {
							case 9:
								e = e.body;
								break;
							default: e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
						}
						for (z = lm(e.firstChild), ia = t, B = !0, aa = null, oa = !0, n = po(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 134221824, n = n.sibling;
					} else {
						if (fa(), r === a) {
							t = ll(e, t, n);
							break a;
						}
						Pc(e, t, r, n);
					}
					t = t.child;
				}
				return t;
			case 26: return Wc(e, t), e === null ? (n = Nm(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : B || (t.stateNode = fp(t.type, t.pendingProps, De.current, t)) : t.memoizedState = Nm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
			case 27: return je(t), e === null && B && (r = t.stateNode = hm(t.type, t.pendingProps, De.current), ia = t, oa = !0, a = z, Sp(t.type) ? (um = a, z = lm(r.firstChild)) : z = a), Pc(e, t, t.pendingProps.children, n), Wc(e, t), e === null && (t.flags |= 4194304), t.child;
			case 5: return e === null && B && ((a = r = z) && (r = rm(r, t.type, t.pendingProps, oa), r === null ? a = !1 : (t.stateNode = r, ia = t, z = lm(r.firstChild), oa = !1, a = !0)), a || ca(t)), je(t), a = t.type, o = t.pendingProps, s = e === null ? null : e.memoizedProps, r = o.children, pp(a, o) ? r = null : s !== null && pp(a, s) && (t.flags |= 32), t.memoizedState !== null && (a = $o(e, t, ns, null, null, n), sh._currentValue = a), Wc(e, t), Pc(e, t, r, n), t.child;
			case 6: return e === null && B && ((e = n = z) && (n = im(n, t.pendingProps, oa), n === null ? e = !1 : (t.stateNode = n, ia = t, z = null, e = !0)), e || ca(t)), null;
			case 13: return Qc(e, t, n);
			case 4: return ke(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = fo(t, null, r, n) : Pc(e, t, r, n), t.child;
			case 11: return Fc(e, t, t.type, t.pendingProps, n);
			case 7: return r = t.pendingProps, Wc(e, t), Pc(e, t, r, n), t.child;
			case 8: return Pc(e, t, t.pendingProps.children, n), t.child;
			case 12: return Pc(e, t, t.pendingProps.children, n), t.child;
			case 10: return cl(e, t, n);
			case 9: return a = t.type._context, r = t.pendingProps.children, wa(t), a = Ta(a), r = r(a), t.flags |= 1, Pc(e, t, r, n), t.child;
			case 14: return Ic(e, t, t.type, t.pendingProps, n);
			case 15: return Lc(e, t, t.type, t.pendingProps, n);
			case 19: return sl(e, t, n);
			case 31: return Uc(e, t, n);
			case 22: return Rc(e, t, n, t.pendingProps);
			case 24: return wa(t), r = Ta(ja), e === null ? (a = Ka(), a === null && (a = q, o = Ma(), a.pooledCache = o, o.refCount++, o !== null && (a.pooledCacheLanes |= n), a = o), t.memoizedState = {
				parent: r,
				cache: a
			}, ho(t), va(t, ja, a)) : ((e.lanes & n) !== 0 && (go(e, t), Co(t, null, null, n), So()), a = e.memoizedState, o = t.memoizedState, a.parent === r ? (r = o.cache, va(t, ja, r), r !== a.cache && xa(t, [ja], n, !0)) : (a = {
				parent: r,
				cache: r
			}, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), va(t, ja, r))), Pc(e, t, t.pendingProps.children, n), t.child;
			case 30: return t.stateNode === null && (t.stateNode = {
				autoName: null,
				paired: null,
				clones: null,
				ref: null
			}), r = t.pendingProps, r.name != null && r.name !== "auto" ? t.flags |= e === null ? 18882560 : 18874368 : B && ta(t), e !== null && e.memoizedProps.name !== r.name ? t.flags |= 4194816 : Wc(e, t), Pc(e, t, r.children, n), t.child;
			case 29: throw t.pendingProps;
		}
		throw Error(i(156, t.tag));
	}
	function pl(e) {
		e.flags |= 4;
	}
	function ml(e, t, n, r, i) {
		var a;
		if ((a = !!(e.mode & 32)) && (a = n === null ? Jm(t, r) : Jm(t, r) && (r.src !== n.src || r.srcSet !== n.srcSet)), a) {
			if (e.flags |= 16777216, (i & 335544128) === i) {
				if (e.stateNode.complete) e.flags |= 8192;
				else if (Ud()) e.flags |= 8192;
				else throw no = Qa, Xa;
			}
		} else e.flags &= -16777217;
	}
	function hl(e, t) {
		if (t.type !== "stylesheet" || t.state.loading & 4) e.flags &= -16777217;
		else if (e.flags |= 16777216, !Ym(t)) {
			if (Ud()) e.flags |= 8192;
			else throw no = Qa, Xa;
		}
	}
	function gl(e, t) {
		t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag === 22 ? 536870912 : ht(), e.lanes |= t, ud |= t);
	}
	function _l(e, t) {
		if (!B) switch (e.tailMode) {
			case "visible": break;
			case "collapsed":
				for (var n = e.tail, r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
				r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
				break;
			default:
				for (t = e.tail, n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
				n === null ? e.tail = null : n.sibling = null;
		}
	}
	function W(e) {
		var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
		if (t) for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 1206910976, r |= i.flags & 1206910976, i.return = e, i = i.sibling;
		else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
		return e.subtreeFlags |= r, e.childLanes = n, t;
	}
	function vl(e, t, n) {
		var r = t.pendingProps;
		switch (na(t), t.tag) {
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return W(t), null;
			case 1: return W(t), null;
			case 3: return n = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), ya(ja), Ae(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (da(t) ? pl(t) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, pa())), W(t), null;
			case 26:
				var a = t.type, o = t.memoizedState;
				return e === null ? (pl(t), o === null ? (W(t), ml(t, a, null, r, n)) : (W(t), hl(t, o))) : o ? o === e.memoizedState ? (W(t), t.flags &= -16777217) : (pl(t), W(t), hl(t, o)) : (e = e.memoizedProps, e !== r && pl(t), W(t), ml(t, a, e, r, n)), null;
			case 27:
				if (Me(t), n = De.current, a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && pl(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return W(t), t.subtreeFlags &= -33554433, null;
					}
					e = Te.current, da(t) ? la(t, e) : (e = hm(a, r, n), t.stateNode = e, pl(t));
				}
				return W(t), t.subtreeFlags &= -33554433, null;
			case 5:
				if (Me(t), a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && pl(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return W(t), t.subtreeFlags &= -33554433, null;
					}
					if (o = Te.current, da(t)) la(t, o);
					else {
						var s = lp(De.current);
						switch (o) {
							case 1:
								o = s.createElementNS("http://www.w3.org/2000/svg", a);
								break;
							case 2:
								o = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
								break;
							default: switch (a) {
								case "svg":
									o = s.createElementNS("http://www.w3.org/2000/svg", a);
									break;
								case "math":
									o = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
									break;
								case "script":
									o = s.createElement("div"), o.innerHTML = "<script><\/script>", o = o.removeChild(o.firstChild);
									break;
								case "select":
									o = typeof r.is == "string" ? s.createElement("select", { is: r.is }) : s.createElement("select"), r.multiple ? o.multiple = !0 : r.size && (o.size = r.size);
									break;
								default: o = typeof r.is == "string" ? s.createElement(a, { is: r.is }) : s.createElement(a);
							}
						}
						o[Dt] = t, o[Ot] = r;
						a: for (s = t.child; s !== null;) {
							if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
							else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
								s.child.return = s, s = s.child;
								continue;
							}
							if (s === t) break a;
							for (; s.sibling === null;) {
								if (s.return === null || s.return === t) break a;
								s = s.return;
							}
							s.sibling.return = s.return, s = s.sibling;
						}
						t.stateNode = o;
						a: switch (np(o, a, r), a) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break a;
							case "img":
								r = !0;
								break a;
							default: r = !1;
						}
						r && pl(t);
					}
				}
				return W(t), t.subtreeFlags &= -33554433, ml(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
			case 6:
				if (e && t.stateNode != null) e.memoizedProps !== r && pl(t);
				else {
					if (typeof r != "string" && t.stateNode === null) throw Error(i(166));
					if (e = De.current, da(t)) {
						if (e = t.stateNode, n = t.memoizedProps, r = null, a = ia, a !== null) switch (a.tag) {
							case 27:
							case 5: r = a.memoizedProps;
						}
						e[Dt] = t, e = !!(e.nodeValue === n || r !== null && !0 === r.suppressHydrationWarning || ep(e.nodeValue, n)), e || ca(t, !0);
					} else e = lp(e).createTextNode(r), e[Dt] = t, t.stateNode = e;
				}
				return W(t), null;
			case 31:
				if (n = t.memoizedState, e === null || e.memoizedState !== null) {
					if (r = da(t), n !== null) {
						if (e === null) {
							if (!r) throw Error(i(318));
							if (e = t.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(557));
							e[Dt] = t;
						} else fa(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						W(t), e = !1;
					} else n = pa(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
					if (!e) return t.flags & 256 ? (Lo(t), t) : (Lo(t), null);
					if (t.flags & 128) throw Error(i(558));
				}
				return W(t), null;
			case 13:
				if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
					if (a = da(t), r !== null && r.dehydrated !== null) {
						if (e === null) {
							if (!a) throw Error(i(318));
							if (a = t.memoizedState, a = a === null ? null : a.dehydrated, !a) throw Error(i(317));
							a[Dt] = t;
						} else fa(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						W(t), a = !1;
					} else a = pa(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
					if (!a) return t.flags & 256 ? (Lo(t), t) : (Lo(t), null);
				}
				return Lo(t), t.flags & 128 ? (t.lanes = n, t) : (n = r !== null, e = e !== null && e.memoizedState !== null, n && (r = t.child, a = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (a = r.alternate.memoizedState.cachePool.pool), o = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (o = r.memoizedState.cachePool.pool), o !== a && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), gl(t, t.updateQueue), W(t), null);
			case 4: return Ae(), e === null && Wf(t.stateNode.containerInfo), t.flags |= 67108864, W(t), null;
			case 10: return ya(t.type), W(t), null;
			case 19:
				if (Bo(t), r = t.memoizedState, r === null) return W(t), null;
				if (a = !!(t.flags & 128), o = r.rendering, o === null) {
					if (a) _l(r, !1);
					else {
						if (ad !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
							if (o = Vo(e), o !== null) {
								for (t.flags |= 128, _l(r, !1), e = o.updateQueue, t.updateQueue = e, gl(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;) Ii(n, e), n = n.sibling;
								return zo(t, Ro.current & 1 | 2), B && $i(t, r.treeForkCount), t.child;
							}
							e = e.sibling;
						}
						r.tail !== null && Ge() > gd && (t.flags |= 128, a = !0, _l(r, !1), t.lanes = 4194304);
					}
				} else {
					if (!a) {
						if (e = Vo(o), e !== null) {
							if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, gl(t, e), _l(r, !0), r.tail === null && r.tailMode !== "collapsed" && r.tailMode !== "visible" && !o.alternate && !B) return W(t), null;
						} else 2 * Ge() - r.renderingStartTime > gd && n !== 536870912 && (t.flags |= 128, a = !0, _l(r, !1), t.lanes = 4194304);
					}
					r.isBackwards ? (o.sibling = t.child, t.child = o) : (e = r.last, e === null ? t.child = o : e.sibling = o, r.last = o);
				}
				if (r.tail !== null) {
					e = r.tail;
					a: {
						for (n = e; n !== null;) {
							if (n.alternate !== null) {
								n = !1;
								break a;
							}
							n = n.sibling;
						}
						n = !0;
					}
					return r.rendering = e, r.tail = e.sibling, r.renderingStartTime = Ge(), e.sibling = null, o = Ro.current, o = a ? o & 1 | 2 : o & 1, r.tailMode === "visible" || r.tailMode === "collapsed" || !n || B ? zo(t, o) : (n = o, N(jo, t), N(Ro, n), Mo === null && (Mo = t)), B && $i(t, r.treeForkCount), e;
				}
				return W(t), null;
			case 22:
			case 23: return Lo(t), Ao(), r = t.memoizedState !== null, e === null ? r && (t.flags |= 8192) : e.memoizedState !== null !== r && (t.flags |= 8192), r ? n & 536870912 && !(t.flags & 128) && (W(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : W(t), n = t.updateQueue, n !== null && gl(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), e !== null && we(Ga), null;
			case 24: return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), ya(ja), W(t), null;
			case 25: return null;
			case 30: return t.flags |= 33554432, W(t), null;
		}
		throw Error(i(156, t.tag));
	}
	function yl(e, t) {
		switch (na(t), t.tag) {
			case 1: return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 3: return ya(ja), Ae(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
			case 26:
			case 27:
			case 5: return Me(t), null;
			case 31:
				if (t.memoizedState !== null) {
					if (Lo(t), t.alternate === null) throw Error(i(340));
					fa();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 13:
				if (Lo(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
					if (t.alternate === null) throw Error(i(340));
					fa();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 19: return Bo(t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null), t.flags |= 4, t) : null;
			case 4: return Ae(), null;
			case 10: return ya(t.type), null;
			case 22:
			case 23: return Lo(t), Ao(), e !== null && we(Ga), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 24: return ya(ja), null;
			case 25: return null;
			default: return null;
		}
	}
	function bl(e, t) {
		switch (na(t), t.tag) {
			case 3:
				ya(ja), Ae();
				break;
			case 26:
			case 27:
			case 5:
				Me(t);
				break;
			case 4:
				Ae();
				break;
			case 31:
				t.memoizedState !== null && Lo(t);
				break;
			case 13:
				Lo(t);
				break;
			case 19:
				Bo(t);
				break;
			case 10:
				ya(t.type);
				break;
			case 22:
			case 23:
				Lo(t), Ao(), e !== null && we(Ga);
				break;
			case 24: ya(ja);
		}
	}
	function xl(e, t) {
		try {
			var n = t.updateQueue, r = n === null ? null : n.lastEffect;
			if (r !== null) {
				var i = r.next;
				n = i;
				do {
					if ((n.tag & e) === e) {
						r = void 0;
						var a = n.create, o = n.inst;
						r = a(), o.destroy = r;
					}
					n = n.next;
				} while (n !== i);
			}
		} catch (e) {
			Z(t, t.return, e);
		}
	}
	function Sl(e, t, n) {
		try {
			var r = t.updateQueue, i = r === null ? null : r.lastEffect;
			if (i !== null) {
				var a = i.next;
				r = a;
				do {
					if ((r.tag & e) === e) {
						var o = r.inst, s = o.destroy;
						if (s !== void 0) {
							o.destroy = void 0, i = t;
							var c = n, l = s;
							try {
								l();
							} catch (e) {
								Z(i, c, e);
							}
						}
					}
					r = r.next;
				} while (r !== a);
			}
		} catch (e) {
			Z(t, t.return, e);
		}
	}
	function Cl(e) {
		var t = e.updateQueue;
		if (t !== null) {
			var n = e.stateNode;
			try {
				To(t, n);
			} catch (t) {
				Z(e, e.return, t);
			}
		}
	}
	function wl(e, t, n) {
		n.props = Sc(e.type, e.memoizedProps), n.state = e.memoizedState;
		try {
			n.componentWillUnmount();
		} catch (n) {
			Z(e, t, n);
		}
	}
	function Tl(e, t) {
		try {
			var n = e.ref;
			if (n !== null) {
				switch (e.tag) {
					case 26:
					case 27:
					case 5:
						var r = e.stateNode;
						break;
					case 30:
						var i = e.stateNode, a = vi(e.memoizedProps, i);
						(i.ref === null || i.ref.name !== a) && (i.ref = Pp(a)), r = i.ref;
						break;
					case 7:
						if (e.stateNode === null) {
							var o = new Fp(e);
							h(e.child, !1, Qp, o, void 0, void 0), e.stateNode = o;
						}
						r = e.stateNode;
						break;
					default: r = e.stateNode;
				}
				typeof n == "function" ? e.refCleanup = n(r) : n.current = r;
			}
		} catch (n) {
			Z(e, t, n);
		}
	}
	function El(e, t) {
		var n = e.ref, r = e.refCleanup;
		if (n !== null) {
			if (typeof r == "function") try {
				r();
			} catch (n) {
				Z(e, t, n);
			} finally {
				e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
			}
			else if (typeof n == "function") try {
				n(null);
			} catch (n) {
				Z(e, t, n);
			}
			else n.current = null;
		}
	}
	function Dl(e, t) {
		if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && t !== null) for (var n = 0; n < t.length; n++) em(e.stateNode, t[n]);
	}
	function Ol(e) {
		for (var t = e.return; t !== null && (jl(t) && em(e.stateNode, t.stateNode), !Al(t));) t = t.return;
	}
	function kl(e) {
		for (var t = e.return; t !== null && (jl(t) && tm(e.stateNode, t.stateNode), !Al(t));) t = t.return;
	}
	function Al(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 27;
	}
	function jl(e) {
		return e && e.tag === 7 && e.stateNode !== null;
	}
	function Ml(e) {
		var t = e.type, n = e.memoizedProps, r = e.stateNode;
		try {
			a: switch (t) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					n.autoFocus && r.focus();
					break a;
				case "img": n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet);
			}
		} catch (t) {
			Z(e, e.return, t);
		}
	}
	function Nl(e, t, n) {
		try {
			var r = e.stateNode;
			ip(r, e.type, n, t), r[Ot] = t;
		} catch (t) {
			Z(e, e.return, t);
		}
	}
	function Pl(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Sp(e.type) || e.tag === 4;
	}
	function Fl(e) {
		a: for (;;) {
			for (; e.sibling === null;) {
				if (e.return === null || Pl(e.return)) return null;
				e = e.return;
			}
			for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
				if (e.tag === 27 && Sp(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue a;
				e.child.return = e, e = e.child;
			}
			if (!(e.flags & 2)) return e.stateNode;
		}
	}
	function Il(e, t, n, r) {
		var i = e.tag;
		if (i === 5 || i === 6) i = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(i, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(i), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = bn)), Dl(e, r), P = !0;
		else if (i !== 4 && (i === 27 && (Dl(e, r), r = null, Sp(e.type) && (n = e.stateNode, t = null)), e = e.child, e !== null)) for (Il(e, t, n, r), e = e.sibling; e !== null;) Il(e, t, n, r), e = e.sibling;
	}
	function Ll(e, t, n, r) {
		var i = e.tag;
		if (i === 5 || i === 6) i = e.stateNode, t ? n.insertBefore(i, t) : n.appendChild(i), Dl(e, r), P = !0;
		else if (i !== 4 && (i === 27 && (Dl(e, r), r = null, Sp(e.type) && (n = e.stateNode)), e = e.child, e !== null)) for (Ll(e, t, n, r), e = e.sibling; e !== null;) Ll(e, t, n, r), e = e.sibling;
	}
	function Rl(e) {
		var t = e.stateNode, n = e.memoizedProps;
		try {
			for (var r = e.type, i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
			np(t, r, n), t[Dt] = e, t[Ot] = n;
		} catch (t) {
			Z(e, e.return, t);
		}
	}
	var zl = !1, Bl = null;
	function Vl(e) {
		(e.tag === 30 || e.subtreeFlags & 33554432) && (zl = !0);
	}
	var Hl = null;
	function Ul() {
		var e = Hl;
		return Hl = null, e;
	}
	var Wl = 0;
	function Gl(e, t, n, r, i) {
		return Wl = 0, Kl(e.child, t, n, r, i);
	}
	function Kl(e, t, n, r, i) {
		for (var a = !1; e !== null;) {
			if (e.tag === 5) {
				var o = e.stateNode;
				if (r !== null) {
					var s = Op(o);
					r.push(s), s.view && (a = !0);
				} else a || Op(o).view && (a = !0);
				zl = !0, Tp(o, Wl === 0 ? t : t + "_" + Wl, n), Wl++;
			} else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && i || Kl(e.child, t, n, r, i) && (a = !0));
			e = e.sibling;
		}
		return a;
	}
	function ql(e, t) {
		for (; e !== null;) e.tag === 5 ? Ep(e.stateNode, e.memoizedProps) : (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && t || ql(e.child, t)), e = e.sibling;
	}
	function Jl(e) {
		if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
			if ((e.tag !== 22 || e.memoizedState === null) && (Jl(e), e.tag === 30 && e.flags & 18874368 && e.stateNode.paired)) {
				var t = e.memoizedProps;
				if (t.name == null || t.name === "auto") throw Error(i(544));
				var n = t.name;
				t = bi(t.default, t.share), t !== "none" && (Gl(e, n, t, null, !1) || ql(e.child, !1));
			}
			e = e.sibling;
		}
	}
	function Yl(e, t) {
		if (e.tag === 30) {
			var n = e.stateNode, r = e.memoizedProps, i = vi(r, n), a = bi(r.default, n.paired ? r.share : r.enter);
			a === "none" ? Jl(e) : Gl(e, i, a, null, !1) ? (Jl(e), n.paired || t || Nd(e, r.onEnter)) : ql(e.child, !1);
		} else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) Yl(e, t), e = e.sibling;
		else Jl(e);
	}
	function Xl(e) {
		if (Bl !== null && Bl.size !== 0) {
			var t = Bl;
			if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
				if (e.tag !== 22 || e.memoizedState === null) {
					if (e.tag === 30 && e.flags & 18874368) {
						var n = e.memoizedProps, r = n.name;
						if (r != null && r !== "auto") {
							var i = t.get(r);
							if (i !== void 0) {
								var a = bi(n.default, n.share);
								if (a !== "none" && (Gl(e, r, a, null, !1) ? (a = e.stateNode, i.paired = a, a.paired = i, Nd(e, n.onShare)) : ql(e.child, !1)), t.delete(r), t.size === 0) break;
							}
						}
					}
					Xl(e);
				}
				e = e.sibling;
			}
		}
	}
	function Zl(e) {
		if (e.tag === 30) {
			var t = e.memoizedProps, n = vi(t, e.stateNode), r = Bl === null ? void 0 : Bl.get(n), i = bi(t.default, r === void 0 ? t.exit : t.share);
			i !== "none" && (Gl(e, n, i, null, !1) ? r === void 0 ? Nd(e, t.onExit) : (i = e.stateNode, r.paired = i, i.paired = r, Bl.delete(n), Nd(e, t.onShare)) : ql(e.child, !1)), Bl !== null && Xl(e);
		} else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) Zl(e), e = e.sibling;
		else Bl !== null && Xl(e);
	}
	function Ql(e) {
		for (e = e.child; e !== null;) {
			if (e.tag === 30) {
				var t = e.memoizedProps, n = vi(t, e.stateNode);
				t = bi(t.default, t.update), e.flags &= -5, t !== "none" && Gl(e, n, t, e.memoizedState = [], !1);
			} else e.subtreeFlags & 33554432 && Ql(e);
			e = e.sibling;
		}
	}
	function $l(e) {
		if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
			if (e.tag !== 22 || e.memoizedState === null) {
				if (e.tag === 30 && e.flags & 18874368) {
					var t = e.stateNode;
					t.paired !== null && (t.paired = null, ql(e.child, !1));
				}
				$l(e);
			}
			e = e.sibling;
		}
	}
	function eu(e) {
		if (e.tag === 30) e.stateNode.paired = null, ql(e.child, !1), $l(e);
		else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) eu(e), e = e.sibling;
		else $l(e);
	}
	function tu(e) {
		for (e = e.child; e !== null;) e.tag === 30 ? ql(e.child, !1) : e.subtreeFlags & 33554432 && tu(e), e = e.sibling;
	}
	function nu(e, t, n, r, i, a, o) {
		for (var s = !1; t !== null;) {
			if (t.tag === 5) {
				var c = t.stateNode;
				if (a !== null && Wl < a.length) {
					var l = a[Wl], u = Op(c);
					(l.view || u.view) && (s = !0);
					var d;
					if (d = !(e.flags & 4)) {
						if (u.clip) d = !0;
						else {
							d = l.rect;
							var f = u.rect;
							d = d.y !== f.y || d.x !== f.x || d.height !== f.height || d.width !== f.width;
						}
					}
					d && (e.flags |= 4), u.abs ? u = !l.abs : (l = l.rect, u = u.rect, u = l.height !== u.height || l.width !== u.width), u && (e.flags |= 32);
				} else e.flags |= 32;
				e.flags & 4 && Tp(c, Wl === 0 ? n : n + "_" + Wl, i), s && e.flags & 4 || (Hl === null && (Hl = []), Hl.push(c, Wl === 0 ? r : r + "_" + Wl, t.memoizedProps)), Wl++;
			} else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && o ? e.flags |= t.flags & 32 : nu(e, t.child, n, r, i, a, o) && (s = !0));
			t = t.sibling;
		}
		return s;
	}
	function ru(e, t) {
		for (e = e.child; e !== null;) {
			if (e.tag === 30) {
				var n = e.memoizedProps, r = e.stateNode, i = vi(n, r), a = bi(n.default, n.update);
				if (t) {
					r = r.clones;
					var o = r === null ? null : r.map(kp);
				} else o = e.memoizedState, e.memoizedState = null;
				r = e;
				var s = e.child;
				Wl = 0, i = nu(r, s, i, i, a, o, !1), e.flags & 4 && i && (t || Nd(e, n.onUpdate));
			} else e.subtreeFlags & 33554432 && ru(e, t);
			e = e.sibling;
		}
	}
	var iu = !1, G = !1, au = !1, ou = !1, su = typeof WeakSet == "function" ? WeakSet : Set, cu = null, lu = !1, uu = !1, du = !1, fu = !1;
	function pu(e, t, n) {
		if (e = e.containerInfo, sp = gh, e = Jr(e), Yr(e)) {
			if ("selectionStart" in e) var r = {
				start: e.selectionStart,
				end: e.selectionEnd
			};
			else a: {
				r = (r = e.ownerDocument) && r.defaultView || window;
				var i = r.getSelection && r.getSelection();
				if (i && i.rangeCount !== 0) {
					r = i.anchorNode;
					var a = i.anchorOffset, o = i.focusNode;
					i = i.focusOffset;
					try {
						r.nodeType, o.nodeType;
					} catch {
						r = null;
						break a;
					}
					var s = 0, c = -1, l = -1, u = 0, d = 0, f = e, p = null;
					b: for (;;) {
						for (var m; f !== r || a !== 0 && f.nodeType !== 3 || (c = s + a), f !== o || i !== 0 && f.nodeType !== 3 || (l = s + i), f.nodeType === 3 && (s += f.nodeValue.length), (m = f.firstChild) !== null;) p = f, f = m;
						for (;;) {
							if (f === e) break b;
							if (p === r && ++u === a && (c = s), p === o && ++d === i && (l = s), (m = f.nextSibling) !== null) break;
							f = p, p = f.parentNode;
						}
						f = m;
					}
					r = c === -1 || l === -1 ? null : {
						start: c,
						end: l
					};
				} else r = null;
			}
			r ||= {
				start: 0,
				end: 0
			};
		} else r = null;
		for (cp = {
			focusedElem: e,
			selectionRange: r
		}, gh = !1, n = (n & 335544064) === n, cu = t, t = n ? 9270 : 1024; cu !== null;) {
			if (e = cu, n && (r = e.deletions, r !== null)) for (a = 0; a < r.length; a++) n && Zl(r[a]);
			if (e.alternate === null && e.flags & 2) n && Vl(e), mu(n);
			else {
				if (e.tag === 22) {
					if (r = e.alternate, e.memoizedState !== null) {
						r !== null && r.memoizedState === null && n && Zl(r), mu(n);
						continue;
					}
					if (r !== null && r.memoizedState !== null) {
						n && Vl(e), mu(n);
						continue;
					}
				}
				r = e.child, (e.subtreeFlags & t) !== 0 && r !== null ? (r.return = e, cu = r) : (n && Ql(e), mu(n));
			}
		}
		Bl = null;
	}
	function mu(e) {
		for (; cu !== null;) {
			var t = cu, n = e, r = t.alternate, a = t.flags;
			switch (t.tag) {
				case 0:
				case 11:
				case 15: break;
				case 1:
					if (a & 1024 && r !== null) {
						n = void 0, a = r.memoizedProps, r = r.memoizedState;
						var o = t.stateNode;
						try {
							var s = Sc(t.type, a);
							n = o.getSnapshotBeforeUpdate(s, r), o.__reactInternalSnapshotBeforeUpdate = n;
						} catch (e) {
							Z(t, t.return, e);
						}
					}
					break;
				case 3:
					if (a & 1024) {
						if (r = t.stateNode.containerInfo, n = r.nodeType, n === 9) nm(r);
						else if (n === 1) switch (r.nodeName) {
							case "HEAD":
							case "HTML":
							case "BODY":
								nm(r);
								break;
							default: r.textContent = "";
						}
					}
					break;
				case 5:
				case 26:
				case 27:
				case 6:
				case 4:
				case 17: break;
				case 30:
					n && r !== null && (n = vi(r.memoizedProps, r.stateNode), a = t.memoizedProps, a = bi(a.default, a.update), a !== "none" && Gl(r, n, a, r.memoizedState = [], !0));
					break;
				default: if (a & 1024) throw Error(i(163));
			}
			if (r = t.sibling, r !== null) {
				r.return = t.return, cu = r;
				break;
			}
			cu = t.return;
		}
	}
	function hu(e, t, n) {
		var r = n.flags;
		switch (n.tag) {
			case 0:
			case 11:
			case 15:
				Fu(e, n), r & 4 && xl(5, n);
				break;
			case 1:
				if (Fu(e, n), r & 4) {
					if (e = n.stateNode, t === null) try {
						e.componentDidMount();
					} catch (e) {
						Z(n, n.return, e);
					}
					else {
						var i = Sc(n.type, t.memoizedProps);
						t = t.memoizedState;
						try {
							e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
						} catch (e) {
							Z(n, n.return, e);
						}
					}
				}
				r & 64 && Cl(n), r & 512 && Tl(n, n.return);
				break;
			case 3:
				if (Fu(e, n), r & 64 && (e = n.updateQueue, e !== null)) {
					if (t = null, n.child !== null) switch (n.child.tag) {
						case 27:
						case 5:
							t = n.child.stateNode;
							break;
						case 1: t = n.child.stateNode;
					}
					try {
						To(e, t);
					} catch (e) {
						Z(n, n.return, e);
					}
				}
				break;
			case 27: t === null && r & 4 && Rl(n);
			case 26:
			case 5:
				Fu(e, n), t === null && r & 4 && Ml(n), r & 512 && Tl(n, n.return);
				break;
			case 12:
				Fu(e, n);
				break;
			case 31:
				Fu(e, n), r & 4 && wu(e, n);
				break;
			case 13:
				Fu(e, n), r & 4 && Tu(e, n), r & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = _f.bind(null, n), cm(e, n))));
				break;
			case 22:
				if (r = n.memoizedState !== null || iu, !r) {
					var a = t !== null && t.memoizedState !== null || G;
					t = iu, i = G, iu = r, (G = a) && !i ? (r = 2, n.subtreeFlags & 8772 && (r |= 1), Lu(e, n, r)) : Fu(e, n), iu = t, G = i;
				}
				break;
			case 30:
				Fu(e, n), r & 512 && Tl(n, n.return);
				break;
			case 7: r & 512 && Tl(n, n.return);
			default: Fu(e, n);
		}
	}
	function gu(e, t) {
		for (e = e.child; e !== null;) _u(e, t), e = e.sibling;
	}
	function _u(e, t) {
		switch (e.tag) {
			case 5:
			case 26:
				try {
					var n = e.stateNode;
					if (t) {
						var r = n.style;
						typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";
					} else {
						var i = e.stateNode, a = e.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null;
						i.style.display = o == null || typeof o == "boolean" ? "" : ("" + o).trim();
					}
				} catch (t) {
					Z(e, e.return, t);
				}
				vu(e, t);
				break;
			case 6:
				try {
					e.stateNode.nodeValue = t ? "" : e.memoizedProps, P = !0;
				} catch (t) {
					Z(e, e.return, t);
				}
				break;
			case 18:
				try {
					var s = e.stateNode;
					t ? wp(s, !0) : wp(e.stateNode, !1);
				} catch (t) {
					Z(e, e.return, t);
				}
				break;
			case 22:
			case 23:
				e.memoizedState === null && gu(e, t);
				break;
			default: gu(e, t);
		}
	}
	function vu(e, t) {
		if (e.subtreeFlags & 67108864) for (e = e.child; e !== null;) {
			a: {
				var n = e, r = t;
				switch (n.tag) {
					case 4:
						_u(n, r);
						break a;
					case 22:
						n.memoizedState === null && vu(n, r);
						break a;
					default: vu(n, r);
				}
			}
			e = e.sibling;
		}
	}
	function yu(e) {
		var t = e.alternate;
		t !== null && (e.alternate = null, yu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && It(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
	}
	var bu = null, xu = !1;
	function Su(e, t, n) {
		for (n = n.child; n !== null;) Cu(e, t, n), n = n.sibling;
	}
	function Cu(e, t, n) {
		if (tt && typeof tt.onCommitFiberUnmount == "function") try {
			tt.onCommitFiberUnmount(et, n);
		} catch {}
		switch (n.tag) {
			case 26:
				G || El(n, t), Su(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !G && (n = n.stateNode, n.parentNode.removeChild(n));
				break;
			case 27:
				G || El(n, t), kl(n);
				var r = bu, i = xu;
				Sp(n.type) && (bu = n.stateNode, xu = !1), Su(e, t, n), gm(n.stateNode, n.type, n.memoizedProps), bu = r, xu = i;
				break;
			case 5: G || El(n, t), kl(n);
			case 6:
				if (n.tag === 6 && kl(n), r = bu, i = xu, bu = null, Su(e, t, n), bu = r, xu = i, bu !== null) {
					if (xu) try {
						(bu.nodeType === 9 ? bu.body : bu.nodeName === "HTML" ? bu.ownerDocument.body : bu).removeChild(n.stateNode), P = !0;
					} catch (e) {
						Z(n, t, e);
					}
					else try {
						bu.removeChild(n.stateNode), P = !0;
					} catch (e) {
						Z(n, t, e);
					}
				}
				break;
			case 18:
				bu !== null && (xu ? (e = bu, Cp(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), Hh(e)) : Cp(bu, n.stateNode));
				break;
			case 4:
				r = bu, i = xu, bu = n.stateNode.containerInfo, xu = !0, Su(e, t, n), bu = r, xu = i;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				Sl(2, n, t), G || Sl(4, n, t), Su(e, t, n);
				break;
			case 1:
				G || (El(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function" && wl(n, t, r)), Su(e, t, n);
				break;
			case 21:
				Su(e, t, n);
				break;
			case 22:
				G = (r = G) || n.memoizedState !== null, Su(e, t, n), G = r;
				break;
			case 30:
				El(n, t), Su(e, t, n);
				break;
			case 7:
				G || El(n, t), Su(e, t, n);
				break;
			default: Su(e, t, n);
		}
	}
	function wu(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
			e = e.dehydrated;
			try {
				Hh(e);
			} catch (e) {
				Z(t, t.return, e);
			}
		}
	}
	function Tu(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
			Hh(e);
		} catch (e) {
			Z(t, t.return, e);
		}
	}
	function Eu(e) {
		switch (e.tag) {
			case 31:
			case 13:
			case 19:
				var t = e.stateNode;
				return t === null && (t = e.stateNode = new su()), t;
			case 22: return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new su()), t;
			default: throw Error(i(435, e.tag));
		}
	}
	function Du(e, t) {
		var n = Eu(e);
		t.forEach(function(t) {
			if (!n.has(t)) {
				n.add(t);
				var r = vf.bind(null, e, t);
				t.then(r, r);
			}
		});
	}
	function Ou(e, t, n) {
		var r = t.deletions;
		if (r !== null) for (var a = 0; a < r.length; a++) {
			var o = r[a], s = e, c = t, l = c;
			a: for (; l !== null;) {
				switch (l.tag) {
					case 27:
						if (Sp(l.type)) {
							bu = l.stateNode, xu = !1;
							break a;
						}
						break;
					case 5:
						bu = l.stateNode, xu = !1;
						break a;
					case 3:
					case 4:
						bu = l.stateNode.containerInfo, xu = !0;
						break a;
				}
				l = l.return;
			}
			if (bu === null) throw Error(i(160));
			Cu(s, c, o), bu = null, xu = !1, s = o.alternate, s !== null && (s.return = null), o.return = null;
		}
		if (t.subtreeFlags & 13886) for (t = t.child; t !== null;) Au(t, e, n), t = t.sibling;
	}
	var ku = null;
	function Au(e, t, n) {
		var r = e.alternate, a = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				if (a & 4 && (r = e.updateQueue, r = r === null ? null : r.events, r !== null)) for (var o = 0; o < r.length; o++) {
					var s = r[o];
					s.ref.impl = s.nextImpl;
				}
				Ou(t, e, n), ju(e), a & 4 && (Sl(3, e, e.return), xl(3, e), Sl(5, e, e.return));
				break;
			case 1:
				Ou(t, e, n), ju(e), a & 512 && (G || r === null || El(r, r.return)), a & 64 && iu && (e = e.updateQueue, e !== null && (t = e.callbacks, t !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? t : n.concat(t))));
				break;
			case 26:
				if (o = ku, Ou(t, e, n), ju(e), a & 512 && (G || r === null || El(r, r.return)), a & 4) {
					if (a = r === null ? null : r.memoizedState, n = e.memoizedState, r === null) {
						if (n === null) {
							if (e.stateNode === null) {
								if (iu) e.stateNode = fp(e.type, e.memoizedProps, t.containerInfo, e);
								else {
									a: {
										t = e.type, n = e.memoizedProps, a = o.ownerDocument || o;
										b: switch (t) {
											case "title":
												r = a.getElementsByTagName("title")[0], (!r || r[Pt] || r[Dt] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = a.createElement(t), a.head.insertBefore(r, a.querySelector("head > title"))), np(r, t, n), r[Dt] = e, Vt(r), t = r;
												break a;
											case "link":
												if (o = Gm("link", "href", a).get(t + (n.href || ""))) {
													for (s = 0; s < o.length; s++) if (r = o[s], r.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && r.getAttribute("rel") === (n.rel == null ? null : n.rel) && r.getAttribute("title") === (n.title == null ? null : n.title) && r.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
														o.splice(s, 1);
														break b;
													}
												}
												r = a.createElement(t), np(r, t, n), a.head.appendChild(r);
												break;
											case "meta":
												if (o = Gm("meta", "content", a).get(t + (n.content || ""))) {
													for (s = 0; s < o.length; s++) if (r = o[s], r.getAttribute("content") === (n.content == null ? null : "" + n.content) && r.getAttribute("name") === (n.name == null ? null : n.name) && r.getAttribute("property") === (n.property == null ? null : n.property) && r.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && r.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
														o.splice(s, 1);
														break b;
													}
												}
												r = a.createElement(t), np(r, t, n), a.head.appendChild(r);
												break;
											default: throw Error(i(468, t));
										}
										r[Dt] = e, Vt(r), t = r;
									}
									e.stateNode = t;
								}
							} else iu || Km(o, e.type, e.stateNode);
						} else e.stateNode = Bm(o, n, e.memoizedProps);
					} else a === n ? n === null && e.stateNode !== null && Nl(e, e.memoizedProps, r.memoizedProps) : (a === null ? (t = r.stateNode, t === null || G || t.parentNode.removeChild(t)) : a.count--, n === null ? iu || Km(o, e.type, e.stateNode) : Bm(o, n, e.memoizedProps));
				}
				break;
			case 27:
				Ou(t, e, n), ju(e), a & 512 && (G || r === null || El(r, r.return)), r !== null && a & 4 && Nl(e, e.memoizedProps, r.memoizedProps);
				break;
			case 5:
				if (o = au, au = !1, Ou(t, e, n), au = o, ju(e), a & 512 && (G || r === null || El(r, r.return)), e.flags & 32) {
					t = e.stateNode;
					try {
						pn(t, ""), P = !0;
					} catch (t) {
						Z(e, e.return, t);
					}
				}
				a & 4 && e.stateNode != null && (t = e.memoizedProps, Nl(e, t, r === null ? t : r.memoizedProps)), a & 1024 && (ou = !0);
				break;
			case 6:
				if (Ou(t, e, n), ju(e), a & 4) {
					if (e.stateNode === null) throw Error(i(162));
					t = e.memoizedProps, n = e.stateNode;
					try {
						n.nodeValue = t, P = !0;
					} catch (t) {
						Z(e, e.return, t);
					}
				}
				break;
			case 3:
				if (P = !1, Wm = null, o = ku, ku = bm(t.containerInfo), Ou(t, e, n), ku = o, ju(e), a & 4 && r !== null && r.memoizedState.isDehydrated) try {
					Hh(t.containerInfo);
				} catch (t) {
					Z(e, e.return, t);
				}
				ou && (ou = !1, Mu(e)), P = !1;
				break;
			case 4:
				a = au, au = iu, r = Zt(), o = ku, ku = bm(e.stateNode.containerInfo), Ou(t, e, n), ju(e), ku = o, P && uu && (du = !0), P = r, au = a;
				break;
			case 12:
				Ou(t, e, n), ju(e);
				break;
			case 31:
				Ou(t, e, n), ju(e), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Du(e, t)));
				break;
			case 13:
				Ou(t, e, n), ju(e), e.child.flags & 8192 && e.memoizedState !== null != (r !== null && r.memoizedState !== null) && (md = Ge()), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Du(e, t)));
				break;
			case 22:
				o = e.memoizedState !== null, s = r !== null && r.memoizedState !== null;
				var c = iu, l = G, u = au;
				iu = c || o, au = u || o, G = l || s, Ou(t, e, n), G = l, au = u, iu = c, ju(e), a & 8192 && (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, !o || r === null || s || iu || G || (t = s || G, n = iu, r = G, iu = o || iu, G = t, Iu(e, 2), iu = n, G = r), !o && au || gu(e, o)), a & 4 && (t = e.updateQueue, t !== null && (n = t.retryQueue, n !== null && (t.retryQueue = null, Du(e, n))));
				break;
			case 19:
				Ou(t, e, n), ju(e), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Du(e, t)));
				break;
			case 30:
				a & 512 && (G || r === null || El(r, r.return)), a = Zt(), o = uu, s = (n & 335544064) === n, c = e.memoizedProps, uu = s && bi(c.default, c.update) !== "none", Ou(t, e, n), ju(e), s && r !== null && P && (e.flags |= 4), uu = o, P = a;
				break;
			case 21: break;
			case 7: a & 512 && (G || r === null || El(r, r.return)), r && r.stateNode !== null && (r.stateNode._fragmentFiber = e);
			default: Ou(t, e, n), ju(e);
		}
	}
	function ju(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				for (var n, r = e.return; r !== null;) {
					if (Pl(r)) {
						n = r;
						break;
					}
					r = r.return;
				}
				r = null;
				for (var a = e.return; a !== null;) {
					if (jl(a)) {
						var o = a.stateNode;
						r === null ? r = [o] : r.push(o);
					}
					if (Al(a)) break;
					a = a.return;
				}
				var s = r;
				if (n == null) throw Error(i(160));
				switch (n.tag) {
					case 27:
						var c = n.stateNode;
						Ll(e, Fl(e), c, s);
						break;
					case 5:
						var l = n.stateNode;
						n.flags & 32 && (pn(l, ""), n.flags &= -33), Ll(e, Fl(e), l, s);
						break;
					case 3:
					case 4:
						var u = n.stateNode.containerInfo;
						Il(e, Fl(e), u, s);
						break;
					default: throw Error(i(161));
				}
			} catch (t) {
				Z(e, e.return, t);
			}
			e.flags &= -3;
		}
		t & 4096 && (e.flags &= -4097);
	}
	function Mu(e) {
		if (e.subtreeFlags & 1024) for (e = e.child; e !== null;) {
			var t = e;
			Mu(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, gh = !0, t.reset(), gh = !1), e = e.sibling;
		}
	}
	function Nu(e, t) {
		if (t.subtreeFlags & 9270) for (t = t.child; t !== null;) Pu(t, e), t = t.sibling;
		else ru(t, !1);
	}
	function Pu(e, t) {
		var n = e.alternate;
		if (n === null) Yl(e, !1);
		else switch (e.tag) {
			case 3:
				if (fu = lu = !1, Ul(), Nu(t, e), !lu && !du) {
					if (e = Hl, e !== null) for (var r = 0; r < e.length; r += 3) {
						n = e[r];
						var i = e[r + 1];
						Ep(n, e[r + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate({
							opacity: [0, 0],
							pointerEvents: ["none", "none"]
						}, {
							duration: 0,
							fill: "forwards",
							pseudoElement: "::view-transition-group(" + i + ")"
						});
					}
					e = t.containerInfo, e = e.nodeType === 9 ? e.documentElement : e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "" && (e.style.viewTransitionName = "none", e.animate({
						opacity: [0, 0],
						pointerEvents: ["none", "none"]
					}, {
						duration: 0,
						fill: "forwards",
						pseudoElement: "::view-transition-group(root)"
					}), e.animate({
						width: [0, 0],
						height: [0, 0]
					}, {
						duration: 0,
						fill: "forwards",
						pseudoElement: "::view-transition"
					})), fu = !0;
				}
				Hl = null;
				break;
			case 5:
				Nu(t, e);
				break;
			case 4:
				r = lu, lu = !1, Nu(t, e), lu && (du = !0), lu = r;
				break;
			case 22:
				e.memoizedState === null && (n.memoizedState === null ? Nu(t, e) : Yl(e, !1));
				break;
			case 30:
				r = lu, i = Ul(), lu = !1, Nu(t, e), lu && (e.flags |= 4);
				var a = e.memoizedProps, o = e.stateNode;
				t = vi(a, o), o = vi(n.memoizedProps, o);
				var s = bi(a.default, a.update);
				s === "none" ? t = !1 : (a = n.memoizedState, n.memoizedState = null, n = e.child, Wl = 0, t = nu(e, n, t, o, s, a, !0), Wl !== (a === null ? 0 : a.length) && (e.flags |= 32)), e.flags & 4 && t ? (Nd(e, e.memoizedProps.onUpdate), Hl = i) : i !== null && (i.push.apply(i, Hl), Hl = i), lu = e.flags & 32 ? !0 : r;
				break;
			default: Nu(t, e);
		}
	}
	function Fu(e, t) {
		if (t.subtreeFlags & 8772) for (t = t.child; t !== null;) hu(e, t.alternate, t), t = t.sibling;
	}
	function Iu(e, t) {
		for (e = e.child; e !== null;) {
			var n = e, r = t;
			switch (n.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					Sl(4, n, n.return), Iu(n, r);
					break;
				case 1:
					El(n, n.return);
					var i = n.stateNode;
					typeof i.componentWillUnmount == "function" && wl(n, n.return, i), Iu(n, r);
					break;
				case 27: r & 2 && gm(n.stateNode, n.type, n.memoizedProps);
				case 5:
					El(n, n.return), n.tag !== 5 && n.tag !== 27 || kl(n), Iu(n, r);
					break;
				case 6:
					kl(n);
					break;
				case 26:
					El(n, n.return), i = n.stateNode, n.memoizedState !== null || i === null || G || i.parentNode.removeChild(i), Iu(n, r);
					break;
				case 22:
					n.memoizedState === null && Iu(n, r);
					break;
				case 30:
					El(n, n.return), Iu(n, r);
					break;
				case 7: El(n, n.return);
				default: Iu(n, r);
			}
			e = e.sibling;
		}
	}
	function Lu(e, t, n) {
		for (n = t.subtreeFlags & 8772 ? n : n & -2, t = t.child; t !== null;) {
			var r = t.alternate, i = e, a = t, o = a.flags, s = !!(n & 1);
			switch (a.tag) {
				case 0:
				case 11:
				case 15:
					Lu(i, a, n), xl(4, a);
					break;
				case 1:
					if (Lu(i, a, n), r = a, i = r.stateNode, typeof i.componentDidMount == "function") try {
						i.componentDidMount();
					} catch (e) {
						Z(r, r.return, e);
					}
					if (r = a, i = r.updateQueue, i !== null) {
						var c = r.stateNode;
						try {
							var l = i.shared.hiddenCallbacks;
							if (l !== null) for (i.shared.hiddenCallbacks = null, i = 0; i < l.length; i++) wo(l[i], c);
						} catch (e) {
							Z(r, r.return, e);
						}
					}
					s && o & 64 && Cl(a), Tl(a, a.return);
					break;
				case 27: n & 2 && Rl(a);
				case 5:
					a.tag !== 5 && a.tag !== 27 || Ol(a), Lu(i, a, n), s && r === null && o & 4 && Ml(a), Tl(a, a.return);
					break;
				case 6:
					Ol(a);
					break;
				case 26:
					c = a.stateNode, a.memoizedState !== null || c === null || iu || Km(bm(c.ownerDocument), a.type, c), Lu(i, a, n), s && r === null && o & 4 && Ml(a), Tl(a, a.return);
					break;
				case 12:
					Lu(i, a, n);
					break;
				case 31:
					Lu(i, a, n), s && o & 4 && wu(i, a);
					break;
				case 13:
					Lu(i, a, n), s && o & 4 && Tu(i, a);
					break;
				case 22:
					a.memoizedState === null && Lu(i, a, n), Tl(a, a.return);
					break;
				case 30:
					Lu(i, a, n), Tl(a, a.return);
					break;
				case 7: Tl(a, a.return);
				default: Lu(i, a, n);
			}
			t = t.sibling;
		}
	}
	function Ru(e, t) {
		var n = null;
		e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Na(n));
	}
	function zu(e, t) {
		e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Na(e));
	}
	function Bu(e, t, n, r) {
		var i = (n & 335544064) === n;
		if (t.subtreeFlags & (i ? 10262 : 10256)) for (t = t.child; t !== null;) Vu(e, t, n, r), t = t.sibling;
		else i && tu(t);
	}
	function Vu(e, t, n, r) {
		var i = (n & 335544064) === n;
		i && t.alternate === null && t.return !== null && t.return.alternate !== null && eu(t);
		var a = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				Bu(e, t, n, r), a & 2048 && xl(9, t);
				break;
			case 1:
				Bu(e, t, n, r);
				break;
			case 3:
				Bu(e, t, n, r), i && fu && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, e.style.viewTransitionName === "root" && (e.style.viewTransitionName = ""), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "none" && (e.style.viewTransitionName = "")), a & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== a && (t.refCount++, a != null && Na(a)));
				break;
			case 12:
				if (a & 2048) {
					Bu(e, t, n, r), a = t.stateNode;
					try {
						var o = t.memoizedProps, s = o.id, c = o.onPostCommit;
						typeof c == "function" && c(s, t.alternate === null ? "mount" : "update", a.passiveEffectDuration, -0);
					} catch (e) {
						Z(t, t.return, e);
					}
				} else Bu(e, t, n, r);
				break;
			case 31:
				Bu(e, t, n, r);
				break;
			case 13:
				Bu(e, t, n, r);
				break;
			case 23: break;
			case 22:
				o = t.stateNode, s = t.alternate, t.memoizedState === null ? (i && s !== null && s.memoizedState !== null && eu(t), o._visibility & 2 ? Bu(e, t, n, r) : (o._visibility |= 2, Hu(e, t, n, r, !!(t.subtreeFlags & 10256) || !1))) : (i && s !== null && s.memoizedState === null && eu(s), o._visibility & 2 ? Bu(e, t, n, r) : Uu(e, t)), a & 2048 && Ru(s, t);
				break;
			case 24:
				Bu(e, t, n, r), a & 2048 && zu(t.alternate, t);
				break;
			case 30:
				i && (a = t.alternate, a !== null && (ql(a.child, !0), ql(t.child, !0))), Bu(e, t, n, r);
				break;
			default: Bu(e, t, n, r);
		}
	}
	function Hu(e, t, n, r, i) {
		for (i &&= !!(t.subtreeFlags & 10256) || !1, t = t.child; t !== null;) {
			var a = e, o = t, s = n, c = r, l = o.flags;
			switch (o.tag) {
				case 0:
				case 11:
				case 15:
					Hu(a, o, s, c, i), xl(8, o);
					break;
				case 23: break;
				case 22:
					var u = o.stateNode;
					o.memoizedState === null ? (u._visibility |= 2, Hu(a, o, s, c, i)) : u._visibility & 2 ? Hu(a, o, s, c, i) : Uu(a, o), i && l & 2048 && Ru(o.alternate, o);
					break;
				case 24:
					Hu(a, o, s, c, i), i && l & 2048 && zu(o.alternate, o);
					break;
				default: Hu(a, o, s, c, i);
			}
			t = t.sibling;
		}
	}
	function Uu(e, t) {
		if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) {
			var n = e, r = t, i = r.flags;
			switch (r.tag) {
				case 22:
					Uu(n, r), i & 2048 && Ru(r.alternate, r);
					break;
				case 24:
					Uu(n, r), i & 2048 && zu(r.alternate, r);
					break;
				default: Uu(n, r);
			}
			t = t.sibling;
		}
	}
	var Wu = 8192;
	function Gu(e, t, n) {
		if (e.subtreeFlags & Wu) for (e = e.child; e !== null;) Ku(e, t, n), e = e.sibling;
	}
	function Ku(e, t, n) {
		switch (e.tag) {
			case 26:
				Gu(e, t, n), e.flags & Wu && (e.memoizedState === null ? (e = e.stateNode, (t & 335544128) === t && Zm(n, e)) : Qm(n, ku, e.memoizedState, e.memoizedProps));
				break;
			case 5:
				Gu(e, t, n), e.flags & Wu && (e = e.stateNode, (t & 335544128) === t && Zm(n, e));
				break;
			case 3:
			case 4:
				var r = ku;
				ku = bm(e.stateNode.containerInfo), Gu(e, t, n), ku = r;
				break;
			case 22:
				e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = Wu, Wu = 16777216, Gu(e, t, n), Wu = r) : Gu(e, t, n));
				break;
			case 30:
				if ((e.flags & Wu) !== 0 && (r = e.memoizedProps.name, r != null && r !== "auto")) {
					var i = e.stateNode;
					i.paired = null, Bl === null && (Bl = /* @__PURE__ */ new Map()), Bl.set(r, i);
				}
				Gu(e, t, n);
				break;
			default: Gu(e, t, n);
		}
	}
	function qu(e) {
		var t = e.alternate;
		if (t !== null && (e = t.child, e !== null)) {
			t.child = null;
			do
				t = e.sibling, e.sibling = null, e = t;
			while (e !== null);
		}
	}
	function Ju(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				cu = r, Zu(r, e);
			}
			qu(e);
		}
		if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) Yu(e), e = e.sibling;
	}
	function Yu(e) {
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				Ju(e), e.flags & 2048 && Sl(9, e, e.return);
				break;
			case 3:
				Ju(e);
				break;
			case 12:
				Ju(e);
				break;
			case 22:
				var t = e.stateNode;
				e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Xu(e)) : Ju(e);
				break;
			default: Ju(e);
		}
	}
	function Xu(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				cu = r, Zu(r, e);
			}
			qu(e);
		}
		for (e = e.child; e !== null;) {
			switch (t = e, t.tag) {
				case 0:
				case 11:
				case 15:
					Sl(8, t, t.return), Xu(t);
					break;
				case 22:
					n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Xu(t));
					break;
				default: Xu(t);
			}
			e = e.sibling;
		}
	}
	function Zu(e, t) {
		for (; cu !== null;) {
			var n = cu;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					Sl(8, n, t);
					break;
				case 23:
				case 22:
					if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
						var r = n.memoizedState.cachePool.pool;
						r != null && r.refCount++;
					}
					break;
				case 24: Na(n.memoizedState.cache);
			}
			if (r = n.child, r !== null) r.return = n, cu = r;
			else a: for (n = e; cu !== null;) {
				r = cu;
				var i = r.sibling, a = r.return;
				if (yu(r), r === n) {
					cu = null;
					break a;
				}
				if (i !== null) {
					i.return = a, cu = i;
					break a;
				}
				cu = a;
			}
		}
	}
	var Qu = {
		getCacheForType: function(e) {
			var t = Ta(ja), n = t.data.get(e);
			return n === void 0 && (n = e(), t.data.set(e, n)), n;
		},
		cacheSignal: function() {
			return Ta(ja).controller.signal;
		}
	}, $u = typeof WeakMap == "function" ? WeakMap : Map, K = 0, q = null, J = null, Y = 0, X = 0, ed = null, td = !1, nd = !1, rd = !1, id = 0, ad = 0, od = 0, sd = 0, cd = 0, ld = 0, ud = 0, dd = null, fd = null, pd = !1, md = 0, hd = 0, gd = Infinity, _d = null, vd = null, yd = 0, bd = null, xd = null, Sd = 0, Cd = 0, wd = null, Td = null, Ed = null, Dd = null, Od = null, kd = 0, Ad = null;
	function jd() {
		return K & 2 && Y !== 0 ? Y & -Y : j.T === null ? wt() : Pf();
	}
	function Md() {
		if (ld === 0) {
			if (!(Y & 536870912) || B) {
				var e = ct;
				ct <<= 1, !(ct & 3932160) && (ct = 262144), ld = e;
			} else ld = 536870912;
		}
		return e = jo.current, e !== null && (e.flags |= 32), ld;
	}
	function Nd(e, t) {
		if (t != null) {
			var n = e.stateNode, r = n.ref;
			r === null && (r = n.ref = Pp(vi(e.memoizedProps, n))), Dd === null && (Dd = []), Dd.push(t.bind(null, r));
		}
	}
	function Pd(e, t, n) {
		(e === q && (X === 2 || X === 9) || e.cancelPendingCommit !== null) && (Vd(e, 0), Rd(e, Y, ld, !1)), _t(e, n), (!(K & 2) || e !== q) && (e === q && (!(K & 2) && (sd |= n), ad === 4 && Rd(e, Y, ld, !1)), Ef(e));
	}
	function Fd(e, t, n) {
		if (K & 6) throw Error(i(327));
		var r = !n && !(t & 127) && (t & e.expiredLanes) === 0 || ft(e, t), a = r ? Yd(e, t) : qd(e, t, !0), o = r;
		do {
			if (a === 0) {
				nd && !r && Rd(e, t, 0, !1);
				break;
			}
			if (n = e.current.alternate, o && !Ld(n)) {
				a = qd(e, t, !1), o = !1;
				continue;
			}
			if (a === 2) {
				if (o = t, e.errorRecoveryDisabledLanes & o) var s = 0;
				else s = e.pendingLanes & -536870913, s = s === 0 ? s & 536870912 ? 536870912 : 0 : s;
				if (s !== 0) {
					t = s;
					a: {
						var c = e;
						a = dd;
						var l = c.current.memoizedState.isDehydrated;
						if (l && (Vd(c, s).flags |= 256), s = qd(c, s, !1), s !== 2 && s !== 6) {
							if (rd && !l) {
								c.errorRecoveryDisabledLanes |= o, sd |= o, a = 4;
								break a;
							}
							o = fd, fd = a, o !== null && (fd === null ? fd = o : fd.push.apply(fd, o));
						}
						a = s;
					}
					if (o = !1, a !== 2) continue;
				}
			}
			if (a === 1) {
				Vd(e, 0), Rd(e, t, 0, !0);
				break;
			}
			a: {
				switch (r = e, o = a, o) {
					case 0:
					case 1: throw Error(i(345));
					case 4: if ((t & 4194048) !== t && (t & 62914560) !== t) break;
					case 6:
						Rd(r, t, ld, !td);
						break a;
					case 2:
						fd = null;
						break;
					case 3:
					case 5: break;
					default: throw Error(i(329));
				}
				if ((t & 62914560) === t && (a = md + 300 - Ge(), 10 < a)) {
					if (Rd(r, t, ld, !td), dt(r, 0, !0) !== 0) break a;
					Sd = t, r.timeoutHandle = gp(Id.bind(null, r, n, fd, _d, pd, t, ld, sd, ud, td, o, "Throttled", -0, 0), a);
					break a;
				}
				Id(r, n, fd, _d, pd, t, ld, sd, ud, td, o, null, -0, 0);
			}
			break;
		} while (1);
		Ef(e);
	}
	function Id(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
		e.timeoutHandle = -1;
		var m = t.subtreeFlags, h = (a & 335544064) === a;
		if (d = null, (h || m & 8192 || (m & 16785408) == 16785408) && (d = {
			stylesheets: null,
			count: 0,
			imgCount: 0,
			imgBytes: 0,
			suspenseyImages: [],
			waitingForImages: !0,
			waitingForViewTransition: !1,
			unsuspend: bn
		}, Bl = null, Ku(t, a, d), h && (m = d, h = e.containerInfo, h = (h.nodeType === 9 ? h : h.ownerDocument).__reactViewTransition, h != null && (m.count++, m.waitingForViewTransition = !0, m = nh.bind(m), h.finished.then(m, m))), m = (a & 62914560) === a ? md - Ge() : (a & 4194048) === a ? hd - Ge() : 0, m = eh(d, m), m !== null)) {
			Sd = a, e.cancelPendingCommit = m(nf.bind(null, e, t, a, n, r, i, o, s, c, l, u, d, null, f, p)), Rd(e, a, o, !l);
			return;
		}
		nf(e, t, a, n, r, i, o, s, c, l, u, d);
	}
	function Ld(e) {
		for (var t = e;;) {
			var n = t.tag;
			if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) for (var r = 0; r < n.length; r++) {
				var i = n[r], a = i.getSnapshot;
				i = i.value;
				try {
					if (!Hr(a(), i)) return !1;
				} catch {
					return !1;
				}
			}
			if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
			else {
				if (t === e) break;
				for (; t.sibling === null;) {
					if (t.return === null || t.return === e) return !0;
					t = t.return;
				}
				t.sibling.return = t.return, t = t.sibling;
			}
		}
		return !0;
	}
	function Rd(e, t, n, r) {
		t = pt(e, t), t &= ~cd, t &= ~sd, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
		for (var i = t; 0 < i;) {
			var a = 31 - rt(i), o = 1 << a;
			r[a] = -1, i &= ~o;
		}
		n !== 0 && yt(e, n, t);
	}
	function zd() {
		return K & 6 ? !0 : (Df(0, !1), !1);
	}
	function Bd() {
		if (J !== null) {
			if (X === 0) var e = J.return;
			else e = J, _a = ga = null, as(e), ao = null, oo = 0, e = J;
			for (; e !== null;) bl(e.alternate, e), e = e.return;
			J = null;
		}
	}
	function Vd(e, t) {
		var n = e.timeoutHandle;
		return n !== -1 && (e.timeoutHandle = -1, _p(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Sd = 0, Bd(), q = e, J = n = Fi(e.current, null), Y = t, X = 0, ed = null, td = !1, nd = ft(e, t), rd = !1, ud = ld = cd = sd = od = ad = 0, fd = dd = null, pd = !1, id = pt(e, t), Ti(), n;
	}
	function Hd(e, t) {
		V = null, j.H = mc, t === Ya || t === Za ? (t = ro(), X = 3) : t === Xa ? (t = ro(), X = 4) : X = t === Mc ? 8 : typeof t == "object" && t && typeof t.then == "function" ? 6 : 1, ed = t, J === null && (ad = 1, Ec(e, Ui(t, e.current)));
	}
	function Ud() {
		var e = jo.current;
		return e === null ? !0 : (Y & 4194048) === Y ? Mo === null : (Y & 62914560) === Y || Y & 536870912 ? e === Mo : !1;
	}
	function Wd() {
		var e = j.H;
		return j.H = mc, e === null ? mc : e;
	}
	function Gd() {
		var e = j.A;
		return j.A = Qu, e;
	}
	function Kd() {
		ad = 4, td || (Y & 4194048) !== Y && jo.current !== null || (nd = !0), !(od & 134217727) && !(sd & 134217727) || q === null || Rd(q, Y, ld, !1);
	}
	function qd(e, t, n) {
		var r = K;
		K |= 2;
		var i = Wd(), a = Gd();
		(q !== e || Y !== t) && (_d = null, Vd(e, t)), t = !1;
		var o = ad;
		a: do
			try {
				if (X !== 0 && J !== null) {
					var s = J, c = ed;
					switch (X) {
						case 8:
							Bd(), o = 6;
							break a;
						case 3:
						case 2:
						case 9:
						case 6:
							jo.current === null && (t = !0);
							var l = X;
							if (X = 0, ed = null, $d(e, s, c, l), n && nd) {
								o = 0;
								break a;
							}
							break;
						default: l = X, X = 0, ed = null, $d(e, s, c, l);
					}
				}
				Jd(), o = ad;
				break;
			} catch (t) {
				Hd(e, t);
			}
		while (1);
		return t && e.shellSuspendCounter++, _a = ga = null, K = r, j.H = i, j.A = a, J === null && (q = null, Y = 0, Ti()), o;
	}
	function Jd() {
		for (; J !== null;) Zd(J);
	}
	function Yd(e, t) {
		var n = K;
		K |= 2;
		var r = Wd(), a = Gd();
		q !== e || Y !== t ? (_d = null, gd = Ge() + 500, Vd(e, t)) : nd = ft(e, t);
		a: do
			try {
				if (X !== 0 && J !== null) {
					t = J;
					var o = ed;
					b: switch (X) {
						case 1:
							X = 0, ed = null, $d(e, t, o, 1);
							break;
						case 2:
						case 9:
							if ($a(o)) {
								X = 0, ed = null, Qd(t);
								break;
							}
							t = function() {
								X !== 2 && X !== 9 || q !== e || (X = 7), Ef(e);
							}, o.then(t, t);
							break a;
						case 3:
							X = 7;
							break a;
						case 4:
							X = 5;
							break a;
						case 7:
							$a(o) ? (X = 0, ed = null, Qd(t)) : (X = 0, ed = null, $d(e, t, o, 7));
							break;
						case 5:
							var s = null;
							switch (J.tag) {
								case 26: s = J.memoizedState;
								case 5:
								case 27:
									var c = J;
									if (s ? Ym(s) : c.stateNode.complete) {
										X = 0, ed = null;
										var l = c.sibling;
										if (l !== null) J = l;
										else {
											var u = c.return;
											u === null ? J = null : (J = u, ef(u));
										}
										break b;
									}
							}
							X = 0, ed = null, $d(e, t, o, 5);
							break;
						case 6:
							X = 0, ed = null, $d(e, t, o, 6);
							break;
						case 8:
							Bd(), ad = 6;
							break a;
						default: throw Error(i(462));
					}
				}
				Xd();
				break;
			} catch (t) {
				Hd(e, t);
			}
		while (1);
		return _a = ga = null, j.H = r, j.A = a, K = n, J === null ? (q = null, Y = 0, Ti(), ad) : 0;
	}
	function Xd() {
		for (; J !== null && !Ue();) Zd(J);
	}
	function Zd(e) {
		var t = fl(e.alternate, e, id);
		e.memoizedProps = e.pendingProps, t === null ? ef(e) : J = t;
	}
	function Qd(e) {
		var t = e, n = t.alternate;
		switch (t.tag) {
			case 15:
			case 0:
				t = Kc(n, t, t.pendingProps, t.type, void 0, Y);
				break;
			case 11:
				t = Kc(n, t, t.pendingProps, t.type.render, t.ref, Y);
				break;
			case 5:
				as(t);
				var r = t;
				r === ia && (B ? (ua(r), r.tag === 5 && r.stateNode != null && (z = r.stateNode)) : (ua(r), B = !0));
			default: bl(n, t), t = J = Ii(t, id), t = fl(n, t, id);
		}
		e.memoizedProps = e.pendingProps, t === null ? ef(e) : J = t;
	}
	function $d(e, t, n, r) {
		_a = ga = null, as(t), ao = null, oo = 0;
		var i = t.return;
		try {
			if (jc(e, i, t, n, Y)) {
				ad = 1, Ec(e, Ui(n, e.current)), J = null;
				return;
			}
		} catch (t) {
			if (i !== null) throw J = i, t;
			ad = 1, Ec(e, Ui(n, e.current)), J = null;
			return;
		}
		t.flags & 32768 ? (B || r === 1 ? e = !0 : nd || Y & 536870912 ? e = !1 : (td = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = jo.current, r !== null && r.tag === 13 && (r.flags |= 16384))), tf(t, e)) : ef(t);
	}
	function ef(e) {
		var t = e;
		do {
			if (t.flags & 32768) {
				tf(t, td);
				return;
			}
			e = t.return;
			var n = vl(t.alternate, t, id);
			if (n !== null) {
				J = n;
				return;
			}
			if (t = t.sibling, t !== null) {
				J = t;
				return;
			}
			J = t = e;
		} while (t !== null);
		ad === 0 && (ad = 5);
	}
	function tf(e, t) {
		do {
			var n = yl(e.alternate, e);
			if (n !== null) {
				n.flags &= 32767, J = n;
				return;
			}
			if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
				J = e;
				return;
			}
			J = e = n;
		} while (e !== null);
		ad = 6, J = null;
	}
	function nf(e, t, n, r, a, o, s, c, l, u, d, f) {
		e.cancelPendingCommit = null;
		do
			df();
		while (yd !== 0);
		if (K & 6) throw Error(i(327));
		if (t !== null) {
			if (t === e.current) throw Error(i(177));
			e === q && (J = q = null, Y = 0), xd = t, bd = e, Sd = n, wd = a, Td = r, rf(e, t, n, s, c, l, f);
		}
	}
	function rf(e, t, n, r, i, a, o) {
		var s = t.lanes | t.childLanes;
		if (Cd = s, s |= wi, vt(e, n, s, r, i, a), Dd = null, (n & 335544064) === n ? (Od = Ia(e), r = 10262) : (Od = null, r = 10256), (t.subtreeFlags & r) !== 0 || (t.flags & r) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, yf(Ye, function() {
			return ff(), null;
		})) : (e.callbackNode = null, e.callbackPriority = 0), zl = !1, r = !!(t.flags & 13878), t.subtreeFlags & 13878 || r) {
			r = j.T, j.T = null, i = M.p, M.p = 2, a = K, K |= 4;
			try {
				pu(e, t, n);
			} finally {
				K = a, M.p = i, j.T = r;
			}
		}
		yd = 1, zl ? Ed = Mp(o, e.containerInfo, Od, sf, cf, of, lf, ff, af, null, null) : (sf(), cf(), lf());
	}
	function af(e) {
		if (yd !== 0) {
			var t = bd.onRecoverableError;
			t(e, { componentStack: null });
		}
	}
	function of() {
		yd === 3 && (yd = 0, Pu(xd, bd), yd = 4);
	}
	function sf() {
		if (yd === 1) {
			yd = 0;
			var e = bd, t = xd, n = Sd, r = !!(t.flags & 13878);
			if (t.subtreeFlags & 13878 || r) {
				r = j.T, j.T = null;
				var i = M.p;
				M.p = 2;
				var a = K;
				K |= 4;
				try {
					uu = du = !1, Au(t, e, n), n = cp;
					var o = Jr(e.containerInfo), s = n.focusedElem, c = n.selectionRange;
					if (o !== s && s && s.ownerDocument && qr(s.ownerDocument.documentElement, s)) {
						if (c !== null && Yr(s)) {
							var l = c.start, u = c.end;
							if (u === void 0 && (u = l), "selectionStart" in s) s.selectionStart = l, s.selectionEnd = Math.min(u, s.value.length);
							else {
								var d = s.ownerDocument || document, f = d && d.defaultView || window;
								if (f.getSelection) {
									var p = f.getSelection(), m = s.textContent.length, h = Math.min(c.start, m), g = c.end === void 0 ? h : Math.min(c.end, m);
									!p.extend && h > g && (o = g, g = h, h = o);
									var _ = Kr(s, h), v = Kr(s, g);
									if (_ && v && (p.rangeCount !== 1 || p.anchorNode !== _.node || p.anchorOffset !== _.offset || p.focusNode !== v.node || p.focusOffset !== v.offset)) {
										var y = d.createRange();
										y.setStart(_.node, _.offset), p.removeAllRanges(), h > g ? (p.addRange(y), p.extend(v.node, v.offset)) : (y.setEnd(v.node, v.offset), p.addRange(y));
									}
								}
							}
						}
						for (d = [], p = s; p = p.parentNode;) p.nodeType === 1 && d.push({
							element: p,
							left: p.scrollLeft,
							top: p.scrollTop
						});
						for (typeof s.focus == "function" && s.focus(), s = 0; s < d.length; s++) {
							var b = d[s];
							b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
						}
					}
					gh = !!sp, cp = sp = null;
				} finally {
					K = a, M.p = i, j.T = r;
				}
			}
			e.current = t, yd = 2;
		}
	}
	function cf() {
		if (yd === 2) {
			yd = 0;
			var e = bd, t = xd, n = !!(t.flags & 8772);
			if (t.subtreeFlags & 8772 || n) {
				n = j.T, j.T = null;
				var r = M.p;
				M.p = 2;
				var i = K;
				K |= 4;
				try {
					hu(e, t.alternate, t);
				} finally {
					K = i, M.p = r, j.T = n;
				}
			}
			yd = 3;
		}
	}
	function lf() {
		if (yd === 4 || yd === 3) {
			yd = 0;
			var e = Ed;
			Ed = null, We();
			var t = bd, n = xd, r = Sd, i = Td, a = (r & 335544064) === r ? 10262 : 10256;
			if ((n.subtreeFlags & a) !== 0 || (n.flags & a) !== 0 ? yd = 5 : (yd = 0, xd = bd = null, uf(t, t.pendingLanes)), a = t.pendingLanes, a === 0 && (vd = null), Ct(r), n = n.stateNode, tt && typeof tt.onCommitFiberRoot == "function") try {
				tt.onCommitFiberRoot(et, n, void 0, (n.current.flags & 128) == 128);
			} catch {}
			if (i !== null) {
				n = j.T, a = M.p, M.p = 2, j.T = null;
				try {
					for (var o = t.onRecoverableError, s = 0; s < i.length; s++) {
						var c = i[s];
						o(c.value, { componentStack: c.stack });
					}
				} finally {
					j.T = n, M.p = a;
				}
			}
			if (i = Dd, o = Od, Od = null, i !== null && (Dd = null, o === null && (o = []), e !== null)) for (c = 0; c < i.length; c++) n = (0, i[c])(o), n !== void 0 && e.finished.finally(n);
			Sd & 3 && df(), Ef(t), a = t.pendingLanes, r & 261930 && a & 42 ? t === Ad ? kd++ : (kd = 0, Ad = t) : (kd = 0, Ad = null), Df(0, !1);
		}
	}
	function uf(e, t) {
		(e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Na(t)));
	}
	function df() {
		return Ed !== null && (Ed.skipTransition(), Ed = null), sf(), cf(), lf(), ff();
	}
	function ff() {
		if (yd !== 5) return !1;
		var e = bd, t = Cd;
		Cd = 0;
		var n = Ct(Sd), r = j.T, a = M.p;
		try {
			M.p = 32 > n ? 32 : n, j.T = null, n = wd, wd = null;
			var o = bd, s = Sd;
			if (yd = 0, xd = bd = null, Sd = 0, K & 6) throw Error(i(331));
			var c = K;
			if (K |= 4, Yu(o.current), Vu(o, o.current, s, n), K = c, Df(0, !1), tt && typeof tt.onPostCommitFiberRoot == "function") try {
				tt.onPostCommitFiberRoot(et, o);
			} catch {}
			return !0;
		} finally {
			M.p = a, j.T = r, uf(e, t);
		}
	}
	function pf(e, t, n) {
		t = Ui(n, t), t = Oc(e.stateNode, t, 2), e = vo(e, t, 2), e !== null && (_t(e, 2), Ef(e));
	}
	function Z(e, t, n) {
		if (e.tag === 3) pf(e, e, n);
		else for (; t !== null;) {
			if (t.tag === 3) {
				pf(t, e, n);
				break;
			}
			if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (vd === null || !vd.has(r))) {
					e = Ui(n, e), n = kc(2), r = vo(t, n, 2), r !== null && (Ac(n, r, t, e), _t(r, 2), Ef(r));
					break;
				}
			}
			t = t.return;
		}
	}
	function mf(e, t, n) {
		var r = e.pingCache;
		if (r === null) {
			r = e.pingCache = new $u();
			var i = /* @__PURE__ */ new Set();
			r.set(t, i);
		} else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
		i.has(n) || (rd = !0, i.add(n), e = hf.bind(null, e, t, n), t.then(e, e));
	}
	function hf(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, q === e && (Y & n) === n && (ad === 4 || ad === 3 && (Y & 62914560) === Y && 300 > Ge() - md ? K & 2 ? cd |= n : Vd(e, 0) : cd |= n, ud === Y && (ud = 0)), Ef(e);
	}
	function gf(e, t) {
		t === 0 && (t = ht()), e = Oi(e, t), e !== null && (_t(e, t), Ef(e));
	}
	function _f(e) {
		var t = e.memoizedState, n = 0;
		t !== null && (n = t.retryLane), gf(e, n);
	}
	function vf(e, t) {
		var n = 0;
		switch (e.tag) {
			case 31:
			case 13:
				var r = e.stateNode, a = e.memoizedState;
				a !== null && (n = a.retryLane);
				break;
			case 19:
				r = e.stateNode;
				break;
			case 22:
				r = e.stateNode._retryCache;
				break;
			default: throw Error(i(314));
		}
		r !== null && r.delete(t), gf(e, n);
	}
	function yf(e, t) {
		return Ve(e, t);
	}
	var bf = null, xf = null, Sf = !1, Cf = !1, wf = !1, Tf = 0;
	function Ef(e) {
		e !== xf && e.next === null && (xf === null ? bf = xf = e : xf = xf.next = e), Cf = !0, Sf || (Sf = !0, Nf());
	}
	function Df(e, t) {
		if (!wf && Cf) {
			wf = !0;
			do
				for (var n = !1, r = bf; r !== null;) {
					if (!t) {
						if (e !== 0) {
							var i = r.pendingLanes;
							if (i === 0) var a = 0;
							else {
								var o = r.suspendedLanes, s = r.pingedLanes;
								a = (1 << 31 - rt(42 | e) + 1) - 1, a &= i & ~(o & ~s), a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0;
							}
							a !== 0 && (n = !0, Mf(r, a));
						} else a = Y, a = dt(r, r === q ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), !(a & 3) || ft(r, a) || (n = !0, Mf(r, a));
					}
					r = r.next;
				}
			while (n);
			wf = !1;
		}
	}
	function Of() {
		kf();
	}
	function kf() {
		Cf = Sf = !1;
		var e = 0;
		Tf !== 0 && hp() && (e = Tf);
		for (var t = Ge(), n = null, r = bf; r !== null;) {
			var i = r.next, a = Af(r, t);
			a === 0 ? (r.next = null, n === null ? bf = i : n.next = i, i === null && (xf = n)) : (n = r, (e !== 0 || a & 3) && (Cf = !0)), r = i;
		}
		yd !== 0 && yd !== 5 || Df(e, !1), Tf !== 0 && (Tf = 0);
	}
	function Af(e, t) {
		for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes & -62914561; 0 < a;) {
			var o = 31 - rt(a), s = 1 << o, c = i[o];
			c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = mt(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s;
		}
		if (t = q, n = Y, n = dt(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r = e.callbackNode, n === 0 || e === t && (X === 2 || X === 9) || e.cancelPendingCommit !== null) return r !== null && r !== null && He(r), e.callbackNode = null, e.callbackPriority = 0;
		if (!(n & 3) || ft(e, n)) {
			if (t = n & -n, t === e.callbackPriority) return t;
			switch (r !== null && He(r), Ct(n)) {
				case 2:
				case 8:
					n = Je;
					break;
				case 32:
					n = Ye;
					break;
				case 268435456:
					n = Ze;
					break;
				default: n = Ye;
			}
			return r = jf.bind(null, e), n = Ve(n, r), e.callbackPriority = t, e.callbackNode = n, t;
		}
		return r !== null && r !== null && He(r), e.callbackPriority = 2, e.callbackNode = null, 2;
	}
	function jf(e, t) {
		if (yd !== 0 && yd !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
		var n = e.callbackNode;
		if (df() && e.callbackNode !== n) return null;
		var r = Y;
		return r = dt(e, e === q ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r === 0 ? null : (Fd(e, r, t), Af(e, Ge()), e.callbackNode != null && e.callbackNode === n ? jf.bind(null, e) : null);
	}
	function Mf(e, t) {
		if (df()) return null;
		Fd(e, t, !0);
	}
	function Nf() {
		bp(function() {
			K & 6 ? Ve(qe, Of) : kf();
		});
	}
	function Pf() {
		if (Tf === 0) {
			var e = za;
			e === 0 && (e = st, st <<= 1, !(st & 261888) && (st = 256)), Tf = e;
		}
		return Tf;
	}
	function Ff(e) {
		return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : yn(e);
	}
	function If(e, t, n, r, i) {
		if (t === "submit" && n && n.stateNode === i) {
			var a = Ff((i[Ot] || null).action), o = r.submitter;
			o && (t = (t = o[Ot] || null) ? Ff(t.formAction) : o.getAttribute("formAction"), t !== null && (a = t, o = null));
			var s = new Vn("action", "action", null, r, i);
			e.push({
				event: s,
				listeners: [{
					instance: null,
					listener: function() {
						if (r.defaultPrevented) {
							if (Tf !== 0) {
								var e = new FormData(i, o);
								ec(n, {
									pending: !0,
									data: e,
									method: i.method,
									action: a
								}, null, e);
							}
						} else typeof a == "function" && (s.preventDefault(), e = new FormData(i, o), ec(n, {
							pending: !0,
							data: e,
							method: i.method,
							action: a
						}, a, e));
					},
					currentTarget: i
				}]
			});
		}
	}
	for (var Lf = 0; Lf < hi.length; Lf++) {
		var Rf = hi[Lf];
		gi(Rf.toLowerCase(), "on" + (Rf[0].toUpperCase() + Rf.slice(1)));
	}
	gi(si, "onAnimationEnd"), gi(ci, "onAnimationIteration"), gi(li, "onAnimationStart"), gi("dblclick", "onDoubleClick"), gi("focusin", "onFocus"), gi("focusout", "onBlur"), gi(ui, "onTransitionRun"), gi(di, "onTransitionStart"), gi(fi, "onTransitionCancel"), gi(pi, "onTransitionEnd"), Kt("onMouseEnter", ["mouseout", "mouseover"]), Kt("onMouseLeave", ["mouseout", "mouseover"]), Kt("onPointerEnter", ["pointerout", "pointerover"]), Kt("onPointerLeave", ["pointerout", "pointerover"]), Gt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Gt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Gt("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]), Gt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Gt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Gt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var zf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Bf = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zf));
	function Vf(e, t) {
		t = !!(t & 4);
		for (var n = 0; n < e.length; n++) {
			var r = e[n], i = r.event;
			r = r.listeners;
			a: {
				var a = void 0;
				if (t) for (var o = r.length - 1; 0 <= o; o--) {
					var s = r[o], c = s.instance, l = s.currentTarget;
					if (s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						xi(e);
					}
					i.currentTarget = null, a = c;
				}
				else for (o = 0; o < r.length; o++) {
					if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						xi(e);
					}
					i.currentTarget = null, a = c;
				}
			}
		}
	}
	function Q(e, t) {
		var n = t[At];
		n === void 0 && (n = t[At] = /* @__PURE__ */ new Set());
		var r = e + "__bubble";
		n.has(r) || (Gf(t, e, 2, !1), n.add(r));
	}
	function Hf(e, t, n) {
		var r = 0;
		t && (r |= 4), Gf(n, e, r, t);
	}
	var Uf = "_reactListening" + Math.random().toString(36).slice(2);
	function Wf(e) {
		if (!e[Uf]) {
			e[Uf] = !0, Ut.forEach(function(t) {
				t !== "selectionchange" && (Bf.has(t) || Hf(t, !1, e), Hf(t, !0, e));
			});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[Uf] || (t[Uf] = !0, Hf("selectionchange", !1, t));
		}
	}
	function Gf(e, t, n, r) {
		switch (Ch(t)) {
			case 2:
				var i = _h;
				break;
			case 8:
				i = vh;
				break;
			default: i = yh;
		}
		n = i.bind(null, t, n, e), i = void 0, !An || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
			capture: !0,
			passive: i
		}) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, { passive: i });
	}
	function Kf(e, t, n, r, i) {
		var a = r;
		if (!(t & 1) && !(t & 2) && r !== null) a: for (;;) {
			if (r === null) return;
			var s = r.tag;
			if (s === 3 || s === 4) {
				var c = r.stateNode.containerInfo;
				if (c === i) break;
				if (s === 4) for (s = r.return; s !== null;) {
					var l = s.tag;
					if ((l === 3 || l === 4) && s.stateNode.containerInfo === i) return;
					s = s.return;
				}
				for (; c !== null;) {
					if (s = Lt(c), s === null) return;
					if (l = s.tag, l === 5 || l === 6 || l === 26 || l === 27) {
						r = a = s;
						continue a;
					}
					c = c.parentNode;
				}
			}
			r = r.return;
		}
		Dn(function() {
			var r = a, i = Sn(n), s = [];
			a: {
				var c = mi.get(e);
				if (c !== void 0) {
					var l = Vn, u = e;
					switch (e) {
						case "keypress": if (In(n) === 0) break a;
						case "keydown":
						case "keyup":
							l = R;
							break;
						case "focusin":
							u = "focus", l = Xn;
							break;
						case "focusout":
							u = "blur", l = Xn;
							break;
						case "beforeblur":
						case "afterblur":
							l = Xn;
							break;
						case "click": if (n.button === 2) break a;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							l = Jn;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							l = Yn;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							l = sr;
							break;
						case si:
						case ci:
						case li:
							l = Zn;
							break;
						case pi:
							l = cr;
							break;
						case "scroll":
						case "scrollend":
							l = Un;
							break;
						case "wheel":
							l = lr;
							break;
						case "copy":
						case "cut":
						case "paste":
							l = Qn;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							l = ar;
							break;
						case "submit":
							l = or;
							break;
						case "toggle":
						case "beforetoggle": l = ur;
					}
					var d = !!(t & 4), f = !d && (e === "scroll" || e === "scrollend"), p = d ? c === null ? null : c + "Capture" : c;
					d = [];
					for (var m = r, h; m !== null;) {
						var g = m;
						if (h = g.stateNode, g = g.tag, g !== 5 && g !== 26 && g !== 27 || h === null || p === null || (g = On(m, p), g != null && d.push(qf(m, g, h))), f) break;
						m = m.return;
					}
					0 < d.length && (c = new l(c, u, null, n, i), s.push({
						event: c,
						listeners: d
					}));
				}
			}
			if (!(t & 7)) {
				a: {
					if (l = e === "mouseover" || e === "pointerover", c = e === "mouseout" || e === "pointerout", l && n !== xn && (u = n.relatedTarget || n.fromElement) && (Lt(u) || u[kt])) break a;
					(c || l) && (u = i.window === i ? i : (l = i.ownerDocument) ? l.defaultView || l.parentWindow : window, c ? (l = n.relatedTarget || n.toElement, c = r, l = l ? Lt(l) : null, l !== null && (f = o(l), d = l.tag, l !== f || d !== 5 && d !== 27 && d !== 6) && (l = null)) : (c = null, l = r), c !== l && (d = Jn, g = "onMouseLeave", p = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (d = ar, g = "onPointerLeave", p = "onPointerEnter", m = "pointer"), f = c == null ? u : zt(c), h = l == null ? u : zt(l), u = new d(g, m + "leave", c, n, i), u.target = f, u.relatedTarget = h, g = null, Lt(i) === r && (d = new d(p, m + "enter", l, n, i), d.target = h, d.relatedTarget = f, g = d), f = g, d = c && l ? ee(c, l, Yf) : null, c !== null && Xf(s, u, c, d, !1), l !== null && f !== null && Xf(s, f, l, d, !0)));
				}
				a: {
					if (c = r ? zt(r) : window, l = c.nodeName && c.nodeName.toLowerCase(), l === "select" || l === "input" && c.type === "file") var _ = Ar;
					else if (wr(c)) {
						if (jr) _ = Br;
						else {
							_ = Rr;
							var v = Lr;
						}
					} else l = c.nodeName, !l || l.toLowerCase() !== "input" || c.type !== "checkbox" && c.type !== "radio" ? r && _n(r.elementType) && (_ = Ar) : _ = zr;
					if (_ &&= _(e, r)) {
						Tr(s, _, n, i);
						break a;
					}
					v && v(e, c, r);
				}
				switch (v = r ? zt(r) : window, e) {
					case "focusin":
						(wr(v) || v.contentEditable === "true") && (Zr = v, Qr = r, $r = null);
						break;
					case "focusout":
						$r = Qr = Zr = null;
						break;
					case "mousedown":
						ei = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						ei = !1, ti(s, n, i);
						break;
					case "selectionchange": if (Xr) break;
					case "keydown":
					case "keyup": ti(s, n, i);
				}
				var y;
				if (fr) b: {
					switch (e) {
						case "compositionstart":
							var b = "onCompositionStart";
							break b;
						case "compositionend":
							b = "onCompositionEnd";
							break b;
						case "compositionupdate":
							b = "onCompositionUpdate";
							break b;
					}
					b = void 0;
				}
				else br ? vr(e, n) && (b = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
				b && (hr && n.locale !== "ko" && (br || b !== "onCompositionStart" ? b === "onCompositionEnd" && br && (y = Fn()) : (Mn = i, Nn = "value" in Mn ? Mn.value : Mn.textContent, br = !0)), v = Jf(r, b), 0 < v.length && (b = new $n(b, e, null, n, i), s.push({
					event: b,
					listeners: v
				}), y ? b.data = y : (y = yr(n), y !== null && (b.data = y)))), (y = mr ? xr(e, n) : Sr(e, n)) && (b = Jf(r, "onBeforeInput"), 0 < b.length && (v = new $n("onBeforeInput", "beforeinput", null, n, i), s.push({
					event: v,
					listeners: b
				}), v.data = y)), If(s, e, r, n, i);
			}
			Vf(s, t);
		});
	}
	function qf(e, t, n) {
		return {
			instance: e,
			listener: t,
			currentTarget: n
		};
	}
	function Jf(e, t) {
		for (var n = t + "Capture", r = []; e !== null;) {
			var i = e, a = i.stateNode;
			if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || a === null || (i = On(e, n), i != null && r.unshift(qf(e, i, a)), i = On(e, t), i != null && r.push(qf(e, i, a))), e.tag === 3) return r;
			e = e.return;
		}
		return [];
	}
	function Yf(e) {
		if (e === null) return null;
		do
			e = e.return;
		while (e && e.tag !== 5 && e.tag !== 27);
		return e || null;
	}
	function Xf(e, t, n, r, i) {
		for (var a = t._reactName, o = []; n !== null && n !== r;) {
			var s = n, c = s.alternate, l = s.stateNode;
			if (s = s.tag, c !== null && c === r) break;
			s !== 5 && s !== 26 && s !== 27 || l === null || (c = l, i ? (l = On(n, a), l != null && o.unshift(qf(n, l, c))) : i || (l = On(n, a), l != null && o.push(qf(n, l, c)))), n = n.return;
		}
		o.length !== 0 && e.push({
			event: t,
			listeners: o
		});
	}
	var Zf = /\r\n?/g, Qf = /\u0000|\uFFFD/g;
	function $f(e) {
		return (typeof e == "string" ? e : "" + e).replace(Zf, "\n").replace(Qf, "");
	}
	function ep(e, t) {
		return t = $f(t), $f(e) === t;
	}
	function $(e, t, n, r, a, o) {
		switch (n) {
			case "children":
				if (typeof r == "string") t === "body" || t === "textarea" && r === "" || pn(e, r);
				else if (typeof r == "number" || typeof r == "bigint") t !== "body" && pn(e, "" + r);
				else return;
				break;
			case "className":
				F(e, "class", r);
				break;
			case "tabIndex":
				F(e, "tabindex", r);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				F(e, n, r);
				break;
			case "style":
				gn(e, r, o);
				return;
			case "data": if (t !== "object") {
				F(e, "data", r);
				break;
			}
			case "src":
			case "href":
				if (r === "" && (t !== "a" || n !== "href")) {
					e.removeAttribute(n);
					break;
				}
				if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = yn(r), e.setAttribute(n, r);
				break;
			case "action":
			case "formAction":
				if (typeof r == "function") {
					e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
					break;
				}
				if (typeof o == "function" && (n === "formAction" ? (t !== "input" && $(e, t, "name", a.name, a, null), $(e, t, "formEncType", a.formEncType, a, null), $(e, t, "formMethod", a.formMethod, a, null), $(e, t, "formTarget", a.formTarget, a, null)) : ($(e, t, "encType", a.encType, a, null), $(e, t, "method", a.method, a, null), $(e, t, "target", a.target, a, null))), r == null || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = yn(r), e.setAttribute(n, r);
				break;
			case "onClick":
				r != null && (e.onclick = bn);
				return;
			case "onScroll":
				r != null && Q("scroll", e);
				return;
			case "onScrollEnd":
				r != null && Q("scrollend", e);
				return;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(i(61));
					if (n = r.__html, n != null) {
						if (a.children != null) throw Error(i(60));
						o?.__html !== n && (e.innerHTML = n);
					}
				}
				break;
			case "multiple":
				e.multiple = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "muted":
				e.muted = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "ref": break;
			case "autoFocus": break;
			case "xlinkHref":
				if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
					e.removeAttribute("xlink:href");
					break;
				}
				n = yn(r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "credentialless":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
				break;
			case "capture":
			case "download":
				!0 === r ? e.setAttribute(n, "") : !1 !== r && r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "rowSpan":
			case "start":
				r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
				break;
			case "popover":
				Q("beforetoggle", e), Q("toggle", e), Qt(e, "popover", r);
				break;
			case "xlinkActuate":
				$t(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
				break;
			case "xlinkArcrole":
				$t(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
				break;
			case "xlinkRole":
				$t(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
				break;
			case "xlinkShow":
				$t(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
				break;
			case "xlinkTitle":
				$t(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
				break;
			case "xlinkType":
				$t(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
				break;
			case "xmlBase":
				$t(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
				break;
			case "xmlLang":
				$t(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
				break;
			case "xmlSpace":
				$t(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
				break;
			case "is":
				Qt(e, "is", r);
				break;
			case "innerText":
			case "textContent": return;
			default: if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") n = L.get(n) || n, Qt(e, n, r);
			else return;
		}
		P = !0;
	}
	function tp(e, t, n, r, a, o) {
		switch (n) {
			case "style":
				gn(e, r, o);
				return;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(i(61));
					if (n = r.__html, n != null) {
						if (a.children != null) throw Error(i(60));
						o?.__html !== n && (e.innerHTML = n);
					}
				}
				break;
			case "children":
				if (typeof r == "string") pn(e, r);
				else if (typeof r == "number" || typeof r == "bigint") pn(e, "" + r);
				else return;
				break;
			case "onScroll":
				r != null && Q("scroll", e);
				return;
			case "onScrollEnd":
				r != null && Q("scrollend", e);
				return;
			case "onClick":
				r != null && (e.onclick = bn);
				return;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref": return;
			case "innerText":
			case "textContent": return;
			default:
				if (!Wt.hasOwnProperty(n)) a: {
					if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), o = n.slice(2, a ? n.length - 7 : void 0), t = e[Ot] || null, t = t == null ? null : t[n], typeof t == "function" && e.removeEventListener(o, t, a), typeof r == "function")) {
						typeof t != "function" && t !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(o, r, a);
						break a;
					}
					P = !0, n in e ? e[n] = r : !0 === r ? e.setAttribute(n, "") : Qt(e, n, r);
				}
				return;
		}
		P = !0;
	}
	function np(e, t, n) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "img":
				Q("error", e), Q("load", e);
				var r = !1, a = !1, o;
				for (o in n) if (n.hasOwnProperty(o)) {
					var s = n[o];
					if (s != null) switch (o) {
						case "src":
							r = !0;
							break;
						case "srcSet":
							a = !0;
							break;
						case "children":
						case "dangerouslySetInnerHTML": throw Error(i(137, t));
						default: $(e, t, o, s, n, null);
					}
				}
				a && $(e, t, "srcSet", n.srcSet, n, null), r && $(e, t, "src", n.src, n, null);
				return;
			case "input":
				Q("invalid", e);
				var c = o = s = a = null, l = null, u = null;
				for (r in n) if (n.hasOwnProperty(r)) {
					var d = n[r];
					if (d != null) switch (r) {
						case "name":
							a = d;
							break;
						case "type":
							s = d;
							break;
						case "checked":
							l = d;
							break;
						case "defaultChecked":
							u = d;
							break;
						case "value":
							o = d;
							break;
						case "defaultValue":
							c = d;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (d != null) throw Error(i(137, t));
							break;
						default: $(e, t, r, d, n, null);
					}
				}
				ln(e, o, c, l, u, s, a, !1);
				return;
			case "select":
				for (a in Q("invalid", e), r = s = o = null, n) if (n.hasOwnProperty(a) && (c = n[a], c != null)) switch (a) {
					case "value":
						o = c;
						break;
					case "defaultValue":
						s = c;
						break;
					case "multiple": r = c;
					default: $(e, t, a, c, n, null);
				}
				t = o, n = s, e.multiple = !!r, t == null ? n != null && I(e, !!r, n, !0) : I(e, !!r, t, !1);
				return;
			case "textarea":
				for (s in Q("invalid", e), o = a = r = null, n) if (n.hasOwnProperty(s) && (c = n[s], c != null)) switch (s) {
					case "value":
						r = c;
						break;
					case "defaultValue":
						a = c;
						break;
					case "children":
						o = c;
						break;
					case "dangerouslySetInnerHTML":
						if (c != null) throw Error(i(91));
						break;
					default: $(e, t, s, c, n, null);
				}
				fn(e, r, a, o);
				return;
			case "option":
				for (l in n) if (n.hasOwnProperty(l) && (r = n[l], r != null)) switch (l) {
					case "selected":
						e.selected = r && typeof r != "function" && typeof r != "symbol";
						break;
					default: $(e, t, l, r, n, null);
				}
				return;
			case "dialog":
				Q("beforetoggle", e), Q("toggle", e), Q("cancel", e), Q("close", e);
				break;
			case "iframe":
			case "object":
				Q("load", e);
				break;
			case "video":
			case "audio":
				for (r = 0; r < zf.length; r++) Q(zf[r], e);
				break;
			case "image":
				Q("error", e), Q("load", e);
				break;
			case "details":
				Q("toggle", e);
				break;
			case "embed":
			case "source":
			case "link": Q("error", e), Q("load", e);
			case "area":
			case "base":
			case "br":
			case "col":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "track":
			case "wbr":
			case "menuitem":
				for (u in n) if (n.hasOwnProperty(u) && (r = n[u], r != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML": throw Error(i(137, t));
					default: $(e, t, u, r, n, null);
				}
				return;
			default: if (_n(t)) {
				for (d in n) n.hasOwnProperty(d) && (r = n[d], r !== void 0 && tp(e, t, d, r, n, void 0));
				return;
			}
		}
		for (c in n) n.hasOwnProperty(c) && (r = n[c], r != null && $(e, t, c, r, n, null));
	}
	var rp = {};
	function ip(e, t, n, r) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "input":
				var a = null, o = null, s = null, c = null, l = null, u = null, d = null;
				for (m in n) {
					var f = n[m];
					if (n.hasOwnProperty(m) && f != null) switch (m) {
						case "checked": break;
						case "value": break;
						case "defaultValue": l = f;
						default: r.hasOwnProperty(m) || $(e, t, m, null, r, f);
					}
				}
				for (var p in r) {
					var m = r[p];
					if (f = n[p], r.hasOwnProperty(p) && (m != null || f != null)) switch (p) {
						case "type":
							m !== f && (P = !0), o = m;
							break;
						case "name":
							m !== f && (P = !0), a = m;
							break;
						case "checked":
							m !== f && (P = !0), u = m;
							break;
						case "defaultChecked":
							m !== f && (P = !0), d = m;
							break;
						case "value":
							m !== f && (P = !0), s = m;
							break;
						case "defaultValue":
							m !== f && (P = !0), c = m;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (m != null) throw Error(i(137, t));
							break;
						default: m !== f && $(e, t, p, m, r, f);
					}
				}
				cn(e, s, c, l, u, d, o, a);
				return;
			case "select":
				for (o in m = s = c = p = null, n) if (l = n[o], n.hasOwnProperty(o) && l != null) switch (o) {
					case "value": break;
					case "multiple": m = l;
					default: r.hasOwnProperty(o) || $(e, t, o, null, r, l);
				}
				for (a in r) if (o = r[a], l = n[a], r.hasOwnProperty(a) && (o != null || l != null)) switch (a) {
					case "value":
						o !== l && (P = !0), p = o;
						break;
					case "defaultValue":
						o !== l && (P = !0), c = o;
						break;
					case "multiple": o !== l && (P = !0), s = o;
					default: o !== l && $(e, t, a, o, r, l);
				}
				t = c, n = s, r = m, p == null ? !!r != !!n && (t == null ? I(e, !!n, n ? [] : "", !1) : I(e, !!n, t, !0)) : I(e, !!n, p, !1);
				return;
			case "textarea":
				for (c in m = p = null, n) if (a = n[c], n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c)) switch (c) {
					case "value": break;
					case "children": break;
					default: $(e, t, c, null, r, a);
				}
				for (s in r) if (a = r[s], o = n[s], r.hasOwnProperty(s) && (a != null || o != null)) switch (s) {
					case "value":
						a !== o && (P = !0), p = a;
						break;
					case "defaultValue":
						a !== o && (P = !0), m = a;
						break;
					case "children": break;
					case "dangerouslySetInnerHTML":
						if (a != null) throw Error(i(91));
						break;
					default: a !== o && $(e, t, s, a, r, o);
				}
				dn(e, p, m);
				return;
			case "option":
				for (var h in n) if (p = n[h], n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h)) switch (h) {
					case "selected":
						e.selected = !1;
						break;
					default: $(e, t, h, null, r, p);
				}
				for (l in r) if (p = r[l], m = n[l], r.hasOwnProperty(l) && p !== m && (p != null || m != null)) switch (l) {
					case "selected":
						p !== m && (P = !0), e.selected = p && typeof p != "function" && typeof p != "symbol";
						break;
					default: $(e, t, l, p, r, m);
				}
				return;
			case "img":
			case "link":
			case "area":
			case "base":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "source":
			case "track":
			case "wbr":
			case "menuitem":
				for (var g in n) p = n[g], n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g) && $(e, t, g, null, r, p);
				for (u in r) if (p = r[u], m = n[u], r.hasOwnProperty(u) && p !== m && (p != null || m != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML":
						if (p != null) throw Error(i(137, t));
						break;
					default: $(e, t, u, p, r, m);
				}
				return;
			default: if (_n(t)) {
				for (var _ in n) p = n[_], n.hasOwnProperty(_) && p !== void 0 && !r.hasOwnProperty(_) && tp(e, t, _, void 0, r, p);
				for (d in r) p = r[d], m = n[d], !r.hasOwnProperty(d) || p === m || p === void 0 && m === void 0 || tp(e, t, d, p, r, m);
				return;
			}
		}
		for (var v in n) p = n[v], n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && $(e, t, v, null, r, p);
		for (f in r) p = r[f], m = n[f], !r.hasOwnProperty(f) || p === m || p == null && m == null || $(e, t, f, p, r, m);
	}
	function ap(e) {
		switch (e) {
			case "css":
			case "script":
			case "font":
			case "img":
			case "image":
			case "input":
			case "link": return !0;
			default: return !1;
		}
	}
	function op() {
		if (typeof performance.getEntriesByType == "function") {
			for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), r = 0; r < n.length; r++) {
				var i = n[r], a = i.transferSize, o = i.initiatorType, s = i.duration;
				if (a && s && ap(o)) {
					for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
						var c = n[r], l = c.startTime;
						if (l > s) break;
						var u = c.transferSize, d = c.initiatorType;
						u && ap(d) && (c = c.responseEnd, o += u * (c < s ? 1 : (s - l) / (c - l)));
					}
					if (--r, t += 8 * (a + o) / (i.duration / 1e3), e++, 10 < e) break;
				}
			}
			if (0 < e) return t / e / 1e6;
		}
		return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
	}
	var sp = null, cp = null;
	function lp(e) {
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	function up(e) {
		switch (e) {
			case "http://www.w3.org/2000/svg": return 1;
			case "http://www.w3.org/1998/Math/MathML": return 2;
			default: return 0;
		}
	}
	function dp(e, t) {
		if (e === 0) switch (t) {
			case "svg": return 1;
			case "math": return 2;
			default: return 0;
		}
		return e === 1 && t === "foreignObject" ? 0 : e;
	}
	function fp(e, t, n, r) {
		return n = lp(n).createElement(e), n[Dt] = r, n[Ot] = t, np(n, e, t), Vt(n), n;
	}
	function pp(e, t) {
		return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
	}
	var mp = null;
	function hp() {
		var e = window.event;
		return e && e.type === "popstate" ? e !== mp && (mp = e, !0) : (mp = null, !1);
	}
	var gp = typeof setTimeout == "function" ? setTimeout : void 0, _p = typeof clearTimeout == "function" ? clearTimeout : void 0, vp = typeof Promise == "function" ? Promise : void 0, yp = typeof requestAnimationFrame == "function" ? requestAnimationFrame : gp, bp = typeof queueMicrotask == "function" ? queueMicrotask : vp === void 0 ? gp : function(e) {
		return vp.resolve(null).then(e).catch(xp);
	};
	function xp(e) {
		setTimeout(function() {
			throw e;
		});
	}
	function Sp(e) {
		return e === "head";
	}
	function Cp(e, t) {
		var n = t, r = 0;
		do {
			var i = n.nextSibling;
			if (e.removeChild(n), i && i.nodeType === 8) {
				if (n = i.data, n === "/$" || n === "/&") {
					if (r === 0) {
						e.removeChild(i), Hh(t);
						return;
					}
					r--;
				} else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") r++;
				else if (n === "html") _m(e.ownerDocument.documentElement);
				else if (n === "head") {
					n = e.ownerDocument.head, _m(n);
					for (var a = n.firstChild; a;) {
						var o = a.nextSibling, s = a.nodeName;
						a[Pt] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && a.rel.toLowerCase() === "stylesheet" || n.removeChild(a), a = o;
					}
				} else n === "body" && _m(e.ownerDocument.body);
			}
			n = i;
		} while (n);
		Hh(t);
	}
	function wp(e, t) {
		var n = e;
		e = 0;
		do {
			var r = n.nextSibling;
			if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), r && r.nodeType === 8) {
				if (n = r.data, n === "/$") {
					if (e === 0) break;
					e--;
				} else n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
			}
			n = r;
		} while (n);
	}
	function Tp(e, t, n) {
		if (t = CSS.escape(t) === t ? t : "r-" + btoa(t).replace(/=/g, ""), e.style.viewTransitionName = t, n != null && (e.style.viewTransitionClass = n), n = getComputedStyle(e), n.display === "inline") {
			if (t = e.getClientRects(), t.length === 1) var r = 1;
			else for (var i = r = 0; i < t.length; i++) {
				var a = t[i];
				0 < a.width && 0 < a.height && r++;
			}
			r === 1 && (e = e.style, e.display = t.length === 1 ? "inline-block" : "block", e.marginTop = "-" + n.paddingTop, e.marginBottom = "-" + n.paddingBottom);
		}
	}
	function Ep(e, t) {
		e = e.style, t = t.style;
		var n = t == null ? null : t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null;
		e.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = t == null ? null : t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null, e.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), e.display === "inline-block" && (t == null ? e.display = e.margin = "" : (n = t.display, e.display = n == null || typeof n == "boolean" ? "" : n, n = t.margin, n == null ? (n = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], e.marginTop = n == null || typeof n == "boolean" ? "" : n, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], e.marginBottom = t == null || typeof t == "boolean" ? "" : t) : e.margin = n));
	}
	function Dp(e, t, n) {
		return n = n.ownerDocument.defaultView, {
			rect: e,
			abs: t.position === "absolute" || t.position === "fixed",
			clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
			view: 0 <= e.bottom && 0 <= e.right && e.top <= n.innerHeight && e.left <= n.innerWidth
		};
	}
	function Op(e) {
		return Dp(e.getBoundingClientRect(), getComputedStyle(e), e);
	}
	function kp(e) {
		var t = e.getBoundingClientRect();
		t = new DOMRect(t.x + 2e4, t.y + 2e4, t.width, t.height);
		var n = getComputedStyle(e);
		return Dp(t, n, e);
	}
	function Ap(e) {
		return e.documentElement.clientHeight;
	}
	function jp(e) {
		this.addEventListener("load", e), this.addEventListener("error", e);
	}
	function Mp(e, t, n, r, i, a, o, s, c) {
		var l = t.nodeType === 9 ? t : t.ownerDocument;
		try {
			var u = l.startViewTransition({
				update: function() {
					var t = l.defaultView, n = t.navigation && t.navigation.transition, o = l.fonts.status;
					r();
					var s = [];
					if (o === "loaded" && (Ap(l), l.fonts.status === "loading" && s.push(l.fonts.ready)), o = s.length, e !== null) for (var c = e.suspenseyImages, u = 0, d = 0; d < c.length; d++) {
						var f = c[d];
						if (!f.complete) {
							var p = f.getBoundingClientRect();
							if (0 < p.bottom && 0 < p.right && p.top < t.innerHeight && p.left < t.innerWidth) {
								if (u += Xm(f), u > $m) {
									s.length = o;
									break;
								}
								f = new Promise(jp.bind(f)), s.push(f);
							}
						}
					}
					if (0 < s.length) return t = Promise.race([Promise.all(s), new Promise(function(e) {
						return setTimeout(e, 500);
					})]).then(i, i), (n ? Promise.allSettled([n.finished, t]) : t).then(a, a);
					if (i(), n) return n.finished.then(a, a);
					a();
				},
				types: n
			});
			l.__reactViewTransition = u;
			var d = [];
			return u.ready.then(function() {
				for (var e = l.documentElement.getAnimations({ subtree: !0 }), t = 0; t < e.length; t++) {
					var n = e[t], r = n.effect, i = r.pseudoElement;
					if (i != null && i.startsWith("::view-transition")) {
						d.push(n), n = r.getKeyframes();
						for (var a = i = void 0, s = !0, c = 0; c < n.length; c++) {
							var u = n[c], f = u.width;
							if (i === void 0) i = f;
							else if (i !== f) {
								s = !1;
								break;
							}
							if (f = u.height, a === void 0) a = f;
							else if (a !== f) {
								s = !1;
								break;
							}
							delete u.width, delete u.height, u.transform === "none" && delete u.transform;
						}
						s && i !== void 0 && a !== void 0 && (r.setKeyframes(n), s = getComputedStyle(r.target, r.pseudoElement), s.width !== i || s.height !== a) && (s = n[0], s.width = i, s.height = a, s = n[n.length - 1], s.width = i, s.height = a, r.setKeyframes(n));
					}
				}
				o();
			}, function(e) {
				l.__reactViewTransition === u && (l.__reactViewTransition = null);
				try {
					if (typeof e == "object" && e) switch (e.name) {
						case "InvalidStateError": (e.message === "View transition was skipped because document visibility state is hidden." || e.message === "Skipping view transition because document visibility state has become hidden." || e.message === "Skipping view transition because viewport size changed." || e.message === "Transition was aborted because of invalid state") && (e = null);
					}
					e !== null && c(e);
				} finally {
					r(), i(), o();
				}
			}), u.finished.finally(function() {
				for (var e = 0; e < d.length; e++) d[e].cancel();
				l.__reactViewTransition === u && (l.__reactViewTransition = null), s();
			}), u;
		} catch {
			return r(), i(), o(), null;
		}
	}
	function Np(e, t) {
		this._scope = document.documentElement, this._selector = "::view-transition-" + e + "(" + t + ")";
	}
	Np.prototype.animate = function(e, t) {
		return t = typeof t == "number" ? { duration: t } : E({}, t), t.pseudoElement = this._selector, this._scope.animate(e, t);
	}, Np.prototype.getAnimations = function() {
		for (var e = this._scope, t = this._selector, n = e.getAnimations({ subtree: !0 }), r = [], i = 0; i < n.length; i++) {
			var a = n[i].effect;
			a !== null && a.target === e && a.pseudoElement === t && r.push(n[i]);
		}
		return r;
	}, Np.prototype.getComputedStyle = function() {
		return getComputedStyle(this._scope, this._selector);
	};
	function Pp(e) {
		return {
			name: e,
			group: new Np("group", e),
			imagePair: new Np("image-pair", e),
			old: new Np("old", e),
			new: new Np("new", e)
		};
	}
	function Fp(e) {
		this._fragmentFiber = e, this._observers = this._eventListeners = null;
	}
	Fp.prototype.addEventListener = function(e, t, n) {
		var r = null, i = null;
		if (!(n != null && typeof n != "boolean" && (r = n.signal || null, r !== null && r.aborted))) {
			this._eventListeners === null && (this._eventListeners = []);
			var a = this._eventListeners;
			if (Bp(a, e, t, n) === -1) {
				var o = this, s = t;
				n != null && typeof n != "boolean" && !0 === n.once && (s = function(r) {
					o.removeEventListener(e, t, n), typeof t == "function" ? t.call(this, r) : t.handleEvent(r);
				}), r !== null && (i = o.removeEventListener.bind(o, e, t, n), r.addEventListener("abort", i, { once: !0 }), i = r.removeEventListener.bind(r, "abort", i)), r = Rp(n), a.push({
					type: e,
					listener: t,
					optionsOrUseCapture: n,
					attachedListener: s,
					cleanup: i
				}), h(this._fragmentFiber.child, !1, Ip, e, s, r);
			}
			this._eventListeners = a;
		}
	};
	function Ip(e, t, n, r) {
		return b(e).addEventListener(t, n, r), !1;
	}
	Fp.prototype.removeEventListener = function(e, t, n) {
		var r = this._eventListeners;
		if (r !== null && (t = Bp(r, e, t, n), t !== -1)) {
			var i = r[t];
			n = i.attachedListener;
			var a = i.cleanup;
			i = Rp(i.optionsOrUseCapture), h(this._fragmentFiber.child, !1, Lp, e, n, i), r.splice(t, 1), a !== null && a();
		}
	};
	function Lp(e, t, n, r) {
		return b(e).removeEventListener(t, n, r), !1;
	}
	function Rp(e) {
		return e != null && typeof e != "boolean" && (!0 === e.once || e.signal instanceof AbortSignal) ? {
			capture: e.capture,
			passive: e.passive
		} : e;
	}
	function zp(e) {
		return e == null ? "c=0" : typeof e == "boolean" ? "c=" + (e ? "1" : "0") : "c=" + (e.capture ? "1" : "0");
	}
	function Bp(e, t, n, r) {
		if (e.length === 0) return -1;
		r = zp(r);
		for (var i = 0; i < e.length; i++) {
			var a = e[i];
			if (a.type === t && a.listener === n && zp(a.optionsOrUseCapture) === r) return i;
		}
		return -1;
	}
	Fp.prototype.dispatchEvent = function(e) {
		var t = g(this._fragmentFiber);
		if (t === null) return !0;
		t = b(t);
		var n = this._eventListeners;
		if (n !== null && 0 < n.length || !e.bubbles) {
			var r = t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
			if (n) for (var i = 0; i < n.length; i++) {
				var a = n[i];
				r.addEventListener(a.type, a.attachedListener, Rp(a.optionsOrUseCapture));
			}
			if (t.appendChild(r), e = r.dispatchEvent(e), n) for (i = 0; i < n.length; i++) a = n[i], r.removeEventListener(a.type, a.attachedListener, Rp(a.optionsOrUseCapture));
			return t.removeChild(r), e;
		}
		return t.dispatchEvent(e);
	}, Fp.prototype.focus = function(e) {
		h(this._fragmentFiber.child, !0, Vp, e, void 0, void 0);
	};
	function Vp(e, t) {
		return e.tag !== 6 && (e = b(e), pm(e, t));
	}
	Fp.prototype.focusLast = function(e) {
		var t = [];
		h(this._fragmentFiber.child, !0, Hp, t, void 0, void 0);
		for (var n = t.length - 1; 0 <= n && !Vp(t[n], e); n--);
	};
	function Hp(e, t) {
		return t.push(e), !1;
	}
	Fp.prototype.blur = function() {
		var e = g(this._fragmentFiber);
		e !== null && (e = b(e), e = lp(e).activeElement, e !== null && h(this._fragmentFiber.child, !1, Up, e, void 0, void 0));
	};
	function Up(e, t) {
		return e.tag !== 6 && (e = b(e), e === t || e.contains(t) ? (t.blur(), !0) : !1);
	}
	Fp.prototype.observeUsing = function(e) {
		this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e), h(this._fragmentFiber.child, !1, Wp, e, void 0, void 0);
	};
	function Wp(e, t) {
		return e.tag !== 6 && (e = b(e), t.observe(e), !1);
	}
	Fp.prototype.unobserveUsing = function(e) {
		var t = this._observers;
		if (t !== null && t.has(e)) {
			t.delete(e), h(this._fragmentFiber.child, !1, Gp, e, void 0, void 0);
			for (var n = t = 0; n < Kp.length; n++) {
				var r = Kp[n];
				r.fragmentInstance === this && r.observer === e ? e.unobserve(r.instance) : Kp[t++] = r;
			}
			Kp.length = t;
		}
	};
	function Gp(e, t) {
		return e.tag !== 6 && (e = b(e), t.unobserve(e), !1);
	}
	var Kp = [], qp = !1;
	function Jp(e, t, n) {
		Kp.push({
			fragmentInstance: e,
			observer: t,
			instance: n
		}), qp || (qp = !0, mm(function() {
			qp = !1;
			var e = Kp;
			Kp = [];
			for (var t = 0; t < e.length; t++) {
				var n = e[t];
				n.observer.unobserve(n.instance);
			}
		}));
	}
	Fp.prototype.getClientRects = function() {
		var e = [];
		return h(this._fragmentFiber.child, !1, Yp, e, void 0, void 0), e;
	};
	function Yp(e, t) {
		if (e.tag === 6) {
			e = e.stateNode;
			var n = e.ownerDocument.createRange();
			n.selectNodeContents(e), t.push.apply(t, n.getClientRects());
		} else e = b(e), t.push.apply(t, e.getClientRects());
		return !1;
	}
	Fp.prototype.getRootNode = function(e) {
		var t = g(this._fragmentFiber);
		return t === null ? this : b(t).getRootNode(e);
	}, Fp.prototype.compareDocumentPosition = function(e) {
		var t = g(this._fragmentFiber);
		if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
		var n = [];
		h(this._fragmentFiber.child, !1, Hp, n, void 0, void 0);
		var r = b(t);
		if (n.length === 0) {
			if (n = r, _(this._fragmentFiber)) {
				a: {
					for (t = this._fragmentFiber.return; t !== null;) {
						if (t.tag === 4) {
							t = t.stateNode.containerInfo;
							break a;
						}
						if (t.tag === 3 || t.tag === 5 || t.tag === 27) break;
						t = t.return;
					}
					t = null;
				}
				t != null && (n = t);
			}
			t = this._fragmentFiber;
			var i = r = n.compareDocumentPosition(e);
			return n === e ? i = Node.DOCUMENT_POSITION_CONTAINS : r & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = v(t)[1], n === null ? i = Node.DOCUMENT_POSITION_PRECEDING : (e = b(n).compareDocumentPosition(e), i = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), i |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
		}
		t = b(n[0]), i = b(n[n.length - 1]);
		var a = _(this._fragmentFiber) ? t.parentElement : r;
		if (a == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
		r = a.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, a = a.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY;
		var o = t.compareDocumentPosition(e), s = i.compareDocumentPosition(e), c = o & Node.DOCUMENT_POSITION_CONTAINED_BY || s & Node.DOCUMENT_POSITION_CONTAINED_BY;
		return s = r && a && o & Node.DOCUMENT_POSITION_FOLLOWING && s & Node.DOCUMENT_POSITION_PRECEDING, t = r && t === e || a && i === e || c || s ? Node.DOCUMENT_POSITION_CONTAINED_BY : !r && t === e || !a && i === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : o, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Xp(t, this._fragmentFiber, n[0], n[n.length - 1], e) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
	};
	function Xp(e, t, n, r, i) {
		var a = Lt(i);
		if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
			if (n = !!a) a: {
				for (; a !== null;) {
					if (a.tag === 7 && (a === t || a.alternate === t)) {
						n = !0;
						break a;
					}
					a = a.return;
				}
				n = !1;
			}
			return n;
		}
		if (e & Node.DOCUMENT_POSITION_CONTAINS) {
			if (a === null) return a = i.ownerDocument, i === a || i === a.documentElement || i === a.body;
			a: {
				for (a = t, t = g(t); a !== null;) {
					if (!(a.tag !== 5 && a.tag !== 3 && a.tag !== 27 || a !== t && a.alternate !== t)) {
						a = !0;
						break a;
					}
					a = a.return;
				}
				a = !1;
			}
			return a;
		}
		return e & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!a) && !(t = a === n) && (t = ee(n, a, T), t === null ? t = !1 : (h(t, !0, C, a, n), a = x, x = null, t = a !== null)), t) : e & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!a) && !(t = a === r) && (t = ee(r, a, T), t === null ? t = !1 : (h(t, !0, w, a, r), a = x, S = x = null, t = a !== null)), t) : !1;
	}
	function Zp(e, t) {
		var n = e.ownerDocument.createRange();
		n.selectNodeContents(e), e = n.getBoundingClientRect(), window.scrollTo(window.scrollX + e.left, t ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight);
	}
	Fp.prototype.scrollIntoView = function(e) {
		if (typeof e == "object") throw Error(i(566));
		var t = [];
		h(this._fragmentFiber.child, !1, Hp, t, void 0, void 0);
		var n = !1 !== e;
		if (t.length === 0) {
			var r = v(this._fragmentFiber);
			if (r = n ? r[1] || r[0] || g(this._fragmentFiber) : r[0] || r[1], r === null) return;
			if (r.tag === 6) {
				e = b(r), Zp(e, n);
				return;
			}
			if (r = b(r), r.nodeType !== 9) {
				if (r.nodeType === 11) {
					n = "host" in r ? r.host : null, n !== null && n.scrollIntoView(e);
					return;
				}
				r.scrollIntoView(e);
			}
		}
		for (r = n ? t.length - 1 : 0; r !== (n ? -1 : t.length);) {
			var a = t[r];
			a.tag === 6 ? (a = b(a), Zp(a, n)) : b(a).scrollIntoView(e), r += n ? -1 : 1;
		}
	};
	function Qp(e, t) {
		return e = b(e), $p(e, t), !1;
	}
	function $p(e, t) {
		e.reactFragments ??= /* @__PURE__ */ new Set(), e.reactFragments.add(t);
	}
	function em(e, t) {
		var n = t._eventListeners;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = n[r];
			e.addEventListener(i.type, i.attachedListener, Rp(i.optionsOrUseCapture));
		}
		e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(n) {
			for (var r = 0, i = 0; i < Kp.length; i++) {
				var a = Kp[i];
				(a.fragmentInstance !== t || a.observer !== n || a.instance !== e) && (Kp[r++] = a);
			}
			Kp.length = r, n.observe(e);
		}), $p(e, t));
	}
	function tm(e, t) {
		var n = t._eventListeners;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = n[r];
			e.removeEventListener(i.type, i.attachedListener, Rp(i.optionsOrUseCapture));
		}
		e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(n) {
			typeof n.rootMargin == "string" ? Jp(t, n, e) : n.unobserve(e);
		}), e.reactFragments != null && e.reactFragments.delete(t));
	}
	function nm(e) {
		var t = e.firstChild;
		for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
			var n = t;
			switch (t = t.nextSibling, n.nodeName) {
				case "HTML":
				case "HEAD":
				case "BODY":
					nm(n), It(n);
					continue;
				case "SCRIPT":
				case "STYLE": continue;
				case "LINK": if (n.rel.toLowerCase() === "stylesheet") continue;
			}
			e.removeChild(n);
		}
	}
	function rm(e, t, n, r) {
		for (; e.nodeType === 1;) {
			var i = n;
			if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
				if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
			} else if (!r) {
				if (t === "input" && e.type === "hidden") {
					var a = i.name == null ? null : "" + i.name;
					if (i.type === "hidden" && e.getAttribute("name") === a) return e;
				} else return e;
			} else if (!e[Pt]) switch (t) {
				case "meta":
					if (!e.hasAttribute("itemprop")) break;
					return e;
				case "link":
					if (a = e.getAttribute("rel"), a === "stylesheet" && e.hasAttribute("data-precedence") || a !== i.rel || e.getAttribute("href") !== (i.href == null || i.href === "" ? null : i.href) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute("title") !== (i.title == null ? null : i.title)) break;
					return e;
				case "style":
					if (e.hasAttribute("data-precedence")) break;
					return e;
				case "script":
					if (a = e.getAttribute("src"), (a !== (i.src == null ? null : i.src) || e.getAttribute("type") !== (i.type == null ? null : i.type) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && a && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
					return e;
				default: return e;
			}
			if (e = lm(e.nextSibling), e === null) break;
		}
		return null;
	}
	function im(e, t, n) {
		if (t === "") return null;
		for (; e.nodeType !== 3;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = lm(e.nextSibling), e === null)) return null;
		return e;
	}
	function am(e, t) {
		for (; e.nodeType !== 8;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = lm(e.nextSibling), e === null)) return null;
		return e;
	}
	function om(e) {
		return e.data === "$?" || e.data === "$~";
	}
	function sm(e) {
		return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
	}
	function cm(e, t) {
		var n = e.ownerDocument;
		if (e.data === "$~") e._reactRetry = t;
		else if (e.data !== "$?" || n.readyState !== "loading") t();
		else {
			var r = function() {
				t(), n.removeEventListener("DOMContentLoaded", r);
			};
			n.addEventListener("DOMContentLoaded", r), e._reactRetry = r;
		}
	}
	function lm(e) {
		for (; e != null; e = e.nextSibling) {
			var t = e.nodeType;
			if (t === 1 || t === 3) break;
			if (t === 8) {
				if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
				if (t === "/$" || t === "/&") return null;
			}
		}
		return e;
	}
	var um = null;
	function dm(e) {
		e = e.nextSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "/$" || n === "/&") {
					if (t === 0) return lm(e.nextSibling);
					t--;
				} else n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
			}
			e = e.nextSibling;
		}
		return null;
	}
	function fm(e) {
		e = e.previousSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
					if (t === 0) return e;
					t--;
				} else n !== "/$" && n !== "/&" || t++;
			}
			e = e.previousSibling;
		}
		return null;
	}
	function pm(e, t) {
		function n() {
			r = !0;
		}
		if (e.ownerDocument.activeElement === e) return !0;
		var r = !1;
		try {
			e.ownerDocument.addEventListener("focus", n, !0), (e.focus || HTMLElement.prototype.focus).call(e, t);
		} finally {
			e.ownerDocument.removeEventListener("focus", n, !0);
		}
		return r;
	}
	function mm(e) {
		yp(function() {
			yp(function(t) {
				return e(t);
			});
		});
	}
	function hm(e, t, n) {
		switch (t = lp(n), e) {
			case "html":
				if (e = t.documentElement, !e) throw Error(i(452));
				return e;
			case "head":
				if (e = t.head, !e) throw Error(i(453));
				return e;
			case "body":
				if (e = t.body, !e) throw Error(i(454));
				return e;
			default: throw Error(i(451));
		}
	}
	function gm(e, t, n) {
		for (var r in n) {
			var i = n[r];
			n.hasOwnProperty(r) && i != null && $(e, t, r, null, rp, i);
		}
		n.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === bn && (e.onclick = null), It(e);
	}
	function _m(e) {
		for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
		It(e);
	}
	var vm = /* @__PURE__ */ new Map(), ym = /* @__PURE__ */ new Set();
	function bm(e) {
		if (typeof e.getRootNode == "function") {
			var t = e.getRootNode();
			if (t.nodeType === 9 || t.nodeType === 11) return t;
		}
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	var xm = M.d;
	M.d = {
		f: Sm,
		r: Cm,
		D: Em,
		C: Dm,
		L: Om,
		m: km,
		X: jm,
		S: Am,
		M: Mm
	};
	function Sm() {
		var e = xm.f(), t = zd();
		return e || t;
	}
	function Cm(e) {
		var t = Rt(e);
		t !== null && t.tag === 5 && t.type === "form" ? nc(t) : xm.r(e);
	}
	var wm = typeof document > "u" ? null : document;
	function Tm(e, t, n) {
		var r = wm;
		if (r && typeof t == "string" && t) {
			var i = sn(t);
			i = "link[rel=\"" + e + "\"][href=\"" + i + "\"]", typeof n == "string" && (i += "[crossorigin=\"" + n + "\"]"), ym.has(i) || (ym.add(i), e = {
				rel: e,
				crossOrigin: n,
				href: t
			}, r.querySelector(i) === null && (t = r.createElement("link"), np(t, "link", e), Vt(t), r.head.appendChild(t)));
		}
	}
	function Em(e) {
		xm.D(e), Tm("dns-prefetch", e, null);
	}
	function Dm(e, t) {
		xm.C(e, t), Tm("preconnect", e, t);
	}
	function Om(e, t, n) {
		xm.L(e, t, n);
		var r = wm;
		if (r && e && t) {
			var i = "link[rel=\"preload\"][as=\"" + sn(t) + "\"]";
			t === "image" && n && n.imageSrcSet ? (i += "[imagesrcset=\"" + sn(n.imageSrcSet) + "\"]", typeof n.imageSizes == "string" && (i += "[imagesizes=\"" + sn(n.imageSizes) + "\"]")) : i += "[href=\"" + sn(e) + "\"]";
			var a = i;
			switch (t) {
				case "style":
					a = Pm(e);
					break;
				case "script": a = Rm(e);
			}
			if (!(vm.has(a) || (e = E({
				rel: "preload",
				href: t === "image" && n && n.imageSrcSet ? void 0 : e,
				as: t
			}, n), vm.set(a, e), r.querySelector(i) !== null || t === "style" && r.querySelector(Fm(a)) || t === "script" && r.querySelector(zm(a))))) {
				var o = r.createElement("link");
				np(o, "link", e), t === "style" && (o[Ft] = !0, o.onload = o.onerror = function() {
					Ht(o);
				}), Vt(o), r.head.appendChild(o);
			}
		}
	}
	function km(e, t) {
		xm.m(e, t);
		var n = wm;
		if (n && e) {
			var r = t && typeof t.as == "string" ? t.as : "script", i = "link[rel=\"modulepreload\"][as=\"" + sn(r) + "\"][href=\"" + sn(e) + "\"]", a = i;
			switch (r) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script": a = Rm(e);
			}
			if (!vm.has(a) && (e = E({
				rel: "modulepreload",
				href: e
			}, t), vm.set(a, e), n.querySelector(i) === null)) {
				switch (r) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script": if (n.querySelector(zm(a))) return;
				}
				r = n.createElement("link"), np(r, "link", e), Vt(r), n.head.appendChild(r);
			}
		}
	}
	function Am(e, t, n) {
		xm.S(e, t, n);
		var r = wm;
		if (r && e) {
			var i = Bt(r).hoistableStyles, a = Pm(e);
			t ||= "default";
			var o = i.get(a);
			if (!o) {
				var s = {
					loading: 0,
					preload: null
				};
				if (o = r.querySelector(Fm(a))) s.loading = 5;
				else {
					e = E({
						rel: "stylesheet",
						href: e,
						"data-precedence": t
					}, n), (n = vm.get(a)) && Hm(e, n);
					var c = o = r.createElement("link");
					Vt(c), np(c, "link", e), c._p = new Promise(function(e, t) {
						c.onload = e, c.onerror = t;
					}), c.addEventListener("load", function() {
						s.loading |= 1;
					}), c.addEventListener("error", function() {
						s.loading |= 2;
					}), s.loading |= 4, Vm(o, t, r);
				}
				o = {
					type: "stylesheet",
					instance: o,
					count: 1,
					state: s
				}, i.set(a, o);
			}
		}
	}
	function jm(e, t) {
		xm.X(e, t);
		var n = wm;
		if (n && e) {
			var r = Bt(n).hoistableScripts, i = Rm(e), a = r.get(i);
			a || (a = n.querySelector(zm(i)), a || (e = E({
				src: e,
				async: !0
			}, t), (t = vm.get(i)) && Um(e, t), a = n.createElement("script"), Vt(a), np(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Mm(e, t) {
		xm.M(e, t);
		var n = wm;
		if (n && e) {
			var r = Bt(n).hoistableScripts, i = Rm(e), a = r.get(i);
			a || (a = n.querySelector(zm(i)), a || (e = E({
				src: e,
				async: !0,
				type: "module"
			}, t), (t = vm.get(i)) && Um(e, t), a = n.createElement("script"), Vt(a), np(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Nm(e, t, n, r) {
		var a = (a = De.current) ? bm(a) : null;
		if (!a) throw Error(i(446));
		switch (e) {
			case "meta":
			case "title": return null;
			case "style": return typeof n.precedence == "string" && typeof n.href == "string" ? (n = Pm(n.href), t = Bt(a).hoistableStyles, r = t.get(n), r || (r = {
				type: "style",
				instance: null,
				count: 0,
				state: null
			}, t.set(n, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			case "link":
				if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
					e = Pm(n.href);
					var o = Bt(a).hoistableStyles, s = o.get(e);
					if (s || (a = a.ownerDocument || a, s = {
						type: "stylesheet",
						instance: null,
						count: 0,
						state: {
							loading: 0,
							preload: null
						}
					}, o.set(e, s), (o = a.querySelector(Fm(e))) ? o._p || (s.instance = o, s.state.loading = 5) : (o = vm.get(e), o || (o = {
						rel: "preload",
						as: "style",
						href: n.href,
						crossOrigin: n.crossOrigin,
						integrity: n.integrity,
						media: n.media,
						hrefLang: n.hrefLang,
						referrerPolicy: n.referrerPolicy
					}, vm.set(e, o)), Lm(a, e, o, s.state))), t && r === null) throw Error(i(528, ""));
					return s;
				}
				if (t && r !== null) throw Error(i(529, ""));
				return null;
			case "script": return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (n = Rm(n), t = Bt(a).hoistableScripts, r = t.get(n), r || (r = {
				type: "script",
				instance: null,
				count: 0,
				state: null
			}, t.set(n, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			default: throw Error(i(444, e));
		}
	}
	function Pm(e) {
		return "href=\"" + sn(e) + "\"";
	}
	function Fm(e) {
		return "link[rel=\"stylesheet\"][" + e + "]";
	}
	function Im(e) {
		return E({}, e, {
			"data-precedence": e.precedence,
			precedence: null
		});
	}
	function Lm(e, t, n, r) {
		if (t = e.querySelector("link[rel=\"preload\"][as=\"style\"][" + t + "]")) {
			if (!0 !== t[Ft]) {
				r.loading = 1;
				return;
			}
		} else t = e.createElement("link"), t[Ft] = !0, t.onload = t.onerror = Ht.bind(null, t), np(t, "link", n), Vt(t), e.head.appendChild(t);
		r.preload = t, t.addEventListener("load", function() {
			return r.loading |= 1;
		}), t.addEventListener("error", function() {
			return r.loading |= 2;
		});
	}
	function Rm(e) {
		return "[src=\"" + sn(e) + "\"]";
	}
	function zm(e) {
		return "script[async]" + e;
	}
	function Bm(e, t, n) {
		if (t.count++, t.instance === null) switch (t.type) {
			case "style":
				var r = e.querySelector("style[data-href~=\"" + sn(n.href) + "\"]");
				if (r) return t.instance = r, Vt(r), r;
				var a = E({}, n, {
					"data-href": n.href,
					"data-precedence": n.precedence,
					href: null,
					precedence: null
				});
				return r = (e.ownerDocument || e).createElement("style"), Vt(r), np(r, "style", a), Vm(r, n.precedence, e), t.instance = r;
			case "stylesheet":
				a = Pm(n.href);
				var o = e.querySelector(Fm(a));
				if (o) return t.state.loading |= 4, t.instance = o, Vt(o), o;
				r = Im(n), (a = vm.get(a)) && Hm(r, a), o = (e.ownerDocument || e).createElement("link"), Vt(o);
				var s = o;
				return s._p = new Promise(function(e, t) {
					s.onload = e, s.onerror = t;
				}), np(o, "link", r), t.state.loading |= 4, Vm(o, n.precedence, e), t.instance = o;
			case "script": return o = Rm(n.src), (a = e.querySelector(zm(o))) ? (t.instance = a, Vt(a), a) : (r = n, (a = vm.get(o)) && (r = E({}, n), Um(r, a)), e = e.ownerDocument || e, a = e.createElement("script"), Vt(a), np(a, "link", r), e.head.appendChild(a), t.instance = a);
			case "void": return null;
			default: throw Error(i(443, t.type));
		}
		else t.type === "stylesheet" && !(t.state.loading & 4) && (r = t.instance, t.state.loading |= 4, Vm(r, n.precedence, e));
		return t.instance;
	}
	function Vm(e, t, n) {
		for (var r = n.querySelectorAll("link[rel=\"stylesheet\"][data-precedence],style[data-precedence]"), i = r.length ? r[r.length - 1] : null, a = i, o = 0; o < r.length; o++) {
			var s = r[o];
			if (s.dataset.precedence === t) a = s;
			else if (a !== i) break;
		}
		a ? a.parentNode.insertBefore(e, a.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
	}
	function Hm(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.title ??= t.title;
	}
	function Um(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.integrity ??= t.integrity;
	}
	var Wm = null;
	function Gm(e, t, n) {
		if (Wm === null) {
			var r = /* @__PURE__ */ new Map(), i = Wm = /* @__PURE__ */ new Map();
			i.set(n, r);
		} else i = Wm, r = i.get(n), r || (r = /* @__PURE__ */ new Map(), i.set(n, r));
		if (r.has(e)) return r;
		for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
			var a = n[i];
			if (!(a[Pt] || a[Dt] || e === "link" && a.getAttribute("rel") === "stylesheet") && a.namespaceURI !== "http://www.w3.org/2000/svg") {
				var o = a.getAttribute(t) || "";
				o = e + o;
				var s = r.get(o);
				s ? s.push(a) : r.set(o, [a]);
			}
		}
		return r;
	}
	function Km(e, t, n) {
		e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null);
	}
	function qm(e, t, n) {
		if (n === 1 || t.itemProp != null) return !1;
		switch (e) {
			case "meta":
			case "title": return !0;
			case "style":
				if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
				return !0;
			case "link":
				if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
				switch (t.rel) {
					case "stylesheet": return e = t.disabled, typeof t.precedence == "string" && e == null;
					default: return !0;
				}
			case "script": if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0;
		}
		return !1;
	}
	function Jm(e, t) {
		return e === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy";
	}
	function Ym(e) {
		return !(e.type === "stylesheet" && !(e.state.loading & 3));
	}
	function Xm(e) {
		return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * .25;
	}
	function Zm(e, t) {
		typeof t.decode == "function" && (e.imgCount++, t.complete || (e.imgBytes += Xm(t), e.suspenseyImages.push(t)), e = rh.bind(e), t.decode().then(e, e));
	}
	function Qm(e, t, n, r) {
		if (n.type === "stylesheet" && (typeof r.media != "string" || !1 !== matchMedia(r.media).matches) && !(n.state.loading & 4)) {
			if (n.instance === null) {
				var i = Pm(r.href), a = t.querySelector(Fm(i));
				if (a) {
					t = a._p, typeof t == "object" && t && typeof t.then == "function" && (e.count++, e = nh.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = a, Vt(a);
					return;
				}
				a = t.ownerDocument || t, r = Im(r), (i = vm.get(i)) && Hm(r, i), a = a.createElement("link"), Vt(a);
				var o = a;
				o._p = new Promise(function(e, t) {
					o.onload = e, o.onerror = t;
				}), np(a, "link", r), n.instance = a;
			}
			e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && !(n.state.loading & 3) && (e.count++, n = nh.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
		}
	}
	var $m = 0;
	function eh(e, t) {
		return e.stylesheets && e.count === 0 && ah(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
			var r = setTimeout(function() {
				if (e.stylesheets && ah(e, e.stylesheets), e.unsuspend) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, 6e4 + t);
			0 < e.imgBytes && $m === 0 && ($m = 62500 * op());
			var i = setTimeout(function() {
				if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && ah(e, e.stylesheets), e.unsuspend)) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, (e.imgBytes > $m ? 50 : 800) + t);
			return e.unsuspend = n, function() {
				e.unsuspend = null, clearTimeout(r), clearTimeout(i);
			};
		} : null;
	}
	function th(e) {
		if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
			if (e.stylesheets) ah(e, e.stylesheets);
			else if (e.unsuspend) {
				var t = e.unsuspend;
				e.unsuspend = null, t();
			}
		}
	}
	function nh() {
		this.count--, th(this);
	}
	function rh() {
		this.imgCount--, th(this);
	}
	var ih = null;
	function ah(e, t) {
		e.stylesheets = null, e.unsuspend !== null && (e.count++, ih = /* @__PURE__ */ new Map(), t.forEach(oh, e), ih = null, nh.call(e));
	}
	function oh(e, t) {
		if (!(t.state.loading & 4)) {
			var n = ih.get(e);
			if (n) var r = n.get(null);
			else {
				n = /* @__PURE__ */ new Map(), ih.set(e, n);
				for (var i = e.querySelectorAll("link[data-precedence],style[data-precedence]"), a = 0; a < i.length; a++) {
					var o = i[a];
					(o.nodeName === "LINK" || o.getAttribute("media") !== "not all") && (n.set(o.dataset.precedence, o), r = o);
				}
				r && n.set(null, r);
			}
			i = t.instance, o = i.getAttribute("data-precedence"), a = n.get(o) || r, a === r && n.set(null, i), n.set(o, i), this.count++, r = nh.bind(this), i.addEventListener("load", r), i.addEventListener("error", r), a ? a.parentNode.insertBefore(i, a.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
		}
	}
	var sh = {
		$$typeof: O,
		Provider: null,
		Consumer: null,
		_currentValue: be,
		_currentValue2: be,
		_threadCount: 0
	};
	function ch(e, t, n, r, i, a, o, s, c) {
		this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = gt(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = gt(0), this.hiddenUpdates = gt(null), this.identifierPrefix = r, this.onUncaughtError = i, this.onCaughtError = a, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
	}
	function lh(e, t, n, r, i, a, o, s, c, l, u, d) {
		return e = new ch(e, t, n, o, c, l, u, d, s), t = 1, !0 === a && (t |= 24), a = Ni(3, null, null, t), e.current = a, a.stateNode = e, t = Ma(), t.refCount++, e.pooledCache = t, t.refCount++, a.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: t
		}, ho(a), e;
	}
	function uh(e) {
		return e ? (e = ji, e) : ji;
	}
	function dh(e, t, n, r, i, a) {
		i = uh(i), r.context === null ? r.context = i : r.pendingContext = i, r = _o(t), r.payload = { element: n }, a = a === void 0 ? null : a, a !== null && (r.callback = a), n = vo(e, r, t), n !== null && (Pd(n, e, t), yo(n, e, t));
	}
	function fh(e, t) {
		if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
			var n = e.retryLane;
			e.retryLane = n !== 0 && n < t ? n : t;
		}
	}
	function ph(e, t) {
		fh(e, t), (e = e.alternate) && fh(e, t);
	}
	function mh(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = Oi(e, 67108864);
			t !== null && Pd(t, e, 67108864), ph(e, 67108864);
		}
	}
	function hh(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = jd();
			t = St(t);
			var n = Oi(e, t);
			n !== null && Pd(n, e, t), ph(e, t);
		}
	}
	var gh = !0;
	function _h(e, t, n, r) {
		var i = j.T;
		j.T = null;
		var a = M.p;
		try {
			M.p = 2, yh(e, t, n, r);
		} finally {
			M.p = a, j.T = i;
		}
	}
	function vh(e, t, n, r) {
		var i = j.T;
		j.T = null;
		var a = M.p;
		try {
			M.p = 8, yh(e, t, n, r);
		} finally {
			M.p = a, j.T = i;
		}
	}
	function yh(e, t, n, r) {
		if (gh) {
			var i = bh(r);
			if (i === null) Kf(e, t, r, xh, n), Mh(e, r);
			else if (Ph(i, e, t, n, r)) r.stopPropagation();
			else if (Mh(e, r), t & 4 && -1 < jh.indexOf(e)) {
				for (; i !== null;) {
					var a = Rt(i);
					if (a !== null) switch (a.tag) {
						case 3:
							if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
								var o = ut(a.pendingLanes);
								if (o !== 0) {
									var s = a;
									for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
										var c = 1 << 31 - rt(o);
										s.entanglements[1] |= c, o &= ~c;
									}
									Ef(a), !(K & 6) && (gd = Ge() + 500, Df(0, !1));
								}
							}
							break;
						case 31:
						case 13: s = Oi(a, 2), s !== null && Pd(s, a, 2), zd(), ph(a, 2);
					}
					if (a = bh(r), a === null && Kf(e, t, r, xh, n), a === i) break;
					i = a;
				}
				i !== null && r.stopPropagation();
			} else Kf(e, t, r, null, n);
		}
	}
	function bh(e) {
		return e = Sn(e), Sh(e);
	}
	var xh = null;
	function Sh(e) {
		if (xh = null, e = Lt(e), e !== null) {
			var t = o(e);
			if (t === null) e = null;
			else {
				var n = t.tag;
				if (n === 13) {
					if (e = s(t), e !== null) return e;
					e = null;
				} else if (n === 31) {
					if (e = c(t), e !== null) return e;
					e = null;
				} else if (n === 3) {
					if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
					e = null;
				} else t !== e && (e = null);
			}
		}
		return xh = e, null;
	}
	function Ch(e) {
		switch (e) {
			case "beforetoggle":
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "seeked":
			case "submit":
			case "toggle":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "fullscreenerror":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart": return 2;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "resize":
			case "scroll":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave": return 8;
			case "message": switch (Ke()) {
				case qe: return 2;
				case Je: return 8;
				case Ye:
				case Xe: return 32;
				case Ze: return 268435456;
				default: return 32;
			}
			default: return 32;
		}
	}
	var wh = !1, Th = null, Eh = null, Dh = null, Oh = /* @__PURE__ */ new Map(), kh = /* @__PURE__ */ new Map(), Ah = [], jh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
	function Mh(e, t) {
		switch (e) {
			case "focusin":
			case "focusout":
				Th = null;
				break;
			case "dragenter":
			case "dragleave":
				Eh = null;
				break;
			case "mouseover":
			case "mouseout":
				Dh = null;
				break;
			case "pointerover":
			case "pointerout":
				Oh.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": kh.delete(t.pointerId);
		}
	}
	function Nh(e, t, n, r, i, a) {
		return e === null || e.nativeEvent !== a ? (e = {
			blockedOn: t,
			domEventName: n,
			eventSystemFlags: r,
			nativeEvent: a,
			targetContainers: [i]
		}, t !== null && (t = Rt(t), t !== null && mh(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
	}
	function Ph(e, t, n, r, i) {
		switch (t) {
			case "focusin": return Th = Nh(Th, e, t, n, r, i), !0;
			case "dragenter": return Eh = Nh(Eh, e, t, n, r, i), !0;
			case "mouseover": return Dh = Nh(Dh, e, t, n, r, i), !0;
			case "pointerover":
				var a = i.pointerId;
				return Oh.set(a, Nh(Oh.get(a) || null, e, t, n, r, i)), !0;
			case "gotpointercapture": return a = i.pointerId, kh.set(a, Nh(kh.get(a) || null, e, t, n, r, i)), !0;
		}
		return !1;
	}
	function Fh(e) {
		var t = Lt(e.target);
		if (t !== null) {
			var n = o(t);
			if (n !== null) {
				if (t = n.tag, t === 13) {
					if (t = s(n), t !== null) {
						e.blockedOn = t, Tt(e.priority, function() {
							hh(n);
						});
						return;
					}
				} else if (t === 31) {
					if (t = c(n), t !== null) {
						e.blockedOn = t, Tt(e.priority, function() {
							hh(n);
						});
						return;
					}
				} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
					e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
					return;
				}
			}
		}
		e.blockedOn = null;
	}
	function Ih(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length;) {
			var n = bh(e.nativeEvent);
			if (n === null) {
				n = e.nativeEvent;
				var r = new n.constructor(n.type, n);
				xn = r, n.target.dispatchEvent(r), xn = null;
			} else return t = Rt(n), t !== null && mh(t), e.blockedOn = n, !1;
			t.shift();
		}
		return !0;
	}
	function Lh(e, t, n) {
		Ih(e) && n.delete(t);
	}
	function Rh() {
		wh = !1, Th !== null && Ih(Th) && (Th = null), Eh !== null && Ih(Eh) && (Eh = null), Dh !== null && Ih(Dh) && (Dh = null), Oh.forEach(Lh), kh.forEach(Lh);
	}
	function zh(e, n) {
		e.blockedOn === n && (e.blockedOn = null, wh || (wh = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, Rh)));
	}
	var Bh = null;
	function Vh(e) {
		Bh !== e && (Bh = e, t.unstable_scheduleCallback(t.unstable_NormalPriority, function() {
			Bh === e && (Bh = null);
			for (var t = 0; t < e.length; t += 3) {
				var n = e[t], r = e[t + 1], i = e[t + 2];
				if (typeof r != "function") {
					if (Sh(r || n) === null) continue;
					break;
				}
				var a = Rt(n);
				a !== null && (e.splice(t, 3), t -= 3, ec(a, {
					pending: !0,
					data: i,
					method: n.method,
					action: r
				}, r, i));
			}
		}));
	}
	function Hh(e) {
		function t(t) {
			return zh(t, e);
		}
		Th !== null && zh(Th, e), Eh !== null && zh(Eh, e), Dh !== null && zh(Dh, e), Oh.forEach(t), kh.forEach(t);
		for (var n = 0; n < Ah.length; n++) {
			var r = Ah[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
		for (; 0 < Ah.length && (n = Ah[0], n.blockedOn === null);) Fh(n), n.blockedOn === null && Ah.shift();
		if (n = (e.ownerDocument || e).$$reactFormReplay, n != null) for (r = 0; r < n.length; r += 3) {
			var i = n[r], a = n[r + 1], o = i[Ot] || null;
			if (typeof a == "function") o || Vh(n);
			else if (o) {
				var s = null;
				if (a && a.hasAttribute("formAction")) {
					if (i = a, o = a[Ot] || null) s = o.formAction;
					else if (Sh(i) !== null) continue;
				} else s = o.action;
				typeof s == "function" ? n[r + 1] = s : (n.splice(r, 3), r -= 3), Vh(n);
			}
		}
	}
	function Uh() {
		function e(e) {
			e.canIntercept && e.info === "react-transition" && e.intercept({
				handler: function() {
					return new Promise(function(e) {
						return i = e;
					});
				},
				focusReset: "manual",
				scroll: "manual"
			});
		}
		function t() {
			i !== null && (i(), i = null), r || setTimeout(n, 20);
		}
		function n() {
			if (!r && !navigation.transition) {
				var e = navigation.currentEntry;
				e && e.url != null && navigation.navigate(e.url, {
					state: e.getState(),
					info: "react-transition",
					history: "replace"
				});
			}
		}
		if (typeof navigation == "object") {
			var r = !1, i = null;
			return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
				r = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), i !== null && (i(), i = null);
			};
		}
	}
	function Wh(e) {
		this._internalRoot = e;
	}
	Gh.prototype.render = Wh.prototype.render = function(e) {
		var t = this._internalRoot;
		if (t === null) throw Error(i(409));
		var n = t.current;
		dh(n, jd(), e, t, null, null);
	}, Gh.prototype.unmount = Wh.prototype.unmount = function() {
		var e = this._internalRoot;
		if (e !== null) {
			this._internalRoot = null;
			var t = e.containerInfo;
			dh(e.current, 2, null, e, null, null), zd(), t[kt] = null;
		}
	};
	function Gh(e) {
		this._internalRoot = e;
	}
	Gh.prototype.unstable_scheduleHydration = function(e) {
		if (e) {
			var t = wt();
			e = {
				blockedOn: null,
				target: e,
				priority: t
			};
			for (var n = 0; n < Ah.length && t !== 0 && t < Ah[n].priority; n++);
			Ah.splice(n, 0, e), n === 0 && Fh(e);
		}
	};
	var Kh = n.version;
	if (Kh !== "19.3.0") throw Error(i(527, Kh, "19.3.0"));
	M.findDOMNode = function(e) {
		var t = e._reactInternals;
		if (t === void 0) throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
		return e = d(t), e = e === null ? null : p(e), e = e === null ? null : e.stateNode, e;
	};
	var qh = {
		bundleType: 0,
		version: "19.3.0",
		rendererPackageName: "react-dom",
		currentDispatcherRef: j,
		reconcilerVersion: "19.3.0"
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var Jh = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!Jh.isDisabled && Jh.supportsFiber) try {
			et = Jh.inject(qh), tt = Jh;
		} catch {}
	}
	e.createRoot = function(e, t) {
		if (!a(e)) throw Error(i(299));
		var n = !1, r = "", o = Cc, s = wc, c = Tc;
		return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = lh(e, 1, !1, null, null, n, r, null, o, s, c, Uh), e[kt] = t.current, Wf(e), new Wh(t);
	}, e.hydrateRoot = function(e, t, n) {
		if (!a(e)) throw Error(i(299));
		var r = !1, o = "", s = Cc, c = wc, l = Tc, u = null;
		return n != null && (!0 === n.unstable_strictMode && (r = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (c = n.onCaughtError), n.onRecoverableError !== void 0 && (l = n.onRecoverableError), n.formState !== void 0 && (u = n.formState)), t = lh(e, 1, !0, t, n ?? null, r, o, u, s, c, l, Uh), t.context = uh(null), n = t.current, r = jd(), r = St(r), o = _o(r), o.callback = null, vo(n, o, r), n = r, t.current.lanes = n, _t(t, n), Ef(t), e[kt] = t.current, Wf(e), new Gh(t);
	};
})), g = /* @__PURE__ */ o(((e, t) => {
	function n() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function") try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = h();
})), _ = (e) => e?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toLucideIconData.mjs
function v(e, t, n = []) {
	if (t == null) throw Error("[lucide]: iconNode is required when icon name is used");
	return {
		name: _(e),
		size: 24,
		node: t,
		...n.length > 0 ? { aliases: n } : {}
	};
}
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs
var y = (e) => {
	let t = "", n = !1;
	for (let r of e) {
		if (r === "-" || r === "_" || r <= " ") {
			n = t.length > 0;
			continue;
		}
		t.length === 0 ? t += r.toLowerCase() : t += n ? r.toUpperCase() : r, n = !1;
	}
	return t;
}, b = (e) => {
	let t = y(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, x = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), S = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": 2,
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
};
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconNode.mjs
function C(e) {
	return e != null;
}
function w(e, t = {}) {
	let n = t.attributeNames ?? {}, r = (e) => n[e] ?? e, i = e.size ?? e.width ?? S.width, a = e.size ?? e.height ?? S.height, o = e.aliases?.filter((e) => typeof e == "string" && e.trim() !== "").map((e) => `lucide-${e}`) ?? [], s = [...e.name ? [`lucide-${e.name}`] : [], ...o], c = t.className?.split(" ").filter(Boolean) ?? [], l = t.includeDefaultClasses === !1 ? x(...c) : x("lucide", ...s, ...c), u = t.absoluteStrokeWidth ? Number(t.strokeWidth ?? S["stroke-width"]) * Number(e.size ?? e.width ?? S.width) / Number(t.size ?? t.width ?? S.width) : t.strokeWidth ?? S["stroke-width"];
	return [
		"svg",
		{
			...Object.entries(S).reduce((e, [t, n]) => (e[r(t)] = n, e), {}),
			..."color" in t && t.color && { [r("stroke")]: t.color },
			..."size" in t && C(t.size) && {
				[r("width")]: t.size,
				[r("height")]: t.size
			},
			..."width" in t && C(t.width) && { [r("width")]: t.width },
			..."height" in t && C(t.height) && { [r("height")]: t.height },
			[r("stroke-width")]: u,
			...l && { [r("class")]: l },
			[r("viewBox")]: `0 0 ${i} ${a}`,
			...t.hasA11yProp === !1 ? { [r("aria-hidden")]: "true" } : {},
			..."attributes" in t && t.attributes
		},
		e.node.map((e) => {
			let [n, i, a] = e, o = t.nonScalingStroke ? {
				[r("vector-effect")]: "non-scaling-stroke",
				...i
			} : i;
			return a ? [
				n,
				o,
				a
			] : [n, o];
		})
	];
}
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconForReact.mjs
function T(e, t = {}) {
	return w(e, {
		...t,
		attributeNames: {
			...t.attributeNames,
			class: "className",
			"stroke-width": "strokeWidth",
			"stroke-linecap": "strokeLinecap",
			"stroke-linejoin": "strokeLinejoin",
			"vector-effect": "vectorEffect"
		}
	});
}
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs
var ee = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
	return !1;
}, E = /* @__PURE__ */ c(u(), 1), te = (0, E.createContext)({}), ne = () => (0, E.useContext)(te), re = (0, E.forwardRef)(({ color: e, size: t, width: n, height: r, strokeWidth: i, absoluteStrokeWidth: a, nonScalingStroke: o, className: s = "", children: c, iconNode: l = [], icon: u = {
	node: l,
	aliases: [],
	size: 24
}, ...d }, f) => {
	let { size: p = 24, strokeWidth: m = 2, absoluteStrokeWidth: h = !1, nonScalingStroke: g = !1, color: _ = "currentColor", className: v = "" } = ne() ?? {}, y = !!c || ee(d), [b, S, C = []] = T(u, {
		color: e ?? _,
		width: n ?? t ?? p,
		height: r ?? t ?? p,
		strokeWidth: i ?? m,
		absoluteStrokeWidth: a ?? h,
		nonScalingStroke: o ?? g,
		className: x(v, s),
		hasA11yProp: y,
		attributes: d
	});
	return (0, E.createElement)(b, {
		ref: f,
		...S
	}, [...C.map(([e, t]) => (0, E.createElement)(e, t)), ...Array.isArray(c) ? c : [c]]);
});
//#endregion
//#region node_modules/lucide-react/dist/esm/createLucideIcon.mjs
function D(e, t = [], n = []) {
	let r = typeof e == "string" ? v(e, t, n) : e, i = (0, E.forwardRef)(({ className: e, ...t }, n) => (0, E.createElement)(re, {
		ref: n,
		icon: r,
		className: e,
		...t
	}));
	return r.name && (i.displayName = b(r.name)), i;
}
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/arrow-left.mjs
var ie = {
	name: "arrow-left",
	size: 24,
	node: [["path", {
		d: "m12 19-7-7 7-7",
		key: "1l729n"
	}], ["path", {
		d: "M19 12H5",
		key: "x3x0zl"
	}]]
};
ie.node;
var ae = D(ie), oe = {
	name: "arrow-right",
	size: 24,
	node: [["path", {
		d: "M5 12h14",
		key: "1ays0h"
	}], ["path", {
		d: "m12 5 7 7-7 7",
		key: "xquz4c"
	}]]
};
oe.node;
var O = D(oe), k = {
	name: "arrow-up-right",
	size: 24,
	node: [["path", {
		d: "M7 7h10v10",
		key: "1tivn9"
	}], ["path", {
		d: "M7 17 17 7",
		key: "1vkiza"
	}]]
};
k.node;
var A = D(k), se = {
	name: "book-open",
	size: 24,
	node: [["path", {
		d: "M12 5v16",
		key: "1f6ucr"
	}], ["path", {
		d: "M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",
		key: "1fyvmf"
	}]]
};
se.node;
var ce = D(se), le = {
	name: "calendar-days",
	size: 24,
	node: [
		["path", {
			d: "M8 2v3",
			key: "1ioesn"
		}],
		["path", {
			d: "M16 2v3",
			key: "otl347"
		}],
		["rect", {
			x: "3",
			y: "3",
			width: "18",
			height: "18",
			rx: "2",
			key: "h1oib"
		}],
		["path", {
			d: "M3 9h18",
			key: "1pudct"
		}],
		["path", {
			d: "M8 13h.01",
			key: "1sbv64"
		}],
		["path", {
			d: "M12 13h.01",
			key: "y0uutt"
		}],
		["path", {
			d: "M16 13h.01",
			key: "wip0gl"
		}],
		["path", {
			d: "M8 17h.01",
			key: "p3bg7i"
		}],
		["path", {
			d: "M12 17h.01",
			key: "p32p05"
		}],
		["path", {
			d: "M16 17h.01",
			key: "ql8jdd"
		}]
	]
};
le.node;
var ue = D(le), de = {
	name: "camera",
	size: 24,
	node: [["path", {
		d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
		key: "18u6gg"
	}], ["circle", {
		cx: "12",
		cy: "13",
		r: "3",
		key: "1vg3eu"
	}]]
};
de.node;
var fe = D(de), pe = {
	name: "check-check",
	size: 24,
	node: [["path", {
		d: "M18 6 7 17l-5-5",
		key: "116fxf"
	}], ["path", {
		d: "m22 10-7.5 7.5L13 16",
		key: "ke71qq"
	}]]
};
pe.node;
var me = D(pe), he = {
	name: "check",
	size: 24,
	node: [["path", {
		d: "M20 6 9 17l-5-5",
		key: "1gmf2c"
	}]]
};
he.node;
var ge = D(he), _e = {
	name: "chevron-down",
	size: 24,
	node: [["path", {
		d: "m6 9 6 6 6-6",
		key: "qrunsl"
	}]]
};
_e.node;
var ve = D(_e), ye = {
	name: "chevron-right",
	size: 24,
	node: [["path", {
		d: "m9 18 6-6-6-6",
		key: "mthhwq"
	}]]
};
ye.node;
var j = D(ye), M = {
	name: "chevron-up",
	size: 24,
	node: [["path", {
		d: "m18 15-6-6-6 6",
		key: "153udz"
	}]]
};
M.node;
var be = D(M), xe = {
	name: "clipboard-check",
	size: 24,
	node: [
		["rect", {
			width: "8",
			height: "4",
			x: "8",
			y: "2",
			rx: "1",
			ry: "1",
			key: "tgr4d6"
		}],
		["path", {
			d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
			key: "116196"
		}],
		["path", {
			d: "m9 14 2 2 4-4",
			key: "df797q"
		}]
	]
};
xe.node;
var Se = D(xe), Ce = {
	name: "copy",
	size: 24,
	node: [["rect", {
		width: "14",
		height: "14",
		x: "8",
		y: "8",
		rx: "2",
		ry: "2",
		key: "17jyea"
	}], ["path", {
		d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
		key: "zix9uf"
	}]]
};
Ce.node;
var we = D(Ce), N = {
	name: "key-round",
	size: 24,
	node: [["path", {
		d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
		key: "1s6t7t"
	}], ["circle", {
		cx: "16.5",
		cy: "7.5",
		r: ".5",
		fill: "currentColor",
		key: "w0ekpg"
	}]]
};
N.node;
var Te = D(N), Ee = {
	name: "map-pin",
	size: 24,
	node: [["path", {
		d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
		key: "1r0f0z"
	}], ["circle", {
		cx: "12",
		cy: "10",
		r: "3",
		key: "ilqhr7"
	}]]
};
Ee.node;
var De = D(Ee), Oe = {
	name: "package",
	size: 24,
	node: [
		["path", {
			d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
			key: "1a0edw"
		}],
		["path", {
			d: "M12 22V12",
			key: "d0xqtd"
		}],
		["polyline", {
			points: "3.29 7 12 12 20.71 7",
			key: "ousv84"
		}],
		["path", {
			d: "m7.5 4.27 9 5.15",
			key: "1c824w"
		}]
	]
};
Oe.node;
var ke = D(Oe), Ae = {
	name: "pause",
	size: 24,
	node: [["rect", {
		x: "14",
		y: "3",
		width: "5",
		height: "18",
		rx: "1",
		key: "kaeet6"
	}], ["rect", {
		x: "5",
		y: "3",
		width: "5",
		height: "18",
		rx: "1",
		key: "1wsw3u"
	}]]
};
Ae.node;
var je = D(Ae), Me = {
	name: "phone",
	size: 24,
	node: [["path", {
		d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
		key: "9njp5v"
	}]]
};
Me.node;
var Ne = D(Me), Pe = {
	name: "play",
	size: 24,
	node: [["path", {
		d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
		key: "10ikf1"
	}]]
};
Pe.node;
var Fe = D(Pe), Ie = {
	name: "plus",
	size: 24,
	node: [["path", {
		d: "M5 12h14",
		key: "1ays0h"
	}], ["path", {
		d: "M12 5v14",
		key: "s699le"
	}]]
};
Ie.node;
var Le = D(Ie), Re = {
	name: "recycle",
	size: 24,
	node: [
		["path", {
			d: "M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",
			key: "x6z5xu"
		}],
		["path", {
			d: "M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",
			key: "1x4zh5"
		}],
		["path", {
			d: "m14 16-3 3 3 3",
			key: "f6jyew"
		}],
		["path", {
			d: "M8.293 13.596 7.196 9.5 3.1 10.598",
			key: "wf1obh"
		}],
		["path", {
			d: "m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",
			key: "9tzpgr"
		}],
		["path", {
			d: "m13.378 9.633 4.096 1.098 1.097-4.096",
			key: "1oe83g"
		}]
	]
};
Re.node;
var ze = D(Re), Be = {
	name: "rotate-ccw",
	size: 24,
	node: [["path", {
		d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
		key: "1357e3"
	}], ["path", {
		d: "M3 3v5h5",
		key: "1xhq8a"
	}]]
};
Be.node;
var Ve = D(Be), He = {
	name: "scan-line",
	size: 24,
	node: [
		["path", {
			d: "M3 7V5a2 2 0 0 1 2-2h2",
			key: "aa7l1z"
		}],
		["path", {
			d: "M17 3h2a2 2 0 0 1 2 2v2",
			key: "4qcy5o"
		}],
		["path", {
			d: "M21 17v2a2 2 0 0 1-2 2h-2",
			key: "6vwrx8"
		}],
		["path", {
			d: "M7 21H5a2 2 0 0 1-2-2v-2",
			key: "ioqczr"
		}],
		["path", {
			d: "M7 12h10",
			key: "b7w52i"
		}]
	]
};
He.node;
var Ue = D(He), We = {
	name: "send",
	size: 24,
	node: [["path", {
		d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
		key: "1ffxy3"
	}], ["path", {
		d: "m21.854 2.147-10.94 10.939",
		key: "12cjpa"
	}]]
};
We.node;
var Ge = D(We), Ke = {
	name: "shield-check",
	size: 24,
	node: [["path", {
		d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
		key: "oel41y"
	}], ["path", {
		d: "m9 12 2 2 4-4",
		key: "dzmm74"
	}]]
};
Ke.node;
var qe = D(Ke), Je = {
	name: "sparkles",
	size: 24,
	node: [
		["path", {
			d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
			key: "1s2grr"
		}],
		["path", {
			d: "M20 2v4",
			key: "1rf3ol"
		}],
		["path", {
			d: "M22 4h-4",
			key: "gwowj6"
		}],
		["circle", {
			cx: "4",
			cy: "20",
			r: "2",
			key: "6kqj1y"
		}]
	],
	aliases: ["stars"]
};
Je.node;
var Ye = D(Je), Xe = {
	name: "square",
	size: 24,
	node: [["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}]]
};
Xe.node;
var Ze = D(Xe), Qe = {
	name: "truck",
	size: 24,
	node: [
		["path", {
			d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
			key: "wrbu53"
		}],
		["path", {
			d: "M15 18H9",
			key: "1lyqi6"
		}],
		["path", {
			d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
			key: "lysw3i"
		}],
		["circle", {
			cx: "17",
			cy: "18",
			r: "2",
			key: "332jqn"
		}],
		["circle", {
			cx: "7",
			cy: "18",
			r: "2",
			key: "19iecd"
		}]
	]
};
Qe.node;
var $e = D(Qe), et = {
	name: "volume-2",
	size: 24,
	node: [
		["path", {
			d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
			key: "uqj9uw"
		}],
		["path", {
			d: "M16 9a5 5 0 0 1 0 6",
			key: "1q6k2b"
		}],
		["path", {
			d: "M19.364 18.364a9 9 0 0 0 0-12.728",
			key: "ijwkga"
		}]
	]
};
et.node;
var tt = D(et), nt = {
	name: "x",
	size: 24,
	node: [["path", {
		d: "M18 6 6 18",
		key: "1bl5f8"
	}], ["path", {
		d: "m6 6 12 12",
		key: "d8bk6v"
	}]]
};
nt.node;
var rt = D(nt), it = /* @__PURE__ */ c(m(), 1), at = g();
function ot(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") {
		if (Array.isArray(e)) {
			var i = e.length;
			for (t = 0; t < i; t++) e[t] && (n = ot(e[t])) && (r && (r += " "), r += n);
		} else for (n in e) e[n] && (r && (r += " "), r += n);
	}
	return r;
}
function st() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = ot(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/class-variance-authority/dist/index.mjs
var ct = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, lt = st, ut = (e, t) => (n) => {
	if (t?.variants == null) return lt(e, n?.class, n?.className);
	let { variants: r, defaultVariants: i } = t, a = Object.keys(r).map((e) => {
		let t = n?.[e], a = i?.[e];
		if (t === null) return null;
		let o = ct(t) || ct(a);
		return r[e][o];
	}), o = n && Object.entries(n).reduce((e, t) => {
		let [n, r] = t;
		return r === void 0 || (e[n] = r), e;
	}, {});
	return lt(e, a, t?.compoundVariants?.reduce((e, t) => {
		let { class: n, className: r, ...a } = t;
		return Object.entries(a).every((e) => {
			let [t, n] = e;
			return Array.isArray(n) ? n.includes({
				...i,
				...o
			}[t]) : {
				...i,
				...o
			}[t] === n;
		}) ? [
			...e,
			n,
			r
		] : e;
	}, []), n?.class, n?.className);
}, dt = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, ft = (e, t) => ({
	classGroupId: e,
	validator: t
}), pt = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), mt = "-", ht = [], gt = "arbitrary..", _t = (e) => {
	let t = bt(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return yt(e);
			let n = e.split(mt);
			return vt(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? dt(i, t) : t : i || ht;
			}
			return n[e] || ht;
		}
	};
}, vt = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = vt(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(mt) : e.slice(t).join(mt), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, yt = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? gt + r : void 0;
})(), bt = (e) => {
	let { theme: t, classGroups: n } = e;
	return xt(n, t);
}, xt = (e, t) => {
	let n = pt();
	for (let r in e) {
		let i = e[r];
		St(i, n, r, t);
	}
	return n;
}, St = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		Ct(i, t, n, r);
	}
}, Ct = (e, t, n, r) => {
	if (typeof e == "string") {
		wt(e, t, n);
		return;
	}
	if (typeof e == "function") {
		Tt(e, t, n, r);
		return;
	}
	Et(e, t, n, r);
}, wt = (e, t, n) => {
	let r = e === "" ? t : Dt(t, e);
	r.classGroupId = n;
}, Tt = (e, t, n, r) => {
	if (Ot(e)) {
		St(e(r), t, n, r);
		return;
	}
	t.validators === null && (t.validators = []), t.validators.push(ft(n, e));
}, Et = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		St(o, Dt(t, a), n, r);
	}
}, Dt = (e, t) => {
	let n = e, r = t.split(mt), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = pt(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, Ot = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, kt = (e) => {
	if (e < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let t = 0, n = Object.create(null), r = Object.create(null), i = (i, a) => {
		n[i] = a, t++, t > e && (t = 0, r = n, n = Object.create(null));
	};
	return {
		get(e) {
			let t = n[e];
			if (t !== void 0) return t;
			if ((t = r[e]) !== void 0) return i(e, t), t;
		},
		set(e, t) {
			e in n ? n[e] = t : i(e, t);
		}
	};
}, At = "!", jt = ":", Mt = [], Nt = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), Pt = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === jt) {
					t.push(e.slice(i, s)), i = s + 1;
					continue;
				}
				if (o === "/") {
					a = s;
					continue;
				}
			}
			o === "[" ? n++ : o === "]" ? n-- : o === "(" ? r++ : o === ")" && r--;
		}
		let s = t.length === 0 ? e : e.slice(i), c = s, l = !1;
		s.endsWith(At) ? (c = s.slice(0, -1), l = !0) : s.startsWith(At) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return Nt(t, l, c, u);
	};
	if (t) {
		let e = t + jt, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : Nt(Mt, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, Ft = (e) => {
	let t = /* @__PURE__ */ new Map();
	return e.orderSensitiveModifiers.forEach((e, n) => {
		t.set(e, 1e6 + n);
	}), (e) => {
		let n = [], r = [];
		for (let i = 0; i < e.length; i++) {
			let a = e[i], o = a[0] === "[", s = t.has(a);
			o || s ? (r.length > 0 && (r.sort(), n.push(...r), r = []), n.push(a)) : r.push(a);
		}
		return r.length > 0 && (r.sort(), n.push(...r)), n;
	};
}, It = (e) => ({
	cache: kt(e.cacheSize),
	parseClassName: Pt(e),
	sortModifiers: Ft(e),
	postfixLookupClassGroupIds: Lt(e),
	..._t(e)
}), Lt = (e) => {
	let t = Object.create(null), n = e.postfixLookupClassGroups;
	if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
	return t;
}, Rt = /\s+/, zt = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a, postfixLookupClassGroupIds: o } = t, s = [], c = e.trim().split(Rt), l = "";
	for (let e = c.length - 1; e >= 0; --e) {
		let t = c[e], { isExternal: u, modifiers: d, hasImportantModifier: f, baseClassName: p, maybePostfixModifierPosition: m } = n(t);
		if (u) {
			l = t + (l.length > 0 ? " " + l : l);
			continue;
		}
		let h = !!m, g;
		if (h) {
			g = r(p.substring(0, m));
			let e = g && o[g] ? r(p) : void 0;
			e && e !== g && (g = e, h = !1);
		} else g = r(p);
		if (!g) {
			if (!h) {
				l = t + (l.length > 0 ? " " + l : l);
				continue;
			}
			if (g = r(p), !g) {
				l = t + (l.length > 0 ? " " + l : l);
				continue;
			}
			h = !1;
		}
		let _ = d.length === 0 ? "" : d.length === 1 ? d[0] : a(d).join(":"), v = f ? _ + At : _, y = v + g;
		if (s.indexOf(y) > -1) continue;
		s.push(y);
		let b = i(g, h);
		for (let e = 0; e < b.length; ++e) {
			let t = b[e];
			s.push(v + t);
		}
		l = t + (l.length > 0 ? " " + l : l);
	}
	return l;
}, Bt = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = Vt(n)) && (i && (i += " "), i += r);
	return i;
}, Vt = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = Vt(e[r])) && (n && (n += " "), n += t);
	return n;
}, Ht = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = It(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = zt(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(Bt(...e));
}, Ut = [], Wt = (e) => {
	let t = (t) => t[e] || Ut;
	return t.isThemeGetter = !0, t.themeKey = e, t;
}, Gt = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Kt = /^\((?:(\w[\w-]*):)?(.+)\)$/i, qt = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Jt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Yt = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Xt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/, P = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Zt = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Qt = (e) => qt.test(e), F = (e) => !!e && !Number.isNaN(Number(e)), $t = (e) => !!e && Number.isInteger(Number(e)), en = (e) => e.endsWith("%") && F(e.slice(0, -1)), tn = (e) => Jt.test(e), nn = () => !0, rn = (e) => Yt.test(e) && !Xt.test(e), an = () => !1, on = (e) => P.test(e), sn = (e) => Zt.test(e), cn = (e) => !I(e) && !L(e), ln = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), un = (e) => Tn(e, kn, an), I = (e) => Gt.test(e), dn = (e) => Tn(e, An, rn), fn = (e) => Tn(e, jn, F), pn = (e) => Tn(e, Nn, nn), mn = (e) => Tn(e, Mn, an), hn = (e) => Tn(e, Dn, an), gn = (e) => Tn(e, On, sn), _n = (e) => Tn(e, Pn, on), L = (e) => Kt.test(e), vn = (e) => En(e, An), yn = (e) => En(e, Mn), bn = (e) => En(e, Dn), xn = (e) => En(e, kn), Sn = (e) => En(e, On), Cn = (e) => En(e, Pn, !0), wn = (e) => En(e, Nn, !0), Tn = (e, t, n) => {
	let r = Gt.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, En = (e, t, n = !1) => {
	let r = Kt.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, Dn = (e) => e === "position" || e === "percentage", On = (e) => e === "image" || e === "url", kn = (e) => e === "length" || e === "size" || e === "bg-size", An = (e) => e === "length", jn = (e) => e === "number", Mn = (e) => e === "family-name", Nn = (e) => e === "number" || e === "weight", Pn = (e) => e === "shadow", Fn = /*#__PURE__*/ Ht(() => {
	let e = Wt("color"), t = Wt("font"), n = Wt("text"), r = Wt("font-weight"), i = Wt("tracking"), a = Wt("leading"), o = Wt("breakpoint"), s = Wt("container"), c = Wt("spacing"), l = Wt("radius"), u = Wt("shadow"), d = Wt("inset-shadow"), f = Wt("text-shadow"), p = Wt("drop-shadow"), m = Wt("blur"), h = Wt("perspective"), g = Wt("aspect"), _ = Wt("ease"), v = Wt("animate"), y = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	], b = () => [
		"center",
		"top",
		"bottom",
		"left",
		"right",
		"top-left",
		"left-top",
		"top-right",
		"right-top",
		"bottom-right",
		"right-bottom",
		"bottom-left",
		"left-bottom"
	], x = () => [
		...b(),
		L,
		I
	], S = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	], C = () => [
		"auto",
		"contain",
		"none"
	], w = () => [
		L,
		I,
		c
	], T = () => [
		Qt,
		"full",
		"auto",
		...w()
	], ee = () => [
		$t,
		"none",
		"subgrid",
		L,
		I
	], E = () => [
		"auto",
		{ span: [
			"full",
			$t,
			L,
			I
		] },
		$t,
		L,
		I
	], te = () => [
		$t,
		"auto",
		L,
		I
	], ne = () => [
		"auto",
		"min",
		"max",
		"fr",
		L,
		I
	], re = () => [
		"start",
		"end",
		"center",
		"between",
		"around",
		"evenly",
		"stretch",
		"baseline",
		"center-safe",
		"end-safe"
	], D = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], ie = () => ["auto", ...w()], ae = () => [
		Qt,
		"auto",
		"full",
		"dvw",
		"dvh",
		"lvw",
		"lvh",
		"svw",
		"svh",
		"min",
		"max",
		"fit",
		...w()
	], oe = () => [
		s,
		Qt,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...w()
	], O = () => [
		Qt,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...w()
	], k = () => [
		e,
		L,
		I
	], A = () => [
		...b(),
		bn,
		hn,
		{ position: [L, I] }
	], se = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], ce = () => [
		"auto",
		"cover",
		"contain",
		xn,
		un,
		{ size: [L, I] }
	], le = () => [
		en,
		vn,
		dn
	], ue = () => [
		"",
		"none",
		"full",
		l,
		L,
		I
	], de = () => [
		"",
		F,
		vn,
		dn
	], fe = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], pe = () => [
		"normal",
		"multiply",
		"screen",
		"overlay",
		"darken",
		"lighten",
		"color-dodge",
		"color-burn",
		"hard-light",
		"soft-light",
		"difference",
		"exclusion",
		"hue",
		"saturation",
		"color",
		"luminosity"
	], me = () => [
		F,
		en,
		bn,
		hn
	], he = () => [
		"",
		"none",
		m,
		L,
		I
	], ge = () => [
		"none",
		F,
		L,
		I
	], _e = () => [
		"none",
		F,
		L,
		I
	], ve = () => [
		F,
		L,
		I
	], ye = () => [
		Qt,
		"full",
		...w()
	];
	return {
		cacheSize: 500,
		theme: {
			animate: [
				"spin",
				"ping",
				"pulse",
				"bounce"
			],
			aspect: ["video"],
			blur: [tn],
			breakpoint: [tn],
			color: [nn],
			container: [tn],
			"drop-shadow": [tn],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [cn],
			"font-weight": [
				"thin",
				"extralight",
				"light",
				"normal",
				"medium",
				"semibold",
				"bold",
				"extrabold",
				"black"
			],
			"inset-shadow": [tn],
			leading: [
				"none",
				"tight",
				"snug",
				"normal",
				"relaxed",
				"loose"
			],
			perspective: [
				"dramatic",
				"near",
				"normal",
				"midrange",
				"distant",
				"none"
			],
			radius: [tn],
			shadow: [tn],
			spacing: ["px", F],
			text: [tn],
			"text-shadow": [tn],
			tracking: [
				"tighter",
				"tight",
				"normal",
				"wide",
				"wider",
				"widest"
			]
		},
		classGroups: {
			aspect: [{ aspect: [
				"auto",
				"square",
				Qt,
				I,
				L,
				g
			] }],
			container: ["container"],
			"container-type": [{ "@container": [
				"",
				"normal",
				"size",
				L,
				I
			] }],
			"container-named": [ln],
			columns: [{ columns: [
				F,
				"auto",
				I,
				L,
				s
			] }],
			"break-after": [{ "break-after": y() }],
			"break-before": [{ "break-before": y() }],
			"break-inside": [{ "break-inside": [
				"auto",
				"avoid",
				"avoid-page",
				"avoid-column"
			] }],
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			box: [{ box: ["border", "content"] }],
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			sr: ["sr-only", "not-sr-only"],
			float: [{ float: [
				"right",
				"left",
				"none",
				"start",
				"end"
			] }],
			clear: [{ clear: [
				"left",
				"right",
				"both",
				"none",
				"start",
				"end"
			] }],
			isolation: ["isolate", "isolation-auto"],
			"object-fit": [{ object: [
				"contain",
				"cover",
				"fill",
				"none",
				"scale-down"
			] }],
			"object-position": [{ object: x() }],
			overflow: [{ overflow: S() }],
			"overflow-x": [{ "overflow-x": S() }],
			"overflow-y": [{ "overflow-y": S() }],
			overscroll: [{ overscroll: C() }],
			"overscroll-x": [{ "overscroll-x": C() }],
			"overscroll-y": [{ "overscroll-y": C() }],
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			inset: [{ inset: T() }],
			"inset-x": [{ "inset-x": T() }],
			"inset-y": [{ "inset-y": T() }],
			start: [{
				"inset-s": T(),
				start: T()
			}],
			end: [{
				"inset-e": T(),
				end: T()
			}],
			"inset-bs": [{ "inset-bs": T() }],
			"inset-be": [{ "inset-be": T() }],
			top: [{ top: T() }],
			right: [{ right: T() }],
			bottom: [{ bottom: T() }],
			left: [{ left: T() }],
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			z: [{ z: [
				$t,
				"auto",
				L,
				I
			] }],
			basis: [{ basis: [
				Qt,
				"full",
				"auto",
				s,
				...w()
			] }],
			"flex-direction": [{ flex: [
				"row",
				"row-reverse",
				"col",
				"col-reverse"
			] }],
			"flex-wrap": [{ flex: [
				"nowrap",
				"wrap",
				"wrap-reverse"
			] }],
			flex: [{ flex: [
				F,
				Qt,
				"auto",
				"initial",
				"none",
				I
			] }],
			grow: [{ grow: [
				"",
				F,
				L,
				I
			] }],
			shrink: [{ shrink: [
				"",
				F,
				L,
				I
			] }],
			order: [{ order: [
				$t,
				"first",
				"last",
				"none",
				L,
				I
			] }],
			"grid-cols": [{ "grid-cols": ee() }],
			"col-start-end": [{ col: E() }],
			"col-start": [{ "col-start": te() }],
			"col-end": [{ "col-end": te() }],
			"grid-rows": [{ "grid-rows": ee() }],
			"row-start-end": [{ row: E() }],
			"row-start": [{ "row-start": te() }],
			"row-end": [{ "row-end": te() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": ne() }],
			"auto-rows": [{ "auto-rows": ne() }],
			gap: [{ gap: w() }],
			"gap-x": [{ "gap-x": w() }],
			"gap-y": [{ "gap-y": w() }],
			"justify-content": [{ justify: [...re(), "normal"] }],
			"justify-items": [{ "justify-items": [...D(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...D()] }],
			"align-content": [{ content: ["normal", ...re()] }],
			"align-items": [{ items: [...D(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...D(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": re() }],
			"place-items": [{ "place-items": [...D(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...D()] }],
			p: [{ p: w() }],
			px: [{ px: w() }],
			py: [{ py: w() }],
			ps: [{ ps: w() }],
			pe: [{ pe: w() }],
			pbs: [{ pbs: w() }],
			pbe: [{ pbe: w() }],
			pt: [{ pt: w() }],
			pr: [{ pr: w() }],
			pb: [{ pb: w() }],
			pl: [{ pl: w() }],
			m: [{ m: ie() }],
			mx: [{ mx: ie() }],
			my: [{ my: ie() }],
			ms: [{ ms: ie() }],
			me: [{ me: ie() }],
			mbs: [{ mbs: ie() }],
			mbe: [{ mbe: ie() }],
			mt: [{ mt: ie() }],
			mr: [{ mr: ie() }],
			mb: [{ mb: ie() }],
			ml: [{ ml: ie() }],
			"space-x": [{ "space-x": w() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": w() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: ae() }],
			"inline-size": [{ inline: ["auto", ...oe()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...oe()] }],
			"max-inline-size": [{ "max-inline": ["none", ...oe()] }],
			"block-size": [{ block: ["auto", ...O()] }],
			"min-block-size": [{ "min-block": ["auto", ...O()] }],
			"max-block-size": [{ "max-block": ["none", ...O()] }],
			w: [{ w: [
				s,
				"screen",
				...ae()
			] }],
			"min-w": [{ "min-w": [
				s,
				"screen",
				"none",
				...ae()
			] }],
			"max-w": [{ "max-w": [
				s,
				"screen",
				"none",
				"prose",
				{ screen: [o] },
				...ae()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...ae()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...ae()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				"none",
				...ae()
			] }],
			"font-size": [{ text: [
				"base",
				n,
				vn,
				dn
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				wn,
				pn
			] }],
			"font-stretch": [{ "font-stretch": [
				"ultra-condensed",
				"extra-condensed",
				"condensed",
				"semi-condensed",
				"normal",
				"semi-expanded",
				"expanded",
				"extra-expanded",
				"ultra-expanded",
				en,
				I
			] }],
			"font-family": [{ font: [
				yn,
				mn,
				t
			] }],
			"font-features": [{ "font-features": [I] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				i,
				L,
				I
			] }],
			"line-clamp": [{ "line-clamp": [
				F,
				"none",
				L,
				fn
			] }],
			leading: [{ leading: [
				"none",
				a,
				...w()
			] }],
			"list-image": [{ "list-image": [
				"none",
				L,
				I
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				L,
				I
			] }],
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			"placeholder-color": [{ placeholder: k() }],
			"text-color": [{ text: k() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...fe(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				F,
				"from-font",
				"auto",
				L,
				dn
			] }],
			"text-decoration-color": [{ decoration: k() }],
			"underline-offset": [{ "underline-offset": [
				F,
				"auto",
				L,
				I
			] }],
			"text-transform": [
				"uppercase",
				"lowercase",
				"capitalize",
				"normal-case"
			],
			"text-overflow": [
				"truncate",
				"text-ellipsis",
				"text-clip"
			],
			"text-wrap": [{ text: [
				"wrap",
				"nowrap",
				"balance",
				"pretty"
			] }],
			indent: [{ indent: w() }],
			"tab-size": [{ tab: [
				$t,
				L,
				I
			] }],
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				L,
				I
			] }],
			whitespace: [{ whitespace: [
				"normal",
				"nowrap",
				"pre",
				"pre-line",
				"pre-wrap",
				"break-spaces"
			] }],
			break: [{ break: [
				"normal",
				"words",
				"all",
				"keep"
			] }],
			wrap: [{ wrap: [
				"break-word",
				"anywhere",
				"normal"
			] }],
			hyphens: [{ hyphens: [
				"none",
				"manual",
				"auto"
			] }],
			content: [{ content: [
				"none",
				L,
				I
			] }],
			"bg-attachment": [{ bg: [
				"fixed",
				"local",
				"scroll"
			] }],
			"bg-clip": [{ "bg-clip": [
				"border",
				"padding",
				"content",
				"text"
			] }],
			"bg-origin": [{ "bg-origin": [
				"border",
				"padding",
				"content"
			] }],
			"bg-position": [{ bg: A() }],
			"bg-repeat": [{ bg: se() }],
			"bg-size": [{ bg: ce() }],
			"bg-image": [{ bg: [
				"none",
				{
					linear: [
						{ to: [
							"t",
							"tr",
							"r",
							"br",
							"b",
							"bl",
							"l",
							"tl"
						] },
						$t,
						L,
						I
					],
					radial: [
						"",
						L,
						I
					],
					conic: [
						"",
						$t,
						L,
						I
					]
				},
				Sn,
				gn
			] }],
			"bg-color": [{ bg: k() }],
			"gradient-from-pos": [{ from: le() }],
			"gradient-via-pos": [{ via: le() }],
			"gradient-to-pos": [{ to: le() }],
			"gradient-from": [{ from: k() }],
			"gradient-via": [{ via: k() }],
			"gradient-to": [{ to: k() }],
			rounded: [{ rounded: ue() }],
			"rounded-s": [{ "rounded-s": ue() }],
			"rounded-e": [{ "rounded-e": ue() }],
			"rounded-t": [{ "rounded-t": ue() }],
			"rounded-r": [{ "rounded-r": ue() }],
			"rounded-b": [{ "rounded-b": ue() }],
			"rounded-l": [{ "rounded-l": ue() }],
			"rounded-ss": [{ "rounded-ss": ue() }],
			"rounded-se": [{ "rounded-se": ue() }],
			"rounded-ee": [{ "rounded-ee": ue() }],
			"rounded-es": [{ "rounded-es": ue() }],
			"rounded-tl": [{ "rounded-tl": ue() }],
			"rounded-tr": [{ "rounded-tr": ue() }],
			"rounded-br": [{ "rounded-br": ue() }],
			"rounded-bl": [{ "rounded-bl": ue() }],
			"border-w": [{ border: de() }],
			"border-w-x": [{ "border-x": de() }],
			"border-w-y": [{ "border-y": de() }],
			"border-w-s": [{ "border-s": de() }],
			"border-w-e": [{ "border-e": de() }],
			"border-w-bs": [{ "border-bs": de() }],
			"border-w-be": [{ "border-be": de() }],
			"border-w-t": [{ "border-t": de() }],
			"border-w-r": [{ "border-r": de() }],
			"border-w-b": [{ "border-b": de() }],
			"border-w-l": [{ "border-l": de() }],
			"divide-x": [{ "divide-x": de() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": de() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...fe(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...fe(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: k() }],
			"border-color-x": [{ "border-x": k() }],
			"border-color-y": [{ "border-y": k() }],
			"border-color-s": [{ "border-s": k() }],
			"border-color-e": [{ "border-e": k() }],
			"border-color-bs": [{ "border-bs": k() }],
			"border-color-be": [{ "border-be": k() }],
			"border-color-t": [{ "border-t": k() }],
			"border-color-r": [{ "border-r": k() }],
			"border-color-b": [{ "border-b": k() }],
			"border-color-l": [{ "border-l": k() }],
			"divide-color": [{ divide: k() }],
			"outline-style": [{ outline: [
				...fe(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				F,
				L,
				I
			] }],
			"outline-w": [{ outline: [
				"",
				F,
				vn,
				dn
			] }],
			"outline-color": [{ outline: k() }],
			shadow: [{ shadow: [
				"",
				"inner",
				"none",
				u,
				Cn,
				_n
			] }],
			"shadow-color": [{ shadow: k() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				Cn,
				_n
			] }],
			"inset-shadow-color": [{ "inset-shadow": k() }],
			"ring-w": [{ ring: de() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: k() }],
			"ring-offset-w": [{ "ring-offset": [F, dn] }],
			"ring-offset-color": [{ "ring-offset": k() }],
			"inset-ring-w": [{ "inset-ring": de() }],
			"inset-ring-color": [{ "inset-ring": k() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				Cn,
				_n
			] }],
			"text-shadow-color": [{ "text-shadow": k() }],
			opacity: [{ opacity: [
				F,
				L,
				I
			] }],
			"mix-blend": [{ "mix-blend": [
				...pe(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": pe() }],
			"mask-clip": [{ "mask-clip": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }, "mask-no-clip"],
			"mask-composite": [{ mask: [
				"add",
				"subtract",
				"intersect",
				"exclude"
			] }],
			"mask-image-linear-pos": [{ "mask-linear": [F] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": me() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": me() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": k() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": k() }],
			"mask-image-t-from-pos": [{ "mask-t-from": me() }],
			"mask-image-t-to-pos": [{ "mask-t-to": me() }],
			"mask-image-t-from-color": [{ "mask-t-from": k() }],
			"mask-image-t-to-color": [{ "mask-t-to": k() }],
			"mask-image-r-from-pos": [{ "mask-r-from": me() }],
			"mask-image-r-to-pos": [{ "mask-r-to": me() }],
			"mask-image-r-from-color": [{ "mask-r-from": k() }],
			"mask-image-r-to-color": [{ "mask-r-to": k() }],
			"mask-image-b-from-pos": [{ "mask-b-from": me() }],
			"mask-image-b-to-pos": [{ "mask-b-to": me() }],
			"mask-image-b-from-color": [{ "mask-b-from": k() }],
			"mask-image-b-to-color": [{ "mask-b-to": k() }],
			"mask-image-l-from-pos": [{ "mask-l-from": me() }],
			"mask-image-l-to-pos": [{ "mask-l-to": me() }],
			"mask-image-l-from-color": [{ "mask-l-from": k() }],
			"mask-image-l-to-color": [{ "mask-l-to": k() }],
			"mask-image-x-from-pos": [{ "mask-x-from": me() }],
			"mask-image-x-to-pos": [{ "mask-x-to": me() }],
			"mask-image-x-from-color": [{ "mask-x-from": k() }],
			"mask-image-x-to-color": [{ "mask-x-to": k() }],
			"mask-image-y-from-pos": [{ "mask-y-from": me() }],
			"mask-image-y-to-pos": [{ "mask-y-to": me() }],
			"mask-image-y-from-color": [{ "mask-y-from": k() }],
			"mask-image-y-to-color": [{ "mask-y-to": k() }],
			"mask-image-radial": [{ "mask-radial": [L, I] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": me() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": me() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": k() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": k() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": b() }],
			"mask-image-conic-pos": [{ "mask-conic": [F] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": me() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": me() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": k() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": k() }],
			"mask-mode": [{ mask: [
				"alpha",
				"luminance",
				"match"
			] }],
			"mask-origin": [{ "mask-origin": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }],
			"mask-position": [{ mask: A() }],
			"mask-repeat": [{ mask: se() }],
			"mask-size": [{ mask: ce() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				L,
				I
			] }],
			filter: [{ filter: [
				"",
				"none",
				L,
				I
			] }],
			blur: [{ blur: he() }],
			brightness: [{ brightness: [
				F,
				L,
				I
			] }],
			contrast: [{ contrast: [
				F,
				L,
				I
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				Cn,
				_n
			] }],
			"drop-shadow-color": [{ "drop-shadow": k() }],
			grayscale: [{ grayscale: [
				"",
				F,
				L,
				I
			] }],
			"hue-rotate": [{ "hue-rotate": [
				F,
				L,
				I
			] }],
			invert: [{ invert: [
				"",
				F,
				L,
				I
			] }],
			saturate: [{ saturate: [
				F,
				L,
				I
			] }],
			sepia: [{ sepia: [
				"",
				F,
				L,
				I
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				L,
				I
			] }],
			"backdrop-blur": [{ "backdrop-blur": he() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				F,
				L,
				I
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				F,
				L,
				I
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				F,
				L,
				I
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				F,
				L,
				I
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				F,
				L,
				I
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				F,
				L,
				I
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				F,
				L,
				I
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				F,
				L,
				I
			] }],
			"border-collapse": [{ border: ["collapse", "separate"] }],
			"border-spacing": [{ "border-spacing": w() }],
			"border-spacing-x": [{ "border-spacing-x": w() }],
			"border-spacing-y": [{ "border-spacing-y": w() }],
			"table-layout": [{ table: ["auto", "fixed"] }],
			caption: [{ caption: ["top", "bottom"] }],
			transition: [{ transition: [
				"",
				"all",
				"colors",
				"opacity",
				"shadow",
				"transform",
				"none",
				L,
				I
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				F,
				"initial",
				L,
				I
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				_,
				L,
				I
			] }],
			delay: [{ delay: [
				F,
				L,
				I
			] }],
			animate: [{ animate: [
				"none",
				v,
				L,
				I
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				h,
				L,
				I
			] }],
			"perspective-origin": [{ "perspective-origin": x() }],
			rotate: [{ rotate: ge() }],
			"rotate-x": [{ "rotate-x": ge() }],
			"rotate-y": [{ "rotate-y": ge() }],
			"rotate-z": [{ "rotate-z": ge() }],
			scale: [{ scale: _e() }],
			"scale-x": [{ "scale-x": _e() }],
			"scale-y": [{ "scale-y": _e() }],
			"scale-z": [{ "scale-z": _e() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: ve() }],
			"skew-x": [{ "skew-x": ve() }],
			"skew-y": [{ "skew-y": ve() }],
			transform: [{ transform: [
				L,
				I,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: x() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: ye() }],
			"translate-x": [{ "translate-x": ye() }],
			"translate-y": [{ "translate-y": ye() }],
			"translate-z": [{ "translate-z": ye() }],
			"translate-none": ["translate-none"],
			zoom: [{ zoom: [
				$t,
				L,
				I
			] }],
			accent: [{ accent: k() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: k() }],
			"color-scheme": [{ scheme: [
				"normal",
				"dark",
				"light",
				"light-dark",
				"only-dark",
				"only-light"
			] }],
			cursor: [{ cursor: [
				"auto",
				"default",
				"pointer",
				"wait",
				"text",
				"move",
				"help",
				"not-allowed",
				"none",
				"context-menu",
				"progress",
				"cell",
				"crosshair",
				"vertical-text",
				"alias",
				"copy",
				"no-drop",
				"grab",
				"grabbing",
				"all-scroll",
				"col-resize",
				"row-resize",
				"n-resize",
				"e-resize",
				"s-resize",
				"w-resize",
				"ne-resize",
				"nw-resize",
				"se-resize",
				"sw-resize",
				"ew-resize",
				"ns-resize",
				"nesw-resize",
				"nwse-resize",
				"zoom-in",
				"zoom-out",
				L,
				I
			] }],
			"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
			"pointer-events": [{ "pointer-events": ["auto", "none"] }],
			resize: [{ resize: [
				"none",
				"",
				"y",
				"x"
			] }],
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			"scrollbar-thumb-color": [{ "scrollbar-thumb": k() }],
			"scrollbar-track-color": [{ "scrollbar-track": k() }],
			"scrollbar-gutter": [{ "scrollbar-gutter": [
				"auto",
				"stable",
				"both"
			] }],
			"scrollbar-w": [{ scrollbar: [
				"auto",
				"thin",
				"none"
			] }],
			"scroll-m": [{ "scroll-m": w() }],
			"scroll-mx": [{ "scroll-mx": w() }],
			"scroll-my": [{ "scroll-my": w() }],
			"scroll-ms": [{ "scroll-ms": w() }],
			"scroll-me": [{ "scroll-me": w() }],
			"scroll-mbs": [{ "scroll-mbs": w() }],
			"scroll-mbe": [{ "scroll-mbe": w() }],
			"scroll-mt": [{ "scroll-mt": w() }],
			"scroll-mr": [{ "scroll-mr": w() }],
			"scroll-mb": [{ "scroll-mb": w() }],
			"scroll-ml": [{ "scroll-ml": w() }],
			"scroll-p": [{ "scroll-p": w() }],
			"scroll-px": [{ "scroll-px": w() }],
			"scroll-py": [{ "scroll-py": w() }],
			"scroll-ps": [{ "scroll-ps": w() }],
			"scroll-pe": [{ "scroll-pe": w() }],
			"scroll-pbs": [{ "scroll-pbs": w() }],
			"scroll-pbe": [{ "scroll-pbe": w() }],
			"scroll-pt": [{ "scroll-pt": w() }],
			"scroll-pr": [{ "scroll-pr": w() }],
			"scroll-pb": [{ "scroll-pb": w() }],
			"scroll-pl": [{ "scroll-pl": w() }],
			"snap-align": [{ snap: [
				"start",
				"end",
				"center",
				"align-none"
			] }],
			"snap-stop": [{ snap: ["normal", "always"] }],
			"snap-type": [{ snap: [
				"none",
				"x",
				"y",
				"both"
			] }],
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			touch: [{ touch: [
				"auto",
				"none",
				"manipulation"
			] }],
			"touch-x": [{ "touch-pan": [
				"x",
				"left",
				"right"
			] }],
			"touch-y": [{ "touch-pan": [
				"y",
				"up",
				"down"
			] }],
			"touch-pz": ["touch-pinch-zoom"],
			select: [{ select: [
				"none",
				"text",
				"all",
				"auto"
			] }],
			"will-change": [{ "will-change": [
				"auto",
				"scroll",
				"contents",
				"transform",
				L,
				I
			] }],
			fill: [{ fill: ["none", ...k()] }],
			"stroke-w": [{ stroke: [
				F,
				vn,
				dn,
				fn
			] }],
			stroke: [{ stroke: ["none", ...k()] }],
			"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
		},
		conflictingClassGroups: {
			"container-named": ["container-type"],
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"inset-bs",
				"inset-be",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left"
			],
			"inset-x": [
				"start",
				"end",
				"right",
				"left"
			],
			"inset-y": [
				"inset-bs",
				"inset-be",
				"top",
				"bottom"
			],
			flex: [
				"basis",
				"grow",
				"shrink"
			],
			gap: ["gap-x", "gap-y"],
			p: [
				"px",
				"py",
				"ps",
				"pe",
				"pbs",
				"pbe",
				"pt",
				"pr",
				"pb",
				"pl"
			],
			px: [
				"ps",
				"pe",
				"pr",
				"pl"
			],
			py: [
				"pbs",
				"pbe",
				"pt",
				"pb"
			],
			m: [
				"mx",
				"my",
				"ms",
				"me",
				"mbs",
				"mbe",
				"mt",
				"mr",
				"mb",
				"ml"
			],
			mx: [
				"ms",
				"me",
				"mr",
				"ml"
			],
			my: [
				"mbs",
				"mbe",
				"mt",
				"mb"
			],
			size: ["w", "h"],
			"font-size": ["leading"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction"
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			"line-clamp": ["display", "overflow"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl"
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-x",
				"border-w-y",
				"border-w-s",
				"border-w-e",
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l"
			],
			"border-w-x": [
				"border-w-s",
				"border-w-e",
				"border-w-r",
				"border-w-l"
			],
			"border-w-y": [
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-b"
			],
			"border-color": [
				"border-color-x",
				"border-color-y",
				"border-color-s",
				"border-color-e",
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l"
			],
			"border-color-x": [
				"border-color-s",
				"border-color-e",
				"border-color-r",
				"border-color-l"
			],
			"border-color-y": [
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-b"
			],
			translate: [
				"translate-x",
				"translate-y",
				"translate-none"
			],
			"translate-none": [
				"translate",
				"translate-x",
				"translate-y",
				"translate-z"
			],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml"
			],
			"scroll-mx": [
				"scroll-ms",
				"scroll-me",
				"scroll-mr",
				"scroll-ml"
			],
			"scroll-my": [
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mb"
			],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl"
			],
			"scroll-px": [
				"scroll-ps",
				"scroll-pe",
				"scroll-pr",
				"scroll-pl"
			],
			"scroll-py": [
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pb"
			],
			touch: [
				"touch-x",
				"touch-y",
				"touch-pz"
			],
			"touch-x": ["touch"],
			"touch-y": ["touch"],
			"touch-pz": ["touch"]
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] },
		postfixLookupClassGroups: ["container-type"],
		orderSensitiveModifiers: [
			"*",
			"**",
			"after",
			"backdrop",
			"before",
			"details-content",
			"file",
			"first-letter",
			"first-line",
			"marker",
			"placeholder",
			"selection"
		]
	};
});
//#endregion
//#region src/lib/utils.js
function In(...e) {
	return Fn(st(e));
}
//#endregion
//#region node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var Ln = Object.defineProperty, Rn = (e, t) => Ln(e, "name", {
	value: t,
	configurable: !0
});
function zn(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
Rn(zn, "setRef");
function Bn(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = zn(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : zn(e[t], null);
			}
		};
	};
}
Rn(Bn, "composeRefs");
function Vn(...e) {
	return E.useCallback(Bn(...e), e);
}
Rn(Vn, "useComposedRefs");
//#endregion
//#region node_modules/@radix-ui/react-slot/dist/index.mjs
var Hn = Object.defineProperty, Un = (e, t) => Hn(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function Wn(e) {
	let t = E.forwardRef((t, n) => {
		let { children: r, ...i } = t, a = null, o = !1, s = [];
		$n(r) && typeof rr == "function" && (r = rr(r._payload)), E.Children.forEach(r, (e) => {
			if (Zn(e)) {
				o = !0;
				let t = e, n = "child" in t.props ? t.props.child : t.props.children;
				$n(n) && typeof rr == "function" && (n = rr(n._payload)), a = Jn(t, n), s.push(a?.props?.children);
			} else s.push(e);
		}), a ? a = E.cloneElement(a, void 0, s) : !o && E.Children.count(r) === 1 && E.isValidElement(r) && (a = r);
		let c = a ? Xn(a) : void 0, l = Vn(n, c);
		if (!a) {
			if (r || r === 0) throw Error(o ? nr(e) : tr(e));
			return r;
		}
		let u = Yn(i, a.props ?? {});
		return a.type !== E.Fragment && (u.ref = n ? l : c), E.cloneElement(a, u);
	});
	return t.displayName = `${e}.Slot`, t;
}
Un(Wn, "createSlot");
var Gn = /* @__PURE__ */ Wn("Slot"), Kn = Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function qn(e) {
	let t = /* @__PURE__ */ Un((e) => "child" in e ? e.children(e.child) : e.children, "Slottable");
	return t.displayName = `${e}.Slottable`, t.__radixId = Kn, t;
}
Un(qn, "createSlottable");
var Jn = /* @__PURE__ */ Un((e, t) => {
	if ("child" in e.props) {
		let t = e.props.child;
		return E.isValidElement(t) ? E.cloneElement(t, void 0, e.props.children(t.props.children)) : null;
	}
	return E.isValidElement(t) ? t : null;
}, "getSlottableElementFromSlottable");
function Yn(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" && (n[r] = [i, a].filter(Boolean).join(" "));
	}
	return {
		...e,
		...n
	};
}
Un(Yn, "mergeProps");
function Xn(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
Un(Xn, "getElementRef");
function Zn(e) {
	return E.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Kn;
}
Un(Zn, "isSlottable");
var Qn = Symbol.for("react.lazy");
function $n(e) {
	return typeof e == "object" && !!e && "$$typeof" in e && e.$$typeof === Qn && "_payload" in e && er(e._payload);
}
Un($n, "isLazyComponent");
function er(e) {
	return typeof e == "object" && !!e && "then" in e;
}
Un(er, "isPromiseLike");
var tr = /* @__PURE__ */ Un((e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), nr = /* @__PURE__ */ Un((e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), rr = E.use, ir = /* @__PURE__ */ o(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), R = (/* @__PURE__ */ o(((e, t) => {
	t.exports = ir();
})))(), ar = Object.defineProperty, or = (e, t) => ar(e, "name", {
	value: t,
	configurable: !0
}), sr = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((e, t) => {
	let n = /* @__PURE__ */ Wn(`Primitive.${t}`), r = E.forwardRef((e, r) => {
		let { asChild: i, ...a } = e, o = i ? n : t;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ (0, R.jsx)(o, {
			...a,
			ref: r
		});
	});
	return r.displayName = `Primitive.${t}`, {
		...e,
		[t]: r
	};
}, {});
function cr(e, t) {
	e && it.flushSync(() => e.dispatchEvent(t));
}
or(cr, "dispatchDiscreteCustomEvent");
//#endregion
//#region node_modules/@radix-ui/react-context/dist/index.mjs
var lr = Object.defineProperty, ur = (e, t) => lr(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function dr(e, t) {
	let n = E.createContext(t);
	n.displayName = e + "Context";
	let r = /* @__PURE__ */ ur((e) => {
		let { children: t, ...r } = e, i = E.useMemo(() => r, Object.values(r));
		return /* @__PURE__ */ (0, R.jsx)(n.Provider, {
			value: i,
			children: t
		});
	}, "Provider");
	r.displayName = e + "Provider";
	function i(r, i = {}) {
		let { optional: a = !1 } = i, o = E.useContext(n);
		if (o) return o;
		if (t !== void 0) return t;
		if (!a) throw Error(`\`${r}\` must be used within \`${e}\``);
	}
	return ur(i, "useContext"), [r, i];
}
ur(dr, "createContext");
// @__NO_SIDE_EFFECTS__
function fr(e, t = []) {
	let n = [];
	function r(t, r) {
		let i = E.createContext(r);
		i.displayName = t + "Context";
		let a = n.length;
		n = [...n, r];
		let o = /* @__PURE__ */ ur((t) => {
			let { scope: n, children: r, ...o } = t, s = n?.[e]?.[a] || i, c = E.useMemo(() => o, Object.values(o));
			return /* @__PURE__ */ (0, R.jsx)(s.Provider, {
				value: c,
				children: r
			});
		}, "Provider");
		o.displayName = t + "Provider";
		function s(n, o, s = {}) {
			let { optional: c = !1 } = s, l = o?.[e]?.[a] || i, u = E.useContext(l);
			if (u) return u;
			if (r !== void 0) return r;
			if (!c) throw Error(`\`${n}\` must be used within \`${t}\``);
		}
		return ur(s, "useContext"), [o, s];
	}
	ur(r, "createContext");
	let i = /* @__PURE__ */ ur(() => {
		let t = n.map((e) => E.createContext(e));
		return /* @__PURE__ */ ur(function(n) {
			let r = n?.[e] || t;
			return E.useMemo(() => ({ [`__scope${e}`]: {
				...n,
				[e]: r
			} }), [n, r]);
		}, "useScope");
	}, "createScope");
	return i.scopeName = e, [r, pr(i, ...t)];
}
ur(fr, "createContextScope");
function pr(...e) {
	let t = e[0];
	if (e.length === 1) return t;
	let n = /* @__PURE__ */ ur(() => {
		let n = e.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return /* @__PURE__ */ ur(function(e) {
			let r = n.reduce((t, { useScope: n, scopeName: r }) => {
				let i = n(e)[`__scope${r}`];
				return {
					...t,
					...i
				};
			}, {});
			return E.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
		}, "useComposedScopes");
	}, "createScope");
	return n.scopeName = t.scopeName, n;
}
ur(pr, "composeContextScopes");
//#endregion
//#region node_modules/@radix-ui/react-collection/dist/index.mjs
var mr = Object.defineProperty, hr = (e, t) => mr(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function gr(e) {
	let t = e + "CollectionProvider", [n, r] = /* @__PURE__ */ fr(t), [i, a] = n(t, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), o = /* @__PURE__ */ hr((e) => {
		let { scope: t, children: n } = e, r = E.useRef(null), a = E.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ (0, R.jsx)(i, {
			scope: t,
			itemMap: a,
			collectionRef: r,
			children: n
		});
	}, "CollectionProvider");
	o.displayName = t;
	let s = e + "CollectionSlot", c = /* @__PURE__ */ Wn(s), l = E.forwardRef((e, t) => {
		let { scope: n, children: r } = e, i = Vn(t, a(s, n).collectionRef);
		return /* @__PURE__ */ (0, R.jsx)(c, {
			ref: i,
			children: r
		});
	});
	l.displayName = s;
	let u = e + "CollectionItemSlot", d = "data-radix-collection-item", f = /* @__PURE__ */ Wn(u), p = E.forwardRef((e, t) => {
		let { scope: n, children: r, ...i } = e, o = E.useRef(null), s = Vn(t, o), c = a(u, n);
		return E.useEffect(() => (c.itemMap.set(o, {
			ref: o,
			...i
		}), () => void c.itemMap.delete(o))), /* @__PURE__ */ (0, R.jsx)(f, {
			[d]: "",
			ref: s,
			children: r
		});
	});
	p.displayName = u;
	function m(t) {
		let n = a(e + "CollectionConsumer", t);
		return E.useCallback(() => {
			let e = n.collectionRef.current;
			if (!e) return [];
			let t = Array.from(e.querySelectorAll(`[${d}]`));
			return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
		}, [n.collectionRef, n.itemMap]);
	}
	return hr(m, "useCollection"), [
		{
			Provider: o,
			Slot: l,
			ItemSlot: p
		},
		m,
		r
	];
}
hr(gr, "createCollection");
var _r = /* @__PURE__ */ new WeakMap(), vr = class e extends Map {
	static {
		hr(this, "OrderedDict");
	}
	#e;
	constructor(e) {
		super(e), this.#e = [...super.keys()], _r.set(this, !0);
	}
	set(e, t) {
		return _r.get(this) && (this.has(e) ? this.#e[this.#e.indexOf(e)] = e : this.#e.push(e)), super.set(e, t), this;
	}
	insert(e, t, n) {
		let r = this.has(t), i = this.#e.length, a = xr(e), o = a >= 0 ? a : i + a, s = o < 0 || o >= i ? -1 : o;
		if (s === this.size || r && s === this.size - 1 || s === -1) return this.set(t, n), this;
		let c = this.size + +!r;
		a < 0 && o++;
		let l = [...this.#e], u, d = !1;
		for (let e = o; e < c; e++) if (o === e) {
			let i = l[e];
			l[e] === t && (i = l[e + 1]), r && this.delete(t), u = this.get(i), this.set(t, n);
		} else {
			!d && l[e - 1] === t && (d = !0);
			let n = l[d ? e : e - 1], r = u;
			u = this.get(n), this.delete(n), this.set(n, r);
		}
		return this;
	}
	with(t, n, r) {
		let i = new e(this);
		return i.insert(t, n, r), i;
	}
	before(e) {
		let t = this.#e.indexOf(e) - 1;
		if (!(t < 0)) return this.entryAt(t);
	}
	setBefore(e, t, n) {
		let r = this.#e.indexOf(e);
		return r === -1 ? this : this.insert(r, t, n);
	}
	after(e) {
		let t = this.#e.indexOf(e);
		if (t = t === -1 || t === this.size - 1 ? -1 : t + 1, t !== -1) return this.entryAt(t);
	}
	setAfter(e, t, n) {
		let r = this.#e.indexOf(e);
		return r === -1 ? this : this.insert(r + 1, t, n);
	}
	first() {
		return this.entryAt(0);
	}
	last() {
		return this.entryAt(-1);
	}
	clear() {
		return this.#e = [], super.clear();
	}
	delete(e) {
		let t = super.delete(e);
		return t && this.#e.splice(this.#e.indexOf(e), 1), t;
	}
	deleteAt(e) {
		let t = this.keyAt(e);
		return t !== void 0 && this.delete(t);
	}
	at(e) {
		let t = yr(this.#e, e);
		if (t !== void 0) return this.get(t);
	}
	entryAt(e) {
		let t = yr(this.#e, e);
		if (t !== void 0) return [t, this.get(t)];
	}
	indexOf(e) {
		return this.#e.indexOf(e);
	}
	keyAt(e) {
		return yr(this.#e, e);
	}
	from(e, t) {
		let n = this.indexOf(e);
		if (n === -1) return;
		let r = n + t;
		return r < 0 && (r = 0), r >= this.size && (r = this.size - 1), this.at(r);
	}
	keyFrom(e, t) {
		let n = this.indexOf(e);
		if (n === -1) return;
		let r = n + t;
		return r < 0 && (r = 0), r >= this.size && (r = this.size - 1), this.keyAt(r);
	}
	find(e, t) {
		let n = 0;
		for (let r of this) {
			if (Reflect.apply(e, t, [
				r,
				n,
				this
			])) return r;
			n++;
		}
	}
	findIndex(e, t) {
		let n = 0;
		for (let r of this) {
			if (Reflect.apply(e, t, [
				r,
				n,
				this
			])) return n;
			n++;
		}
		return -1;
	}
	filter(t, n) {
		let r = [], i = 0;
		for (let e of this) Reflect.apply(t, n, [
			e,
			i,
			this
		]) && r.push(e), i++;
		return new e(r);
	}
	map(t, n) {
		let r = [], i = 0;
		for (let e of this) r.push([e[0], Reflect.apply(t, n, [
			e,
			i,
			this
		])]), i++;
		return new e(r);
	}
	reduce(...e) {
		let [t, n] = e, r = 0, i = n ?? this.at(0);
		for (let n of this) i = r === 0 && e.length === 1 ? n : Reflect.apply(t, this, [
			i,
			n,
			r,
			this
		]), r++;
		return i;
	}
	reduceRight(...e) {
		let [t, n] = e, r = n ?? this.at(-1);
		for (let n = this.size - 1; n >= 0; n--) {
			let i = this.at(n);
			r = n === this.size - 1 && e.length === 1 ? i : Reflect.apply(t, this, [
				r,
				i,
				n,
				this
			]);
		}
		return r;
	}
	toSorted(t) {
		let n = [...this.entries()].sort(t);
		return new e(n);
	}
	toReversed() {
		let t = new e();
		for (let e = this.size - 1; e >= 0; e--) {
			let n = this.keyAt(e), r = this.get(n);
			t.set(n, r);
		}
		return t;
	}
	toSpliced(...t) {
		let n = [...this.entries()];
		return n.splice(...t), new e(n);
	}
	slice(t, n) {
		let r = new e(), i = this.size - 1;
		if (t === void 0) return r;
		t < 0 && (t += this.size), n !== void 0 && n > 0 && (i = n - 1);
		for (let e = t; e <= i; e++) {
			let t = this.keyAt(e), n = this.get(t);
			r.set(t, n);
		}
		return r;
	}
	every(e, t) {
		let n = 0;
		for (let r of this) {
			if (!Reflect.apply(e, t, [
				r,
				n,
				this
			])) return !1;
			n++;
		}
		return !0;
	}
	some(e, t) {
		let n = 0;
		for (let r of this) {
			if (Reflect.apply(e, t, [
				r,
				n,
				this
			])) return !0;
			n++;
		}
		return !1;
	}
};
function yr(e, t) {
	if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
	let n = br(e, t);
	return n === -1 ? void 0 : e[n];
}
hr(yr, "at");
function br(e, t) {
	let n = e.length, r = xr(t), i = r >= 0 ? r : n + r;
	return i < 0 || i >= n ? -1 : i;
}
hr(br, "toSafeIndex");
function xr(e) {
	return e !== e || e === 0 ? 0 : Math.trunc(e);
}
hr(xr, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function Sr(e) {
	let t = e + "CollectionProvider", [n, r] = /* @__PURE__ */ fr(t), [i, a] = n(t, {
		collectionElement: null,
		collectionRef: { current: null },
		collectionRefObject: { current: null },
		itemMap: new vr(),
		setItemMap: /* @__PURE__ */ hr(() => void 0, "setItemMap")
	}), o = /* @__PURE__ */ hr(({ state: e, ...t }) => e ? /* @__PURE__ */ (0, R.jsx)(c, {
		...t,
		state: e
	}) : /* @__PURE__ */ (0, R.jsx)(s, { ...t }), "CollectionProvider");
	o.displayName = t;
	let s = /* @__PURE__ */ hr((e) => {
		let t = h();
		return /* @__PURE__ */ (0, R.jsx)(c, {
			...e,
			state: t
		});
	}, "CollectionInit");
	s.displayName = t + "Init";
	let c = /* @__PURE__ */ hr((e) => {
		let { scope: t, children: n, state: r } = e, a = E.useRef(null), [o, s] = E.useState(null), c = Vn(a, s), [l, u] = r;
		return E.useEffect(() => {
			if (!o) return;
			let e = Er(() => {});
			return e.observe(o, {
				childList: !0,
				subtree: !0
			}), () => {
				e.disconnect();
			};
		}, [o]), /* @__PURE__ */ (0, R.jsx)(i, {
			scope: t,
			itemMap: l,
			setItemMap: u,
			collectionRef: c,
			collectionRefObject: a,
			collectionElement: o,
			children: n
		});
	}, "CollectionProviderImpl");
	c.displayName = t + "Impl";
	let l = e + "CollectionSlot", u = /* @__PURE__ */ Wn(l), d = E.forwardRef((e, t) => {
		let { scope: n, children: r } = e, i = Vn(t, a(l, n).collectionRef);
		return /* @__PURE__ */ (0, R.jsx)(u, {
			ref: i,
			children: r
		});
	});
	d.displayName = l;
	let f = e + "CollectionItemSlot", p = /* @__PURE__ */ Wn(f), m = E.forwardRef((e, t) => {
		let { scope: n, children: r, ...i } = e, o = E.useRef(null), [s, c] = E.useState(null), l = Vn(t, o, c), { setItemMap: u } = a(f, n), d = E.useRef(i);
		Cr(d.current, i) || (d.current = i);
		let m = d.current;
		return E.useEffect(() => {
			let e = m;
			return u((t) => s ? t.has(s) ? t.set(s, {
				...e,
				element: s
			}).toSorted(Tr) : (t.set(s, {
				...e,
				element: s
			}), t.toSorted(Tr)) : t), () => {
				u((e) => !s || !e.has(s) ? e : (e.delete(s), new vr(e)));
			};
		}, [
			s,
			m,
			u
		]), /* @__PURE__ */ (0, R.jsx)(p, {
			"data-radix-collection-item": "",
			ref: l,
			children: r
		});
	});
	m.displayName = f;
	function h() {
		return E.useState(new vr());
	}
	hr(h, "useInitCollection");
	function g(t) {
		let { itemMap: n } = a(e + "CollectionConsumer", t);
		return n;
	}
	return hr(g, "useCollection"), [{
		Provider: o,
		Slot: d,
		ItemSlot: m
	}, {
		createCollectionScope: r,
		useCollection: g,
		useInitCollection: h
	}];
}
hr(Sr, "createCollection");
function Cr(e, t) {
	if (e === t) return !0;
	if (typeof e != "object" || typeof t != "object" || e == null || t == null) return !1;
	let n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let r of n) if (!Object.prototype.hasOwnProperty.call(t, r) || e[r] !== t[r]) return !1;
	return !0;
}
hr(Cr, "shallowEqual");
function wr(e, t) {
	return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
hr(wr, "isElementPreceding");
function Tr(e, t) {
	return !e[1].element || !t[1].element ? 0 : wr(e[1].element, t[1].element) ? -1 : 1;
}
hr(Tr, "sortByDocumentPosition");
function Er(e) {
	return new MutationObserver((t) => {
		for (let n of t) if (n.type === "childList") {
			e();
			return;
		}
	});
}
hr(Er, "getChildListObserver");
//#endregion
//#region node_modules/@radix-ui/primitive/dist/index.mjs
var Dr = Object.defineProperty, Or = (e, t) => Dr(e, "name", {
	value: t,
	configurable: !0
}), kr = !!(typeof window < "u" && window.document && window.document.createElement);
function Ar(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return /* @__PURE__ */ Or(function(r) {
		if (e?.(r), n === !1 || !r || !r.defaultPrevented) return t?.(r);
	}, "handleEvent");
}
Or(Ar, "composeEventHandlers");
function jr(e) {
	if (!kr) throw Error("Cannot access window outside of the DOM");
	return e?.ownerDocument?.defaultView ?? window;
}
Or(jr, "getOwnerWindow");
function Mr(e) {
	if (!kr) throw Error("Cannot access document outside of the DOM");
	return e?.ownerDocument ?? document;
}
Or(Mr, "getOwnerDocument");
function Nr(e, t = !1) {
	let { activeElement: n } = Mr(e);
	if (!n?.nodeName) return null;
	if (Pr(n) && n.contentDocument) return Nr(n.contentDocument.body, t);
	if (t) {
		let e = n.getAttribute("aria-activedescendant");
		if (e) {
			let t = Mr(n).getElementById(e);
			if (t) return t;
		}
	}
	return n;
}
Or(Nr, "getActiveElement");
function Pr(e) {
	return e.tagName === "IFRAME";
}
Or(Pr, "isFrame");
//#endregion
//#region node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var Fr = globalThis?.document ? E.useLayoutEffect : () => {}, Ir = Object.defineProperty, Lr = (e, t) => Ir(e, "name", {
	value: t,
	configurable: !0
}), Rr = E.useEffectEvent, zr = E.useInsertionEffect;
function Br(e) {
	if (typeof Rr == "function") return Rr(e);
	let t = E.useRef(() => {
		throw Error("Cannot call an event handler while rendering.");
	});
	return typeof zr == "function" ? zr(() => {
		t.current = e;
	}) : Fr(() => {
		t.current = e;
	}), E.useMemo(() => ((...e) => t.current?.(...e)), []);
}
Lr(Br, "useEffectEvent");
//#endregion
//#region node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var Vr = Object.defineProperty, Hr = (e, t) => Vr(e, "name", {
	value: t,
	configurable: !0
}), Ur = E.useInsertionEffect || Fr;
function Wr({ prop: e, defaultProp: t, onChange: n = /* @__PURE__ */ Hr(() => {}, "onChange"), caller: r }) {
	let [i, a, o] = Gr({
		defaultProp: t,
		onChange: n
	}), s = e !== void 0;
	return [s ? e : i, E.useCallback((t) => {
		if (s) {
			let n = Kr(t) ? t(e) : t;
			n !== e && o.current?.(n);
		} else a(t);
	}, [
		s,
		e,
		a,
		o
	])];
}
Hr(Wr, "useControllableState");
function Gr({ defaultProp: e, onChange: t }) {
	let [n, r] = E.useState(e), i = E.useRef(n), a = E.useRef(t);
	return Ur(() => {
		a.current = t;
	}, [t]), E.useEffect(() => {
		i.current !== n && (a.current?.(n), i.current = n);
	}, [n, i]), [
		n,
		r,
		a
	];
}
Hr(Gr, "useUncontrolledState");
function Kr(e) {
	return typeof e == "function";
}
Hr(Kr, "isFunction");
var qr = Symbol("RADIX:SYNC_STATE");
function Jr(e, t, n, r) {
	let { prop: i, defaultProp: a, onChange: o, caller: s } = t, c = i !== void 0, l = Br(o), u = [{
		...n,
		state: a
	}];
	r && u.push(r);
	let [d, f] = E.useReducer((t, n) => {
		if (n.type === qr) return {
			...t,
			state: n.state
		};
		let r = e(t, n);
		return c && !Object.is(r.state, t.state) && l(r.state), r;
	}, ...u), p = d.state, m = E.useRef(p);
	E.useEffect(() => {
		m.current !== p && (m.current = p, c || l(p));
	}, [
		p,
		m,
		c
	]);
	let h = E.useMemo(() => i === void 0 ? d : {
		...d,
		state: i
	}, [d, i]);
	return E.useEffect(() => {
		c && !Object.is(i, d.state) && f({
			type: qr,
			state: i
		});
	}, [
		i,
		d.state,
		c
	]), [h, f];
}
Hr(Jr, "useControllableStateReducer");
//#endregion
//#region node_modules/@radix-ui/react-presence/dist/index.mjs
var Yr = Object.defineProperty, Xr = (e, t) => Yr(e, "name", {
	value: t,
	configurable: !0
});
function Zr(e, t) {
	return E.useReducer((e, n) => t[e][n] ?? e, e);
}
Xr(Zr, "useStateMachine");
var Qr = /* @__PURE__ */ Xr((e) => {
	let { present: t, children: n } = e, r = $r(t), i = typeof n == "function" ? n({ present: r.isPresent }) : E.Children.only(n), a = ti(r.ref, ri(i));
	return typeof n == "function" || r.isPresent ? E.cloneElement(i, { ref: a }) : null;
}, "Presence");
function $r(e) {
	let [t, n] = E.useState(), r = E.useRef(null), i = E.useRef(e), a = E.useRef("none"), o = E.useRef(void 0), [s, c] = Zr(e ? "mounted" : "unmounted", {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	});
	return E.useEffect(() => {
		s === "mounted" ? (a.current = o.current ?? ni(r.current), o.current = void 0) : a.current = "none";
	}, [s]), Fr(() => {
		let t = r.current, n = i.current;
		if (n !== e) {
			let r = a.current, s = ni(t);
			e ? (o.current = s, c("MOUNT")) : s === "none" || t?.display === "none" ? c("UNMOUNT") : c(n && r !== s ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
		}
	}, [e, c]), Fr(() => {
		if (t) {
			let e, n = t.ownerDocument.defaultView ?? window, o = /* @__PURE__ */ Xr((a) => {
				let o = ni(r.current).includes(CSS.escape(a.animationName));
				if (a.target === t && o && (c("ANIMATION_END"), !i.current)) {
					let r = t.style.animationFillMode;
					t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
						t.style.animationFillMode === "forwards" && (t.style.animationFillMode = r);
					});
				}
			}, "handleAnimationEnd"), s = /* @__PURE__ */ Xr((e) => {
				e.target === t && (a.current = ni(r.current));
			}, "handleAnimationStart");
			return t.addEventListener("animationstart", s), t.addEventListener("animationcancel", o), t.addEventListener("animationend", o), () => {
				n.clearTimeout(e), t.removeEventListener("animationstart", s), t.removeEventListener("animationcancel", o), t.removeEventListener("animationend", o);
			};
		}
		c("ANIMATION_END");
	}, [t, c]), {
		isPresent: ["mounted", "unmountSuspended"].includes(s),
		ref: E.useCallback((e) => {
			if (e) {
				let t = getComputedStyle(e);
				r.current = t, o.current = ni(t);
			} else r.current = null;
			n(e);
		}, [])
	};
}
Xr($r, "usePresence");
function ei(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
Xr(ei, "setRef");
function ti(...e) {
	let t = E.useRef(e);
	return t.current = e, E.useCallback((e) => {
		let n = t.current, r = !1, i = n.map((t) => {
			let n = ei(t, e);
			return !r && typeof n == "function" && (r = !0), n;
		});
		if (r) return () => {
			for (let e = 0; e < i.length; e++) {
				let t = i[e];
				typeof t == "function" ? t() : ei(n[e], null);
			}
		};
	}, []);
}
Xr(ti, "useStableComposedRefs");
function ni(e) {
	return e?.animationName || "none";
}
Xr(ni, "getAnimationName");
function ri(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
Xr(ri, "getElementRef");
//#endregion
//#region node_modules/@radix-ui/react-id/dist/index.mjs
var ii = Object.defineProperty, ai = (e, t) => ii(e, "name", {
	value: t,
	configurable: !0
}), oi = E.useId || (() => void 0), si = 0;
function ci(e) {
	let [t, n] = E.useState(oi());
	return Fr(() => {
		e || n((e) => e ?? String(si++));
	}, [e]), e || (t ? `radix-${t}` : "");
}
ai(ci, "useId");
//#endregion
//#region node_modules/@radix-ui/react-collapsible/dist/index.mjs
var li = Object.defineProperty, ui = (e, t) => li(e, "name", {
	value: t,
	configurable: !0
}), di = "Collapsible", [fi, pi] = /* @__PURE__ */ fr(di), [mi, hi] = fi(di), gi = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ ui(function(e, t) {
	let { __scopeCollapsible: n, open: r, defaultOpen: i, disabled: a, onOpenChange: o, ...s } = e, [c, l] = Wr({
		prop: r,
		defaultProp: i ?? !1,
		onChange: o,
		caller: di
	});
	return /* @__PURE__ */ (0, R.jsx)(mi, {
		scope: n,
		disabled: a,
		contentId: ci(),
		open: c,
		onOpenToggle: E.useCallback(() => l((e) => !e), [l]),
		children: /* @__PURE__ */ (0, R.jsx)(sr.div, {
			"data-state": Si(c),
			"data-disabled": a ? "" : void 0,
			...s,
			ref: t
		})
	});
}, "Collapsible")), _i = "CollapsibleTrigger", vi = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ ui(function(e, t) {
	let { __scopeCollapsible: n, ...r } = e, i = hi(_i, n);
	return /* @__PURE__ */ (0, R.jsx)(sr.button, {
		type: "button",
		"aria-controls": i.open ? i.contentId : void 0,
		"aria-expanded": i.open || !1,
		"data-state": Si(i.open),
		"data-disabled": i.disabled ? "" : void 0,
		disabled: i.disabled,
		...r,
		ref: t,
		onClick: Ar(e.onClick, i.onOpenToggle)
	});
}, "CollapsibleTrigger")), yi = "CollapsibleContent", bi = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ ui(function(e, t) {
	let { forceMount: n, ...r } = e, i = hi(yi, e.__scopeCollapsible);
	return /* @__PURE__ */ (0, R.jsx)(Qr, {
		present: n || i.open,
		children: ({ present: e }) => /* @__PURE__ */ (0, R.jsx)(xi, {
			...r,
			ref: t,
			present: e
		})
	});
}, "CollapsibleContent")), xi = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ ui(function(e, t) {
	let { __scopeCollapsible: n, present: r, children: i, ...a } = e, o = hi(yi, n), [s, c] = E.useState(r), l = E.useRef(null), u = Vn(t, l), d = E.useRef(0), f = d.current, p = E.useRef(0), m = p.current, h = o.open || s, g = E.useRef(h), _ = E.useRef(void 0);
	return E.useEffect(() => {
		let e = requestAnimationFrame(() => g.current = !1);
		return () => cancelAnimationFrame(e);
	}, []), Fr(() => {
		let e = l.current;
		if (e) {
			_.current = _.current || {
				transitionDuration: e.style.transitionDuration,
				animationName: e.style.animationName
			}, e.style.transitionDuration = "0s", e.style.animationName = "none";
			let t = e.getBoundingClientRect();
			d.current = t.height, p.current = t.width, g.current || (e.style.transitionDuration = _.current.transitionDuration, e.style.animationName = _.current.animationName), c(r);
		}
	}, [o.open, r]), /* @__PURE__ */ (0, R.jsx)(sr.div, {
		"data-state": Si(o.open),
		"data-disabled": o.disabled ? "" : void 0,
		id: o.contentId,
		hidden: !h,
		...a,
		ref: u,
		style: {
			"--radix-collapsible-content-height": f ? `${f}px` : void 0,
			"--radix-collapsible-content-width": m ? `${m}px` : void 0,
			...e.style
		},
		children: h && i
	});
}, "CollapsibleContentImpl"));
function Si(e) {
	return e ? "open" : "closed";
}
ui(Si, "getState");
var Ci = gi, wi = vi, Ti = bi, Ei = Object.defineProperty, Di = (e, t) => Ei(e, "name", {
	value: t,
	configurable: !0
}), Oi = E.createContext(void 0);
function ki(e) {
	let t = E.useContext(Oi);
	return e || t || "ltr";
}
Di(ki, "useDirection");
//#endregion
//#region node_modules/@radix-ui/react-accordion/dist/index.mjs
var Ai = Object.defineProperty, ji = (e, t) => Ai(e, "name", {
	value: t,
	configurable: !0
}), Mi = "Accordion", Ni = [
	"Home",
	"End",
	"ArrowDown",
	"ArrowUp",
	"ArrowLeft",
	"ArrowRight"
], [Pi, Fi, Ii] = /* @__PURE__ */ gr(Mi), [Li, Ri] = /* @__PURE__ */ fr(Mi, [Ii, pi]), zi = pi(), Bi = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ ji(function(e, t) {
	let { type: n, ...r } = e, i = r, a = r;
	return /* @__PURE__ */ (0, R.jsx)(Pi.Provider, {
		scope: e.__scopeAccordion,
		children: n === "multiple" ? /* @__PURE__ */ (0, R.jsx)(Ki, {
			...a,
			ref: t
		}) : /* @__PURE__ */ (0, R.jsx)(Gi, {
			...i,
			ref: t
		})
	});
}, "Accordion")), [Vi, Hi] = Li(Mi), [Ui, Wi] = Li(Mi, { collapsible: !1 }), Gi = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ ji(function(e, t) {
	let { value: n, defaultValue: r, onValueChange: i = /* @__PURE__ */ ji(() => {}, "onValueChange"), collapsible: a = !1, ...o } = e, [s, c] = Wr({
		prop: n,
		defaultProp: r ?? "",
		onChange: i,
		caller: Mi
	});
	return /* @__PURE__ */ (0, R.jsx)(Vi, {
		scope: e.__scopeAccordion,
		value: E.useMemo(() => s ? [s] : [], [s]),
		onItemOpen: c,
		onItemClose: E.useCallback(() => a && c(""), [a, c]),
		children: /* @__PURE__ */ (0, R.jsx)(Ui, {
			scope: e.__scopeAccordion,
			collapsible: a,
			children: /* @__PURE__ */ (0, R.jsx)(Yi, {
				...o,
				ref: t
			})
		})
	});
}, "AccordionImplSingle")), Ki = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ ji(function(e, t) {
	let { value: n, defaultValue: r, onValueChange: i = /* @__PURE__ */ ji(() => {}, "onValueChange"), ...a } = e, [o, s] = Wr({
		prop: n,
		defaultProp: r ?? [],
		onChange: i,
		caller: Mi
	}), c = E.useCallback((e) => s((t = []) => [...t, e]), [s]), l = E.useCallback((e) => s((t = []) => t.filter((t) => t !== e)), [s]);
	return /* @__PURE__ */ (0, R.jsx)(Vi, {
		scope: e.__scopeAccordion,
		value: o,
		onItemOpen: c,
		onItemClose: l,
		children: /* @__PURE__ */ (0, R.jsx)(Ui, {
			scope: e.__scopeAccordion,
			collapsible: !0,
			children: /* @__PURE__ */ (0, R.jsx)(Yi, {
				...a,
				ref: t
			})
		})
	});
}, "AccordionImplMultiple")), [qi, Ji] = Li(Mi), Yi = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ ji(function(e, t) {
	let { __scopeAccordion: n, disabled: r, dir: i, orientation: a = "vertical", ...o } = e, s = Vn(E.useRef(null), t), c = Fi(n), l = ki(i) === "ltr", u = Ar(e.onKeyDown, (e) => {
		if (!Ni.includes(e.key)) return;
		let t = e.target, n = c().filter((e) => !e.ref.current?.disabled), r = n.findIndex((e) => e.ref.current === t), i = n.length;
		if (r === -1) return;
		e.preventDefault();
		let o = r, s = i - 1, u = /* @__PURE__ */ ji(() => {
			o = r + 1, o > s && (o = 0);
		}, "moveNext"), d = /* @__PURE__ */ ji(() => {
			o = r - 1, o < 0 && (o = s);
		}, "movePrev");
		switch (e.key) {
			case "Home":
				o = 0;
				break;
			case "End":
				o = s;
				break;
			case "ArrowRight":
				a === "horizontal" && (l ? u() : d());
				break;
			case "ArrowDown":
				a === "vertical" && u();
				break;
			case "ArrowLeft":
				a === "horizontal" && (l ? d() : u());
				break;
			case "ArrowUp": a === "vertical" && d();
		}
		n[o % i].ref.current?.focus();
	});
	return /* @__PURE__ */ (0, R.jsx)(qi, {
		scope: n,
		disabled: r,
		direction: i,
		orientation: a,
		children: /* @__PURE__ */ (0, R.jsx)(Pi.Slot, {
			scope: n,
			children: /* @__PURE__ */ (0, R.jsx)(sr.div, {
				...o,
				"data-orientation": a,
				ref: s,
				onKeyDown: r ? void 0 : u
			})
		})
	});
}, "AccordionImpl")), Xi = "AccordionItem", [Zi, Qi] = Li(Xi), $i = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ ji(function(e, t) {
	let { __scopeAccordion: n, value: r, ...i } = e, a = Ji(Xi, n), o = Hi(Xi, n), s = zi(n), c = ci(), l = r && o.value.includes(r) || !1, u = a.disabled || e.disabled;
	return /* @__PURE__ */ (0, R.jsx)(Zi, {
		scope: n,
		open: l,
		disabled: u,
		triggerId: c,
		children: /* @__PURE__ */ (0, R.jsx)(Ci, {
			"data-orientation": a.orientation,
			"data-state": B(l),
			...s,
			...i,
			ref: t,
			disabled: u,
			open: l,
			onOpenChange: (e) => {
				e ? o.onItemOpen(r) : o.onItemClose(r);
			}
		})
	});
}, "AccordionItem")), ea = "AccordionHeader", ta = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ ji(function(e, t) {
	let { __scopeAccordion: n, ...r } = e, i = Ji(Mi, n), a = Qi(ea, n);
	return /* @__PURE__ */ (0, R.jsx)(sr.h3, {
		"data-orientation": i.orientation,
		"data-state": B(a.open),
		"data-disabled": a.disabled ? "" : void 0,
		...r,
		ref: t
	});
}, "AccordionHeader")), na = "AccordionTrigger", ra = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ ji(function(e, t) {
	let { __scopeAccordion: n, ...r } = e, i = Ji(Mi, n), a = Qi(na, n), o = Wi(na, n), s = zi(n);
	return /* @__PURE__ */ (0, R.jsx)(Pi.ItemSlot, {
		scope: n,
		children: /* @__PURE__ */ (0, R.jsx)(wi, {
			"aria-disabled": a.open && !o.collapsible || void 0,
			"data-orientation": i.orientation,
			id: a.triggerId,
			...s,
			...r,
			ref: t
		})
	});
}, "AccordionTrigger")), ia = "AccordionContent", z = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ ji(function(e, t) {
	let { __scopeAccordion: n, ...r } = e, i = Ji(Mi, n), a = Qi(ia, n), o = zi(n);
	return /* @__PURE__ */ (0, R.jsx)(Ti, {
		role: "region",
		"aria-labelledby": a.triggerId,
		"data-orientation": i.orientation,
		...o,
		...r,
		ref: t,
		style: {
			"--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
			"--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
			...e.style
		}
	});
}, "AccordionContent"));
function B(e) {
	return e ? "open" : "closed";
}
ji(B, "getState");
var aa = Bi, oa = $i, sa = ta, ca = ra, la = z, ua = Object.defineProperty, da = (e, t) => ua(e, "name", {
	value: t,
	configurable: !0
});
function fa(e) {
	let t = E.useRef(e);
	return E.useEffect(() => {
		t.current = e;
	}), E.useMemo(() => ((...e) => t.current?.(...e)), []);
}
da(fa, "useCallbackRef");
//#endregion
//#region node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var pa = Object.defineProperty, ma = (e, t) => pa(e, "name", {
	value: t,
	configurable: !0
}), ha = "dismissableLayer.update", ga = "dismissableLayer.pointerDownOutside", _a = "dismissableLayer.focusOutside", va, ya = E.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set(),
	dismissableSurfaces: /* @__PURE__ */ new Set()
}), ba = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ ma(function(e, t) {
	let { disableOutsidePointerEvents: n = !1, deferPointerDownOutside: r = !1, onEscapeKeyDown: i, onPointerDownOutside: a, onFocusOutside: o, onInteractOutside: s, onDismiss: c, ...l } = e, u = E.useContext(ya), [d, f] = E.useState(null), p = d?.ownerDocument ?? globalThis?.document, [, m] = E.useState({}), h = Vn(t, f), g = Array.from(u.layers), [_] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), v = _ ? g.indexOf(_) : -1, y = d ? g.indexOf(d) : -1, b = u.layersWithOutsidePointerEventsDisabled.size > 0, x = y >= v, S = E.useRef(!1), C = Ca((e) => {
		a?.(e), s?.(e), e.defaultPrevented || c?.();
	}, {
		ownerDocument: p,
		deferPointerDownOutside: r,
		isDeferredPointerDownOutsideRef: S,
		dismissableSurfaces: u.dismissableSurfaces,
		shouldHandlePointerDownOutside: E.useCallback((e) => {
			if (!(e instanceof Node)) return !1;
			let t = [...u.branches].some((t) => t.contains(e));
			return x && !t;
		}, [u.branches, x])
	}), w = wa((e) => {
		if (r && S.current) return;
		let t = e.target;
		[...u.branches].some((e) => e.contains(t)) || (o?.(e), s?.(e), e.defaultPrevented || c?.());
	}, p), T = d ? y === g.length - 1 : !1, ee = fa((e) => {
		e.key === "Escape" && (i?.(e), !e.defaultPrevented && c && (e.preventDefault(), c()));
	});
	return E.useEffect(() => {
		if (T) return p.addEventListener("keydown", ee, { capture: !0 }), () => p.removeEventListener("keydown", ee, { capture: !0 });
	}, [
		p,
		T,
		ee
	]), E.useEffect(() => {
		if (d) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (va = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), Ta(), () => {
			n && (u.layersWithOutsidePointerEventsDisabled.delete(d), u.layersWithOutsidePointerEventsDisabled.size === 0 && (p.body.style.pointerEvents = va));
		};
	}, [
		d,
		p,
		n,
		u
	]), E.useEffect(() => () => {
		d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), Ta());
	}, [d, u]), E.useEffect(() => {
		let e = /* @__PURE__ */ ma(() => m({}), "handleUpdate");
		return document.addEventListener(ha, e), () => document.removeEventListener(ha, e);
	}, []), /* @__PURE__ */ (0, R.jsx)(sr.div, {
		...l,
		ref: h,
		style: {
			pointerEvents: b ? x ? "auto" : "none" : void 0,
			...e.style
		},
		onFocusCapture: Ar(e.onFocusCapture, w.onFocusCapture),
		onBlurCapture: Ar(e.onBlurCapture, w.onBlurCapture),
		onPointerDownCapture: Ar(e.onPointerDownCapture, C.onPointerDownCapture)
	});
}, "DismissableLayer"));
function xa() {
	let e = E.useContext(ya), [t, n] = E.useState(null);
	return E.useEffect(() => {
		if (t) return e.dismissableSurfaces.add(t), () => {
			e.dismissableSurfaces.delete(t);
		};
	}, [t, e.dismissableSurfaces]), n;
}
ma(xa, "useDismissableLayerSurface");
var Sa = /* @__PURE__ */ ma(() => !0, "IS_TRUE");
function Ca(e, t) {
	let { ownerDocument: n = globalThis?.document, deferPointerDownOutside: r = !1, isDeferredPointerDownOutsideRef: i, dismissableSurfaces: a, shouldHandlePointerDownOutside: o = Sa } = t, s = fa(e), c = E.useRef(!1), l = E.useRef(!1), u = E.useRef(/* @__PURE__ */ new Map()), d = E.useRef(() => {});
	return E.useEffect(() => {
		function e() {
			l.current = !1, i.current = !1, u.current.clear();
		}
		ma(e, "resetOutsideInteraction");
		function t() {
			return Array.from(u.current.values()).some(Boolean);
		}
		ma(t, "isOutsideInteractionIntercepted");
		function f(e) {
			if (!l.current) return;
			let t = e.target;
			t instanceof Node && [...a].some((e) => e.contains(t)) || u.current.set(e.type, !0), e.type === "click" && window.setTimeout(() => {
				l.current && d.current();
			}, 0);
		}
		ma(f, "handleInteractionCapture");
		function p(e) {
			l.current && u.current.set(e.type, !1);
		}
		ma(p, "handleInteractionBubble");
		let m = /* @__PURE__ */ ma((a) => {
			if (a.target && !c.current) {
				let f = function() {
					n.removeEventListener("click", d.current);
					let r = t();
					e(), r || Ea(ga, s, p, { discrete: !0 });
				};
				if (ma(f, "handleAndDispatchPointerDownOutsideEvent"), !o(a.target)) {
					n.removeEventListener("click", d.current), e(), c.current = !1;
					return;
				}
				let p = { originalEvent: a };
				l.current = !0, i.current = r && a.button === 0, u.current.clear(), !r || a.button !== 0 ? f() : (n.removeEventListener("click", d.current), d.current = f, n.addEventListener("click", d.current, { once: !0 }));
			} else n.removeEventListener("click", d.current), e();
			c.current = !1;
		}, "handlePointerDown"), h = [
			"pointerup",
			"mousedown",
			"mouseup",
			"touchstart",
			"touchend",
			"click"
		];
		for (let e of h) n.addEventListener(e, f, !0), n.addEventListener(e, p);
		let g = window.setTimeout(() => {
			n.addEventListener("pointerdown", m);
		}, 0);
		return () => {
			window.clearTimeout(g), n.removeEventListener("pointerdown", m), n.removeEventListener("click", d.current);
			for (let e of h) n.removeEventListener(e, f, !0), n.removeEventListener(e, p);
		};
	}, [
		n,
		s,
		r,
		i,
		a,
		o
	]), { onPointerDownCapture: /* @__PURE__ */ ma(() => c.current = !0, "onPointerDownCapture") };
}
ma(Ca, "usePointerDownOutside");
function wa(e, t = globalThis?.document) {
	let n = fa(e), r = E.useRef(!1);
	return E.useEffect(() => {
		let e = /* @__PURE__ */ ma((e) => {
			e.target && !r.current && Ea(_a, n, { originalEvent: e }, { discrete: !1 });
		}, "handleFocus");
		return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e);
	}, [t, n]), {
		onFocusCapture: /* @__PURE__ */ ma(() => r.current = !0, "onFocusCapture"),
		onBlurCapture: /* @__PURE__ */ ma(() => r.current = !1, "onBlurCapture")
	};
}
ma(wa, "useFocusOutside");
function Ta() {
	let e = new CustomEvent(ha);
	document.dispatchEvent(e);
}
ma(Ta, "dispatchUpdate");
function Ea(e, t, n, { discrete: r }) {
	let i = n.originalEvent.target, a = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? cr(i, a) : i.dispatchEvent(a);
}
ma(Ea, "handleAndDispatchCustomEvent");
//#endregion
//#region node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var Da = Object.defineProperty, Oa = (e, t) => Da(e, "name", {
	value: t,
	configurable: !0
}), ka = "focusScope.autoFocusOnMount", Aa = "focusScope.autoFocusOnUnmount", ja = {
	bubbles: !1,
	cancelable: !0
}, Ma = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ Oa(function(e, t) {
	let { loop: n = !1, trapped: r = !1, onMountAutoFocus: i, onUnmountAutoFocus: a, ...o } = e, [s, c] = E.useState(null), l = fa(i), u = fa(a), d = E.useRef(null), f = Vn(t, c), p = E.useRef({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	E.useEffect(() => {
		if (r) {
			let e = function(e) {
				if (p.paused || !s) return;
				let t = e.target;
				s.contains(t) ? d.current = t : za(d.current, { select: !0 });
			}, t = function(e) {
				if (p.paused || !s) return;
				let t = e.relatedTarget;
				t !== null && (s.contains(t) || za(d.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && za(s);
			};
			Oa(e, "handleFocusIn"), Oa(t, "handleFocusOut"), Oa(n, "handleMutations"), document.addEventListener("focusin", e), document.addEventListener("focusout", t);
			let r = new MutationObserver(n);
			return s && r.observe(s, {
				childList: !0,
				subtree: !0
			}), () => {
				document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect();
			};
		}
	}, [
		r,
		s,
		p.paused
	]), E.useEffect(() => {
		if (s) {
			Ba.add(p);
			let e = document.activeElement;
			if (!s.contains(e)) {
				let t = new CustomEvent(ka, ja);
				s.addEventListener(ka, l), s.dispatchEvent(t), t.defaultPrevented || (Na(Ua(Fa(s)), { select: !0 }), document.activeElement === e && za(s));
			}
			return () => {
				s.removeEventListener(ka, l), setTimeout(() => {
					let t = new CustomEvent(Aa, ja);
					s.addEventListener(Aa, u), s.dispatchEvent(t), t.defaultPrevented || za(e ?? document.body, { select: !0 }), s.removeEventListener(Aa, u), Ba.remove(p);
				}, 0);
			};
		}
	}, [
		s,
		l,
		u,
		p
	]);
	let m = E.useCallback((e) => {
		if (!n && !r || p.paused) return;
		let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, i = document.activeElement;
		if (t && i) {
			let t = e.currentTarget, [r, a] = Pa(t);
			r && a ? !e.shiftKey && i === a ? (e.preventDefault(), n && za(r, { select: !0 })) : e.shiftKey && i === r && (e.preventDefault(), n && za(a, { select: !0 })) : i === t && e.preventDefault();
		}
	}, [
		n,
		r,
		p.paused
	]);
	return /* @__PURE__ */ (0, R.jsx)(sr.div, {
		tabIndex: -1,
		...o,
		ref: f,
		onKeyDown: m
	});
}, "FocusScope"));
function Na(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (za(r, { select: t }), document.activeElement !== n) return;
}
Oa(Na, "focusFirst");
function Pa(e) {
	let t = Fa(e);
	return [Ia(t, e), Ia(t.reverse(), e)];
}
Oa(Pa, "getTabbableEdges");
function Fa(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: /* @__PURE__ */ Oa((e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	}, "acceptNode") });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
Oa(Fa, "getTabbableCandidates");
function Ia(e, t) {
	let n = typeof t.checkVisibility == "function" && t.checkVisibility({ checkVisibilityCSS: !0 });
	for (let r of e) if (!(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : La(r, { upTo: t }))) return r;
}
Oa(Ia, "findVisible");
function La(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
Oa(La, "isHidden");
function Ra(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
Oa(Ra, "isSelectableInput");
function za(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = document.activeElement;
		e.focus({ preventScroll: !0 }), e !== n && Ra(e) && t && e.select();
	}
}
Oa(za, "focus");
var Ba = Va();
function Va() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = Ha(e, t), e.unshift(t);
		},
		remove(t) {
			e = Ha(e, t), e[0]?.resume();
		}
	};
}
Oa(Va, "createFocusScopesStack");
function Ha(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
Oa(Ha, "arrayRemove");
function Ua(e) {
	return e.filter((e) => e.tagName !== "A");
}
Oa(Ua, "removeLinks");
//#endregion
//#region node_modules/@radix-ui/react-portal/dist/index.mjs
var Wa = Object.defineProperty, Ga = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ ((e, t) => Wa(e, "name", {
	value: t,
	configurable: !0
}))(function(e, t) {
	let { container: n, ...r } = e, [i, a] = E.useState(!1);
	Fr(() => a(!0), []);
	let o = n || i && globalThis?.document?.body;
	return o ? it.createPortal(/* @__PURE__ */ (0, R.jsx)(sr.div, {
		...r,
		ref: t
	}), o) : null;
}, "Portal")), Ka = Object.defineProperty, qa = (e, t) => Ka(e, "name", {
	value: t,
	configurable: !0
}), Ja = 0, Ya = null;
function Xa(e) {
	return Za(), e.children;
}
qa(Xa, "FocusGuards");
function Za() {
	E.useEffect(() => {
		Ya ||= {
			start: Qa(),
			end: Qa()
		};
		let { start: e, end: t } = Ya;
		return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), Ja++, () => {
			Ja === 1 && (Ya?.start.remove(), Ya?.end.remove(), Ya = null), Ja = Math.max(0, Ja - 1);
		};
	}, []);
}
qa(Za, "useFocusGuards");
function Qa() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
qa(Qa, "createFocusGuard");
//#endregion
//#region node_modules/tslib/tslib.es6.mjs
var $a = function() {
	return $a = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, $a.apply(this, arguments);
};
function eo(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function to(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
//#endregion
//#region node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var no = "right-scroll-bar-position", ro = "width-before-scroll-bar", io = "with-scroll-bars-hidden", ao = "--removed-body-scroll-bar-size";
//#endregion
//#region node_modules/use-callback-ref/dist/es2015/assignRef.js
function oo(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region node_modules/use-callback-ref/dist/es2015/useRef.js
function so(e, t) {
	var n = (0, E.useState)(function() {
		return {
			value: e,
			callback: t,
			facade: {
				get current() {
					return n.value;
				},
				set current(e) {
					var t = n.value;
					t !== e && (n.value = e, n.callback(e, t));
				}
			}
		};
	})[0];
	return n.callback = t, n.facade;
}
//#endregion
//#region node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var co = typeof window < "u" ? E.useLayoutEffect : E.useEffect, lo = /* @__PURE__ */ new WeakMap();
function uo(e, t) {
	var n = so(t || null, function(t) {
		return e.forEach(function(e) {
			return oo(e, t);
		});
	});
	return co(function() {
		var t = lo.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || oo(e, null);
			}), i.forEach(function(e) {
				r.has(e) || oo(e, a);
			});
		}
		lo.set(n, e);
	}, [e]), n;
}
//#endregion
//#region node_modules/use-sidecar/dist/es2015/medium.js
function fo(e) {
	return e;
}
function po(e, t) {
	t === void 0 && (t = fo);
	var n = [], r = !1;
	return {
		read: function() {
			if (r) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			return n.length ? n[n.length - 1] : e;
		},
		useMedium: function(e) {
			var i = t(e, r);
			return n.push(i), function() {
				n = n.filter(function(e) {
					return e !== i;
				});
			};
		},
		assignSyncMedium: function(e) {
			for (r = !0; n.length;) {
				var t = n;
				n = [], t.forEach(e);
			}
			n = {
				push: function(t) {
					return e(t);
				},
				filter: function() {
					return n;
				}
			};
		},
		assignMedium: function(e) {
			r = !0;
			var t = [];
			if (n.length) {
				var i = n;
				n = [], i.forEach(e), t = n;
			}
			var a = function() {
				var n = t;
				t = [], n.forEach(e);
			}, o = function() {
				return Promise.resolve().then(a);
			};
			o(), n = {
				push: function(e) {
					t.push(e), o();
				},
				filter: function(e) {
					return t = t.filter(e), n;
				}
			};
		}
	};
}
function mo(e) {
	e === void 0 && (e = {});
	var t = po(null);
	return t.options = $a({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region node_modules/use-sidecar/dist/es2015/exports.js
var ho = function(e) {
	var t = e.sideCar, n = eo(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var r = t.read();
	if (!r) throw Error("Sidecar medium not found");
	return E.createElement(r, $a({}, n));
};
ho.isSideCarExport = !0;
function go(e, t) {
	return e.useMedium(t), ho;
}
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/medium.js
var _o = mo(), vo = function() {}, yo = E.forwardRef(function(e, t) {
	var n = E.useRef(null), r = E.useState({
		onScrollCapture: vo,
		onWheelCapture: vo,
		onTouchMoveCapture: vo
	}), i = r[0], a = r[1], o = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, p = e.noRelative, m = e.noIsolation, h = e.inert, g = e.allowPinchZoom, _ = e.as, v = _ === void 0 ? "div" : _, y = e.gapMode, b = eo(e, [
		"forwardProps",
		"children",
		"className",
		"removeScrollBar",
		"enabled",
		"shards",
		"sideCar",
		"noRelative",
		"noIsolation",
		"inert",
		"allowPinchZoom",
		"as",
		"gapMode"
	]), x = f, S = uo([n, t]), C = $a($a({}, b), i);
	return E.createElement(E.Fragment, null, u && E.createElement(x, {
		sideCar: _o,
		removeScrollBar: l,
		shards: d,
		noRelative: p,
		noIsolation: m,
		inert: h,
		setCallbacks: a,
		allowPinchZoom: !!g,
		lockRef: n,
		gapMode: y
	}), o ? E.cloneElement(E.Children.only(s), $a($a({}, C), { ref: S })) : E.createElement(v, $a({}, C, {
		className: c,
		ref: S
	}), s));
});
yo.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, yo.classNames = {
	fullWidth: ro,
	zeroRight: no
};
//#endregion
//#region node_modules/get-nonce/dist/es2015/index.js
var bo = function() {
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region node_modules/react-style-singleton/dist/es2015/singleton.js
function xo() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = bo();
	return t && e.setAttribute("nonce", t), e;
}
function So(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Co(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var wo = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = xo()) && (So(t, n), Co(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, To = function() {
	var e = wo();
	return function(t, n) {
		E.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, Eo = function() {
	var e = To();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, Do = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, Oo = function(e) {
	return parseInt(e || "", 10) || 0;
}, ko = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		Oo(n),
		Oo(r),
		Oo(i)
	];
}, Ao = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return Do;
	var t = ko(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, jo = Eo(), Mo = "data-scroll-locked", No = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${io} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${Mo}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[
		t && `position: relative ${r};`,
		n === "margin" && `
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,
		n === "padding" && `padding-right: ${s}px ${r};`
	].filter(Boolean).join("")}
  }
  
  .${no} {
    right: ${s}px ${r};
  }
  
  .${ro} {
    margin-right: ${s}px ${r};
  }
  
  .${no} .${no} {
    right: 0 ${r};
  }
  
  .${ro} .${ro} {
    margin-right: 0 ${r};
  }
  
  body[${Mo}] {
    ${ao}: ${s}px;
  }
`;
}, Po = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, Fo = function() {
	E.useEffect(function() {
		return document.body.setAttribute(Mo, (Po() + 1).toString()), function() {
			var e = Po() - 1;
			e <= 0 ? document.body.removeAttribute(Mo) : document.body.setAttribute(Mo, e.toString());
		};
	}, []);
}, Io = function(e) {
	var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
	Fo();
	var a = E.useMemo(function() {
		return Ao(i);
	}, [i]);
	return E.createElement(jo, { styles: No(a, !t, i, n ? "" : "!important") });
}, Lo = !1;
if (typeof window < "u") try {
	var Ro = Object.defineProperty({}, "passive", { get: function() {
		return Lo = !0, !0;
	} });
	window.addEventListener("test", Ro, Ro), window.removeEventListener("test", Ro, Ro);
} catch {
	Lo = !1;
}
var zo = Lo ? { passive: !1 } : !1, Bo = function(e) {
	return e.tagName === "TEXTAREA";
}, Vo = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !Bo(e) && n[t] === "visible");
}, Ho = function(e) {
	return Vo(e, "overflowY");
}, V = function(e) {
	return Vo(e, "overflowX");
}, H = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), Go(e, r)) {
			var i = Ko(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, Uo = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, Wo = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, Go = function(e, t) {
	return e === "v" ? Ho(t) : V(t);
}, Ko = function(e, t) {
	return e === "v" ? Uo(t) : Wo(t);
}, qo = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, Jo = function(e, t, n, r, i) {
	var a = qo(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = Ko(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && Go(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, Yo = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Xo = function(e) {
	return [e.deltaX, e.deltaY];
}, Zo = function(e) {
	return e && "current" in e ? e.current : e;
}, Qo = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, $o = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, es = 0, ts = [];
function ns(e) {
	var t = E.useRef([]), n = E.useRef([0, 0]), r = E.useRef(), i = E.useState(es++)[0], a = E.useState(Eo)[0], o = E.useRef(e);
	E.useEffect(function() {
		o.current = e;
	}, [e]), E.useEffect(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${i}`);
			var t = to([e.lockRef.current], (e.shards || []).map(Zo), !0).filter(Boolean);
			return t.forEach(function(e) {
				return e.classList.add(`allow-interactivity-${i}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${i}`), t.forEach(function(e) {
					return e.classList.remove(`allow-interactivity-${i}`);
				});
			};
		}
	}, [
		e.inert,
		e.lockRef.current,
		e.shards
	]);
	var s = E.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !o.current.allowPinchZoom;
		var i = Yo(e), a = n.current, s = "deltaX" in e ? e.deltaX : a[0] - i[0], c = "deltaY" in e ? e.deltaY : a[1] - i[1], l, u = e.target, d = Math.abs(s) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = H(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = H(d, u)), !m) return !1;
		if (!r.current && "changedTouches" in e && (s || c) && (r.current = l), !l) return !0;
		var h = r.current || l;
		return Jo(h, t, e, h === "h" ? s : c, !0);
	}, []), c = E.useCallback(function(e) {
		var n = e;
		if (ts.length && ts[ts.length - 1] === a) {
			var r = "deltaY" in n ? Xo(n) : Yo(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && Qo(e.delta, r);
			})[0];
			if (i && i.should) {
				n.cancelable && n.preventDefault();
				return;
			}
			if (!i) {
				var c = (o.current.shards || []).map(Zo).filter(Boolean).filter(function(e) {
					return e.contains(n.target);
				});
				(c.length > 0 ? s(n, c[0]) : !o.current.noIsolation) && n.cancelable && n.preventDefault();
			}
		}
	}, []), l = E.useCallback(function(e, n, r, i) {
		var a = {
			name: e,
			delta: n,
			target: r,
			should: i,
			shadowParent: rs(r)
		};
		t.current.push(a), setTimeout(function() {
			t.current = t.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), u = E.useCallback(function(e) {
		n.current = Yo(e), r.current = void 0;
	}, []), d = E.useCallback(function(t) {
		l(t.type, Xo(t), t.target, s(t, e.lockRef.current));
	}, []), f = E.useCallback(function(t) {
		l(t.type, Yo(t), t.target, s(t, e.lockRef.current));
	}, []);
	E.useEffect(function() {
		return ts.push(a), e.setCallbacks({
			onScrollCapture: d,
			onWheelCapture: d,
			onTouchMoveCapture: f
		}), document.addEventListener("wheel", c, zo), document.addEventListener("touchmove", c, zo), document.addEventListener("touchstart", u, zo), function() {
			ts = ts.filter(function(e) {
				return e !== a;
			}), document.removeEventListener("wheel", c, zo), document.removeEventListener("touchmove", c, zo), document.removeEventListener("touchstart", u, zo);
		};
	}, []);
	var p = e.removeScrollBar, m = e.inert;
	return E.createElement(E.Fragment, null, m ? E.createElement(a, { styles: $o(i) }) : null, p ? E.createElement(Io, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function rs(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/sidecar.js
var is = go(_o, ns), as = E.forwardRef(function(e, t) {
	return E.createElement(yo, $a({}, e, {
		ref: t,
		sideCar: is
	}));
});
as.classNames = yo.classNames;
//#endregion
//#region node_modules/aria-hidden/dist/es2015/index.js
var os = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, U = /* @__PURE__ */ new WeakMap(), ss = /* @__PURE__ */ new WeakMap(), cs = {}, ls = 0, us = function(e) {
	return e && (e.host || us(e.parentNode));
}, ds = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = us(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, fs = function(e, t, n, r) {
	var i = ds(t, Array.isArray(e) ? e : [e]);
	cs[n] || (cs[n] = /* @__PURE__ */ new WeakMap());
	var a = cs[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		e && !s.has(e) && (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		e && !c.has(e) && Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (U.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				U.set(e, c), a.set(e, l), o.push(e), c === 1 && i && ss.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), ls++, function() {
		o.forEach(function(e) {
			var t = U.get(e) - 1, i = a.get(e) - 1;
			U.set(e, t), a.set(e, i), t || (ss.has(e) || e.removeAttribute(r), ss.delete(e)), i || e.removeAttribute(n);
		}), ls--, ls || (U = /* @__PURE__ */ new WeakMap(), U = /* @__PURE__ */ new WeakMap(), ss = /* @__PURE__ */ new WeakMap(), cs = {});
	};
}, ps = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || os(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), fs(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, ms = Object.defineProperty, hs = (e, t) => ms(e, "name", {
	value: t,
	configurable: !0
}), gs = "Dialog", [_s, vs] = /* @__PURE__ */ fr(gs), [ys, bs] = _s(gs), xs = /* @__PURE__ */ hs((e) => {
	let { __scopeDialog: t, children: n, open: r, defaultOpen: i, onOpenChange: a, modal: o = !0 } = e, s = E.useRef(null), c = E.useRef(null), [l, u] = Wr({
		prop: r,
		defaultProp: i ?? !1,
		onChange: a,
		caller: gs
	}), [d, f] = E.useState(0), [p, m] = E.useState(0);
	return /* @__PURE__ */ (0, R.jsx)(ys, {
		scope: t,
		triggerRef: s,
		contentRef: c,
		contentId: ci(),
		titleId: ci(),
		descriptionId: ci(),
		titlePresent: d > 0,
		descriptionPresent: p > 0,
		setTitleCount: f,
		setDescriptionCount: m,
		open: l,
		onOpenChange: u,
		onOpenToggle: E.useCallback(() => u((e) => !e), [u]),
		modal: o,
		children: n
	});
}, "Dialog"), Ss = "DialogTrigger", Cs = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ hs(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = bs(Ss, n), a = Vn(t, i.triggerRef);
	return /* @__PURE__ */ (0, R.jsx)(sr.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": i.open,
		"aria-controls": i.open ? i.contentId : void 0,
		"data-state": Us(i.open),
		...r,
		ref: a,
		onClick: Ar(e.onClick, i.onOpenToggle)
	});
}, "DialogTrigger")), ws = "DialogPortal", [Ts, Es] = _s(ws, { forceMount: void 0 }), Ds = /* @__PURE__ */ hs((e) => {
	let { __scopeDialog: t, forceMount: n, children: r, container: i } = e, a = bs(ws, t);
	return /* @__PURE__ */ (0, R.jsx)(Ts, {
		scope: t,
		forceMount: n,
		children: E.Children.map(r, (e) => /* @__PURE__ */ (0, R.jsx)(Qr, {
			present: n || a.open,
			children: /* @__PURE__ */ (0, R.jsx)(Ga, {
				asChild: !0,
				container: i,
				children: e
			})
		}))
	});
}, "DialogPortal"), Os = "DialogOverlay", ks = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ hs(function(e, t) {
	let n = Es(Os, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = bs(Os, e.__scopeDialog);
	return a.modal ? /* @__PURE__ */ (0, R.jsx)(Qr, {
		present: r || a.open,
		children: /* @__PURE__ */ (0, R.jsx)(js, {
			...i,
			ref: t
		})
	}) : null;
}, "DialogOverlay")), As = /* @__PURE__ */ Wn("DialogOverlay.RemoveScroll"), js = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ hs(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = bs(Os, n), a = Vn(t, xa());
	return /* @__PURE__ */ (0, R.jsx)(as, {
		as: As,
		allowPinchZoom: !0,
		shards: [i.contentRef],
		children: /* @__PURE__ */ (0, R.jsx)(sr.div, {
			"data-state": Us(i.open),
			...r,
			ref: a,
			style: {
				pointerEvents: "auto",
				...r.style
			}
		})
	});
}, "DialogOverlayImpl")), Ms = "DialogContent", Ns = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ hs(function(e, t) {
	let n = Es(Ms, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = bs(Ms, e.__scopeDialog);
	return /* @__PURE__ */ (0, R.jsx)(Qr, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ (0, R.jsx)(Ps, {
			...i,
			ref: t
		}) : /* @__PURE__ */ (0, R.jsx)(Fs, {
			...i,
			ref: t
		})
	});
}, "DialogContent")), Ps = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ hs(function(e, t) {
	let n = bs(Ms, e.__scopeDialog), r = E.useRef(null), i = Vn(t, n.contentRef, r);
	return E.useEffect(() => {
		let e = r.current;
		if (e) return ps(e);
	}, []), /* @__PURE__ */ (0, R.jsx)(Is, {
		...e,
		ref: i,
		trapFocus: n.open,
		disableOutsidePointerEvents: n.open,
		onCloseAutoFocus: Ar(e.onCloseAutoFocus, (e) => {
			e.preventDefault(), n.triggerRef.current?.focus();
		}),
		onPointerDownOutside: Ar(e.onPointerDownOutside, (e) => {
			let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0;
			(t.button === 2 || n) && e.preventDefault();
		}),
		onFocusOutside: Ar(e.onFocusOutside, (e) => e.preventDefault())
	});
}, "DialogContentModal")), Fs = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ hs(function(e, t) {
	let n = bs(Ms, e.__scopeDialog), r = E.useRef(!1), i = E.useRef(!1);
	return /* @__PURE__ */ (0, R.jsx)(Is, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		onCloseAutoFocus: (t) => {
			e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), r.current = !1, i.current = !1;
		},
		onInteractOutside: (t) => {
			e.onInteractOutside?.(t), t.defaultPrevented || (r.current = !0, t.detail.originalEvent.type === "pointerdown" && (i.current = !0));
			let a = t.target;
			n.triggerRef.current?.contains(a) && t.preventDefault(), t.detail.originalEvent.type === "focusin" && i.current && t.preventDefault();
		}
	});
}, "DialogContentNonModal")), Is = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ hs(function(e, t) {
	let { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, ...o } = e, s = bs(Ms, n);
	return Za(), /* @__PURE__ */ (0, R.jsx)(R.Fragment, { children: /* @__PURE__ */ (0, R.jsx)(Ma, {
		asChild: !0,
		loop: !0,
		trapped: r,
		onMountAutoFocus: i,
		onUnmountAutoFocus: a,
		children: /* @__PURE__ */ (0, R.jsx)(ba, {
			role: "dialog",
			id: s.contentId,
			"aria-describedby": s.descriptionPresent ? s.descriptionId : void 0,
			"aria-labelledby": s.titlePresent ? s.titleId : void 0,
			"data-state": Us(s.open),
			...o,
			ref: t,
			deferPointerDownOutside: !0,
			onDismiss: () => s.onOpenChange(!1)
		})
	}) });
}, "DialogContentImpl")), Ls = "DialogTitle", Rs = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ hs(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = bs(Ls, n), { setTitleCount: a } = i;
	return Fr(() => (a((e) => e + 1), () => a((e) => e - 1)), [a]), /* @__PURE__ */ (0, R.jsx)(sr.h2, {
		id: i.titleId,
		...r,
		ref: t
	});
}, "DialogTitle")), zs = "DialogDescription", Bs = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ hs(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = bs(zs, n), { setDescriptionCount: a } = i;
	return Fr(() => (a((e) => e + 1), () => a((e) => e - 1)), [a]), /* @__PURE__ */ (0, R.jsx)(sr.p, {
		id: i.descriptionId,
		...r,
		ref: t
	});
}, "DialogDescription")), Vs = "DialogClose", Hs = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ hs(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = bs(Vs, n);
	return /* @__PURE__ */ (0, R.jsx)(sr.button, {
		type: "button",
		...r,
		ref: t,
		onClick: Ar(e.onClick, () => i.onOpenChange(!1))
	});
}, "DialogClose"));
function Us(e) {
	return e ? "open" : "closed";
}
hs(Us, "getState");
//#endregion
//#region node_modules/@radix-ui/react-use-is-hydrated/dist/index.mjs
var Ws = Object.defineProperty, Gs = (e, t) => Ws(e, "name", {
	value: t,
	configurable: !0
}), Ks = !1;
function qs() {
	let [e, t] = E.useState(Ks);
	return E.useEffect(() => {
		Ks || (Ks = !0, t(!0));
	}, []), e;
}
Gs(qs, "useIsHydrated");
var Js = E.useSyncExternalStore;
function Ys() {
	return () => {};
}
Gs(Ys, "subscribe");
function Xs() {
	return Js(Ys, () => !0, () => !1);
}
Gs(Xs, "useIsHydratedModern");
var Zs = typeof Js == "function" ? Xs : qs, Qs = Object.defineProperty, $s = (e, t) => Qs(e, "name", {
	value: t,
	configurable: !0
}), ec = "rovingFocusGroup.onEntryFocus", tc = {
	bubbles: !1,
	cancelable: !0
}, nc = "RovingFocusGroup", [rc, ic, ac] = /* @__PURE__ */ gr(nc), [oc, sc] = /* @__PURE__ */ fr(nc, [ac]), [cc, lc] = oc(nc), uc = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ $s(function(e, t) {
	return /* @__PURE__ */ (0, R.jsx)(rc.Provider, {
		scope: e.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ (0, R.jsx)(rc.Slot, {
			scope: e.__scopeRovingFocusGroup,
			children: /* @__PURE__ */ (0, R.jsx)(dc, {
				...e,
				ref: t
			})
		})
	});
}, "RovingFocusGroup")), dc = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ $s(function(e, t) {
	let { __scopeRovingFocusGroup: n, orientation: r, loop: i = !1, dir: a, currentTabStopId: o, defaultCurrentTabStopId: s, onCurrentTabStopIdChange: c, onEntryFocus: l, preventScrollOnEntryFocus: u = !1, ...d } = e, f = E.useRef(null), p = Vn(t, f), m = ki(a), [h, g] = Wr({
		prop: o,
		defaultProp: s ?? null,
		onChange: c,
		caller: nc
	}), [_, v] = E.useState(!1), y = fa(l), b = ic(n), x = E.useRef(!1), [S, C] = E.useState(0);
	return E.useEffect(() => {
		let e = f.current;
		if (e) return e.addEventListener(ec, y), () => e.removeEventListener(ec, y);
	}, [y]), /* @__PURE__ */ (0, R.jsx)(cc, {
		scope: n,
		orientation: r,
		dir: m,
		loop: i,
		currentTabStopId: h,
		onItemFocus: E.useCallback((e) => g(e), [g]),
		onItemShiftTab: E.useCallback(() => v(!0), []),
		onFocusableItemAdd: E.useCallback(() => C((e) => e + 1), []),
		onFocusableItemRemove: E.useCallback(() => C((e) => e - 1), []),
		children: /* @__PURE__ */ (0, R.jsx)(sr.div, {
			tabIndex: _ || S === 0 ? -1 : 0,
			"data-orientation": r,
			...d,
			ref: p,
			style: {
				outline: "none",
				...e.style
			},
			onMouseDown: Ar(e.onMouseDown, () => {
				x.current = !0;
			}),
			onFocus: Ar(e.onFocus, (e) => {
				let t = !x.current;
				if (e.target === e.currentTarget && t && !_) {
					let t = new CustomEvent(ec, tc);
					if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
						let e = b().filter((e) => e.focusable);
						_c([
							e.find((e) => e.active),
							e.find((e) => e.id === h),
							...e
						].filter(Boolean).map((e) => e.ref.current), u);
					}
				}
				x.current = !1;
			}),
			onBlur: Ar(e.onBlur, () => v(!1))
		})
	});
}, "RovingFocusGroupImpl")), fc = "RovingFocusGroupItem", pc = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ $s(function(e, t) {
	let { __scopeRovingFocusGroup: n, focusable: r = !0, active: i = !1, tabStopId: a, children: o, ...s } = e, c = ci(), l = a || c, u = lc(fc, n), d = u.currentTabStopId === l, f = ic(n), { onFocusableItemAdd: p, onFocusableItemRemove: m, currentTabStopId: h } = u, g = Zs();
	return Fr(() => {
		if (g && r) return p(), () => m();
	}, [
		g,
		r,
		p,
		m
	]), E.useEffect(() => {
		if (!g && r) return p(), () => m();
	}, [
		g,
		r,
		p,
		m
	]), /* @__PURE__ */ (0, R.jsx)(rc.ItemSlot, {
		scope: n,
		id: l,
		focusable: r,
		active: i,
		children: /* @__PURE__ */ (0, R.jsx)(sr.span, {
			tabIndex: d ? 0 : -1,
			"data-orientation": u.orientation,
			...s,
			ref: t,
			onMouseDown: Ar(e.onMouseDown, (e) => {
				r ? u.onItemFocus(l) : e.preventDefault();
			}),
			onFocus: Ar(e.onFocus, () => u.onItemFocus(l)),
			onKeyDown: Ar(e.onKeyDown, (e) => {
				if (e.key === "Tab" && e.shiftKey) {
					u.onItemShiftTab();
					return;
				}
				if (e.target !== e.currentTarget) return;
				let t = gc(e, u.orientation, u.dir);
				if (t !== void 0) {
					if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
					e.preventDefault();
					let n = f().filter((e) => e.focusable).map((e) => e.ref.current);
					if (t === "last") n.reverse();
					else if (t === "prev" || t === "next") {
						t === "prev" && n.reverse();
						let r = n.indexOf(e.currentTarget);
						n = u.loop ? vc(n, r + 1) : n.slice(r + 1);
					}
					setTimeout(() => _c(n));
				}
			}),
			children: typeof o == "function" ? o({
				isCurrentTabStop: d,
				hasTabStop: h != null
			}) : o
		})
	});
}, "RovingFocusGroupItem")), mc = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function hc(e, t) {
	return t === "rtl" ? e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e : e;
}
$s(hc, "getDirectionAwareKey");
function gc(e, t, n) {
	let r = hc(e.key, n);
	if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))) return mc[r];
}
$s(gc, "getFocusIntent");
function _c(e, t = !1) {
	let n = document.activeElement;
	for (let r of e) if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
$s(_c, "focusFirst");
function vc(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
$s(vc, "wrapArray");
var yc = uc, bc = pc, xc = Object.defineProperty, Sc = (e, t) => xc(e, "name", {
	value: t,
	configurable: !0
}), Cc = "Tabs", [wc, Tc] = /* @__PURE__ */ fr(Cc, [sc]), Ec = sc(), [Dc, Oc] = wc(Cc), kc = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ Sc(function(e, t) {
	let { __scopeTabs: n, value: r, onValueChange: i, defaultValue: a, orientation: o = "horizontal", dir: s, activationMode: c = "automatic", ...l } = e, u = ki(s), [d, f] = Wr({
		prop: r,
		onChange: i,
		defaultProp: a ?? "",
		caller: Cc
	});
	return /* @__PURE__ */ (0, R.jsx)(Dc, {
		scope: n,
		baseId: ci(),
		value: d,
		onValueChange: f,
		orientation: o,
		dir: u,
		activationMode: c,
		children: /* @__PURE__ */ (0, R.jsx)(sr.div, {
			dir: u,
			"data-orientation": o,
			...l,
			ref: t
		})
	});
}, "Tabs")), Ac = "TabsList", jc = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ Sc(function(e, t) {
	let { __scopeTabs: n, loop: r = !0, ...i } = e, a = Oc(Ac, n), o = Ec(n);
	return /* @__PURE__ */ (0, R.jsx)(yc, {
		asChild: !0,
		...o,
		orientation: a.orientation,
		dir: a.dir,
		loop: r,
		children: /* @__PURE__ */ (0, R.jsx)(sr.div, {
			role: "tablist",
			"aria-orientation": a.orientation,
			...i,
			ref: t
		})
	});
}, "TabsList")), Mc = "TabsTrigger", Nc = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ Sc(function(e, t) {
	let { __scopeTabs: n, value: r, disabled: i = !1, ...a } = e, o = Oc(Mc, n), s = Ec(n), c = Ic(o.baseId, r), l = Lc(o.baseId, r), u = r === o.value;
	return /* @__PURE__ */ (0, R.jsx)(bc, {
		asChild: !0,
		...s,
		focusable: !i,
		active: u,
		children: /* @__PURE__ */ (0, R.jsx)(sr.button, {
			type: "button",
			role: "tab",
			"aria-selected": u,
			"aria-controls": l,
			"data-state": u ? "active" : "inactive",
			"data-disabled": i ? "" : void 0,
			disabled: i,
			id: c,
			...a,
			ref: t,
			onMouseDown: Ar(e.onMouseDown, (e) => {
				!i && e.button === 0 && e.ctrlKey === !1 ? o.onValueChange(r) : e.preventDefault();
			}),
			onKeyDown: Ar(e.onKeyDown, (e) => {
				i || e.target !== e.currentTarget || [" ", "Enter"].includes(e.key) && o.onValueChange(r);
			}),
			onFocus: Ar(e.onFocus, () => {
				let e = o.activationMode !== "manual";
				!u && !i && e && o.onValueChange(r);
			})
		})
	});
}, "TabsTrigger")), Pc = "TabsContent", Fc = /* @__PURE__ */ E.forwardRef(/* @__PURE__ */ Sc(function(e, t) {
	let { __scopeTabs: n, value: r, forceMount: i, children: a, ...o } = e, s = Oc(Pc, n), c = Ic(s.baseId, r), l = Lc(s.baseId, r), u = r === s.value, d = E.useRef(u);
	return E.useEffect(() => {
		let e = requestAnimationFrame(() => d.current = !1);
		return () => cancelAnimationFrame(e);
	}, []), /* @__PURE__ */ (0, R.jsx)(Qr, {
		present: i || u,
		children: ({ present: n }) => /* @__PURE__ */ (0, R.jsx)(sr.div, {
			"data-state": u ? "active" : "inactive",
			"data-orientation": s.orientation,
			role: "tabpanel",
			"aria-labelledby": c,
			hidden: !n,
			id: l,
			tabIndex: 0,
			...o,
			ref: t,
			style: {
				...e.style,
				animationDuration: d.current ? "0s" : void 0
			},
			children: n && a
		})
	});
}, "TabsContent"));
function Ic(e, t) {
	return `${e}-trigger-${t}`;
}
Sc(Ic, "makeTriggerId");
function Lc(e, t) {
	return `${e}-content-${t}`;
}
Sc(Lc, "makeContentId");
var Rc = kc, zc = jc, Bc = Nc, Vc = Fc, Hc = ut("inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
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
function Uc({ className: e, variant: t = "default", size: n = "default", asChild: r = !1, ...i }) {
	let a = r ? Gn : "button";
	return /* @__PURE__ */ (0, R.jsx)(a, {
		"data-slot": "button",
		"data-variant": t,
		"data-size": n,
		className: In(Hc({
			variant: t,
			size: n,
			className: e
		})),
		...i
	});
}
//#endregion
//#region src/components/ui/tabs.jsx
function Wc({ className: e, orientation: t = "horizontal", ...n }) {
	return /* @__PURE__ */ (0, R.jsx)(Rc, {
		"data-slot": "tabs",
		"data-orientation": t,
		orientation: t,
		className: In("group/tabs flex gap-2 data-[orientation=horizontal]:flex-col", e),
		...n
	});
}
var Gc = ut("group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-[orientation=horizontal]/tabs:h-9 group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=line]:rounded-none", {
	variants: { variant: {
		default: "bg-muted",
		line: "gap-1 bg-transparent"
	} },
	defaultVariants: { variant: "default" }
});
function Kc({ className: e, variant: t = "default", ...n }) {
	return /* @__PURE__ */ (0, R.jsx)(zc, {
		"data-slot": "tabs-list",
		"data-variant": t,
		className: In(Gc({ variant: t }), e),
		...n
	});
}
function qc({ className: e, ...t }) {
	return /* @__PURE__ */ (0, R.jsx)(Bc, {
		"data-slot": "tabs-trigger",
		className: In("relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent", "data-[state=active]:bg-background data-[state=active]:text-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground", "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100", e),
		...t
	});
}
function Jc({ className: e, ...t }) {
	return /* @__PURE__ */ (0, R.jsx)(Vc, {
		"data-slot": "tabs-content",
		className: In("flex-1 outline-none", e),
		...t
	});
}
//#endregion
//#region src/components/ui/accordion.jsx
function Yc({ ...e }) {
	return /* @__PURE__ */ (0, R.jsx)(aa, {
		"data-slot": "accordion",
		...e
	});
}
function Xc({ className: e, ...t }) {
	return /* @__PURE__ */ (0, R.jsx)(oa, {
		"data-slot": "accordion-item",
		className: In("border-b last:border-b-0", e),
		...t
	});
}
function Zc({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ (0, R.jsx)(sa, {
		className: "flex",
		children: /* @__PURE__ */ (0, R.jsxs)(ca, {
			"data-slot": "accordion-trigger",
			className: In("flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180", e),
			...n,
			children: [t, /* @__PURE__ */ (0, R.jsx)(ve, { className: "pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200" })]
		})
	});
}
function Qc({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ (0, R.jsx)(la, {
		"data-slot": "accordion-content",
		className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
		...n,
		children: /* @__PURE__ */ (0, R.jsx)("div", {
			className: In("pt-0 pb-4", e),
			children: t
		})
	});
}
//#endregion
//#region src/components/ui/dialog.jsx
function $c({ ...e }) {
	return /* @__PURE__ */ (0, R.jsx)(xs, {
		"data-slot": "dialog",
		...e
	});
}
function el({ ...e }) {
	return /* @__PURE__ */ (0, R.jsx)(Cs, {
		"data-slot": "dialog-trigger",
		...e
	});
}
function tl({ ...e }) {
	return /* @__PURE__ */ (0, R.jsx)(Ds, {
		"data-slot": "dialog-portal",
		...e
	});
}
function nl({ className: e, ...t }) {
	return /* @__PURE__ */ (0, R.jsx)(ks, {
		"data-slot": "dialog-overlay",
		className: In("fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", e),
		...t
	});
}
function rl({ className: e, children: t, showCloseButton: n = !0, ...r }) {
	return /* @__PURE__ */ (0, R.jsxs)(tl, {
		"data-slot": "dialog-portal",
		children: [/* @__PURE__ */ (0, R.jsx)(nl, {}), /* @__PURE__ */ (0, R.jsxs)(Ns, {
			"data-slot": "dialog-content",
			className: In("fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg", e),
			...r,
			children: [t, n && /* @__PURE__ */ (0, R.jsxs)(Hs, {
				"data-slot": "dialog-close",
				className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				children: [/* @__PURE__ */ (0, R.jsx)(rt, {}), /* @__PURE__ */ (0, R.jsx)("span", {
					className: "sr-only",
					children: "Đóng"
				})]
			})]
		})]
	});
}
function il({ className: e, ...t }) {
	return /* @__PURE__ */ (0, R.jsx)("div", {
		"data-slot": "dialog-header",
		className: In("flex flex-col gap-2 text-center sm:text-left", e),
		...t
	});
}
function al({ className: e, ...t }) {
	return /* @__PURE__ */ (0, R.jsx)(Rs, {
		"data-slot": "dialog-title",
		className: In("text-lg leading-none font-semibold", e),
		...t
	});
}
function ol({ className: e, ...t }) {
	return /* @__PURE__ */ (0, R.jsx)(Bs, {
		"data-slot": "dialog-description",
		className: In("text-sm text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/portal-data.js
var sl = [
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
], cl = [
	["BOXANH hiện hỗ trợ những dịch vụ nào?", "Ba nhóm chính là chuyển trọ, dọn phòng và bàn giao phòng tại Vinh, Nghệ An. Bạn có thể yêu cầu từng phần hoặc kết hợp. Sửa chữa phát sinh cần khảo sát và thống nhất riêng."],
	["Giá trên website đã là giá cuối cùng chưa?", "Các mức giá chuyển trọ và thuê hộp đang là tham khảo. Giá chính thức được xác nhận sau khi BOXANH có đủ thông tin. Chi phí cầu thang, chờ, thêm người, ngoài giờ và các phát sinh được tách rõ trước khi thực hiện. Dọn phòng và bàn giao cần khảo sát."],
	["Hộp được giao, thu hồi và vệ sinh thế nào?", "Hai bên thống nhất lịch giao và hạn thu hồi; kiểm đếm số lượng, tình trạng ở từng lần bàn giao. Hộp thu hồi được kiểm tra và vệ sinh trước khi dùng lại. Loại hộp, tải trọng, đặt cọc và cách xử lý hỏng/mất được xác nhận trước khi sử dụng."],
	["Tem niêm phong bất thường hoặc không tìm thấy đồ thì làm gì?", "Giữ hộp và tem niêm phong, chụp ảnh hiện trạng và gửi thông tin qua CSKH. BOXANH đối chiếu đơn, lịch sử QR nếu có, ảnh giao nhận, tem niêm phong và danh sách đồ ngoài hộp trước khi trao đổi trách nhiệm và phương án xử lý."],
	["BOXANH có bảo hiểm hoặc đền bù đồ đạc không?", "Dự án chưa công bố bảo hiểm hay mức bồi thường cố định. Các điều kiện trách nhiệm, kiểm đếm và xử lý sự cố cần được thống nhất trước khi nhận lịch. Website không đưa ra cam kết bồi thường chưa được xác nhận."],
	["Thu mua và ký gửi có trừ ngay vào phí chuyển không?", "Thu mua chỉ được giảm phí khi đồ đã được thẩm định, giá được đồng ý và BOXANH đã tiếp nhận. Phần vượt phí được đối soát riêng. Ký gửi được thanh toán sau khi bán; không trừ trước vào phí chuyển."],
	["Gửi yêu cầu có xác nhận lịch hoặc thu tiền chưa?", "Chưa. Gửi biểu mẫu là bước để BOXANH tiếp nhận thông tin, khảo sát và liên hệ. Lịch, phạm vi và giá cần được hai bên xác nhận sau đó."]
], ll = [
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
], ul = (e) => new Intl.NumberFormat("vi-VN", {
	style: "currency",
	currency: "VND",
	maximumFractionDigits: 0
}).format(e || 0), dl = (e) => e.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3"), fl = {
	ClipboardCheck: Se,
	Package: ke,
	Truck: $e,
	RotateCcw: Ve
};
function pl({ children: e, light: t = !1 }) {
	return /* @__PURE__ */ (0, R.jsxs)("p", {
		className: "bx-kicker" + (t ? " bx-kicker-light" : ""),
		children: [/* @__PURE__ */ (0, R.jsx)("span", {}), e]
	});
}
function ml({ number: e, eyebrow: t, title: n, children: r, light: i = !1 }) {
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		className: "bx-section-title" + (i ? " bx-title-light" : ""),
		"data-bx-reveal": !0,
		children: [/* @__PURE__ */ (0, R.jsxs)("div", { children: [/* @__PURE__ */ (0, R.jsxs)(pl, {
			light: i,
			children: [
				e,
				" / ",
				t
			]
		}), /* @__PURE__ */ (0, R.jsx)("h2", { children: n })] }), r && /* @__PURE__ */ (0, R.jsx)("div", {
			className: "bx-section-description",
			children: r
		})]
	});
}
function hl({ href: e, children: t, light: n = !1, orange: r = !1, className: i = "" }) {
	return /* @__PURE__ */ (0, R.jsx)(Uc, {
		asChild: !0,
		className: `bx-button ${n ? "bx-button-light" : ""} ${r ? "bx-button-orange" : ""} ${i}`,
		children: /* @__PURE__ */ (0, R.jsxs)("a", {
			href: e,
			children: [t, /* @__PURE__ */ (0, R.jsx)(A, { size: 18 })]
		})
	});
}
function gl({ config: e, onQuote: t }) {
	let [n, r] = (0, E.useState)("full"), [i, a] = (0, E.useState)("10"), [o, s] = (0, E.useState)("5"), c = ["cleaning", "handover"].includes(n), l = c ? n : "moving", [u, d] = (0, E.useState)({
		total: e.fullBase,
		needsSurvey: !1
	}), [f, p] = (0, E.useState)(!1), [m, h] = (0, E.useState)("");
	(0, E.useEffect)(() => {
		let e = new AbortController();
		if (!c && (!(Number(i) >= 1 && Number(i) <= 60) || !(Number(o) >= 1 && Number(o) <= 80))) return h("Nhập 1–60 hộp và quãng đường 1–80 km."), p(!1), () => e.abort();
		h(""), p(!0);
		let t = setTimeout(async () => {
			try {
				let t = await fetch("/api/quote", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						service: n,
						boxes: Number(i),
						distance: Number(o)
					}),
					signal: e.signal
				}), r = await t.json();
				if (!t.ok) throw Error(r.error || "Chưa thể ước tính.");
				d(r);
			} catch (e) {
				e.name !== "AbortError" && h(e.message);
			} finally {
				e.signal.aborted || p(!1);
			}
		}, 180);
		return () => {
			clearTimeout(t), e.abort();
		};
	}, [
		n,
		i,
		o,
		c
	]);
	function g(t) {
		r(t === "moving" ? "full" : t), d({
			needsSurvey: t !== "moving",
			total: e.fullBase
		});
	}
	return /* @__PURE__ */ (0, R.jsx)("section", {
		className: "bx-quote-zone",
		id: "uoc-tinh",
		children: /* @__PURE__ */ (0, R.jsxs)("div", {
			className: "bx-wrap",
			children: [/* @__PURE__ */ (0, R.jsxs)("div", {
				className: "bx-quote-card",
				children: [/* @__PURE__ */ (0, R.jsxs)("div", {
					className: "bx-quote-heading",
					children: [/* @__PURE__ */ (0, R.jsxs)("div", { children: [/* @__PURE__ */ (0, R.jsx)("span", {
						className: "bx-label",
						children: "BẮT ĐẦU TỪ NHU CẦU CỦA BẠN"
					}), /* @__PURE__ */ (0, R.jsx)("h2", { children: "Ước tính trước. Quyết định sau." })] }), /* @__PURE__ */ (0, R.jsxs)("p", { children: [
						"Gửi yêu cầu chưa xác nhận lịch",
						/* @__PURE__ */ (0, R.jsx)("br", {}),
						" và chưa yêu cầu thanh toán."
					] })]
				}), /* @__PURE__ */ (0, R.jsxs)(Wc, {
					value: l,
					onValueChange: g,
					className: "bx-quote-tabs",
					children: [/* @__PURE__ */ (0, R.jsxs)(Kc, {
						className: "bx-tab-list",
						"aria-label": "Nhóm dịch vụ ước tính",
						children: [
							/* @__PURE__ */ (0, R.jsxs)(qc, {
								value: "moving",
								className: "bx-tab",
								children: [/* @__PURE__ */ (0, R.jsx)($e, { size: 18 }), "Chuyển trọ"]
							}),
							/* @__PURE__ */ (0, R.jsxs)(qc, {
								value: "cleaning",
								className: "bx-tab",
								children: [/* @__PURE__ */ (0, R.jsx)(Ye, { size: 18 }), "Dọn phòng"]
							}),
							/* @__PURE__ */ (0, R.jsxs)(qc, {
								value: "handover",
								className: "bx-tab",
								children: [/* @__PURE__ */ (0, R.jsx)(Te, { size: 18 }), "Bàn giao phòng"]
							})
						]
					}), /* @__PURE__ */ (0, R.jsx)(Jc, {
						value: l,
						className: "bx-quote-tab-content",
						children: /* @__PURE__ */ (0, R.jsxs)("form", {
							id: "quick-quote",
							className: "bx-quote-grid",
							onSubmit: (e) => {
								e.preventDefault(), e.currentTarget.reportValidity() && !m && t?.({
									service: n,
									boxes: c ? 0 : Number(i),
									distance: c ? 1 : Number(o)
								});
							},
							children: [/* @__PURE__ */ (0, R.jsxs)("div", {
								className: "bx-quote-fields",
								children: [
									/* @__PURE__ */ (0, R.jsxs)("label", {
										className: "bx-field",
										children: ["Dịch vụ", /* @__PURE__ */ (0, R.jsxs)("select", {
											"aria-label": "Gói dịch vụ ước tính",
											name: "service",
											value: n,
											onChange: (e) => r(e.target.value),
											children: [
												/* @__PURE__ */ (0, R.jsxs)("optgroup", {
													label: "Chuyển trọ",
													children: [
														/* @__PURE__ */ (0, R.jsx)("option", {
															value: "full",
															children: "Chuyển trọ · Trọn gói"
														}),
														/* @__PURE__ */ (0, R.jsx)("option", {
															value: "small",
															children: "Chuyển trọ · Gọn nhẹ"
														}),
														/* @__PURE__ */ (0, R.jsx)("option", {
															value: "boxes",
															children: "Chỉ thuê hộp"
														})
													]
												}),
												/* @__PURE__ */ (0, R.jsx)("option", {
													value: "cleaning",
													children: "Dọn phòng"
												}),
												/* @__PURE__ */ (0, R.jsx)("option", {
													value: "handover",
													children: "Bàn giao phòng"
												})
											]
										})]
									}),
									!c && /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [/* @__PURE__ */ (0, R.jsxs)("label", {
										className: "bx-field",
										children: ["Số hộp dự kiến", /* @__PURE__ */ (0, R.jsx)("input", {
											"aria-label": "Số hộp ước tính",
											type: "number",
											min: "1",
											max: "60",
											required: !0,
											name: "boxes",
											value: i,
											onChange: (e) => a(e.target.value)
										})]
									}), /* @__PURE__ */ (0, R.jsxs)("label", {
										className: "bx-field",
										children: ["Quãng đường (km)", /* @__PURE__ */ (0, R.jsx)("input", {
											"aria-label": "Quãng đường ước tính",
											type: "number",
											min: "1",
											max: "80",
											required: !0,
											name: "distance",
											value: o,
											onChange: (e) => s(e.target.value)
										})]
									})] }),
									/* @__PURE__ */ (0, R.jsx)("p", {
										className: "bx-quote-note",
										id: "quick-note",
										children: c ? "Giá phụ thuộc diện tích, hiện trạng và hạng mục. BOXANH khảo sát trước khi xác nhận chi phí." : "Chưa gồm cầu thang, đồ cồng kềnh, phí chờ, thêm người và ngoài giờ. Các khoản được tách rõ trước khi thực hiện."
									})
								]
							}), /* @__PURE__ */ (0, R.jsxs)("div", {
								className: "bx-quote-result",
								"aria-busy": f,
								children: [
									/* @__PURE__ */ (0, R.jsx)("span", {
										className: "bx-label",
										children: "ƯỚC TÍNH THAM KHẢO"
									}),
									/* @__PURE__ */ (0, R.jsxs)("output", {
										id: "quick-total",
										"aria-live": "polite",
										children: [m ? "Kiểm tra thông tin" : u.needsSurvey ? "Cần khảo sát" : ul(u.total), f && !m && /* @__PURE__ */ (0, R.jsx)("small", { children: "Đang cập nhật…" })]
									}),
									m && /* @__PURE__ */ (0, R.jsx)("p", {
										className: "bx-inline-error",
										role: "alert",
										children: m
									}),
									/* @__PURE__ */ (0, R.jsxs)(Uc, {
										type: "submit",
										className: "bx-button bx-button-orange",
										disabled: !!m,
										children: ["Nhận báo giá", /* @__PURE__ */ (0, R.jsx)(O, { size: 18 })]
									}),
									/* @__PURE__ */ (0, R.jsxs)("a", {
										className: "bx-small-link",
										href: "/dich-vu#phu-phi",
										children: ["Xem cách tính phụ phí", /* @__PURE__ */ (0, R.jsx)(j, { size: 14 })]
									})
								]
							})]
						})
					})]
				})]
			}), /* @__PURE__ */ (0, R.jsxs)("div", {
				className: "bx-quote-foot",
				children: [/* @__PURE__ */ (0, R.jsxs)("span", { children: [
					/* @__PURE__ */ (0, R.jsx)(De, { size: 15 }),
					"Khu vực thử nghiệm: ",
					e.area
				] }), /* @__PURE__ */ (0, R.jsxs)("a", {
					href: "/tra-cuu",
					children: ["Đã gửi yêu cầu? Tra cứu tiến độ", /* @__PURE__ */ (0, R.jsx)(A, { size: 15 })]
				})]
			})]
		})
	});
}
function _l() {
	return /* @__PURE__ */ (0, R.jsx)("section", {
		className: "bx-confidence",
		children: /* @__PURE__ */ (0, R.jsxs)("div", {
			className: "bx-wrap bx-confidence-grid",
			children: [/* @__PURE__ */ (0, R.jsxs)("div", {
				className: "bx-confidence-title",
				"data-bx-reveal": !0,
				children: [
					/* @__PURE__ */ (0, R.jsx)(pl, {
						light: !0,
						children: "ĐIỀU TẠO NÊN KHÁC BIỆT"
					}),
					/* @__PURE__ */ (0, R.jsxs)("h2", { children: [
						"Rõ từng khoản.",
						/* @__PURE__ */ (0, R.jsx)("br", {}),
						" Chỉn chu từng bước.",
						/* @__PURE__ */ (0, R.jsx)("br", {}),
						" ",
						/* @__PURE__ */ (0, R.jsx)("em", { children: "Dùng lại từng hộp." })
					] }),
					/* @__PURE__ */ (0, R.jsx)("p", { children: "Những điều cần được thống nhất để bạn chủ động từ lúc chuẩn bị đến lúc nhận lại đồ." }),
					/* @__PURE__ */ (0, R.jsxs)("a", {
						href: "/chinh-sach",
						className: "bx-inline-link",
						children: ["Xem điều kiện dịch vụ", /* @__PURE__ */ (0, R.jsx)(A, { size: 18 })]
					})
				]
			}), /* @__PURE__ */ (0, R.jsx)("div", {
				className: "bx-confidence-cards",
				children: [
					[
						Se,
						"01",
						"Giá có căn cứ",
						"Khảo sát nguồn lực, quãng đường và điều kiện bốc xếp. Giá chuyến và phụ phí tách rõ."
					],
					[
						qe,
						"02",
						"Giao nhận có ghi nhận",
						"Kiểm đếm, ảnh bàn giao và đối chiếu tem niêm phong theo quy trình dự kiến; CSKH có đầu mối tiếp nhận."
					],
					[
						ze,
						"03",
						"Hộp tiếp tục hành trình",
						"Thu hồi, kiểm tra, vệ sinh rồi dùng tiếp. Hộp hết vòng đời được kiểm tra khả năng tái chế."
					]
				].map(([e, t, n, r]) => /* @__PURE__ */ (0, R.jsxs)("article", {
					"data-bx-reveal": !0,
					children: [
						/* @__PURE__ */ (0, R.jsxs)("div", { children: [/* @__PURE__ */ (0, R.jsx)(e, { size: 26 }), /* @__PURE__ */ (0, R.jsx)("span", { children: t })] }),
						/* @__PURE__ */ (0, R.jsx)("h3", { children: n }),
						/* @__PURE__ */ (0, R.jsx)("p", { children: r })
					]
				}, t))
			})]
		})
	});
}
function W({ config: e }) {
	let t = [
		{
			key: "small",
			name: "Gọn nhẹ",
			tag: "BẠN TỰ ĐÓNG ĐỒ",
			price: e.smallBase,
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
			price: e.fullBase,
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
			price: e.boxBase + 10 * e.boxUnit,
			desc: "Dùng hộp bền để chủ động chuyển bằng phương tiện của bạn.",
			items: [
				"Ví dụ thuê 10 hộp",
				"Giao hộp và hẹn thu hồi",
				"Kiểm tra & vệ sinh sau mỗi lượt"
			]
		}
	];
	return /* @__PURE__ */ (0, R.jsx)("section", {
		className: "bx-section bx-pricing",
		id: "bang-gia",
		children: /* @__PURE__ */ (0, R.jsxs)("div", {
			className: "bx-wrap",
			children: [
				/* @__PURE__ */ (0, R.jsx)(ml, {
					number: "02",
					eyebrow: "BẢNG GIÁ THAM KHẢO",
					title: /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [
						"Chọn gói vừa với đồ.",
						/* @__PURE__ */ (0, R.jsx)("br", {}),
						" ",
						/* @__PURE__ */ (0, R.jsx)("em", { children: "Vừa với kế hoạch của bạn." })
					] }),
					children: /* @__PURE__ */ (0, R.jsxs)("p", { children: [
						"Mức dưới đây minh họa 10 hộp, ",
						e.rentalDays,
						" ngày tại ",
						e.area,
						". BOXANH xác nhận giá sau khảo sát."
					] })
				}),
				/* @__PURE__ */ (0, R.jsx)("div", {
					className: "bx-price-grid",
					children: t.map((e, t) => /* @__PURE__ */ (0, R.jsxs)("article", {
						className: "bx-price-card" + (t === 1 ? " bx-price-featured" : ""),
						"data-bx-reveal": !0,
						children: [
							/* @__PURE__ */ (0, R.jsxs)("div", {
								className: "bx-price-card-head",
								children: [/* @__PURE__ */ (0, R.jsx)("span", {
									className: "bx-label",
									children: e.tag
								}), t === 1 && /* @__PURE__ */ (0, R.jsx)("span", {
									className: "bx-feature-tag",
									children: "Trọn hành trình"
								})]
							}),
							/* @__PURE__ */ (0, R.jsx)("h3", { children: e.name }),
							/* @__PURE__ */ (0, R.jsxs)("div", {
								className: "bx-price",
								children: [/* @__PURE__ */ (0, R.jsx)("span", { children: "Từ" }), /* @__PURE__ */ (0, R.jsx)("strong", { children: ul(e.price) })]
							}),
							/* @__PURE__ */ (0, R.jsx)("p", {
								className: "bx-price-desc",
								children: e.desc
							}),
							/* @__PURE__ */ (0, R.jsx)("ul", { children: e.items.map((e) => /* @__PURE__ */ (0, R.jsxs)("li", { children: [/* @__PURE__ */ (0, R.jsx)(ge, { size: 17 }), e] }, e)) }),
							/* @__PURE__ */ (0, R.jsxs)("div", {
								className: "bx-price-actions",
								children: [/* @__PURE__ */ (0, R.jsx)(hl, {
									href: "/dat-lich?goi=" + e.key,
									orange: t === 1,
									children: "Nhận báo giá gói này"
								}), /* @__PURE__ */ (0, R.jsxs)($c, { children: [/* @__PURE__ */ (0, R.jsx)(el, {
									asChild: !0,
									children: /* @__PURE__ */ (0, R.jsxs)(Uc, {
										variant: "ghost",
										className: "bx-scope-button",
										children: ["Xem phạm vi & điều kiện", /* @__PURE__ */ (0, R.jsx)(Le, { size: 14 })]
									})
								}), /* @__PURE__ */ (0, R.jsxs)(rl, {
									className: "bx-dialog",
									children: [
										/* @__PURE__ */ (0, R.jsxs)(il, { children: [
											/* @__PURE__ */ (0, R.jsxs)("span", {
												className: "bx-label",
												children: ["GÓI ", e.name.toUpperCase()]
											}),
											/* @__PURE__ */ (0, R.jsxs)(al, { children: [e.name, ", theo điều kiện thực tế."] }),
											/* @__PURE__ */ (0, R.jsx)(ol, { children: e.desc })
										] }),
										/* @__PURE__ */ (0, R.jsx)("ul", {
											className: "bx-dialog-checks",
											children: e.items.map((e) => /* @__PURE__ */ (0, R.jsxs)("li", { children: [/* @__PURE__ */ (0, R.jsx)(ge, { size: 17 }), e] }, e))
										}),
										/* @__PURE__ */ (0, R.jsxs)("div", {
											className: "bx-dialog-note",
											children: [/* @__PURE__ */ (0, R.jsx)("strong", { children: "Thống nhất trước khi nhận lịch" }), /* @__PURE__ */ (0, R.jsx)("p", { children: "Giá tham khảo chưa gồm cầu thang, đồ cồng kềnh, phí chờ, thêm người, ngoài giờ và đặt cọc hộp nếu có. Số hộp, tải trọng, hạng mục đóng gói và điều kiện trách nhiệm được xác nhận riêng." })]
										}),
										/* @__PURE__ */ (0, R.jsx)(hl, {
											href: "/dat-lich?goi=" + e.key,
											children: "Gửi thông tin khảo sát"
										})
									]
								})] })]
							})
						]
					}, e.key))
				}),
				/* @__PURE__ */ (0, R.jsxs)("div", {
					className: "bx-pricing-note",
					children: [/* @__PURE__ */ (0, R.jsxs)("span", { children: [/* @__PURE__ */ (0, R.jsx)(Se, { size: 18 }), "Chi phí phát sinh được tách rõ và thống nhất trước khi thực hiện."] }), /* @__PURE__ */ (0, R.jsxs)("a", {
						href: "/dich-vu#so-sanh",
						children: ["So sánh chi tiết các gói", /* @__PURE__ */ (0, R.jsx)(A, { size: 17 })]
					})]
				})
			]
		})
	});
}
function vl() {
	return /* @__PURE__ */ (0, R.jsxs)("section", {
		className: "bx-section bx-wrap",
		id: "hanh-trinh",
		children: [/* @__PURE__ */ (0, R.jsx)(ml, {
			number: "03",
			eyebrow: "QUY TRÌNH PHỐI HỢP",
			title: /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [
				"Biết bước tiếp theo.",
				/* @__PURE__ */ (0, R.jsx)("br", {}),
				" ",
				/* @__PURE__ */ (0, R.jsx)("em", { children: "An tâm hơn từ đầu." })
			] }),
			children: /* @__PURE__ */ (0, R.jsx)("p", { children: "Bạn chuẩn bị gì, BOXANH hỗ trợ gì? Khám phá từng bước trước, trong và sau ngày chuyển." })
		}), /* @__PURE__ */ (0, R.jsxs)(Wc, {
			defaultValue: "0",
			className: "bx-journey-tabs",
			children: [/* @__PURE__ */ (0, R.jsx)(Kc, {
				className: "bx-journey-list",
				"aria-label": "Các bước chuyển trọ",
				children: sl.map((e, t) => {
					let n = fl[e.icon];
					return /* @__PURE__ */ (0, R.jsxs)(qc, {
						value: String(t),
						className: "bx-journey-trigger",
						children: [
							/* @__PURE__ */ (0, R.jsxs)("span", {
								className: "bx-step-circle",
								children: ["0", t + 1]
							}),
							/* @__PURE__ */ (0, R.jsxs)("span", { children: [/* @__PURE__ */ (0, R.jsxs)("small", { children: ["BƯỚC ", t + 1] }), e.short] }),
							/* @__PURE__ */ (0, R.jsx)(n, { size: 20 })
						]
					}, t);
				})
			}), sl.map((e, t) => {
				let n = fl[e.icon];
				return /* @__PURE__ */ (0, R.jsxs)(Jc, {
					value: String(t),
					className: "bx-journey-panel",
					children: [/* @__PURE__ */ (0, R.jsxs)("div", {
						className: "bx-journey-visual",
						children: [
							/* @__PURE__ */ (0, R.jsxs)("span", {
								className: "bx-journey-big",
								children: ["0", t + 1]
							}),
							/* @__PURE__ */ (0, R.jsxs)("div", {
								className: "bx-journey-illustration",
								children: [/* @__PURE__ */ (0, R.jsx)(n, {
									size: 100,
									strokeWidth: 1
								}), /* @__PURE__ */ (0, R.jsx)("span", { children: /* @__PURE__ */ (0, R.jsx)(me, { size: 25 }) })]
							}),
							/* @__PURE__ */ (0, R.jsx)("p", { children: e.you })
						]
					}), /* @__PURE__ */ (0, R.jsxs)("div", {
						className: "bx-journey-copy",
						children: [
							/* @__PURE__ */ (0, R.jsx)("span", {
								className: "bx-label",
								children: e.kicker
							}),
							/* @__PURE__ */ (0, R.jsx)("h3", { children: e.title }),
							/* @__PURE__ */ (0, R.jsx)("p", { children: e.description }),
							/* @__PURE__ */ (0, R.jsx)("ul", { children: e.tasks.map((e) => /* @__PURE__ */ (0, R.jsxs)("li", { children: [/* @__PURE__ */ (0, R.jsx)(ge, { size: 17 }), e] }, e)) }),
							/* @__PURE__ */ (0, R.jsxs)("a", {
								className: "bx-inline-link",
								href: e.link,
								children: [e.cta, /* @__PURE__ */ (0, R.jsx)(A, { size: 18 })]
							})
						]
					})]
				}, t);
			})]
		})]
	});
}
function yl() {
	let [e, t] = (0, E.useState)(0);
	return /* @__PURE__ */ (0, R.jsx)("section", {
		className: "bx-boxes",
		id: "hop",
		children: /* @__PURE__ */ (0, R.jsxs)("div", {
			className: "bx-wrap",
			children: [
				/* @__PURE__ */ (0, R.jsx)(ml, {
					number: "04",
					eyebrow: "HỘP BOXANH & GIAO NHẬN",
					light: !0,
					title: /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [
						"Đồ đến nơi.",
						/* @__PURE__ */ (0, R.jsx)("br", {}),
						" ",
						/* @__PURE__ */ (0, R.jsx)("em", { children: "Hộp đi tiếp." })
					] }),
					children: /* @__PURE__ */ (0, R.jsx)("p", { children: "Thiết kế theo hướng bền, dùng nhiều lần, dễ vệ sinh, dễ thu hồi và có khả năng tái chế khi kết thúc vòng đời." })
				}),
				/* @__PURE__ */ (0, R.jsxs)("div", {
					className: "bx-box-grid",
					children: [/* @__PURE__ */ (0, R.jsxs)("div", {
						className: "bx-box-story",
						"data-bx-reveal": !0,
						children: [
							/* @__PURE__ */ (0, R.jsx)("div", {
								className: "bx-box-methods",
								children: [
									[
										Ue,
										"Mỗi hộp, một QR riêng.",
										"Quản lý vị trí, đơn liên quan và trạng thái của hộp theo lộ trình dự kiến."
									],
									[
										fe,
										"Mỗi lần đóng, một mã tem niêm phong.",
										"Đối tác quét QR và chụp tem niêm phong khi nhận; kiểm tra lại tình trạng khi giao."
									],
									[
										Ye,
										"Mỗi lượt dùng, kiểm tra lại.",
										"Thu hồi, kiểm tra và vệ sinh trước khi đưa hộp đạt yêu cầu vào lượt tiếp theo."
									]
								].map(([e, t, n]) => /* @__PURE__ */ (0, R.jsxs)("div", { children: [/* @__PURE__ */ (0, R.jsx)("span", { children: /* @__PURE__ */ (0, R.jsx)(e, { size: 24 }) }), /* @__PURE__ */ (0, R.jsxs)("div", { children: [/* @__PURE__ */ (0, R.jsx)("h3", { children: t }), /* @__PURE__ */ (0, R.jsx)("p", { children: n })] })] }, t))
							}),
							/* @__PURE__ */ (0, R.jsxs)("div", {
								className: "bx-qr-record",
								children: [
									/* @__PURE__ */ (0, R.jsxs)("div", {
										className: "bx-qr-icon",
										children: [/* @__PURE__ */ (0, R.jsx)(Ue, { size: 38 }), /* @__PURE__ */ (0, R.jsx)("small", { children: "QR" })]
									}),
									/* @__PURE__ */ (0, R.jsxs)("div", { children: [
										/* @__PURE__ */ (0, R.jsx)("span", {
											className: "bx-label",
											children: "THẺ HỘP MINH HỌA"
										}),
										/* @__PURE__ */ (0, R.jsxs)("strong", { children: ["BX-000128 ", /* @__PURE__ */ (0, R.jsx)("small", { children: "(1)" })] }),
										/* @__PURE__ */ (0, R.jsxs)("p", { children: [
											"Hộp tái sử dụng · Đơn BX2027-0015",
											/* @__PURE__ */ (0, R.jsx)("br", {}),
											" Ngày nhận 12/01/2027 · 10 hộp của đơn"
										] })
									] }),
									/* @__PURE__ */ (0, R.jsx)("a", {
										href: "/hop-minh-hoa",
										"aria-label": "Xem thông tin hộp minh họa",
										children: /* @__PURE__ */ (0, R.jsx)(A, { size: 22 })
									})
								]
							}),
							/* @__PURE__ */ (0, R.jsxs)("a", {
								className: "bx-inline-link",
								href: "/dich-vu#hop",
								children: ["Tiêu chí hộp & hướng dẫn sử dụng", /* @__PURE__ */ (0, R.jsx)(A, { size: 18 })]
							})
						]
					}), /* @__PURE__ */ (0, R.jsxs)("div", {
						className: "bx-box-experience",
						children: [/* @__PURE__ */ (0, R.jsxs)("div", {
							className: "n7-box-specimen",
							children: [/* @__PURE__ */ (0, R.jsx)("img", {
								src: "/assets/boxanh-concept.webp",
								width: "1536",
								height: "1024",
								loading: "lazy",
								alt: "Hình ý tưởng hộp nhựa xanh tái sử dụng"
							}), /* @__PURE__ */ (0, R.jsx)("p", { children: "Hình ý tưởng tạo bằng AI · Loại hộp và thông số thực tế được xác nhận sau khảo sát." })]
						}), /* @__PURE__ */ (0, R.jsxs)("div", {
							className: "bx-lifecycle",
							children: [
								/* @__PURE__ */ (0, R.jsxs)("div", {
									className: "bx-lifecycle-top",
									children: [/* @__PURE__ */ (0, R.jsx)("span", {
										className: "bx-label",
										children: "VÒNG ĐỜI HỘP MINH HỌA"
									}), /* @__PURE__ */ (0, R.jsxs)("span", {
										className: "bx-live-dot",
										children: [
											"0",
											e + 1,
											" / 06"
										]
									})]
								}),
								/* @__PURE__ */ (0, R.jsxs)("div", {
									className: "bx-lifecycle-current",
									role: "status",
									"aria-live": "polite",
									children: [/* @__PURE__ */ (0, R.jsx)("h3", { children: ll[e][1] }), /* @__PURE__ */ (0, R.jsx)("p", { children: ll[e][2] })]
								}),
								/* @__PURE__ */ (0, R.jsx)("div", {
									className: "bx-lifecycle-buttons",
									role: "group",
									"aria-label": "Khám phá vòng đời hộp",
									children: ll.map((n, r) => /* @__PURE__ */ (0, R.jsxs)("button", {
										type: "button",
										onClick: () => t(r),
										"aria-pressed": e === r,
										children: [/* @__PURE__ */ (0, R.jsxs)("span", { children: ["0", r + 1] }), n[0]]
									}, r))
								})
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, R.jsxs)("div", {
					className: "bx-box-foot",
					children: [/* @__PURE__ */ (0, R.jsx)("p", { children: "Hộp lỗi → Bảo trì · Không xác định vị trí → Thất lạc · Hết vòng đời → Kiểm tra khả năng tái chế." }), /* @__PURE__ */ (0, R.jsx)("small", { children: "QR, tem niêm phong và lịch sử quét là quy trình dự kiến. Màn hình dùng dữ liệu minh họa." })]
				})
			]
		})
	});
}
function bl() {
	return /* @__PURE__ */ (0, R.jsxs)("section", {
		className: "bx-section bx-wrap bx-surplus",
		id: "do-khong-mang",
		children: [/* @__PURE__ */ (0, R.jsxs)("div", {
			className: "bx-surplus-gallery",
			"data-bx-reveal": !0,
			children: [
				/* @__PURE__ */ (0, R.jsxs)("div", {
					className: "bx-surplus-room",
					children: [/* @__PURE__ */ (0, R.jsx)("img", {
						src: "/assets/room-real.webp",
						width: "1200",
						height: "1800",
						loading: "lazy",
						alt: "Ảnh tham khảo căn phòng nhỏ gọn gàng"
					}), /* @__PURE__ */ (0, R.jsx)("span", { children: "Nhường chỗ cho điều bạn cần." })]
				}),
				/* @__PURE__ */ (0, R.jsxs)("div", {
					className: "bx-surplus-book",
					children: [/* @__PURE__ */ (0, R.jsx)("img", {
						src: "/assets/books.jpg",
						width: "1200",
						height: "800",
						loading: "lazy",
						alt: "Ảnh minh họa sách còn giá trị sử dụng"
					}), /* @__PURE__ */ (0, R.jsx)("span", { children: "Một món đồ. Một câu chuyện tiếp." })]
				}),
				/* @__PURE__ */ (0, R.jsxs)("div", {
					className: "bx-reuse-stamp",
					children: [/* @__PURE__ */ (0, R.jsx)(ze, { size: 28 }), /* @__PURE__ */ (0, R.jsxs)("span", { children: [
						"CÒN TỐT",
						/* @__PURE__ */ (0, R.jsx)("br", {}),
						" CÒN GIÁ TRỊ"
					] })]
				}),
				/* @__PURE__ */ (0, R.jsx)("small", { children: "Ảnh tham khảo · Không phải món đồ đang mở bán" })
			]
		}), /* @__PURE__ */ (0, R.jsxs)("div", {
			className: "bx-surplus-copy",
			children: [
				/* @__PURE__ */ (0, R.jsx)(pl, { children: "05 / ĐỒ KHÔNG MANG THEO" }),
				/* @__PURE__ */ (0, R.jsxs)("h2", { children: [
					"Gọn phòng cũ.",
					/* @__PURE__ */ (0, R.jsx)("br", {}),
					" ",
					/* @__PURE__ */ (0, R.jsx)("em", { children: "Giữ lại giá trị." })
				] }),
				/* @__PURE__ */ (0, R.jsx)("p", { children: "Đồ còn tốt có thể được thu mua hoặc ký gửi. Đồ hỏng cần kiểm tra khả năng thu gom và đầu ra phù hợp." }),
				/* @__PURE__ */ (0, R.jsxs)(Wc, {
					defaultValue: "buyback",
					className: "bx-surplus-tabs",
					children: [
						/* @__PURE__ */ (0, R.jsxs)(Kc, {
							className: "bx-line-tabs",
							"aria-label": "Phương án đồ không mang theo",
							children: [
								/* @__PURE__ */ (0, R.jsx)(qc, {
									value: "buyback",
									className: "bx-line-tab",
									children: "Thu mua"
								}),
								/* @__PURE__ */ (0, R.jsx)(qc, {
									value: "consign",
									className: "bx-line-tab",
									children: "Ký gửi"
								}),
								/* @__PURE__ */ (0, R.jsx)(qc, {
									value: "recycle",
									className: "bx-line-tab",
									children: "Thu gom"
								})
							]
						}),
						/* @__PURE__ */ (0, R.jsxs)(Jc, {
							value: "buyback",
							className: "bx-surplus-panel",
							children: [
								/* @__PURE__ */ (0, R.jsx)("h3", { children: "Đã nhận đồ. Đã chốt giá." }),
								/* @__PURE__ */ (0, R.jsx)("p", { children: "Giá thu mua được trừ vào phí chuyển sau thẩm định, đồng ý và tiếp nhận. Phần giá trị vượt phí được đối soát riêng." }),
								/* @__PURE__ */ (0, R.jsxs)("div", {
									className: "bx-credit-example",
									children: [
										/* @__PURE__ */ (0, R.jsxs)("div", { children: [/* @__PURE__ */ (0, R.jsx)("span", { children: "Phí chuyển minh họa" }), /* @__PURE__ */ (0, R.jsx)("strong", { children: "500.000đ" })] }),
										/* @__PURE__ */ (0, R.jsxs)("div", { children: [/* @__PURE__ */ (0, R.jsx)("span", { children: "Thu mua đã chốt" }), /* @__PURE__ */ (0, R.jsx)("strong", { children: "−150.000đ" })] }),
										/* @__PURE__ */ (0, R.jsxs)("div", { children: [/* @__PURE__ */ (0, R.jsx)("span", { children: "Còn thanh toán" }), /* @__PURE__ */ (0, R.jsx)("strong", { children: "350.000đ" })] }),
										/* @__PURE__ */ (0, R.jsx)("small", { children: "Ví dụ minh họa, không phải định giá cam kết." })
									]
								})
							]
						}),
						/* @__PURE__ */ (0, R.jsxs)(Jc, {
							value: "consign",
							className: "bx-surplus-panel",
							children: [
								/* @__PURE__ */ (0, R.jsx)("h3", { children: "Trao tiếp sau khi bán được." }),
								/* @__PURE__ */ (0, R.jsx)("p", { children: "Giá bán, phí ký gửi, thời hạn và cách đối soát được thống nhất trước tiếp nhận. Ký gửi thanh toán sau bán, không trừ trước vào phí chuyển." }),
								/* @__PURE__ */ (0, R.jsxs)("ol", {
									className: "bx-mini-flow",
									children: [
										/* @__PURE__ */ (0, R.jsx)("li", { children: "Thẩm định & thỏa thuận" }),
										/* @__PURE__ */ (0, R.jsx)("li", { children: "Tiếp nhận & tìm người mua" }),
										/* @__PURE__ */ (0, R.jsx)("li", { children: "Bán được & đối soát" })
									]
								})
							]
						}),
						/* @__PURE__ */ (0, R.jsxs)(Jc, {
							value: "recycle",
							className: "bx-surplus-panel",
							children: [
								/* @__PURE__ */ (0, R.jsx)("h3", { children: "Đúng loại đồ. Đúng đầu ra." }),
								/* @__PURE__ */ (0, R.jsx)("p", { children: "Kiểm tra chất liệu và đơn vị tiếp nhận trước xác nhận thu gom. Không cam kết mọi món đồ đều được tái chế." }),
								/* @__PURE__ */ (0, R.jsx)("div", {
									className: "bx-soft-note",
									children: "Pin, hóa chất, vật sắc nhọn và rác nguy hại cần kênh chuyên biệt."
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, R.jsxs)("a", {
					className: "bx-inline-link",
					href: "/gui-do",
					children: ["Gửi thông tin đồ cần xử lý", /* @__PURE__ */ (0, R.jsx)(A, { size: 18 })]
				})
			]
		})]
	});
}
function xl() {
	return /* @__PURE__ */ (0, R.jsx)("section", {
		className: "bx-guides",
		id: "huong-dan",
		children: /* @__PURE__ */ (0, R.jsxs)("div", {
			className: "bx-wrap",
			children: [
				/* @__PURE__ */ (0, R.jsx)(ml, {
					number: "06",
					eyebrow: "CHUẨN BỊ CÙNG BOXANH",
					title: /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [
						"Chuyển trọ lần đầu?",
						/* @__PURE__ */ (0, R.jsx)("br", {}),
						" ",
						/* @__PURE__ */ (0, R.jsx)("em", { children: "Có hướng dẫn để bắt đầu." })
					] }),
					children: /* @__PURE__ */ (0, R.jsxs)("a", {
						href: "/dich-vu#chuan-bi",
						className: "bx-inline-link",
						children: ["Xem danh sách chuẩn bị", /* @__PURE__ */ (0, R.jsx)(A, { size: 18 })]
					})
				}),
				/* @__PURE__ */ (0, R.jsx)("div", {
					className: "bx-guide-grid",
					children: [
						[
							ke,
							"01",
							"Đóng hộp có thứ tự",
							"Tách đồ theo nhóm. Giữ riêng giấy tờ, đồ quý giá; ghi nhận đồ ngoài hộp.",
							"/dich-vu#chuan-bi"
						],
						[
							Se,
							"02",
							"Hiểu khoản phí phát sinh",
							"Cầu thang, đường xe vào, phí chờ và đồ cồng kềnh: trao đổi trước, tránh bị động.",
							"/dich-vu#phu-phi"
						],
						[
							qe,
							"03",
							"Khi đồ có bất thường",
							"Giữ tem niêm phong và ảnh hiện trạng. Gửi mã đơn để CSKH đối chiếu hồ sơ giao nhận.",
							"/ho-tro"
						]
					].map(([e, t, n, r, i]) => /* @__PURE__ */ (0, R.jsxs)("a", {
						className: "bx-guide-card",
						href: i,
						"data-bx-reveal": !0,
						children: [
							/* @__PURE__ */ (0, R.jsxs)("div", { children: [/* @__PURE__ */ (0, R.jsx)(e, { size: 28 }), /* @__PURE__ */ (0, R.jsx)("span", { children: t })] }),
							/* @__PURE__ */ (0, R.jsx)("h3", { children: n }),
							/* @__PURE__ */ (0, R.jsx)("p", { children: r }),
							/* @__PURE__ */ (0, R.jsxs)("span", {
								className: "bx-guide-link",
								children: ["Đọc hướng dẫn", /* @__PURE__ */ (0, R.jsx)(A, { size: 17 })]
							})
						]
					}, t))
				}),
				/* @__PURE__ */ (0, R.jsxs)("div", {
					className: "bx-area-strip",
					id: "khu-vuc",
					children: [
						/* @__PURE__ */ (0, R.jsx)("div", {
							className: "bx-area-icon",
							children: /* @__PURE__ */ (0, R.jsx)(De, { size: 33 })
						}),
						/* @__PURE__ */ (0, R.jsxs)("div", { children: [
							/* @__PURE__ */ (0, R.jsx)("span", {
								className: "bx-label",
								children: "BẮT ĐẦU TẠI VINH, NGHỆ AN"
							}),
							/* @__PURE__ */ (0, R.jsx)("h3", { children: "Gần bạn hơn. Khảo sát kỹ hơn." }),
							/* @__PURE__ */ (0, R.jsx)("p", { children: "Địa chỉ, đường xe vào, cầu thang và lịch mong muốn giúp BOXANH chọn phương án phù hợp. Đơn ngoài khu vực cần xác nhận riêng." })
						] }),
						/* @__PURE__ */ (0, R.jsxs)("a", {
							href: "/dat-lich",
							className: "bx-inline-link",
							children: ["Gửi địa chỉ khảo sát", /* @__PURE__ */ (0, R.jsx)(O, { size: 18 })]
						})
					]
				})
			]
		})
	});
}
function Sl({ config: e }) {
	return /* @__PURE__ */ (0, R.jsxs)("section", {
		className: "bx-section bx-wrap bx-faq",
		id: "cau-hoi",
		children: [/* @__PURE__ */ (0, R.jsxs)("div", {
			className: "bx-faq-intro",
			children: [
				/* @__PURE__ */ (0, R.jsx)(pl, { children: "THÔNG TIN CẦN RÕ" }),
				/* @__PURE__ */ (0, R.jsxs)("h2", { children: [
					"Cứ hỏi.",
					/* @__PURE__ */ (0, R.jsx)("br", {}),
					" ",
					/* @__PURE__ */ (0, R.jsx)("em", { children: "Cùng làm rõ." })
				] }),
				/* @__PURE__ */ (0, R.jsx)("p", { children: "Phạm vi, chi phí, hộp và giao nhận — những câu hỏi thường gặp trước khi đặt lịch." }),
				/* @__PURE__ */ (0, R.jsxs)("div", {
					className: "bx-faq-contact",
					children: [/* @__PURE__ */ (0, R.jsx)("span", { children: /* @__PURE__ */ (0, R.jsx)(Ne, { size: 22 }) }), /* @__PURE__ */ (0, R.jsxs)("div", { children: [/* @__PURE__ */ (0, R.jsx)("small", { children: "TRAO ĐỔI VỚI BOXANH" }), /* @__PURE__ */ (0, R.jsx)("a", {
						href: "tel:" + e.phone,
						children: dl(e.phone)
					})] })]
				}),
				/* @__PURE__ */ (0, R.jsxs)("a", {
					href: "/ho-tro",
					className: "bx-inline-link",
					children: ["CSKH & tiếp nhận sự cố", /* @__PURE__ */ (0, R.jsx)(A, { size: 18 })]
				})
			]
		}), /* @__PURE__ */ (0, R.jsx)(Yc, {
			type: "single",
			collapsible: !0,
			className: "bx-faq-list",
			children: cl.map(([e, t], n) => /* @__PURE__ */ (0, R.jsxs)(Xc, {
				value: "faq-" + n,
				className: "bx-faq-item",
				children: [/* @__PURE__ */ (0, R.jsx)(Zc, {
					className: "bx-faq-trigger",
					children: e
				}), /* @__PURE__ */ (0, R.jsx)(Qc, {
					className: "bx-faq-content",
					children: t
				})]
			}, n))
		})]
	});
}
//#endregion
//#region src/portal-scenes-v10.jsx
function Cl({ href: e, children: t, light: n = !1 }) {
	return /* @__PURE__ */ (0, R.jsxs)("a", {
		className: "v10-action " + (n ? "v10-action-light" : ""),
		href: e,
		children: [t, /* @__PURE__ */ (0, R.jsx)(A, { size: 19 })]
	});
}
function wl({ children: e }) {
	return /* @__PURE__ */ (0, R.jsx)("p", {
		className: "v10-label",
		children: e
	});
}
function Tl({ c: e, onQuote: t }) {
	return /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [
		/* @__PURE__ */ (0, R.jsxs)("section", {
			className: "v10-moving",
			children: [/* @__PURE__ */ (0, R.jsxs)("div", {
				className: "n7-wrap v10-moving-layout",
				children: [/* @__PURE__ */ (0, R.jsxs)("div", {
					className: "v10-moving-copy",
					children: [
						/* @__PURE__ */ (0, R.jsx)(wl, { children: "BOXANH / CHUYỂN TRỌ TẠI VINH" }),
						/* @__PURE__ */ (0, R.jsxs)("h1", { children: [
							"Đồ đạc đến nơi.",
							/* @__PURE__ */ (0, R.jsx)("br", {}),
							/* @__PURE__ */ (0, R.jsx)("em", { children: "Bạn đến khởi đầu mới." })
						] }),
						/* @__PURE__ */ (0, R.jsxs)("p", { children: [
							"Giao hộp trước. Chuyển đồ đúng kế hoạch.",
							/* @__PURE__ */ (0, R.jsx)("br", {}),
							"Thu hồi hộp khi bạn đã sắp xếp xong."
						] }),
						/* @__PURE__ */ (0, R.jsx)(Cl, {
							href: "/dat-lich?goi=full",
							light: !0,
							children: "Lên kế hoạch chuyển trọ"
						}),
						/* @__PURE__ */ (0, R.jsxs)("a", {
							className: "v10-underlink",
							href: "/dich-vu#so-sanh",
							children: ["So sánh phạm vi các gói ", /* @__PURE__ */ (0, R.jsx)(O, { size: 16 })]
						})
					]
				}), /* @__PURE__ */ (0, R.jsxs)("div", {
					className: "v10-dispatch",
					"aria-label": "Minh họa kế hoạch chuyển trọ",
					children: [
						/* @__PURE__ */ (0, R.jsxs)("div", {
							className: "v10-dispatch-head",
							children: [
								/* @__PURE__ */ (0, R.jsx)($e, { size: 25 }),
								/* @__PURE__ */ (0, R.jsx)("span", { children: "HÀNH TRÌNH CỦA BẠN" }),
								/* @__PURE__ */ (0, R.jsx)("span", { children: "VINH" })
							]
						}),
						/* @__PURE__ */ (0, R.jsxs)("div", {
							className: "v10-address",
							children: [/* @__PURE__ */ (0, R.jsx)("b", { children: "A" }), /* @__PURE__ */ (0, R.jsxs)("div", { children: [
								/* @__PURE__ */ (0, R.jsx)("small", { children: "NƠI BẮT ĐẦU" }),
								/* @__PURE__ */ (0, R.jsx)("strong", { children: "Phòng hiện tại" }),
								/* @__PURE__ */ (0, R.jsx)("span", { children: "Khảo sát · Giao hộp · Chuẩn bị" })
							] })]
						}),
						/* @__PURE__ */ (0, R.jsxs)("div", {
							className: "v10-journey-line",
							children: [/* @__PURE__ */ (0, R.jsx)("i", {}), /* @__PURE__ */ (0, R.jsx)("span", { children: "Thống nhất quãng đường & điều kiện bốc xếp" })]
						}),
						/* @__PURE__ */ (0, R.jsxs)("div", {
							className: "v10-address",
							children: [/* @__PURE__ */ (0, R.jsx)("b", { children: "B" }), /* @__PURE__ */ (0, R.jsxs)("div", { children: [
								/* @__PURE__ */ (0, R.jsx)("small", { children: "KHỞI ĐẦU MỚI" }),
								/* @__PURE__ */ (0, R.jsx)("strong", { children: "Phòng mới của bạn" }),
								/* @__PURE__ */ (0, R.jsx)("span", { children: "Giao nhận · Kiểm đếm · Hẹn thu hộp" })
							] })]
						}),
						/* @__PURE__ */ (0, R.jsxs)("div", {
							className: "v10-dispatch-foot",
							children: [/* @__PURE__ */ (0, R.jsx)(ke, { size: 18 }), /* @__PURE__ */ (0, R.jsx)("span", { children: "Hộp dùng lại, theo từng lượt chuyển" })]
						}),
						/* @__PURE__ */ (0, R.jsx)("small", {
							className: "v10-demo-note",
							children: "Sơ đồ quy trình · Chưa xác nhận lịch vận chuyển"
						})
					]
				})]
			}), /* @__PURE__ */ (0, R.jsxs)("div", {
				className: "n7-wrap v10-moving-bottom",
				children: [
					/* @__PURE__ */ (0, R.jsxs)("span", { children: [/* @__PURE__ */ (0, R.jsx)(Se, { size: 18 }), " Khảo sát trước khi chốt"] }),
					/* @__PURE__ */ (0, R.jsxs)("span", { children: [/* @__PURE__ */ (0, R.jsx)(qe, { size: 18 }), " Giao nhận có kiểm đếm"] }),
					/* @__PURE__ */ (0, R.jsxs)("span", { children: [/* @__PURE__ */ (0, R.jsx)(Ve, { size: 18 }), " Thu hồi hộp theo lịch"] })
				]
			})]
		}),
		/* @__PURE__ */ (0, R.jsxs)("section", {
			className: "n7-wrap v10-moving-story",
			children: [/* @__PURE__ */ (0, R.jsxs)("div", { children: [
				/* @__PURE__ */ (0, R.jsx)(wl, { children: "MỘT PHÒNG TRỌ. NHIỀU VIỆC CẦN LO." }),
				/* @__PURE__ */ (0, R.jsxs)("h2", { children: [
					"Gói việc cần làm",
					/* @__PURE__ */ (0, R.jsx)("br", {}),
					"vào một kế hoạch."
				] }),
				/* @__PURE__ */ (0, R.jsx)("p", { children: "Chọn phần việc phù hợp với bạn. Đồ cồng kềnh, cầu thang và hỗ trợ đóng gói được tách rõ khi khảo sát." }),
				/* @__PURE__ */ (0, R.jsx)(Cl, {
					href: "/huong-dan#checklist",
					children: "Danh sách chuẩn bị"
				})
			] }), /* @__PURE__ */ (0, R.jsxs)("figure", { children: [/* @__PURE__ */ (0, R.jsx)("img", {
				src: "/assets/moving.webp",
				alt: "Ảnh tham khảo chuẩn bị đồ chuyển nơi ở",
				width: "1200",
				height: "800",
				loading: "lazy"
			}), /* @__PURE__ */ (0, R.jsx)("figcaption", { children: "Chuẩn bị gọn trước ngày chuyển · Ảnh tham khảo" })] })]
		}),
		/* @__PURE__ */ (0, R.jsx)(gl, {
			config: e,
			onQuote: t
		}),
		/* @__PURE__ */ (0, R.jsx)(vl, {}),
		/* @__PURE__ */ (0, R.jsx)(_l, {}),
		/* @__PURE__ */ (0, R.jsxs)("div", {
			className: "n7-wrap v10-crosslinks",
			children: [/* @__PURE__ */ (0, R.jsxs)("a", {
				href: "/don-phong",
				children: ["Cần dọn phòng cũ?", /* @__PURE__ */ (0, R.jsx)(O, { size: 18 })]
			}), /* @__PURE__ */ (0, R.jsxs)("a", {
				href: "/ban-giao",
				children: ["Cần hỗ trợ bàn giao?", /* @__PURE__ */ (0, R.jsx)(O, { size: 18 })]
			})]
		})
	] });
}
var El = [
	{
		name: "Phòng ở",
		icon: ke,
		copy: "Sàn, bề mặt, góc phòng và nội thất trong phạm vi đã khảo sát.",
		tasks: [
			"Sàn & góc phòng",
			"Bề mặt & nội thất",
			"Thu gom theo thỏa thuận"
		]
	},
	{
		name: "Bếp & vệ sinh",
		icon: Ye,
		copy: "Thống nhất trước mức độ bám bẩn, thiết bị và vật liệu cần xử lý.",
		tasks: [
			"Bề mặt bếp",
			"Khu vệ sinh",
			"Vật liệu & chất tẩy phù hợp"
		]
	},
	{
		name: "Phòng mới",
		icon: Te,
		copy: "Dọn trước khi đưa đồ vào, theo tình trạng và lịch bạn mong muốn.",
		tasks: [
			"Dọn trước khi chuyển đồ",
			"Kiểm tra lại hiện trạng",
			"Sẵn sàng cho ngày nhận phòng"
		]
	}
];
function Dl() {
	let [e, t] = (0, E.useState)(0), n = El[e], r = n.icon;
	return /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [
		/* @__PURE__ */ (0, R.jsxs)("section", {
			className: "v10-cleaning",
			children: [/* @__PURE__ */ (0, R.jsxs)("div", {
				className: "v10-cleaning-photo",
				children: [/* @__PURE__ */ (0, R.jsx)("img", {
					src: "/assets/room-real.webp",
					alt: "Ảnh tham khảo căn phòng sáng và gọn gàng",
					width: "900",
					height: "1350"
				}), /* @__PURE__ */ (0, R.jsx)("span", { children: "KHÔNG GIAN CHO MỘT KHỞI ĐẦU MỚI" })]
			}), /* @__PURE__ */ (0, R.jsxs)("div", {
				className: "v10-cleaning-copy",
				children: [
					/* @__PURE__ */ (0, R.jsx)(wl, { children: "BOXANH / CHĂM SÓC KHÔNG GIAN SỐNG" }),
					/* @__PURE__ */ (0, R.jsxs)("h1", { children: [
						"Không gian sạch.",
						/* @__PURE__ */ (0, R.jsx)("br", {}),
						/* @__PURE__ */ (0, R.jsx)("em", { children: "Tâm trí nhẹ." })
					] }),
					/* @__PURE__ */ (0, R.jsxs)("p", { children: [
						"Dọn phòng cũ trước khi trả.",
						/* @__PURE__ */ (0, R.jsx)("br", {}),
						"Dọn phòng mới trước khi vào."
					] }),
					/* @__PURE__ */ (0, R.jsxs)("div", {
						className: "v10-cleaning-note",
						children: [/* @__PURE__ */ (0, R.jsx)(Ye, { size: 26 }), /* @__PURE__ */ (0, R.jsxs)("span", { children: [
							"Khảo sát hiện trạng",
							/* @__PURE__ */ (0, R.jsx)("br", {}),
							/* @__PURE__ */ (0, R.jsx)("strong", { children: "Chốt đúng hạng mục bạn cần" })
						] })]
					}),
					/* @__PURE__ */ (0, R.jsx)(Cl, {
						href: "/dat-lich?goi=cleaning",
						children: "Đặt khảo sát dọn phòng"
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, R.jsxs)("section", {
			className: "n7-wrap v10-clean-scope",
			children: [/* @__PURE__ */ (0, R.jsxs)("div", {
				className: "v10-clean-section-head",
				children: [/* @__PURE__ */ (0, R.jsx)(wl, { children: "BẤM CHỌN KHU VỰC BẠN MUỐN DỌN" }), /* @__PURE__ */ (0, R.jsx)("h2", { children: "Sạch đúng chỗ bạn cần." })]
			}), /* @__PURE__ */ (0, R.jsxs)("div", {
				className: "v10-clean-workspace",
				children: [/* @__PURE__ */ (0, R.jsx)("div", {
					className: "v10-clean-zone-list",
					role: "tablist",
					"aria-label": "Khu vực cần dọn",
					children: El.map((n, r) => /* @__PURE__ */ (0, R.jsxs)("button", {
						id: "v10-clean-tab-" + r,
						type: "button",
						role: "tab",
						"aria-selected": e === r,
						"aria-controls": "v10-clean-panel",
						tabIndex: e === r ? 0 : -1,
						onClick: () => t(r),
						onKeyDown: (e) => {
							let n;
							["ArrowDown", "ArrowRight"].includes(e.key) && (n = (r + 1) % 3), ["ArrowUp", "ArrowLeft"].includes(e.key) && (n = (r + 2) % 3), e.key === "Home" && (n = 0), e.key === "End" && (n = 2), n !== void 0 && (e.preventDefault(), t(n), document.getElementById("v10-clean-tab-" + n)?.focus());
						},
						children: [
							/* @__PURE__ */ (0, R.jsxs)("span", { children: ["0", r + 1] }),
							/* @__PURE__ */ (0, R.jsx)("strong", { children: n.name }),
							/* @__PURE__ */ (0, R.jsx)(O, { size: 20 })
						]
					}, n.name))
				}), /* @__PURE__ */ (0, R.jsxs)("div", {
					id: "v10-clean-panel",
					role: "tabpanel",
					"aria-labelledby": "v10-clean-tab-" + e,
					className: "v10-clean-panel",
					children: [
						/* @__PURE__ */ (0, R.jsx)(r, { size: 44 }),
						/* @__PURE__ */ (0, R.jsx)("h3", { children: n.name }),
						/* @__PURE__ */ (0, R.jsx)("p", { children: n.copy }),
						/* @__PURE__ */ (0, R.jsx)("div", { children: n.tasks.map((e) => /* @__PURE__ */ (0, R.jsxs)("span", { children: [/* @__PURE__ */ (0, R.jsx)(ge, { size: 16 }), e] }, e)) }),
						/* @__PURE__ */ (0, R.jsx)("small", { children: "Hạng mục cụ thể, vật tư, thời gian và phí được xác nhận sau khảo sát." })
					]
				})]
			})]
		}),
		/* @__PURE__ */ (0, R.jsx)("section", {
			className: "v10-clean-process",
			children: /* @__PURE__ */ (0, R.jsxs)("div", {
				className: "n7-wrap",
				children: [/* @__PURE__ */ (0, R.jsxs)("div", { children: [
					/* @__PURE__ */ (0, R.jsx)(wl, { children: "TỪ HIỆN TRẠNG ĐẾN HOÀN TẤT" }),
					/* @__PURE__ */ (0, R.jsxs)("h2", { children: [
						"Ba bước.",
						/* @__PURE__ */ (0, R.jsx)("br", {}),
						"Một phòng sạch."
					] }),
					/* @__PURE__ */ (0, R.jsx)("p", { children: "Nấm mốc, côn trùng, chất thải đặc biệt và sửa chữa cần được khảo sát, xác nhận riêng." })
				] }), /* @__PURE__ */ (0, R.jsx)("ol", { children: [
					["Gửi ảnh hiện trạng", "Địa chỉ, diện tích và ngày bạn muốn dọn."],
					["Thống nhất hạng mục", "BOXANH gửi phạm vi, vật tư và chi phí để bạn đồng ý."],
					["Dọn & kiểm tra", "Thực hiện theo phương án đã chốt, kiểm tra lại cùng khách."]
				].map(([e, t], n) => /* @__PURE__ */ (0, R.jsxs)("li", { children: [/* @__PURE__ */ (0, R.jsxs)("b", { children: ["0", n + 1] }), /* @__PURE__ */ (0, R.jsxs)("div", { children: [/* @__PURE__ */ (0, R.jsx)("h3", { children: e }), /* @__PURE__ */ (0, R.jsx)("p", { children: t })] })] }, e)) })]
			})
		}),
		/* @__PURE__ */ (0, R.jsxs)("div", {
			className: "n7-wrap v10-clean-footer",
			children: [/* @__PURE__ */ (0, R.jsxs)("h2", { children: [
				"Để bạn nhẹ việc,",
				/* @__PURE__ */ (0, R.jsx)("br", {}),
				"phòng mới thêm dễ chịu."
			] }), /* @__PURE__ */ (0, R.jsx)(Cl, {
				href: "/dat-lich?goi=cleaning",
				children: "Gửi yêu cầu dọn phòng"
			})]
		})
	] });
}
var Ol = [
	"Ảnh hiện trạng phòng",
	"Nội thất & vật dụng",
	"Chỉ số điện, nước",
	"Khoản cần đối soát",
	"Chìa khóa & lịch bàn giao"
];
function kl() {
	let [e, t] = (0, E.useState)([]);
	return /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [/* @__PURE__ */ (0, R.jsxs)("section", {
		className: "v10-handover n7-wrap",
		children: [
			/* @__PURE__ */ (0, R.jsxs)("div", {
				className: "v10-handover-caption",
				children: [/* @__PURE__ */ (0, R.jsxs)("span", { children: [/* @__PURE__ */ (0, R.jsx)(Se, { size: 20 }), " HỖ TRỢ BÀN GIAO PHÒNG"] }), /* @__PURE__ */ (0, R.jsx)("span", { children: "BOXANH / VINH, NGHỆ AN" })]
			}),
			/* @__PURE__ */ (0, R.jsxs)("div", {
				className: "v10-handover-title",
				children: [/* @__PURE__ */ (0, R.jsxs)("h1", { children: [
					"Khép lại chỗ cũ.",
					/* @__PURE__ */ (0, R.jsx)("br", {}),
					/* @__PURE__ */ (0, R.jsx)("em", { children: "Rõ ràng từng việc." })
				] }), /* @__PURE__ */ (0, R.jsxs)("div", { children: [/* @__PURE__ */ (0, R.jsx)("p", { children: "Cùng kiểm tra phòng, đối chiếu vật dụng và ghi nhận bàn giao với chủ trọ." }), /* @__PURE__ */ (0, R.jsx)(Cl, {
					href: "/dat-lich?goi=handover",
					children: "Hẹn khảo sát bàn giao"
				})] })]
			}),
			/* @__PURE__ */ (0, R.jsxs)("div", {
				className: "v10-inspection",
				children: [/* @__PURE__ */ (0, R.jsxs)("div", {
					className: "v10-inspection-index",
					children: [
						/* @__PURE__ */ (0, R.jsx)(Te, { size: 42 }),
						/* @__PURE__ */ (0, R.jsxs)("h2", { children: [
							"Trước khi",
							/* @__PURE__ */ (0, R.jsx)("br", {}),
							"trả chìa khóa."
						] }),
						/* @__PURE__ */ (0, R.jsx)("p", { children: "Đánh dấu các phần bạn đã chuẩn bị." }),
						/* @__PURE__ */ (0, R.jsxs)("span", {
							role: "status",
							children: [
								e.length,
								" / ",
								Ol.length,
								" phần đã chuẩn bị"
							]
						}),
						/* @__PURE__ */ (0, R.jsx)("small", { children: "Danh sách cá nhân trên màn hình; chưa phải biên bản bàn giao." })
					]
				}), /* @__PURE__ */ (0, R.jsx)("div", {
					className: "v10-inspection-list",
					children: Ol.map((n, r) => /* @__PURE__ */ (0, R.jsxs)("label", { children: [
						/* @__PURE__ */ (0, R.jsxs)("span", { children: ["0", r + 1] }),
						/* @__PURE__ */ (0, R.jsx)("strong", { children: n }),
						/* @__PURE__ */ (0, R.jsx)("input", {
							type: "checkbox",
							checked: e.includes(r),
							onChange: () => t(e.includes(r) ? e.filter((e) => e !== r) : [...e, r])
						})
					] }, n))
				})]
			})
		]
	}), /* @__PURE__ */ (0, R.jsxs)("section", {
		className: "v10-handover-notes n7-wrap",
		children: [
			/* @__PURE__ */ (0, R.jsxs)("article", { children: [
				/* @__PURE__ */ (0, R.jsx)(wl, { children: "BẠN MANG THEO" }),
				/* @__PURE__ */ (0, R.jsx)("h2", { children: "Thông tin để đối chiếu." }),
				/* @__PURE__ */ (0, R.jsxs)("ul", { children: [
					/* @__PURE__ */ (0, R.jsx)("li", { children: "Hợp đồng hoặc thỏa thuận thuê phòng" }),
					/* @__PURE__ */ (0, R.jsx)("li", { children: "Danh sách đồ nhận khi vào ở" }),
					/* @__PURE__ */ (0, R.jsx)("li", { children: "Ảnh hiện trạng và trao đổi liên quan" }),
					/* @__PURE__ */ (0, R.jsx)("li", { children: "Thông tin điện, nước và lịch hẹn chủ trọ" })
				] })
			] }),
			/* @__PURE__ */ (0, R.jsxs)("article", { children: [
				/* @__PURE__ */ (0, R.jsx)(wl, { children: "BOXANH CÙNG BẠN" }),
				/* @__PURE__ */ (0, R.jsx)("h2", { children: "Kiểm tra và ghi nhận." }),
				/* @__PURE__ */ (0, R.jsxs)("ul", { children: [
					/* @__PURE__ */ (0, R.jsx)("li", { children: "Chụp hiện trạng trước bàn giao" }),
					/* @__PURE__ */ (0, R.jsx)("li", { children: "Đối chiếu nội thất, vật dụng và chỉ số" }),
					/* @__PURE__ */ (0, R.jsx)("li", { children: "Ghi rõ hạng mục cần xử lý thêm" }),
					/* @__PURE__ */ (0, R.jsx)("li", { children: "Xác nhận chìa khóa, ghi nhận bàn giao" })
				] })
			] }),
			/* @__PURE__ */ (0, R.jsxs)("aside", { children: [
				/* @__PURE__ */ (0, R.jsx)(qe, { size: 30 }),
				/* @__PURE__ */ (0, R.jsx)("h3", { children: "Thống nhất rõ từ đầu." }),
				/* @__PURE__ */ (0, R.jsx)("p", { children: "Dọn vệ sinh và sửa chữa nhỏ có thể đặt riêng sau khảo sát. Tiền thuê, tiền cọc do bạn và chủ trọ đối soát; BOXANH không cam kết hoàn trả tiền cọc." }),
				/* @__PURE__ */ (0, R.jsx)(Cl, {
					href: "/dat-lich?goi=handover",
					children: "Gửi hiện trạng phòng"
				})
			] })
		]
	})] });
}
var Al = [
	["Nhận hộp", "Giao theo lịch, cùng kiểm đếm số lượng và tình trạng."],
	["Đóng & chuyển", "Ghi nhóm đồ, giữ đồ quý bên mình, tuân thủ tải trọng được xác nhận."],
	["Dỡ đồ", "Sắp xếp tại phòng mới và hẹn ngày thu hồi."],
	["Dùng tiếp", "Kiểm tra, vệ sinh và đưa hộp đạt yêu cầu vào lượt tiếp theo."]
];
function jl() {
	let [e, t] = (0, E.useState)(0);
	return /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [
		/* @__PURE__ */ (0, R.jsx)("section", {
			className: "v10-boxes",
			children: /* @__PURE__ */ (0, R.jsxs)("div", {
				className: "n7-wrap v10-box-layout",
				children: [/* @__PURE__ */ (0, R.jsxs)("div", { children: [
					/* @__PURE__ */ (0, R.jsx)(wl, { children: "HỆ THỐNG HỘP TÁI SỬ DỤNG" }),
					/* @__PURE__ */ (0, R.jsxs)("h1", { children: [
						"Một chiếc hộp.",
						/* @__PURE__ */ (0, R.jsx)("br", {}),
						/* @__PURE__ */ (0, R.jsx)("em", { children: "Nhiều lần khởi đầu." })
					] }),
					/* @__PURE__ */ (0, R.jsxs)("p", { children: [
						"Đóng đồ có trật tự. Chuyển cùng một hệ thống hộp.",
						/* @__PURE__ */ (0, R.jsx)("br", {}),
						"Dùng xong, BOXANH thu hồi để phục vụ lượt tiếp theo."
					] }),
					/* @__PURE__ */ (0, R.jsx)(Cl, {
						href: "/dat-lich?goi=boxes",
						children: "Nhận báo giá thuê hộp"
					}),
					/* @__PURE__ */ (0, R.jsxs)("a", {
						className: "v10-underlink",
						href: "/hop-minh-hoa",
						children: ["Xem thẻ hộp minh họa ", /* @__PURE__ */ (0, R.jsx)(A, { size: 16 })]
					})
				] }), /* @__PURE__ */ (0, R.jsxs)("div", {
					className: "v10-box-object",
					children: [
						/* @__PURE__ */ (0, R.jsx)("span", { children: "BOXANH / CIRCULAR PACKAGING" }),
						/* @__PURE__ */ (0, R.jsx)("img", {
							src: "/assets/banner-moving.svg",
							alt: "Hình minh họa chuyển đồ bằng hệ thống hộp",
							width: "144",
							height: "104"
						}),
						/* @__PURE__ */ (0, R.jsxs)("div", { children: [/* @__PURE__ */ (0, R.jsx)("b", { children: "DÙNG LẠI" }), /* @__PURE__ */ (0, R.jsx)("span", { children: "Nhận · Chuyển · Trả · Tiếp tục" })] }),
						/* @__PURE__ */ (0, R.jsx)("small", { children: "Hình minh họa quy trình" })
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, R.jsxs)("section", {
			className: "n7-wrap v10-box-cycle",
			children: [
				/* @__PURE__ */ (0, R.jsxs)("div", { children: [/* @__PURE__ */ (0, R.jsx)(wl, { children: "BẤM ĐỂ XEM TỪNG GIAI ĐOẠN" }), /* @__PURE__ */ (0, R.jsxs)("h2", { children: [
					"Vòng đời của hộp.",
					/* @__PURE__ */ (0, R.jsx)("br", {}),
					"Không dừng ở một chuyến."
				] })] }),
				/* @__PURE__ */ (0, R.jsx)("div", {
					className: "v10-cycle-controls",
					"aria-label": "Vòng đời hộp",
					children: Al.map(([n], r) => /* @__PURE__ */ (0, R.jsxs)("button", {
						type: "button",
						"aria-pressed": e === r,
						onClick: () => t(r),
						children: [
							/* @__PURE__ */ (0, R.jsxs)("span", { children: ["0", r + 1] }),
							n,
							/* @__PURE__ */ (0, R.jsx)(O, { size: 17 })
						]
					}, n))
				}),
				/* @__PURE__ */ (0, R.jsxs)("div", {
					className: "v10-cycle-info",
					"aria-live": "polite",
					children: [
						/* @__PURE__ */ (0, R.jsx)(ke, { size: 32 }),
						/* @__PURE__ */ (0, R.jsxs)("div", { children: [/* @__PURE__ */ (0, R.jsx)("h3", { children: Al[e][0] }), /* @__PURE__ */ (0, R.jsx)("p", { children: Al[e][1] })] }),
						/* @__PURE__ */ (0, R.jsxs)("strong", { children: [
							"0",
							e + 1,
							/* @__PURE__ */ (0, R.jsx)("small", { children: "/ 04" })
						] })
					]
				})
			]
		}),
		/* @__PURE__ */ (0, R.jsx)(yl, {}),
		/* @__PURE__ */ (0, R.jsxs)("div", {
			className: "n7-wrap v10-crosslinks",
			children: [/* @__PURE__ */ (0, R.jsxs)("a", {
				href: "/dich-vu#hop",
				children: ["Tiêu chí, cách đóng & phí thuê", /* @__PURE__ */ (0, R.jsx)(O, { size: 18 })]
			}), /* @__PURE__ */ (0, R.jsxs)("a", {
				href: "/hop-minh-hoa",
				children: ["Mã hộp & tem niêm phong dự kiến", /* @__PURE__ */ (0, R.jsx)(O, { size: 18 })]
			})]
		})
	] });
}
var Ml = [
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
function Nl() {
	let [e, t] = (0, E.useState)(0), n = Ml[e];
	return /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [
		/* @__PURE__ */ (0, R.jsxs)("section", {
			className: "v10-green n7-wrap",
			children: [
				/* @__PURE__ */ (0, R.jsxs)("div", {
					className: "v10-green-title",
					children: [
						/* @__PURE__ */ (0, R.jsx)(wl, { children: "GIẢI PHÓNG ĐỒ THỪA" }),
						/* @__PURE__ */ (0, R.jsxs)("h1", { children: [
							"Bớt một món đồ.",
							/* @__PURE__ */ (0, R.jsx)("br", {}),
							/* @__PURE__ */ (0, R.jsx)("em", { children: "Thêm một vòng đời." })
						] }),
						/* @__PURE__ */ (0, R.jsxs)("p", { children: [
							"Giữ thứ cần mang đi.",
							/* @__PURE__ */ (0, R.jsx)("br", {}),
							"Trao lại thứ còn giá trị."
						] })
					]
				}),
				/* @__PURE__ */ (0, R.jsxs)("figure", { children: [/* @__PURE__ */ (0, R.jsx)("img", {
					src: "/assets/books.jpg",
					width: "400",
					height: "300",
					alt: "Sách minh họa việc trao lại đồ còn giá trị"
				}), /* @__PURE__ */ (0, R.jsxs)("figcaption", { children: [/* @__PURE__ */ (0, R.jsx)(ze, { size: 22 }), " CÒN DÙNG ĐƯỢC, CÒN MỘT HÀNH TRÌNH"] })] }),
				/* @__PURE__ */ (0, R.jsxs)("div", {
					className: "v10-green-bottom",
					children: [
						/* @__PURE__ */ (0, R.jsx)("span", { children: "Đồ của bạn" }),
						/* @__PURE__ */ (0, R.jsx)(O, { size: 24 }),
						/* @__PURE__ */ (0, R.jsx)("span", { children: "Giá trị mới" }),
						/* @__PURE__ */ (0, R.jsx)(O, { size: 24 }),
						/* @__PURE__ */ (0, R.jsx)("span", { children: "Người dùng tiếp theo" })
					]
				})
			]
		}),
		/* @__PURE__ */ (0, R.jsx)("section", {
			className: "v10-green-paths",
			children: /* @__PURE__ */ (0, R.jsxs)("div", {
				className: "n7-wrap",
				children: [/* @__PURE__ */ (0, R.jsx)("div", {
					className: "v10-green-tabs",
					role: "tablist",
					"aria-label": "Phương án cho đồ thừa",
					children: Ml.map((n, r) => /* @__PURE__ */ (0, R.jsxs)("button", {
						id: "v10-green-tab-" + r,
						role: "tab",
						"aria-selected": e === r,
						"aria-controls": "v10-green-panel",
						tabIndex: e === r ? 0 : -1,
						type: "button",
						onClick: () => t(r),
						onKeyDown: (e) => {
							let n;
							e.key === "ArrowRight" && (n = (r + 1) % 3), e.key === "ArrowLeft" && (n = (r + 2) % 3), e.key === "Home" && (n = 0), e.key === "End" && (n = 2), n !== void 0 && (e.preventDefault(), t(n), document.getElementById("v10-green-tab-" + n)?.focus());
						},
						children: [
							/* @__PURE__ */ (0, R.jsxs)("span", { children: ["0", r + 1] }),
							n.title,
							/* @__PURE__ */ (0, R.jsx)(A, { size: 20 })
						]
					}, n.name))
				}), /* @__PURE__ */ (0, R.jsxs)("div", {
					className: "v10-green-panel",
					id: "v10-green-panel",
					role: "tabpanel",
					"aria-labelledby": "v10-green-tab-" + e,
					children: [/* @__PURE__ */ (0, R.jsxs)("div", { children: [
						/* @__PURE__ */ (0, R.jsxs)(wl, { children: ["PHƯƠNG ÁN / ", n.title.toUpperCase()] }),
						/* @__PURE__ */ (0, R.jsx)("h2", { children: n.intro }),
						/* @__PURE__ */ (0, R.jsx)("p", { children: n.copy }),
						/* @__PURE__ */ (0, R.jsxs)(Cl, {
							href: "/gui-do?phuong-an=" + n.name,
							children: ["Gửi đồ để ", n.title.toLowerCase()]
						})
					] }), /* @__PURE__ */ (0, R.jsx)("ol", { children: n.steps.map((e, t) => /* @__PURE__ */ (0, R.jsxs)("li", { children: [
						/* @__PURE__ */ (0, R.jsxs)("b", { children: ["0", t + 1] }),
						/* @__PURE__ */ (0, R.jsx)("span", { children: e }),
						/* @__PURE__ */ (0, R.jsx)(ge, { size: 18 })
					] }, e)) })]
				})]
			})
		}),
		/* @__PURE__ */ (0, R.jsx)(bl, {}),
		/* @__PURE__ */ (0, R.jsxs)("div", {
			className: "n7-wrap v10-green-market",
			children: [/* @__PURE__ */ (0, R.jsxs)("div", { children: [
				/* @__PURE__ */ (0, R.jsx)(wl, { children: "VÒNG ĐỜI MỚI" }),
				/* @__PURE__ */ (0, R.jsxs)("h2", { children: [
					"Biết đâu, bạn tìm thấy",
					/* @__PURE__ */ (0, R.jsx)("br", {}),
					"đồ mình đang cần."
				] }),
				/* @__PURE__ */ (0, R.jsx)("p", { children: "Chỉ món đã tiếp nhận, có ảnh thật và được công khai mới nhận yêu cầu quan tâm." })
			] }), /* @__PURE__ */ (0, R.jsx)(Cl, {
				href: "/do-cu",
				children: "Khám phá danh mục đồ cũ"
			})]
		})
	] });
}
function Pl({ c: e, video: t, checklist: n }) {
	return /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [
		/* @__PURE__ */ (0, R.jsxs)("section", {
			className: "v10-guide-intro n7-wrap",
			children: [/* @__PURE__ */ (0, R.jsxs)("div", { children: [
				/* @__PURE__ */ (0, R.jsx)(wl, { children: "BOXANH / TRUNG TÂM HƯỚNG DẪN" }),
				/* @__PURE__ */ (0, R.jsxs)("h1", { children: [
					"Chuyển trọ lần đầu?",
					/* @__PURE__ */ (0, R.jsx)("br", {}),
					/* @__PURE__ */ (0, R.jsx)("em", { children: "Bắt đầu từ đây." })
				] }),
				/* @__PURE__ */ (0, R.jsx)("p", { children: "Một video ngắn, danh sách chuẩn bị và câu trả lời cho những điều bạn đang băn khoăn." })
			] }), /* @__PURE__ */ (0, R.jsx)(ce, {
				size: 94,
				strokeWidth: 1
			})]
		}),
		/* @__PURE__ */ (0, R.jsxs)("div", {
			className: "v10-guide-layout n7-wrap",
			children: [/* @__PURE__ */ (0, R.jsxs)("nav", {
				className: "v10-guide-nav",
				"aria-label": "Mục lục hướng dẫn",
				children: [
					/* @__PURE__ */ (0, R.jsx)("span", { children: "TRONG TRANG NÀY" }),
					/* @__PURE__ */ (0, R.jsxs)("a", {
						href: "#video-huong-dan",
						children: [
							/* @__PURE__ */ (0, R.jsx)(Fe, { size: 17 }),
							" Xem cách dùng website",
							/* @__PURE__ */ (0, R.jsx)(O, { size: 16 })
						]
					}),
					/* @__PURE__ */ (0, R.jsxs)("a", {
						href: "#checklist",
						children: [
							/* @__PURE__ */ (0, R.jsx)(Se, { size: 17 }),
							" Chuẩn bị ngày chuyển",
							/* @__PURE__ */ (0, R.jsx)(O, { size: 16 })
						]
					}),
					/* @__PURE__ */ (0, R.jsxs)("a", {
						href: "#cau-hoi",
						children: [
							/* @__PURE__ */ (0, R.jsx)(ce, { size: 17 }),
							" Câu hỏi thường gặp",
							/* @__PURE__ */ (0, R.jsx)(O, { size: 16 })
						]
					}),
					/* @__PURE__ */ (0, R.jsx)(Cl, {
						href: "/dat-lich",
						children: "Bắt đầu yêu cầu"
					})
				]
			}), /* @__PURE__ */ (0, R.jsxs)("div", {
				className: "v10-guide-content",
				children: [t, n]
			})]
		}),
		/* @__PURE__ */ (0, R.jsx)(xl, {}),
		/* @__PURE__ */ (0, R.jsx)(Sl, { config: e })
	] });
}
function Fl({ c: e, onQuote: t }) {
	return /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [
		/* @__PURE__ */ (0, R.jsxs)("section", {
			className: "v10-quote-intro n7-wrap",
			id: "chi-phi",
			children: [/* @__PURE__ */ (0, R.jsxs)("div", { children: [
				/* @__PURE__ */ (0, R.jsx)(wl, { children: "LẬP KẾ HOẠCH CHI PHÍ" }),
				/* @__PURE__ */ (0, R.jsxs)("h1", { children: [
					"Ước tính trước.",
					/* @__PURE__ */ (0, R.jsx)("br", {}),
					/* @__PURE__ */ (0, R.jsx)("em", { children: "Thống nhất sau khảo sát." })
				] }),
				/* @__PURE__ */ (0, R.jsxs)("p", { children: [
					"Chọn dịch vụ, số hộp và quãng đường. Giá ",
					e.priceMode === "reference" ? "đang là mức dự kiến" : "theo cấu hình hiện tại",
					"; BOXANH xác nhận phạm vi và tổng phí trước khi nhận lịch."
				] })
			] }), /* @__PURE__ */ (0, R.jsxs)("aside", { children: [
				/* @__PURE__ */ (0, R.jsx)(Se, { size: 24 }),
				/* @__PURE__ */ (0, R.jsxs)("strong", { children: [
					"Biết chi phí.",
					/* @__PURE__ */ (0, R.jsx)("br", {}),
					"Chủ động quyết định."
				] }),
				/* @__PURE__ */ (0, R.jsx)("span", { children: "Gửi yêu cầu chưa xác nhận lịch và chưa yêu cầu thanh toán." })
			] })]
		}),
		/* @__PURE__ */ (0, R.jsx)(gl, {
			config: e,
			onQuote: t
		}),
		/* @__PURE__ */ (0, R.jsx)(W, { config: e }),
		/* @__PURE__ */ (0, R.jsxs)("div", {
			className: "n7-wrap v10-crosslinks",
			children: [/* @__PURE__ */ (0, R.jsxs)("a", {
				href: "/dich-vu#so-sanh",
				children: ["Bảng so sánh đầy đủ", /* @__PURE__ */ (0, R.jsx)(O, { size: 18 })]
			}), /* @__PURE__ */ (0, R.jsxs)("a", {
				href: "/dich-vu#phu-phi",
				children: ["Phụ phí & điều kiện", /* @__PURE__ */ (0, R.jsx)(O, { size: 18 })]
			})]
		})
	] });
}
//#endregion
//#region public/assistant-knowledge.js
var Il = [
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
], Ll = (e) => Il.find((t) => t.id === e), Rl = {
	small: "Gọn nhẹ",
	full: "Trọn gói",
	boxes: "Chỉ thuê hộp",
	cleaning: "Dọn phòng",
	handover: "Bàn giao phòng"
}, zl = (e) => new Intl.NumberFormat("vi-VN", {
	style: "currency",
	currency: "VND",
	maximumFractionDigits: 0
}).format(e || 0);
function Bl(e) {
	return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/đ/g, "d");
}
function Vl(e) {
	let t = Bl(e), n = t.split(/[^a-z0-9]+/).filter((e) => e.length > 2 && ![
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
	].includes(e)), r = [
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
	].filter(([e]) => t.includes(e)), i = new Set(r.map(([, e]) => e));
	return Il.map((e) => {
		let t = Bl(e.title), i = new Set(Bl(e.tags).split(/[^a-z0-9]+/)), a = Bl(e.text);
		return {
			topic: e,
			score: n.reduce((e, n) => e + (t.split(/[^a-z0-9]+/).includes(n) ? 5 : i.has(n) ? 3 : +!!a.split(/[^a-z0-9]+/).includes(n)), 0) + r.filter(([, t]) => t === e.id).length * 30
		};
	}).filter((e) => e.score >= 5).sort((e, t) => t.score - e.score).slice(0, i.size > 1 ? Math.min(3, i.size) : 1).map((e) => e.topic);
}
function Hl(e, t, n = []) {
	let r = Bl(e.trim()), i = (e) => e.map(Ll).filter(Boolean);
	if (/^(xin chao|chao|hello|hi|alo)[!. ]*$/.test(r)) return {
		text: "Chào bạn! Mình có thể giúp bạn chọn dịch vụ, xem cách tính chi phí và chuẩn bị yêu cầu tại " + t.area + ". Bạn đang cần chuyển trọ, dọn phòng, bàn giao hay xử lý đồ thừa?",
		links: i([
			"services",
			"booking",
			"guide"
		])
	};
	if (/(chuc nang|lam duoc gi|giup.*nhung gi|tat ca.*website)/.test(r)) return {
		text: "Bạn có thể bắt đầu từ những việc này:\n\n- Chọn và so sánh dịch vụ chuyển trọ.\n- Ước tính chi phí, xem phụ phí, chuẩn bị đặt lịch.\n- Đặt khảo sát dọn phòng hoặc bàn giao phòng.\n- Thuê hộp tái sử dụng.\n- Gửi đồ để thu mua, ký gửi hoặc phân loại.\n- Xem đồ cũ và đăng ký quan tâm khi có hàng thật.\n- Tra cứu yêu cầu và báo sự cố.\n- Xem video, danh sách chuẩn bị và chính sách.\n\nBạn muốn giải quyết việc nào trước? Mục “Khám phá mọi chức năng” có đầy đủ từng lối mở.",
		links: i([
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
	let a = [...n].reverse().find((e) => e.role === "assistant" && e.links?.length)?.links[0], o = Vl(e);
	if (a && /(cai do|goi do|viec do|the thi|nhu vay|con gia|bao nhieu|co duoc khong|tiep theo)/.test(r) && !/(don phong|ban giao|chuyen tro|thue hop|ky gui|thu mua|tra cuu)/.test(r) && (o = i([a.id])), /(lan dau|tu dong|it do|di mot minh|ngan sach|tiet kiem)/.test(r) && !/(don phong|ban giao|thu mua|ky gui)/.test(r) && (o = i(["services"])), o[0] && ["cleaning", "handover"].includes(o[0].id) && /(gia|chi phi|bao nhieu)/.test(r)) return {
		text: (o[0].id === "cleaning" ? "Dọn phòng" : "Bàn giao phòng") + " hiện chưa có giá cố định. BOXANH cần xem diện tích, hiện trạng và phạm vi cần hỗ trợ rồi mới thống nhất chi phí.\n\nBạn có thể chuẩn bị mô tả và ảnh phòng, rồi mở “Chuẩn bị đặt lịch” để tạo nhu cầu khảo sát. Giá được xác nhận sau trao đổi, chưa có khoản thanh toán ở bước này.",
		links: o
	};
	if (!o.length) return {
		text: "Mình chưa chắc bạn đang cần hỗ trợ việc nào. Bạn có thể nói cụ thể hơn, chẳng hạn “chuyển ít đồ, muốn tiết kiệm” hoặc “cần dọn phòng trước khi trả trọ”.\n\nHiện mình đang trả lời từ cẩm nang, chưa có AI hội thoại để xử lý mọi tình huống. Nếu cần trao đổi trực tiếp, đội BOXANH ở số " + t.phone + ".",
		links: i([
			"services",
			"booking",
			"support"
		])
	};
	let s = {
		services: "Nếu bạn tự đóng đồ và chủ yếu cần chuyển đi, hãy xem Gọn nhẹ. Nếu muốn được hỗ trợ đóng gói cùng vận chuyển, hãy xem Trọn gói. Khi đã có xe, bạn có thể chỉ thuê hộp.\n\nGiá gói tham khảo hiện tại: Gọn nhẹ từ " + zl(t.smallBase) + ", Trọn gói từ " + zl(t.fullBase) + ". Phụ phí và giá cuối cùng cần khảo sát.\n\nBạn muốn tự đóng đồ hay cần đội BOXANH hỗ trợ?",
		moving: "Mình sẽ giúp bạn bắt đầu từ ba việc: chọn phạm vi hỗ trợ, ước tính theo đồ đạc/quãng đường, rồi gửi yêu cầu để BOXANH xác nhận. Hộp có thể được giao trước ngày chuyển 1–2 ngày và thu hồi sau khi bạn lấy đồ ra.\n\nBạn muốn tự đóng đồ hay cần hỗ trợ đóng gói?",
		cleaning: "Dọn phòng cần xem hiện trạng và phạm vi công việc trước khi báo giá; hiện chưa có một mức giá áp dụng cho mọi phòng. Bạn gửi địa chỉ, diện tích, ngày mong muốn, mô tả và ảnh nếu có qua biểu mẫu khảo sát.\n\nBạn cần dọn phòng cũ trước khi trả trọ hay phòng mới trước khi vào ở?",
		handover: "Trước khi bàn giao, nên kiểm tra ảnh hiện trạng, nội thất, chỉ số điện/nước, khoản cần đối soát và chìa khóa/lịch hẹn. BOXANH hỗ trợ ghi nhận, còn tiền cọc do bạn và chủ trọ đối soát theo thỏa thuận.\n\nBạn muốn mở danh sách kiểm tra hay chuẩn bị khảo sát bàn giao?",
		surplus: "Đồ còn dùng được có thể gửi để thẩm định thu mua hoặc ký gửi. Thu mua chỉ được trừ phí sau thỏa thuận, tiếp nhận và phân bổ hợp lệ; ký gửi thanh toán sau khi bán được. Đồ hỏng cần xác nhận kênh thu gom phù hợp.\n\nBạn đang có đồ còn dùng được hay đồ đã hỏng?",
		boxes: "Nếu đã có phương tiện, bạn có thể chỉ thuê hộp. Hộp được giao theo lịch thống nhất, kiểm đếm khi bàn giao và thu hồi, rồi vệ sinh để dùng tiếp. Thời gian thuê và gia hạn cần xem điều kiện trước khi nhận.\n\nBạn muốn xem điều kiện thuê hay chuẩn bị yêu cầu thuê hộp?",
		quote: "Ước tính cần biết gói dịch vụ, số hộp, quãng đường, tầng ở hai nơi, thang máy và đồ cồng kềnh. Dọn phòng/bàn giao phải khảo sát hiện trạng. Bạn dùng nút “Chuẩn bị đặt lịch” để nhập nhu cầu và xem giá từ bộ tính thật.\n\nBạn cần ước tính chuyển trọ, thuê hộp hay khảo sát phòng?",
		booking: "Đặt lịch chuyển đồ gồm bốn bước: chọn gói/đồ đạc → địa chỉ/ngày/điều kiện vận chuyển → đồ thừa → liên hệ và xem lại. Chọn “Chuẩn bị đặt lịch” để tạo bản nháp; khi kiểm tra xong bạn tự gửi yêu cầu trên biểu mẫu.\n\nGửi yêu cầu chưa có nghĩa là đã chốt lịch. BOXANH sẽ trao đổi và xác nhận riêng. Bạn cần chuyển trọ, thuê hộp, dọn phòng hay bàn giao?",
		support: "Mình hiểu việc gặp vấn đề với đồ đạc khiến bạn lo lắng. Bạn hãy giữ ảnh, hộp/tem nếu có và mô tả cụ thể. Mở CSKH, nhập mã BX cùng số điện thoại đã đăng ký để gửi hồ sơ và nhận mã SC.\n\nĐội BOXANH sẽ đối chiếu; Bơ không tự kết luận trách nhiệm hay mức bồi thường. Nếu cần hỗ trợ trực tiếp, gọi " + t.phone + ".",
		tracking: "Bạn mở Tra cứu, nhập mã yêu cầu và đúng số điện thoại đã đăng ký. Website hỗ trợ mã BX, DG, MH và SC. Tiến độ do nhân sự cập nhật, chưa có GPS trực tiếp.\n\nBạn không cần gửi mã hoặc số điện thoại trong cuộc trò chuyện; hãy nhập ở trang tra cứu."
	};
	return {
		text: o.length === 1 ? s[o[0].id] || o[0].title + "\n\n" + o[0].text : o.map((e) => "**" + e.title + "**\n" + e.text).join("\n\n") + "\n\nBạn muốn mình hướng dẫn phần nào trước?",
		links: o
	};
}
//#endregion
//#region public/assistant-conversation.js
var Ul = [
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
function Wl(e) {
	return `Chào bạn, mình là Bơ, trợ lý của BOXANH tại ${e}. Hôm nay bạn đang cần chuyển trọ, dọn phòng, bàn giao phòng hay xử lý đồ không mang theo?\n\nBạn có thể kể tình huống của mình hoặc chọn một gợi ý bên dưới. Mình sẽ cùng bạn tìm cách bắt đầu phù hợp.`;
}
var Gl = {
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
function Kl(e) {
	let t = e.at(-1);
	if (t?.pending || t?.error) return [];
	let n = t?.actions?.find((e) => e.type === "suggestions")?.prompts;
	if (n?.length) return n.slice(0, 3);
	if (t?.actions?.some((e) => ["draft", "quote"].includes(e.type))) return [
		"Giải thích giúp mình các khoản trong ước tính.",
		"Nếu mình thay đổi số hộp thì sao?",
		"Mình cần kiểm tra gì trước khi gửi yêu cầu?"
	];
	let r = [...e].reverse().find((e) => e.role === "user");
	return Gl[t?.links?.[0]?.id || Vl(r?.text || "")[0]?.id] || [
		"Giúp mình chọn dịch vụ phù hợp.",
		"Mình muốn biết chi phí dự kiến.",
		"Hướng dẫn mình bước tiếp theo."
	];
}
function ql(e, t) {
	let n = [], r = 0;
	for (let i of [...e, t].filter((e) => !e.error && !e.pending && (e.text || e.actions?.length)).slice(-16).reverse()) {
		let e = (i.text || "").slice(0, 2500), t = i.actions?.filter((e) => ["draft", "quote"].includes(e.type)).map((e) => ({
			draft: e.draft,
			quote: {
				total: e.quote?.total,
				needsSurvey: e.quote?.needsSurvey
			},
			assumptions: e.assumptions,
			bookingCreated: !1
		}));
		if (t?.length && (e += "\nThông tin bản nháp đã hiển thị (cần công cụ kiểm tra lại): " + JSON.stringify(t)), e = e.slice(0, 4e3), r + e.length > 18e3) break;
		r += e.length, n.unshift({
			role: i.role,
			content: e
		});
	}
	return n;
}
function Jl(e) {
	return e.split(/\n\n+/).map((e) => {
		let t = e.split("\n");
		return t.every((e) => /^\s*[-•]\s+/.test(e)) ? {
			kind: "list",
			ordered: !1,
			lines: t.map((e) => e.replace(/^\s*[-•]\s+/, ""))
		} : t.every((e) => /^\s*\d+[.)]\s+/.test(e)) ? {
			kind: "list",
			ordered: !0,
			lines: t.map((e) => e.replace(/^\s*\d+[.)]\s+/, ""))
		} : /^#{1,3} /.test(e) && t.length === 1 ? {
			kind: "heading",
			text: e.replace(/^#{1,3} /, "")
		} : {
			kind: "paragraph",
			text: e
		};
	});
}
//#endregion
//#region src/assistant.jsx
var Yl = {
	messages: [],
	consent: !1,
	consentDestination: ""
}, Xl = {
	moving: ke,
	quote: Ye,
	cleaning: Ye,
	handover: ge,
	boxes: ke,
	surplus: ze,
	booking: ue,
	tracking: ce,
	support: qe,
	guide: ce
}, Zl = () => crypto.randomUUID();
function Ql({ mini: e = !1, paused: t = !1 }) {
	let n = E.useId().replaceAll(":", "");
	return /* @__PURE__ */ (0, R.jsx)("span", {
		className: "bo-robot " + (e ? "bo-mini " : "") + (t ? "bo-paused" : ""),
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, R.jsxs)("svg", {
			viewBox: "0 0 220 235",
			fill: "none",
			children: [
				/* @__PURE__ */ (0, R.jsxs)("defs", { children: [
					/* @__PURE__ */ (0, R.jsxs)("linearGradient", {
						id: "body" + n,
						x1: "54",
						y1: "95",
						x2: "163",
						y2: "196",
						gradientUnits: "userSpaceOnUse",
						children: [
							/* @__PURE__ */ (0, R.jsx)("stop", { stopColor: "#b29aff" }),
							/* @__PURE__ */ (0, R.jsx)("stop", {
								offset: ".55",
								stopColor: "#8258e7"
							}),
							/* @__PURE__ */ (0, R.jsx)("stop", {
								offset: "1",
								stopColor: "#4d2c96"
							})
						]
					}),
					/* @__PURE__ */ (0, R.jsxs)("linearGradient", {
						id: "head" + n,
						x1: "39",
						y1: "42",
						x2: "171",
						y2: "130",
						gradientUnits: "userSpaceOnUse",
						children: [
							/* @__PURE__ */ (0, R.jsx)("stop", { stopColor: "#cdb7ff" }),
							/* @__PURE__ */ (0, R.jsx)("stop", {
								offset: ".5",
								stopColor: "#9572ee"
							}),
							/* @__PURE__ */ (0, R.jsx)("stop", {
								offset: "1",
								stopColor: "#6641b7"
							})
						]
					}),
					/* @__PURE__ */ (0, R.jsxs)("linearGradient", {
						id: "face" + n,
						x1: "63",
						y1: "50",
						x2: "169",
						y2: "110",
						gradientUnits: "userSpaceOnUse",
						children: [/* @__PURE__ */ (0, R.jsx)("stop", { stopColor: "#312553" }), /* @__PURE__ */ (0, R.jsx)("stop", {
							offset: "1",
							stopColor: "#171a30"
						})]
					})
				] }),
				/* @__PURE__ */ (0, R.jsx)("ellipse", {
					cx: "110",
					cy: "218",
					rx: "57",
					ry: "8",
					fill: "#3d206c",
					opacity: ".12"
				}),
				/* @__PURE__ */ (0, R.jsxs)("g", {
					className: "bo-floating",
					children: [
						/* @__PURE__ */ (0, R.jsx)("path", {
							d: "M105 32v-9",
							stroke: "#7351bd",
							strokeWidth: "7",
							strokeLinecap: "round"
						}),
						/* @__PURE__ */ (0, R.jsx)("circle", {
							cx: "105",
							cy: "16",
							r: "9",
							fill: "#ffad68"
						}),
						/* @__PURE__ */ (0, R.jsx)("circle", {
							cx: "102",
							cy: "13",
							r: "3",
							fill: "#fff0d9"
						}),
						/* @__PURE__ */ (0, R.jsx)("path", {
							d: "M62 169v29c0 7 11 11 18 3l12-18M148 169v29c0 7-11 11-18 3l-12-18",
							stroke: "#7d58c6",
							strokeWidth: "15",
							strokeLinecap: "round"
						}),
						/* @__PURE__ */ (0, R.jsx)("path", {
							d: "M76 116c-10 14-17 43-6 62 11 20 63 22 78 1 10-15 1-51-7-63",
							fill: "url(#body" + n + ")"
						}),
						/* @__PURE__ */ (0, R.jsx)("rect", {
							x: "83",
							y: "137",
							width: "43",
							height: "30",
							rx: "12",
							fill: "#fcd3a2"
						}),
						/* @__PURE__ */ (0, R.jsx)("path", {
							d: "M93 153h23M105 145v16",
							stroke: "#4b3279",
							strokeWidth: "4",
							strokeLinecap: "round"
						}),
						/* @__PURE__ */ (0, R.jsx)("path", {
							d: "M59 131c-15 9-22 24-12 39",
							stroke: "#a586ef",
							strokeWidth: "17",
							strokeLinecap: "round"
						}),
						/* @__PURE__ */ (0, R.jsx)("circle", {
							cx: "48",
							cy: "169",
							r: "10",
							fill: "#ffc17e"
						}),
						/* @__PURE__ */ (0, R.jsxs)("g", {
							className: "bo-wave",
							children: [
								/* @__PURE__ */ (0, R.jsx)("path", {
									d: "M146 130c26-4 30-23 27-35",
									stroke: "#a586ef",
									strokeWidth: "17",
									strokeLinecap: "round"
								}),
								/* @__PURE__ */ (0, R.jsx)("path", {
									d: "M169 99c-9-8-8-16-1-19l1-9c0-5 7-5 7 0l1 7c8-6 14-1 11 8l-6 13",
									fill: "#ffc17e"
								}),
								/* @__PURE__ */ (0, R.jsx)("path", {
									d: "M167 85l7 6",
									stroke: "#e68f54",
									strokeWidth: "3",
									strokeLinecap: "round"
								})
							]
						}),
						/* @__PURE__ */ (0, R.jsx)("rect", {
							x: "31",
							y: "59",
							width: "14",
							height: "30",
							rx: "7",
							fill: "#6d4cab"
						}),
						/* @__PURE__ */ (0, R.jsx)("rect", {
							x: "163",
							y: "59",
							width: "14",
							height: "30",
							rx: "7",
							fill: "#6d4cab"
						}),
						/* @__PURE__ */ (0, R.jsx)("rect", {
							x: "40",
							y: "34",
							width: "128",
							height: "91",
							rx: "32",
							fill: "url(#head" + n + ")"
						}),
						/* @__PURE__ */ (0, R.jsx)("path", {
							d: "M55 52c13-13 73-16 92-1",
							stroke: "#e2d4ff",
							strokeWidth: "4",
							strokeLinecap: "round",
							opacity: ".65"
						}),
						/* @__PURE__ */ (0, R.jsx)("rect", {
							x: "54",
							y: "51",
							width: "102",
							height: "58",
							rx: "21",
							fill: "url(#face" + n + ")"
						}),
						/* @__PURE__ */ (0, R.jsx)("g", {
							className: "bo-eyes",
							children: /* @__PURE__ */ (0, R.jsx)("path", {
								d: "M72 76c0-8 12-8 12 0M124 76c0-8 12-8 12 0",
								stroke: "#f8efd9",
								strokeWidth: "6",
								strokeLinecap: "round"
							})
						}),
						/* @__PURE__ */ (0, R.jsx)("path", {
							d: "M91 86c7 8 19 8 26 0",
							stroke: "#ffbd7e",
							strokeWidth: "4",
							strokeLinecap: "round"
						}),
						/* @__PURE__ */ (0, R.jsx)("ellipse", {
							cx: "72",
							cy: "88",
							rx: "7",
							ry: "3",
							fill: "#ec8faa",
							opacity: ".7"
						}),
						/* @__PURE__ */ (0, R.jsx)("ellipse", {
							cx: "137",
							cy: "88",
							rx: "7",
							ry: "3",
							fill: "#ec8faa",
							opacity: ".7"
						})
					]
				}),
				/* @__PURE__ */ (0, R.jsx)("g", {
					className: "bo-spark",
					children: /* @__PURE__ */ (0, R.jsx)("path", {
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
function $l() {
	let [e, t] = (0, E.useState)(!1), [n, r] = (0, E.useState)(!0), i = (0, E.useRef)(null);
	return (0, E.useEffect)(() => {
		let e = new IntersectionObserver((e) => r(e[0].isIntersecting));
		return e.observe(i.current), () => e.disconnect();
	}, []), /* @__PURE__ */ (0, R.jsx)("div", {
		ref: i,
		className: "bo-home-invite " + (e || !n ? "bo-paused" : ""),
		"data-ai-invite": !0,
		children: /* @__PURE__ */ (0, R.jsxs)("div", {
			className: "bo-invite-inner",
			children: [/* @__PURE__ */ (0, R.jsxs)("a", {
				href: "/tro-ly-ai",
				className: "bo-invite-link",
				"aria-label": "Gặp Bơ, mở trang trò chuyện với trợ lý BOXANH",
				children: [
					/* @__PURE__ */ (0, R.jsx)(Ql, {
						mini: !0,
						paused: e || !n
					}),
					/* @__PURE__ */ (0, R.jsxs)("div", { children: [
						/* @__PURE__ */ (0, R.jsxs)("span", {
							className: "bo-invite-label",
							children: [/* @__PURE__ */ (0, R.jsx)(Ye, { size: 13 }), " TRỢ LÝ BOXANH"]
						}),
						/* @__PURE__ */ (0, R.jsx)("strong", { children: "Chào bạn, mình là Bơ!" }),
						/* @__PURE__ */ (0, R.jsx)("p", { children: "Chọn dịch vụ, hiểu chi phí, chuẩn bị đặt lịch. Cứ hỏi mình nhé." })
					] }),
					/* @__PURE__ */ (0, R.jsxs)("span", {
						className: "bo-invite-cta",
						children: ["Trò chuyện cùng Bơ ", /* @__PURE__ */ (0, R.jsx)(A, { size: 19 })]
					})
				]
			}), /* @__PURE__ */ (0, R.jsx)("button", {
				type: "button",
				className: "bo-invite-pause",
				"aria-label": e ? "Tiếp tục chuyển động robot" : "Tạm dừng chuyển động robot",
				onClick: () => t(!e),
				children: e ? /* @__PURE__ */ (0, R.jsx)(Ye, { size: 15 }) : /* @__PURE__ */ (0, R.jsx)(Ze, { size: 12 })
			})]
		})
	});
}
function eu({ text: e }) {
	return e.split(/(\*\*[^*\n]+\*\*)/g).map((e, t) => e.startsWith("**") && e.endsWith("**") ? /* @__PURE__ */ (0, R.jsx)("strong", { children: e.slice(2, -2) }, t) : e);
}
function tu({ text: e }) {
	return /* @__PURE__ */ (0, R.jsx)("div", {
		className: "bo-message-text",
		children: Jl(e).map((e, t) => e.kind === "list" ? E.createElement(e.ordered ? "ol" : "ul", { key: t }, e.lines.map((e, t) => /* @__PURE__ */ (0, R.jsx)("li", { children: /* @__PURE__ */ (0, R.jsx)(eu, { text: e }) }, t))) : e.kind === "heading" ? /* @__PURE__ */ (0, R.jsx)("h3", { children: /* @__PURE__ */ (0, R.jsx)(eu, { text: e.text }) }, t) : /* @__PURE__ */ (0, R.jsx)("p", { children: /* @__PURE__ */ (0, R.jsx)(eu, { text: e.text }) }, t))
	});
}
function nu({ links: e }) {
	let t = new Set(Il.map((e) => e.href));
	return /* @__PURE__ */ (0, R.jsx)("div", {
		className: "bo-source-links",
		children: e.filter((e) => t.has(e.href)).map((e) => /* @__PURE__ */ (0, R.jsxs)("a", {
			href: e.href,
			children: [e.title, /* @__PURE__ */ (0, R.jsx)(A, { size: 15 })]
		}, e.href))
	});
}
function ru({ open: e, onOpenChange: t, onPrepared: n, onQuote: r }) {
	let [i, a] = (0, E.useState)({
		service: "small",
		boxes: 10,
		distance: 5,
		originFloor: 0,
		destinationFloor: 0,
		originElevator: !1,
		destinationElevator: !1,
		bulky: 0,
		packing: !1,
		date: ""
	}), [o, s] = (0, E.useState)(!1), [c, l] = (0, E.useState)(""), u = ["small", "full"].includes(i.service), d = new Date(Date.now() + 252e5).toISOString().slice(0, 10), f = new Date(Date.now() + 316224e5).toISOString().slice(0, 10), p = (e, t) => a((n) => ({
		...n,
		[e]: t
	})), m = () => Object.fromEntries(Object.entries(i).filter(([e, t]) => e !== "date" || t));
	async function h(e) {
		e.preventDefault(), s(!0), l("");
		try {
			let e = await fetch("/api/quote", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(m()),
				signal: AbortSignal.timeout(1e4)
			}), r = await e.json();
			if (!e.ok) throw Error(r.error || "Chưa nhận được báo giá.");
			n({
				type: "draft",
				draft: m(),
				quote: r,
				assumptions: [],
				bookingCreated: !1
			}), t(!1);
		} catch {
			l("Chưa kết nối được bộ tính giá. Bạn vẫn có thể mở biểu mẫu để điền nhu cầu.");
		} finally {
			s(!1);
		}
	}
	return /* @__PURE__ */ (0, R.jsx)(xs, {
		open: e,
		onOpenChange: t,
		children: /* @__PURE__ */ (0, R.jsxs)(Ds, { children: [/* @__PURE__ */ (0, R.jsx)(ks, { className: "bo-modal-overlay" }), /* @__PURE__ */ (0, R.jsxs)(Ns, {
			className: "bo-planner-dialog",
			children: [
				/* @__PURE__ */ (0, R.jsx)(Hs, {
					className: "bo-close-reset",
					"aria-label": "Đóng kế hoạch",
					children: /* @__PURE__ */ (0, R.jsx)(rt, { size: 19 })
				}),
				/* @__PURE__ */ (0, R.jsx)(Rs, { children: "Chuẩn bị lịch cùng Bơ" }),
				/* @__PURE__ */ (0, R.jsx)(Bs, { children: "Chọn nhu cầu và ngày mong muốn. Đây là bản nháp; lịch và giá cần BOXANH xác nhận." }),
				/* @__PURE__ */ (0, R.jsxs)("form", {
					onSubmit: h,
					children: [
						/* @__PURE__ */ (0, R.jsxs)("label", {
							className: "bo-planner-service",
							children: ["Dịch vụ", /* @__PURE__ */ (0, R.jsx)("select", {
								value: i.service,
								onChange: (e) => p("service", e.target.value),
								children: Object.entries(Rl).map(([e, t]) => /* @__PURE__ */ (0, R.jsx)("option", {
									value: e,
									children: t
								}, e))
							})]
						}),
						/* @__PURE__ */ (0, R.jsxs)("div", {
							className: "bo-planner-fields",
							children: [!["cleaning", "handover"].includes(i.service) && /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [/* @__PURE__ */ (0, R.jsxs)("label", { children: ["Số hộp", /* @__PURE__ */ (0, R.jsx)("input", {
								type: "number",
								min: "1",
								max: "60",
								required: !0,
								value: i.boxes,
								onChange: (e) => p("boxes", e.target.value === "" ? "" : Number(e.target.value))
							})] }), u && /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [
								/* @__PURE__ */ (0, R.jsxs)("label", { children: ["Quãng đường (km)", /* @__PURE__ */ (0, R.jsx)("input", {
									type: "number",
									min: "1",
									max: "80",
									required: !0,
									value: i.distance,
									onChange: (e) => p("distance", e.target.value === "" ? "" : Number(e.target.value))
								})] }),
								/* @__PURE__ */ (0, R.jsxs)("label", { children: ["Tầng nơi đi", /* @__PURE__ */ (0, R.jsx)("input", {
									type: "number",
									min: "0",
									max: "15",
									required: !0,
									value: i.originFloor,
									onChange: (e) => p("originFloor", e.target.value === "" ? "" : Number(e.target.value))
								})] }),
								/* @__PURE__ */ (0, R.jsxs)("label", { children: ["Tầng nơi đến", /* @__PURE__ */ (0, R.jsx)("input", {
									type: "number",
									min: "0",
									max: "15",
									required: !0,
									value: i.destinationFloor,
									onChange: (e) => p("destinationFloor", e.target.value === "" ? "" : Number(e.target.value))
								})] }),
								/* @__PURE__ */ (0, R.jsxs)("label", { children: ["Đồ cồng kềnh (món)", /* @__PURE__ */ (0, R.jsx)("input", {
									type: "number",
									min: "0",
									max: "30",
									required: !0,
									value: i.bulky,
									onChange: (e) => p("bulky", e.target.value === "" ? "" : Number(e.target.value))
								})] })
							] })] }), /* @__PURE__ */ (0, R.jsxs)("label", { children: ["Ngày mong muốn (tùy chọn)", /* @__PURE__ */ (0, R.jsx)("input", {
								type: "date",
								min: d,
								max: f,
								value: i.date,
								onChange: (e) => p("date", e.target.value)
							})] })]
						}),
						u && /* @__PURE__ */ (0, R.jsx)("div", {
							className: "bo-planner-checks",
							children: [
								["originElevator", "Nơi đi có thang máy"],
								["destinationElevator", "Nơi đến có thang máy"],
								...i.service === "small" ? [["packing", "Cần hỗ trợ đóng gói"]] : []
							].map(([e, t]) => /* @__PURE__ */ (0, R.jsxs)("label", { children: [/* @__PURE__ */ (0, R.jsx)("input", {
								type: "checkbox",
								checked: i[e],
								onChange: (t) => p(e, t.target.checked)
							}), t] }, e))
						}),
						c && /* @__PURE__ */ (0, R.jsx)("p", {
							className: "bo-composer-error",
							role: "alert",
							children: c
						}),
						/* @__PURE__ */ (0, R.jsxs)("button", {
							className: "bo-planner-submit",
							type: "submit",
							disabled: o,
							children: [o ? "Đang lấy ước tính…" : "Xem bản nháp & chi phí", /* @__PURE__ */ (0, R.jsx)(O, { size: 17 })]
						}),
						/* @__PURE__ */ (0, R.jsxs)("button", {
							type: "button",
							className: "bo-planner-skip",
							onClick: () => r(m()),
							children: ["Mở biểu mẫu đặt lịch ", /* @__PURE__ */ (0, R.jsx)(A, { size: 14 })]
						})
					]
				})
			]
		})] })
	});
}
function iu({ action: e, onQuote: t, config: n }) {
	return /* @__PURE__ */ (0, R.jsxs)("section", {
		className: "bo-draft-card",
		children: [
			/* @__PURE__ */ (0, R.jsxs)("div", {
				className: "bo-draft-head",
				children: [
					/* @__PURE__ */ (0, R.jsx)(ue, { size: 20 }),
					/* @__PURE__ */ (0, R.jsx)("strong", { children: e.type === "draft" ? "Kế hoạch bạn vừa chuẩn bị" : "Ước tính cho nhu cầu của bạn" }),
					/* @__PURE__ */ (0, R.jsx)("span", { children: "Bản nháp" })
				]
			}),
			/* @__PURE__ */ (0, R.jsx)("h3", { children: Rl[e.draft.service] }),
			/* @__PURE__ */ (0, R.jsxs)("div", {
				className: "bo-draft-data",
				children: [!e.quote.needsSurvey && /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [/* @__PURE__ */ (0, R.jsxs)("span", { children: [e.draft.boxes ?? 10, " hộp"] }), e.draft.service !== "boxes" && /* @__PURE__ */ (0, R.jsxs)("span", { children: [e.draft.distance ?? 5, " km"] })] }), e.draft.date && /* @__PURE__ */ (0, R.jsx)("span", { children: (/* @__PURE__ */ new Date(e.draft.date + "T12:00:00")).toLocaleDateString("vi-VN") })]
			}),
			/* @__PURE__ */ (0, R.jsxs)("strong", {
				className: "bo-draft-price",
				children: [e.quote.needsSurvey ? "Báo giá sau khảo sát" : zl(e.quote.total), /* @__PURE__ */ (0, R.jsx)("small", { children: e.quote.needsSurvey ? "Cần kiểm tra hiện trạng phòng" : "Dự kiến · chưa phải giá chốt" })]
			}),
			e.quote.lines?.length > 0 && /* @__PURE__ */ (0, R.jsxs)("details", { children: [/* @__PURE__ */ (0, R.jsxs)("summary", { children: ["Xem cách tính ", /* @__PURE__ */ (0, R.jsx)(ve, { size: 15 })] }), e.quote.lines.map((e) => /* @__PURE__ */ (0, R.jsxs)("p", { children: [/* @__PURE__ */ (0, R.jsx)("span", { children: e.label }), /* @__PURE__ */ (0, R.jsx)("b", { children: zl(e.amount) })] }, e.label))] }),
			e.assumptions?.length > 0 && /* @__PURE__ */ (0, R.jsxs)("p", {
				className: "bo-assumptions",
				children: [
					"Đang tạm tính: ",
					e.assumptions.join(", "),
					". Bạn có thể chỉnh lại trên biểu mẫu."
				]
			}),
			/* @__PURE__ */ (0, R.jsxs)("button", {
				type: "button",
				onClick: () => t(e.draft),
				children: ["Kiểm tra & tiếp tục đặt lịch ", /* @__PURE__ */ (0, R.jsx)(O, { size: 17 })]
			}),
			/* @__PURE__ */ (0, R.jsx)("p", {
				className: "bo-draft-note",
				children: "Chưa gửi yêu cầu, chưa giữ lịch. BOXANH xác nhận sau khảo sát và trao đổi."
			}),
			n.bookingEnabled === !1 && /* @__PURE__ */ (0, R.jsx)("p", {
				role: "status",
				children: "BOXANH đang tạm ngừng nhận đơn mới. Bạn có thể gọi để trao đổi."
			})
		]
	});
}
function G({ message: e, onQuote: t, config: n }) {
	let [r, i] = (0, E.useState)(!1);
	async function a() {
		try {
			await navigator.clipboard.writeText(e.text), i(!0), setTimeout(() => i(!1), 1800);
		} catch {
			i(!1);
		}
	}
	return /* @__PURE__ */ (0, R.jsxs)("article", {
		className: "bo-message bo-from-" + e.role,
		"aria-label": e.role === "user" ? "Tin nhắn của bạn" : "Câu trả lời của Bơ",
		children: [
			e.role === "assistant" && /* @__PURE__ */ (0, R.jsxs)("div", {
				className: "bo-message-identity",
				children: [
					/* @__PURE__ */ (0, R.jsx)(Ql, {
						mini: !0,
						paused: !0
					}),
					/* @__PURE__ */ (0, R.jsx)("strong", { children: "Bơ" }),
					/* @__PURE__ */ (0, R.jsx)("span", { children: e.mode === "guide" ? "Từ cẩm nang BOXANH" : "Trợ lý AI" })
				]
			}),
			/* @__PURE__ */ (0, R.jsxs)("div", {
				className: "bo-bubble",
				children: [
					/* @__PURE__ */ (0, R.jsx)(tu, { text: e.text }),
					e.pending && /* @__PURE__ */ (0, R.jsxs)("span", {
						className: "bo-typing",
						"aria-label": "Bơ đang trả lời",
						children: [
							/* @__PURE__ */ (0, R.jsx)("i", {}),
							/* @__PURE__ */ (0, R.jsx)("i", {}),
							/* @__PURE__ */ (0, R.jsx)("i", {})
						]
					}),
					e.error && /* @__PURE__ */ (0, R.jsx)("p", {
						className: "bo-message-error",
						role: "alert",
						children: e.error
					}),
					e.links && /* @__PURE__ */ (0, R.jsx)(nu, { links: e.links }),
					/* @__PURE__ */ (0, R.jsxs)("div", {
						className: "bo-action-stack",
						children: [e.actions?.filter((e) => ["draft", "quote"].includes(e.type)).map((e, r) => /* @__PURE__ */ (0, R.jsx)(iu, {
							action: e,
							onQuote: t,
							config: n
						}, r)), e.actions?.filter((e) => e.type === "links").map((e, t) => /* @__PURE__ */ (0, R.jsx)(nu, { links: e.links || [] }, "l" + t))]
					})
				]
			}),
			e.role === "assistant" && e.text && !e.pending && /* @__PURE__ */ (0, R.jsxs)("button", {
				className: "bo-copy",
				type: "button",
				onClick: a,
				children: [
					r ? /* @__PURE__ */ (0, R.jsx)(ge, { size: 13 }) : /* @__PURE__ */ (0, R.jsx)(we, { size: 13 }),
					" ",
					r ? "Đã sao chép" : "Sao chép"
				]
			})
		]
	});
}
function au({ config: e, onQuote: t }) {
	let [n, r] = (0, E.useState)(() => Yl.messages.map((e) => e.pending ? {
		...e,
		pending: !1,
		error: "Câu trả lời trước đã dừng khi bạn rời trang."
	} : e)), [i, a] = (0, E.useState)(""), [o, s] = (0, E.useState)({
		ready: !1,
		loading: !0
	}), [c, l] = (0, E.useState)(Yl.consent), [u, d] = (0, E.useState)(!1), [f, p] = (0, E.useState)(!1), [m, h] = (0, E.useState)(""), [g, _] = (0, E.useState)(!1), [v, y] = (0, E.useState)(!1), b = (0, E.useRef)(null), x = (0, E.useRef)(null), S = (0, E.useRef)(null), C = (0, E.useRef)(!0);
	(0, E.useEffect)(() => {
		let e = new AbortController();
		return fetch("/api/assistant/status", { signal: AbortSignal.any([e.signal, AbortSignal.timeout(5e3)]) }).then((e) => {
			if (!e.ok) throw Error();
			return e.json();
		}).then((e) => {
			s({
				...e,
				loading: !1
			}), e.ready && Yl.consentDestination !== (e.dataDestination || "openai") && (Yl.consent = !1, l(!1));
		}).catch(() => {
			e.signal.aborted || s({
				ready: !1,
				loading: !1,
				offline: !0
			});
		}), () => {
			e.abort(), x.current?.abort();
		};
	}, []), (0, E.useEffect)(() => {
		Yl.messages = n, C.current && b.current && (b.current.scrollTop = n.length ? b.current.scrollHeight : 0);
	}, [n, u]);
	function w(e, t) {
		r((n) => n.map((n) => n.id === e ? {
			...n,
			...typeof t == "function" ? t(n) : t
		} : n));
	}
	function T(e) {
		C.current = !0, p(!1), r((t) => [...t, {
			id: Zl(),
			role: "assistant",
			mode: "guide",
			text: e.title + "\n\n" + e.text,
			links: [e]
		}]);
	}
	async function ee(t, i = n) {
		let s = t.trim();
		if (u || !s) return;
		if (s.length > 1800) {
			h("Mỗi tin nhắn tối đa 1.800 ký tự.");
			return;
		}
		if (o.loading) {
			a(s), h("Bơ đang kiểm tra kết nối. Câu hỏi của bạn vẫn ở đây.");
			return;
		}
		if (o.ready && !c) {
			a(s), h("Vui lòng đồng ý gửi nội dung đến AI trước khi trò chuyện. Câu hỏi của bạn đã được giữ lại."), S.current?.focus();
			return;
		}
		h(""), a(""), p(!1), C.current = !0;
		let l = {
			id: Zl(),
			role: "user",
			text: s
		}, f = Zl();
		if (!o.ready) {
			let t = Hl(s, e, i);
			r([
				...i,
				l,
				{
					id: f,
					role: "assistant",
					mode: "guide",
					text: t.text,
					links: t.links
				}
			]);
			return;
		}
		r([
			...i,
			l,
			{
				id: f,
				role: "assistant",
				mode: "ai",
				text: "",
				pending: !0,
				actions: []
			}
		]), d(!0);
		let m = new AbortController();
		x.current = m;
		try {
			let e = await fetch("/api/assistant/chat", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/x-ndjson"
				},
				body: JSON.stringify({
					messages: ql(i, l),
					consent: !0
				}),
				signal: m.signal
			});
			if (!e.ok) {
				let t = await e.json();
				throw Error(t.error || "Chưa kết nối được Bơ.");
			}
			if (!e.body) throw Error("Chưa nhận được câu trả lời.");
			let t = e.body.getReader(), n = new TextDecoder(), r = e.headers.get("content-type")?.includes("application/x-ndjson"), a = "", o = !1;
			try {
				for (;;) {
					let { value: e, done: i } = await t.read();
					if (i) break;
					a = (a + n.decode(e, { stream: !0 })).replace(/\r\n/g, "\n");
					let s;
					for (; (s = a.indexOf(r ? "\n" : "\n\n")) >= 0;) {
						let e = a.slice(0, s);
						a = a.slice(s + (r ? 1 : 2));
						let t = r ? e.trim() : e.split("\n").filter((e) => e.startsWith("data:")).map((e) => e.slice(5).trimStart()).join("\n");
						if (!t) continue;
						let n = JSON.parse(t);
						if (n.type === "delta") w(f, (e) => ({ text: e.text + n.text }));
						else if (n.type === "action") w(f, (e) => ({ actions: [...e.actions, n.action] }));
						else if (n.type === "done") o = !0, w(f, {
							text: n.text,
							pending: !1,
							actions: n.actions
						});
						else if (n.type === "error") throw Error(n.message);
					}
				}
			} finally {
				t.releaseLock();
			}
			if (!o) throw Error("Câu trả lời bị gián đoạn. Bạn có thể thử lại.");
		} catch (e) {
			w(f, {
				pending: !1,
				error: e.name === "AbortError" ? "Đã dừng câu trả lời." : e.message
			});
		} finally {
			d(!1), x.current = null;
		}
	}
	function te() {
		let e = n.findLastIndex((e) => e.role === "user");
		e >= 0 && ee(n[e].text, n.slice(0, e));
	}
	function ne(e) {
		C.current = !0, p(!1), r((t) => [...t, {
			id: Zl(),
			role: "assistant",
			mode: "guide",
			text: "Mình đã chuẩn bị bản nháp bên dưới. Bạn kiểm tra thông tin và chi phí, rồi tiếp tục trên biểu mẫu khi sẵn sàng.",
			actions: [e]
		}]);
	}
	function re() {
		x.current?.abort(), r([]), Yl.messages = [], a(""), h(""), _(!1), C.current = !0;
	}
	let D = n.length ? Kl(n) : [];
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		className: "bo-chat-page",
		"data-assistant-page": !0,
		children: [
			/* @__PURE__ */ (0, R.jsxs)("header", {
				className: "bo-chat-header",
				children: [
					/* @__PURE__ */ (0, R.jsxs)("a", {
						className: "bo-chat-back",
						href: "/",
						"aria-label": "Về trang chủ BOXANH",
						children: [/* @__PURE__ */ (0, R.jsx)(ae, { size: 18 }), /* @__PURE__ */ (0, R.jsx)("span", { children: "BOXANH" })]
					}),
					/* @__PURE__ */ (0, R.jsxs)("div", {
						className: "bo-chat-brand",
						children: [
							/* @__PURE__ */ (0, R.jsx)("span", {
								className: "bo-brand-star",
								children: /* @__PURE__ */ (0, R.jsx)(Ye, { size: 16 })
							}),
							/* @__PURE__ */ (0, R.jsx)("strong", { children: "Bơ" }),
							/* @__PURE__ */ (0, R.jsx)("span", { children: "Phòng trò chuyện" })
						]
					}),
					/* @__PURE__ */ (0, R.jsxs)("a", {
						className: "bo-header-call",
						href: "tel:" + e.phone,
						children: [/* @__PURE__ */ (0, R.jsx)(Ne, { size: 16 }), /* @__PURE__ */ (0, R.jsx)("span", { children: "Gặp đội BOXANH" })]
					})
				]
			}),
			/* @__PURE__ */ (0, R.jsxs)("div", {
				className: "bo-chat-layout",
				children: [/* @__PURE__ */ (0, R.jsxs)("aside", {
					className: "bo-sidebar " + (f ? "bo-sidebar-open" : ""),
					children: [/* @__PURE__ */ (0, R.jsxs)("button", {
						type: "button",
						className: "bo-sidebar-toggle",
						onClick: () => p(!f),
						"aria-expanded": f,
						children: [
							/* @__PURE__ */ (0, R.jsx)(ce, { size: 17 }),
							" Lối tắt & cẩm nang ",
							f ? /* @__PURE__ */ (0, R.jsx)(be, { size: 17 }) : /* @__PURE__ */ (0, R.jsx)(ve, { size: 17 })
						]
					}), /* @__PURE__ */ (0, R.jsxs)("div", {
						className: "bo-sidebar-content",
						children: [
							/* @__PURE__ */ (0, R.jsxs)("div", {
								className: "bo-sidebar-title",
								children: [
									/* @__PURE__ */ (0, R.jsx)("span", { children: "NGƯỜI BẠN CHUYỂN TRỌ" }),
									/* @__PURE__ */ (0, R.jsxs)("h2", { children: [
										"Kể mình nghe.",
										/* @__PURE__ */ (0, R.jsx)("br", {}),
										"Cùng tìm cách nhé."
									] }),
									/* @__PURE__ */ (0, R.jsx)("p", { children: "Bạn có thể viết tự nhiên, hỏi tiếp hoặc thay đổi nhu cầu trong cuộc trò chuyện." })
								]
							}),
							/* @__PURE__ */ (0, R.jsxs)("button", {
								type: "button",
								className: "bo-new-chat",
								onClick: () => n.length ? _(!0) : re(),
								disabled: u,
								children: [/* @__PURE__ */ (0, R.jsx)(Le, { size: 17 }), " Cuộc trò chuyện mới"]
							}),
							/* @__PURE__ */ (0, R.jsxs)("button", {
								type: "button",
								className: "bo-sidebar-plan",
								onClick: () => {
									y(!0), p(!1);
								},
								children: [
									/* @__PURE__ */ (0, R.jsx)(ue, { size: 17 }),
									" Chuẩn bị đặt lịch ",
									/* @__PURE__ */ (0, R.jsx)(A, { size: 16 })
								]
							}),
							/* @__PURE__ */ (0, R.jsx)("span", {
								className: "bo-sidebar-label",
								children: "BẠN ĐANG CẦN GÌ?"
							}),
							/* @__PURE__ */ (0, R.jsx)("nav", {
								"aria-label": "Nhu cầu tư vấn",
								children: Ul.map((e) => /* @__PURE__ */ (0, R.jsxs)("button", {
									type: "button",
									disabled: u,
									onClick: () => ee(e.prompt),
									children: [/* @__PURE__ */ (0, R.jsx)("span", { children: e.title }), /* @__PURE__ */ (0, R.jsx)(O, { size: 15 })]
								}, e.id))
							}),
							/* @__PURE__ */ (0, R.jsxs)("details", {
								className: "bo-all-topics",
								children: [/* @__PURE__ */ (0, R.jsxs)("summary", { children: ["Toàn bộ cẩm nang ", /* @__PURE__ */ (0, R.jsx)(ve, { size: 15 })] }), Il.map((e) => /* @__PURE__ */ (0, R.jsxs)("button", {
									type: "button",
									onClick: () => T(e),
									disabled: u,
									children: [e.title, /* @__PURE__ */ (0, R.jsx)(A, { size: 14 })]
								}, e.id))]
							}),
							/* @__PURE__ */ (0, R.jsxs)("div", {
								className: "bo-human-card",
								children: [
									/* @__PURE__ */ (0, R.jsxs)("span", { children: [/* @__PURE__ */ (0, R.jsx)(qe, { size: 18 }), " Cần người hỗ trợ?"] }),
									/* @__PURE__ */ (0, R.jsx)("p", { children: "Đội BOXANH xác nhận giá, lịch và xử lý các tình huống cần đối chiếu." }),
									/* @__PURE__ */ (0, R.jsxs)("a", {
										href: "tel:" + e.phone,
										children: [
											e.phone.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3"),
											" ",
											/* @__PURE__ */ (0, R.jsx)(A, { size: 16 })
										]
									})
								]
							})
						]
					})]
				}), /* @__PURE__ */ (0, R.jsxs)("section", {
					className: "bo-conversation",
					"aria-label": "Trò chuyện với trợ lý BOXANH",
					children: [
						/* @__PURE__ */ (0, R.jsxs)("div", {
							className: "bo-conversation-status",
							children: [/* @__PURE__ */ (0, R.jsxs)("span", {
								className: o.ready ? "bo-status-ready" : "bo-status-guide",
								children: [/* @__PURE__ */ (0, R.jsx)("i", {}), o.loading ? "Đang kiểm tra kết nối" : o.ready ? o.dataDestination === "boxanh" ? "AI trên máy BOXANH sẵn sàng" : "AI sẵn sàng hỗ trợ" : "Đang dùng cẩm nang · AI chưa bật"]
							}), /* @__PURE__ */ (0, R.jsx)("span", {
								className: "bo-status-area",
								children: e.area
							})]
						}),
						/* @__PURE__ */ (0, R.jsx)("div", {
							ref: b,
							className: "bo-chat-scroll",
							onScroll: () => {
								let e = b.current;
								C.current = e.scrollHeight - e.scrollTop - e.clientHeight < 100;
							},
							children: n.length ? /* @__PURE__ */ (0, R.jsxs)("div", {
								className: "bo-messages",
								role: "log",
								"aria-label": "Lịch sử hội thoại",
								"aria-relevant": "additions",
								children: [
									/* @__PURE__ */ (0, R.jsx)("p", {
										className: "bo-session-label",
										children: "CÙNG BƠ TÌM CÁCH PHÙ HỢP"
									}),
									n.map((n) => /* @__PURE__ */ (0, R.jsx)(G, {
										message: n,
										onQuote: t,
										config: e
									}, n.id)),
									n.at(-1)?.error && /* @__PURE__ */ (0, R.jsxs)("button", {
										type: "button",
										className: "bo-retry",
										onClick: te,
										disabled: u,
										children: [/* @__PURE__ */ (0, R.jsx)(O, { size: 15 }), " Thử lại câu hỏi"]
									}),
									!!D.length && /* @__PURE__ */ (0, R.jsxs)("div", {
										className: "bo-followups",
										"aria-label": "Gợi ý tiếp tục cuộc trò chuyện",
										children: [/* @__PURE__ */ (0, R.jsx)("span", { children: "BẠN MUỐN TÌM HIỂU TIẾP?" }), D.map((e) => /* @__PURE__ */ (0, R.jsxs)("button", {
											type: "button",
											disabled: u,
											onClick: () => ee(e),
											children: [e, /* @__PURE__ */ (0, R.jsx)(O, { size: 14 })]
										}, e))]
									})
								]
							}) : /* @__PURE__ */ (0, R.jsxs)("div", {
								className: "bo-welcome bo-welcome-v12",
								children: [
									/* @__PURE__ */ (0, R.jsxs)("div", {
										className: "bo-opening-head",
										children: [/* @__PURE__ */ (0, R.jsx)(Ql, {}), /* @__PURE__ */ (0, R.jsxs)("div", { children: [/* @__PURE__ */ (0, R.jsx)("p", {
											className: "bo-kicker",
											children: "MÌNH LÀ BƠ, TRỢ LÝ BOXANH"
										}), /* @__PURE__ */ (0, R.jsxs)("h1", { children: [
											"Hôm nay, bạn cần",
											/* @__PURE__ */ (0, R.jsx)("br", {}),
											/* @__PURE__ */ (0, R.jsx)("em", { children: "mình giúp gì?" })
										] })] })]
									}),
									/* @__PURE__ */ (0, R.jsx)("div", {
										className: "bo-opening-message",
										"aria-label": "Lời chào và câu hỏi của Bơ",
										children: /* @__PURE__ */ (0, R.jsx)(tu, { text: Wl(e.area) })
									}),
									/* @__PURE__ */ (0, R.jsx)("p", {
										className: "bo-start-label",
										children: "CHỌN MỘT ĐIỀU BẠN CẦN, HOẶC NHẮN MÌNH BÊN DƯỚI"
									}),
									/* @__PURE__ */ (0, R.jsx)("div", {
										className: "bo-prompt-grid",
										children: Ul.map((e) => {
											let t = Xl[e.id];
											return /* @__PURE__ */ (0, R.jsxs)("button", {
												type: "button",
												onClick: () => ee(e.prompt),
												disabled: o.loading,
												children: [
													/* @__PURE__ */ (0, R.jsx)(t, { size: 19 }),
													/* @__PURE__ */ (0, R.jsx)("strong", { children: e.title }),
													/* @__PURE__ */ (0, R.jsx)(O, { size: 15 })
												]
											}, e.id);
										})
									}),
									/* @__PURE__ */ (0, R.jsxs)("details", {
										className: "bo-capabilities",
										children: [/* @__PURE__ */ (0, R.jsxs)("summary", { children: ["Khám phá mọi chức năng BOXANH ", /* @__PURE__ */ (0, R.jsx)(ve, { size: 16 })] }), /* @__PURE__ */ (0, R.jsx)("div", { children: Il.map((e) => /* @__PURE__ */ (0, R.jsxs)("button", {
											type: "button",
											onClick: () => T(e),
											children: [e.title, /* @__PURE__ */ (0, R.jsx)(A, { size: 14 })]
										}, e.id)) })]
									})
								]
							})
						}),
						/* @__PURE__ */ (0, R.jsxs)("div", {
							className: "bo-composer-area",
							children: [
								!o.loading && !o.ready && /* @__PURE__ */ (0, R.jsxs)("div", {
									className: "bo-mode-note",
									children: [/* @__PURE__ */ (0, R.jsx)(ce, { size: 16 }), /* @__PURE__ */ (0, R.jsxs)("p", { children: [
										/* @__PURE__ */ (0, R.jsx)("strong", { children: "AI hội thoại đang chờ kích hoạt." }),
										" ",
										o.offline ? "Chưa kết nối được máy chủ. " : "",
										"Bơ hiện hướng dẫn từ cẩm nang, chưa thể trò chuyện tự do như ChatGPT."
									] })]
								}),
								o.ready && /* @__PURE__ */ (0, R.jsxs)("label", {
									className: "bo-ai-consent",
									children: [/* @__PURE__ */ (0, R.jsx)("input", {
										type: "checkbox",
										checked: c,
										onChange: (e) => {
											l(e.target.checked), Yl.consent = e.target.checked, Yl.consentDestination = o.dataDestination || "openai", h("");
										}
									}), /* @__PURE__ */ (0, R.jsxs)("span", { children: [
										o.dataDestination === "boxanh" ? "Tôi đồng ý xử lý nội dung trò chuyện bằng AI trên máy chủ BOXANH. Không gửi nội dung tới OpenAI." : "Tôi đồng ý gửi nội dung trò chuyện tới OpenAI để nhận tư vấn AI.",
										" Không nhập mật khẩu, OTP hoặc thông tin thanh toán. ",
										/* @__PURE__ */ (0, R.jsx)("a", {
											href: "/chinh-sach#bao-mat",
											children: "Quyền riêng tư"
										})
									] })]
								}),
								/* @__PURE__ */ (0, R.jsxs)("form", {
									className: "bo-composer",
									onSubmit: (e) => {
										e.preventDefault(), ee(i);
									},
									children: [
										/* @__PURE__ */ (0, R.jsx)("label", {
											className: "sr-only",
											htmlFor: "bo-chat-input",
											children: "Câu hỏi dành cho Bơ"
										}),
										/* @__PURE__ */ (0, R.jsx)("textarea", {
											ref: S,
											id: "bo-chat-input",
											placeholder: "Kể Bơ nghe tình huống của bạn, hoặc hỏi tiếp điều vừa trao đổi…",
											value: i,
											maxLength: 1800,
											rows: 2,
											onChange: (e) => a(e.target.value),
											onKeyDown: (e) => {
												e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing && (e.preventDefault(), ee(i));
											}
										}),
										u ? /* @__PURE__ */ (0, R.jsx)("button", {
											type: "button",
											className: "bo-send",
											"aria-label": "Dừng câu trả lời",
											onClick: () => x.current?.abort(),
											children: /* @__PURE__ */ (0, R.jsx)(Ze, { size: 16 })
										}) : /* @__PURE__ */ (0, R.jsx)("button", {
											type: "submit",
											className: "bo-send",
											"aria-label": "Gửi câu hỏi",
											disabled: !i.trim() || o.loading,
											children: /* @__PURE__ */ (0, R.jsx)(Ge, { size: 19 })
										})
									]
								}),
								m && /* @__PURE__ */ (0, R.jsx)("p", {
									className: "bo-composer-error",
									role: "alert",
									children: m
								}),
								/* @__PURE__ */ (0, R.jsxs)("div", {
									className: "bo-composer-footer",
									children: [
										/* @__PURE__ */ (0, R.jsxs)("button", {
											type: "button",
											onClick: () => y(!0),
											children: [/* @__PURE__ */ (0, R.jsx)(ue, { size: 13 }), " Chuẩn bị đặt lịch"]
										}),
										/* @__PURE__ */ (0, R.jsx)("span", { children: "Giá & lịch do BOXANH xác nhận." }),
										/* @__PURE__ */ (0, R.jsx)("span", { children: i.length ? i.length + "/1.800" : "Enter để gửi · Shift + Enter xuống dòng" })
									]
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, R.jsx)(ru, {
				open: v,
				onOpenChange: y,
				onPrepared: ne,
				onQuote: t
			}),
			/* @__PURE__ */ (0, R.jsx)(xs, {
				open: g,
				onOpenChange: _,
				children: /* @__PURE__ */ (0, R.jsxs)(Ds, { children: [/* @__PURE__ */ (0, R.jsx)(ks, { className: "bo-modal-overlay" }), /* @__PURE__ */ (0, R.jsxs)(Ns, {
					className: "bo-reset-dialog",
					children: [
						/* @__PURE__ */ (0, R.jsx)(Hs, {
							className: "bo-close-reset",
							"aria-label": "Đóng xác nhận",
							children: /* @__PURE__ */ (0, R.jsx)(rt, { size: 18 })
						}),
						/* @__PURE__ */ (0, R.jsx)(Rs, { children: "Bắt đầu câu chuyện mới?" }),
						/* @__PURE__ */ (0, R.jsx)(Bs, { children: "Hội thoại hiện tại sẽ được bỏ khỏi phiên này. Các yêu cầu dịch vụ bạn đã gửi vẫn được giữ nguyên." }),
						/* @__PURE__ */ (0, R.jsxs)("div", { children: [/* @__PURE__ */ (0, R.jsx)("button", {
							type: "button",
							onClick: () => _(!1),
							children: "Giữ hội thoại"
						}), /* @__PURE__ */ (0, R.jsx)("button", {
							type: "button",
							onClick: re,
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
var ou = [
	{
		href: "/chuyen-tro",
		title: "Chuyển trọ",
		copy: "Đóng đồ. Chuyển đi. An tâm đến nơi.",
		icon: $e,
		image: "/assets/moving.webp",
		className: "move",
		index: "01"
	},
	{
		href: "/don-phong",
		title: "Dọn phòng",
		copy: "Trả phòng sạch. Đón khởi đầu mới.",
		icon: Ye,
		image: "/assets/room-real.webp",
		className: "clean",
		index: "02"
	},
	{
		href: "/ban-giao",
		title: "Bàn giao phòng",
		copy: "Kiểm tra kỹ. Ghi nhận rõ ràng.",
		icon: Te,
		image: "/assets/room.jpg",
		className: "hand",
		index: "03"
	}
];
function su({ href: e, children: t, className: n = "" }) {
	return /* @__PURE__ */ (0, R.jsxs)("a", {
		className: "n7-link " + n,
		href: e,
		children: [t, /* @__PURE__ */ (0, R.jsx)(A, { size: 19 })]
	});
}
function cu({ eyebrow: e, title: t, children: n }) {
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		className: "n7-section-head",
		children: [/* @__PURE__ */ (0, R.jsxs)("div", { children: [/* @__PURE__ */ (0, R.jsx)("p", {
			className: "n7-eyebrow",
			children: e
		}), /* @__PURE__ */ (0, R.jsx)("h2", { children: t })] }), n]
	});
}
function lu() {
	let e = (0, E.useRef)(null), t = (0, E.useRef)(null), [n, r] = (0, E.useState)(!1), [i, a] = (0, E.useState)(!1);
	(0, E.useEffect)(() => {
		let n = t.current, r = new IntersectionObserver(([t]) => {
			e.current?.classList.toggle("n7-offscreen", !t.isIntersecting), t.isIntersecting || n?.pause();
		});
		return r.observe(e.current), () => {
			r.disconnect(), n?.pause();
		};
	}, []);
	async function o() {
		if (i) {
			t.current.pause(), a(!1);
			return;
		}
		try {
			document.querySelectorAll("video").forEach((e) => e.pause()), t.current.currentTime = 0, await t.current.play(), a(!0);
		} catch {
			a(!1);
		}
	}
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		ref: e,
		className: "n7-ambassador " + (n ? "n7-paused" : ""),
		children: [
			/* @__PURE__ */ (0, R.jsx)("div", {
				className: "n7-character-disc",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, R.jsx)("span", { children: "CHUYỂN TRỌ · SỐNG XANH ·" })
			}),
			/* @__PURE__ */ (0, R.jsx)("img", {
				className: "n7-character",
				src: "/assets/boxanh-ambassador.png",
				width: "1024",
				height: "1536",
				fetchPriority: "high",
				alt: "Nhân vật minh họa BOXANH mặc đồng phục vận chuyển xanh, mỉm cười và cầm hộp bằng hai tay"
			}),
			/* @__PURE__ */ (0, R.jsxs)("div", {
				className: "n7-speech",
				children: [
					/* @__PURE__ */ (0, R.jsx)("span", { children: "BOXANH CHÀO BẠN" }),
					/* @__PURE__ */ (0, R.jsxs)("p", { children: [
						"“Hãy đến và sử dụng",
						/* @__PURE__ */ (0, R.jsx)("br", {}),
						"dịch vụ của chúng tôi”"
					] }),
					/* @__PURE__ */ (0, R.jsxs)("button", {
						type: "button",
						onClick: o,
						"aria-pressed": i,
						children: [/* @__PURE__ */ (0, R.jsx)(tt, { size: 15 }), i ? "Dừng lời chào" : "Nghe lời chào"]
					})
				]
			}),
			/* @__PURE__ */ (0, R.jsx)("span", {
				className: "n7-character-note",
				children: "Nhân vật minh họa thương hiệu"
			}),
			/* @__PURE__ */ (0, R.jsx)("button", {
				type: "button",
				className: "n7-motion-control",
				onClick: () => r(!n),
				"aria-label": n ? "Tiếp tục chuyển động nhân vật" : "Tạm dừng chuyển động nhân vật",
				"aria-pressed": n,
				children: n ? /* @__PURE__ */ (0, R.jsx)(Fe, { size: 14 }) : /* @__PURE__ */ (0, R.jsx)(je, { size: 14 })
			}),
			/* @__PURE__ */ (0, R.jsx)("audio", {
				ref: t,
				src: "/assets/boxanh-loi-chao.mp3",
				preload: "none",
				onEnded: () => a(!1),
				onPause: () => a(!1)
			})
		]
	});
}
function uu() {
	let e = (0, E.useRef)(null), [t, n] = (0, E.useState)(!1), [r, i] = (0, E.useState)("");
	(0, E.useEffect)(() => {
		let t = e.current;
		return () => t.pause();
	}, []);
	async function a() {
		try {
			i(""), document.querySelectorAll("audio").forEach((e) => e.pause()), await e.current.play();
		} catch {
			i("Chưa phát được video. Bạn có thể tải về để xem.");
		}
	}
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		className: "n7-player",
		children: [
			/* @__PURE__ */ (0, R.jsxs)("video", {
				ref: e,
				controls: !0,
				playsInline: !0,
				preload: "none",
				poster: "/assets/boxanh-video-v10-poster.png",
				"aria-label": "Video hướng dẫn sử dụng website BOXANH",
				onPlaying: () => n(!0),
				onPause: () => n(!1),
				onEnded: () => n(!1),
				children: [
					/* @__PURE__ */ (0, R.jsx)("source", {
						src: "/assets/boxanh-huong-dan-v10.mp4",
						type: "video/mp4"
					}),
					/* @__PURE__ */ (0, R.jsx)("track", {
						kind: "captions",
						src: "/assets/boxanh-huong-dan-v10.vtt",
						srcLang: "vi",
						label: "Tiếng Việt",
						default: !0
					}),
					"Trình duyệt của bạn chưa hỗ trợ video. ",
					/* @__PURE__ */ (0, R.jsx)("a", {
						href: "/assets/boxanh-huong-dan-v10.mp4",
						download: !0,
						children: "Tải video hướng dẫn"
					})
				]
			}),
			!t && /* @__PURE__ */ (0, R.jsx)("button", {
				className: "n7-video-play",
				type: "button",
				onClick: a,
				"aria-label": "Phát video hướng dẫn BOXANH",
				children: /* @__PURE__ */ (0, R.jsx)(Fe, {
					size: 22,
					fill: "currentColor"
				})
			}),
			r && /* @__PURE__ */ (0, R.jsx)("p", {
				className: "n7-video-error",
				role: "alert",
				children: r
			})
		]
	});
}
function du({ compact: e = !1 }) {
	return /* @__PURE__ */ (0, R.jsxs)("section", {
		id: "video-huong-dan",
		className: "n7-tutorial " + (e ? "n7-tutorial-compact" : ""),
		children: [/* @__PURE__ */ (0, R.jsxs)("div", {
			className: "n7-tutorial-copy",
			children: [
				/* @__PURE__ */ (0, R.jsx)("p", {
					className: "n7-eyebrow",
					children: "HƯỚNG DẪN NHANH CHO BẠN MỚI"
				}),
				/* @__PURE__ */ (0, R.jsxs)("h2", { children: [
					"Một vòng BOXANH.",
					/* @__PURE__ */ (0, R.jsx)("br", {}),
					/* @__PURE__ */ (0, R.jsx)("em", { children: "Biết ngay cách dùng." })
				] }),
				/* @__PURE__ */ (0, R.jsx)("p", { children: "Xem cách chọn dịch vụ, gửi yêu cầu, xử lý đồ thừa và tra cứu tiến độ." }),
				/* @__PURE__ */ (0, R.jsx)(su, {
					href: e ? "/huong-dan" : "/dat-lich",
					children: e ? "Mở trung tâm hướng dẫn" : "Thử đặt dịch vụ"
				})
			]
		}), /* @__PURE__ */ (0, R.jsxs)("div", {
			className: "n7-video-wrap",
			children: [/* @__PURE__ */ (0, R.jsx)(uu, {}), /* @__PURE__ */ (0, R.jsxs)("div", {
				className: "n7-video-caption",
				children: [/* @__PURE__ */ (0, R.jsxs)("span", { children: [/* @__PURE__ */ (0, R.jsx)(Fe, { size: 14 }), " Hướng dẫn bằng các màn hình thực tế"] }), /* @__PURE__ */ (0, R.jsxs)("a", {
					href: "/assets/boxanh-huong-dan-v10.mp4",
					download: !0,
					children: ["Tải video ", /* @__PURE__ */ (0, R.jsx)(A, { size: 14 })]
				})]
			})]
		})]
	});
}
function fu({ config: e }) {
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		className: "portal-home n7-home",
		"data-portal-home": !0,
		children: [
			/* @__PURE__ */ (0, R.jsxs)("section", {
				className: "n7-home-hero",
				children: [/* @__PURE__ */ (0, R.jsxs)("div", {
					className: "n7-wrap n7-hero-grid",
					children: [/* @__PURE__ */ (0, R.jsxs)("div", {
						className: "n7-hero-copy",
						children: [
							/* @__PURE__ */ (0, R.jsxs)("p", {
								className: "n7-eyebrow",
								children: [
									/* @__PURE__ */ (0, R.jsx)("span", { className: "n7-dot" }),
									" KHỞI ĐẦU TẠI ",
									e.area.toUpperCase()
								]
							}),
							/* @__PURE__ */ (0, R.jsxs)("h1", { children: [
								"Chuyển nơi ở.",
								/* @__PURE__ */ (0, R.jsx)("br", {}),
								/* @__PURE__ */ (0, R.jsxs)("span", { children: ["Nhẹ cả ", /* @__PURE__ */ (0, R.jsx)("em", { children: "hành trình." })] })
							] }),
							/* @__PURE__ */ (0, R.jsxs)("p", {
								className: "n7-hero-description",
								children: [
									"Chuyển đồ, dọn phòng, bàn giao.",
									/* @__PURE__ */ (0, R.jsx)("br", {}),
									"Một đầu mối. Hộp dùng lại. Chi phí rõ ràng."
								]
							}),
							/* @__PURE__ */ (0, R.jsxs)("div", {
								className: "n7-hero-actions",
								children: [/* @__PURE__ */ (0, R.jsx)(su, {
									href: "/uoc-tinh",
									className: "n7-primary",
									children: "Ước tính & nhận báo giá"
								}), /* @__PURE__ */ (0, R.jsxs)("a", {
									href: "#dich-vu",
									className: "n7-explore",
									children: ["Khám phá dịch vụ ", /* @__PURE__ */ (0, R.jsx)(O, { size: 18 })]
								})]
							}),
							/* @__PURE__ */ (0, R.jsxs)("div", {
								className: "n7-hero-assurances",
								children: [/* @__PURE__ */ (0, R.jsxs)("span", { children: [/* @__PURE__ */ (0, R.jsx)(me, { size: 17 }), " Khảo sát trước khi chốt"] }), /* @__PURE__ */ (0, R.jsxs)("span", { children: [/* @__PURE__ */ (0, R.jsx)(ze, { size: 17 }), " Thu hồi hộp để dùng tiếp"] })]
							})
						]
					}), /* @__PURE__ */ (0, R.jsx)(lu, {})]
				}), /* @__PURE__ */ (0, R.jsxs)("div", {
					className: "n7-hero-bottom n7-wrap",
					children: [
						/* @__PURE__ */ (0, R.jsx)("span", { children: "CHUYỂN TRỌ. SỐNG XANH." }),
						/* @__PURE__ */ (0, R.jsxs)("a", {
							href: "/ve-boxanh",
							children: ["Câu chuyện BOXANH ", /* @__PURE__ */ (0, R.jsx)(A, { size: 16 })]
						}),
						/* @__PURE__ */ (0, R.jsxs)("span", {
							className: "n7-hero-location",
							children: [/* @__PURE__ */ (0, R.jsx)(De, { size: 15 }), " Vinh, Nghệ An"]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, R.jsxs)("section", {
				className: "n7-wrap n7-home-services",
				id: "dich-vu",
				children: [
					/* @__PURE__ */ (0, R.jsx)(cu, {
						eyebrow: "BẠN CẦN LÀM GÌ?",
						title: "Chọn việc. BOXANH lo tiếp.",
						children: /* @__PURE__ */ (0, R.jsx)(su, {
							href: "/dich-vu",
							children: "Tất cả dịch vụ & bảng giá"
						})
					}),
					/* @__PURE__ */ (0, R.jsx)("div", {
						className: "n7-service-grid",
						children: ou.map(({ icon: e, ...t }) => /* @__PURE__ */ (0, R.jsxs)("a", {
							href: t.href,
							className: "n7-service-card n7-" + t.className,
							children: [/* @__PURE__ */ (0, R.jsxs)("div", {
								className: "n7-service-image",
								children: [
									/* @__PURE__ */ (0, R.jsx)("img", {
										src: t.image,
										alt: "",
										width: "1200",
										height: "800",
										loading: "lazy"
									}),
									/* @__PURE__ */ (0, R.jsx)("span", {
										className: "n7-service-number",
										children: t.index
									}),
									/* @__PURE__ */ (0, R.jsx)("span", {
										className: "n7-card-arrow",
										children: /* @__PURE__ */ (0, R.jsx)(A, { size: 23 })
									})
								]
							}), /* @__PURE__ */ (0, R.jsxs)("div", {
								className: "n7-service-card-copy",
								children: [
									/* @__PURE__ */ (0, R.jsx)(e, { size: 22 }),
									/* @__PURE__ */ (0, R.jsxs)("div", { children: [/* @__PURE__ */ (0, R.jsx)("h3", { children: t.title }), /* @__PURE__ */ (0, R.jsx)("p", { children: t.copy })] }),
									/* @__PURE__ */ (0, R.jsxs)("span", {
										className: "n7-open-label",
										children: ["Khám phá ", /* @__PURE__ */ (0, R.jsx)(O, { size: 15 })]
									})
								]
							})]
						}, t.href))
					}),
					/* @__PURE__ */ (0, R.jsxs)("p", {
						className: "n7-click-hint",
						children: [/* @__PURE__ */ (0, R.jsx)(A, { size: 15 }), " Bấm vào từng thẻ để mở trang riêng · Ảnh phòng và dịch vụ mang tính tham khảo"]
					})
				]
			}),
			/* @__PURE__ */ (0, R.jsx)("section", {
				className: "n7-features-zone",
				children: /* @__PURE__ */ (0, R.jsx)("div", {
					className: "n7-wrap n7-features-grid",
					children: [
						[
							ke,
							"/hop-tai-su-dung",
							"Hộp dùng lại",
							"Giao hộp trước. Thu hồi sau."
						],
						[
							ze,
							"/song-xanh",
							"Đồ thừa, giá trị mới",
							"Thu mua · Ký gửi · Phân loại"
						],
						[
							Ue,
							"/tra-cuu",
							"Tra cứu hành trình",
							"Mã yêu cầu + số điện thoại"
						],
						[
							ce,
							"/huong-dan",
							"Chuẩn bị thật gọn",
							"Chuẩn bị, quy trình & giải đáp"
						]
					].map(([e, t, n, r]) => /* @__PURE__ */ (0, R.jsxs)("a", {
						className: "n7-feature-link",
						href: t,
						children: [
							/* @__PURE__ */ (0, R.jsx)(e, { size: 26 }),
							/* @__PURE__ */ (0, R.jsx)("h3", { children: n }),
							/* @__PURE__ */ (0, R.jsx)("p", { children: r }),
							/* @__PURE__ */ (0, R.jsxs)("span", { children: ["Mở chi tiết ", /* @__PURE__ */ (0, R.jsx)(A, { size: 17 })] })
						]
					}, t))
				})
			}),
			/* @__PURE__ */ (0, R.jsx)("div", {
				className: "n7-wrap",
				children: /* @__PURE__ */ (0, R.jsx)(du, { compact: !0 })
			}),
			/* @__PURE__ */ (0, R.jsxs)("section", {
				className: "n7-wrap n7-home-end",
				children: [/* @__PURE__ */ (0, R.jsxs)("div", { children: [/* @__PURE__ */ (0, R.jsx)("h2", { children: "Căn phòng mới đang chờ." }), /* @__PURE__ */ (0, R.jsx)("p", { children: "Gửi nhu cầu của bạn. Cùng thống nhất một kế hoạch phù hợp." })] }), /* @__PURE__ */ (0, R.jsx)(su, {
					href: "/dat-lich",
					className: "n7-primary",
					children: "Bắt đầu với BOXANH"
				})]
			})
		]
	});
}
var pu = {
	"/tro-ly-ai": "Bơ · Trợ lý BOXANH",
	"/chuyen-tro": "Chuyển trọ",
	"/don-phong": "Dọn phòng",
	"/ban-giao": "Bàn giao phòng",
	"/hop-tai-su-dung": "Hộp tái sử dụng",
	"/song-xanh": "Đồ thừa & sống xanh",
	"/huong-dan": "Trung tâm hướng dẫn",
	"/uoc-tinh": "Ước tính dịch vụ"
};
function mu({ exclude: e }) {
	return /* @__PURE__ */ (0, R.jsxs)("section", {
		className: "n7-wrap n7-related",
		children: [/* @__PURE__ */ (0, R.jsx)(cu, {
			eyebrow: "TIẾP TỤC KHÁM PHÁ",
			title: "Cùng một hành trình."
		}), /* @__PURE__ */ (0, R.jsxs)("div", { children: [
			ou.filter((t) => t.href !== e).map((e) => /* @__PURE__ */ (0, R.jsx)(su, {
				href: e.href,
				children: e.title
			}, e.href)),
			/* @__PURE__ */ (0, R.jsx)(su, {
				href: "/hop-tai-su-dung",
				children: "Hộp tái sử dụng"
			}),
			/* @__PURE__ */ (0, R.jsx)(su, {
				href: "/song-xanh",
				children: "Xử lý đồ thừa"
			})
		] })]
	});
}
function hu() {
	let e = [
		"Chốt ngày chuyển và báo chủ trọ",
		"Tách đồ mang đi, đồ còn giá trị và đồ hỏng",
		"Giữ riêng giấy tờ, đồ quý và đồ dùng trong ngày",
		"Chụp hiện trạng đồ cần lưu ý",
		"Ghi nhóm đồ và kiểm đếm từng hộp",
		"Sắp xếp lối đi, thang máy và điểm đỗ xe"
	], [t, n] = (0, E.useState)([]);
	(0, E.useEffect)(() => {
		try {
			n(JSON.parse(localStorage.getItem("boxanh-preparation-v7") || "[]"));
		} catch {}
	}, []);
	function r(e) {
		let r = t.includes(e) ? t.filter((t) => t !== e) : [...t, e];
		n(r);
		try {
			localStorage.setItem("boxanh-preparation-v7", JSON.stringify(r));
		} catch {}
	}
	return /* @__PURE__ */ (0, R.jsxs)("section", {
		className: "n7-checklist",
		id: "checklist",
		children: [/* @__PURE__ */ (0, R.jsxs)("div", { children: [
			/* @__PURE__ */ (0, R.jsx)("p", {
				className: "n7-eyebrow",
				children: "DANH SÁCH CỦA BẠN"
			}),
			/* @__PURE__ */ (0, R.jsxs)("h2", { children: [
				"Chuẩn bị từng chút.",
				/* @__PURE__ */ (0, R.jsx)("br", {}),
				/* @__PURE__ */ (0, R.jsx)("em", { children: "Ngày chuyển nhẹ hơn." })
			] }),
			/* @__PURE__ */ (0, R.jsx)("p", { children: "Đánh dấu việc đã làm trên thiết bị này." }),
			/* @__PURE__ */ (0, R.jsxs)("span", {
				className: "n7-checklist-progress",
				role: "status",
				children: [
					t.length,
					" / ",
					e.length,
					" việc đã xong"
				]
			})
		] }), /* @__PURE__ */ (0, R.jsx)("div", { children: e.map((e, n) => /* @__PURE__ */ (0, R.jsxs)("label", { children: [/* @__PURE__ */ (0, R.jsx)("input", {
			type: "checkbox",
			checked: t.includes(n),
			onChange: () => r(n)
		}), /* @__PURE__ */ (0, R.jsx)("span", { children: e })] }, e)) })]
	});
}
function gu({ route: e, config: t, onQuote: n }) {
	let r = (0, E.useRef)(null);
	(0, E.useEffect)(() => {
		if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		let e = [...r.current.querySelectorAll("[data-bx-reveal]")], t = new IntersectionObserver((e) => e.forEach((e) => {
			e.isIntersecting && (e.target.classList.add("bx-visible"), t.unobserve(e.target));
		}), { threshold: .06 });
		return e.forEach((e) => {
			e.classList.add("bx-enter"), t.observe(e);
		}), () => t.disconnect();
	}, [e]);
	let i;
	return e === "/tro-ly-ai" && (i = /* @__PURE__ */ (0, R.jsx)(au, {
		config: t,
		onQuote: n
	})), e === "/chuyen-tro" && (i = /* @__PURE__ */ (0, R.jsx)(Tl, {
		c: t,
		onQuote: n
	})), e === "/don-phong" && (i = /* @__PURE__ */ (0, R.jsx)(Dl, {})), e === "/ban-giao" && (i = /* @__PURE__ */ (0, R.jsx)(kl, {})), e === "/hop-tai-su-dung" && (i = /* @__PURE__ */ (0, R.jsx)(jl, {})), e === "/song-xanh" && (i = /* @__PURE__ */ (0, R.jsx)(Nl, {})), e === "/huong-dan" && (i = /* @__PURE__ */ (0, R.jsx)(Pl, {
		c: t,
		video: /* @__PURE__ */ (0, R.jsx)(du, {}),
		checklist: /* @__PURE__ */ (0, R.jsx)(hu, {})
	})), e === "/uoc-tinh" && (i = /* @__PURE__ */ (0, R.jsx)(Fl, {
		c: t,
		onQuote: n
	})), /* @__PURE__ */ (0, R.jsxs)("div", {
		ref: r,
		className: e === "/tro-ly-ai" ? "bo-route-root" : "portal-home n7-detail n7-route-" + e.slice(1),
		"data-portal-detail": e,
		children: [i, e !== "/tro-ly-ai" && /* @__PURE__ */ (0, R.jsx)(mu, { exclude: e })]
	});
}
//#endregion
//#region src/portal-client.jsx
var _u, vu;
function yu() {
	_u?.unmount(), _u = void 0, vu && (vu.unmount(), vu = void 0, document.getElementById("home-assistant-entry").hidden = !0);
}
function bu(e, t) {
	let n = document.getElementById("home-assistant-entry");
	if (n) {
		n.hidden = !1;
		let e = { identifierPrefix: "boxanh-invite-" };
		n.querySelector("[data-ai-invite]") ? vu = (0, at.hydrateRoot)(n, /* @__PURE__ */ (0, R.jsx)($l, {}), e) : (vu = (0, at.createRoot)(n, e), (0, it.flushSync)(() => vu.render(/* @__PURE__ */ (0, R.jsx)($l, {}))));
	}
	let r = /* @__PURE__ */ (0, R.jsx)(fu, { ...t }), i = { identifierPrefix: "boxanh-home-" };
	e.querySelector("[data-portal-home]") ? _u = (0, at.hydrateRoot)(e, r, i) : (e.replaceChildren(), _u = (0, at.createRoot)(e, i), (0, it.flushSync)(() => _u.render(r)));
}
function xu(e, t) {
	let n = /* @__PURE__ */ (0, R.jsx)(gu, { ...t }), r = { identifierPrefix: "boxanh-detail-" };
	e.querySelector("[data-portal-detail]") ? _u = (0, at.hydrateRoot)(e, n, r) : (e.replaceChildren(), _u = (0, at.createRoot)(e, r), (0, it.flushSync)(() => _u.render(n)));
}
//#endregion
export { pu as detailTitles, yu as disposePortalHome, xu as mountPortalDetail, bu as mountPortalHome };
