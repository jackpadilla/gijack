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
 * @fileoverview Generating gijack for list blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.gijack.lists');

goog.require('Blockly.gijack');


Blockly.gijack['lists_create_empty'] = function(block) {
  // Create an empty list.
  return ['[]', Blockly.gijack.ORDER_ATOMIC];
};

Blockly.gijack['lists_create_with'] = function(block) {
  // Create a list with any number of elements of any type.
  var code = new Array(block.itemCount_);
  for (var n = 0; n < block.itemCount_; n++) {
    code[n] = Blockly.gijack.valueToCode(block, 'ADD' + n,
        Blockly.gijack.ORDER_COMMA) || 'null';
  }
  code = '[' + code.join(', ') + ']';
  return [code, Blockly.gijack.ORDER_ATOMIC];
};

Blockly.gijack['lists_repeat'] = function(block) {
  // Create a list with one element repeated.
  var functionName = Blockly.gijack.provideFunction_(
      'lists_repeat',
      [ 'function ' + Blockly.gijack.FUNCTION_NAME_PLACEHOLDER_ +
          '(value, n) {',
        '  var array = [];',
        '  for (var i = 0; i < n; i++) {',
        '    array[i] = value;',
        '  }',
        '  return array;',
        '}']);
  var argument0 = Blockly.gijack.valueToCode(block, 'ITEM',
      Blockly.gijack.ORDER_COMMA) || 'null';
  var argument1 = Blockly.gijack.valueToCode(block, 'NUM',
      Blockly.gijack.ORDER_COMMA) || '0';
  var code = functionName + '(' + argument0 + ', ' + argument1 + ')';
  return [code, Blockly.gijack.ORDER_FUNCTION_CALL];
};

Blockly.gijack['lists_length'] = function(block) {
  // String or array length.
  var argument0 = Blockly.gijack.valueToCode(block, 'VALUE',
      Blockly.gijack.ORDER_FUNCTION_CALL) || '[]';
  return [argument0 + '.length', Blockly.gijack.ORDER_MEMBER];
};

Blockly.gijack['lists_isEmpty'] = function(block) {
  // Is the string null or array empty?
  var argument0 = Blockly.gijack.valueToCode(block, 'VALUE',
      Blockly.gijack.ORDER_MEMBER) || '[]';
  return ['!' + argument0 + '.length', Blockly.gijack.ORDER_LOGICAL_NOT];
};

Blockly.gijack['lists_indexOf'] = function(block) {
  // Find an item in the list.
  var operator = block.getFieldValue('END') == 'FIRST' ?
      'indexOf' : 'lastIndexOf';
  var argument0 = Blockly.gijack.valueToCode(block, 'FIND',
      Blockly.gijack.ORDER_NONE) || '\'\'';
  var argument1 = Blockly.gijack.valueToCode(block, 'VALUE',
      Blockly.gijack.ORDER_MEMBER) || '[]';
  var code = argument1 + '.' + operator + '(' + argument0 + ') + 1';
  return [code, Blockly.gijack.ORDER_MEMBER];
};

