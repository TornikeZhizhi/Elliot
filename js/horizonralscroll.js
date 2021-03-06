/*!
 * imagesLoaded PACKAGED v3.0.4
 * JavaScript is all like "You images are done yet or what?"
 */ (function () {
    "use strict";
    function e() {}
    function t(e, t) {
        for (var n = e.length; n--; ) if (e[n].listener === t) return n;
        return -1;
    }
    var n = e.prototype;
    (n.getListeners = function (e) {
        var t,
            n,
            i = this._getEvents();
        if ("object" == typeof e) {
            t = {};
            for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n]);
        } else t = i[e] || (i[e] = []);
        return t;
    }),
        (n.flattenListeners = function (e) {
            var t,
                n = [];
            for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
            return n;
        }),
        (n.getListenersAsObject = function (e) {
            var t,
                n = this.getListeners(e);
            return n instanceof Array && ((t = {}), (t[e] = n)), t || n;
        }),
        (n.addListener = function (e, n) {
            var i,
                r = this.getListenersAsObject(e),
                o = "object" == typeof n;
            for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : { listener: n, once: !1 });
            return this;
        }),
        (n.on = n.addListener),
        (n.addOnceListener = function (e, t) {
            return this.addListener(e, { listener: t, once: !0 });
        }),
        (n.once = n.addOnceListener),
        (n.defineEvent = function (e) {
            return this.getListeners(e), this;
        }),
        (n.defineEvents = function (e) {
            for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
            return this;
        }),
        (n.removeListener = function (e, n) {
            var i,
                r,
                o = this.getListenersAsObject(e);
            for (r in o) o.hasOwnProperty(r) && ((i = t(o[r], n)), -1 !== i && o[r].splice(i, 1));
            return this;
        }),
        (n.off = n.removeListener),
        (n.addListeners = function (e, t) {
            return this.manipulateListeners(!1, e, t);
        }),
        (n.removeListeners = function (e, t) {
            return this.manipulateListeners(!0, e, t);
        }),
        (n.manipulateListeners = function (e, t, n) {
            var i,
                r,
                o = e ? this.removeListener : this.addListener,
                s = e ? this.removeListeners : this.addListeners;
            if ("object" != typeof t || t instanceof RegExp) for (i = n.length; i--; ) o.call(this, t, n[i]);
            else for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
            return this;
        }),
        (n.removeEvent = function (e) {
            var t,
                n = typeof e,
                i = this._getEvents();
            if ("string" === n) delete i[e];
            else if ("object" === n) for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
            else delete this._events;
            return this;
        }),
        (n.emitEvent = function (e, t) {
            var n,
                i,
                r,
                o,
                s = this.getListenersAsObject(e);
            for (r in s) if (s.hasOwnProperty(r)) for (i = s[r].length; i--; ) (n = s[r][i]), (o = n.listener.apply(this, t || [])), (o === this._getOnceReturnValue() || n.once === !0) && this.removeListener(e, s[r][i].listener);
            return this;
        }),
        (n.trigger = n.emitEvent),
        (n.emit = function (e) {
            var t = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(e, t);
        }),
        (n.setOnceReturnValue = function (e) {
            return (this._onceReturnValue = e), this;
        }),
        (n._getOnceReturnValue = function () {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0;
        }),
        (n._getEvents = function () {
            return this._events || (this._events = {});
        }),
        "function" == typeof define && define.amd
            ? define(function () {
                  return e;
              })
            : "undefined" != typeof module && module.exports
            ? (module.exports = e)
            : (this.EventEmitter = e);
}.call(this),
    (function (e) {
        "use strict";
        var t = document.documentElement,
            n = function () {};
        t.addEventListener
            ? (n = function (e, t, n) {
                  e.addEventListener(t, n, !1);
              })
            : t.attachEvent &&
              (n = function (t, n, i) {
                  (t[n + i] = i.handleEvent
                      ? function () {
                            var t = e.event;
                            (t.target = t.target || t.srcElement), i.handleEvent.call(i, t);
                        }
                      : function () {
                            var n = e.event;
                            (n.target = n.target || n.srcElement), i.call(t, n);
                        }),
                      t.attachEvent("on" + n, t[n + i]);
              });
        var i = function () {};
        t.removeEventListener
            ? (i = function (e, t, n) {
                  e.removeEventListener(t, n, !1);
              })
            : t.detachEvent &&
              (i = function (e, t, n) {
                  e.detachEvent("on" + t, e[t + n]);
                  try {
                      delete e[t + n];
                  } catch (i) {
                      e[t + n] = void 0;
                  }
              });
        var r = { bind: n, unbind: i };
        "function" == typeof define && define.amd ? define(r) : (e.eventie = r);
    })(this),
    (function (e) {
        "use strict";
        function t(e, t) {
            for (var n in t) e[n] = t[n];
            return e;
        }
        function n(e) {
            return "[object Array]" === c.call(e);
        }
        function i(e) {
            var t = [];
            if (n(e)) t = e;
            else if ("number" == typeof e.length) for (var i = 0, r = e.length; r > i; i++) t.push(e[i]);
            else t.push(e);
            return t;
        }
        function r(e, n) {
            function r(e, n, s) {
                if (!(this instanceof r)) return new r(e, n);
                "string" == typeof e && (e = document.querySelectorAll(e)),
                    (this.elements = i(e)),
                    (this.options = t({}, this.options)),
                    "function" == typeof n ? (s = n) : t(this.options, n),
                    s && this.on("always", s),
                    this.getImages(),
                    o && (this.jqDeferred = new o.Deferred());
                var a = this;
                setTimeout(function () {
                    a.check();
                });
            }
            function c(e) {
                this.img = e;
            }
            (r.prototype = new e()),
                (r.prototype.options = {}),
                (r.prototype.getImages = function () {
                    this.images = [];
                    for (var e = 0, t = this.elements.length; t > e; e++) {
                        var n = this.elements[e];
                        "IMG" === n.nodeName && this.addImage(n);
                        for (var i = n.querySelectorAll("img"), r = 0, o = i.length; o > r; r++) {
                            var s = i[r];
                            this.addImage(s);
                        }
                    }
                }),
                (r.prototype.addImage = function (e) {
                    var t = new c(e);
                    this.images.push(t);
                }),
                (r.prototype.check = function () {
                    function e(e, r) {
                        return t.options.debug && a && s.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0;
                    }
                    var t = this,
                        n = 0,
                        i = this.images.length;
                    if (((this.hasAnyBroken = !1), !i)) return this.complete(), void 0;
                    for (var r = 0; i > r; r++) {
                        var o = this.images[r];
                        o.on("confirm", e), o.check();
                    }
                }),
                (r.prototype.progress = function (e) {
                    this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
                    var t = this;
                    setTimeout(function () {
                        t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify(t, e);
                    });
                }),
                (r.prototype.complete = function () {
                    var e = this.hasAnyBroken ? "fail" : "done";
                    this.isComplete = !0;
                    var t = this;
                    setTimeout(function () {
                        if ((t.emit(e, t), t.emit("always", t), t.jqDeferred)) {
                            var n = t.hasAnyBroken ? "reject" : "resolve";
                            t.jqDeferred[n](t);
                        }
                    });
                }),
                o &&
                    (o.fn.imagesLoaded = function (e, t) {
                        var n = new r(this, e, t);
                        return n.jqDeferred.promise(o(this));
                    });
            var f = {};
            return (
                (c.prototype = new e()),
                (c.prototype.check = function () {
                    var e = f[this.img.src];
                    if (e) return this.useCached(e), void 0;
                    if (((f[this.img.src] = this), this.img.complete && void 0 !== this.img.naturalWidth)) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
                    var t = (this.proxyImage = new Image());
                    n.bind(t, "load", this), n.bind(t, "error", this), (t.src = this.img.src);
                }),
                (c.prototype.useCached = function (e) {
                    if (e.isConfirmed) this.confirm(e.isLoaded, "cached was confirmed");
                    else {
                        var t = this;
                        e.on("confirm", function (e) {
                            return t.confirm(e.isLoaded, "cache emitted confirmed"), !0;
                        });
                    }
                }),
                (c.prototype.confirm = function (e, t) {
                    (this.isConfirmed = !0), (this.isLoaded = e), this.emit("confirm", this, t);
                }),
                (c.prototype.handleEvent = function (e) {
                    var t = "on" + e.type;
                    this[t] && this[t](e);
                }),
                (c.prototype.onload = function () {
                    this.confirm(!0, "onload"), this.unbindProxyEvents();
                }),
                (c.prototype.onerror = function () {
                    this.confirm(!1, "onerror"), this.unbindProxyEvents();
                }),
                (c.prototype.unbindProxyEvents = function () {
                    n.unbind(this.proxyImage, "load", this), n.unbind(this.proxyImage, "error", this);
                }),
                r
            );
        }
        var o = e.jQuery,
            s = e.console,
            a = s !== void 0,
            c = Object.prototype.toString;
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], r) : (e.imagesLoaded = r(e.EventEmitter, e.eventie));
    })(window));

