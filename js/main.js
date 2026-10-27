/** QR Code Engine (Bundled) */
var qrcode = function () { function i(t, r) { function a(t, r) { g = function (t) { for (var r = new Array(t), e = 0; e < t; e += 1) { r[e] = new Array(t); for (var n = 0; n < t; n += 1)r[e][n] = null } return r }(l = 4 * u + 17), e(0, 0), e(l - 7, 0), e(0, l - 7), i(), o(), v(t, r), 7 <= u && h(t), null == n && (n = w(u, f, c)), d(n, r) } var u = t, f = y[r], g = null, l = 0, n = null, c = [], s = {}, e = function (t, r) { for (var e = -1; e <= 7; e += 1)if (!(t + e <= -1 || l <= t + e)) for (var n = -1; n <= 7; n += 1)r + n <= -1 || l <= r + n || (g[t + e][r + n] = 0 <= e && e <= 6 && (0 == n || 6 == n) || 0 <= n && n <= 6 && (0 == e || 6 == e) || 2 <= e && e <= 4 && 2 <= n && n <= 4) }, o = function () { for (var t = 8; t < l - 8; t += 1)null == g[t][6] && (g[t][6] = t % 2 == 0); for (var r = 8; r < l - 8; r += 1)null == g[6][r] && (g[6][r] = r % 2 == 0) }, i = function () { for (var t = B.getPatternPosition(u), r = 0; r < t.length; r += 1)for (var e = 0; e < t.length; e += 1) { var n = t[r], o = t[e]; if (null == g[n][o]) for (var i = -2; i <= 2; i += 1)for (var a = -2; a <= 2; a += 1)g[n + i][o + a] = -2 == i || 2 == i || -2 == a || 2 == a || 0 == i && 0 == a } }, h = function (t) { for (var r = B.getBCHTypeNumber(u), e = 0; e < 18; e += 1) { var n = !t && 1 == (r >> e & 1); g[Math.floor(e / 3)][e % 3 + l - 8 - 3] = n } for (e = 0; e < 18; e += 1) { n = !t && 1 == (r >> e & 1); g[e % 3 + l - 8 - 3][Math.floor(e / 3)] = n } }, v = function (t, r) { for (var e = f << 3 | r, n = B.getBCHTypeInfo(e), o = 0; o < 15; o += 1) { var i = !t && 1 == (n >> o & 1); o < 6 ? g[o][8] = i : o < 8 ? g[o + 1][8] = i : g[l - 15 + o][8] = i } for (o = 0; o < 15; o += 1) { i = !t && 1 == (n >> o & 1); o < 8 ? g[8][l - o - 1] = i : o < 9 ? g[8][15 - o - 1 + 1] = i : g[8][15 - o - 1] = i } g[l - 8][8] = !t }, d = function (t, r) { for (var e = -1, n = l - 1, o = 7, i = 0, a = B.getMaskFunction(r), u = l - 1; 0 < u; u -= 2)for (6 == u && (u -= 1); ;) { for (var f = 0; f < 2; f += 1)if (null == g[n][u - f]) { var c = !1; i < t.length && (c = 1 == (t[i] >>> o & 1)), a(n, u - f) && (c = !c), g[n][u - f] = c, -1 == (o -= 1) && (i += 1, o = 7) } if ((n += e) < 0 || l <= n) { n -= e, e = -e; break } } }, w = function (t, r, e) { for (var n = b.getRSBlocks(t, r), o = M(), i = 0; i < e.length; i += 1) { var a = e[i]; o.put(a.getMode(), 4), o.put(a.getLength(), B.getLengthInBits(a.getMode(), t)), a.write(o) } var u = 0; for (i = 0; i < n.length; i += 1)u += n[i].dataCount; if (o.getLengthInBits() > 8 * u) throw "code length overflow. (" + o.getLengthInBits() + ">" + 8 * u + ")"; for (o.getLengthInBits() + 4 <= 8 * u && o.put(0, 4); o.getLengthInBits() % 8 != 0;)o.putBit(!1); for (; !(o.getLengthInBits() >= 8 * u || (o.put(236, 8), o.getLengthInBits() >= 8 * u));)o.put(17, 8); return function (t, r) { for (var e = 0, n = 0, o = 0, i = new Array(r.length), a = new Array(r.length), u = 0; u < r.length; u += 1) { var f = r[u].dataCount, c = r[u].totalCount - f; n = Math.max(n, f), o = Math.max(o, c), i[u] = new Array(f); for (var g = 0; g < i[u].length; g += 1)i[u][g] = 255 & t.getBuffer()[g + e]; e += f; var l = B.getErrorCorrectPolynomial(c), h = C(i[u], l.getLength() - 1).mod(l); a[u] = new Array(l.getLength() - 1); for (g = 0; g < a[u].length; g += 1) { var s = g + h.getLength() - a[u].length; a[u][g] = 0 <= s ? h.getAt(s) : 0 } } var v = 0; for (g = 0; g < r.length; g += 1)v += r[g].totalCount; var d = new Array(v), w = 0; for (g = 0; g < n; g += 1)for (u = 0; u < r.length; u += 1)g < i[u].length && (d[w] = i[u][g], w += 1); for (g = 0; g < o; g += 1)for (u = 0; u < r.length; u += 1)g < a[u].length && (d[w] = a[u][g], w += 1); return d }(o, n) }; s.addData = function (t, r) { var e = null; switch (r = r || "Byte") { case "Numeric": e = x(t); break; case "Alphanumeric": e = m(t); break; case "Byte": e = L(t); break; case "Kanji": e = D(t); break; default: throw "mode:" + r }c.push(e), n = null }, s.isDark = function (t, r) { if (t < 0 || l <= t || r < 0 || l <= r) throw t + "," + r; return g[t][r] }, s.getModuleCount = function () { return l }, s.make = function () { if (u < 1) { for (var t = 1; t < 40; t++) { for (var r = b.getRSBlocks(t, f), e = M(), n = 0; n < c.length; n++) { var o = c[n]; e.put(o.getMode(), 4), e.put(o.getLength(), B.getLengthInBits(o.getMode(), t)), o.write(e) } var i = 0; for (n = 0; n < r.length; n++)i += r[n].dataCount; if (e.getLengthInBits() <= 8 * i) break } u = t } a(!1, function () { for (var t = 0, r = 0, e = 0; e < 8; e += 1) { a(!0, e); var n = B.getLostPoint(s); (0 == e || n < t) && (t = n, r = e) } return r }()) }, s.createTableTag = function (t, r) { t = t || 2; var e = ""; e += '<table style="', e += " border-width: 0px; border-style: none;", e += " border-collapse: collapse;", e += " padding: 0px; margin: " + (r = void 0 === r ? 4 * t : r) + "px;", e += '">', e += "<tbody>"; for (var n = 0; n < s.getModuleCount(); n += 1) { e += "<tr>"; for (var o = 0; o < s.getModuleCount(); o += 1)e += '<td style="', e += " border-width: 0px; border-style: none;", e += " border-collapse: collapse;", e += " padding: 0px; margin: 0px;", e += " width: " + t + "px;", e += " height: " + t + "px;", e += " background-color: ", e += s.isDark(n, o) ? "#000000" : "#ffffff", e += ";", e += '"/>'; e += "</tr>" } return e += "</tbody>", e += "</table>" }, s.createSvgTag = function (t, r, e, n) { var o = {}; "object" == typeof t && (t = (o = t).cellSize, r = o.margin, e = o.alt, n = o.title), t = t || 2, r = void 0 === r ? 4 * t : r, (e = "string" == typeof e ? { text: e } : e || {}).text = e.text || null, e.id = e.text ? e.id || "qrcode-description" : null, (n = "string" == typeof n ? { text: n } : n || {}).text = n.text || null, n.id = n.text ? n.id || "qrcode-title" : null; var i, a, u, f, c = s.getModuleCount() * t + 2 * r, g = ""; for (f = "l" + t + ",0 0," + t + " -" + t + ",0 0,-" + t + "z ", g += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', g += o.scalable ? "" : ' width="' + c + 'px" height="' + c + 'px"', g += ' viewBox="0 0 ' + c + " " + c + '" ', g += ' preserveAspectRatio="xMinYMin meet"', g += n.text || e.text ? ' role="img" aria-labelledby="' + p([n.id, e.id].join(" ").trim()) + '"' : "", g += ">", g += n.text ? '<title id="' + p(n.id) + '">' + p(n.text) + "</title>" : "", g += e.text ? '<description id="' + p(e.id) + '">' + p(e.text) + "</description>" : "", g += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', g += '<path d="', a = 0; a < s.getModuleCount(); a += 1)for (u = a * t + r, i = 0; i < s.getModuleCount(); i += 1)s.isDark(a, i) && (g += "M" + (i * t + r) + "," + u + f); return g += '" stroke="transparent" fill="black"/>', g += "</svg>" }, s.createDataURL = function (o, t) { o = o || 2, t = void 0 === t ? 4 * o : t; var r = s.getModuleCount() * o + 2 * t, i = t, a = r - t; return I(r, r, function (t, r) { if (i <= t && t < a && i <= r && r < a) { var e = Math.floor((t - i) / o), n = Math.floor((r - i) / o); return s.isDark(n, e) ? 0 : 1 } return 1 }) }, s.createImgTag = function (t, r, e) { t = t || 2, r = void 0 === r ? 4 * t : r; var n = s.getModuleCount() * t + 2 * r, o = ""; return o += "<img", o += ' src="', o += s.createDataURL(t, r), o += '"', o += ' width="', o += n, o += '"', o += ' height="', o += n, o += '"', e && (o += ' alt="', o += p(e), o += '"'), o += "/>" }; var p = function (t) { for (var r = "", e = 0; e < t.length; e += 1) { var n = t.charAt(e); switch (n) { case "<": r += "&lt;"; break; case ">": r += "&gt;"; break; case "&": r += "&amp;"; break; case '"': r += "&quot;"; break; default: r += n } } return r }; return s.createASCII = function (t, r) { if ((t = t || 1) < 2) return function (t) { t = void 0 === t ? 2 : t; var r, e, n, o, i, a = 1 * s.getModuleCount() + 2 * t, u = t, f = a - t, c = { "██": "█", "█ ": "▀", " █": "▄", "  ": " " }, g = { "██": "▀", "█ ": "▀", " █": " ", "  ": " " }, l = ""; for (r = 0; r < a; r += 2) { for (n = Math.floor((r - u) / 1), o = Math.floor((r + 1 - u) / 1), e = 0; e < a; e += 1)i = "█", u <= e && e < f && u <= r && r < f && s.isDark(n, Math.floor((e - u) / 1)) && (i = " "), u <= e && e < f && u <= r + 1 && r + 1 < f && s.isDark(o, Math.floor((e - u) / 1)) ? i += " " : i += "█", l += t < 1 && f <= r + 1 ? g[i] : c[i]; l += "\n" } return a % 2 && 0 < t ? l.substring(0, l.length - a - 1) + Array(1 + a).join("▀") : l.substring(0, l.length - 1) }(r); t -= 1, r = void 0 === r ? 2 * t : r; var e, n, o, i, a = s.getModuleCount() * t + 2 * r, u = r, f = a - r, c = Array(t + 1).join("██"), g = Array(t + 1).join("  "), l = "", h = ""; for (e = 0; e < a; e += 1) { for (o = Math.floor((e - u) / t), h = "", n = 0; n < a; n += 1)i = 1, u <= n && n < f && u <= e && e < f && s.isDark(o, Math.floor((n - u) / t)) && (i = 0), h += i ? c : g; for (o = 0; o < t; o += 1)l += h + "\n" } return l.substring(0, l.length - 1) }, s.renderTo2dContext = function (t, r) { r = r || 2; for (var e = s.getModuleCount(), n = 0; n < e; n++)for (var o = 0; o < e; o++)t.fillStyle = s.isDark(n, o) ? "black" : "white", t.fillRect(n * r, o * r, r, r) }, s } i.stringToBytes = (i.stringToBytesFuncs = { default: function (t) { for (var r = [], e = 0; e < t.length; e += 1) { var n = t.charCodeAt(e); r.push(255 & n) } return r } }).default, i.createStringToBytes = function (u, f) { var i = function () { function t() { var t = r.read(); if (-1 == t) throw "eof"; return t } for (var r = S(u), e = 0, n = {}; ;) { var o = r.read(); if (-1 == o) break; var i = t(), a = t() << 8 | t(); n[String.fromCharCode(o << 8 | i)] = a, e += 1 } if (e != f) throw e + " != " + f; return n }(), a = "?".charCodeAt(0); return function (t) { for (var r = [], e = 0; e < t.length; e += 1) { var n = t.charCodeAt(e); if (n < 128) r.push(n); else { var o = i[t.charAt(e)]; "number" == typeof o ? (255 & o) == o ? r.push(o) : (r.push(o >>> 8), r.push(255 & o)) : r.push(a) } } return r } }; var r, t, a = 1, u = 2, o = 4, f = 8, y = { L: 1, M: 0, Q: 3, H: 2 }, e = 0, n = 1, c = 2, g = 3, l = 4, h = 5, s = 6, v = 7, B = (r = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], (t = {}).getBCHTypeInfo = function (t) { for (var r = t << 10; 0 <= d(r) - d(1335);)r ^= 1335 << d(r) - d(1335); return 21522 ^ (t << 10 | r) }, t.getBCHTypeNumber = function (t) { for (var r = t << 12; 0 <= d(r) - d(7973);)r ^= 7973 << d(r) - d(7973); return t << 12 | r }, t.getPatternPosition = function (t) { return r[t - 1] }, t.getMaskFunction = function (t) { switch (t) { case e: return function (t, r) { return (t + r) % 2 == 0 }; case n: return function (t, r) { return t % 2 == 0 }; case c: return function (t, r) { return r % 3 == 0 }; case g: return function (t, r) { return (t + r) % 3 == 0 }; case l: return function (t, r) { return (Math.floor(t / 2) + Math.floor(r / 3)) % 2 == 0 }; case h: return function (t, r) { return t * r % 2 + t * r % 3 == 0 }; case s: return function (t, r) { return (t * r % 2 + t * r % 3) % 2 == 0 }; case v: return function (t, r) { return (t * r % 3 + (t + r) % 2) % 2 == 0 }; default: throw "bad maskPattern:" + t } }, t.getErrorCorrectPolynomial = function (t) { for (var r = C([1], 0), e = 0; e < t; e += 1)r = r.multiply(C([1, w.gexp(e)], 0)); return r }, t.getLengthInBits = function (t, r) { if (1 <= r && r < 10) switch (t) { case a: return 10; case u: return 9; case o: case f: return 8; default: throw "mode:" + t } else if (r < 27) switch (t) { case a: return 12; case u: return 11; case o: return 16; case f: return 10; default: throw "mode:" + t } else { if (!(r < 41)) throw "type:" + r; switch (t) { case a: return 14; case u: return 13; case o: return 16; case f: return 12; default: throw "mode:" + t } } }, t.getLostPoint = function (t) { for (var r = t.getModuleCount(), e = 0, n = 0; n < r; n += 1)for (var o = 0; o < r; o += 1) { for (var i = 0, a = t.isDark(n, o), u = -1; u <= 1; u += 1)if (!(n + u < 0 || r <= n + u)) for (var f = -1; f <= 1; f += 1)o + f < 0 || r <= o + f || 0 == u && 0 == f || a == t.isDark(n + u, o + f) && (i += 1); 5 < i && (e += 3 + i - 5) } for (n = 0; n < r - 1; n += 1)for (o = 0; o < r - 1; o += 1) { var c = 0; t.isDark(n, o) && (c += 1), t.isDark(n + 1, o) && (c += 1), t.isDark(n, o + 1) && (c += 1), t.isDark(n + 1, o + 1) && (c += 1), 0 != c && 4 != c || (e += 3) } for (n = 0; n < r; n += 1)for (o = 0; o < r - 6; o += 1)t.isDark(n, o) && !t.isDark(n, o + 1) && t.isDark(n, o + 2) && t.isDark(n, o + 3) && t.isDark(n, o + 4) && !t.isDark(n, o + 5) && t.isDark(n, o + 6) && (e += 40); for (o = 0; o < r; o += 1)for (n = 0; n < r - 6; n += 1)t.isDark(n, o) && !t.isDark(n + 1, o) && t.isDark(n + 2, o) && t.isDark(n + 3, o) && t.isDark(n + 4, o) && !t.isDark(n + 5, o) && t.isDark(n + 6, o) && (e += 40); var g = 0; for (o = 0; o < r; o += 1)for (n = 0; n < r; n += 1)t.isDark(n, o) && (g += 1); return e += Math.abs(100 * g / r / r - 50) / 5 * 10 }, t); function d(t) { for (var r = 0; 0 != t;)r += 1, t >>>= 1; return r } var w = function () { for (var r = new Array(256), e = new Array(256), t = 0; t < 8; t += 1)r[t] = 1 << t; for (t = 8; t < 256; t += 1)r[t] = r[t - 4] ^ r[t - 5] ^ r[t - 6] ^ r[t - 8]; for (t = 0; t < 255; t += 1)e[r[t]] = t; var n = { glog: function (t) { if (t < 1) throw "glog(" + t + ")"; return e[t] }, gexp: function (t) { for (; t < 0;)t += 255; for (; 256 <= t;)t -= 255; return r[t] } }; return n }(); function C(n, o) { if (void 0 === n.length) throw n.length + "/" + o; var r = function () { for (var t = 0; t < n.length && 0 == n[t];)t += 1; for (var r = new Array(n.length - t + o), e = 0; e < n.length - t; e += 1)r[e] = n[e + t]; return r }(), i = { getAt: function (t) { return r[t] }, getLength: function () { return r.length }, multiply: function (t) { for (var r = new Array(i.getLength() + t.getLength() - 1), e = 0; e < i.getLength(); e += 1)for (var n = 0; n < t.getLength(); n += 1)r[e + n] ^= w.gexp(w.glog(i.getAt(e)) + w.glog(t.getAt(n))); return C(r, 0) }, mod: function (t) { if (i.getLength() - t.getLength() < 0) return i; for (var r = w.glog(i.getAt(0)) - w.glog(t.getAt(0)), e = new Array(i.getLength()), n = 0; n < i.getLength(); n += 1)e[n] = i.getAt(n); for (n = 0; n < t.getLength(); n += 1)e[n] ^= w.gexp(w.glog(t.getAt(n)) + r); return C(e, 0).mod(t) } }; return i } function p() { var e = [], o = { writeByte: function (t) { e.push(255 & t) }, writeShort: function (t) { o.writeByte(t), o.writeByte(t >>> 8) }, writeBytes: function (t, r, e) { r = r || 0, e = e || t.length; for (var n = 0; n < e; n += 1)o.writeByte(t[n + r]) }, writeString: function (t) { for (var r = 0; r < t.length; r += 1)o.writeByte(t.charCodeAt(r)) }, toByteArray: function () { return e }, toString: function () { var t = ""; t += "["; for (var r = 0; r < e.length; r += 1)0 < r && (t += ","), t += e[r]; return t += "]" } }; return o } var k, A, b = (k = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12, 7, 37, 13], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], (A = {}).getRSBlocks = function (t, r) { var e = function (t, r) { switch (r) { case y.L: return k[4 * (t - 1) + 0]; case y.M: return k[4 * (t - 1) + 1]; case y.Q: return k[4 * (t - 1) + 2]; case y.H: return k[4 * (t - 1) + 3]; default: return } }(t, r); if (void 0 === e) throw "bad rs block @ typeNumber:" + t + "/errorCorrectionLevel:" + r; for (var n, o, i = e.length / 3, a = [], u = 0; u < i; u += 1)for (var f = e[3 * u + 0], c = e[3 * u + 1], g = e[3 * u + 2], l = 0; l < f; l += 1)a.push((n = g, o = void 0, (o = {}).totalCount = c, o.dataCount = n, o)); return a }, A), M = function () { var e = [], n = 0, o = { getBuffer: function () { return e }, getAt: function (t) { var r = Math.floor(t / 8); return 1 == (e[r] >>> 7 - t % 8 & 1) }, put: function (t, r) { for (var e = 0; e < r; e += 1)o.putBit(1 == (t >>> r - e - 1 & 1)) }, getLengthInBits: function () { return n }, putBit: function (t) { var r = Math.floor(n / 8); e.length <= r && e.push(0), t && (e[r] |= 128 >>> n % 8), n += 1 } }; return o }, x = function (t) { var r = a, n = t, e = { getMode: function () { return r }, getLength: function (t) { return n.length }, write: function (t) { for (var r = n, e = 0; e + 2 < r.length;)t.put(o(r.substring(e, e + 3)), 10), e += 3; e < r.length && (r.length - e == 1 ? t.put(o(r.substring(e, e + 1)), 4) : r.length - e == 2 && t.put(o(r.substring(e, e + 2)), 7)) } }, o = function (t) { for (var r = 0, e = 0; e < t.length; e += 1)r = 10 * r + i(t.charAt(e)); return r }, i = function (t) { if ("0" <= t && t <= "9") return t.charCodeAt(0) - "0".charCodeAt(0); throw "illegal char :" + t }; return e }, m = function (t) { var r = u, n = t, e = { getMode: function () { return r }, getLength: function (t) { return n.length }, write: function (t) { for (var r = n, e = 0; e + 1 < r.length;)t.put(45 * o(r.charAt(e)) + o(r.charAt(e + 1)), 11), e += 2; e < r.length && t.put(o(r.charAt(e)), 6) } }, o = function (t) { if ("0" <= t && t <= "9") return t.charCodeAt(0) - "0".charCodeAt(0); if ("A" <= t && t <= "Z") return t.charCodeAt(0) - "A".charCodeAt(0) + 10; switch (t) { case " ": return 36; case "$": return 37; case "%": return 38; case "*": return 39; case "+": return 40; case "-": return 41; case ".": return 42; case "/": return 43; case ":": return 44; default: throw "illegal char :" + t } }; return e }, L = function (t) { var r = o, e = i.stringToBytes(t), n = { getMode: function () { return r }, getLength: function (t) { return e.length }, write: function (t) { for (var r = 0; r < e.length; r += 1)t.put(e[r], 8) } }; return n }, D = function (t) { var r = f, e = i.stringToBytesFuncs.SJIS; if (!e) throw "sjis not supported."; !function () { var t = e("友"); if (2 != t.length || 38726 != (t[0] << 8 | t[1])) throw "sjis not supported." }(); var o = e(t), n = { getMode: function () { return r }, getLength: function (t) { return ~~(o.length / 2) }, write: function (t) { for (var r = o, e = 0; e + 1 < r.length;) { var n = (255 & r[e]) << 8 | 255 & r[e + 1]; if (33088 <= n && n <= 40956) n -= 33088; else { if (!(57408 <= n && n <= 60351)) throw "illegal char at " + (e + 1) + "/" + n; n -= 49472 } n = 192 * (n >>> 8 & 255) + (255 & n), t.put(n, 13), e += 2 } if (e < r.length) throw "illegal char at " + (e + 1) } }; return n }, S = function (t) { var e = t, n = 0, o = 0, i = 0, r = { read: function () { for (; i < 8;) { if (n >= e.length) { if (0 == i) return -1; throw "unexpected end of file./" + i } var t = e.charAt(n); if (n += 1, "=" == t) return i = 0, -1; t.match(/^\s$/) || (o = o << 6 | a(t.charCodeAt(0)), i += 6) } var r = o >>> i - 8 & 255; return i -= 8, r } }, a = function (t) { if (65 <= t && t <= 90) return t - 65; if (97 <= t && t <= 122) return t - 97 + 26; if (48 <= t && t <= 57) return t - 48 + 52; if (43 == t) return 62; if (47 == t) return 63; throw "c:" + t }; return r }, I = function (t, r, e) { for (var n = function (t, r) { var n = t, o = r, l = new Array(t * r), e = { setPixel: function (t, r, e) { l[r * n + t] = e }, write: function (t) { t.writeString("GIF87a"), t.writeShort(n), t.writeShort(o), t.writeByte(128), t.writeByte(0), t.writeByte(0), t.writeByte(0), t.writeByte(0), t.writeByte(0), t.writeByte(255), t.writeByte(255), t.writeByte(255), t.writeString(","), t.writeShort(0), t.writeShort(0), t.writeShort(n), t.writeShort(o), t.writeByte(0); var r = i(2); t.writeByte(2); for (var e = 0; 255 < r.length - e;)t.writeByte(255), t.writeBytes(r, e, 255), e += 255; t.writeByte(r.length - e), t.writeBytes(r, e, r.length - e), t.writeByte(0), t.writeString(";") } }, i = function (t) { for (var r = 1 << t, e = 1 + (1 << t), n = t + 1, o = h(), i = 0; i < r; i += 1)o.add(String.fromCharCode(i)); o.add(String.fromCharCode(r)), o.add(String.fromCharCode(e)); var a = p(), u = function (t) { var e = t, n = 0, o = 0, r = { write: function (t, r) { if (t >>> r != 0) throw "length over"; for (; 8 <= n + r;)e.writeByte(255 & (t << n | o)), r -= 8 - n, t >>>= 8 - n, n = o = 0; o |= t << n, n += r }, flush: function () { 0 < n && e.writeByte(o) } }; return r }(a); u.write(r, n); var f = 0, c = String.fromCharCode(l[f]); for (f += 1; f < l.length;) { var g = String.fromCharCode(l[f]); f += 1, o.contains(c + g) ? c += g : (u.write(o.indexOf(c), n), o.size() < 4095 && (o.size() == 1 << n && (n += 1), o.add(c + g)), c = g) } return u.write(o.indexOf(c), n), u.write(e, n), u.flush(), a.toByteArray() }, h = function () { var r = {}, e = 0, n = { add: function (t) { if (n.contains(t)) throw "dup key:" + t; r[t] = e, e += 1 }, size: function () { return e }, indexOf: function (t) { return r[t] }, contains: function (t) { return void 0 !== r[t] } }; return n }; return e }(t, r), o = 0; o < r; o += 1)for (var i = 0; i < t; i += 1)n.setPixel(i, o, e(i, o)); var a = p(); n.write(a); for (var u = function () { function e(t) { a += String.fromCharCode(r(63 & t)) } var n = 0, o = 0, i = 0, a = "", t = {}, r = function (t) { if (t < 0); else { if (t < 26) return 65 + t; if (t < 52) return t - 26 + 97; if (t < 62) return t - 52 + 48; if (62 == t) return 43; if (63 == t) return 47 } throw "n:" + t }; return t.writeByte = function (t) { for (n = n << 8 | 255 & t, o += 8, i += 1; 6 <= o;)e(n >>> o - 6), o -= 6 }, t.flush = function () { if (0 < o && (e(n << 6 - o), o = n = 0), i % 3 != 0) for (var t = 3 - i % 3, r = 0; r < t; r += 1)a += "=" }, t.toString = function () { return a }, t }(), f = a.toByteArray(), c = 0; c < f.length; c += 1)u.writeByte(f[c]); return u.flush(), "data:image/gif;base64," + u }; return i }(); qrcode.stringToBytesFuncs["UTF-8"] = function (t) { return function (t) { for (var r = [], e = 0; e < t.length; e++) { var n = t.charCodeAt(e); n < 128 ? r.push(n) : n < 2048 ? r.push(192 | n >> 6, 128 | 63 & n) : n < 55296 || 57344 <= n ? r.push(224 | n >> 12, 128 | n >> 6 & 63, 128 | 63 & n) : (e++, n = 65536 + ((1023 & n) << 10 | 1023 & t.charCodeAt(e)), r.push(240 | n >> 18, 128 | n >> 12 & 63, 128 | n >> 6 & 63, 128 | 63 & n)) } return r }(t) }, function (t) { "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports && (module.exports = t()) }(function () { return qrcode });

/**
 * =========================================================================================
 * THE PLANNER BROZ — UNIFIED HIGH-PERFORMANCE MASTER APPLICATION SCRIPT
 * =========================================================================================
 * 
 * Consolidated & Ultra-Optimized (Zero Lag Architecture):
 * 1. Services Data Configuration (Event & Travel Plans)
 * 2. Navigation, Glassmorphism Scroll & Smooth Scrolling
 * 3. Hero Canvas 300-Frame Sequence (WebP + Idle Sleeping Loop)
 * 4. Founder 3D Lanyard ID Cards (IntersectionObserver Paused Physics)
 * 5. 3D Rubber-Band Depth Services Carousel & Pop-up Modals
 * 6. Contact Form Validation, Email Transmission & Luxury Thank You Modal
 * =========================================================================================
 */



// ==========================================================================
// NAVBAR PILL SELECTION & SMOOTH SCROLL HANDLER
// ==========================================================================
function activateNav(el, e) {
  const pills = document.querySelectorAll('.nav-pill-btn');
  pills.forEach((pill) => pill.classList.remove('active'));
  if (el) el.classList.add('active');

  const targetId = el ? el.getAttribute('href') : null;
  if (targetId && targetId.startsWith('#')) {
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      if (e && e.preventDefault) e.preventDefault();
      const navbar = document.getElementById('mainNavbar');
      const navOffset = navbar ? navbar.offsetHeight + 25 : 80;
      const elementPos = targetSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: Math.max(0, elementPos - navOffset),
        behavior: 'smooth'
      });
      if (history.pushState) {
        history.pushState(null, null, targetId);
      }
    }
  }
}
window.activateNav = activateNav;


