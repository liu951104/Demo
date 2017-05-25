
define("page/sharecard/topic-share-card", ["require", "exports", "module"],
function(e, t, l) {
    function n(e, t) {
        var l = e.getContext("2d");
        i(function() {
            l.save(),
            l.arc(e.width / 2, 177, 40, 0, 2 * Math.PI),
            l.strokeStyle = "#ffffff",
            l.lineWidth = 3,
            l.stroke(),
            l.clip();
            var n = e.width / 2 - 40;
            n = 0 > n ? 0 : n,
            l.drawImage(c, n, 137, 80, 80),
            l.restore(),
            l.textAlign = "center",
            l.font = "24px " + p,
            l.fillStyle = "#4D4D4D",
            l.fillText(g.userName.slice(0, 30), e.width / 2, 254),
            l.font = "20px " + p,
            l.fillStyle = "#999999",
            l.fillText("向您推荐一个很棒的课程", e.width / 2, 284),
            l.font = "22px " + p,
            l.fillStyle = "#666666";
            var i = g.liveName;
            i.length > 12 && (i = i.slice(0, 12), i += "..."),
            l.fillText(i, e.width / 2, 355),
            l.font = "32px " + p,
            l.fillStyle = "#4D4D4D";
            var a = g.topicName;
            a.length > 24 && (a = a.slice(0, 24), a += "..."),
            a.length > 12 && (a = a.slice(0, 12) + " " + a.slice(12)),
            r(l, a, e.width / 2, 430, 431, 55),
            l.font = "bold 20px " + p,
            l.fillStyle = "#999999",
            l.fillText("开课时间", e.width / 2, 563),
            l.font = "24px " + p,
            l.fillStyle = "#4D4D4D";
            var o = s(g.startTime);
            if (l.fillText(o, e.width / 2, 600), g.speaker && (l.font = "bold 20px " + p, l.fillStyle = "#999999", l.fillText("主讲人", e.width / 2, 638), l.font = "24px " + p, l.fillStyle = "#4D4D4D", g.speaker = g.speaker.slice(0, 14), l.fillText(g.speaker, e.width / 2, 675)), g.remark) {
                l.font = "bold 20px " + p,
                l.fillStyle = "#999999",
                l.fillText("课程简介", e.width / 2, 720),
                l.font = "22px " + p,
                l.fillStyle = "#AAAAAA";
                var f = g.remark || "";
                f.length > 38 && (f = f.slice(0, 38), f += "...."),
                f.length > 19 && (f = f.slice(0, 19) + " " + f.slice(19)),
                r(l, f, e.width / 2, 757, 431, 34)
            }
            var h = e.width / 2 - 73;
            h = 0 > h ? 0 : h,
            l.drawImage(d, h, 888, 146, 146),
            t()
        })
    }
    function i(e) {
        c ? e() : (c = new Image, c.src = f(g.headImgUrl + "?x-oss-process=image/resize,h_300,w_300,m_fill"), c.crossOrigin = "Anonymous", c.onload = function() {
            d ? e() : (d = new Image, d.crossOrigin = "Anonymous", d.src = f(g.shareUrl), d.onload = e)
        })
    }
    function a(e, t, l) {
        var n = e.getContext("2d");
        if (window.bgMap[encodeURIComponent(t)]) o(n, window.bgMap[encodeURIComponent(t)]),
        l();
        else {
            var i = new Image;
            i.crossOrigin = "Anonymous",
            i.src = f(t),
            i.onload = function() {
                window.bgMap[encodeURIComponent(t)] = i,
                o(n, i),
                l()
            }
        }
    }
    function o(e, t) {
        e.save(),
        e.globalCompositeOperation = "destination-over",
        e.drawImage(t, 0, 0, h.width, h.height),
        e.restore()
    }
    function r(e, t, l, n, i, a) {
        for (var o = t.split(" "), r = "", s = 0; s < o.length; s++) {
            var f = r + o[s] + " ",
            c = e.measureText(f),
            d = c.width;
            d > i && s > 0 ? (e.fillText(r, l, n), r = o[s] + " ", n += a) : r = f
        }
        e.fillText(r, l, n)
    }
    function s(e) {
        var t = new Date(e),
        l = "";
        switch (t.getDay()) {
        case 1:
            l = "一";
            break;
        case 2:
            l = "二";
            break;
        case 3:
            l = "三";
            break;
        case 4:
            l = "四";
            break;
        case 5:
            l = "五";
            break;
        case 6:
            l = "六";
            break;
        case 7:
            l = "日"
        }
        var n = t.getMonth() + 1;
        10 > n && (n = "0" + n);
        var i = t.getDate();
        10 > i && (i = "0" + i);
        var a = t.getHours();
        10 > a && (a = "0" + a);
        var o = t.getMinutes();
        return 10 > o && (o = "0" + o),
        t.getFullYear() + "-" + n + "-" + i + " 星期" + l + " " + a + ":" + o
    }
    function f(e) {
        return "/api/wechat/image-proxy?url=" + encodeURIComponent(e)
    }
    var c = null,
    d = null,
    g = null,
    h = null,
    p = '"苹方 常规","微软雅黑"';
    l.exports = function(e, t, l, i) {
        g = t,
        h || (h = document.createElement("canvas"));
        h.getContext("2d");
        h.width = 640,
        h.height = 1136,
        i === !0 && (c = null, d = null),
        a(h, e,
        function() {
            n(h,
            function() {
                l(h.toDataURL("image/jpeg", .9))
            })
        })
    }
});
define("page/sharecard/channel-share-card", ["require", "exports", "module"],
function(e, n, t) {
    function i(e, n) {
        var t = e.getContext("2d");
        l(function() {
            t.save(),
            t.arc(e.width / 2, 177, 40, 0, 2 * Math.PI),
            t.strokeStyle = "#ffffff",
            t.lineWidth = 10,
            t.stroke(),
            t.clip(),
            t.drawImage(s, e.width / 2 - 40, 137, 80, 80),
            t.restore(),
            t.textAlign = "center",
            t.font = "24px " + g,
            t.fillStyle = "#4D4D4D",
            t.fillText(d.userName.slice(0, 30), e.width / 2, 254),
            t.font = "20px " + g,
            t.fillStyle = "#999999",
            t.fillText("向您推荐一个很棒的课程", e.width / 2, 284),
            t.font = "22px " + g,
            t.fillStyle = "#666666";
            var i = d.liveName;
            i.length > 12 && (i = i.slice(0, 12), i += "..."),
            t.fillText(i, e.width / 2, 355),
            t.font = "32px " + g,
            t.fillStyle = "#4D4D4D";
            var l = d.channelName;
            if (l.length > 24 && (l = l.slice(0, 24), l += "..."), l.length > 12 && (l = l.slice(0, 12) + " " + l.slice(12)), a(t, l, e.width / 2, 430, 431, 55), d.description && "null" != d.description) {
                t.font = "bold 20px " + g,
                t.fillStyle = "#999999",
                t.fillText("课程简介", e.width / 2, 638),
                t.font = "22px " + g,
                t.fillStyle = "#AAAAAA";
                var o = d.description || "";
                o.length > 57 && (o = o.slice(0, 57), o += "...."),
                o.length > 19 && (o = o.slice(0, 19) + " " + o.slice(19)),
                o.length > 38 && (o = o.slice(0, 38) + " " + o.slice(38)),
                a(t, o, e.width / 2, 700, 431, 34)
            }
            t.drawImage(f, e.width / 2 - 73, 888, 146, 146),
            n()
        })
    }
    function l(e) {
        s ? e() : (s = new Image, s.src = c(d.headImgUrl + "?x-oss-process=image/resize,h_300,w_300,m_fill"), s.crossOrigin = "Anonymous", s.onload = function() {
            f ? e() : (f = new Image, f.crossOrigin = "Anonymous", f.src = c(d.shareUrl), f.onload = e)
        })
    }
    function o(e, n, t) {
        var i = e.getContext("2d");
        if (window.bgMap[encodeURIComponent(n)]) r(i, window.bgMap[encodeURIComponent(n)]),
        t();
        else {
            var l = new Image;
            l.crossOrigin = "Anonymous",
            l.src = c(n),
            l.onload = function() {
                window.bgMap[encodeURIComponent(n)] = l,
                r(i, l),
                t()
            }
        }
    }
    function r(e, n) {
        e.save(),
        e.globalCompositeOperation = "destination-over",
        e.drawImage(n, 0, 0, h.width, h.height),
        e.restore()
    }
    function a(e, n, t, i, l, o) {
        for (var r = n.split(" "), a = "", c = 0; c < r.length; c++) {
            var s = a + r[c] + " ",
            f = e.measureText(s),
            d = f.width;
            d > l && c > 0 ? (e.fillText(a, t, i), a = r[c] + " ", i += o) : a = s
        }
        e.fillText(a, t, i)
    }
    function c(e) {
        return "/api/wechat/image-proxy?url=" + encodeURIComponent(e)
    }
    var s = null,
    f = null,
    d = null,
    h = null,
    g = '"苹方 常规","微软雅黑"';
    t.exports = function(e, n, t, l) {
        d = n,
        h || (h = document.createElement("canvas"));
        h.getContext("2d");
        h.width = 640,
        h.height = 1136,
        l === !0 && (s = null, f = null),
        o(h, e,
        function() {
            i(h,
            function() {
                t(h.toDataURL("image/jpeg", .9))
            })
        })
    }
});
define("page/sharecard/common-share-card", ["require", "exports", "module"],
function(e, o, a) {
    function n(e) {
        return "/api/wechat/image-proxy?url=" + encodeURIComponent(e)
    }
    a.exports = function(e, o) {
        if (window.qrcodeData) return void o(window.qrcodeData);
        var a = document.createElement("canvas"),
        t = a.getContext("2d");
        a.width = 640,
        a.height = 1136;
        var r = new Image;
        r.src = "/api/wechat/image-proxy?url=https://img.qlchat.com/qlLive/liveCommon/template-11.jpg",
        r.crossOrigin = "Anonymous",
        r.onload = function() {
            t.drawImage(r, 0, 0, a.width, a.height);
            var i = new Image;
            i.src = n(e),
            i.crossOrigin = "Anonymous",
            i.onload = function() {
                t.drawImage(i, a.width / 2 - 80, 587, 160, 160),
                window.qrcodeData = a.toDataURL("image/png"),
                o(window.qrcodeData)
            }
        }
    }
});
define("components_modules/envi/1.0.0/envi", ["require", "exports", "module"],
function(e, n, i) {
    var t = navigator.userAgent || "";
    i.exports = {
        isAndroid: function() {
            return t.indexOf("Android") > -1 || t.indexOf("Linux") > -1
        },
        isIOS: function() {
            return !! t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
        },
        isWeixin: function() {
            return "micromessenger" == t.toLowerCase().match(/MicroMessenger/i)
        },
        isWeibo: function() {
            return "weibo" == navigator.userAgent.toLowerCase().match(/WeiBo/i)
        },
        isChrome: function() {
            return !! window.chrome
        },
        isFireFox: function() {
            return /firefox/i.test(navigator.userAgent.toLowerCase())
        },
        isPc: function() {
            return ! this.isAndroid() && !this.isIOS()
        },
        isQlchat: function() {
            return "qlchat" == t.toLowerCase().match(/qlchat/i)
        },
        getQlchatVersion: function() {
            var e = t.toLowerCase().match(/qlchat[a-zA-Z]*?\/([\d.]+)/);
            return e && e.length ? parseInt(e[1]) : void 0
        }
    }
});
define("components_modules/urlutils/1.0.0/urlutils", ["require", "exports", "module"],
function(r, n, o) {
    var t = function(r, n) {
        var n = (n || window.location.search).match(/\?.*(?=\b|#)/);
        if (n && (n = n[0].replace(/^\?/, "")), !n) return r ? "": {};
        var o = {},
        t = n.split("&");
        for (var e in t) {
            var i = t[e].split("=");
            o[i[0]] = i[1] ? decodeURIComponent(i[1]) : ""
        }
        return r ? o[r] : o
    },
    e = function(r, n, o) {
        n = n || window.location.href;
        var e = n.split("#"),
        a = e[0],
        u = e.length > 1 && "#" + e[1] || "",
        l = a.split("?")[0],
        s = t(null, a),
        f = [],
        p = "";
        for (var c in s) void 0 === r[c] && -1 === i(o, c) && f.push(c + "=" + s[c]);
        for (var v in r) - 1 === i(o, v) && void 0 !== r[v] && f.push(v + "=" + r[v]);
        return p += l,
        p += f.length && "?" + f.join("&") || "",
        p += u
    },
    i = function(r, n) {
        r = r || [];
        for (var o = 0,
        t = r.length; t > o; o++) if (r[o] === n) return o;
        return - 1
    },
    a = function() {
        var r, n = Array.prototype.slice.apply(arguments),
        o = n.length - 1;
        Array.isArray(n[o]) && (r = n[o], n.pop());
        var t = {};
        n.forEach(function(n) {
            Object.keys(n).forEach(function(o) {
                t[o] || r && -1 !== r.indexOf(o) || (t[o] = n[o])
            })
        });
        var e = [];
        for (var i in e) e.push(i + "=" + e[i]);
        return e.join("&")
    };
    o.exports.getUrlParams = t,
    o.exports.fillParams = e,
    o.exports.query2string = a
});
define("components_modules/wx-util/1.0.0/wx-util", ["require", "exports", "module", "components_modules/envi/1.0.0/envi", "components_modules/urlutils/1.0.0/urlutils"],
function(e, i, t) {
    function n(e) {
        return JSON.parse(JSON.stringify(e))
    }
    var s = e("components_modules/envi/1.0.0/envi"),
    l = e("components_modules/urlutils/1.0.0/urlutils");
    t.exports = {
        share: function(e) {
            function i() {
                "undefined" != typeof wx && (wx.onMenuShareAppMessage(c), wx.onMenuShareTimeline(r), wx.onMenuShareQQ(u), wx.onMenuShareWeibo(a), wx.onMenuShareQZone(p), wx.showOptionMenu())
            }
            e = e || {},
            e.shareUrl || (e.shareUrl = window.location.href),
            /(http)/.test(e.shareUrl) || (e.shareUrl = location.protocol + "//" + location.host + e.shareUrl);
            var t = e.shareUrl;
            t = l.fillParams({},
            t, ["code", "state", "loginType", "authDataKey"]);
            var o = {
                title: e.title,
                desc: e.desc,
                link: t,
                imgUrl: e.imgUrl,
                success: e.successFn ||
                function() {},
                cancel: e.cancelFn ||
                function() {}
            },
            c = n(o),
            r = n(o),
            u = n(o),
            a = n(o),
            p = n(o);
            if (e.appTitle && (c.title = e.appTitle), e.appDesc && (c.desc = e.appDesc), e.timelineTitle && (r.title = e.timelineTitle), e.timelineDesc && (r.desc = e.timelineDesc), e.qqTitle && (u.title = e.qqTitle), e.qqDesc && (u.desc = e.qqDesc), e.weiboTitle && (a.title = e.weiboTitle), e.weiboDesc && (a.desc = e.weiboDesc), e.qzTitle && (p.title = e.qzTitle), e.qzDesc && (p.desc = e.qzDesc), s.isAndroid() || s.isIOS()) {
                if ("undefined" == typeof wx) return;
                wx.ready(function() {
                    i()
                })
            } else setTimeout(function() {
                i()
            },
            500)
        }
    }
});
define("page/sharecard/sharecard", ["require", "exports", "module", "page/sharecard/topic-share-card", "page/sharecard/channel-share-card", "page/sharecard/common-share-card", "components_modules/wx-util/1.0.0/wx-util"],
function(e, a, n) {
    function t() {
        var e = document.querySelectorAll("#thumb-list>span"); [].forEach.call(e,
        function(a, n) {
            a.addEventListener("click",
            function() { [].forEach.call(e,
                function(e) {
                    e.classList.remove("active")
                }),
                a.classList.add("active"),
                n === e.length - 1 ? (i(!0), d()) : r(n)
            })
        });
        var a = document.getElementById("gen-intro");
        a.addEventListener("click",
        function() {
            document.getElementById("dialog").classList.add("active")
        });
        var n = function() {
            document.getElementById("dialog").classList.remove("active")
        };
        document.getElementById("confirm").addEventListener("click", n),
        document.getElementById("bg").addEventListener("click", n)
    }
    function c() {
        var e = document.getElementById("thumb-list");
        e.children[0].classList.add("active"),
        window.bgMap = {}
    }
    function i(e) {
        var a = document.getElementById("loading");
        e ? a.classList.remove("hidden") : a.classList.add("hidden")
    }
    function r(e, a) {
        i(!0),
        "topic" == p ? l(v[e], a) : "channel" == p && s(v[e], a)
    }
    function l(e, a) {
        m(e, f, o, a)
    }
    function s(e, a) {
        h(e, f, o, a)
    }
    function d() {
        u(f.shareUrl, o)
    }
    function o(e) {
        var a = document.getElementById("image");
        a.src = e,
        "function" == typeof window.callPhantom && (window.callPhantom({
            type: "onImageDataReady",
            imageData: e
        }), alert("imageData-" + y + "--" + e)),
        a.onload = function() {
            a.style.display = "block",
            i(!1)
        }
    }
    var m = e("page/sharecard/topic-share-card"),
    h = e("page/sharecard/channel-share-card"),
    u = e("page/sharecard/common-share-card"),
    g = e("components_modules/wx-util/1.0.0/wx-util"),
    p = "",
    f = null,
    v = [],
    y = null;
    n.exports = function(e) {
        c(),
        t(),
        p = e.TYPE,
        f = e.SHARE_DATA,
        v = e.BG_LIST;
        try {
            if (v = JSON.parse(v), !f || "null" == f) return;
            f = JSON.parse(f);
            var a = {};
            "topic" === p ? (a.title = "我推荐 - " + f.topicName, a.desc = f.remark, a.timelineDesc = "我推荐 - " + f.topicName, a.shareUrl = "/topic/" + f.businessId + ".htm?shareKey=" + f.shareKey) : "channel" === p && (a.title = "我推荐 - " + f.channelName, a.desc = f.description, a.timelineDesc = "我推荐 - " + f.channelName, a.shareUrl = "/live/channel/channelPage/" + f.businessId + ".htm?shareKey=" + f.shareKey),
            g.share({
                title: a.title,
                desc: a.desc,
                timelineDesc: a.timelineDesc,
                imgUrl: f.headImgUrl
            })
        } catch(n) {
            console.error(n)
        }
        r(0)
    },
    window.resetShareCard = function(e, a, n, t) {
        y = e,
        p = a,
        f = n,
        t = ~~ (Math.random() * v.length),
        r(Number(t), !0)
    }
});