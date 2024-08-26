!function (t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.PasswordQualityCalculator = e() : t.PasswordQualityCalculator = e()
}("undefined" != typeof self ? self : this, function () {
  return function (t) {
    var e = {};

    function r(n) {
      if (e[n]) return e[n].exports;
      var i = e[n] = {i: n, l: !1, exports: {}};
      return t[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
    }

    return r.m = t, r.c = e, r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})
    }, r.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, r.t = function (t, e) {
      if (1 & e && (t = r(t)), 8 & e) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (r.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t) for (var i in t) r.d(n, i, function (e) {
        return t[e]
      }.bind(null, i));
      return n
    }, r.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default
      } : function () {
        return t
      };
      return r.d(e, "a", e), e
    }, r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "/", r(r.s = 0)
  }([function (t, e, r) {
    t.exports = r(1)
  }, function (t, e, r) {
    "use strict";
    r.r(e);
    var n = {};
    r.r(n), r.d(n, "getMaxLength", function () {
      return o
    }), r.d(n, "ContainsLength", function () {
      return a
    }), r.d(n, "IsPopularPassword", function () {
      return u
    }), r.d(n, "GetDictSize", function () {
      return h
    }), r.d(n, "load", function () {
      return s
    }), r.d(n, "reset", function () {
      return c
    });
    var i = {};

    function o() {
      for (var t = 0, e = 0, r = Object.keys(i); e < r.length; e++) {
        var n = r[e];
        parseInt(n) > t && (t = parseInt(n))
      }
      return t
    }

    function a(t) {
      return t in i
    }

    function u(t) {
      if (null == t) throw new Error;
      return 0 != t.length && (t.length in i && i[t.length].includes(t))
    }

    function h(t) {
      return t in i ? i[t].length : 0
    }

    function s(t) {
      var e = !0, r = !1, n = void 0;
      try {
        for (var o, a = t[Symbol.iterator](); !(e = (o = a.next()).done); e = !0) {
          var u = o.value;
          u.length in i ? i[u.length].push(u) : i[u.length] = [u]
        }
      } catch (t) {
        r = !0, n = t
      } finally {
        try {
          e || null == a.return || a.return()
        } finally {
          if (r) throw n
        }
      }
    }

    function c() {
      (function (t) {
        throw new Error('"' + t + '" is read-only')
      })("m_dicts"), i = {}
    }

    function l(t) {
      return function (t) {
        if (Array.isArray(t)) {
          for (var e = 0, r = new Array(t.length); e < t.length; e++) r[e] = t[e];
          return r
        }
      }(t) || function (t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
      }(t) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }()
    }

    function f(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function d(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
      }
    }

    function p(t, e, r) {
      return e && d(t.prototype, e), r && d(t, r), t
    }

    r.d(e, "default", function () {
      return I
    });
    var g = {
        LowerAlpha: "L",
        UpperAlpha: "U",
        Digit: "D",
        Special: "S",
        High: "H",
        Other: "X",
        Dictionary: "W",
        Repetition: "R",
        Number: "N",
        DiffSeq: "C",
        All: "LUDSHXWRNC"
      }, v = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~", C = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", y = "abcdefghijklmnopqrstuvwxyz",
      m = "0123456789", A = function () {
        var t, e = [];
        for (t = 161; t <= 172; ++t) e.push(t);
        for (t = 174; t < 255; ++t) e.push(t);
        return e.push(255), String.fromCharCode.apply(null, e)
      }();

    function b(t, e) {
      if (!t) throw new Error(e)
    }

    var w, _ = function () {
      function t(e, r, n) {
        var i;
        if (f(this, t), "string" == typeof r) {
          if (0 === r.length) throw new Error
        } else {
          if ("number" != typeof r) throw new Error;
          if (i <= 0) throw new RangeError;
          i = r, r = null, n = !1
        }
        this.TypeID = e, this.Alphabet = r, this.CharCount = i || this.Alphabet.length, this.m_chFirst = n ? this.Alphabet.charCodeAt(0) : null, this.m_chLast = n ? this.Alphabet.charCodeAt(this.CharCount - 1) : null, this.CharSize = Math.log2(this.CharCount), i || b(this.m_chLast - this.m_chFirst == this.CharCount - 1 || !n)
      }

      return p(t, [{
        key: "Contains", value: function (t) {
          if (null !== this.m_chLast) return t >= this.m_chFirst && t <= this.m_chLast;
          if (0 === this.Alphabet.length) throw new Error("Don't call for catch-none set");
          return this.Alphabet.indexOf(String.fromCharCode(t)) >= 0
        }
      }]), t
    }(), O = function () {
      function t(e, r, n, i) {
        if (f(this, t), null === e || 0 === e.length) throw new Error;
        this.m_strAlph = e, this.m_uBaseWeight = r, this.m_uCharWeight = n, this.m_uOccExclThreshold = i, this.m_dHisto = {}
      }

      return p(t, [{
        key: "Reset", value: function () {
          this.m_dHisto = {}
        }
      }, {
        key: "Write", value: function (t) {
          b(this.m_strAlph.indexOf(t) >= 0);
          var e = this.m_dHisto[t] || 0;
          b(t in this.m_dHisto || 0 === e), this.m_dHisto[t] = e + 1
        }
      }, {
        key: "GetOutputSize", value: function () {
          for (var t = this.m_uBaseWeight * this.m_strAlph.length, e = 0, r = Object.values(this.m_dHisto); e < r.length; e++) {
            var n = r[e];
            b(n >= 1), n > this.m_uOccExclThreshold && (t += (n - this.m_uOccExclThreshold) * this.m_uCharWeight)
          }
          for (var i = 0, o = t, a = 0, u = Object.values(this.m_dHisto); a < u.length; a++) {
            var h = u[a], s = this.m_uBaseWeight;
            h > this.m_uOccExclThreshold && (s += (h - this.m_uOccExclThreshold) * this.m_uCharWeight), i -= h * Math.log2(s / o)
          }
          return i
        }
      }]), t
    }(), S = function () {
      function t() {
        f(this, t), this.m_dEncs = {}
      }

      return p(t, [{
        key: "AddEncoder", value: function (t, e) {
          b(e), b(!(t in this.m_dEncs)), this.m_dEncs[t] = e
        }
      }, {
        key: "Reset", value: function () {
          for (var t = 0, e = Object.values(this.m_dEncs); t < e.length; t++) {
            e[t].Reset()
          }
        }
      }, {
        key: "Write", value: function (t, e) {
          var r = this.m_dEncs[t];
          return !!r && (r.Write(e), !0)
        }
      }, {
        key: "GetOutputSize", value: function () {
          for (var t = 0, e = 0, r = Object.values(this.m_dEncs); e < r.length; e++) {
            t += r[e].GetOutputSize()
          }
          return t
        }
      }]), t
    }(), P = function t(e, r, n, i) {
      var o;
      f(this, t), "number" == typeof i ? (this.Position = e, this.Length = r, this.PatternID = n, this.Cost = i, this.SingleCharType = null) : (o = n, this.Position = e, this.Length = r, this.PatternID = o.TypeID, this.Cost = o.CharSize, this.SingleCharType = o)
    }, E = function t(e, r) {
      f(this, t), this.Position = e, this.Path = r
    };

    function x(t) {
      var e = w.length;
      b(e > 0 && w[e - 1].CharCount > 256);
      for (var r = 0; r < e - 1; ++r) if (w[r].Contains(t)) return w[r];
      return w[e - 1]
    }

    function j(t, e, r, n) {
      r.Reset();
      for (var i = 0; i < t.length; ++i) r.Write(t[i].PatternID);
      var o = r.GetOutputSize();
      n.Reset();
      var a = 0, u = !0, h = !1, s = void 0;
      try {
        for (var c, l = t[Symbol.iterator](); !(u = (c = l.next()).done); u = !0) {
          var f = c.value, d = f.SingleCharType;
          if (null != d) {
            var p = e[f.Position];
            n.Write(d.TypeID, p) || (a += f.Cost)
          } else a += f.Cost
        }
      } catch (t) {
        h = !0, s = t
      } finally {
        try {
          u || null == l.return || l.return()
        } finally {
          if (h) throw s
        }
      }
      return o + (a += n.GetOutputSize())
    }

    function D(t, e, r, n) {
      for (var i = 0; i < n; ++i) if (t[e + i] != t[r + i]) return !1;
      return !0
    }

    function M(t, e, r, n) {
      for (var i = 0; i < r; ++i) t[e + i] = n, --n;
      return n
    }

    function T(t, e, r) {
      if (!(e.length <= 2)) {
        for (var n = String.fromCharCode.apply(null, e), i = 0, o = 0; o < n.length && 48 == n.charCodeAt(o); ++o) ++i;
        var a = Math.log2(i + 1);
        if (i < n.length) {
          var u = n.substring(i);
          a += Math.log2(parseFloat(u))
        }
        t[r].push(new P(r, n.length, g.Number, a))
      }
    }

    function L(t, e) {
      for (var r = t.length, n = t.toLowerCase(), i = function (t) {
        for (var e = "", r = 0; r < t.length; r++) e += k(t.charAt(r));
        return e
      }(n), u = Math.min(r, o()); u >= 3; --u) if (a(u)) for (var h = 0; h <= r - u; ++h) {
        var s = n.substring(h, h + u);
        if (s && -1 === s.indexOf("\0")) if (H(e, t, h, s, 0)) n = W(n, h, u); else H(e, t, h, i.substring(h, u), 1.5) && (n = W(n, h, u))
      }
    }

    function W(t, e, r) {
      for (var n = "", i = 0; i < r; i++) n += "\0";
      return t.substring(0, e) + n + t.substring(e + r)
    }

    function k(t) {
      if (t.charCodeAt(0) >= 192 && t.charCodeAt(0) <= 198) return "a";
      if (t.charCodeAt(0) >= 200 && t.charCodeAt(0) <= 203) return "e";
      if (t.charCodeAt(0) >= 204 && t.charCodeAt(0) <= 207) return "i";
      if (t.charCodeAt(0) >= 210 && t.charCodeAt(0) <= 214) return "o";
      if (t.charCodeAt(0) >= 217 && t.charCodeAt(0) <= 220) return "u";
      if (t.charCodeAt(0) >= 224 && t.charCodeAt(0) <= 230) return "a";
      if (t.charCodeAt(0) >= 232 && t.charCodeAt(0) <= 235) return "e";
      if (t.charCodeAt(0) >= 236 && t.charCodeAt(0) <= 239) return "i";
      if (t.charCodeAt(0) >= 242 && t.charCodeAt(0) <= 246) return "o";
      if (t.charCodeAt(0) >= 249 && t.charCodeAt(0) <= 252) return "u";
      switch (t) {
        case"4":
        case"@":
        case"?":
        case"^":
        case"ª":
          return "a";
        case"8":
        case"ß":
          return "b";
        case"(":
        case"{":
        case"[":
        case"<":
        case"¢":
        case"©":
        case"Ç":
        case"ç":
          return "c";
        case"Ð":
        case"ð":
          return "d";
        case"3":
        case"€":
        case"&":
        case"£":
          return "e";
        case"6":
        case"9":
          return "g";
        case"#":
          return "h";
        case"1":
        case"!":
        case"|":
        case"¡":
        case"¦":
          return "i";
        case"Ñ":
        case"ñ":
          return "n";
        case"0":
        case"*":
        case"¤":
        case"°":
        case"Ø":
        case"ø":
          return "o";
        case"®":
          return "r";
        case"$":
        case"5":
        case"§":
          return "s";
        case"+":
        case"7":
          return "t";
        case"µ":
          return "u";
        case"%":
        case"×":
          return "x";
        case"¥":
        case"Ý":
        case"ý":
        case"ÿ":
          return "y";
        case"2":
          return "z";
        default:
          return t
      }
    }

    function H(t, e, r, n, i) {
      var o = u(n), a = h(n.length);
      if (!o) return !1;
      for (var s = n.length, c = function (t, e, r, n, i) {
        for (var o = 0, a = 0; a < i; ++a) t.charCodeAt(e + a) !== r.charCodeAt(n + a) && ++o;
        return o
      }(n, 0, e, r, s), l = Math.log2(a), f = Math.min(c, s - c), d = s; d > s - f; --d) l += Math.log2(d);
      for (var p = f; p >= 2; --p) l -= Math.log2(p);
      return l += i * c, t[r].push(new P(r, s, g.Dictionary, l)), !0
    }

    function I(t) {
      if ("string" != typeof t || 0 === t.length) return 0;
      !function () {
        if (null == w) {
          var t = v, e = (t += " ").length, r = A.length;
          (w = []).push(new _(g.LowerAlpha, y, !0)), w.push(new _(g.UpperAlpha, C, !0)), w.push(new _(g.Digit, m, !0)), w.push(new _(g.Special, t, !1)), w.push(new _(g.High, A, !1)), w.push(new _(g.Other, 65474 - e - r))
        }
      }();
      for (var e = t.length, r = [], n = 0; n < e; n++) r[n] = [new P(n, 1, x(t.charCodeAt(n)))];
      !function (t, e) {
        for (var r = function (t) {
          for (var e = [], r = 0; r < t.length; r++) e.push(t.charCodeAt(r));
          return e
        }(t), n = t.length, i = 65535, o = n / 2; o >= 3; --o) for (var a = 0; a <= n - 2 * o; ++a) {
          for (var u = !1, h = a + o; h <= n - o; ++h) if (D(r, a, h, o)) {
            var s = Math.log2(a + 1) + Math.log2(o);
            e[h].push(new P(h, o, g.Repetition, s)), i = M(r, h, o, i), u = !0
          }
          u && (i = M(r, a, o, i))
        }
      }(t, r), function (t, e) {
        for (var r = t.length, n = [], i = 0; i < r; ++i) {
          var o = t.charCodeAt(i);
          o >= 48 && o <= 57 ? n.push(o) : (T(e, n, i - n.length), n = [])
        }
        T(e, n, r - n.length)
      }(t, r), function (t, e) {
        for (var r = t.length, n = 1 / 0, i = 0, o = 1; o <= r; ++o) {
          var a = o == r ? 1 / 0 : t.charCodeAt(o) - t.charCodeAt(o - 1);
          if (a != n) {
            if (o - i >= 3) {
              var u = x(t.charCodeAt(i)).CharSize + Math.log2(o - i - 1);
              e[i].push(new P(i, o - i, g.DiffSeq, u))
            }
            n = a, i = o - 1
          }
        }
      }(t, r), L(t, r);
      for (var i = new O(g.All, 0, 1, 0), o = new S, a = 0; a < w.length - 1; ++a) {
        var u = 0 | Math.sqrt(w[a].CharCount);
        o.AddEncoder(w[a].TypeID, new O(w[a].Alphabet, 1, u, 1))
      }
      var h = 1 / 0, s = Date.now(), c = [];
      for (c.push(new E(0, [])); c.length > 0;) {
        if (Date.now() - s > 500) break;
        var f = c.pop();
        if (f.Position >= e) {
          b(f.Position === e);
          var d = j(f.Path, t, i, o);
          d < h && (h = d)
        } else for (var p = r[f.Position], W = p.length - 1; W >= 0; --W) {
          var k = p[W];
          b(k.Position == f.Position), b(k.Length >= 1);
          var H = [];
          H.push.apply(H, l(f.Path)), H.push(k);
          var I = new E(f.Position + k.Length, H);
          c.push(I)
        }
      }
      return Math.ceil(h)
    }

    I.PopularPasswords = n
  }]).default
});
//# sourceMappingURL=PasswordQualityCalculator.js.map