/**
 * =========================================================================================
 * THE PLANNER BROZ — SERVICES DATA CONFIGURATION
 * =========================================================================================
 * 
 * AAP YAHAN SE ASANI SE SAB KUCH CHANGE KAR SAKTE HAIN:
 * 1. Event Images & Videos
 * 2. Travel Images & Videos
 * 3. Headings, Subheadings & Descriptions
 * 4. Category Names & Icons
 * 5. Button Text & Links
 * 6. Carousel Auto-slide Speed
 * 
 * Simply edit the text or image paths inside the quotes!
 * =========================================================================================
 */

// =========================================================================================
// 1. EVENT SERVICES CONFIGURATION
// =========================================================================================
const EVENT_SERVICES_CONFIG = {
  // Section Badge Pill
  badgeText: "OUR EVENT SERVICES",
  badgeIcon: "✦",

  // Main Section Headings
  headingMain: "Event Planning",
  headingSub: "That Brings Your",
  headingHighlight: "Ideas to Life", // Golden script accent

  // Description
  description: "From intimate gatherings to large-scale celebrations, we design and manage events that create lasting impressions.",

  // Primary Button
  ctaText: "Explore Event Services",
  ctaLink: "#contactModal",

  // Hero Background Image (Can be local path or Unsplash URL)
  heroBackgroundImage: "assets/event-hero-bg.webp",

  // 6 Floating Category Bar Services (Icons use Bootstrap Icons: https://icons.getbootstrap.com)
  categories: [
    {
      id: "corporate",
      name: "Corporate Events",
      icon: "bi-building" // Icon class
    },
    {
      id: "brand-activations",
      name: "Brand Activations",
      icon: "bi-megaphone"
    },
    {
      id: "exhibitions",
      name: "Exhibitions & Launches",
      icon: "bi-people"
    },
    {
      id: "birthdays",
      name: "Birthdays & Private Parties",
      icon: "bi-cake2"
    },
    {
      id: "college-events",
      name: "College & School Events",
      icon: "bi-mortarboard"
    },
    {
      id: "pre-wedding",
      name: "Pre-Wedding Shoots",
      icon: "bi-camera"
    }
  ],

  // Auto-Slide Speed in Milliseconds (Reduced for continuous smooth gliding)
  autoSlideSpeed: 2400,

  // Event Photos (Shown when "Photos" tab is active & opens full-width bespoke gallery popup)
  photos: [
    {
      type: "image",
      title: "Wedding Decorations",
      src: "assets/events/wedding.webp",
      alt: "Luxury Indian Wedding Mandap and Floral Decor",
      subtitle: "Grand Royal Indian Mandap, Floral Elegance & Bespoke Stage Architecture",
      gallery: [
        {
          src: "assets/events/wedding.webp",
          title: "Royal Mandap & Floral Decor",
          desc: "Handcrafted floral arches with heritage brass accents, fresh tuberose and velvet seating"
        },
        {
          src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
          title: "Luxury Floral Reception Entrance",
          desc: "Grand fairy-lit tunnel with cascading orchids, wisteria blooms and crystal chandeliers"
        },
        {
          src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
          title: "Bespoke Royal Banquet Tablescape",
          desc: "Gold-trimmed bone china, crystal stemware, taper candles and aromatic rose centerpieces"
        },
        {
          src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
          title: "Traditional Haldi & Mehendi Setup",
          desc: "Vibrant marigold yellow theme with cozy low lounge seating and floating flower urli bowls"
        },
        {
          src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
          title: "Romantic Starlight Reception",
          desc: "Enchanting night lighting under open-air vintage tree canopies with warm festoon glows"
        },
        {
          src: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1200&q=80",
          title: "Bridal Walkway & Aisle Design",
          desc: "Candlelit glass aisle adorned with velvet rose petals leading toward the regal stage"
        }
      ]
    },
    {
      type: "image",
      title: "Corporate Annual Meet",
      src: "assets/events/corporate.webp",
      alt: "Night Palace Lawn Corporate Annual Gala",
      subtitle: "Keynote Stages, Executive Galas & Prestigious Corporate Summits",
      gallery: [
        {
          src: "assets/events/corporate.webp",
          title: "Night Palace Lawn Corporate Gala",
          desc: "Grand illuminated heritage lawn setup with premium banqueting and keynote stage"
        },
        {
          src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
          title: "High-Tech Keynote Auditorium Stage",
          desc: "Seamless curved LED backdrop screens with dynamic architectural stage lighting"
        },
        {
          src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
          title: "Global Leadership Presentation",
          desc: "State-of-the-art acoustic sound engineering and executive speaker lectern"
        },
        {
          src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
          title: "Annual Convention & Delegate Hall",
          desc: "Ergonomic executive conference seating for 500+ guests with interactive voting pads"
        },
        {
          src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80",
          title: "Executive Awards Night & Dinner",
          desc: "Black-tie awards ceremony with custom gold trophies, banquet dining and live entertainment"
        },
        {
          src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80",
          title: "VIP Networking & Cocktail Lounge",
          desc: "Luxury cocktail lounge for C-suite networking, bespoke hors d'oeuvres and conversations"
        }
      ]
    },
    {
      type: "image",
      title: "Product Launch Event",
      src: "assets/events/product-launch.webp",
      alt: "Grand Tech Summit Product Launch Keynote Stage",
      subtitle: "Futuristic Reveals, Dynamic Laser Stages & High-Impact Media Experiences",
      gallery: [
        {
          src: "assets/events/product-launch.webp",
          title: "Grand Tech Summit Keynote Stage",
          desc: "Epic wide-angle stage with panoramic LED projections and dramatic countdown reveal"
        },
        {
          src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
          title: "Cinematic Laser & Light Show",
          desc: "Synchronized laser beams and pyrotechnic cold sparks for maximum reveal impact"
        },
        {
          src: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
          title: "Live Audience Experience",
          desc: "Electrifying crowd atmosphere with immersive soundscapes and experiential zones"
        },
        {
          src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
          title: "Neon After-Party & Launch Lounge",
          desc: "Celebratory after-party with branded cocktail bars and energetic DJ beats"
        },
        {
          src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80",
          title: "Interactive Experience Kiosks",
          desc: "Hands-on product touchpoints and demo zones for influencers and press media"
        },
        {
          src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
          title: "Master Audio & Visual Console",
          desc: "Broadcast-grade live streaming and AV production control center"
        }
      ]
    },
    {
      type: "image",
      title: "Birthday Celebration",
      src: "assets/events/birthday.webp",
      alt: "Magical Outdoor Floral Birthday Celebration Party",
      subtitle: "Bespoke Themed Decor, Fairy Light Canopies & Unforgettable Celebrations",
      gallery: [
        {
          src: "assets/events/birthday.webp",
          title: "Magical Outdoor Birthday Setup",
          desc: "Whimsical garden setting with fairy-lit dinner table and personalized floral decor"
        },
        {
          src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80",
          title: "Vibrant Balloon Arch Installation",
          desc: "Custom pastel & chrome balloon garland arch with customized neon signage"
        },
        {
          src: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80",
          title: "Customized Designer Cake Stage",
          desc: "Multi-tier gourmet birthday cake display surrounded by floral pedestals"
        },
        {
          src: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80",
          title: "Golden Confetti Party Atmosphere",
          desc: "Gleaming golden party elements, customized party favors and sparklers"
        },
        {
          src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80",
          title: "Private Celebration Moments",
          desc: "Intimate family and friends gathering with celebratory toasts and joy"
        },
        {
          src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
          title: "Night Garden Fairy Lights Party",
          desc: "Illuminated nighttime garden party with warm lanterns and acoustic live music"
        }
      ]
    },
    {
      type: "image",
      title: "Private Party Setup",
      src: "assets/events/private-party.webp",
      alt: "Luxury VIP Outdoor Cabana Lounge Setup",
      subtitle: "VIP Cabana Lounges, Ambient Poolside Lighting & Crafted Cocktail Bars",
      gallery: [
        {
          src: "assets/events/private-party.webp",
          title: "Luxury VIP Cabana Lounge",
          desc: "Sheer draped cabanas with plush velvet seating, oriental rugs and ambient lighting"
        },
        {
          src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
          title: "Fine Dining Private Banquet",
          desc: "Intimate private dining room with bespoke menu curation and sommelier service"
        },
        {
          src: "https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&w=1200&q=80",
          title: "Illuminated Poolside Sundowner",
          desc: "Floating pool candles, shoreline loungers and twilight cocktail service"
        },
        {
          src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
          title: "Artisanal Cocktail & Wine Bar",
          desc: "Handcrafted cocktail station staffed by master mixologists with signature infusions"
        },
        {
          src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80",
          title: "Late Night Starlight Soiree",
          desc: "Sensational mood lighting, private bonfire pit and cozy outdoor seating"
        },
        {
          src: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=1200&q=80",
          title: "Bespoke VIP Lounge Seating",
          desc: "Curated furniture vignettes with brass cocktail tables and fragrant orchid accents"
        }
      ]
    }
  ],

  // Event Videos (Shown when "Videos" tab is active)
  videos: [
    {
      type: "video",
      title: "Royal Wedding Showcase",
      poster: "assets/events/wedding.webp",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      alt: "Royal Wedding Highlights Video"
    },
    {
      type: "video",
      title: "Product Launch Aftermovie",
      poster: "assets/events/product-launch.webp",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      alt: "Tech Summit Keynote Video"
    },
    {
      type: "video",
      title: "Corporate Gala Highlights",
      poster: "assets/events/corporate.webp",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      alt: "Corporate Gala Night Video"
    },
    {
      type: "video",
      title: "Neon Birthday Celebration",
      poster: "assets/events/birthday.webp",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      alt: "Magical Birthday Video"
    },
    {
      type: "video",
      title: "Exclusive Private Lounge",
      poster: "assets/events/private-party.webp",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      alt: "Private VIP Lounge Party Video"
    }
  ]
};


