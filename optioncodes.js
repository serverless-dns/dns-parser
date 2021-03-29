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

'use strict'

exports.toString = function (type) {
  switch (type) {
    // list at
    // https://www.iana.org/assignments/dns-parameters/dns-parameters.xhtml#dns-parameters-11
    case 1: return 'LLQ'
    case 2: return 'UL'
    case 3: return 'NSID'
    case 5: return 'DAU'
    case 6: return 'DHU'
    case 7: return 'N3U'
    case 8: return 'CLIENT_SUBNET'
    case 9: return 'EXPIRE'
    case 10: return 'COOKIE'
    case 11: return 'TCP_KEEPALIVE'
    case 12: return 'PADDING'
    case 13: return 'CHAIN'
    case 14: return 'KEY_TAG'
    case 26946: return 'DEVICEID'
  }
  if (type < 0) {
    return null
  }
  return `OPTION_${type}`
}

exports.toCode = function (name) {
  if (typeof name === 'number') {
    return name
  }
  if (!name) {
    return -1
  }
  switch (name.toUpperCase()) {
    case 'OPTION_0': return 0
    case 'LLQ': return 1
    case 'UL': return 2
    case 'NSID': return 3
    case 'OPTION_4': return 4
    case 'DAU': return 5
    case 'DHU': return 6
    case 'N3U': return 7
    case 'CLIENT_SUBNET': return 8
    case 'EXPIRE': return 9
    case 'COOKIE': return 10
    case 'TCP_KEEPALIVE': return 11
    case 'PADDING': return 12
    case 'CHAIN': return 13
    case 'KEY_TAG': return 14
    case 'DEVICEID': return 26946
    case 'OPTION_65535': return 65535
  }
  const m = name.match(/_(\d+)$/)
  if (m) {
    return parseInt(m[1], 10)
  }
  return -1
}