/*! Copyright (c) 2013 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.1.3
 *
 * Requires: 1.2.2+
 */ (function (factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    } else {
        if (typeof exports === "object") {
            module.exports = factory;
        } else {
            factory(jQuery);
        }
    }
})(function ($) {
    var toFix = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"];
    var toBind = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"];
    var lowestDelta, lowestDeltaXY;
    if ($.event.fixHooks) {
        for (var i = toFix.length; i; ) {
            $.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
        }
    }
    $.event.special.mousewheel = {
        setup: function () {
            if (this.addEventListener) {
                for (var i = toBind.length; i; ) {
                    this.addEventListener(toBind[--i], handler, false);
                }
            } else {
                this.onmousewheel = handler;
            }
        },
        teardown: function () {
            if (this.removeEventListener) {
                for (var i = toBind.length; i; ) {
                    this.removeEventListener(toBind[--i], handler, false);
                }
            } else {
                this.onmousewheel = null;
            }
        },
    };
    $.fn.extend({
        mousewheel: function (fn) {
            return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
        },
        unmousewheel: function (fn) {
            return this.unbind("mousewheel", fn);
        },
    });
    function handler(event) {
        var orgEvent = event || window.event,
            args = [].slice.call(arguments, 1),
            delta = 0,
            deltaX = 0,
            deltaY = 0,
            absDelta = 0,
            absDeltaXY = 0,
            fn;
        event = $.event.fix(orgEvent);
        event.type = "mousewheel";
        if (orgEvent.wheelDelta) {
            delta = orgEvent.wheelDelta;
        }
        if (orgEvent.detail) {
            delta = orgEvent.detail * -1;
        }
        if (orgEvent.deltaY) {
            deltaY = orgEvent.deltaY * -1;
            delta = deltaY;
        }
        if (orgEvent.deltaX) {
            deltaX = orgEvent.deltaX;
            delta = deltaX * -1;
        }
        if (orgEvent.wheelDeltaY !== undefined) {
            deltaY = orgEvent.wheelDeltaY;
        }
        if (orgEvent.wheelDeltaX !== undefined) {
            deltaX = orgEvent.wheelDeltaX * -1;
        }
        absDelta = Math.abs(delta);
        if (!lowestDelta || absDelta < lowestDelta) {
            lowestDelta = absDelta;
        }
        absDeltaXY = Math.max(Math.abs(deltaY), Math.abs(deltaX));
        if (!lowestDeltaXY || absDeltaXY < lowestDeltaXY) {
            lowestDeltaXY = absDeltaXY;
        }
        fn = delta > 0 ? "floor" : "ceil";
        delta = Math[fn](delta / lowestDelta);
        deltaX = Math[fn](deltaX / lowestDeltaXY);
        deltaY = Math[fn](deltaY / lowestDeltaXY);
        args.unshift(event, delta, deltaX, deltaY);
        return ($.event.dispatch || $.event.handle).apply(this, args);
    }
});