// =========================================================================================
// 2. TRAVEL SERVICES CONFIGURATION
// =========================================================================================
const TRAVEL_SERVICES_CONFIG = {
  // Section Badge Pill
  badgeText: "OUR TRAVEL SERVICES",
  badgeIcon: "✈",

  // Main Section Headings
  headingMain: "Travel Experiences",
  headingSub: "Beyond",
  headingHighlight: "Destinations", // Golden script accent

  // Description
  description: "From group trips to corporate offsites, we plan travel experiences that bring people closer to new places and better memories.",

  // Primary Button
  ctaText: "Explore Travel Services",
  ctaLink: "#contactModal",

  // Hero Background Image (Can be local path or Unsplash URL)
  heroBackgroundImage: "assets/travel-hero-bg.webp",

  // 6 Floating Category Bar Services
  categories: [
    {
      id: "group-trips",
      name: "Group Trips",
      icon: "bi-people-fill"
    },
    {
      id: "family-holidays",
      name: "Family Holidays",
      icon: "bi-house-heart"
    },
    {
      id: "offsites",
      name: "Offsites & Corporate Travel",
      icon: "bi-briefcase"
    },
    {
      id: "tours-experiences",
      name: "Tours & Travel Experiences",
      icon: "bi-geo-alt"
    },
    {
      id: "mice",
      name: "MICE",
      icon: "bi-building-check"
    },
    {
      id: "custom-itineraries",
      name: "Customized Itineraries",
      icon: "bi-bezier2"
    }
  ],

  // Auto-Slide Speed in Milliseconds (Reduced for continuous smooth gliding in opposite direction)
  autoSlideSpeed: 2400,

  // Travel Photos (Shown when "Photos" tab is active & opens full-width bespoke gallery popup)
  photos: [
    {
      type: "image",
      title: "Manali Group Trip",
      src: "assets/travel/manali.webp",
      alt: "Manali Himalayan River and Pine Forest Valley",
      subtitle: "Snow-Capped Peaks, Riverside Camping & High-Altitude Himalayan Adventures",
      gallery: [
        {
          src: "assets/travel/manali.webp",
          title: "Himalayan River & Pine Valley",
          desc: "Rushing glacial Beas river framed by towering deodar pine forests and serene valley air"
        },
        {
          src: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
          title: "Solang Valley Snow Peaks",
          desc: "Panoramic snowy ridges, paragliding launches and high-altitude mountain lookouts"
        },
        {
          src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
          title: "Riverside Luxury Dome Stays",
          desc: "Geodesic glamping domes nestled along lush riverbanks with personal bonfire hearths"
        },
        {
          src: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80",
          title: "Starlit Himalayan Campfire",
          desc: "Evening stargazing, barbecue dinners and acoustic music under crystal-clear alpine skies"
        },
        {
          src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
          title: "Rohtang Pass Mountain Expedition",
          desc: "Thrilling high-altitude mountain pass drives with breathtaking glacier views"
        },
        {
          src: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80",
          title: "Old Manali Wooden Cafe Trails",
          desc: "Charming cedar wood cafes, artisanal bakery trails and vibrant mountain culture"
        }
      ]
    },
    {
      type: "image",
      title: "Jaipur Corporate Offsite",
      src: "assets/travel/jaipur.webp",
      alt: "Nahargarh Fort Sunset View with Colleagues in Jaipur",
      subtitle: "Royal Fort Sunsets, Desert Safari Camps & Heritage Palace Conclaves",
      gallery: [
        {
          src: "assets/travel/jaipur.webp",
          title: "Nahargarh Fort Royal Sunset",
          desc: "Golden hour sunset over the Pink City panorama from the historic ramparts of Nahargarh"
        },
        {
          src: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
          title: "Hawa Mahal Iconic Architecture",
          desc: "Intricately carved pink sandstone honeycomb facade in the heart of the royal heritage quarter"
        },
        {
          src: "https://images.unsplash.com/photo-1597040663342-45b6af3d91a5?auto=format&fit=crop&w=1200&q=80",
          title: "Amer Fort Royal Courtyards",
          desc: "Grand palatial gateways, Sheesh Mahal mirrored chambers and majestic courtyards"
        },
        {
          src: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
          title: "Heritage Haveli Welcome & Folk Dance",
          desc: "Traditional Rajasthani welcome with Kalbelia dancers, dhol beats and royal rose water showers"
        },
        {
          src: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
          title: "Sam Dunes Luxury Desert Safari",
          desc: "Sunset camel treks, quad biking across undulating golden sand dunes and bonfire galas"
        },
        {
          src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
          title: "Maharaja Palace Conclave & Dining",
          desc: "Heritage palace conference setup followed by royal 21-course Rajasthani thali banquet"
        }
      ]
    },
    {
      type: "image",
      title: "Udaipur Family Holiday",
      src: "assets/travel/udaipur.webp",
      alt: "Pichola Royal Boat Cruise facing Udaipur Lake Palace",
      subtitle: "Lake Pichola Sunset Cruises, Grand Haveli Stays & Regal Courtyard Dinners",
      gallery: [
        {
          src: "assets/travel/udaipur.webp",
          title: "Lake Pichola Royal Boat Cruise",
          desc: "Private heritage boat cruise gliding past the glistening marble facades of Lake Palace"
        },
        {
          src: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
          title: "City Palace Heritage Courtyard",
          desc: "Regal peacock mosaics, historic royal balconies and panoramic views of Lake Pichola"
        },
        {
          src: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
          title: "Grand Jharokha Architectural Arches",
          desc: "Iconic scalloped marble arches framing romantic sunset vistas over the Aravali hills"
        },
        {
          src: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1200&q=80",
          title: "Jag Mandir Island Sunset Banquet",
          desc: "Candlelit family dinner on the historic island palace with gentle lakeside breezes"
        },
        {
          src: "https://images.unsplash.com/photo-1585123388867-3bfe6dd4bdbf?auto=format&fit=crop&w=1200&q=80",
          title: "Sajjangarh Monsoon Palace Overlook",
          desc: "Panoramic clifftop palace vantage point overlooking the lakes and distant hills"
        },
        {
          src: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
          title: "Lakeside Heritage Haveli Stay",
          desc: "Authentic royal hospitality, heritage suites with antique brass decor and lakefront terraces"
        }
      ]
    },
    {
      type: "image",
      title: "Goa Beach Trip",
      src: "assets/travel/goa.webp",
      alt: "Golden Sunset Beach with Palm Trees in Goa",
      subtitle: "Golden Coastline Sunsets, Catamaran Yacht Cruises & Cliffside Stays",
      gallery: [
        {
          src: "assets/travel/goa.webp",
          title: "Golden Coastline Sunset & Palms",
          desc: "Warm Arabian Sea breezes, leaning coconut groves and idyllic golden sand shores"
        },
        {
          src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
          title: "Turquoise Shoreline & Beach Day",
          desc: "Pristine sandy stretches for private sunbathing, beach volleyball and relaxation"
        },
        {
          src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
          title: "Portuguese Luxury Villa & Pool",
          desc: "Private heritage villa with infinity pool, lush tropical gardens and private chef"
        },
        {
          src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
          title: "Private Catamaran Yacht Charter",
          desc: "Sunset sailing along the Mandovi river and sea caves with chilled beverages and music"
        },
        {
          src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
          title: "Beachside Sundowner Lounges",
          desc: "Bohemian beachfront cabanas with handcrafted tropical cocktails and live DJ sunset sets"
        },
        {
          src: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
          title: "Candlelit Coastal Seafood Dinner",
          desc: "Fresh catch of the day barbecued right on the beach accompanied by acoustic guitar tunes"
        }
      ]
    },
    {
      type: "image",
      title: "Kashmir Winter Trip",
      src: "assets/travel/kashmir.webp",
      alt: "Friends Enjoying Snow in Gulmarg Kashmir",
      subtitle: "Gulmarg Powder Snow Slopes, Dal Lake Shikara Rides & Pine Wonderland",
      gallery: [
        {
          src: "assets/travel/kashmir.webp",
          title: "Gulmarg Snow Wonderland",
          desc: "Crisp mountain powder, playful snowball moments and snow-laden pine trees in Gulmarg"
        },
        {
          src: "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=1200&q=80",
          title: "Dal Lake Shikara Morning Ride",
          desc: "Gliding through misty waters in a cushioned wooden Shikara with floating flower markets"
        },
        {
          src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
          title: "Group Snow Adventure Moments",
          desc: "Cherished travel memories with friends exploring snowy mountain trails and viewpoints"
        },
        {
          src: "https://images.unsplash.com/photo-1548777123-e216912df7d8?auto=format&fit=crop&w=1200&q=80",
          title: "Pahalgam Deep Pine Forest Trek",
          desc: "Untouched pristine snowscapes in Betaab Valley and Aru framed by Himalayan ridges"
        },
        {
          src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
          title: "High-Altitude Gondola Expedition",
          desc: "World's second-highest cable car ascending to 14,000 ft Apharwat Peak with ski slopes"
        },
        {
          src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
          title: "Traditional Cedar Wood Houseboat",
          desc: "Cozy walnut-wood carved houseboats on Nigeen Lake with steaming Kashmiri Kahwa"
        }
      ]
    }
  ],

  // Travel Videos (Shown when "Videos" tab is active)
  videos: [
    {
      type: "video",
      title: "Manali Valley Expedition",
      poster: "assets/travel/manali.webp",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
      alt: "Manali Scenic Journey Video"
    },
    {
      type: "video",
      title: "Jaipur Heritage Sunset",
      poster: "assets/travel/jaipur.webp",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      alt: "Jaipur Royal Fort Exploration Video"
    },
    {
      type: "video",
      title: "Lake Pichola Sunset Cruise",
      poster: "assets/travel/udaipur.webp",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      alt: "Udaipur Boat Cruise Experience Video"
    },
    {
      type: "video",
      title: "Goa Coastal Beachside",
      poster: "assets/travel/goa.webp",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackSeeTheWorld.mp4",
      alt: "Goa Sunset Beach Tour Video"
    },
    {
      type: "video",
      title: "Kashmir Snow Wonderland",
      poster: "assets/travel/kashmir.webp",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      alt: "Gulmarg Kashmir Winter Snow Trip Video"
    }
  ]
};

