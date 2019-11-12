// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2016-2018 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

// Generic Rules/Regex
import _language_common_rules from '../engine/generic-rules';
import {generic} from './generic';

// Cleo/SCM Language

// Cleo/SCM language is used as main scripting language in a number of GTA
// titles and as a language for CLEO, the community-supported script hooking
// engine.

// Author: [Sergey Filatov (raxp)]
// --
export class cleo extends generic {

    setupLanguage() {

        this.rules = [

            // strings
            _language_common_rules.sqStrings,
            _language_common_rules.dqStrings,

            // boolean expression
            _language_common_rules.boolean,

            // null expression
            _language_common_rules.null,

            // control keywords
            {
                regex: /\b(as|break|do|else|finally|for|to|downto|goto|if|then|while|thread|end_thread|wait|end|continue|repeat|until|jump|jf|ret|const|var|hex)\b/gi,
                type: 'k1'
            },

            // magic constants
            {
                regex:  /\b__[A-Z][A-Z0-9_]+__\b/g,
                type: 'e3'
            },

            // operator
            {
                regex: /\b(and|or|not)\b/g,
                type: 'k3'
            },

            // slash style comments
            _language_common_rules.slashComments,

            // multi line comments
            _language_common_rules.blockComments,

            // directives
            {
                regex: /\{[\$].*\}/gm,
                type: 'c0'
            },

            // variables
            {
                regex: /([sv]{0,1}\$[A-Z_][\w]*|[0-9]{1,2}\@[sv]{0,1})/gim,
                type: 'k7'
            },

            // opcodes
            {
                regex: /[A-Z0-9]{4}\:/gm,
                type: 'm0'
            },

            // labels
            {
                regex:/^[\s]*\:[\w]+/gim,
                type: 'k7'
            },
            
            // model identifiers
            {
                regex:/\#[\w]+/gim,
                type: 'k9'
            },

            // label pointer
            {
                regex:/\@[\w]+/gim,
                type: 'k7'
            },

            // octal
            _language_common_rules.octal,

            // bin
            _language_common_rules.bin,

            // hex
            _language_common_rules.hex,

            // floats numbers
            _language_common_rules.floats,

            // brackets
            _language_common_rules.brackets

        ]
    }
}
