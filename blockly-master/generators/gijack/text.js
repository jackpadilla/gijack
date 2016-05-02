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
 * @fileoverview Generating gijack for text blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.gijack.texts');

goog.require('Blockly.gijack');


Blockly.gijack['text'] = function(block) {
  // Text value.
  var code = Blockly.gijack.quote_(block.getFieldValue('TEXT'));
  return [code, Blockly.gijack.ORDER_ATOMIC];
};

Blockly.gijack['text_join'] = function(block) {
  // Create a string made up of any number of elements of any type.
  var code;
  if (block.itemCount_ == 0) {
    return ['\'\'', Blockly.gijack.ORDER_ATOMIC];
  } else if (block.itemCount_ == 1) {
    var argument0 = Blockly.gijack.valueToCode(block, 'ADD0',
        Blockly.gijack.ORDER_NONE) || '\'\'';
    code = 'String(' + argument0 + ')';
    return [code, Blockly.gijack.ORDER_FUNCTION_CALL];
  } else if (block.itemCount_ == 2) {
    var argument0 = Blockly.gijack.valueToCode(block, 'ADD0',
        Blockly.gijack.ORDER_NONE) || '\'\'';
    var argument1 = Blockly.gijack.valueToCode(block, 'ADD1',
        Blockly.gijack.ORDER_NONE) || '\'\'';
    code = 'String(' + argument0 + ') + String(' + argument1 + ')';
    return [code, Blockly.gijack.ORDER_ADDITION];
  } else {
    code = new Array(block.itemCount_);
    for (var n = 0; n < block.itemCount_; n++) {
      code[n] = Blockly.gijack.valueToCode(block, 'ADD' + n,
          Blockly.gijack.ORDER_COMMA) || '\'\'';
    }
    code = '[' + code.join(',') + '].join(\'\')';
    return [code, Blockly.gijack.ORDER_FUNCTION_CALL];
  }
};

Blockly.gijack['text_append'] = function(block) {
  // Append to a variable in place.
  var varName = Blockly.gijack.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var argument0 = Blockly.gijack.valueToCode(block, 'TEXT',
      Blockly.gijack.ORDER_NONE) || '\'\'';
  return varName + ' = String(' + varName + ') + String(' + argument0 + ');\n';
};

Blockly.gijack['text_length'] = function(block) {
  // String or array length.
  var argument0 = Blockly.gijack.valueToCode(block, 'VALUE',
      Blockly.gijack.ORDER_FUNCTION_CALL) || '\'\'';
  return [argument0 + '.length', Blockly.gijack.ORDER_MEMBER];
};

Blockly.gijack['text_isEmpty'] = function(block) {
  // Is the string null or array empty?
  var argument0 = Blockly.gijack.valueToCode(block, 'VALUE',
      Blockly.gijack.ORDER_MEMBER) || '\'\'';
  return ['!' + argument0 + '.length', Blockly.gijack.ORDER_LOGICAL_NOT];
};

Blockly.gijack['text_indexOf'] = function(block) {
  // Search the text for a substring.
  var operator = block.getFieldValue('END') == 'FIRST' ?
      'indexOf' : 'lastIndexOf';
  var argument0 = Blockly.gijack.valueToCode(block, 'FIND',
      Blockly.gijack.ORDER_NONE) || '\'\'';
  var argument1 = Blockly.gijack.valueToCode(block, 'VALUE',
      Blockly.gijack.ORDER_MEMBER) || '\'\'';
  var code = argument1 + '.' + operator + '(' + argument0 + ') + 1';
  return [code, Blockly.gijack.ORDER_MEMBER];
};

Blockly.gijack['text_charAt'] = function(block) {
  // Get letter at index.
  // Note: Until January 2013 this block did not have the WHERE input.
  var where = block.getFieldValue('WHERE') || 'FROM_START';
  var at = Blockly.gijack.valueToCode(block, 'AT',
      Blockly.gijack.ORDER_UNARY_NEGATION) || '1';
  var text = Blockly.gijack.valueToCode(block, 'VALUE',
      Blockly.gijack.ORDER_MEMBER) || '\'\'';
  switch (where) {
    case 'FIRST':
      var code = text + '.charAt(0)';
      return [code, Blockly.gijack.ORDER_FUNCTION_CALL];
    case 'LAST':
      var code = text + '.slice(-1)';
      return [code, Blockly.gijack.ORDER_FUNCTION_CALL];
    case 'FROM_START':
      // Blockly uses one-based indicies.
      if (Blockly.isNumber(at)) {
        // If the index is a naked number, decrement it right now.
        at = parseFloat(at) - 1;
      } else {
        // If the index is dynamic, decrement it in code.
        at += ' - 1';
      }
      var code = text + '.charAt(' + at + ')';
      return [code, Blockly.gijack.ORDER_FUNCTION_CALL];
    case 'FROM_END':
      var code = text + '.slice(-' + at + ').charAt(0)';
      return [code, Blockly.gijack.ORDER_FUNCTION_CALL];
    case 'RANDOM':
      var functionName = Blockly.gijack.provideFunction_(
          'text_random_letter',
          [ 'function ' + Blockly.gijack.FUNCTION_NAME_PLACEHOLDER_ +
              '(text) {',
            '  var x = Math.floor(Math.random() * text.length);',
            '  return text[x];',
            '}']);
      code = functionName + '(' + text + ')';
      return [code, Blockly.gijack.ORDER_FUNCTION_CALL];
  }
  throw 'Unhandled option (text_charAt).';
};

