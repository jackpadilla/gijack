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
 * @fileoverview Generating gijack for loop blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.gijack.loops');

goog.require('Blockly.gijack');


Blockly.gijack['controls_repeat_ext'] = function(block) {
  // Repeat n times.
  if (block.getField('TIMES')) {
    // Internal number.
    var repeats = String(Number(block.getFieldValue('TIMES')));
  } else {
    // External number.
    var repeats = Blockly.gijack.valueToCode(block, 'TIMES',
        Blockly.gijack.ORDER_ASSIGNMENT) || '0';
  }
  var branch = Blockly.gijack.statementToCode(block, 'DO');
  branch = Blockly.gijack.addLoopTrap(branch, block.id);
  var code = '';
  var loopVar = Blockly.gijack.variableDB_.getDistinctName(
      'count', Blockly.Variables.NAME_TYPE);
  var endVar = repeats;
  if (!repeats.match(/^\w+$/) && !Blockly.isNumber(repeats)) {
    var endVar = Blockly.gijack.variableDB_.getDistinctName(
        'repeat_end', Blockly.Variables.NAME_TYPE);
    code += 'var ' + endVar + ' = ' + repeats + ';\n';
  }
  code += 'for (int ' + loopVar + ' = 0; ' +
      loopVar + ' < ' + endVar + '; ' +
      loopVar + '++) {\n' +
      branch + '}\n';
  return code;
};

Blockly.gijack['controls_repeat'] =
    Blockly.gijack['controls_repeat_ext'];

Blockly.gijack['controls_whileUntil'] = function(block) {
  // Do while/until loop.
  var until = block.getFieldValue('MODE') == 'UNTIL';
  var argument0 = Blockly.gijack.valueToCode(block, 'BOOL',
      until ? Blockly.gijack.ORDER_LOGICAL_NOT :
      Blockly.gijack.ORDER_NONE) || 'false';
  var branch = Blockly.gijack.statementToCode(block, 'DO');
  branch = Blockly.gijack.addLoopTrap(branch, block.id);
  if (until) {
    argument0 = '!' + argument0;
  }
  return 'while (' + argument0 + ') {\n' + branch + '}\n';
};

Blockly.gijack['controls_for'] = function(block) {
  // For loop.
  var variable0 = Blockly.gijack.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var argument0 = Blockly.gijack.valueToCode(block, 'FROM',
      Blockly.gijack.ORDER_ASSIGNMENT) || '0';
  var argument1 = Blockly.gijack.valueToCode(block, 'TO',
      Blockly.gijack.ORDER_ASSIGNMENT) || '0';
  var increment = Blockly.gijack.valueToCode(block, 'BY',
      Blockly.gijack.ORDER_ASSIGNMENT) || '1';
  var branch = Blockly.gijack.statementToCode(block, 'DO');
  branch = Blockly.gijack.addLoopTrap(branch, block.id);
  var code;
  if (Blockly.isNumber(argument0) && Blockly.isNumber(argument1) &&
      Blockly.isNumber(increment)) {
    // All arguments are simple numbers.
    var up = parseFloat(argument0) <= parseFloat(argument1);
    code = 'for (' + variable0 + ' = ' + argument0 + '; ' +
        variable0 + (up ? ' <= ' : ' >= ') + argument1 + '; ' +
        variable0;
    var step = Math.abs(parseFloat(increment));
    if (step == 1) {
      code += up ? '++' : '--';
    } else {
      code += (up ? ' += ' : ' -= ') + step;
    }
    code += ') {\n' + branch + '}\n';
  } else {
    code = '';
    // Cache non-trivial values to variables to prevent repeated look-ups.
    var startVar = argument0;
    if (!argument0.match(/^\w+$/) && !Blockly.isNumber(argument0)) {
      startVar = Blockly.gijack.variableDB_.getDistinctName(
          variable0 + '_start', Blockly.Variables.NAME_TYPE);
      code += 'var ' + startVar + ' = ' + argument0 + ';\n';
    }
    var endVar = argument1;
    if (!argument1.match(/^\w+$/) && !Blockly.isNumber(argument1)) {
      var endVar = Blockly.gijack.variableDB_.getDistinctName(
          variable0 + '_end', Blockly.Variables.NAME_TYPE);
      code += 'var ' + endVar + ' = ' + argument1 + ';\n';
    }
    // Determine loop direction at start, in case one of the bounds
    // changes during loop execution.
    var incVar = Blockly.gijack.variableDB_.getDistinctName(
        variable0 + '_inc', Blockly.Variables.NAME_TYPE);
    code += 'var ' + incVar + ' = ';
    if (Blockly.isNumber(increment)) {
      code += Math.abs(increment) + ';\n';
    } else {
      code += 'Math.abs(' + increment + ');\n';
    }
    code += 'if (' + startVar + ' > ' + endVar + ') {\n';
    code += Blockly.gijack.INDENT + incVar + ' = -' + incVar + ';\n';
    code += '}\n';
    code += 'for (' + variable0 + ' = ' + startVar + ';\n' +
        '     ' + incVar + ' >= 0 ? ' +
        variable0 + ' <= ' + endVar + ' : ' +
        variable0 + ' >= ' + endVar + ';\n' +
        '     ' + variable0 + ' += ' + incVar + ') {\n' +
        branch + '}\n';
  }
  return code;
};



Blockly.gijack['controls_flow_statements'] = function(block) {
  // Flow statements: continue, break.
  switch (block.getFieldValue('FLOW')) {
    case 'BREAK':
      return 'break;\n';
    case 'CONTINUE':
      return 'continue;\n';
  }
  throw 'Unknown flow statement.';
};


//do while loop
Blockly.gijack['ciclos_dowhile'] = function(block) {
  var statements_do = Blockly.gijack.statementToCode(block, 'do');
  statements_do = Blockly.gijack.addLoopTrap(statements_do, block.id);
  var value_while = Blockly.gijack.valueToCode(block, 'while',
   Blockly.gijack.ORDER_ATOMIC);

  var code = "do {\n" + statements_do + "}\nwhile (" + value_while + ");\n";

  return code;
};

Blockly.gijack['for'] = function(block) {
  var text_i = block.getFieldValue('i');
  var text_init = block.getFieldValue('init');
  var text_expression = block.getFieldValue('expression');
  var text_op = block.getFieldValue('op');
  var statements_stats = Blockly.gijack.statementToCode(block, 'stats');
  // TODO: Assemble gijack into code variable.
  var code = 'for(' + text_i + ' = ' +  text_init + '; ' + text_expression + ';' + text_op 
      + ';) {\n' + statements_stats + '\n }\n';
  return code;
};


/*
var branch = Blockly.gijack.statementToCode(block, 'DO');
  branch = Blockly.gijack.addLoopTrap(branch, block.id);
  if (until) {
    argument0 = '!' + argument0;
  }
  return 'while (' + argument0 + ') {\n' + branch + '}\n';


  var argument0 = Blockly.gijack.valueToCode(block, 'BOOL',
      until ? Blockly.gijack.ORDER_LOGICAL_NOT :
      Blockly.gijack.ORDER_NONE) || 'false';

  //'do{' + '\n' +
  argument0 + '\n' +
  '}while( ' + argument1 + ' )' + ';\n';
  return code;*/