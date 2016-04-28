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
 * @fileoverview Generating gijack for variable blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.gijack.variables');

goog.require('Blockly.gijack');


Blockly.gijack['declare_var'] = function(block) {
  var argument0 = Blockly.gijack.valueToCode(block, 'variables',
      Blockly.gijack.ORDER_ASSIGNMENT) || 'NULL';
  var dropdown_vartype = block.getFieldValue('varType');
  var text_varname = block.getFieldValue('varName');
  var value_variables = Blockly.gijack.valueToCode(block, 'variables', Blockly.gijack.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.

  var code = dropdown_vartype + ' ' + text_varname + ' = '+ argument0 + ';\n';
  return code;
};

Blockly.gijack['use_var'] = function(block) {
  var text_var = block.getFieldValue('var');
  // TODO: Assemble JavaScript into code variable.
  var code = text_var;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.gijack.ORDER_NONE];
};

/*Blockly.gijack['declare_int'] = function(block) {
  var argument0 = Blockly.gijack.valueToCode(block, 'NUM',
      Blockly.gijack.ORDER_ASSIGNMENT) || '0';	
  var text_varname = block.getFieldValue('varName');
  var value_name = Blockly.gijack.valueToCode(block, 'NAME', Blockly.gijack.ORDER_ATOMIC);
  // TODO: Assemble gijack into code variable.
  var code = 'int ' + text_varname +'= ' + argument0;
  return code;
};
*/