Blockly.gijack['lists_getIndex'] = function(block) {
  // Get element at index.
  // Note: Until January 2013 this block did not have MODE or WHERE inputs.
  var mode = block.getFieldValue('MODE') || 'GET';
  var where = block.getFieldValue('WHERE') || 'FROM_START';
  var at = Blockly.gijack.valueToCode(block, 'AT',
      Blockly.gijack.ORDER_UNARY_NEGATION) || '1';
  var list = Blockly.gijack.valueToCode(block, 'VALUE',
      Blockly.gijack.ORDER_MEMBER) || '[]';

  if (where == 'FIRST') {
    if (mode == 'GET') {
      var code = list + '[0]';
      return [code, Blockly.gijack.ORDER_MEMBER];
    } else if (mode == 'GET_REMOVE') {
      var code = list + '.shift()';
      return [code, Blockly.gijack.ORDER_MEMBER];
    } else if (mode == 'REMOVE') {
      return list + '.shift();\n';
    }
  } else if (where == 'LAST') {
    if (mode == 'GET') {
      var code = list + '.slice(-1)[0]';
      return [code, Blockly.gijack.ORDER_MEMBER];
    } else if (mode == 'GET_REMOVE') {
      var code = list + '.pop()';
      return [code, Blockly.gijack.ORDER_MEMBER];
    } else if (mode == 'REMOVE') {
      return list + '.pop();\n';
    }
  } else if (where == 'FROM_START') {
    // Blockly uses one-based indicies.
    if (Blockly.isNumber(at)) {
      // If the index is a naked number, decrement it right now.
      at = parseFloat(at) - 1;
    } else {
      // If the index is dynamic, decrement it in code.
      at += ' - 1';
    }
    if (mode == 'GET') {
      var code = list + '[' + at + ']';
      return [code, Blockly.gijack.ORDER_MEMBER];
    } else if (mode == 'GET_REMOVE') {
      var code = list + '.splice(' + at + ', 1)[0]';
      return [code, Blockly.gijack.ORDER_FUNCTION_CALL];
    } else if (mode == 'REMOVE') {
      return list + '.splice(' + at + ', 1);\n';
    }
  } else if (where == 'FROM_END') {
    if (mode == 'GET') {
      var code = list + '.slice(-' + at + ')[0]';
      return [code, Blockly.gijack.ORDER_FUNCTION_CALL];
    } else if (mode == 'GET_REMOVE' || mode == 'REMOVE') {
      var functionName = Blockly.gijack.provideFunction_(
          'lists_remove_from_end',
          [ 'function ' + Blockly.gijack.FUNCTION_NAME_PLACEHOLDER_ +
              '(list, x) {',
            '  x = list.length - x;',
            '  return list.splice(x, 1)[0];',
            '}']);
      code = functionName + '(' + list + ', ' + at + ')';
      if (mode == 'GET_REMOVE') {
        return [code, Blockly.gijack.ORDER_FUNCTION_CALL];
      } else if (mode == 'REMOVE') {
        return code + ';\n';
      }
    }
  } else if (where == 'RANDOM') {
    var functionName = Blockly.gijack.provideFunction_(
        'lists_get_random_item',
        [ 'function ' + Blockly.gijack.FUNCTION_NAME_PLACEHOLDER_ +
            '(list, remove) {',
          '  var x = Math.floor(Math.random() * list.length);',
          '  if (remove) {',
          '    return list.splice(x, 1)[0];',
          '  } else {',
          '    return list[x];',
          '  }',
          '}']);
    code = functionName + '(' + list + ', ' + (mode != 'GET') + ')';
    if (mode == 'GET' || mode == 'GET_REMOVE') {
      return [code, Blockly.gijack.ORDER_FUNCTION_CALL];
    } else if (mode == 'REMOVE') {
      return code + ';\n';
    }
  }
  throw 'Unhandled combination (lists_getIndex).';
};

