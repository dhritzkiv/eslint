/**
 * @fileoverview Tests for no-process-env rule.
 * @author Vignesh Anand
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

let rule = require("../../../lib/rules/no-process-env"),
    RuleTester = require("../../../lib/testers/rule-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

let ruleTester = new RuleTester();

ruleTester.run("no-process-env", rule, {

    valid: [
        "Process.env",
        "process[env]",
        "process.nextTick",
        "process.execArgv"
    ],

    invalid: [
        {
            code: "process.env",
            errors: [{
                message: "Unexpected use of process.env.",
                type: "MemberExpression"
            }]
        },
        {
            code: "process.env.ENV",
            errors: [{
                message: "Unexpected use of process.env.",
                type: "MemberExpression"
            }]
        },
        {
            code: "f(process.env)",
            errors: [{
                message: "Unexpected use of process.env.",
                type: "MemberExpression"
            }]
        }
    ]
});
