/**
 * @fileoverview Used for exporting Stylelint Configuring.
 * @author ice.tang
 */
'use strict';
module.exports = {
    "rules": {
        "indentation": [
            4,
            {
                "severity": "warning"
            }
        ],
        "max-empty-lines": [
            2,
            {
                "severity": "warning"
            }
        ],
        "block-no-empty": true,
        "comment-no-empty": true,
        "comment-whitespace-inside": [
            "always",
            {
                "severity": "warning"
            }
        ],
        "value-list-comma-space-before": [
            "never",
            {
                "severity": "warning"
            }
        ],
        "value-list-comma-space-after": [
            "always",
            {
                "severity": "warning"
            }
        ],
        "value-list-max-empty-lines": [
            0,
            {
                "severity": "warning"
            }
        ],
        "declaration-block-semicolon-space-after": [
            "always-single-line",
            {
                "severity": "warning"
            }
        ],
        "block-closing-brace-empty-line-before": [
            "never",
            {
                "severity": "warning"
            }
        ],
        "block-opening-brace-newline-after": "always-multi-line",
        "block-opening-brace-space-before": [
            "always",
            {
                "severity": "warning"
            }
        ],
        "declaration-colon-space-after": "always",
        // "rule-empty-line-before": [
        //     "always-multi-line",
        //     {
        //         "severity": "warning",
        //         "except": [
        //             "first-nested"
        //         ],
        //         "ignore": [
        //             "after-comment"
        //         ]
        //     }
        // ],
        "function-calc-no-unspaced-operator": [
            true,
            {
                "severity": "warning"
            }
        ],
        "declaration-no-important": true,
        "media-feature-name-no-unknown": true,
        "no-duplicate-at-import-rules": true,
        "no-unknown-animations": true,
        // "selector-max-compound-selectors": [
        //     3,
        //     {
        //         "severity": "warning"
        //     }
        // ],
        "selector-max-id": [
            1,
            {
                "severity": "warning"
            }
        ],
        // "max-nesting-depth": [
        //     3,
        //     {
        //         "severity": "warning"
        //     }
        // ],
        // "number-leading-zero": [
        //     "never",
        //     {
        //         "severity": "warning"
        //     }
        // ],
        "number-no-trailing-zeros": [
            true
        ],
        "length-zero-no-unit": [
            true
        ],
        "color-no-invalid-hex": true,
        "color-named": [
            "never",
            {
                "severity": "warning"
            }
        ],
        "string-no-newline": true,
        "number-max-precision": [
            4,
            {
                "severity": "warning"
            }
        ],
        "unit-no-unknown": [
            true,
            {
                "severity": "warning"
            }
        ],
        "property-no-unknown": [
            true,
            {
                "ignoreProperties": [
                    "linear-gradient"
                ],
                "severity": "warning"
            }
        ],
        "selector-pseudo-class-no-unknown": [
            true,
            {
                "severity": "warning"
            }
        ],
        "selector-pseudo-element-no-unknown": [
            true,
            {
                "severity": "warning"
            }
        ],
        "declaration-block-no-duplicate-properties": [
            true,
            {
                "ignoreProperties": [
                    "background"
                ]
            }
        ],
        "no-duplicate-selectors": true,
        "no-extra-semicolons": true,
        "declaration-block-trailing-semicolon": "always",
        "string-quotes": [
            "double",
            {
                "severity": "warning"
            }
        ],
        "selector-type-case": "lower",
        "property-case": "lower"
    }
}