Blockly.gijack['lists_setIndex'] = function(block) {
  // Set element at index.
  // Note: Until February 2013 this block did not have MODE or WHERE inputs.
  var list = Blockly.gijack.valueToCode(block, 'LIST',
      Blockly.gijack.ORDER_MEMBER) || '[]';
  var mode = block.getFieldValue('MODE') || 'GET';
  var where = block.getFieldValue('WHERE') || 'FROM_START';
  var at = Blockly.gijack.valueToCode(block, 'AT',
      Blockly.gijack.ORDER_NONE) || '1';
  var value = Blockly.gijack.valueToCode(block, 'TO',
      Blockly.gijack.ORDER_ASSIGNMENT) || 'null';
  // Cache non-trivial values to variables to prevent repeated look-ups.
  // Closure, which accesses and modifies 'list'.
  function cacheList() {
    if (list.match(/^\w+$/)) {
      return '';
    }
    var listVar = Blockly.gijack.variableDB_.getDistinctName(
        'tmp_list', Blockly.Variables.NAME_TYPE);
    var code = 'var ' + listVar + ' = ' + list + ';\n';
    list = listVar;
    return code;
  }
  if (where == 'FIRST') {
    if (mode == 'SET') {
      return list + '[0] = ' + value + ';\n';
    } else if (mode == 'INSERT') {
      return list + '.unshift(' + value + ');\n';
    }
  } else if (where == 'LAST') {
    if (mode == 'SET') {
      var code = cacheList();
      code += list + '[' + list + '.length - 1] = ' + value + ';\n';
      return code;
    } else if (mode == 'INSERT') {
      return list + '.push(' + value + ');\n';
    }
  } else if (where == 'FROM_START') {
    // Blockly uses one-based indicies.
    if (Blockly.isNumber(at)) {
      // If the index is a naked number, decrement it right now.
      at = parseFloat(at) - 1;
    } else {
      // If the index is dynamic, decrement it in code.
      at += ' - 1';
    }
    if (mode == 'SET') {
      return list + '[' + at + '] = ' + value + ';\n';
    } else if (mode == 'INSERT') {
      return list + '.splice(' + at + ', 0, ' + value + ');\n';
    }
  } else if (where == 'FROM_END') {
    var code = cacheList();
    if (mode == 'SET') {
      code += list + '[' + list + '.length - ' + at + '] = ' + value + ';\n';
      return code;
    } else if (mode == 'INSERT') {
      code += list + '.splice(' + list + '.length - ' + at + ', 0, ' + value +
          ');\n';
      return code;
    }
  } else if (where == 'RANDOM') {
    var code = cacheList();
    var xVar = Blockly.gijack.variableDB_.getDistinctName(
        'tmp_x', Blockly.Variables.NAME_TYPE);
    code += 'var ' + xVar + ' = Math.floor(Math.random() * ' + list +
        '.length);\n';
    if (mode == 'SET') {
      code += list + '[' + xVar + '] = ' + value + ';\n';
      return code;
    } else if (mode == 'INSERT') {
      code += list + '.splice(' + xVar + ', 0, ' + value + ');\n';
      return code;
    }
  }
  throw 'Unhandled combination (lists_setIndex).';
};

Blockly.gijack['lists_getSublist'] = function(block) {
  // Get sublist.
  var list = Blockly.gijack.valueToCode(block, 'LIST',
      Blockly.gijack.ORDER_MEMBER) || '[]';
  var where1 = block.getFieldValue('WHERE1');
  var where2 = block.getFieldValue('WHERE2');
  var at1 = Blockly.gijack.valueToCode(block, 'AT1',
      Blockly.gijack.ORDER_NONE) || '1';
  var at2 = Blockly.gijack.valueToCode(block, 'AT2',
      Blockly.gijack.ORDER_NONE) || '1';
  if (where1 == 'FIRST' && where2 == 'LAST') {
    var code = list + '.concat()';
  } else {
    var functionName = Blockly.gijack.provideFunction_(
        'lists_get_sublist',
        [ 'function ' + Blockly.gijack.FUNCTION_NAME_PLACEHOLDER_ +
            '(list, where1, at1, where2, at2) {',
          '  function getAt(where, at) {',
          '    if (where == \'FROM_START\') {',
          '      at--;',
          '    } else if (where == \'FROM_END\') {',
          '      at = list.length - at;',
          '    } else if (where == \'FIRST\') {',
          '      at = 0;',
          '    } else if (where == \'LAST\') {',
          '      at = list.length - 1;',
          '    } else {',
          '      throw \'Unhandled option (lists_getSublist).\';',
          '    }',
          '    return at;',
          '  }',
          '  at1 = getAt(where1, at1);',
          '  at2 = getAt(where2, at2) + 1;',
          '  return list.slice(at1, at2);',
          '}']);
    var code = functionName + '(' + list + ', \'' +
        where1 + '\', ' + at1 + ', \'' + where2 + '\', ' + at2 + ')';
  }
  return [code, Blockly.gijack.ORDER_FUNCTION_CALL];
};