// Make accessible to global window for browser scripts
if (typeof window !== "undefined") {
  window.EVENT_SERVICES_CONFIG = EVENT_SERVICES_CONFIG;
  window.TRAVEL_SERVICES_CONFIG = TRAVEL_SERVICES_CONFIG;
}

// Support ES Module export for React components
if (typeof module !== "undefined" && module.exports) {
  module.exports = { EVENT_SERVICES_CONFIG, TRAVEL_SERVICES_CONFIG };
}


/**
 * The Planner Broz — Main Website Interactive Logic & Physics Engine
 */

// ==========================================================================
// 1. UI INTERACTION HANDLERS & CAROUSEL MODULES
// ==========================================================================
// 1. Navbar Glassmorphism Scroll Effect (Optimized with Passive Listener)
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('mainNavbar');
  if (navbar) {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
}, { passive: true });

// ==========================================================================
// 1.5 NAVBAR INTERACTIVE ACTIVE PILL SWITCHER
// ==========================================================================
function activateNav(el, e) {
  // 1. Remove active class from all nav items
  const pills = document.querySelectorAll('.nav-pill-btn');
  pills.forEach((pill) => pill.classList.remove('active'));

  // 2. Add active class to clicked item (sets mehroom background)
  if (el) {
    el.classList.add('active');
  }

  // 3. Smooth scroll to target section
  const targetId = el ? el.getAttribute('href') : null;
  if (targetId && targetId.startsWith('#')) {
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      if (e && e.preventDefault) e.preventDefault();
      const navbar = document.getElementById('mainNavbar');
      const navOffset = navbar ? navbar.offsetHeight + 25 : 80;
      const elementPos = targetSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: Math.max(0, elementPos - navOffset),
        behavior: 'smooth'
      });
      if (history.pushState) {
        history.pushState(null, null, targetId);
      }
    }
  }
}
window.activateNav = activateNav;

// Attach click listeners on DOM load as backup to inline onclick
document.addEventListener('DOMContentLoaded', () => {
  const navPills = document.querySelectorAll('.nav-pill-btn');
  navPills.forEach((pill) => {
    pill.addEventListener('click', (e) => {
      activateNav(pill, e);
    });
  });

  // Smooth scroll for brand logo to top
  const brandLogo = document.querySelector('.navbar-brand');
  if (brandLogo) {
    brandLogo.addEventListener('click', (e) => {
      const href = brandLogo.getAttribute('href');
      if (href === '#heroSection' || href === '#') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }
});



// 6. Testimonial Switcher
const testimonials = [
  {
    headline: '“The Planner Broz made our destination wedding completely magical and stress-free.”',
    quote: 'From villa bookings across Lake Pichola to chartered logistics and royal decor, the team handled every detail with effortless perfection. Our 300 guests are still talking about it.',
    author: 'Aarav & Meera Kapoor',
    location: 'Destination Wedding, Udaipur',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
  },
  {
    headline: '“Unmatched concierge hospitality from initial booking to departure.”',
    quote: 'We booked a private cliff sanctuary through The Planner Broz. Every expectation was exceeded: private boat charters, Michelin-star dining, and 24/7 personal care.',
    author: 'Julian & Sophia Vance',
    location: 'Private Retreat, Amalfi Coast',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
  }
];

let currentTestimonialIndex = 0;

function renderTestimonial(index) {
  const item = testimonials[index];
  if (!item) return;
  document.getElementById('testHeadline').innerHTML = item.headline;
  document.getElementById('testQuote').innerText = item.quote;
  document.getElementById('testAuthor').innerText = item.author;
  document.getElementById('testLocation').innerText = item.location;
  document.getElementById('testAvatar').src = item.avatar;
}

function prevTestimonial() {
  currentTestimonialIndex = (currentTestimonialIndex === 0) ? testimonials.length - 1 : currentTestimonialIndex - 1;
  renderTestimonial(currentTestimonialIndex);
}

function nextTestimonial() {
  currentTestimonialIndex = (currentTestimonialIndex === testimonials.length - 1) ? 0 : currentTestimonialIndex + 1;
  renderTestimonial(currentTestimonialIndex);
}


// ==========================================================================
// Global Window Bindings for Inline HTML Attributes (onclick handlers)
// ==========================================================================

window.renderTestimonial = renderTestimonial;
window.prevTestimonial = prevTestimonial;
window.nextTestimonial = nextTestimonial;

// ==========================================================================
// 2. HERO CANVAS FRAME SEQUENCE & 3D LANYARD VIP PHYSICS ENGINE
// ==========================================================================
(function () {
  const heroTrack = document.getElementById('heroSection');
  const canvas = document.getElementById('heroCanvas');
  if (!heroTrack || !canvas) return;

  const ctx = canvas.getContext('2d', { alpha: false });
  if (!ctx) return;

  const TOTAL_FRAMES = 300;
  const images = new Array(TOTAL_FRAMES);
  const loadedMap = new Uint8Array(TOTAL_FRAMES);

  let currentFrame = 0;
  let targetFrame = 0;
  let lastRenderedIndex = -1;
  let isHeroVisible = true;
  let cw = 0;
  let ch = 0;

  function getFrameUrl(index) {
    const num = String(index + 1).padStart(3, '0');
    return `frames/ezgif-frame-${num}.webp`;
  }

  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = canvas.parentElement ? canvas.parentElement.clientWidth : window.innerWidth;
    const h = canvas.parentElement ? canvas.parentElement.clientHeight : window.innerHeight;

    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    cw = canvas.width;
    ch = canvas.height;

    lastRenderedIndex = -1;
    updateScrollProgress();
  }

  function drawImageToCanvas(img) {
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    const hRatio = cw / iw;
    const vRatio = ch / ih;

    // 8% overscan zoom pushes any bottom-right corner watermark/logo completely outside canvas bounds
    const OVER_SCAN = 1.08;
    const ratio = Math.max(hRatio, vRatio) * OVER_SCAN;

    const nw = iw * ratio;
    const nh = ih * ratio;

    // Bias offset by 30px so the bottom-right corner is pushed 90-100px past the canvas edge
    const nx = (cw - nw) / 2 - 30;
    const ny = (ch - nh) / 2 - 25;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'medium';
    ctx.drawImage(img, nx, ny, nw, nh);
  }

  function loadFrame(i, onLoaded) {
    if (i < 0 || i >= TOTAL_FRAMES || images[i]) return;
    const img = new Image();
    images[i] = img;
    img.onload = function () {
      loadedMap[i] = 1;
      if (onLoaded) onLoaded(i, img);
      const desired = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(currentFrame)));
      if (lastRenderedIndex === -1 || Math.abs(desired - i) < Math.abs(desired - lastRenderedIndex)) {
        drawImageToCanvas(img);
        lastRenderedIndex = i;
      }
    };
    img.src = getFrameUrl(i);
  }

  // Dynamically prioritize loading frames around current scroll position
  function prioritizeNearbyFrames(center) {
    const radius = 16;
    for (let r = 1; r <= radius; r++) {
      const ahead = center + r;
      const behind = center - r;
      if (ahead < TOTAL_FRAMES && !images[ahead]) loadFrame(ahead);
      if (behind >= 0 && !images[behind]) loadFrame(behind);
    }
  }

  function initSmartPreloader() {
    // Phase 1: Load initial frame immediately
    loadFrame(0, function (_, img) {
      if (lastRenderedIndex === -1) {
        drawImageToCanvas(img);
        lastRenderedIndex = 0;
      }
    });

    // Phase 2: Skeletal pass every 5th frame (only 60 keyframes!)
    // Instantly unlocks responsive scrubbing across the entire track
    let skeletonIndex = 0;
    const skeletonStep = 5;
    function loadSkeletonBatch() {
      const end = Math.min(skeletonIndex + 15, TOTAL_FRAMES);
      for (let i = skeletonIndex; i < end; i += skeletonStep) {
        loadFrame(i);
      }
      skeletonIndex = end;
      if (skeletonIndex < TOTAL_FRAMES) {
        setTimeout(loadSkeletonBatch, 20);
      } else {
        // Phase 3: Fill in all intermediate frames smoothly in background
        loadRemainingFrames(1);
      }
    }
    setTimeout(loadSkeletonBatch, 40);

    function loadRemainingFrames(start) {
      let idx = start;
      function fillBatch() {
        let loadedInBatch = 0;
        while (idx < TOTAL_FRAMES && loadedInBatch < 10) {
          if (!images[idx]) {
            loadFrame(idx);
            loadedInBatch++;
          }
          idx++;
        }
        if (idx < TOTAL_FRAMES) {
          setTimeout(fillBatch, 40);
        }
      }
      setTimeout(fillBatch, 150);
    }
  }

  const heroText = document.querySelector('.hero-content-container');
  const heroOverlay = document.querySelector('.hero-content-overlay');

  function updateScrollProgress() {
    const scrollY = window.scrollY || window.pageYOffset || 0;
    const viewport = canvas.parentElement;

    // Hide fixed hero when completely covered by mainContentLayer to save GPU
    if (scrollY > heroTrack.offsetHeight + 100) {
      if (isHeroVisible && viewport) {
        viewport.style.visibility = 'hidden';
        isHeroVisible = false;
      }
      return;
    } else {
      if (!isHeroVisible && viewport) {
        viewport.style.visibility = 'visible';
        isHeroVisible = true;
      }
    }

    const totalScroll = heroTrack.offsetHeight - window.innerHeight;
    if (totalScroll <= 0) {
      targetFrame = 0;
      return;
    }

    const progress = Math.min(Math.max(scrollY / totalScroll, 0), 1);
    targetFrame = progress * (TOTAL_FRAMES - 1);

    prioritizeNearbyFrames(Math.round(targetFrame));
  }

  // Smooth render loop with liquid inertial damping
  function render() {
    if (isHeroVisible) {
      const diff = targetFrame - currentFrame;

      // 0.085 provides signature silky Apple-style momentum glide
      if (Math.abs(diff) > 0.002) {
        currentFrame += diff * 0.085;
      } else {
        currentFrame = targetFrame;
      }

      // Frame-based smooth dissolve: text & overlay are visible only on initial 5-10 frames, hidden thereafter
      if (heroText) {
        const FADE_START = 4;
        const FADE_END = 12;
        let textAlpha = 1;

        if (currentFrame <= FADE_START) {
          textAlpha = 1;
        } else if (currentFrame >= FADE_END) {
          textAlpha = 0;
        } else {
          const t = (currentFrame - FADE_START) / (FADE_END - FADE_START);
          textAlpha = 1 - (t * t * (3 - 2 * t)); // smoothstep easing
        }

        if (textAlpha <= 0.002) {
          if (heroText.style.visibility !== 'hidden') {
            heroText.style.opacity = '0';
            heroText.style.visibility = 'hidden';
            heroText.style.pointerEvents = 'none';
            heroText.style.transform = 'translateY(-20px)';
          }
          if (heroOverlay && heroOverlay.style.opacity !== '0') {
            heroOverlay.style.opacity = '0';
          }
        } else {
          heroText.style.visibility = 'visible';
          heroText.style.opacity = textAlpha.toFixed(3);
          heroText.style.pointerEvents = (textAlpha > 0.3) ? 'auto' : 'none';
          heroText.style.transform = 'translateY(' + (-20 * (1 - textAlpha)).toFixed(1) + 'px)';
          if (heroOverlay) {
            heroOverlay.style.opacity = textAlpha.toFixed(3);
          }
        }
      }

      const desiredIndex = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(currentFrame)));

      let bestImg = null;
      let bestIndex = -1;

      if (images[desiredIndex] && loadedMap[desiredIndex]) {
        bestImg = images[desiredIndex];
        bestIndex = desiredIndex;
      } else {
        // Find closest available loaded frame
        for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
          const left = desiredIndex - offset;
          const right = desiredIndex + offset;
          if (left >= 0 && images[left] && loadedMap[left]) {
            bestImg = images[left];
            bestIndex = left;
            break;
          }
          if (right < TOTAL_FRAMES && images[right] && loadedMap[right]) {
            bestImg = images[right];
            bestIndex = right;
            break;
          }
        }
      }

      if (bestImg && bestIndex !== lastRenderedIndex) {
        drawImageToCanvas(bestImg);
        lastRenderedIndex = bestIndex;
      }
    }

    // Idle optimization: only schedule next frame if frame is still settling or user is scrolling
    if (isHeroVisible && Math.abs(targetFrame - currentFrame) > 0.01) {
      requestAnimationFrame(render);
    } else {
      isHeroAnimating = false;
    }
  }

  let isHeroAnimating = false;
  function triggerHeroRender() {
    if (!isHeroAnimating && isHeroVisible) {
      isHeroAnimating = true;
      requestAnimationFrame(render);
    }
  }

  function onScrollHero() {
    updateScrollProgress();
    triggerHeroRender();
  }

  window.addEventListener('scroll', onScrollHero, { passive: true });
  window.addEventListener('resize', () => { resizeCanvas(); triggerHeroRender(); }, { passive: true });

  resizeCanvas();
  initSmartPreloader();
  updateScrollProgress();
  triggerHeroRender();
})();

/* ==========================================================================
   INITIALIZE INTERACTIVE 3D LANYARD ID CARDS FOR BOTH CO-FOUNDERS
   ========================================================================== */
