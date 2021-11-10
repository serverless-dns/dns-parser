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

export function toString(type) {
  switch (type) {
    case 0:
      return "mandatory";
    case 1:
      return "alpn";
    case 2:
      return "no-default-alpn";
    case 3:
      return "port";
    case 4:
      return "ipv4hint";
    case 5:
      return "ech";
    case 6:
      return "ipv6hint";
  }
  return "key" + type;
}

export function toKey(name) {
  switch (name.toLowerCase()) {
    case "mandatory":
      return 0;
    case "alpn":
      return 1;
    case "no-default-alpn":
      return 2;
    case "port":
      return 3;
    case "ipv4hint":
      return 4;
    case "ech":
      return 5;
    case "ipv6hint":
      return 6;
  }
  if (name.toLowerCase().startsWith("key")) return parseInt(name.slice(3));
  throw "Invalid svcparam key";
}