Blockly.gijack['lists_split'] = function(block) {
  // Block for splitting text into a list, or joining a list into text.
  var value_input = Blockly.gijack.valueToCode(block, 'INPUT',
      Blockly.gijack.ORDER_MEMBER);
  var value_delim = Blockly.gijack.valueToCode(block, 'DELIM',
      Blockly.gijack.ORDER_NONE) || '\'\'';
  var mode = block.getFieldValue('MODE');
  if (mode == 'SPLIT') {
    if (!value_input) {
      value_input = '\'\'';
    }
    var functionName = 'split';
  } else if (mode == 'JOIN') {
    if (!value_input) {
      value_input = '[]';
    }
    var functionName = 'join';
  } else {
    throw 'Unknown mode: ' + mode;
  }
  var code = value_input + '.' + functionName + '(' + value_delim + ')';
  return [code, Blockly.gijack.ORDER_FUNCTION_CALL];
};

Blockly.gijack['lists_create'] = function(block) {
  var dropdown_type = block.getFieldValue('type');
  var text_listname = block.getFieldValue('ListName');
  var text_listsize = block.getFieldValue('ListSize');
  // TODO: Assemble gijack into code variable.
  var code = dropdown_type + ' ' + text_listname+ ' [' + text_listsize + '];\n';
  return code;
};


Blockly.gijack['lists_assign'] = function(block) {
  var text_listname = block.getFieldValue('listname');
  var value_value = Blockly.gijack.valueToCode(block, 'value', Blockly.gijack.ORDER_ATOMIC);
  var argument0 = Blockly.gijack.valueToCode(block, 'value',
      Blockly.gijack.ORDER_ASSIGNMENT) || 'NULL';
  var statements_expression = Blockly.gijack.statementToCode(block, 'expression');
  statements_expression  = Blockly.gijack.addLoopTrap(statements_expression, block.id);
  // TODO: Assemble gijack into code variable.
  var code = text_listname + ' [' + statements_expression + ']' + ' = ' + argument0 + '\n'; 

  return code;
};


Blockly.gijack['lists_assign2'] = function(block) {
  var text_listname = block.getFieldValue('listname');
  var value_value = Blockly.gijack.valueToCode(block, 'value', Blockly.gijack.ORDER_ATOMIC);
  var argument0 = Blockly.gijack.valueToCode(block, 'value',
      Blockly.gijack.ORDER_ASSIGNMENT) || 'NULL'; 
  var value_expression = Blockly.gijack.valueToCode(block, 'expression', Blockly.gijack.ORDER_ATOMIC);
  var argument1 = Blockly.gijack.valueToCode(block, 'expression',
      Blockly.gijack.ORDER_ASSIGNMENT) || 'NULL';
  // TODO: Assemble gijack into code variable.
  var code = text_listname + ' [' + argument1 + ']' + ' = ' + argument0 + '\n'; 

  return code;
};


Blockly.gijack['list_dec'] = function(block) {
  var dropdown_tipo = block.getFieldValue('tipo');
  var text_nombre = block.getFieldValue('nombre');
  var value_tama_o = Blockly.gijack.valueToCode(block, 'tamaño', Blockly.gijack.ORDER_ATOMIC);
  // TODO: Assemble gijack into code variable.
  code = dropdown_tipo+' '+text_nombre+'['+value_tama_o+'];\n';
  return code;
};

Blockly.gijack['lista_asig'] = function(block) {
  var text_id = block.getFieldValue('id');
  var text_expresion = block.getFieldValue('expresion');
  var value_valor = Blockly.gijack.valueToCode(block, 'valor', Blockly.gijack.ORDER_ATOMIC);
  // TODO: Assemble gijack into code variable.
  var code = text_id+'['+text_expresion+']='+value_valor+';\n';
  return code;
};