(function initIDCardLanyards() {
  function createIDCardLanyard(containerId, config) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const socialUrl = config.qrUrl || config.instagramUrl || config.whatsappUrl || 'https://instagram.com';

    container.innerHTML = `
          <div class="idcl-root">
            <div class="idcl-stage">
              <canvas class="idcl-rope"></canvas>
              <div class="idcl-rail"></div>
              <div class="idcl-card">
                <div class="idcl-flipper">
                  <!-- Front Face (Exact Reference Photo Match) -->
                  <div class="idcl-face idcl-front">
                    <!-- Background gold swooshes -->
                    <svg class="idcl-bg-swoosh" viewBox="0 0 340 560" preserveAspectRatio="none" fill="none">
                      <defs>
                        <linearGradient id="goldSwooshGrad1_${containerId}" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stop-color="#EED799" stop-opacity="0.2"/>
                          <stop offset="30%" stop-color="#C59B3F" stop-opacity="0.45"/>
                          <stop offset="65%" stop-color="#9E7822" stop-opacity="0.75"/>
                          <stop offset="100%" stop-color="#2D1A0D" stop-opacity="0.9"/>
                        </linearGradient>
                        <linearGradient id="goldVertLine_${containerId}" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stop-color="#C59B3F" stop-opacity="0.85"/>
                          <stop offset="70%" stop-color="#B88628" stop-opacity="0.7"/>
                          <stop offset="100%" stop-color="#84601A" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="softLeftWave_${containerId}" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stop-color="#EFE3D0" stop-opacity="0.4"/>
                          <stop offset="100%" stop-color="#C59B3F" stop-opacity="0.08"/>
                        </linearGradient>
                      </defs>
                      <path d="M-20 60 Q 50 180 -10 320 Q -40 420 10 520" stroke="url(#softLeftWave_${containerId})" stroke-width="45" fill="none" opacity="0.6"/>
                      <line x1="324" y1="64" x2="324" y2="400" stroke="url(#goldVertLine_${containerId})" stroke-width="3" stroke-linecap="round"/>
                      <path d="M 280 20 Q 320 80 324 160" stroke="#C59B3F" stroke-width="1.5" stroke-opacity="0.3" fill="none"/>
                      <path d="M 340 370 Q 315 445 255 490 Q 195 535 90 550 L 340 560 Z" fill="url(#goldSwooshGrad1_${containerId})"/>
                      <path d="M 340 365 Q 312 440 250 488 Q 190 533 80 549" stroke="#E6C26E" stroke-width="1.8" fill="none" opacity="0.85"/>
                      <path d="M 340 440 Q 320 485 270 520 L 340 560 Z" fill="#241508" opacity="0.35"/>
                    </svg>

                    <!-- Top Slot Hole -->
                    <div class="idcl-hole"></div>

                    <!-- Face Content -->
                    <div class="idcl-face-content">
                      <!-- Header matching reference photo -->
                      <div class="idcl-header">
                        <div class="idcl-brand">
                          <svg class="idcl-brand-star" viewBox="0 0 24 24" fill="#C59B3F">
                            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"/>
                          </svg>
                          <div class="idcl-brand-text">
                            <b>${config.brand}</b>
                            <span class="idcl-brand-tagline">${config.brandTagline}</span>
                          </div>
                        </div>
                        <div class="idcl-pillars">
                          ${config.pillars.map(p => `<span>${p}</span>`).join('')}
                          <div class="idcl-pillars-line"></div>
                        </div>
                      </div>

                      <!-- Profile Photo Frame - 100% visible, fully showing head & shoulders -->
                      <div class="idcl-photo-container">
                        <img src="${config.photoUrl}" alt="${config.name}" />
                        <div class="idcl-verified-badge" title="Verified Founder">
                          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>

                      <!-- Identity: Name & Role -->
                      <div class="idcl-identity">
                        <div class="idcl-name">${config.name}</div>
                        <div class="idcl-role">${config.role}</div>
                      </div>

                      <!-- Info Table -->
                      <div class="idcl-info-section">
                        <div class="idcl-table">
                          <div class="idcl-row">
                            <span class="idcl-row-icon">
                              <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="12" cy="10" r="3"/><line x1="7" y1="18" x2="17" y2="18"/>
                              </svg>
                            </span>
                            <span class="idcl-row-label">ID NO</span>
                            <span class="idcl-row-sep">:</span>
                            <span class="idcl-row-val">${config.idNumber}</span>
                          </div>
                          <div class="idcl-row">
                            <span class="idcl-row-icon">
                              <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                              </svg>
                            </span>
                            <span class="idcl-row-label">DEPARTMENT</span>
                            <span class="idcl-row-sep">:</span>
                            <span class="idcl-row-val">${config.department || 'Leadership'}</span>
                          </div>
                          <div class="idcl-row">
                            <span class="idcl-row-icon">
                              <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                              </svg>
                            </span>
                            <span class="idcl-row-label">LOCATION</span>
                            <span class="idcl-row-sep">:</span>
                            <span class="idcl-row-val">${config.location}</span>
                          </div>
                          <div class="idcl-row">
                            <span class="idcl-row-icon">
                              <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                              </svg>
                            </span>
                            <span class="idcl-row-label">EMAIL</span>
                            <span class="idcl-row-sep">:</span>
                            <span class="idcl-row-val">${config.email}</span>
                          </div>
                          <div class="idcl-row">
                            <span class="idcl-row-icon">
                              <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                              </svg>
                            </span>
                            <span class="idcl-row-label">PHONE</span>
                            <span class="idcl-row-sep">:</span>
                            <span class="idcl-row-val">${config.phone}</span>
                          </div>
                          <div class="idcl-row">
                            <span class="idcl-row-icon">
                              <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                              </svg>
                            </span>
                            <span class="idcl-row-label">VALID THRU</span>
                            <span class="idcl-row-sep">:</span>
                            <span class="idcl-row-val">${config.validThru}</span>
                          </div>
                        </div>

                        <!-- Scannable Social QR Code Column -->
                        <div class="idcl-qr-col">
                          <a href="${socialUrl}" target="_blank" rel="noopener noreferrer" class="idcl-qr-link" title="Click or scan to open social media">
                            <div class="idcl-qr-frame qr-front"></div>
                          </a>
                          <div class="idcl-qr-caption">SCAN FOR<br>SOCIAL</div>
                          <div class="idcl-qr-line"></div>
                        </div>
                      </div>

                      <!-- Signature Section -->
                      <div class="idcl-sig-section">
                        <div class="idcl-sig-script">${config.name}</div>
                        <div class="idcl-sig-label">AUTHORISED SIGNATURE</div>
                      </div>

                      <!-- Bottom Slogan -->
                      <div class="idcl-card-footer">
                        <span class="idcl-footer-line"></span>
                        <span class="idcl-footer-text">WE PLAN</span>
                        <span class="idcl-footer-star">✦</span>
                        <span class="idcl-footer-text">YOU CELEBRATE</span>
                        <span class="idcl-footer-line"></span>
                      </div>
                    </div>
                  </div>

                  <!-- Back Face -->
                  <div class="idcl-face idcl-back">
                    <div class="idcl-hole"></div>
                    <div class="idcl-stripe"></div>

                    <div class="idcl-idnum">
                      <span>NO. ${config.idNumber}</span>
                      <em>${config.validThru} PASS</em>
                    </div>
                    <div class="idcl-barcode"></div>

                    <div class="idcl-backrow">
                      <a href="${socialUrl}" target="_blank" rel="noopener noreferrer" class="idcl-qr-link" title="Click or scan to open social media">
                        <div class="idcl-qr-frame qr-back"></div>
                      </a>
                      <div class="idcl-scan">
                        <b>THE PLANNER BROZ VIP</b>
                        <span class="idcl-scan-url">${config.site}</span>
                        <br />
                        <span class="idcl-scan-prompt">Scan with phone camera to connect on Social Media.</span>
                      </div>
                    </div>

                    <div class="idcl-connect">
                      <span>Connect</span>
                      <div class="idcl-connect-icons">
                        <a href="${config.whatsappUrl}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                          </svg>
                        </a>
                        <a href="${config.linkedinUrl}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect x="2" y="9" width="4" height="12" />
                            <circle cx="4" cy="4" r="2" />
                          </svg>
                        </a>
                        <a href="${config.instagramUrl}" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                          </svg>
                        </a>
                      </div>
                    </div>

                    <div class="idcl-sig">
                      <div class="idcl-script">${config.name}</div>
                      <small>Authorized Co-Founder Signature</small>
                    </div>
                  </div>
                </div>
              </div>

              <div class="idcl-hint">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 3v18M7 8l-4 4 4 4M17 8l4 4-4 4" />
                </svg>
                Drag to swing · Click to flip
              </div>
            </div>
          </div>
        `;

    const scene = container.querySelector('.idcl-stage');
    const canvas = container.querySelector('.idcl-rope');
    const rail = container.querySelector('.idcl-rail');
    const card = container.querySelector('.idcl-card');
    const flipper = container.querySelector('.idcl-flipper');
    const barcodeEl = container.querySelector('.idcl-barcode');
    const hintEl = container.querySelector('.idcl-hint');

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    for (let i = 0; i < 28; i++) {
      const bar = document.createElement('span');
      bar.style.height = ((i * 37) % 100 > 40 ? 100 : 55) + '%';
      barcodeEl.appendChild(bar);
    }

    // Unique, high-contrast, 100% scannable QR Code generator
    function generateUniqueScannableQR(targetUrl) {
      const url = targetUrl || 'https://instagram.com';
      if (typeof qrcode === 'undefined') {
        return '<div style=\"font-size:8px;color:#C59B3F;padding:12px;text-align:center;\">✦ VIP ✦</div>';
      }
      try {
        const qr = qrcode(0, 'M');
        qr.addData(url);
        qr.make();
        const count = qr.getModuleCount();
        const margin = 2;
        const total = count + margin * 2;

        function isFinderPattern(r, c) {
          if (r < 7 && c < 7) return true;
          if (r < 7 && c >= count - 7) return true;
          if (r >= count - 7 && c < 7) return true;
          return false;
        }

        let dots = '';
        for (let r = 0; r < count; r++) {
          for (let c = 0; c < count; c++) {
            if (isFinderPattern(r, c)) continue;
            if (qr.isDark(r, c)) {
              const x = c + margin;
              const y = r + margin;
              dots += `<rect x=\"${x}\" y=\"${y}\" width=\"0.9\" height=\"0.9\" rx=\"0.22\" fill=\"#1C1917\" />`;
            }
          }
        }

        function makeFinder(x, y) {
          return `
            <rect x=\"${x}\" y=\"${y}\" width=\"7\" height=\"7\" rx=\"1.6\" fill=\"#C59B3F\" />
            <rect x=\"${x + 1}\" y=\"${y + 1}\" width=\"5\" height=\"5\" rx=\"1.1\" fill=\"#FFFFFF\" />
            <rect x=\"${x + 2}\" y=\"${y + 2}\" width=\"3\" height=\"3\" rx=\"0.8\" fill=\"#22070D\" />
          `;
        }

        const eyeTL = makeFinder(margin, margin);
        const eyeTR = makeFinder(margin + count - 7, margin);
        const eyeBL = makeFinder(margin, margin + count - 7);

        return `
          <svg viewBox=\"0 0 ${total} ${total}\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" shape-rendering=\"geometricPrecision\">
            <rect width=\"${total}\" height=\"${total}\" fill=\"#FFFFFF\" rx=\"2\" />
            ${eyeTL}
            ${eyeTR}
            ${eyeBL}
            ${dots}
          </svg>
        `;
      } catch (err) {
        console.error('Error generating QR code:', err);
        return '';
      }
    }

    const qrFrontEl = container.querySelector('.qr-front');
    const qrBackEl = container.querySelector('.qr-back');
    if (qrFrontEl) qrFrontEl.innerHTML = generateUniqueScannableQR(socialUrl);
    if (qrBackEl) qrBackEl.innerHTML = generateUniqueScannableQR(socialUrl);



    const anchorY = 8;
    function resolveAnchorX() {
      return scene.clientWidth * 0.5;
    }
    const anchor = { x: resolveAnchorX(), y: anchorY };

    function resize() {
      const w = scene.clientWidth;
      const h = scene.clientHeight;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      anchor.x = resolveAnchorX();
      rail.style.left = anchor.x + 'px';
      rail.style.top = anchor.y - 3 + 'px';
    }
    resize();

    const NUM_POINTS = 13;
    const REST_LENGTH = 110;
    const SEGMENT_LENGTH = REST_LENGTH / (NUM_POINTS - 1);
    const GRAVITY = 0.55;
    const FRICTION = 0.98;
    const CONSTRAINT_ITERATIONS = 6;
    const TAP_THRESHOLD = 6;
    const MAX_TILT = 9;

    const points = [];
    for (let i = 0; i < NUM_POINTS; i++) {
      const y = anchor.y + i * SEGMENT_LENGTH;
      points.push({ x: anchor.x, y: y, oldx: anchor.x, oldy: y, pinned: i === 0 });
    }

    let dragging = false;
    let flipped = false;
    let downPos = { x: anchor.x, y: anchor.y };
    let pointer = { x: anchor.x, y: anchor.y + REST_LENGTH };
    let lastPointer = { x: pointer.x, y: pointer.y };
    let velocity = { x: 0, y: 0 };

    let flipTarget = 0;
    let flipCurrent = 0;
    const tiltTarget = { x: 0, y: 0 };
    const tiltCurrent = { x: 0, y: 0 };
    let mouse = { x: -9999, y: -9999 };

    function getScenePos(e) {
      const rect = scene.getBoundingClientRect();
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }

    function clampToScene(p) {
      const margin = 16;
      p.x = Math.max(margin, Math.min(canvas.width - margin, p.x));
      p.y = Math.max(anchor.y + 15, Math.min(canvas.height - 30, p.y));
      return p;
    }

    function updatePoints() {
      for (let i = 1; i < points.length; i++) {
        if (dragging && i === points.length - 1) continue;
        const p = points[i];
        const vx = (p.x - p.oldx) * FRICTION;
        const vy = (p.y - p.oldy) * FRICTION;
        p.oldx = p.x;
        p.oldy = p.y;
        p.x += vx;
        p.y += vy + GRAVITY;
      }
    }

    function applyConstraints() {
      points[0].x = anchor.x;
      points[0].y = anchor.y;
      if (dragging) {
        const last = points[points.length - 1];
        last.x = pointer.x;
        last.y = pointer.y;
      }
      for (let iter = 0; iter < CONSTRAINT_ITERATIONS; iter++) {
        for (let i = 0; i < points.length - 1; i++) {
          const p1 = points[i];
          const p2 = points[i + 1];
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 0.0001;
          const diff = (SEGMENT_LENGTH - dist) / dist;
          const offX = dx * diff * 0.5;
          const offY = dy * diff * 0.5;
          const p1Locked = p1.pinned;
          const p2Locked = dragging && i + 1 === points.length - 1;
          if (!p1Locked) {
            p1.x -= offX;
            p1.y -= offY;
          }
          if (!p2Locked) {
            p2.x += offX;
            p2.y += offY;
          }
        }
      }
      for (let i = 1; i < points.length; i++) clampToScene(points[i]);
    }

    function drawRope() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const path = [];
      path.push({ x: points[0].x, y: points[0].y });
      for (let i = 1; i < points.length - 1; i++) {
        const midX = (points[i].x + points[i + 1].x) / 2;
        const midY = (points[i].y + points[i + 1].y) / 2;
        path.push({ x: points[i].x, y: points[i].y, cx: midX, cy: midY });
      }
      path.push({ x: points[points.length - 1].x, y: points[points.length - 1].y });

      function strokeRibbon(style, width) {
        ctx.beginPath();
        ctx.moveTo(path[0].x, path[0].y);
        for (let i = 1; i < path.length; i++) {
          const p = path[i];
          if (p.cx !== undefined) ctx.quadraticCurveTo(p.x, p.y, p.cx, p.cy);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.strokeStyle = style;
        ctx.lineWidth = width;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();
      }

      ctx.save();
      ctx.translate(2, 4);
      ctx.globalAlpha = 0.22;
      strokeRibbon('#000000', 15);
      ctx.restore();

      // Luxury Burgundy Ribbon with Gold Stitching Accents
      strokeRibbon('#3D111A', 15);
      strokeRibbon('rgba(197, 155, 63, 0.45)', 15.5);
      strokeRibbon('#22070D', 12.5);
      strokeRibbon('rgba(244, 208, 111, 0.45)', 2.5);

      const markIdx = Math.floor(points.length * 0.3);
      const m = points[markIdx];
      const mPrev = points[markIdx - 1];
      const mNext = points[markIdx + 1];
      const angle = Math.atan2(mNext.y - mPrev.y, mNext.x - mPrev.x) + Math.PI / 2;
      ctx.save();
      ctx.translate(m.x, m.y);
      ctx.rotate(angle);
      ctx.strokeStyle = 'rgba(197, 155, 63, 0.9)';
      ctx.lineWidth = 1.4;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.beginPath();
      ctx.moveTo(-4, 3.5);
      ctx.lineTo(0, -3.5);
      ctx.lineTo(4, 3.5);
      ctx.stroke();
      ctx.restore();
    }

    function drawClip() {
      ctx.save();
      ctx.translate(anchor.x, anchor.y - 2);
      const g = ctx.createLinearGradient(-11, -9, 11, 9);
      g.addColorStop(0, '#F4D06F');
      g.addColorStop(0.35, '#C59B3F');
      g.addColorStop(0.65, '#9E7822');
      g.addColorStop(1, '#664C0E');
      ctx.fillStyle = g;
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(-11, -9, 22, 16, 4);
      else ctx.rect(-11, -9, 22, 16);
      ctx.fill();
      ctx.strokeStyle = 'rgba(61, 17, 26, 0.4)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.65)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(-8, -6);
      ctx.lineTo(8, -6);
      ctx.stroke();
      ctx.fillStyle = '#22070D';
      ctx.beginPath();
      ctx.arc(0, 0, 2.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    function positionCard() {
      const last = points[points.length - 1];
      const prev = points[points.length - 2];
      const angle = Math.atan2(last.y - prev.y, last.x - prev.x) - Math.PI / 2;
      card.style.left = (last.x - card.offsetWidth / 2) + 'px';
      card.style.top = last.y + 'px';
      card.style.transform = `rotate(${angle}rad)`;
    }

    function updateTiltAndSheen() {
      flipCurrent += (flipTarget - flipCurrent) * 0.16;

      const hovering = !dragging && mouse.x > -1000;
      if (hovering) {
        const cx = card.offsetLeft + card.offsetWidth / 2;
        const cy = card.offsetTop + card.offsetHeight / 2;
        const dx = Math.max(-1, Math.min(1, (mouse.x - cx) / (card.offsetWidth / 2)));
        const dy = Math.max(-1, Math.min(1, (mouse.y - cy) / (card.offsetHeight / 2)));
        tiltTarget.y = dx * MAX_TILT;
        tiltTarget.x = -dy * MAX_TILT;

        const mx = Math.max(0, Math.min(100, ((mouse.x - card.offsetLeft) / card.offsetWidth) * 100));
        const my = Math.max(0, Math.min(100, ((mouse.y - card.offsetTop) / card.offsetHeight) * 100));
        card.style.setProperty('--mx', mx + '%');
        card.style.setProperty('--my', my + '%');
        card.classList.add('idcl-hovering');
      } else {
        tiltTarget.x = 0;
        tiltTarget.y = 0;
        card.classList.remove('idcl-hovering');
      }

      tiltCurrent.x += (tiltTarget.x - tiltCurrent.x) * 0.12;
      tiltCurrent.y += (tiltTarget.y - tiltCurrent.y) * 0.12;

      flipper.style.transform = `rotateY(${flipCurrent + tiltCurrent.y}deg) rotateX(${tiltCurrent.x}deg)`;
    }

    let isLanyardVisible = false;
    let isLoopRunning = false;

    function loop() {
      if (!isLanyardVisible && !dragging) {
        isLoopRunning = false;
        return;
      }
      isLoopRunning = true;
      updatePoints();
      applyConstraints();
      drawRope();
      drawClip();
      positionCard();
      updateTiltAndSheen();
      requestAnimationFrame(loop);
    }

    function wakeLoop() {
      if (!isLoopRunning) {
        isLoopRunning = true;
        requestAnimationFrame(loop);
      }
    }

    if ('IntersectionObserver' in window) {
      const lanyardObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          isLanyardVisible = entry.isIntersecting;
          if (isLanyardVisible) {
            wakeLoop();
          }
        });
      }, { rootMargin: '100px 0px' });
      lanyardObs.observe(container);
    } else {
      isLanyardVisible = true;
    }

    const onCardDown = (e) => {
      if (e.target && e.target.closest && e.target.closest('a')) return;
      e.preventDefault();
      dragging = true;
      if (hintEl) hintEl.classList.add('idcl-hint-hidden');
      if (card.setPointerCapture) card.setPointerCapture(e.pointerId);
      const pos = clampToScene(getScenePos(e));
      pointer = pos;
      lastPointer = { x: pos.x, y: pos.y };
      downPos = { x: pos.x, y: pos.y };
    };

    const onWindowMove = (e) => {
      mouse = getScenePos(e);
      if (!dragging) return;
      const pos = clampToScene(mouse);
      velocity.x = pos.x - lastPointer.x;
      velocity.y = pos.y - lastPointer.y;
      lastPointer = { x: pos.x, y: pos.y };
      pointer = pos;
    };

    const onWindowUp = (e) => {
      if (!dragging) return;
      dragging = false;
      const pos = getScenePos(e);
      const dist = Math.hypot(pos.x - downPos.x, pos.y - downPos.y);
      if (dist < TAP_THRESHOLD) {
        flipped = !flipped;
        flipTarget = flipped ? 180 : 0;
        const last = points[points.length - 1];
        last.oldx = last.x;
        last.oldy = last.y;
        return;
      }
      const last = points[points.length - 1];
      last.oldx = last.x - velocity.x;
      last.oldy = last.y - velocity.y;
    };

    card.addEventListener('pointerdown', onCardDown);
    window.addEventListener('pointermove', onWindowMove);
    window.addEventListener('pointerup', onWindowUp);
    window.addEventListener('resize', resize);
    document.addEventListener('pointerout', (e) => {
      if (e.relatedTarget === null) mouse = { x: -9999, y: -9999 };
    });

    loop();
  }

  // Initialize Rishabh Rajput (Co-Founder 1)
  createIDCardLanyard('lanyardStageAryan', {
    name: 'RISHABH RAJPUT',
    role: 'CO- FOUNDER & MANAGING DIRECTOR',
    brand: 'THE PLANNER BROZ',
    brandTagline: 'EVENTS ✦ EXPERIENCES ✦ TRAVEL ✦ BRAND ACTIVATIONS',
    pillars: [],
    department: 'Strategy • Operations • Event Execution',
    location: 'Delhi',
    email: 'rishab231002@gmail.com',
    phone: '+91 97184 70384',
    idNumber: 'TPB-001',
    validThru: 'Lifetime',
    site: 'theplannerbroz.com',
    photoUrl: 'assets/rishabh_001.webp',
    whatsappUrl: 'https://wa.me/919718470384',
    linkedinUrl: 'https://www.linkedin.com/in/rishabh-kumar-668b92334?',
    instagramUrl: 'https://instagram.com',
    qrUrl: 'https://www.linkedin.com/in/rishabh-kumar-668b92334?', // Replace with your exact profile URL (e.g. https://instagram.com/rishabh_rajput)
    seed: 749281
  });

  // Duplicate Rishabh Rajput (Replacing Shubham Singh)
  createIDCardLanyard('lanyardStageKabir', {
    name: 'ANUJ RAJPUT',
    role: 'CO- FOUNDER & MANAGING DIRECTOR',
    brand: 'THE PLANNER BROZ',
    brandTagline: 'EVENTS ✦ EXPERIENCES ✦ TRAVEL ✦ BRAND ACTIVATIONS',
    pillars: [],
    department: 'Strategy • Operations • Event Execution',
    location: 'Delhi',
    email: 'rishab231002@gmail.com',
    phone: '+91 97184 70384',
    idNumber: 'TPB-001',
    validThru: 'Lifetime',
    site: 'theplannerbroz.com',
    photoUrl: 'assets/rishabh_001.webp',
    whatsappUrl: 'https://wa.me/919718470384',
    linkedinUrl: 'https://www.linkedin.com/in/rishabh-kumar-668b92334?',
    instagramUrl: 'https://instagram.com',
    qrUrl: 'https://www.linkedin.com/in/rishabh-kumar-668b92334?',
    seed: 483921
  });
})();


