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
 * @fileoverview Generating gijack for math blocks.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.gijack.math');

goog.require('Blockly.gijack');


Blockly.gijack['math_number'] = function(block) {
  // Numeric value.
  var code = parseFloat(block.getFieldValue('NUM'));
  return [code, Blockly.gijack.ORDER_ATOMIC];
};

Blockly.gijack['math_arithmetic'] = function(block) {
  // Basic arithmetic operators, and power.
  var OPERATORS = {
    'ADD': [' + ', Blockly.gijack.ORDER_ADDITION],
    'MINUS': [' - ', Blockly.gijack.ORDER_SUBTRACTION],
    'MULTIPLY': [' * ', Blockly.gijack.ORDER_MULTIPLICATION],
    'DIVIDE': [' / ', Blockly.gijack.ORDER_DIVISION],
    //'POWER': [null, Blockly.gijack.ORDER_COMMA]  // Handle power separately.
  };
  var tuple = OPERATORS[block.getFieldValue('OP')];
  var operator = tuple[0];
  var order = tuple[1];
  var argument0 = Blockly.gijack.valueToCode(block, 'A', order) || '0';
  var argument1 = Blockly.gijack.valueToCode(block, 'B', order) || '0';
  var code;
  // Power in gijack requires a special case since it has no operator.
  if (!operator) {
    code = 'Math.pow(' + argument0 + ', ' + argument1 + ')';
    return [code, Blockly.gijack.ORDER_FUNCTION_CALL];
  }
  code = argument0 + operator + argument1;
  return [code, order];
};



Blockly.gijack['math_modulo'] = function(block) {
  // Remainder computation.
  var argument0 = Blockly.gijack.valueToCode(block, 'DIVIDEND',
      Blockly.gijack.ORDER_MODULUS) || '0';
  var argument1 = Blockly.gijack.valueToCode(block, 'DIVISOR',
      Blockly.gijack.ORDER_MODULUS) || '0';
  var code = argument0 + ' % ' + argument1;
  return [code, Blockly.gijack.ORDER_MODULUS];
};