Blockly.gijack['text_getSubstring'] = function(block) {
  // Get substring.
  var text = Blockly.gijack.valueToCode(block, 'STRING',
      Blockly.gijack.ORDER_MEMBER) || '\'\'';
  var where1 = block.getFieldValue('WHERE1');
  var where2 = block.getFieldValue('WHERE2');
  var at1 = Blockly.gijack.valueToCode(block, 'AT1',
      Blockly.gijack.ORDER_NONE) || '1';
  var at2 = Blockly.gijack.valueToCode(block, 'AT2',
      Blockly.gijack.ORDER_NONE) || '1';
  if (where1 == 'FIRST' && where2 == 'LAST') {
    var code = text;
  } else {
    var functionName = Blockly.gijack.provideFunction_(
        'text_get_substring',
        [ 'function ' + Blockly.gijack.FUNCTION_NAME_PLACEHOLDER_ +
            '(text, where1, at1, where2, at2) {',
          '  function getAt(where, at) {',
          '    if (where == \'FROM_START\') {',
          '      at--;',
          '    } else if (where == \'FROM_END\') {',
          '      at = text.length - at;',
          '    } else if (where == \'FIRST\') {',
          '      at = 0;',
          '    } else if (where == \'LAST\') {',
          '      at = text.length - 1;',
          '    } else {',
          '      throw \'Unhandled option (text_getSubstring).\';',
          '    }',
          '    return at;',
          '  }',
          '  at1 = getAt(where1, at1);',
          '  at2 = getAt(where2, at2) + 1;',
          '  return text.slice(at1, at2);',
          '}']);
    var code = functionName + '(' + text + ', \'' +
        where1 + '\', ' + at1 + ', \'' + where2 + '\', ' + at2 + ')';
  }
  return [code, Blockly.gijack.ORDER_FUNCTION_CALL];
};

Blockly.gijack['text_changeCase'] = function(block) {
  // Change capitalization.
  var OPERATORS = {
    'UPPERCASE': '.toUpperCase()',
    'LOWERCASE': '.toLowerCase()',
    'TITLECASE': null
  };
  var operator = OPERATORS[block.getFieldValue('CASE')];
  var code;
  if (operator) {
    // Upper and lower case are functions built into gijack.
    var argument0 = Blockly.gijack.valueToCode(block, 'TEXT',
        Blockly.gijack.ORDER_MEMBER) || '\'\'';
    code = argument0 + operator;
  } else {
    // Title case is not a native gijack function.  Define one.
    var functionName = Blockly.gijack.provideFunction_(
        'text_toTitleCase',
        [ 'function ' +
            Blockly.gijack.FUNCTION_NAME_PLACEHOLDER_ + '(str) {',
          '  return str.replace(/\\S+/g,',
          '      function(txt) {return txt[0].toUpperCase() + ' +
              'txt.substring(1).toLowerCase();});',
          '}']);
    var argument0 = Blockly.gijack.valueToCode(block, 'TEXT',
        Blockly.gijack.ORDER_NONE) || '\'\'';
    code = functionName + '(' + argument0 + ')';
  }
  return [code, Blockly.gijack.ORDER_FUNCTION_CALL];
};

Blockly.gijack['text_trim'] = function(block) {
  // Trim spaces.
  var OPERATORS = {
    'LEFT': ".replace(/^[\\s\\xa0]+/, '')",
    'RIGHT': ".replace(/[\\s\\xa0]+$/, '')",
    'BOTH': '.trim()'
  };
  var operator = OPERATORS[block.getFieldValue('MODE')];
  var argument0 = Blockly.gijack.valueToCode(block, 'TEXT',
      Blockly.gijack.ORDER_MEMBER) || '\'\'';
  return [argument0 + operator, Blockly.gijack.ORDER_FUNCTION_CALL];
};

Blockly.gijack['text_print'] = function(block) {
  // Print statement.
  var argument0 = Blockly.gijack.valueToCode(block, 'TEXT',
      Blockly.gijack.ORDER_NONE) || '\'\'';
  return 'window.alert(' + argument0 + ');\n';
};

Blockly.gijack['text_prompt_ext'] = function(block) {
  // Prompt function.
  if (block.getField('TEXT')) {
    // Internal message.
    var msg = Blockly.gijack.quote_(block.getFieldValue('TEXT'));
  } else {
    // External message.
    var msg = Blockly.gijack.valueToCode(block, 'TEXT',
        Blockly.gijack.ORDER_NONE) || '\'\'';
  }
  var code = 'window.prompt(' + msg + ')';
  var toNumber = block.getFieldValue('TYPE') == 'NUMBER';
  if (toNumber) {
    code = 'parseFloat(' + code + ')';
  }
  return [code, Blockly.gijack.ORDER_FUNCTION_CALL];
};

Blockly.gijack['text_prompt'] = Blockly.gijack['text_prompt_ext'];


Blockly.gijack['read_file'] = function(block) {
  var argument0 = Blockly.gijack.valueToCode(block, 'read',
      Blockly.gijack.ORDER_ASSIGNMENT) || 'NULL';
  var value_read = Blockly.gijack.valueToCode(block, 'read', Blockly.gijack.ORDER_ATOMIC);
  // TODO: Assemble gijack into code variable.
  var code = 'read (' + argument0 + ')'+ ';\n';
  return code;
};