/**
 * =========================================================================================
 * THE PLANNER BROZ — SERVICES INTERACTIVE 3D CAROUSEL CONTROLLER
 * =========================================================================================
 * 
 * Features:
 * - Dynamic SVG clipPath injection for organic curved banner
 * - Continuous smooth auto-sliding with reduced duration
 * - 3-Point Arch Wave 3D carousel with progressive rotation & elevation
 * - Luxury spring-bounce Photo Lightbox Pop-Up ("pop ki tarah badi hokar aaye")
 * - Video modal popup with HTML5 player
 * - Keyboard & touch navigation
 */
(function () {
  'use strict';

  // ==========================================================================
  // 1. INJECT SVG CLIP-PATH FOR ORGANIC MULTI-WAVE BANNER CURVE
  // ==========================================================================
  function injectSvgCurveDefs() {
    if (document.getElementById('tpbSvgCurveDefs')) return;

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.id = 'tpbSvgCurveDefs';
    svg.setAttribute('width', '0');
    svg.setAttribute('height', '0');
    svg.style.position = 'absolute';
    svg.style.width = '0';
    svg.style.height = '0';
    svg.style.pointerEvents = 'none';
    svg.setAttribute('aria-hidden', 'true');

    svg.innerHTML = `
      <defs>
        <clipPath id="tpbHeroCurvePath" clipPathUnits="objectBoundingBox">
          <path d="M 0,0.05 
                   C 0,0.02 0.02,0 0.04,0 
                   L 0.96,0 
                   C 0.98,0 1,0.02 1,0.05 
                   L 1,0.96 
                   C 0.96,0.985 0.88,0.995 0.72,0.995 
                   C 0.56,0.995 0.48,0.97 0.38,0.955 
                   C 0.28,0.94 0.20,0.965 0.12,0.98 
                   C 0.06,0.985 0.02,0.975 0,0.96 
                   Z" />
        </clipPath>
      </defs>
    `;
    document.body.prepend(svg);
  }

  // ==========================================================================
  // 2. LUXURY FULL-WIDTH BESPOKE PHOTO GALLERY MODAL
  // ==========================================================================
  let galleryModalBackdrop = null;
  let currentActiveGallery = [];
  let currentSpotlightIndex = 0;
  let currentViewMode = 'grid'; // 'grid' | 'spotlight'
  let currentGalleryItem = null;

  function initGalleryModal() {
    if (document.getElementById('tpbGalleryModal')) {
      galleryModalBackdrop = document.getElementById('tpbGalleryModal');
      return;
    }

    galleryModalBackdrop = document.createElement('div');
    galleryModalBackdrop.id = 'tpbGalleryModal';
    galleryModalBackdrop.className = 'tpb-gallery-modal-backdrop';
    galleryModalBackdrop.innerHTML = `
      <div class="tpb-gallery-modal-window" role="dialog" aria-modal="true" aria-label="Bespoke Photo Gallery">
        <!-- 1. Header Bar -->
        <div class="tpb-gallery-header">
          <div class="tpb-gallery-header-left">
            <div class="tpb-gallery-badge-row">
              <span class="tpb-gallery-badge">✦ THE PLANNER BROZ BESPOKE GALLERY</span>
            </div>
            <h3 class="tpb-gallery-title" id="tpbGalleryTitle"></h3>
            <p class="tpb-gallery-subtitle" id="tpbGallerySubtitle"></p>
          </div>

          <div class="tpb-gallery-header-right">
            <span class="tpb-gallery-count-pill" id="tpbGalleryCountPill">
              <i class="bi bi-images"></i>
              <span id="tpbGalleryCountText">6 Curated Photos</span>
            </span>

            <div class="tpb-gallery-view-switcher">
              <button type="button" class="tpb-gallery-view-btn active" id="tpbViewGridBtn" title="Show all photos in gallery grid">
                <i class="bi bi-grid-3x3-gap-fill"></i>
                <span>Grid View</span>
              </button>
              <button type="button" class="tpb-gallery-view-btn" id="tpbViewSpotlightBtn" title="View featured slideshow with filmstrip">
                <i class="bi bi-aspect-ratio"></i>
                <span>Spotlight</span>
              </button>
            </div>

            <button type="button" class="tpb-gallery-close-btn" id="tpbGalleryCloseBtn" aria-label="Close Gallery">
              <i class="bi bi-x-lg"></i>
            </button>
          </div>
        </div>

        <!-- 2. Modal Body with Grid and Spotlight Views -->
        <div class="tpb-gallery-body" id="tpbGalleryBody">
          <!-- View 1: Luxury Asymmetric Photo Grid -->
          <div class="tpb-gallery-grid-view" id="tpbGalleryGridView">
            <div class="tpb-gallery-grid" id="tpbGalleryGridContainer"></div>
          </div>

          <!-- View 2: Interactive Spotlight Slideshow & Filmstrip -->
          <div class="tpb-gallery-spotlight-view" id="tpbGallerySpotlightView">
            <div class="tpb-spotlight-stage" id="tpbSpotlightStage">
              <button type="button" class="tpb-spotlight-nav-btn prev-btn" id="tpbSpotlightPrevBtn" aria-label="Previous Photo">
                <i class="bi bi-chevron-left"></i>
              </button>
              <button type="button" class="tpb-spotlight-nav-btn next-btn" id="tpbSpotlightNextBtn" aria-label="Next Photo">
                <i class="bi bi-chevron-right"></i>
              </button>

              <img id="tpbSpotlightMainImg" src="" alt="Spotlight Showcase" />

              <div class="tpb-spotlight-info-bar">
                <div class="tpb-spotlight-text">
                  <span class="tpb-spotlight-counter" id="tpbSpotlightCounter"></span>
                  <h4 class="tpb-spotlight-title" id="tpbSpotlightTitle"></h4>
                  <p class="tpb-spotlight-desc" id="tpbSpotlightDesc"></p>
                </div>
                <button type="button" class="tpb-back-grid-btn" id="tpbBackToGridBtn">
                  <i class="bi bi-grid-3x3-gap-fill"></i>
                  <span>Back to Gallery Grid</span>
                </button>
              </div>
            </div>

            <!-- Thumbnail Filmstrip Strip -->
            <div class="tpb-gallery-filmstrip-wrap">
              <div class="tpb-gallery-filmstrip" id="tpbGalleryFilmstrip"></div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(galleryModalBackdrop);

    // Bind Controls
    const closeBtn = document.getElementById('tpbGalleryCloseBtn');
    const viewGridBtn = document.getElementById('tpbViewGridBtn');
    const viewSpotlightBtn = document.getElementById('tpbViewSpotlightBtn');
    const prevBtn = document.getElementById('tpbSpotlightPrevBtn');
    const nextBtn = document.getElementById('tpbSpotlightNextBtn');
    const backToGridBtn = document.getElementById('tpbBackToGridBtn');
    const spotlightStage = document.getElementById('tpbSpotlightStage');

    closeBtn.addEventListener('click', closeGalleryModal);

    galleryModalBackdrop.addEventListener('click', (e) => {
      if (e.target === galleryModalBackdrop) closeGalleryModal();
    });

    viewGridBtn.addEventListener('click', () => switchGalleryView('grid'));
    viewSpotlightBtn.addEventListener('click', () => switchGalleryView('spotlight'));
    backToGridBtn.addEventListener('click', () => switchGalleryView('grid'));

    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showSpotlightAt(currentSpotlightIndex - 1);
    });

    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showSpotlightAt(currentSpotlightIndex + 1);
    });

    // Touch Swipe gestures in Spotlight Stage
    let touchStartX = 0;
    spotlightStage.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    spotlightStage.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          showSpotlightAt(currentSpotlightIndex - 1);
        } else {
          showSpotlightAt(currentSpotlightIndex + 1);
        }
      }
    }, { passive: true });

    // Keyboard support
    document.addEventListener('keydown', (e) => {
      if (!galleryModalBackdrop || !galleryModalBackdrop.classList.contains('active')) return;
      if (e.key === 'Escape') closeGalleryModal();
      if (currentViewMode === 'spotlight') {
        if (e.key === 'ArrowLeft') showSpotlightAt(currentSpotlightIndex - 1);
        if (e.key === 'ArrowRight') showSpotlightAt(currentSpotlightIndex + 1);
      }
      if (e.key === 'g' || e.key === 'G') {
        switchGalleryView(currentViewMode === 'grid' ? 'spotlight' : 'grid');
      }
    });
  }

  function closeGalleryModal() {
    if (galleryModalBackdrop) {
      galleryModalBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  function switchGalleryView(mode) {
    currentViewMode = mode;
    const gridViewEl = document.getElementById('tpbGalleryGridView');
    const spotlightViewEl = document.getElementById('tpbGallerySpotlightView');
    const viewGridBtn = document.getElementById('tpbViewGridBtn');
    const viewSpotlightBtn = document.getElementById('tpbViewSpotlightBtn');

    if (mode === 'grid') {
      if (gridViewEl) gridViewEl.style.display = 'block';
      if (spotlightViewEl) spotlightViewEl.classList.remove('active');
      viewGridBtn?.classList.add('active');
      viewSpotlightBtn?.classList.remove('active');
    } else {
      if (gridViewEl) gridViewEl.style.display = 'none';
      if (spotlightViewEl) spotlightViewEl.classList.add('active');
      viewGridBtn?.classList.remove('active');
      viewSpotlightBtn?.classList.add('active');
      showSpotlightAt(currentSpotlightIndex);
    }
  }

  function showSpotlightAt(index) {
    if (!currentActiveGallery || currentActiveGallery.length === 0) return;
    const total = currentActiveGallery.length;
    currentSpotlightIndex = (index + total) % total;
    const item = currentActiveGallery[currentSpotlightIndex];
    if (!item) return;

    const mainImg = document.getElementById('tpbSpotlightMainImg');
    const counterEl = document.getElementById('tpbSpotlightCounter');
    const titleEl = document.getElementById('tpbSpotlightTitle');
    const descEl = document.getElementById('tpbSpotlightDesc');

    if (mainImg) {
      mainImg.style.opacity = '0.3';
      const tempImg = new Image();
      tempImg.onload = () => {
        mainImg.src = item.src;
        mainImg.alt = item.title || 'Gallery Photo';
        mainImg.style.opacity = '1';
      };
      tempImg.src = item.src;
    }

    if (counterEl) {
      counterEl.textContent = `Photo ${currentSpotlightIndex + 1} of ${total}`;
    }
    if (titleEl) {
      titleEl.textContent = item.title || (currentGalleryItem?.title || 'Showcase Photo');
    }
    if (descEl) {
      descEl.textContent = item.desc || (currentGalleryItem?.subtitle || 'Bespoke event showcase by The Planner Broz');
    }

    // Update active thumbnail in filmstrip
    const thumbs = document.querySelectorAll('.tpb-filmstrip-thumb');
    thumbs.forEach((thumb, idx) => {
      if (idx === currentSpotlightIndex) {
        thumb.classList.add('active');
        thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        thumb.classList.remove('active');
      }
    });
  }

  function openGalleryModal(targetItem, allItems = [], itemIndex = 0) {
    initGalleryModal();

    // Support both signatures: openGalleryModal(item, allItems, index) and openGalleryModal(items, index)
    let item = targetItem;
    if (Array.isArray(targetItem)) {
      item = targetItem[itemIndex || 0];
      allItems = targetItem;
    }
    if (!item) return;

    currentGalleryItem = item;

    // Determine gallery photo list
    let gallery = [];
    if (Array.isArray(item.gallery) && item.gallery.length > 0) {
      gallery = item.gallery;
    } else {
      // Fallback: build a gallery from the item's src + other items
      gallery = [
        {
          src: item.src,
          title: item.title,
          desc: item.subtitle || item.alt || 'Bespoke showcase moment'
        }
      ];
      if (Array.isArray(allItems)) {
        allItems.forEach((other) => {
          if (other && other !== item && other.src) {
            gallery.push({
              src: other.src,
              title: other.title,
              desc: other.subtitle || other.alt || 'The Planner Broz Experience'
            });
          }
        });
      }
    }

    currentActiveGallery = gallery;
    currentSpotlightIndex = 0;

    // Set Header Info
    const titleEl = document.getElementById('tpbGalleryTitle');
    const subtitleEl = document.getElementById('tpbGallerySubtitle');
    const countTextEl = document.getElementById('tpbGalleryCountText');

    if (titleEl) titleEl.textContent = item.title || 'Bespoke Experience Gallery';
    if (subtitleEl) {
      subtitleEl.textContent = item.subtitle || (item.alt || 'Explore our curated photo moments and bespoke highlights');
    }
    if (countTextEl) {
      countTextEl.textContent = `${gallery.length} Curated Photos`;
    }

    // Render Grid View
    const gridContainer = document.getElementById('tpbGalleryGridContainer');
    if (gridContainer) {
      gridContainer.innerHTML = gallery.map((gItem, idx) => `
        <div class="tpb-gallery-card" data-gallery-index="${idx}" title="Click to view full spotlight">
          <div class="tpb-gallery-card-img-wrap">
            <img src="${gItem.src}" alt="${gItem.title}" loading="lazy" />
          </div>
          <div class="tpb-gallery-card-gradient"></div>
          <div class="tpb-gallery-card-pop-icon">
            <i class="bi bi-arrows-angle-expand"></i>
          </div>
          <div class="tpb-gallery-card-content">
            <span class="tpb-gallery-card-index">✦ MOMENT 0${idx + 1}</span>
            <h4 class="tpb-gallery-card-title">${gItem.title}</h4>
            ${gItem.desc ? `<p class="tpb-gallery-card-desc">${gItem.desc}</p>` : ''}
          </div>
        </div>
      `).join('');

      // Bind click on cards to open in Spotlight view
      gridContainer.querySelectorAll('.tpb-gallery-card').forEach((card) => {
        card.addEventListener('click', () => {
          const gIdx = parseInt(card.getAttribute('data-gallery-index'), 10);
          if (!isNaN(gIdx)) {
            currentSpotlightIndex = gIdx;
            switchGalleryView('spotlight');
          }
        });
      });
    }

    // Render Filmstrip in Spotlight View
    const filmstripContainer = document.getElementById('tpbGalleryFilmstrip');
    if (filmstripContainer) {
      filmstripContainer.innerHTML = gallery.map((gItem, idx) => `
        <div class="tpb-filmstrip-thumb ${idx === 0 ? 'active' : ''}" data-thumb-index="${idx}" title="${gItem.title}">
          <img src="${gItem.src}" alt="${gItem.title}" />
        </div>
      `).join('');

      filmstripContainer.querySelectorAll('.tpb-filmstrip-thumb').forEach((thumb) => {
        thumb.addEventListener('click', () => {
          const tIdx = parseInt(thumb.getAttribute('data-thumb-index'), 10);
          if (!isNaN(tIdx)) {
            showSpotlightAt(tIdx);
          }
        });
      });
    }

    // Default to Grid View for initial full-width multi-image WOW experience!
    switchGalleryView('grid');

    // Show modal
    galleryModalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Backward compatibility alias:
  const openPhotoModal = openGalleryModal;
  const initPhotoModal = initGalleryModal;

  // ==========================================================================
  // 3. VIDEO MODAL PLAYER
  // ==========================================================================
  let videoModalBackdrop = null;
  let videoPlayerEl = null;

  function initVideoModal() {
    if (document.getElementById('tpbVideoModal')) return;

    videoModalBackdrop = document.createElement('div');
    videoModalBackdrop.id = 'tpbVideoModal';
    videoModalBackdrop.className = 'tpb-video-modal-backdrop';
    videoModalBackdrop.innerHTML = `
      <div class="tpb-video-modal-window">
        <button class="tpb-video-close-btn" id="tpbVideoCloseBtn" aria-label="Close Video">
          <i class="bi bi-x-lg"></i>
        </button>
        <video id="tpbModalVideoPlayer" controls playsinline></video>
      </div>
    `;
    document.body.appendChild(videoModalBackdrop);

    videoPlayerEl = document.getElementById('tpbModalVideoPlayer');
    const closeBtn = document.getElementById('tpbVideoCloseBtn');

    function closeVideoModal() {
      if (videoPlayerEl) {
        videoPlayerEl.pause();
        videoPlayerEl.src = '';
      }
      videoModalBackdrop.classList.remove('active');
    }

    closeBtn.addEventListener('click', closeVideoModal);
    videoModalBackdrop.addEventListener('click', (e) => {
      if (e.target === videoModalBackdrop) closeVideoModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && videoModalBackdrop.classList.contains('active')) {
        closeVideoModal();
      }
    });
  }

  function openVideoModal(videoSrc) {
    if (!videoModalBackdrop || !videoPlayerEl) initVideoModal();
    videoPlayerEl.src = videoSrc;
    videoPlayerEl.play().catch(() => { });
    videoModalBackdrop.classList.add('active');
  }

  // ==========================================================================
  // 4. SERVICE SECTION CONTROLLER (EVENT & TRAVEL)
  // ==========================================================================
  class TPBServiceSectionController {
    constructor(config, rootElementId, isReverseDirection = false) {
      this.config = config;
      this.rootElementId = rootElementId;
      this.isReverseDirection = isReverseDirection;
      this.activeTab = 'photos'; // 'photos' | 'videos'
      this.activeIndex = 2; // Center card by default
      this.autoTimer = null;
      this.isPaused = false;
      this.touchStartX = 0;
      this.touchEndX = 0;
      this.isDragging = false;

      this.init();
    }

    init() {
      const container = document.getElementById(this.rootElementId);
      if (!container) return;

      this.render(container);
      this.bindEvents();
      this.updateCarouselPositions();
      this.startAutoSlide();
    }

    getItems() {
      return this.activeTab === 'photos' ? this.config.photos : this.config.videos;
    }

    render(container) {
      const {
        badgeIcon,
        badgeText,
        headingMain,
        headingSub,
        headingHighlight,
        description,
        ctaText,
        ctaLink,
        heroBackgroundImage,
        categories
      } = this.config;

      const sectionId = this.rootElementId;

      container.innerHTML = `
        <div class="container-fluid">
          <!-- 1. HERO CARD WITH MULTI-WAVE BOTTOM CURVE -->
          <div class="tpb-hero-card-wrapper">
            <div class="tpb-hero-card" style="background-image: url('${heroBackgroundImage}');">
              <div class="tpb-hero-overlay"></div>
              <div class="tpb-hero-bottom-shade"></div>

              <div class="tpb-hero-inner">
                <!-- Top & Left Content -->
                <div class="tpb-hero-left-col">
                  <div class="tpb-badge-pill">
                    <span class="tpb-badge-icon">${badgeIcon}</span>
                    <span>${badgeText}</span>
                  </div>

                  <h2 class="tpb-hero-title">
                    ${headingMain}<br />
                    <span>${headingSub}</span>
                    <span class="tpb-hero-script">${headingHighlight}</span>
                  </h2>

                  <p class="tpb-hero-desc">
                    ${description}
                  </p>

                  <a href="${ctaLink}" class="tpb-hero-btn" ${ctaLink === '#contactModal' ? 'data-bs-toggle="modal" data-bs-target="#contactModal"' : ''}>
                    <span>${ctaText}</span>
                    <i class="bi bi-arrow-right"></i>
                  </a>
                </div>

                <!-- Floating Category Bar nestled inside lower curved lobe -->
                <div class="tpb-category-bar-wrapper">
                  <div class="tpb-category-bar">
                    ${categories.map(cat => `
                      <div class="tpb-category-item" data-cat-id="${cat.id}">
                        <i class="bi ${cat.icon} tpb-category-icon"></i>
                        <span class="tpb-category-name">${cat.name}</span>
                      </div>
                    `).join('')}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 2. MEDIA CAROUSEL HEADER (TABS NESTLED IN SCOOPED VALLEY) -->
          <div class="tpb-carousel-header">
            <!-- Tabs on Left -->
            <div class="tpb-tabs-container">
              <button class="tpb-tab-btn active" data-tab="photos" id="${sectionId}-tab-photos">
                <i class="bi bi-images"></i>
                <span>Photos</span>
              </button>
              <button class="tpb-tab-btn" data-tab="videos" id="${sectionId}-tab-videos">
                <i class="bi bi-play-circle-fill"></i>
                <span>Videos</span>
              </button>
            </div>
          </div>

          <!-- 3. 3D RUBBER-BAND CAROUSEL VIEWPORT WITH 3-POINT ARCH WAVE BEND -->
          <div class="tpb-carousel-stage" id="${sectionId}-stage">
            <!-- Navigation Arrows -->
            <button class="tpb-carousel-nav-btn prev-btn" id="${sectionId}-prev" aria-label="Previous">
              <i class="bi bi-chevron-left"></i>
            </button>
            <button class="tpb-carousel-nav-btn next-btn" id="${sectionId}-next" aria-label="Next">
              <i class="bi bi-chevron-right"></i>
            </button>

            <!-- Cards Container -->
            <div class="tpb-cards-wrapper" id="${sectionId}-cards" style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;">
              <!-- Rendered Dynamically -->
            </div>
          </div>

          <!-- 4. PAGINATION DOTS -->
          <div class="tpb-dots-wrapper" id="${sectionId}-dots">
            <!-- Rendered Dynamically -->
          </div>
        </div>
      `;

      this.renderCards();
    }

    renderCards() {
      const cardsContainer = document.getElementById(`${this.rootElementId}-cards`);
      const dotsContainer = document.getElementById(`${this.rootElementId}-dots`);
      if (!cardsContainer || !dotsContainer) return;

      const items = this.getItems();

      // Cards
      cardsContainer.innerHTML = items.map((item, index) => {
        const isVideo = item.type === 'video';
        const imageSource = isVideo ? (item.poster || item.src) : item.src;
        return `
          <div class="tpb-carousel-card" data-index="${index}" title="Click to view ${isVideo ? 'video' : 'photo'}">
            <div class="tpb-card-media-box">
              <img src="${imageSource}" alt="${item.alt || item.title}" loading="lazy" />
              ${isVideo ? `
                <div class="tpb-play-overlay">
                  <i class="bi bi-play-fill"></i>
                </div>
              ` : `
                <div class="tpb-pop-hint">
                  <i class="bi bi-arrows-fullscreen"></i>
                </div>
              `}
            </div>
            <div class="tpb-card-title">${item.title}</div>
          </div>
        `;
      }).join('');

      // Dots
      dotsContainer.innerHTML = items.map((_, index) => `
        <button class="tpb-dot ${index === this.activeIndex ? 'active' : ''}" data-index="${index}" aria-label="Slide ${index + 1}"></button>
      `).join('');
    }

    updateCarouselPositions() {
      const cards = document.querySelectorAll(`#${this.rootElementId}-cards .tpb-carousel-card`);
      const dots = document.querySelectorAll(`#${this.rootElementId}-dots .tpb-dot`);
      const total = cards.length;
      if (total === 0) return;

      // Ensure activeIndex is within bounds
      if (this.activeIndex < 0) this.activeIndex = total - 1;
      if (this.activeIndex >= total) this.activeIndex = 0;

      cards.forEach((card, i) => {
        let diff = i - this.activeIndex;
        // Wrap offset around -total/2 to +total/2
        while (diff > total / 2) diff -= total;
        while (diff < -total / 2) diff += total;

        // Reset position classes
        card.className = 'tpb-carousel-card';
        card.setAttribute('data-offset', diff);

        if (diff === 0) {
          card.classList.add('pos-center');
        } else if (diff === -1) {
          card.classList.add('pos-left-1');
        } else if (diff === 1) {
          card.classList.add('pos-right-1');
        } else if (diff === -2) {
          card.classList.add('pos-left-2');
        } else if (diff === 2) {
          card.classList.add('pos-right-2');
        } else if (diff < -2) {
          card.classList.add('pos-hidden-left');
        } else if (diff > 2) {
          card.classList.add('pos-hidden-right');
        }
      });

      // Update Dots
      dots.forEach((dot, idx) => {
        if (idx === this.activeIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }

    nextSlide() {
      const items = this.getItems();
      this.activeIndex = (this.activeIndex + 1) % items.length;
      this.updateCarouselPositions();
    }

    prevSlide() {
      const items = this.getItems();
      this.activeIndex = (this.activeIndex - 1 + items.length) % items.length;
      this.updateCarouselPositions();
    }

    goToSlide(index) {
      this.activeIndex = index;
      this.updateCarouselPositions();
    }

    startAutoSlide() {
      this.stopAutoSlide();
      // Reduced slide speed for silky continuous motion
      const speed = this.config.autoSlideSpeed || 2400;

      this.autoTimer = setInterval(() => {
        if (!this.isPaused) {
          // If travel carousel, slide in opposite direction!
          if (this.isReverseDirection) {
            this.prevSlide();
          } else {
            this.nextSlide();
          }
        }
      }, speed);
    }

    stopAutoSlide() {
      if (this.autoTimer) {
        clearInterval(this.autoTimer);
        this.autoTimer = null;
      }
    }

    switchTab(tab) {
      if (this.activeTab === tab) return;
      this.activeTab = tab;

      const photosBtn = document.getElementById(`${this.rootElementId}-tab-photos`);
      const videosBtn = document.getElementById(`${this.rootElementId}-tab-videos`);

      if (tab === 'photos') {
        photosBtn?.classList.add('active');
        videosBtn?.classList.remove('active');
      } else {
        videosBtn?.classList.add('active');
        photosBtn?.classList.remove('active');
      }

      this.activeIndex = 2; // Reset to center
      this.renderCards();
      this.updateCarouselPositions();
    }

    bindEvents() {
      const sectionId = this.rootElementId;
      const stage = document.getElementById(`${sectionId}-stage`);
      const prevBtn = document.getElementById(`${sectionId}-prev`);
      const nextBtn = document.getElementById(`${sectionId}-next`);
      const photosBtn = document.getElementById(`${sectionId}-tab-photos`);
      const videosBtn = document.getElementById(`${sectionId}-tab-videos`);
      const dotsContainer = document.getElementById(`${sectionId}-dots`);
      const cardsContainer = document.getElementById(`${sectionId}-cards`);

      // Prev / Next button clicks
      prevBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        this.prevSlide();
      });

      nextBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        this.nextSlide();
      });

      // Tab switching
      photosBtn?.addEventListener('click', () => this.switchTab('photos'));
      videosBtn?.addEventListener('click', () => this.switchTab('videos'));

      // Dots clicking
      dotsContainer?.addEventListener('click', (e) => {
        const dot = e.target.closest('.tpb-dot');
        if (!dot) return;
        const index = parseInt(dot.getAttribute('data-index'), 10);
        if (!isNaN(index)) this.goToSlide(index);
      });

      // Clicking card: Pops open the enlarged Photo Lightbox or Video Player!
      cardsContainer?.addEventListener('click', (e) => {
        const card = e.target.closest('.tpb-carousel-card');
        if (!card) return;
        const index = parseInt(card.getAttribute('data-index'), 10);
        if (isNaN(index)) return;

        const items = this.getItems();
        const item = items[index];
        if (!item) return;

        // Bring to active slide
        this.goToSlide(index);

        // Open full-width bespoke gallery pop-up
        if (item.type === 'image') {
          openGalleryModal(item, items, index);
        } else if (item.type === 'video' && item.src) {
          openVideoModal(item.src);
        }
      });

      // Pause on hover
      stage?.addEventListener('mouseenter', () => { this.isPaused = true; });
      stage?.addEventListener('mouseleave', () => { this.isPaused = false; });

      // Touch / Drag events for smooth gestures
      stage?.addEventListener('touchstart', (e) => {
        this.touchStartX = e.touches[0].clientX;
        this.isPaused = true;
      }, { passive: true });

      stage?.addEventListener('touchend', (e) => {
        this.touchEndX = e.changedTouches[0].clientX;
        this.handleGesture();
        this.isPaused = false;
      }, { passive: true });

      // Mouse drag gestures
      stage?.addEventListener('mousedown', (e) => {
        if (e.target.closest('.tpb-carousel-nav-btn')) return;
        this.isDragging = true;
        this.touchStartX = e.clientX;
        this.isPaused = true;
      });

      window.addEventListener('mouseup', (e) => {
        if (!this.isDragging) return;
        this.isDragging = false;
        this.touchEndX = e.clientX;
        this.handleGesture();
        this.isPaused = false;
      });
    }

    handleGesture() {
      const threshold = 35;
      const distance = this.touchEndX - this.touchStartX;

      if (Math.abs(distance) > threshold) {
        if (distance > 0) {
          this.prevSlide();
        } else {
          this.nextSlide();
        }
      }
    }
  }

  // Self-initialization
  function initAllServices() {
    injectSvgCurveDefs();
    initPhotoModal();
    initVideoModal();

    if (window.EVENT_SERVICES_CONFIG) {
      new TPBServiceSectionController(
        window.EVENT_SERVICES_CONFIG,
        'tpbEventServicesSection',
        false // normal forward continuous direction
      );
    }

    if (window.TRAVEL_SERVICES_CONFIG) {
      new TPBServiceSectionController(
        window.TRAVEL_SERVICES_CONFIG,
        'tpbTravelServicesSection',
        true // opposite reverse continuous direction!
      );
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAllServices);
  } else {
    initAllServices();
  }
})();