/*
== malihu jquery custom scrollbars plugin == 
version: 2.8.2 
author: malihu (http://manos.malihu.gr) 
plugin home: http://manos.malihu.gr/jquery-custom-content-scroller
Copyright 2010-2013 Manos Malihutsakis
*/ (function (c) {
    var b = {
            init: function (e) {
                var f = {
                        set_width: false,
                        set_height: false,
                        horizontalScroll: false,
                        scrollInertia: 950,
                        mouseWheel: true,
                        mouseWheelPixels: "auto",
                        autoDraggerLength: true,
                        autoHideScrollbar: false,
                        snapAmount: null,
                        snapOffset: 0,
                        scrollButtons: { enable: false, scrollType: "continuous", scrollSpeed: "auto", scrollAmount: 40 },
                        advanced: { updateOnBrowserResize: true, updateOnContentResize: false, autoExpandHorizontalScroll: false, autoScrollOnFocus: true, normalizeMouseWheelDelta: false },
                        contentTouchScroll: true,
                        callbacks: {
                            onScrollStart: function () {},
                            onScroll: function () {},
                            onTotalScroll: function () {},
                            onTotalScrollBack: function () {},
                            onTotalScrollOffset: 0,
                            onTotalScrollBackOffset: 0,
                            whileScrolling: function () {},
                        },
                        theme: "light",
                    },
                    e = c.extend(true, f, e);
                return this.each(function () {
                    var m = c(this);
                    if (e.set_width) {
                        m.css("width", e.set_width);
                    }
                    if (e.set_height) {
                        m.css("height", e.set_height);
                    }
                    if (!c(document).data("mCustomScrollbar-index")) {
                        c(document).data("mCustomScrollbar-index", "1");
                    } else {
                        var t = parseInt(c(document).data("mCustomScrollbar-index"));
                        c(document).data("mCustomScrollbar-index", t + 1);
                    }
                    m.wrapInner("<div class='mCustomScrollBox mCS-" + e.theme + "' id='mCSB_" + c(document).data("mCustomScrollbar-index") + "' style='position:relative; height:100%; overflow:hidden; max-width:100%;' />").addClass(
                        "mCustomScrollbar _mCS_" + c(document).data("mCustomScrollbar-index")
                    );
                    var g = m.children(".mCustomScrollBox");
                    if (e.horizontalScroll) {
                        g.addClass("mCSB_horizontal").wrapInner("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />");
                        var k = g.children(".mCSB_h_wrapper");
                        k.wrapInner("<div class='mCSB_container' style='position:absolute; left:0;' />").children(".mCSB_container").css({ width: k.children().outerWidth(), position: "relative" }).unwrap();
                    } else {
                        g.wrapInner("<div class='mCSB_container' style='position:relative; top:0;' />");
                    }
                    var o = g.children(".mCSB_container");
                    if (c.support.touch) {
                        o.addClass("mCS_touch");
                    }
                    o.after(
                        "<div class='mCSB_scrollTools' style='position:absolute;'><div class='mCSB_draggerContainer'><div class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' style='position:relative;'></div></div><div class='mCSB_draggerRail'></div></div></div>"
                    );
                    var l = g.children(".mCSB_scrollTools"),
                        h = l.children(".mCSB_draggerContainer"),
                        q = h.children(".mCSB_dragger");
                    if (e.horizontalScroll) {
                        q.data("minDraggerWidth", q.width());
                    } else {
                        q.data("minDraggerHeight", q.height());
                    }
                    if (e.scrollButtons.enable) {
                        if (e.horizontalScroll) {
                            l.prepend("<a class='mCSB_buttonLeft' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonRight' oncontextmenu='return false;'></a>");
                        } else {
                            l.prepend("<a class='mCSB_buttonUp' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonDown' oncontextmenu='return false;'></a>");
                        }
                    }
                    g.bind("scroll", function () {
                        if (!m.is(".mCS_disabled")) {
                            g.scrollTop(0).scrollLeft(0);
                        }
                    });
                    m.data({
                        mCS_Init: true,
                        mCustomScrollbarIndex: c(document).data("mCustomScrollbar-index"),
                        horizontalScroll: e.horizontalScroll,
                        scrollInertia: e.scrollInertia,
                        scrollEasing: "mcsEaseOut",
                        mouseWheel: e.mouseWheel,
                        mouseWheelPixels: e.mouseWheelPixels,
                        autoDraggerLength: e.autoDraggerLength,
                        autoHideScrollbar: e.autoHideScrollbar,
                        snapAmount: e.snapAmount,
                        snapOffset: e.snapOffset,
                        scrollButtons_enable: e.scrollButtons.enable,
                        scrollButtons_scrollType: e.scrollButtons.scrollType,
                        scrollButtons_scrollSpeed: e.scrollButtons.scrollSpeed,
                        scrollButtons_scrollAmount: e.scrollButtons.scrollAmount,
                        autoExpandHorizontalScroll: e.advanced.autoExpandHorizontalScroll,
                        autoScrollOnFocus: e.advanced.autoScrollOnFocus,
                        normalizeMouseWheelDelta: e.advanced.normalizeMouseWheelDelta,
                        contentTouchScroll: e.contentTouchScroll,
                        onScrollStart_Callback: e.callbacks.onScrollStart,
                        onScroll_Callback: e.callbacks.onScroll,
                        onTotalScroll_Callback: e.callbacks.onTotalScroll,
                        onTotalScrollBack_Callback: e.callbacks.onTotalScrollBack,
                        onTotalScroll_Offset: e.callbacks.onTotalScrollOffset,
                        onTotalScrollBack_Offset: e.callbacks.onTotalScrollBackOffset,
                        whileScrolling_Callback: e.callbacks.whileScrolling,
                        bindEvent_scrollbar_drag: false,
                        bindEvent_content_touch: false,
                        bindEvent_scrollbar_click: false,
                        bindEvent_mousewheel: false,
                        bindEvent_buttonsContinuous_y: false,
                        bindEvent_buttonsContinuous_x: false,
                        bindEvent_buttonsPixels_y: false,
                        bindEvent_buttonsPixels_x: false,
                        bindEvent_focusin: false,
                        bindEvent_autoHideScrollbar: false,
                        mCSB_buttonScrollRight: false,
                        mCSB_buttonScrollLeft: false,
                        mCSB_buttonScrollDown: false,
                        mCSB_buttonScrollUp: false,
                    });
                    if (e.horizontalScroll) {
                        if (m.css("max-width") !== "none") {
                            if (!e.advanced.updateOnContentResize) {
                                e.advanced.updateOnContentResize = true;
                            }
                        }
                    } else {
                        if (m.css("max-height") !== "none") {
                            var s = false,
                                r = parseInt(m.css("max-height"));
                            if (m.css("max-height").indexOf("%") >= 0) {
                                (s = r), (r = (m.parent().height() * s) / 100);
                            }
                            m.css("overflow", "hidden");
                            g.css("max-height", r);
                        }
                    }
                    m.mCustomScrollbar("update");
                    if (e.advanced.updateOnBrowserResize) {
                        var i,
                            j = c(window).width(),
                            u = c(window).height();
                        c(window).bind("resize." + m.data("mCustomScrollbarIndex"), function () {
                            if (i) {
                                clearTimeout(i);
                            }
                            i = setTimeout(function () {
                                if (!m.is(".mCS_disabled") && !m.is(".mCS_destroyed")) {
                                    var w = c(window).width(),
                                        v = c(window).height();
                                    if (j !== w || u !== v) {
                                        if (m.css("max-height") !== "none" && s) {
                                            g.css("max-height", (m.parent().height() * s) / 100);
                                        }
                                        m.mCustomScrollbar("update");
                                        j = w;
                                        u = v;
                                    }
                                }
                            }, 150);
                        });
                    }
                    if (e.advanced.updateOnContentResize) {
                        var p;
                        if (e.horizontalScroll) {
                            var n = o.outerWidth();
                        } else {
                            var n = o.outerHeight();
                        }
                        p = setInterval(function () {
                            if (e.horizontalScroll) {
                                if (e.advanced.autoExpandHorizontalScroll) {
                                    o.css({ position: "absolute", width: "auto" }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({ width: o.outerWidth(), position: "relative" }).unwrap();
                                }
                                var v = o.outerWidth();
                            } else {
                                var v = o.outerHeight();
                            }
                            if (v != n) {
                                m.mCustomScrollbar("update");
                                n = v;
                            }
                        }, 300);
                    }
                });
            },
            update: function () {
                var n = c(this),
                    k = n.children(".mCustomScrollBox"),
                    q = k.children(".mCSB_container");
                q.removeClass("mCS_no_scrollbar");
                n.removeClass("mCS_disabled mCS_destroyed");
                k.scrollTop(0).scrollLeft(0);
                var y = k.children(".mCSB_scrollTools"),
                    o = y.children(".mCSB_draggerContainer"),
                    m = o.children(".mCSB_dragger");
                if (n.data("horizontalScroll")) {
                    var A = y.children(".mCSB_buttonLeft"),
                        t = y.children(".mCSB_buttonRight"),
                        f = k.width();
                    if (n.data("autoExpandHorizontalScroll")) {
                        q.css({ position: "absolute", width: "auto" }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({ width: q.outerWidth(), position: "relative" }).unwrap();
                    }
                    var z = q.outerWidth();
                } else {
                    var w = y.children(".mCSB_buttonUp"),
                        g = y.children(".mCSB_buttonDown"),
                        r = k.height(),
                        i = q.outerHeight();
                }
                if (i > r && !n.data("horizontalScroll")) {
                    y.css("display", "block");
                    var s = o.height();
                    if (n.data("autoDraggerLength")) {
                        var u = Math.round((r / i) * s),
                            l = m.data("minDraggerHeight");
                        if (u <= l) {
                            m.css({ height: l });
                        } else {
                            if (u >= s - 10) {
                                var p = s - 10;
                                m.css({ height: p });
                            } else {
                                m.css({ height: u });
                            }
                        }
                        m.children(".mCSB_dragger_bar").css({ "line-height": m.height() + "px" });
                    }
                    var B = m.height(),
                        x = (i - r) / (s - B);
                    n.data("scrollAmount", x).mCustomScrollbar("scrolling", k, q, o, m, w, g, A, t);
                    var D = Math.abs(q.position().top);
                    n.mCustomScrollbar("scrollTo", D, { scrollInertia: 0, trigger: "internal" });
                } else {
                    if (z > f && n.data("horizontalScroll")) {
                        y.css("display", "block");
                        var h = o.width();
                        if (n.data("autoDraggerLength")) {
                            var j = Math.round((f / z) * h),
                                C = m.data("minDraggerWidth");
                            if (j <= C) {
                                m.css({ width: C });
                            } else {
                                if (j >= h - 10) {
                                    var e = h - 10;
                                    m.css({ width: e });
                                } else {
                                    m.css({ width: j });
                                }
                            }
                        }
                        var v = m.width(),
                            x = (z - f) / (h - v);
                        n.data("scrollAmount", x).mCustomScrollbar("scrolling", k, q, o, m, w, g, A, t);
                        var D = Math.abs(q.position().left);
                        n.mCustomScrollbar("scrollTo", D, { scrollInertia: 0, trigger: "internal" });
                    } else {
                        k.unbind("mousewheel focusin");
                        if (n.data("horizontalScroll")) {
                            m.add(q).css("left", 0);
                        } else {
                            m.add(q).css("top", 0);
                        }
                        y.css("display", "none");
                        q.addClass("mCS_no_scrollbar");
                        n.data({ bindEvent_mousewheel: false, bindEvent_focusin: false });
                    }
                }
            },
            scrolling: function (h, p, m, j, w, e, A, v) {
                var k = c(this);
                if (!k.data("bindEvent_scrollbar_drag")) {
                    var n, o;
                    if (c.support.msPointer) {
                        j.bind("MSPointerDown", function (H) {
                            H.preventDefault();
                            k.data({ on_drag: true });
                            j.addClass("mCSB_dragger_onDrag");
                            var G = c(this),
                                J = G.offset(),
                                F = H.originalEvent.pageX - J.left,
                                I = H.originalEvent.pageY - J.top;
                            if (F < G.width() && F > 0 && I < G.height() && I > 0) {
                                n = I;
                                o = F;
                            }
                        });
                        c(document)
                            .bind("MSPointerMove." + k.data("mCustomScrollbarIndex"), function (H) {
                                H.preventDefault();
                                if (k.data("on_drag")) {
                                    var G = j,
                                        J = G.offset(),
                                        F = H.originalEvent.pageX - J.left,
                                        I = H.originalEvent.pageY - J.top;
                                    D(n, o, I, F);
                                }
                            })
                            .bind("MSPointerUp." + k.data("mCustomScrollbarIndex"), function (x) {
                                k.data({ on_drag: false });
                                j.removeClass("mCSB_dragger_onDrag");
                            });
                    } else {
                        j.bind("mousedown touchstart", function (H) {
                            H.preventDefault();
                            H.stopImmediatePropagation();
                            var G = c(this),
                                K = G.offset(),
                                F,
                                J;
                            if (H.type === "touchstart") {
                                var I = H.originalEvent.touches[0] || H.originalEvent.changedTouches[0];
                                F = I.pageX - K.left;
                                J = I.pageY - K.top;
                            } else {
                                k.data({ on_drag: true });
                                j.addClass("mCSB_dragger_onDrag");
                                F = H.pageX - K.left;
                                J = H.pageY - K.top;
                            }
                            if (F < G.width() && F > 0 && J < G.height() && J > 0) {
                                n = J;
                                o = F;
                            }
                        }).bind("touchmove", function (H) {
                            H.preventDefault();
                            H.stopImmediatePropagation();
                            var K = H.originalEvent.touches[0] || H.originalEvent.changedTouches[0],
                                G = c(this),
                                J = G.offset(),
                                F = K.pageX - J.left,
                                I = K.pageY - J.top;
                            D(n, o, I, F);
                        });
                        c(document)
                            .bind("mousemove." + k.data("mCustomScrollbarIndex"), function (H) {
                                if (k.data("on_drag")) {
                                    var G = j,
                                        J = G.offset(),
                                        F = H.pageX - J.left,
                                        I = H.pageY - J.top;
                                    D(n, o, I, F);
                                }
                            })
                            .bind("mouseup." + k.data("mCustomScrollbarIndex"), function (x) {
                                k.data({ on_drag: false });
                                j.removeClass("mCSB_dragger_onDrag");
                            });
                    }
                    k.data({ bindEvent_scrollbar_drag: true });
                }
                function D(G, H, I, F) {
                    if (k.data("horizontalScroll")) {
                        k.mCustomScrollbar("scrollTo", j.position().left - H + F, { moveDragger: true, trigger: "internal" });
                    } else {
                        k.mCustomScrollbar("scrollTo", j.position().top - G + I, { moveDragger: true, trigger: "internal" });
                    }
                }
                if (c.support.touch && k.data("contentTouchScroll")) {
                    if (!k.data("bindEvent_content_touch")) {
                        var l, B, r, s, u, C, E;
                        p.bind("touchstart", function (x) {
                            x.stopImmediatePropagation();
                            l = x.originalEvent.touches[0] || x.originalEvent.changedTouches[0];
                            B = c(this);
                            r = B.offset();
                            u = l.pageX - r.left;
                            s = l.pageY - r.top;
                            C = s;
                            E = u;
                        });
                        p.bind("touchmove", function (x) {
                            x.preventDefault();
                            x.stopImmediatePropagation();
                            l = x.originalEvent.touches[0] || x.originalEvent.changedTouches[0];
                            B = c(this).parent();
                            r = B.offset();
                            u = l.pageX - r.left;
                            s = l.pageY - r.top;
                            if (k.data("horizontalScroll")) {
                                k.mCustomScrollbar("scrollTo", E - u, { trigger: "internal" });
                            } else {
                                k.mCustomScrollbar("scrollTo", C - s, { trigger: "internal" });
                            }
                        });
                    }
                }
                if (!k.data("bindEvent_scrollbar_click")) {
                    m.bind("click", function (F) {
                        var x = (F.pageY - m.offset().top) * k.data("scrollAmount"),
                            y = c(F.target);
                        if (k.data("horizontalScroll")) {
                            x = (F.pageX - m.offset().left) * k.data("scrollAmount");
                        }
                        if (y.hasClass("mCSB_draggerContainer") || y.hasClass("mCSB_draggerRail")) {
                            k.mCustomScrollbar("scrollTo", x, { trigger: "internal", scrollEasing: "draggerRailEase" });
                        }
                    });
                    k.data({ bindEvent_scrollbar_click: true });
                }
                if (k.data("mouseWheel")) {
                    if (!k.data("bindEvent_mousewheel")) {
                        h.bind("mousewheel", function (H, J) {
                            var G,
                                F = k.data("mouseWheelPixels"),
                                x = Math.abs(p.position().top),
                                I = j.position().top,
                                y = m.height() - j.height();
                            if (k.data("normalizeMouseWheelDelta")) {
                                if (J < 0) {
                                    J = -1;
                                } else {
                                    J = 1;
                                }
                            }
                            if (F === "auto") {
                                F = 100 + Math.round(k.data("scrollAmount") / 2);
                            }
                            if (k.data("horizontalScroll")) {
                                I = j.position().left;
                                y = m.width() - j.width();
                                x = Math.abs(p.position().left);
                            }
                            if ((J > 0 && I !== 0) || (J < 0 && I !== y)) {
                                H.preventDefault();
                                H.stopImmediatePropagation();
                            }
                            G = x - J * F;
                            k.mCustomScrollbar("scrollTo", G, { trigger: "internal" });
                        });
                        k.data({ bindEvent_mousewheel: true });
                    }
                }
                if (k.data("scrollButtons_enable")) {
                    if (k.data("scrollButtons_scrollType") === "pixels") {
                        if (k.data("horizontalScroll")) {
                            v.add(A).unbind("mousedown touchstart MSPointerDown mouseup MSPointerUp mouseout MSPointerOut touchend", i, g);
                            k.data({ bindEvent_buttonsContinuous_x: false });
                            if (!k.data("bindEvent_buttonsPixels_x")) {
                                v.bind("click", function (x) {
                                    x.preventDefault();
                                    q(Math.abs(p.position().left) + k.data("scrollButtons_scrollAmount"));
                                });
                                A.bind("click", function (x) {
                                    x.preventDefault();
                                    q(Math.abs(p.position().left) - k.data("scrollButtons_scrollAmount"));
                                });
                                k.data({ bindEvent_buttonsPixels_x: true });
                            }
                        } else {
                            e.add(w).unbind("mousedown touchstart MSPointerDown mouseup MSPointerUp mouseout MSPointerOut touchend", i, g);
                            k.data({ bindEvent_buttonsContinuous_y: false });
                            if (!k.data("bindEvent_buttonsPixels_y")) {
                                e.bind("click", function (x) {
                                    x.preventDefault();
                                    q(Math.abs(p.position().top) + k.data("scrollButtons_scrollAmount"));
                                });
                                w.bind("click", function (x) {
                                    x.preventDefault();
                                    q(Math.abs(p.position().top) - k.data("scrollButtons_scrollAmount"));
                                });
                                k.data({ bindEvent_buttonsPixels_y: true });
                            }
                        }
                        function q(x) {
                            if (!j.data("preventAction")) {
                                j.data("preventAction", true);
                                k.mCustomScrollbar("scrollTo", x, { trigger: "internal" });
                            }
                        }
                    } else {
                        if (k.data("horizontalScroll")) {
                            v.add(A).unbind("click");
                            k.data({ bindEvent_buttonsPixels_x: false });
                            if (!k.data("bindEvent_buttonsContinuous_x")) {
                                v.bind("mousedown touchstart MSPointerDown", function (y) {
                                    y.preventDefault();
                                    var x = z();
                                    k.data({
                                        mCSB_buttonScrollRight: setInterval(function () {
                                            k.mCustomScrollbar("scrollTo", Math.abs(p.position().left) + x, { trigger: "internal", scrollEasing: "easeOutCirc" });
                                        }, 17),
                                    });
                                });
                                var i = function (x) {
                                    x.preventDefault();
                                    clearInterval(k.data("mCSB_buttonScrollRight"));
                                };
                                v.bind("mouseup touchend MSPointerUp mouseout MSPointerOut", i);
                                A.bind("mousedown touchstart MSPointerDown", function (y) {
                                    y.preventDefault();
                                    var x = z();
                                    k.data({
                                        mCSB_buttonScrollLeft: setInterval(function () {
                                            k.mCustomScrollbar("scrollTo", Math.abs(p.position().left) - x, { trigger: "internal", scrollEasing: "easeOutCirc" });
                                        }, 17),
                                    });
                                });
                                var g = function (x) {
                                    x.preventDefault();
                                    clearInterval(k.data("mCSB_buttonScrollLeft"));
                                };
                                A.bind("mouseup touchend MSPointerUp mouseout MSPointerOut", g);
                                k.data({ bindEvent_buttonsContinuous_x: true });
                            }
                        } else {
                            e.add(w).unbind("click");
                            k.data({ bindEvent_buttonsPixels_y: false });
                            if (!k.data("bindEvent_buttonsContinuous_y")) {
                                e.bind("mousedown touchstart MSPointerDown", function (y) {
                                    y.preventDefault();
                                    var x = z();
                                    k.data({
                                        mCSB_buttonScrollDown: setInterval(function () {
                                            k.mCustomScrollbar("scrollTo", Math.abs(p.position().top) + x, { trigger: "internal", scrollEasing: "easeOutCirc" });
                                        }, 17),
                                    });
                                });
                                var t = function (x) {
                                    x.preventDefault();
                                    clearInterval(k.data("mCSB_buttonScrollDown"));
                                };
                                e.bind("mouseup touchend MSPointerUp mouseout MSPointerOut", t);
                                w.bind("mousedown touchstart MSPointerDown", function (y) {
                                    y.preventDefault();
                                    var x = z();
                                    k.data({
                                        mCSB_buttonScrollUp: setInterval(function () {
                                            k.mCustomScrollbar("scrollTo", Math.abs(p.position().top) - x, { trigger: "internal", scrollEasing: "easeOutCirc" });
                                        }, 17),
                                    });
                                });
                                var f = function (x) {
                                    x.preventDefault();
                                    clearInterval(k.data("mCSB_buttonScrollUp"));
                                };
                                w.bind("mouseup touchend MSPointerUp mouseout MSPointerOut", f);
                                k.data({ bindEvent_buttonsContinuous_y: true });
                            }
                        }
                        function z() {
                            var x = k.data("scrollButtons_scrollSpeed");
                            if (k.data("scrollButtons_scrollSpeed") === "auto") {
                                x = Math.round((k.data("scrollInertia") + 100) / 40);
                            }
                            return x;
                        }
                    }
                }
                if (k.data("autoScrollOnFocus")) {
                    if (!k.data("bindEvent_focusin")) {
                        h.bind("focusin", function () {
                            h.scrollTop(0).scrollLeft(0);
                            var x = c(document.activeElement);
                            if (x.is("input,textarea,select,button,a[tabindex],area,object")) {
                                var G = p.position().top,
                                    y = x.position().top,
                                    F = h.height() - x.outerHeight();
                                if (k.data("horizontalScroll")) {
                                    G = p.position().left;
                                    y = x.position().left;
                                    F = h.width() - x.outerWidth();
                                }
                                if (G + y < 0 || G + y > F) {
                                    k.mCustomScrollbar("scrollTo", y, { trigger: "internal" });
                                }
                            }
                        });
                        k.data({ bindEvent_focusin: true });
                    }
                }
                if (k.data("autoHideScrollbar")) {
                    if (!k.data("bindEvent_autoHideScrollbar")) {
                        h.bind("mouseenter", function (x) {
                            h.addClass("mCS-mouse-over");
                            d.showScrollbar.call(h.children(".mCSB_scrollTools"));
                        }).bind("mouseleave touchend", function (x) {
                            h.removeClass("mCS-mouse-over");
                            if (x.type === "mouseleave") {
                                d.hideScrollbar.call(h.children(".mCSB_scrollTools"));
                            }
                        });
                        k.data({ bindEvent_autoHideScrollbar: true });
                    }
                }
            },
            scrollTo: function (e, f) {
                var i = c(this),
                    o = { moveDragger: false, trigger: "external", callbacks: true, scrollInertia: i.data("scrollInertia"), scrollEasing: i.data("scrollEasing") },
                    f = c.extend(o, f),
                    p,
                    g = i.children(".mCustomScrollBox"),
                    k = g.children(".mCSB_container"),
                    r = g.children(".mCSB_scrollTools"),
                    j = r.children(".mCSB_draggerContainer"),
                    h = j.children(".mCSB_dragger"),
                    t = (draggerSpeed = f.scrollInertia),
                    q,
                    s,
                    m,
                    l;
                if (!k.hasClass("mCS_no_scrollbar")) {
                    i.data({ mCS_trigger: f.trigger });
                    if (i.data("mCS_Init")) {
                        f.callbacks = false;
                    }
                    if (e || e === 0) {
                        if (typeof e === "number") {
                            if (f.moveDragger) {
                                p = e;
                                if (i.data("horizontalScroll")) {
                                    e = h.position().left * i.data("scrollAmount");
                                } else {
                                    e = h.position().top * i.data("scrollAmount");
                                }
                                draggerSpeed = 0;
                            } else {
                                p = e / i.data("scrollAmount");
                            }
                        } else {
                            if (typeof e === "string") {
                                var v;
                                if (e === "top") {
                                    v = 0;
                                } else {
                                    if (e === "bottom" && !i.data("horizontalScroll")) {
                                        v = k.outerHeight() - g.height();
                                    } else {
                                        if (e === "left") {
                                            v = 0;
                                        } else {
                                            if (e === "right" && i.data("horizontalScroll")) {
                                                v = k.outerWidth() - g.width();
                                            } else {
                                                if (e === "first") {
                                                    v = i.find(".mCSB_container").find(":first");
                                                } else {
                                                    if (e === "last") {
                                                        v = i.find(".mCSB_container").find(":last");
                                                    } else {
                                                        v = i.find(e);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                if (v.length === 1) {
                                    if (i.data("horizontalScroll")) {
                                        e = v.position().left;
                                    } else {
                                        e = v.position().top;
                                    }
                                    p = e / i.data("scrollAmount");
                                } else {
                                    p = e = v;
                                }
                            }
                        }
                        if (i.data("horizontalScroll")) {
                            if (i.data("onTotalScrollBack_Offset")) {
                                s = -i.data("onTotalScrollBack_Offset");
                            }
                            if (i.data("onTotalScroll_Offset")) {
                                l = g.width() - k.outerWidth() + i.data("onTotalScroll_Offset");
                            }
                            if (p < 0) {
                                p = e = 0;
                                clearInterval(i.data("mCSB_buttonScrollLeft"));
                                if (!s) {
                                    q = true;
                                }
                            } else {
                                if (p >= j.width() - h.width()) {
                                    p = j.width() - h.width();
                                    e = g.width() - k.outerWidth();
                                    clearInterval(i.data("mCSB_buttonScrollRight"));
                                    if (!l) {
                                        m = true;
                                    }
                                } else {
                                    e = -e;
                                }
                            }
                            var n = i.data("snapAmount");
                            if (n) {
                                e = Math.round(e / n) * n - i.data("snapOffset");
                            }
                            d.mTweenAxis.call(this, h[0], "left", Math.round(p), draggerSpeed, f.scrollEasing);
                            d.mTweenAxis.call(this, k[0], "left", Math.round(e), t, f.scrollEasing, {
                                onStart: function () {
                                    if (f.callbacks && !i.data("mCS_tweenRunning")) {
                                        u("onScrollStart");
                                    }
                                    if (i.data("autoHideScrollbar")) {
                                        d.showScrollbar.call(r);
                                    }
                                },
                                onUpdate: function () {
                                    if (f.callbacks) {
                                        u("whileScrolling");
                                    }
                                },
                                onComplete: function () {
                                    if (f.callbacks) {
                                        u("onScroll");
                                        if (q || (s && k.position().left >= s)) {
                                            u("onTotalScrollBack");
                                        }
                                        if (m || (l && k.position().left <= l)) {
                                            u("onTotalScroll");
                                        }
                                    }
                                    h.data("preventAction", false);
                                    i.data("mCS_tweenRunning", false);
                                    if (i.data("autoHideScrollbar")) {
                                        if (!g.hasClass("mCS-mouse-over")) {
                                            d.hideScrollbar.call(r);
                                        }
                                    }
                                },
                            });
                        } else {
                            if (i.data("onTotalScrollBack_Offset")) {
                                s = -i.data("onTotalScrollBack_Offset");
                            }
                            if (i.data("onTotalScroll_Offset")) {
                                l = g.height() - k.outerHeight() + i.data("onTotalScroll_Offset");
                            }
                            if (p < 0) {
                                p = e = 0;
                                clearInterval(i.data("mCSB_buttonScrollUp"));
                                if (!s) {
                                    q = true;
                                }
                            } else {
                                if (p >= j.height() - h.height()) {
                                    p = j.height() - h.height();
                                    e = g.height() - k.outerHeight();
                                    clearInterval(i.data("mCSB_buttonScrollDown"));
                                    if (!l) {
                                        m = true;
                                    }
                                } else {
                                    e = -e;
                                }
                            }
                            var n = i.data("snapAmount");
                            if (n) {
                                e = Math.round(e / n) * n - i.data("snapOffset");
                            }
                            d.mTweenAxis.call(this, h[0], "top", Math.round(p), draggerSpeed, f.scrollEasing);
                            d.mTweenAxis.call(this, k[0], "top", Math.round(e), t, f.scrollEasing, {
                                onStart: function () {
                                    if (f.callbacks && !i.data("mCS_tweenRunning")) {
                                        u("onScrollStart");
                                    }
                                    if (i.data("autoHideScrollbar")) {
                                        d.showScrollbar.call(r);
                                    }
                                },
                                onUpdate: function () {
                                    if (f.callbacks) {
                                        u("whileScrolling");
                                    }
                                },
                                onComplete: function () {
                                    if (f.callbacks) {
                                        u("onScroll");
                                        if (q || (s && k.position().top >= s)) {
                                            u("onTotalScrollBack");
                                        }
                                        if (m || (l && k.position().top <= l)) {
                                            u("onTotalScroll");
                                        }
                                    }
                                    h.data("preventAction", false);
                                    i.data("mCS_tweenRunning", false);
                                    if (i.data("autoHideScrollbar")) {
                                        if (!g.hasClass("mCS-mouse-over")) {
                                            d.hideScrollbar.call(r);
                                        }
                                    }
                                },
                            });
                        }
                        if (i.data("mCS_Init")) {
                            i.data({ mCS_Init: false });
                        }
                    }
                }
                function u(w) {
                    this.mcs = {
                        top: k.position().top,
                        left: k.position().left,
                        draggerTop: h.position().top,
                        draggerLeft: h.position().left,
                        topPct: Math.round((100 * Math.abs(k.position().top)) / Math.abs(k.outerHeight() - g.height())),
                        leftPct: Math.round((100 * Math.abs(k.position().left)) / Math.abs(k.outerWidth() - g.width())),
                    };
                    switch (w) {
                        case "onScrollStart":
                            i.data("mCS_tweenRunning", true).data("onScrollStart_Callback").call(i, this.mcs);
                            break;
                        case "whileScrolling":
                            i.data("whileScrolling_Callback").call(i, this.mcs);
                            break;
                        case "onScroll":
                            i.data("onScroll_Callback").call(i, this.mcs);
                            break;
                        case "onTotalScrollBack":
                            i.data("onTotalScrollBack_Callback").call(i, this.mcs);
                            break;
                        case "onTotalScroll":
                            i.data("onTotalScroll_Callback").call(i, this.mcs);
                            break;
                    }
                }
            },
            stop: function () {
                var g = c(this),
                    e = g.children().children(".mCSB_container"),
                    f = g.children().children().children().children(".mCSB_dragger");
                d.mTweenAxisStop.call(this, e[0]);
                d.mTweenAxisStop.call(this, f[0]);
            },
            disable: function (e) {
                var j = c(this),
                    f = j.children(".mCustomScrollBox"),
                    h = f.children(".mCSB_container"),
                    g = f.children(".mCSB_scrollTools"),
                    i = g.children().children(".mCSB_dragger");
                f.unbind("mousewheel focusin mouseenter mouseleave touchend");
                h.unbind("touchstart touchmove");
                if (e) {
                    if (j.data("horizontalScroll")) {
                        i.add(h).css("left", 0);
                    } else {
                        i.add(h).css("top", 0);
                    }
                }
                g.css("display", "none");
                h.addClass("mCS_no_scrollbar");
                j.data({ bindEvent_mousewheel: false, bindEvent_focusin: false, bindEvent_content_touch: false, bindEvent_autoHideScrollbar: false }).addClass("mCS_disabled");
            },
            destroy: function () {
                var e = c(this);
                e.removeClass("mCustomScrollbar _mCS_" + e.data("mCustomScrollbarIndex"))
                    .addClass("mCS_destroyed")
                    .children()
                    .children(".mCSB_container")
                    .unwrap()
                    .children()
                    .unwrap()
                    .siblings(".mCSB_scrollTools")
                    .remove();
                c(document).unbind("mousemove." + e.data("mCustomScrollbarIndex") + " mouseup." + e.data("mCustomScrollbarIndex") + " MSPointerMove." + e.data("mCustomScrollbarIndex") + " MSPointerUp." + e.data("mCustomScrollbarIndex"));
                c(window).unbind("resize." + e.data("mCustomScrollbarIndex"));
            },
        },
        d = {
            showScrollbar: function () {
                this.stop().animate({ opacity: 1 }, "fast");
            },
            hideScrollbar: function () {
                this.stop().animate({ opacity: 0 }, "fast");
            },
            mTweenAxis: function (g, i, h, f, o, y) {
                var y = y || {},
                    v = y.onStart || function () {},
                    p = y.onUpdate || function () {},
                    w = y.onComplete || function () {};
                var n = t(),
                    l,
                    j = 0,
                    r = g.offsetTop,
                    s = g.style;
                if (i === "left") {
                    r = g.offsetLeft;
                }
                var m = h - r;
                q();
                e();
                function t() {
                    if (window.performance && window.performance.now) {
                        return window.performance.now();
                    } else {
                        if (window.performance && window.performance.webkitNow) {
                            return window.performance.webkitNow();
                        } else {
                            if (Date.now) {
                                return Date.now();
                            } else {
                                return new Date().getTime();
                            }
                        }
                    }
                }
                function x() {
                    if (!j) {
                        v.call();
                    }
                    j = t() - n;
                    u();
                    if (j >= g._time) {
                        g._time = j > g._time ? j + l - (j - g._time) : j + l - 1;
                        if (g._time < j + 1) {
                            g._time = j + 1;
                        }
                    }
                    if (g._time < f) {
                        g._id = _request(x);
                    } else {
                        w.call();
                    }
                }
                function u() {
                    if (f > 0) {
                        g.currVal = k(g._time, r, m, f, o);
                        s[i] = Math.round(g.currVal) + "px";
                    } else {
                        s[i] = h + "px";
                    }
                    p.call();
                }
                function e() {
                    l = 1000 / 60;
                    g._time = j + l;
                    _request = !window.requestAnimationFrame
                        ? function (z) {
                              u();
                              return setTimeout(z, 0.01);
                          }
                        : window.requestAnimationFrame;
                    g._id = _request(x);
                }
                function q() {
                    if (g._id == null) {
                        return;
                    }
                    if (!window.requestAnimationFrame) {
                        clearTimeout(g._id);
                    } else {
                        window.cancelAnimationFrame(g._id);
                    }
                    g._id = null;
                }
                function k(B, A, F, E, C) {
                    switch (C) {
                        case "linear":
                            return (F * B) / E + A;
                            break;
                        case "easeOutQuad":
                            B /= E;
                            return -F * B * (B - 2) + A;
                            break;
                        case "easeInOutQuad":
                            B /= E / 2;
                            if (B < 1) {
                                return (F / 2) * B * B + A;
                            }
                            B--;
                            return (-F / 2) * (B * (B - 2) - 1) + A;
                            break;
                        case "easeOutCubic":
                            B /= E;
                            B--;
                            return F * (B * B * B + 1) + A;
                            break;
                        case "easeOutQuart":
                            B /= E;
                            B--;
                            return -F * (B * B * B * B - 1) + A;
                            break;
                        case "easeOutQuint":
                            B /= E;
                            B--;
                            return F * (B * B * B * B * B + 1) + A;
                            break;
                        case "easeOutCirc":
                            B /= E;
                            B--;
                            return F * Math.sqrt(1 - B * B) + A;
                            break;
                        case "easeOutSine":
                            return F * Math.sin((B / E) * (Math.PI / 2)) + A;
                            break;
                        case "easeOutExpo":
                            return F * (-Math.pow(2, (-10 * B) / E) + 1) + A;
                            break;
                        case "mcsEaseOut":
                            var D = (B /= E) * B,
                                z = D * B;
                            return A + F * (0.499999999999997 * z * D + -2.5 * D * D + 5.5 * z + -6.5 * D + 4 * B);
                            break;
                        case "draggerRailEase":
                            B /= E / 2;
                            if (B < 1) {
                                return (F / 2) * B * B * B + A;
                            }
                            B -= 2;
                            return (F / 2) * (B * B * B + 2) + A;
                            break;
                    }
                }
            },
            mTweenAxisStop: function (e) {
                if (e._id == null) {
                    return;
                }
                if (!window.requestAnimationFrame) {
                    clearTimeout(e._id);
                } else {
                    window.cancelAnimationFrame(e._id);
                }
                e._id = null;
            },
            rafPolyfill: function () {
                var f = ["ms", "moz", "webkit", "o"],
                    e = f.length;
                while (--e > -1 && !window.requestAnimationFrame) {
                    window.requestAnimationFrame = window[f[e] + "RequestAnimationFrame"];
                    window.cancelAnimationFrame = window[f[e] + "CancelAnimationFrame"] || window[f[e] + "CancelRequestAnimationFrame"];
                }
            },
        };
    d.rafPolyfill.call();
    c.support.touch = !!("ontouchstart" in window);
    c.support.msPointer = window.navigator.msPointerEnabled;
    var a = "https:" == document.location.protocol ? "https:" : "http:";
    c.event.special.mousewheel || document.write('<script src="' + a + '//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.0.6/jquery.mousewheel.min.js"></script>');
    c.fn.mCustomScrollbar = function (e) {
        if (b[e]) {
            return b[e].apply(this, Array.prototype.slice.call(arguments, 1));
        } else {
            if (typeof e === "object" || !e) {
                return b.init.apply(this, arguments);
            } else {
                c.error("Method " + e + " does not exist");
            }
        }
    };
})(jQuery);

/**
 * jquery.hoverdir.js v1.1.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */ (function (e, t, n) {
    "use strict";
    e.HoverDir = function (t, n) {
        this.$el = e(n);
        this._init(t);
    };
    e.HoverDir.defaults = { speed: 250, easing: "ease", hoverDelay: 0, inverse: false };
    e.HoverDir.prototype = {
        _init: function (t) {
            this.options = e.extend(true, {}, e.HoverDir.defaults, t);
            this.transitionProp = "all " + this.options.speed + "ms " + this.options.easing;
            this.support = Modernizr.csstransitions;
            this._loadEvents();
        },
        _loadEvents: function () {
            var t = this;
            this.$el.on("mouseenter.hoverdir, mouseleave.hoverdir", function (n) {
                var r = e(this),
                    i = r.find("figcaption"),
                    s = t._getDir(r, { x: n.pageX, y: n.pageY }),
                    o = t._getStyle(s);
                if (n.type === "mouseenter") {
                    i.hide().css(o.from);
                    clearTimeout(t.tmhover);
                    t.tmhover = setTimeout(function () {
                        i.show(0, function () {
                            var n = e(this);
                            if (t.support) {
                                n.css("transition", t.transitionProp);
                            }
                            t._applyAnimation(n, o.to, t.options.speed);
                        });
                    }, t.options.hoverDelay);
                } else {
                    if (t.support) {
                        i.css("transition", t.transitionProp);
                    }
                    clearTimeout(t.tmhover);
                    t._applyAnimation(i, o.from, t.options.speed);
                }
            });
        },
        _getDir: function (e, t) {
            var n = e.width(),
                r = e.height(),
                i = (t.x - e.offset().left - n / 2) * (n > r ? r / n : 1),
                s = (t.y - e.offset().top - r / 2) * (r > n ? n / r : 1),
                o = Math.round((Math.atan2(s, i) * (180 / Math.PI) + 180) / 90 + 3) % 4;
            return o;
        },
        _getStyle: function (e) {
            var t,
                n,
                r = { left: "0px", top: "-100%" },
                i = { left: "0px", top: "100%" },
                s = { left: "-100%", top: "0px" },
                o = { left: "100%", top: "0px" },
                u = { top: "0px" },
                a = { left: "0px" };
            switch (e) {
                case 0:
                    t = !this.options.inverse ? r : i;
                    n = u;
                    break;
                case 1:
                    t = !this.options.inverse ? o : s;
                    n = a;
                    break;
                case 2:
                    t = !this.options.inverse ? i : r;
                    n = u;
                    break;
                case 3:
                    t = !this.options.inverse ? s : o;
                    n = a;
                    break;
            }
            return { from: t, to: n };
        },
        _applyAnimation: function (t, n, r) {
            var i = "category1 category2 category3 category4",
                s = this.$el.parent().parent(),
                o = this.$el.attr("class"),
                u = o.indexOf(" ") > -1 ? o.slice(0, o.indexOf(" ")) : o;
            s.removeClass(i).addClass(u);
            e.fn.applyStyle = this.support ? e.fn.css : e.fn.animate;
            t.stop().applyStyle(n, e.extend(true, [], { duration: r + "ms" }));
        },
    };
    var r = function (e) {
        if (t.console) {
            t.console.error(e);
        }
    };
    e.fn.hoverdir = function (t) {
        var n = e.data(this, "hoverdir");
        if (typeof t === "string") {
            var i = Array.prototype.slice.call(arguments, 1);
            this.each(function () {
                if (!n) {
                    r("cannot call methods on hoverdir prior to initialization; " + "attempted to call method '" + t + "'");
                    return;
                }
                if (!e.isFunction(n[t]) || t.charAt(0) === "_") {
                    r("no such method '" + t + "' for hoverdir instance");
                    return;
                }
                n[t].apply(n, i);
            });
        } else {
            this.each(function () {
                if (n) {
                    n._init();
                } else {
                    n = e.data(this, "hoverdir", new e.HoverDir(t, this));
                }
            });
        }
        return n;
    };
})(jQuery, window);
