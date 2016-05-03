/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating gijack for procedure blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.gijack.procedures');

goog.require('Blockly.gijack');


Blockly.gijack['procedures_defreturn'] = function(block) {
  // Define a procedure with a return value.
  var funcName = Blockly.gijack.variableDB_.getName(
      block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var branch = Blockly.gijack.statementToCode(block, 'STACK');
  if (Blockly.gijack.STATEMENT_PREFIX) {
    branch = Blockly.gijack.prefixLines(
        Blockly.gijack.STATEMENT_PREFIX.replace(/%1/g,
        '\'' + block.id + '\''), Blockly.gijack.INDENT) + branch;
  }
  if (Blockly.gijack.INFINITE_LOOP_TRAP) {
    branch = Blockly.gijack.INFINITE_LOOP_TRAP.replace(/%1/g,
        '\'' + block.id + '\'') + branch;
  }
  var returnValue = Blockly.gijack.valueToCode(block, 'RETURN',
      Blockly.gijack.ORDER_NONE) || '';
  if (returnValue) {
    returnValue = '  return ' + returnValue + ';\n';
  }
  var args = [];
  for (var x = 0; x < block.arguments_.length; x++) {
    args[x] = Blockly.gijack.variableDB_.getName(block.arguments_[x],
        Blockly.Variables.NAME_TYPE);
  }
  var code = 'function ' + funcName + '(' + args.join(', ') + ') {\n' +
      branch + returnValue + '}';
  code = Blockly.gijack.scrub_(block, code);
  Blockly.gijack.definitions_[funcName] = code;
  return null;
};

// Defining a procedure without a return value uses the same generator as
// a procedure with a return value.
Blockly.gijack['procedures_defnoreturn'] =
    Blockly.gijack['procedures_defreturn'];

Blockly.gijack['procedures_callreturn'] = function(block) {
  // Call a procedure with a return value.
  var funcName = Blockly.gijack.variableDB_.getName(
      block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var args = [];
  for (var x = 0; x < block.arguments_.length; x++) {
    args[x] = Blockly.gijack.valueToCode(block, 'ARG' + x,
        Blockly.gijack.ORDER_COMMA) || 'null';
  }
  var code = funcName + '(' + args.join(', ') + ')';
  return [code, Blockly.gijack.ORDER_FUNCTION_CALL];
};

Blockly.gijack['procedures_callnoreturn'] = function(block) {
  // Call a procedure with no return value.
  var funcName = Blockly.gijack.variableDB_.getName(
      block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var args = [];
  for (var x = 0; x < block.arguments_.length; x++) {
    args[x] = Blockly.gijack.valueToCode(block, 'ARG' + x,
        Blockly.gijack.ORDER_COMMA) || 'null';
  }
  var code = funcName + '(' + args.join(', ') + ');\n';
  return code;
};

Blockly.gijack['procedures_ifreturn'] = function(block) {
  // Conditionally return value from a procedure.
  var condition = Blockly.gijack.valueToCode(block, 'CONDITION',
      Blockly.gijack.ORDER_NONE) || 'false';
  var code = 'if (' + condition + ') {\n';
  if (block.hasReturnValue_) {
    var value = Blockly.gijack.valueToCode(block, 'VALUE',
        Blockly.gijack.ORDER_NONE) || 'null';
    code += '  return ' + value + ';\n';
  } else {
    code += '  return;\n';
  }
  code += '}\n';
  return code;
};

Blockly.gijack['procedures_expresion'] = function(block) {
  var statements_do = Blockly.gijack.statementToCode(block, 'nom');
  statements_do = Blockly.gijack.addLoopTrap(statements_do, block.id);
  var statements_nom = Blockly.gijack.statementToCode(block, 'nom');
  statements_nom = Blockly.gijack.addLoopTrap(statements_do, block.id);
  // TODO: Assemble gijack into code variable.
  var code = '(' + statements_nom + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.gijack.ORDER_NONE];
}; 

Blockly.gijack['procedures_express'] = function(block) {
  var statements_name = Blockly.gijack.statementToCode(block, 'NAME');
  statements_name = Blockly.gijack.addLoopTrap(statements_name, block.id);
  // TODO: Assemble gijack into code variable.
  var code = '(' + statements_name + ')';
  return code;
};

Blockly.gijack['proced_exp'] = function(block) {
  var value_expression = Blockly.gijack.valueToCode(block, 'expression', Blockly.gijack.ORDER_ATOMIC);
  var argument1 = Blockly.gijack.valueToCode(block, 'expression',
    Blockly.gijack.ORDER_ASSIGNMENT) || 'NULL';
  // TODO: Assemble gijack into code variable.
  var code = '('+argument1+')';
  return code;
};

Blockly.gijack['create_main'] = function(block) {
  var value_expression = Blockly.gijack.valueToCode(block, 'expression', Blockly.gijack.ORDER_ATOMIC);
  var argument0 = Blockly.gijack.valueToCode(block, 'expression',
    Blockly.gijack.ORDER_ASSIGNMENT) || 'NULL';
  // TODO: Assemble gijack into code variable.
  var code = 'int main{' + '\n' + argument0 + '\n' + '}';
  return code;
};

Blockly.gijack['procedures_main2'] = function(block) {
  var statements_name = Blockly.gijack.statementToCode(block, 'NAME');
  statements_name = Blockly.gijack.addLoopTrap(statements_name, block.id);
  // TODO: Assemble gijack into code variable.
  var code = 'int main{' + '\n' + statements_name + '\n' + '}';
  return code;
};

Blockly.gijack['pro_exp'] = function(block) {
  var value_name = Blockly.gijack.valueToCode(block, 'NAME', Blockly.gijack.ORDER_ATOMIC);
  var argument0 = Blockly.gijack.valueToCode(block, 'NAME',
    Blockly.gijack.ORDER_ASSIGNMENT) || 'NULL';
  // TODO: Assemble gijack into code variable.
  var code = '('+argument0+')';
  return code;
};