/**
 * =========================================================================================
 * THE PLANNER BROZ — CONTACT FORM VALIDATION & BESPOKE THANK YOU MODAL CONTROLLER
 * =========================================================================================
 * 
 * - Full client-side validation (Name, Phone, Email, Service, Message)
 * - Real-time + On-blur responsive feedback with shake effect & micro-animations
 * - Executive styled payload transmitted to: info.tpbevent@gmail.com via FormSubmit
 * - Bespoke luxury animated "Thank You" popup modal with smooth spring entrance
 * - Client details reflected in inquiry receipt card (Ref ID, Client contact, Service, Destination)
 * - Instant one-click WhatsApp concierge chat button pre-filled with inquiry details
 * =========================================================================================
 */
(function () {
  'use strict';

  function initContactForm() {
    const form = document.getElementById('tpbContactForm');
    if (!form) return;

    const nameInput = document.getElementById('tpbName');
    const phoneInput = document.getElementById('tpbPhone');
    const emailInput = document.getElementById('tpbEmail');
    const serviceSelect = document.getElementById('tpbService');
    const messageInput = document.getElementById('tpbMessage');
    const submitBtn = document.getElementById('tpbSubmitBtn');

    // Validation functions
    function validateName() {
      if (!nameInput) return true;
      const val = nameInput.value.trim();
      const isValid = val.length >= 2 && /^[a-zA-Z\s.'-]+$/.test(val);
      setFieldStatus(nameInput, isValid, 'Please enter your full name (minimum 2 letters, letters only).');
      return isValid;
    }

    function validatePhone() {
      if (!phoneInput) return true;
      const val = phoneInput.value.trim();
      const digits = val.replace(/\D/g, '');
      const isValid = digits.length >= 10 && digits.length <= 15;
      setFieldStatus(phoneInput, isValid, 'Please enter a valid mobile / WhatsApp number (10 digits).');
      return isValid;
    }

    function validateEmail() {
      if (!emailInput) return true;
      const val = emailInput.value.trim();
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const isValid = emailRegex.test(val);
      setFieldStatus(emailInput, isValid, 'Please enter a valid email address (e.g. name@example.com).');
      return isValid;
    }

    function validateMessage() {
      if (!messageInput) return true;
      const val = messageInput.value.trim();
      const isValid = val.length >= 5;
      setFieldStatus(messageInput, isValid, 'Please share your event dates, guest count, or destination details (min 5 characters).');
      return isValid;
    }

    function validateService() {
      if (!serviceSelect) return true;
      const val = serviceSelect.value.trim();
      const isValid = Boolean(val) && val !== 'What you want to plan';
      setFieldStatus(serviceSelect, isValid, 'Please select what you want to plan.');
      return isValid;
    }

    function setFieldStatus(input, isValid, errorMsg) {
      const feedback = input.parentElement.querySelector('.invalid-feedback');
      if (isValid) {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        if (feedback) feedback.style.display = 'none';
      } else {
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        if (feedback) {
          feedback.textContent = errorMsg;
          feedback.style.display = 'block';
        }
      }
    }

    // Real-time & On-blur input validation
    nameInput?.addEventListener('input', () => {
      if (nameInput.classList.contains('is-invalid') || nameInput.value.trim().length >= 2) validateName();
    });
    nameInput?.addEventListener('blur', validateName);

    phoneInput?.addEventListener('input', () => {
      if (phoneInput.classList.contains('is-invalid') || phoneInput.value.replace(/\D/g, '').length >= 10) validatePhone();
    });
    phoneInput?.addEventListener('blur', validatePhone);

    emailInput?.addEventListener('input', () => {
      if (emailInput.classList.contains('is-invalid') || emailInput.value.includes('@')) validateEmail();
    });
    emailInput?.addEventListener('blur', validateEmail);

    messageInput?.addEventListener('input', () => {
      if (messageInput.classList.contains('is-invalid') || messageInput.value.trim().length >= 5) validateMessage();
    });
    messageInput?.addEventListener('blur', validateMessage);

    serviceSelect?.addEventListener('change', () => {
      validateService();
    });
    serviceSelect?.addEventListener('blur', validateService);

    // Form submission handler
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const isNameOk = validateName();
      const isPhoneOk = validatePhone();
      const isEmailOk = validateEmail();
      const isServiceOk = validateService();
      const isMsgOk = validateMessage();

      if (!isNameOk || !isPhoneOk || !isEmailOk || !isServiceOk || !isMsgOk) {
        const firstInvalid = form.querySelector('.is-invalid');
        if (firstInvalid) {
          firstInvalid.focus();
          // Visual shake trigger
          firstInvalid.classList.remove('tpb-shake');
          void firstInvalid.offsetWidth; // Trigger reflow
          firstInvalid.classList.add('tpb-shake');
        }
        return;
      }

      const clientName = nameInput.value.trim();
      const clientPhone = phoneInput.value.trim();
      const clientEmail = emailInput.value.trim();
      const serviceType = serviceSelect && serviceSelect.value ? serviceSelect.value : 'Event planning';
      const clientMessage = messageInput.value.trim();

      const refId = 'TPB-' + Math.floor(100000 + Math.random() * 900000);
      const submissionTimestamp = new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        dateStyle: 'full',
        timeStyle: 'medium'
      });

      // Quick WhatsApp deep-link generation for the client to contact directly
      const cleanPhoneDigits = clientPhone.replace(/\D/g, '');
      const waPhone = cleanPhoneDigits.length === 10 ? '91' + cleanPhoneDigits : cleanPhoneDigits;
      const clientWaLink = `https://wa.me/${waPhone}?text=${encodeURIComponent(`Hello ${clientName}, this is The Planner Broz team following up on your inquiry for ${serviceType} (Ref: ${refId}).`)}`;

      // Loading state on submit button
      const originalBtnContent = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
        Transmitting to Concierge...
      `;

      // Executive structured table payload for info.tpbevent@gmail.com
      const emailPayload = {
        _subject: `✨ [NEW INQUIRY] ${serviceType} — ${clientName} (${refId})`,
        _template: 'table',
        _captcha: 'false',
        _replyto: clientEmail,
        _autoresponse: `Thank you ${clientName}! The Planner Broz executive team has received your inquiry for "${serviceType}". Our senior planner will connect with you shortly. Reference ID: ${refId}.`,
        '👤 Client Full Name': clientName,
        '📞 Phone / WhatsApp': clientPhone,
        '✉️ Email Address': clientEmail,
        '🎯 Selected Service': serviceType,
        '📝 Event & Travel Details': clientMessage,
        '📅 Submission Date & Time': submissionTimestamp,
        '🔖 Unique Reference ID': refId,
        '💬 Client WhatsApp Chat': clientWaLink,
        '🌐 Website Source': 'The Planner Broz Official Website Concierge Modal'
      };

      // Resilient transmission with 6-second timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000);

      try {
        await fetch('https://formsubmit.co/ajax/info.tpbevent@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(emailPayload),
          signal: controller.signal
        });
        clearTimeout(timeoutId);
      } catch (err) {
        clearTimeout(timeoutId);
        console.warn('FormSubmit transmission notice (handled gracefully):', err);
      }

      // Restore button & reset form fields
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnContent;
      form.reset();
      [nameInput, phoneInput, emailInput, serviceSelect, messageInput].forEach(el => {
        el?.classList.remove('is-valid', 'is-invalid');
      });

      // Show Thank You Popup
      displayThankYouModal({
        name: clientName,
        phone: clientPhone,
        service: serviceType,
        refId: refId
      });
    });
  }

  /**
   * Smoothly displays the luxury Thank You modal
   * Coordinates with Bootstrap 5 modal backdrop lifecycle to prevent overlap
   */
  function displayThankYouModal(data) {
    const { name, phone, service, refId } = data;

    const namePlaceholder = document.getElementById('tpbThankYouClientName');
    const refIdPlaceholder = document.getElementById('tpbThankYouRefId');
    const servicePlaceholder = document.getElementById('tpbThankYouService');
    const contactPlaceholder = document.getElementById('tpbThankYouContact');
    const whatsappBtn = document.getElementById('tpbWhatsAppDirectBtn');

    if (namePlaceholder) namePlaceholder.textContent = name || 'Valued Guest';
    if (refIdPlaceholder) refIdPlaceholder.textContent = refId || 'TPB-849201';
    if (servicePlaceholder) servicePlaceholder.textContent = service || 'Bespoke Experience';
    if (contactPlaceholder) contactPlaceholder.textContent = phone || '+91 97184 70384';

    if (whatsappBtn) {
      const waMessage = encodeURIComponent(
        `Hello The Planner Broz! I just submitted an inquiry on your website.\n\n` +
        `• Name: ${name}\n` +
        `• Service: ${service}\n` +
        `• Ref ID: ${refId}\n` +
        `• Phone: ${phone}\n\n` +
        `Looking forward to planning with you!`
      );
      whatsappBtn.href = `https://wa.me/919718470384?text=${waMessage}`;
    }

    const contactModalEl = document.getElementById('contactModal');
    const thankYouModalEl = document.getElementById('tpbThankYouModal');

    function openThankYou() {
      if (!thankYouModalEl || typeof bootstrap === 'undefined') return;
      const thankYouModal = bootstrap.Modal.getOrCreateInstance(thankYouModalEl);
      thankYouModal.show();
    }

    // If Contact Modal is currently open, hide it first, then pop Thank You
    if (contactModalEl && contactModalEl.classList.contains('show') && typeof bootstrap !== 'undefined') {
      const contactModalInstance = bootstrap.Modal.getInstance(contactModalEl);
      contactModalEl.addEventListener('hidden.bs.modal', function onHidden() {
        contactModalEl.removeEventListener('hidden.bs.modal', onHidden);
        setTimeout(openThankYou, 120);
      }, { once: true });

      if (contactModalInstance) {
        contactModalInstance.hide();
      } else {
        setTimeout(openThankYou, 120);
      }
    } else {
      openThankYou();
    }
  }

  // Developer / User Test Helper accessible in browser console
  window.tpbTestThankYouModal = function (testName, testService) {
    displayThankYouModal({
      name: testName || 'Rahul Sharma',
      phone: '+91 97184 70384',
      service: testService || 'Event planning',
      refId: 'TPB-' + Math.floor(100000 + Math.random() * 900000)
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContactForm);
  } else {
    initContactForm();
  }
})();
