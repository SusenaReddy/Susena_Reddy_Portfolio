"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[694], {
    1538: (e, t, n) => {
        n.d(t, {
            k5: () => i
        });
        var o = n(2115)
          , a = {
            color: void 0,
            size: void 0,
            className: void 0,
            style: void 0,
            attr: void 0
        }
          , r = o.createContext && o.createContext(a)
          , s = function() {
            return (s = Object.assign || function(e) {
                for (var t, n = 1, o = arguments.length; n < o; n++)
                    for (var a in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            }
            ).apply(this, arguments)
        }
          , l = function(e, t) {
            var n = {};
            for (var o in e)
                Object.prototype.hasOwnProperty.call(e, o) && 0 > t.indexOf(o) && (n[o] = e[o]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++)
                    0 > t.indexOf(o[a]) && Object.prototype.propertyIsEnumerable.call(e, o[a]) && (n[o[a]] = e[o[a]]);
            return n
        };
        function i(e) {
            return function(t) {
                return o.createElement(c, s({
                    attr: s({}, e.attr)
                }, t), function e(t) {
                    return t && t.map(function(t, n) {
                        return o.createElement(t.tag, s({
                            key: n
                        }, t.attr), e(t.child))
                    })
                }(e.child))
            }
        }
        function c(e) {
            var t = function(t) {
                var n, a = e.attr, r = e.size, i = e.title, c = l(e, ["attr", "size", "title"]), u = r || t.size || "1em";
                return t.className && (n = t.className),
                e.className && (n = (n ? n + " " : "") + e.className),
                o.createElement("svg", s({
                    stroke: "currentColor",
                    fill: "currentColor",
                    strokeWidth: "0"
                }, t.attr, a, c, {
                    className: n,
                    style: s(s({
                        color: e.color || t.color
                    }, t.style), e.style),
                    height: u,
                    width: u,
                    xmlns: "http://www.w3.org/2000/svg"
                }), i && o.createElement("title", null, i), e.children)
            };
            return void 0 !== r ? o.createElement(r.Consumer, null, function(e) {
                return t(e)
            }) : t(a)
        }
    }
    ,
    2551: (e, t, n) => {
        n.d(t, {
            ToastContainer: () => z,
            oR: () => N
        });
        var o = n(2115);
        let a = function() {
            for (var e, t, n = 0, o = "", a = arguments.length; n < a; n++)
                (e = arguments[n]) && (t = function e(t) {
                    var n, o, a = "";
                    if ("string" == typeof t || "number" == typeof t)
                        a += t;
                    else if ("object" == typeof t) {
                        if (Array.isArray(t)) {
                            var r = t.length;
                            for (n = 0; n < r; n++)
                                t[n] && (o = e(t[n])) && (a && (a += " "),
                                a += o)
                        } else
                            for (o in t)
                                t[o] && (a && (a += " "),
                                a += o)
                    }
                    return a
                }(e)) && (o && (o += " "),
                o += t);
            return o
        }
          , r = e => "number" == typeof e && !isNaN(e)
          , s = e => "string" == typeof e
          , l = e => "function" == typeof e
          , i = e => s(e) || l(e) ? e : null
          , c = e => (0,
        o.isValidElement)(e) || s(e) || l(e) || r(e);
        function u(e) {
            let {enter: t, exit: n, appendPosition: a=!1, collapse: r=!0, collapseDuration: s=300} = e;
            return function(e) {
                let {children: l, position: i, preventExitTransition: c, done: u, nodeRef: d, isIn: p, playToast: f} = e
                  , m = a ? "".concat(t, "--").concat(i) : t
                  , g = a ? "".concat(n, "--").concat(i) : n
                  , y = (0,
                o.useRef)(0);
                return (0,
                o.useLayoutEffect)( () => {
                    let e = d.current
                      , t = m.split(" ")
                      , n = o => {
                        o.target === d.current && (f(),
                        e.removeEventListener("animationend", n),
                        e.removeEventListener("animationcancel", n),
                        0 === y.current && "animationcancel" !== o.type && e.classList.remove(...t))
                    }
                    ;
                    e.classList.add(...t),
                    e.addEventListener("animationend", n),
                    e.addEventListener("animationcancel", n)
                }
                , []),
                (0,
                o.useEffect)( () => {
                    let e = d.current
                      , t = () => {
                        e.removeEventListener("animationend", t),
                        r ? function(e, t, n) {
                            void 0 === n && (n = 300);
                            let {scrollHeight: o, style: a} = e;
                            requestAnimationFrame( () => {
                                a.minHeight = "initial",
                                a.height = o + "px",
                                a.transition = "all ".concat(n, "ms"),
                                requestAnimationFrame( () => {
                                    a.height = "0",
                                    a.padding = "0",
                                    a.margin = "0",
                                    setTimeout(t, n)
                                }
                                )
                            }
                            )
                        }(e, u, s) : u()
                    }
                    ;
                    p || (c ? t() : (y.current = 1,
                    e.className += " ".concat(g),
                    e.addEventListener("animationend", t)))
                }
                , [p]),
                o.createElement(o.Fragment, null, l)
            }
        }
        function d(e, t) {
            return null != e ? {
                content: e.content,
                containerId: e.props.containerId,
                id: e.props.toastId,
                theme: e.props.theme,
                type: e.props.type,
                data: e.props.data || {},
                isLoading: e.props.isLoading,
                icon: e.props.icon,
                status: t
            } : {}
        }
        let p = new Map
          , f = []
          , m = new Set
          , g = e => m.forEach(t => t(e))
          , y = () => p.size > 0;
        function v(e, t) {
            var n;
            if (t)
                return !(null == (n = p.get(t)) || !n.isToastActive(e));
            let o = !1;
            return p.forEach(t => {
                t.isToastActive(e) && (o = !0)
            }
            ),
            o
        }
        function h(e, t) {
            c(e) && (y() || f.push({
                content: e,
                options: t
            }),
            p.forEach(n => {
                n.buildToast(e, t)
            }
            ))
        }
        function E(e, t) {
            p.forEach(n => {
                null != t && null != t && t.containerId ? (null == t ? void 0 : t.containerId) === n.id && n.toggle(e, null == t ? void 0 : t.id) : n.toggle(e, null == t ? void 0 : t.id)
            }
            )
        }
        function T(e) {
            let {delay: t, isRunning: n, closeToast: r, type: s="default", hide: i, className: c, style: u, controlledProgress: d, progress: p, rtl: f, isIn: m, theme: g} = e
              , y = i || d && 0 === p
              , v = {
                ...u,
                animationDuration: "".concat(t, "ms"),
                animationPlayState: n ? "running" : "paused"
            };
            d && (v.transform = "scaleX(".concat(p, ")"));
            let h = a("Toastify__progress-bar", d ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", "Toastify__progress-bar-theme--".concat(g), "Toastify__progress-bar--".concat(s), {
                "Toastify__progress-bar--rtl": f
            })
              , E = l(c) ? c({
                rtl: f,
                type: s,
                defaultClassName: h
            }) : a(h, c);
            return o.createElement("div", {
                className: "Toastify__progress-bar--wrp",
                "data-hidden": y
            }, o.createElement("div", {
                className: "Toastify__progress-bar--bg Toastify__progress-bar-theme--".concat(g, " Toastify__progress-bar--").concat(s)
            }), o.createElement("div", {
                role: "progressbar",
                "aria-hidden": y ? "true" : "false",
                "aria-label": "notification timer",
                className: E,
                style: v,
                [d && p >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: d && p < 1 ? null : () => {
                    m && r()
                }
            }))
        }
        let b = 1
          , _ = () => "" + b++;
        function I(e, t) {
            return h(e, t),
            t.toastId
        }
        function C(e, t) {
            return {
                ...t,
                type: t && t.type || e,
                toastId: t && (s(t.toastId) || r(t.toastId)) ? t.toastId : _()
            }
        }
        function L(e) {
            return (t, n) => I(t, C(e, n))
        }
        function N(e, t) {
            return I(e, C("default", t))
        }
        N.loading = (e, t) => I(e, C("default", {
            isLoading: !0,
            autoClose: !1,
            closeOnClick: !1,
            closeButton: !1,
            draggable: !1,
            ...t
        })),
        N.promise = function(e, t, n) {
            let o, {pending: a, error: r, success: i} = t;
            a && (o = s(a) ? N.loading(a, n) : N.loading(a.render, {
                ...n,
                ...a
            }));
            let c = {
                isLoading: null,
                autoClose: null,
                closeOnClick: null,
                closeButton: null,
                draggable: null
            }
              , u = (e, t, a) => {
                if (null == t)
                    return void N.dismiss(o);
                let r = {
                    type: e,
                    ...c,
                    ...n,
                    data: a
                }
                  , l = s(t) ? {
                    render: t
                } : t;
                return o ? N.update(o, {
                    ...r,
                    ...l
                }) : N(l.render, {
                    ...r,
                    ...l
                }),
                a
            }
              , d = l(e) ? e() : e;
            return d.then(e => u("success", i, e)).catch(e => u("error", r, e)),
            d
        }
        ,
        N.success = L("success"),
        N.info = L("info"),
        N.error = L("error"),
        N.warning = L("warning"),
        N.warn = N.warning,
        N.dark = (e, t) => I(e, C("default", {
            theme: "dark",
            ...t
        })),
        N.dismiss = function(e) {
            var t, n;
            y() ? null == e || s(t = e) || r(t) ? p.forEach(t => {
                t.removeToast(e)
            }
            ) : e && ("containerId"in e || "id"in e) && ((null == (n = p.get(e.containerId)) ? void 0 : n.removeToast(e.id)) || p.forEach(t => {
                t.removeToast(e.id)
            }
            )) : f = f.filter(t => null != e && t.options.toastId !== e)
        }
        ,
        N.clearWaitingQueue = function(e) {
            void 0 === e && (e = {}),
            p.forEach(t => {
                !t.props.limit || e.containerId && t.id !== e.containerId || t.clearQueue()
            }
            )
        }
        ,
        N.isActive = v,
        N.update = function(e, t) {
            void 0 === t && (t = {});
            let n = ( (e, t) => {
                var n;
                let {containerId: o} = t;
                return null == (n = p.get(o || 1)) ? void 0 : n.toasts.get(e)
            }
            )(e, t);
            if (n) {
                let {props: o, content: a} = n
                  , r = {
                    delay: 100,
                    ...o,
                    ...t,
                    toastId: t.toastId || e,
                    updateId: _()
                };
                r.toastId !== e && (r.staleId = e);
                let s = r.render || a;
                delete r.render,
                I(s, r)
            }
        }
        ,
        N.done = e => {
            N.update(e, {
                progress: 1
            })
        }
        ,
        N.onChange = function(e) {
            return m.add(e),
            () => {
                m.delete(e)
            }
        }
        ,
        N.play = e => E(!0, e),
        N.pause = e => E(!1, e);
        let w = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect
          , k = e => {
            let {theme: t, type: n, isLoading: a, ...r} = e;
            return o.createElement("svg", {
                viewBox: "0 0 24 24",
                width: "100%",
                height: "100%",
                fill: "colored" === t ? "currentColor" : "var(--toastify-icon-color-".concat(n, ")"),
                ...r
            })
        }
          , O = {
            info: function(e) {
                return o.createElement(k, {
                    ...e
                }, o.createElement("path", {
                    d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
                }))
            },
            warning: function(e) {
                return o.createElement(k, {
                    ...e
                }, o.createElement("path", {
                    d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
                }))
            },
            success: function(e) {
                return o.createElement(k, {
                    ...e
                }, o.createElement("path", {
                    d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
                }))
            },
            error: function(e) {
                return o.createElement(k, {
                    ...e
                }, o.createElement("path", {
                    d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
                }))
            },
            spinner: function() {
                return o.createElement("div", {
                    className: "Toastify__spinner"
                })
            }
        }
          , P = e => {
            let {isRunning: t, preventExitTransition: n, toastRef: r, eventHandlers: s, playToast: i} = function(e) {
                var t, n;
                let[a,r] = (0,
                o.useState)(!1)
                  , [s,l] = (0,
                o.useState)(!1)
                  , i = (0,
                o.useRef)(null)
                  , c = (0,
                o.useRef)({
                    start: 0,
                    delta: 0,
                    removalDistance: 0,
                    canCloseOnClick: !0,
                    canDrag: !1,
                    didMove: !1
                }).current
                  , {autoClose: u, pauseOnHover: d, closeToast: f, onClick: m, closeOnClick: g} = e;
                function y() {
                    r(!0)
                }
                function v() {
                    r(!1)
                }
                function h(t) {
                    let n = i.current;
                    c.canDrag && n && (c.didMove = !0,
                    a && v(),
                    c.delta = "x" === e.draggableDirection ? t.clientX - c.start : t.clientY - c.start,
                    c.start !== t.clientX && (c.canCloseOnClick = !1),
                    n.style.transform = "translate3d(".concat("x" === e.draggableDirection ? "".concat(c.delta, "px, var(--y)") : "0, calc(".concat(c.delta, "px + var(--y))"), ",0)"),
                    n.style.opacity = "" + (1 - Math.abs(c.delta / c.removalDistance)))
                }
                function E() {
                    document.removeEventListener("pointermove", h),
                    document.removeEventListener("pointerup", E);
                    let t = i.current;
                    if (c.canDrag && c.didMove && t) {
                        if (c.canDrag = !1,
                        Math.abs(c.delta) > c.removalDistance)
                            return l(!0),
                            e.closeToast(),
                            void e.collapseAll();
                        t.style.transition = "transform 0.2s, opacity 0.2s",
                        t.style.removeProperty("transform"),
                        t.style.removeProperty("opacity")
                    }
                }
                null == (n = p.get((t = {
                    id: e.toastId,
                    containerId: e.containerId,
                    fn: r
                }).containerId || 1)) || n.setToggle(t.id, t.fn),
                (0,
                o.useEffect)( () => {
                    if (e.pauseOnFocusLoss)
                        return document.hasFocus() || v(),
                        window.addEventListener("focus", y),
                        window.addEventListener("blur", v),
                        () => {
                            window.removeEventListener("focus", y),
                            window.removeEventListener("blur", v)
                        }
                }
                , [e.pauseOnFocusLoss]);
                let T = {
                    onPointerDown: function(t) {
                        if (!0 === e.draggable || e.draggable === t.pointerType) {
                            c.didMove = !1,
                            document.addEventListener("pointermove", h),
                            document.addEventListener("pointerup", E);
                            let n = i.current;
                            c.canCloseOnClick = !0,
                            c.canDrag = !0,
                            n.style.transition = "none",
                            "x" === e.draggableDirection ? (c.start = t.clientX,
                            c.removalDistance = n.offsetWidth * (e.draggablePercent / 100)) : (c.start = t.clientY,
                            c.removalDistance = n.offsetHeight * (80 === e.draggablePercent ? 1.5 * e.draggablePercent : e.draggablePercent) / 100)
                        }
                    },
                    onPointerUp: function(t) {
                        let {top: n, bottom: o, left: a, right: r} = i.current.getBoundingClientRect();
                        "touchend" !== t.nativeEvent.type && e.pauseOnHover && t.clientX >= a && t.clientX <= r && t.clientY >= n && t.clientY <= o ? v() : y()
                    }
                };
                return u && d && (T.onMouseEnter = v,
                e.stacked || (T.onMouseLeave = y)),
                g && (T.onClick = e => {
                    m && m(e),
                    c.canCloseOnClick && f()
                }
                ),
                {
                    playToast: y,
                    pauseToast: v,
                    isRunning: a,
                    preventExitTransition: s,
                    toastRef: i,
                    eventHandlers: T
                }
            }(e)
              , {closeButton: c, children: u, autoClose: d, onClick: f, type: m, hideProgressBar: g, closeToast: y, transition: v, position: h, className: E, style: b, bodyClassName: _, bodyStyle: I, progressClassName: C, progressStyle: L, updateId: N, role: w, progress: k, rtl: P, toastId: x, deleteToast: A, isIn: M, isLoading: z, closeOnClick: B, theme: R} = e
              , S = a("Toastify__toast", "Toastify__toast-theme--".concat(R), "Toastify__toast--".concat(m), {
                "Toastify__toast--rtl": P
            }, {
                "Toastify__toast--close-on-click": B
            })
              , D = l(E) ? E({
                rtl: P,
                position: h,
                type: m,
                defaultClassName: S
            }) : a(S, E)
              , j = function(e) {
                let {theme: t, type: n, isLoading: a, icon: r} = e
                  , s = null
                  , i = {
                    theme: t,
                    type: n
                };
                return !1 === r || (l(r) ? s = r({
                    ...i,
                    isLoading: a
                }) : (0,
                o.isValidElement)(r) ? s = (0,
                o.cloneElement)(r, i) : a ? s = O.spinner() : n in O && (s = O[n](i))),
                s
            }(e)
              , H = !!k || !d
              , F = {
                closeToast: y,
                type: m,
                theme: R
            }
              , V = null;
            return !1 === c || (V = l(c) ? c(F) : (0,
            o.isValidElement)(c) ? (0,
            o.cloneElement)(c, F) : function(e) {
                let {closeToast: t, theme: n, ariaLabel: a="close"} = e;
                return o.createElement("button", {
                    className: "Toastify__close-button Toastify__close-button--".concat(n),
                    type: "button",
                    onClick: e => {
                        e.stopPropagation(),
                        t(e)
                    }
                    ,
                    "aria-label": a
                }, o.createElement("svg", {
                    "aria-hidden": "true",
                    viewBox: "0 0 14 16"
                }, o.createElement("path", {
                    fillRule: "evenodd",
                    d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
                })))
            }(F)),
            o.createElement(v, {
                isIn: M,
                done: A,
                position: h,
                preventExitTransition: n,
                nodeRef: r,
                playToast: i
            }, o.createElement("div", {
                id: x,
                onClick: f,
                "data-in": M,
                className: D,
                ...s,
                style: b,
                ref: r
            }, o.createElement("div", {
                ...M && {
                    role: w
                },
                className: l(_) ? _({
                    type: m
                }) : a("Toastify__toast-body", _),
                style: I
            }, null != j && o.createElement("div", {
                className: a("Toastify__toast-icon", {
                    "Toastify--animate-icon Toastify__zoom-enter": !z
                })
            }, j), o.createElement("div", null, u)), V, o.createElement(T, {
                ...N && !H ? {
                    key: "pb-".concat(N)
                } : {},
                rtl: P,
                theme: R,
                delay: d,
                isRunning: t,
                isIn: M,
                closeToast: y,
                hide: g,
                type: m,
                style: L,
                className: C,
                controlledProgress: H,
                progress: k || 0
            })))
        }
          , x = function(e, t) {
            return void 0 === t && (t = !1),
            {
                enter: "Toastify--animate Toastify__".concat(e, "-enter"),
                exit: "Toastify--animate Toastify__".concat(e, "-exit"),
                appendPosition: t
            }
        }
          , A = u(x("bounce", !0))
          , M = (u(x("slide", !0)),
        u(x("zoom")),
        u(x("flip")),
        {
            position: "top-right",
            transition: A,
            autoClose: 5e3,
            closeButton: !0,
            pauseOnHover: !0,
            pauseOnFocusLoss: !0,
            draggable: "touch",
            draggablePercent: 80,
            draggableDirection: "x",
            role: "alert",
            theme: "light"
        });
        function z(e) {
            let t = {
                ...M,
                ...e
            }
              , n = e.stacked
              , [u,m] = (0,
            o.useState)(!0)
              , y = (0,
            o.useRef)(null)
              , {getToastToRender: E, isToastActive: T, count: b} = function(e) {
                let {subscribe: t, getSnapshot: n, setProps: a} = (0,
                o.useRef)(function(e) {
                    let t = e.containerId || 1;
                    return {
                        subscribe(n) {
                            let a = function(e, t, n) {
                                let a = 1
                                  , u = 0
                                  , p = []
                                  , f = []
                                  , m = []
                                  , g = t
                                  , y = new Map
                                  , v = new Set
                                  , h = () => {
                                    m = Array.from(y.values()),
                                    v.forEach(e => e())
                                }
                                  , E = e => {
                                    f = null == e ? [] : f.filter(t => t !== e),
                                    h()
                                }
                                  , T = e => {
                                    let {toastId: t, onOpen: a, updateId: r, children: s} = e.props
                                      , i = null == r;
                                    e.staleId && y.delete(e.staleId),
                                    y.set(t, e),
                                    f = [...f, e.props.toastId].filter(t => t !== e.staleId),
                                    h(),
                                    n(d(e, i ? "added" : "updated")),
                                    i && l(a) && a((0,
                                    o.isValidElement)(s) && s.props)
                                }
                                ;
                                return {
                                    id: e,
                                    props: g,
                                    observe: e => (v.add(e),
                                    () => v.delete(e)),
                                    toggle: (e, t) => {
                                        y.forEach(n => {
                                            null != t && t !== n.props.toastId || l(n.toggle) && n.toggle(e)
                                        }
                                        )
                                    }
                                    ,
                                    removeToast: E,
                                    toasts: y,
                                    clearQueue: () => {
                                        u -= p.length,
                                        p = []
                                    }
                                    ,
                                    buildToast: (t, f) => {
                                        var m, v;
                                        if ((t => {
                                            let {containerId: n, toastId: o, updateId: a} = t
                                              , r = y.has(o) && null == a;
                                            return (n ? n !== e : 1 !== e) || r
                                        }
                                        )(f))
                                            return;
                                        let {toastId: b, updateId: _, data: I, staleId: C, delay: L} = f
                                          , N = () => {
                                            E(b)
                                        }
                                          , w = null == _;
                                        w && u++;
                                        let k = {
                                            ...g,
                                            style: g.toastStyle,
                                            key: a++,
                                            ...Object.fromEntries(Object.entries(f).filter(e => {
                                                let[t,n] = e;
                                                return null != n
                                            }
                                            )),
                                            toastId: b,
                                            updateId: _,
                                            data: I,
                                            closeToast: N,
                                            isIn: !1,
                                            className: i(f.className || g.toastClassName),
                                            bodyClassName: i(f.bodyClassName || g.bodyClassName),
                                            progressClassName: i(f.progressClassName || g.progressClassName),
                                            autoClose: !f.isLoading && (m = f.autoClose,
                                            v = g.autoClose,
                                            !1 === m || r(m) && m > 0 ? m : v),
                                            deleteToast() {
                                                let e = y.get(b)
                                                  , {onClose: t, children: a} = e.props;
                                                l(t) && t((0,
                                                o.isValidElement)(a) && a.props),
                                                n(d(e, "removed")),
                                                y.delete(b),
                                                --u < 0 && (u = 0),
                                                p.length > 0 ? T(p.shift()) : h()
                                            }
                                        };
                                        k.closeButton = g.closeButton,
                                        !1 === f.closeButton || c(f.closeButton) ? k.closeButton = f.closeButton : !0 === f.closeButton && (k.closeButton = !c(g.closeButton) || g.closeButton);
                                        let O = t;
                                        (0,
                                        o.isValidElement)(t) && !s(t.type) ? O = (0,
                                        o.cloneElement)(t, {
                                            closeToast: N,
                                            toastProps: k,
                                            data: I
                                        }) : l(t) && (O = t({
                                            closeToast: N,
                                            toastProps: k,
                                            data: I
                                        }));
                                        let P = {
                                            content: O,
                                            props: k,
                                            staleId: C
                                        };
                                        g.limit && g.limit > 0 && u > g.limit && w ? p.push(P) : r(L) ? setTimeout( () => {
                                            T(P)
                                        }
                                        , L) : T(P)
                                    }
                                    ,
                                    setProps(e) {
                                        g = e
                                    },
                                    setToggle: (e, t) => {
                                        y.get(e).toggle = t
                                    }
                                    ,
                                    isToastActive: e => f.some(t => t === e),
                                    getSnapshot: () => g.newestOnTop ? m.reverse() : m
                                }
                            }(t, e, g);
                            p.set(t, a);
                            let u = a.observe(n);
                            return f.forEach(e => h(e.content, e.options)),
                            f = [],
                            () => {
                                u(),
                                p.delete(t)
                            }
                        },
                        setProps(e) {
                            var n;
                            null == (n = p.get(t)) || n.setProps(e)
                        },
                        getSnapshot() {
                            var e;
                            return null == (e = p.get(t)) ? void 0 : e.getSnapshot()
                        }
                    }
                }(e)).current;
                a(e);
                let u = (0,
                o.useSyncExternalStore)(t, n, n);
                return {
                    getToastToRender: function(e) {
                        if (!u)
                            return [];
                        let t = new Map;
                        return u.forEach(e => {
                            let {position: n} = e.props;
                            t.has(n) || t.set(n, []),
                            t.get(n).push(e)
                        }
                        ),
                        Array.from(t, t => e(t[0], t[1]))
                    },
                    isToastActive: v,
                    count: null == u ? void 0 : u.length
                }
            }(t)
              , {className: _, style: I, rtl: C, containerId: L} = t;
            function k() {
                n && (m(!0),
                N.play())
            }
            return w( () => {
                if (n) {
                    var e;
                    let n = y.current.querySelectorAll('[data-in="true"]')
                      , o = null == (e = t.position) ? void 0 : e.includes("top")
                      , a = 0
                      , r = 0;
                    Array.from(n).reverse().forEach( (e, t) => {
                        e.classList.add("Toastify__toast--stacked"),
                        t > 0 && (e.dataset.collapsed = "".concat(u)),
                        e.dataset.pos || (e.dataset.pos = o ? "top" : "bot");
                        let n = a * (u ? .2 : 1) + (u ? 0 : 12 * t);
                        e.style.setProperty("--y", "".concat(o ? n : -1 * n, "px")),
                        e.style.setProperty("--g", "".concat(12)),
                        e.style.setProperty("--s", "" + (1 - (u ? r : 0))),
                        a += e.offsetHeight,
                        r += .025
                    }
                    )
                }
            }
            , [u, b, n]),
            o.createElement("div", {
                ref: y,
                className: "Toastify",
                id: L,
                onMouseEnter: () => {
                    n && (m(!1),
                    N.pause())
                }
                ,
                onMouseLeave: k
            }, E( (e, t) => {
                let r = t.length ? {
                    ...I
                } : {
                    ...I,
                    pointerEvents: "none"
                };
                return o.createElement("div", {
                    className: function(e) {
                        let t = a("Toastify__toast-container", "Toastify__toast-container--".concat(e), {
                            "Toastify__toast-container--rtl": C
                        });
                        return l(_) ? _({
                            position: e,
                            rtl: C,
                            defaultClassName: t
                        }) : a(t, i(_))
                    }(e),
                    style: r,
                    key: "container-".concat(e)
                }, t.map(e => {
                    let {content: t, props: a} = e;
                    return o.createElement(P, {
                        ...a,
                        stacked: n,
                        collapseAll: k,
                        isIn: T(a.toastId, a.containerId),
                        style: a.style,
                        key: "toast-".concat(a.key)
                    }, t)
                }
                ))
            }
            ))
        }
    }
}]);
