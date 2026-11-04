/* Funzioni condivise dalle pagine. */
window.B = {
  pad: function (s, n) { s = String(s); while (s.length < n) s = '0' + s; return s; },
  bin: function (v, n) { return B.pad(v.toString(2), n || 8); },
  nib: function (s) { // raggruppa a 4 bit da destra
    var out = [];
    for (var i = s.length; i > 0; i -= 4) out.unshift(s.slice(Math.max(0, i - 4), i));
    return out.join(' ');
  },
  hex: function (v, n) { return B.pad(v.toString(16).toUpperCase(), n || 2); },
  fmt: function (n) { return Number(n).toLocaleString('it-IT'); }
};
