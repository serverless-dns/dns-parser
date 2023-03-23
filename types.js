/*
 * Copyright (c) 2021 RethinkDNS and its authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 Mathias Buus
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

//forked with minor changes from https://github.com/mafintosh/dns-packet

"use strict";

const typeToStringMap = {
  1: "A",
  10: "NULL",
  28: "AAAA",
  18: "AFSDB",
  42: "APL",
  257: "CAA",
  60: "CDNSKEY",
  59: "CDS",
  37: "CERT",
  5: "CNAME",
  49: "DHCID",
  32769: "DLV",
  39: "DNAME",
  48: "DNSKEY",
  43: "DS",
  55: "HIP",
  13: "HINFO",
  45: "IPSECKEY",
  25: "KEY",
  36: "KX",
  29: "LOC",
  15: "MX",
  35: "NAPTR",
  2: "NS",
  47: "NSEC",
  50: "NSEC3",
  51: "NSEC3PARAM",
  12: "PTR",
  46: "RRSIG",
  17: "RP",
  24: "SIG",
  6: "SOA",
  99: "SPF",
  33: "SRV",
  44: "SSHFP",
  32768: "TA",
  249: "TKEY",
  52: "TLSA",
  250: "TSIG",
  16: "TXT",
  252: "AXFR",
  251: "IXFR",
  41: "OPT",
  255: "ANY",
  64: "SVCB",
  65: "HTTPS"
};

const stringToTypeMap = Object.entries(typeToStringMap).reduce((map, [key, value]) => {
  map[value.toUpperCase()] = parseInt(key);
  return map;
}, {});

export function toString(type) {
  return typeToStringMap[type] || `UNKNOWN_${type}`;
}

export function toType(name) {
  return stringToTypeMap[name.toUpperCase()] || 0;
}
