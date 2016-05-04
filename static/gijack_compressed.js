// Do not edit this file; automatically generated by build.py.
'use strict';


// Copyright 2016 Google Inc.  Apache License 2.0
Blockly.gijack=new Blockly.Generator("gijack");Blockly.gijack.addReservedWords("Blockly,break,case,catch,continue,debugger,default,delete,do,else,finally,for,function,if,in,instanceof,new,return,switch,this,throw,try,typeof,var,void,while,with,class,enum,export,extends,import,super,implements,interface,let,package,private,protected,public,static,yield,const,null,true,false,Array,ArrayBuffer,Boolean,Date,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Error,eval,EvalError,Float32Array,Float64Array,Function,Infinity,Int16Array,Int32Array,Int8Array,isFinite,isNaN,Iterator,JSON,Math,NaN,Number,Object,parseFloat,parseInt,RangeError,ReferenceError,RegExp,StopIteration,String,SyntaxError,TypeError,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,undefined,uneval,URIError,applicationCache,closed,Components,content,_content,controllers,crypto,defaultStatus,dialogArguments,directories,document,frameElement,frames,fullScreen,globalStorage,history,innerHeight,innerWidth,length,location,locationbar,localStorage,menubar,messageManager,mozAnimationStartTime,mozInnerScreenX,mozInnerScreenY,mozPaintCount,name,navigator,opener,outerHeight,outerWidth,pageXOffset,pageYOffset,parent,performance,personalbar,pkcs11,returnValue,screen,screenX,screenY,scrollbars,scrollMaxX,scrollMaxY,scrollX,scrollY,self,sessionStorage,sidebar,status,statusbar,toolbar,top,URL,window,addEventListener,alert,atob,back,blur,btoa,captureEvents,clearImmediate,clearInterval,clearTimeout,close,confirm,disableExternalCapture,dispatchEvent,dump,enableExternalCapture,escape,find,focus,forward,GeckoActiveXObject,getAttention,getAttentionWithCycleCount,getComputedStyle,getSelection,home,matchMedia,maximize,minimize,moveBy,moveTo,mozRequestAnimationFrame,open,openDialog,postMessage,print,prompt,QueryInterface,releaseEvents,removeEventListener,resizeBy,resizeTo,restore,routeEvent,scroll,scrollBy,scrollByLines,scrollByPages,scrollTo,setCursor,setImmediate,setInterval,setResizable,setTimeout,showModalDialog,sizeToContent,stop,unescape,updateCommands,XPCNativeWrapper,XPCSafeJSObjectWrapper,onabort,onbeforeunload,onblur,onchange,onclick,onclose,oncontextmenu,ondevicemotion,ondeviceorientation,ondragdrop,onerror,onfocus,onhashchange,onkeydown,onkeypress,onkeyup,onload,onmousedown,onmousemove,onmouseout,onmouseover,onmouseup,onmozbeforepaint,onpaint,onpopstate,onreset,onresize,onscroll,onselect,onsubmit,onunload,onpageshow,onpagehide,Image,Option,Worker,Event,Range,File,FileReader,Blob,BlobBuilder,Attr,CDATASection,CharacterData,Comment,console,DocumentFragment,DocumentType,DomConfiguration,DOMError,DOMErrorHandler,DOMException,DOMImplementation,DOMImplementationList,DOMImplementationRegistry,DOMImplementationSource,DOMLocator,DOMObject,DOMString,DOMStringList,DOMTimeStamp,DOMUserData,Entity,EntityReference,MediaQueryList,MediaQueryListListener,NameList,NamedNodeMap,Node,NodeFilter,NodeIterator,NodeList,Notation,Plugin,PluginArray,ProcessingInstruction,SharedWorker,Text,TimeRanges,Treewalker,TypeInfo,UserDataHandler,Worker,WorkerGlobalScope,HTMLDocument,HTMLElement,HTMLAnchorElement,HTMLAppletElement,HTMLAudioElement,HTMLAreaElement,HTMLBaseElement,HTMLBaseFontElement,HTMLBodyElement,HTMLBRElement,HTMLButtonElement,HTMLCanvasElement,HTMLDirectoryElement,HTMLDivElement,HTMLDListElement,HTMLEmbedElement,HTMLFieldSetElement,HTMLFontElement,HTMLFormElement,HTMLFrameElement,HTMLFrameSetElement,HTMLHeadElement,HTMLHeadingElement,HTMLHtmlElement,HTMLHRElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLKeygenElement,HTMLLabelElement,HTMLLIElement,HTMLLinkElement,HTMLMapElement,HTMLMenuElement,HTMLMetaElement,HTMLModElement,HTMLObjectElement,HTMLOListElement,HTMLOptGroupElement,HTMLOptionElement,HTMLOutputElement,HTMLParagraphElement,HTMLParamElement,HTMLPreElement,HTMLQuoteElement,HTMLScriptElement,HTMLSelectElement,HTMLSourceElement,HTMLSpanElement,HTMLStyleElement,HTMLTableElement,HTMLTableCaptionElement,HTMLTableCellElement,HTMLTableDataCellElement,HTMLTableHeaderCellElement,HTMLTableColElement,HTMLTableRowElement,HTMLTableSectionElement,HTMLTextAreaElement,HTMLTimeElement,HTMLTitleElement,HTMLTrackElement,HTMLUListElement,HTMLUnknownElement,HTMLVideoElement,HTMLCanvasElement,CanvasRenderingContext2D,CanvasGradient,CanvasPattern,TextMetrics,ImageData,CanvasPixelArray,HTMLAudioElement,HTMLVideoElement,NotifyAudioAvailableEvent,HTMLCollection,HTMLAllCollection,HTMLFormControlsCollection,HTMLOptionsCollection,HTMLPropertiesCollection,DOMTokenList,DOMSettableTokenList,DOMStringMap,RadioNodeList,SVGDocument,SVGElement,SVGAElement,SVGAltGlyphElement,SVGAltGlyphDefElement,SVGAltGlyphItemElement,SVGAnimationElement,SVGAnimateElement,SVGAnimateColorElement,SVGAnimateMotionElement,SVGAnimateTransformElement,SVGSetElement,SVGCircleElement,SVGClipPathElement,SVGColorProfileElement,SVGCursorElement,SVGDefsElement,SVGDescElement,SVGEllipseElement,SVGFilterElement,SVGFilterPrimitiveStandardAttributes,SVGFEBlendElement,SVGFEColorMatrixElement,SVGFEComponentTransferElement,SVGFECompositeElement,SVGFEConvolveMatrixElement,SVGFEDiffuseLightingElement,SVGFEDisplacementMapElement,SVGFEDistantLightElement,SVGFEFloodElement,SVGFEGaussianBlurElement,SVGFEImageElement,SVGFEMergeElement,SVGFEMergeNodeElement,SVGFEMorphologyElement,SVGFEOffsetElement,SVGFEPointLightElement,SVGFESpecularLightingElement,SVGFESpotLightElement,SVGFETileElement,SVGFETurbulenceElement,SVGComponentTransferFunctionElement,SVGFEFuncRElement,SVGFEFuncGElement,SVGFEFuncBElement,SVGFEFuncAElement,SVGFontElement,SVGFontFaceElement,SVGFontFaceFormatElement,SVGFontFaceNameElement,SVGFontFaceSrcElement,SVGFontFaceUriElement,SVGForeignObjectElement,SVGGElement,SVGGlyphElement,SVGGlyphRefElement,SVGGradientElement,SVGLinearGradientElement,SVGRadialGradientElement,SVGHKernElement,SVGImageElement,SVGLineElement,SVGMarkerElement,SVGMaskElement,SVGMetadataElement,SVGMissingGlyphElement,SVGMPathElement,SVGPathElement,SVGPatternElement,SVGPolylineElement,SVGPolygonElement,SVGRectElement,SVGScriptElement,SVGStopElement,SVGStyleElement,SVGSVGElement,SVGSwitchElement,SVGSymbolElement,SVGTextElement,SVGTextPathElement,SVGTitleElement,SVGTRefElement,SVGTSpanElement,SVGUseElement,SVGViewElement,SVGVKernElement,SVGAngle,SVGColor,SVGICCColor,SVGElementInstance,SVGElementInstanceList,SVGLength,SVGLengthList,SVGMatrix,SVGNumber,SVGNumberList,SVGPaint,SVGPoint,SVGPointList,SVGPreserveAspectRatio,SVGRect,SVGStringList,SVGTransform,SVGTransformList,SVGAnimatedAngle,SVGAnimatedBoolean,SVGAnimatedEnumeration,SVGAnimatedInteger,SVGAnimatedLength,SVGAnimatedLengthList,SVGAnimatedNumber,SVGAnimatedNumberList,SVGAnimatedPreserveAspectRatio,SVGAnimatedRect,SVGAnimatedString,SVGAnimatedTransformList,SVGPathSegList,SVGPathSeg,SVGPathSegArcAbs,SVGPathSegArcRel,SVGPathSegClosePath,SVGPathSegCurvetoCubicAbs,SVGPathSegCurvetoCubicRel,SVGPathSegCurvetoCubicSmoothAbs,SVGPathSegCurvetoCubicSmoothRel,SVGPathSegCurvetoQuadraticAbs,SVGPathSegCurvetoQuadraticRel,SVGPathSegCurvetoQuadraticSmoothAbs,SVGPathSegCurvetoQuadraticSmoothRel,SVGPathSegLinetoAbs,SVGPathSegLinetoHorizontalAbs,SVGPathSegLinetoHorizontalRel,SVGPathSegLinetoRel,SVGPathSegLinetoVerticalAbs,SVGPathSegLinetoVerticalRel,SVGPathSegMovetoAbs,SVGPathSegMovetoRel,ElementTimeControl,TimeEvent,SVGAnimatedPathData,SVGAnimatedPoints,SVGColorProfileRule,SVGCSSRule,SVGExternalResourcesRequired,SVGFitToViewBox,SVGLangSpace,SVGLocatable,SVGRenderingIntent,SVGStylable,SVGTests,SVGTextContentElement,SVGTextPositioningElement,SVGTransformable,SVGUnitTypes,SVGURIReference,SVGViewSpec,SVGZoomAndPan");
Blockly.gijack.ORDER_ATOMIC=0;Blockly.gijack.ORDER_MEMBER=1;Blockly.gijack.ORDER_NEW=1;Blockly.gijack.ORDER_FUNCTION_CALL=2;Blockly.gijack.ORDER_INCREMENT=3;Blockly.gijack.ORDER_DECREMENT=3;Blockly.gijack.ORDER_LOGICAL_NOT=4;Blockly.gijack.ORDER_BITWISE_NOT=4;Blockly.gijack.ORDER_UNARY_PLUS=4;Blockly.gijack.ORDER_UNARY_NEGATION=4;Blockly.gijack.ORDER_TYPEOF=4;Blockly.gijack.ORDER_VOID=4;Blockly.gijack.ORDER_DELETE=4;Blockly.gijack.ORDER_MULTIPLICATION=5;Blockly.gijack.ORDER_DIVISION=5;
Blockly.gijack.ORDER_MODULUS=5;Blockly.gijack.ORDER_ADDITION=6;Blockly.gijack.ORDER_SUBTRACTION=6;Blockly.gijack.ORDER_BITWISE_SHIFT=7;Blockly.gijack.ORDER_RELATIONAL=8;Blockly.gijack.ORDER_IN=8;Blockly.gijack.ORDER_INSTANCEOF=8;Blockly.gijack.ORDER_EQUALITY=9;Blockly.gijack.ORDER_BITWISE_AND=10;Blockly.gijack.ORDER_BITWISE_XOR=11;Blockly.gijack.ORDER_BITWISE_OR=12;Blockly.gijack.ORDER_LOGICAL_AND=13;Blockly.gijack.ORDER_LOGICAL_OR=14;Blockly.gijack.ORDER_CONDITIONAL=15;
Blockly.gijack.ORDER_ASSIGNMENT=16;Blockly.gijack.ORDER_COMMA=17;Blockly.gijack.ORDER_NONE=99;Blockly.gijack.init=function(a){Blockly.gijack.definitions_=Object.create(null);Blockly.gijack.functionNames_=Object.create(null);Blockly.gijack.variableDB_?Blockly.gijack.variableDB_.reset():Blockly.gijack.variableDB_=new Blockly.Names(Blockly.gijack.RESERVED_WORDS_)};
Blockly.gijack.finish=function(a){var b=[],c;for(c in Blockly.gijack.definitions_)b.push(Blockly.gijack.definitions_[c]);delete Blockly.gijack.definitions_;delete Blockly.gijack.functionNames_;Blockly.gijack.variableDB_.reset();return b.join("\n\n")+"\n\n\n"+a};Blockly.gijack.scrubNakedValue=function(a){return"local _ = "+a+"\n"};Blockly.gijack.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/'/g,"\\'");return"'"+a+"'"};
Blockly.gijack.scrub_=function(a,b){var c="";if(!a.outputConnection||!a.outputConnection.targetConnection){var d=a.getCommentText();d&&(c+=Blockly.gijack.prefixLines(d,"-- ")+"\n");for(var e=0;e<a.inputList.length;e++)a.inputList[e].type==Blockly.INPUT_VALUE&&(d=a.inputList[e].connection.targetBlock())&&(d=Blockly.gijack.allNestedComments(d))&&(c+=Blockly.gijack.prefixLines(d,"-- "))}e=a.nextConnection&&a.nextConnection.targetBlock();e=Blockly.gijack.blockToCode(e);return c+b+e};
// Copyright 2012 Google Inc.  Apache License 2.0
Blockly.gijack.procedures={};
Blockly.gijack.procedures_defreturn=function(a){var b=Blockly.gijack.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),c=Blockly.gijack.statementToCode(a,"STACK");Blockly.gijack.STATEMENT_PREFIX&&(c=Blockly.gijack.prefixLines(Blockly.gijack.STATEMENT_PREFIX.replace(/%1/g,"'"+a.id+"'"),Blockly.gijack.INDENT)+c);Blockly.gijack.INFINITE_LOOP_TRAP&&(c=Blockly.gijack.INFINITE_LOOP_TRAP.replace(/%1/g,"'"+a.id+"'")+c);var d=Blockly.gijack.valueToCode(a,"RETURN",Blockly.gijack.ORDER_NONE)||
"";d&&(d="  return "+d+";\n");for(var e=[],f=0;f<a.arguments_.length;f++)e[f]=Blockly.gijack.variableDB_.getName(a.arguments_[f],Blockly.Variables.NAME_TYPE);c="function "+b+"("+e.join(", ")+") {\n"+c+d+"}";c=Blockly.gijack.scrub_(a,c);Blockly.gijack.definitions_[b]=c;return null};Blockly.gijack.procedures_defnoreturn=Blockly.gijack.procedures_defreturn;
Blockly.gijack.procedures_callreturn=function(a){for(var b=Blockly.gijack.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),c=[],d=0;d<a.arguments_.length;d++)c[d]=Blockly.gijack.valueToCode(a,"ARG"+d,Blockly.gijack.ORDER_COMMA)||"null";return[b+"("+c.join(", ")+")",Blockly.gijack.ORDER_FUNCTION_CALL]};
Blockly.gijack.procedures_callnoreturn=function(a){for(var b=Blockly.gijack.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),c=[],d=0;d<a.arguments_.length;d++)c[d]=Blockly.gijack.valueToCode(a,"ARG"+d,Blockly.gijack.ORDER_COMMA)||"null";return b+"("+c.join(", ")+");\n"};
Blockly.gijack.procedures_ifreturn=function(a){var b="if ("+(Blockly.gijack.valueToCode(a,"CONDITION",Blockly.gijack.ORDER_NONE)||"false")+") {\n";a.hasReturnValue_?(a=Blockly.gijack.valueToCode(a,"VALUE",Blockly.gijack.ORDER_NONE)||"null",b+="  return "+a+";\n"):b+="  return;\n";return b+"}\n"};
Blockly.gijack.procedures_expresion=function(a){var b=Blockly.gijack.statementToCode(a,"nom"),b=Blockly.gijack.addLoopTrap(b,a.id),c=Blockly.gijack.statementToCode(a,"nom"),c=Blockly.gijack.addLoopTrap(b,a.id);return["("+c+")",Blockly.gijack.ORDER_NONE]};Blockly.gijack.procedures_express=function(a){var b=Blockly.gijack.statementToCode(a,"NAME"),b=Blockly.gijack.addLoopTrap(b,a.id);return"("+b+")"};
Blockly.gijack.proced_exp=function(a){Blockly.gijack.valueToCode(a,"expression",Blockly.gijack.ORDER_ATOMIC);return"("+(Blockly.gijack.valueToCode(a,"expression",Blockly.gijack.ORDER_ASSIGNMENT)||"NULL")+")"};Blockly.gijack.create_main=function(a){Blockly.gijack.valueToCode(a,"expression",Blockly.gijack.ORDER_ATOMIC);return"int main{\n"+(Blockly.gijack.valueToCode(a,"expression",Blockly.gijack.ORDER_ASSIGNMENT)||"NULL")+"\n}"};
Blockly.gijack.procedures_main2=function(a){var b=Blockly.gijack.statementToCode(a,"NAME"),b=Blockly.gijack.addLoopTrap(b,a.id);return"int main{\n"+b+"\n}"};Blockly.gijack.pro_exp=function(a){Blockly.gijack.valueToCode(a,"NAME",Blockly.gijack.ORDER_ATOMIC);return"("+(Blockly.gijack.valueToCode(a,"NAME",Blockly.gijack.ORDER_ASSIGNMENT)||"NULL")+")"};
Blockly.gijack.proc_arg=function(a){var b=a.getFieldValue("tipo"),c=a.getFieldValue("nombre");a=Blockly.gijack.valueToCode(a,"arg",Blockly.gijack.ORDER_ATOMIC);return[""==a?b+" "+c:b+" "+c+", "+a,Blockly.gijack.ORDER_NONE]};Blockly.gijack.proc=function(a){var b=a.getFieldValue("tipo"),c=a.getFieldValue("nombre"),d=Blockly.gijack.valueToCode(a,"NAME",Blockly.gijack.ORDER_ATOMIC);a=Blockly.gijack.statementToCode(a,"stats");return"funcion "+b+" "+c+" ("+d+"){\n"+a+"\n}"};
Blockly.gijack["return"]=function(a){return"return "+Blockly.gijack.valueToCode(a,"returnVal",Blockly.gijack.ORDER_ATOMIC)+";\n"};Blockly.gijack.func_call=function(a){var b=a.getFieldValue("NAME");a=Blockly.gijack.valueToCode(a,"return",Blockly.gijack.ORDER_ATOMIC);return b+"("+a+");\n"};Blockly.gijack.func_calls=function(a){var b=a.getFieldValue("NAME");a=Blockly.gijack.valueToCode(a,"return",Blockly.gijack.ORDER_ATOMIC);return[b+"("+a+")",Blockly.gijack.ORDER_NONE]};Blockly.gijack.loops={};
Blockly.gijack.controls_repeat_ext=function(a){var b=a.getField("TIMES")?String(Number(a.getFieldValue("TIMES"))):Blockly.gijack.valueToCode(a,"TIMES",Blockly.gijack.ORDER_ASSIGNMENT)||"0",c=Blockly.gijack.statementToCode(a,"DO"),c=Blockly.gijack.addLoopTrap(c,a.id);a="";var d=Blockly.gijack.variableDB_.getDistinctName("count",Blockly.Variables.NAME_TYPE),e=b;b.match(/^\w+$/)||Blockly.isNumber(b)||(e=Blockly.gijack.variableDB_.getDistinctName("repeat_end",Blockly.Variables.NAME_TYPE),a+="var "+e+
" = "+b+";\n");return a+("for (int "+d+" = 0; "+d+" < "+e+"; "+d+"++) {\n"+c+"}\n")};Blockly.gijack.controls_repeat=Blockly.gijack.controls_repeat_ext;Blockly.gijack.controls_whileUntil=function(a){var b="UNTIL"==a.getFieldValue("MODE"),c=Blockly.gijack.valueToCode(a,"BOOL",b?Blockly.gijack.ORDER_LOGICAL_NOT:Blockly.gijack.ORDER_NONE)||"false",d=Blockly.gijack.statementToCode(a,"DO"),d=Blockly.gijack.addLoopTrap(d,a.id);b&&(c="!"+c);return"while ("+c+") {\n"+d+"}\n"};
Blockly.gijack.controls_for=function(a){var b=Blockly.gijack.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),c=Blockly.gijack.valueToCode(a,"FROM",Blockly.gijack.ORDER_ASSIGNMENT)||"0",d=Blockly.gijack.valueToCode(a,"TO",Blockly.gijack.ORDER_ASSIGNMENT)||"0",e=Blockly.gijack.valueToCode(a,"BY",Blockly.gijack.ORDER_ASSIGNMENT)||"1",f=Blockly.gijack.statementToCode(a,"DO"),f=Blockly.gijack.addLoopTrap(f,a.id);if(Blockly.isNumber(c)&&Blockly.isNumber(d)&&Blockly.isNumber(e)){var g=
parseFloat(c)<=parseFloat(d);a="for ("+b+" = "+c+"; "+b+(g?" <= ":" >= ")+d+"; "+b;b=Math.abs(parseFloat(e));a=(1==b?a+(g?"++":"--"):a+((g?" += ":" -= ")+b))+(") {\n"+f+"}\n")}else a="",g=c,c.match(/^\w+$/)||Blockly.isNumber(c)||(g=Blockly.gijack.variableDB_.getDistinctName(b+"_start",Blockly.Variables.NAME_TYPE),a+="var "+g+" = "+c+";\n"),c=d,d.match(/^\w+$/)||Blockly.isNumber(d)||(c=Blockly.gijack.variableDB_.getDistinctName(b+"_end",Blockly.Variables.NAME_TYPE),a+="var "+c+" = "+d+";\n"),d=Blockly.gijack.variableDB_.getDistinctName(b+
"_inc",Blockly.Variables.NAME_TYPE),a+="var "+d+" = ",a=Blockly.isNumber(e)?a+(Math.abs(e)+";\n"):a+("Math.abs("+e+");\n"),a+="if ("+g+" > "+c+") {\n",a+=Blockly.gijack.INDENT+d+" = -"+d+";\n",a+="}\n",a+="for ("+b+" = "+g+";\n     "+d+" >= 0 ? "+b+" <= "+c+" : "+b+" >= "+c+";\n     "+b+" += "+d+") {\n"+f+"}\n";return a};
Blockly.gijack.controls_flow_statements=function(a){switch(a.getFieldValue("FLOW")){case "BREAK":return"break;\n";case "CONTINUE":return"continue;\n"}throw"Unknown flow statement.";};Blockly.gijack.ciclos_dowhile=function(a){var b=Blockly.gijack.statementToCode(a,"do"),b=Blockly.gijack.addLoopTrap(b,a.id);a=Blockly.gijack.valueToCode(a,"while",Blockly.gijack.ORDER_ATOMIC);return"do {\n"+b+"}\nwhile ("+a+");\n"};
Blockly.gijack["for"]=function(a){var b=a.getFieldValue("i"),c=a.getFieldValue("init"),d=a.getFieldValue("expression"),e=a.getFieldValue("op");a=Blockly.gijack.statementToCode(a,"stats");return"for("+b+" = "+c+"; "+d+";"+e+";) {\n"+a+"\n }\n"};Blockly.gijack.logic={};Blockly.gijack.controls_if=function(a){for(var b=0,c=Blockly.gijack.valueToCode(a,"IF"+b,Blockly.gijack.ORDER_NONE)||"false",d=Blockly.gijack.statementToCode(a,"DO"+b),e="if ("+c+") {\n"+d+"}",b=1;b<=a.elseifCount_;b++)c=Blockly.gijack.valueToCode(a,"IF"+b,Blockly.gijack.ORDER_NONE)||"false",d=Blockly.gijack.statementToCode(a,"DO"+b),e+=" else if ("+c+") {\n"+d+"}";a.elseCount_&&(d=Blockly.gijack.statementToCode(a,"ELSE"),e+=" else {\n"+d+"}");return e+"\n"};
Blockly.gijack.logic_compare=function(a){var b={EQ:"==",NEQ:"!=",LT:"<",LTE:"<=",GT:">",GTE:">="}[a.getFieldValue("OP")],c="=="==b||"!="==b?Blockly.gijack.ORDER_EQUALITY:Blockly.gijack.ORDER_RELATIONAL,d=Blockly.gijack.valueToCode(a,"A",c)||"0";a=Blockly.gijack.valueToCode(a,"B",c)||"0";return[d+" "+b+" "+a,c]};
Blockly.gijack.logic_operation=function(a){var b="AND"==a.getFieldValue("OP")?"&&":"||",c="&&"==b?Blockly.gijack.ORDER_LOGICAL_AND:Blockly.gijack.ORDER_LOGICAL_OR,d=Blockly.gijack.valueToCode(a,"A",c);a=Blockly.gijack.valueToCode(a,"B",c);if(d||a){var e="&&"==b?"true":"false";d||(d=e);a||(a=e)}else a=d="false";return[d+" "+b+" "+a,c]};Blockly.gijack.logic_negate=function(a){var b=Blockly.gijack.ORDER_LOGICAL_NOT;return["!"+(Blockly.gijack.valueToCode(a,"BOOL",b)||"true"),b]};
Blockly.gijack.logic_boolean=function(a){return["TRUE"==a.getFieldValue("BOOL")?".TRUE":".FALSE",Blockly.gijack.ORDER_ATOMIC]};Blockly.gijack.math={};Blockly.gijack.math_number=function(a){return[parseFloat(a.getFieldValue("NUM")),Blockly.gijack.ORDER_ATOMIC]};
Blockly.gijack.math_arithmetic=function(a){var b={ADD:[" + ",Blockly.gijack.ORDER_ADDITION],MINUS:[" - ",Blockly.gijack.ORDER_SUBTRACTION],MULTIPLY:[" x ",Blockly.gijack.ORDER_MULTIPLICATION],DIVIDE:[" / ",Blockly.gijack.ORDER_DIVISION]}[a.getFieldValue("OP")],c=b[0],b=b[1],d=Blockly.gijack.valueToCode(a,"A",b)||"0";a=Blockly.gijack.valueToCode(a,"B",b)||"0";return c?[d+c+a,b]:["Math.pow("+d+", "+a+")",Blockly.gijack.ORDER_FUNCTION_CALL]};
Blockly.gijack.math_modulo=function(a){var b=Blockly.gijack.valueToCode(a,"DIVIDEND",Blockly.gijack.ORDER_MODULUS)||"0";a=Blockly.gijack.valueToCode(a,"DIVISOR",Blockly.gijack.ORDER_MODULUS)||"0";return[b+" % "+a,Blockly.gijack.ORDER_MODULUS]};Blockly.gijack.lists={};Blockly.gijack.lists_create_empty=function(a){return["[]",Blockly.gijack.ORDER_ATOMIC]};Blockly.gijack.lists_create_with=function(a){for(var b=Array(a.itemCount_),c=0;c<a.itemCount_;c++)b[c]=Blockly.gijack.valueToCode(a,"ADD"+c,Blockly.gijack.ORDER_COMMA)||"null";b="["+b.join(", ")+"]";return[b,Blockly.gijack.ORDER_ATOMIC]};
Blockly.gijack.lists_repeat=function(a){var b=Blockly.gijack.provideFunction_("lists_repeat",["function "+Blockly.gijack.FUNCTION_NAME_PLACEHOLDER_+"(value, n) {","  var array = [];","  for (var i = 0; i < n; i++) {","    array[i] = value;","  }","  return array;","}"]),c=Blockly.gijack.valueToCode(a,"ITEM",Blockly.gijack.ORDER_COMMA)||"null";a=Blockly.gijack.valueToCode(a,"NUM",Blockly.gijack.ORDER_COMMA)||"0";return[b+"("+c+", "+a+")",Blockly.gijack.ORDER_FUNCTION_CALL]};
Blockly.gijack.lists_length=function(a){return[(Blockly.gijack.valueToCode(a,"VALUE",Blockly.gijack.ORDER_FUNCTION_CALL)||"[]")+".length",Blockly.gijack.ORDER_MEMBER]};Blockly.gijack.lists_isEmpty=function(a){return["!"+(Blockly.gijack.valueToCode(a,"VALUE",Blockly.gijack.ORDER_MEMBER)||"[]")+".length",Blockly.gijack.ORDER_LOGICAL_NOT]};
Blockly.gijack.lists_indexOf=function(a){var b="FIRST"==a.getFieldValue("END")?"indexOf":"lastIndexOf",c=Blockly.gijack.valueToCode(a,"FIND",Blockly.gijack.ORDER_NONE)||"''";return[(Blockly.gijack.valueToCode(a,"VALUE",Blockly.gijack.ORDER_MEMBER)||"[]")+"."+b+"("+c+") + 1",Blockly.gijack.ORDER_MEMBER]};
Blockly.gijack.lists_getIndex=function(a){var b=a.getFieldValue("MODE")||"GET",c=a.getFieldValue("WHERE")||"FROM_START",d=Blockly.gijack.valueToCode(a,"AT",Blockly.gijack.ORDER_UNARY_NEGATION)||"1";a=Blockly.gijack.valueToCode(a,"VALUE",Blockly.gijack.ORDER_MEMBER)||"[]";if("FIRST"==c){if("GET"==b)return[a+"[0]",Blockly.gijack.ORDER_MEMBER];if("GET_REMOVE"==b)return[a+".shift()",Blockly.gijack.ORDER_MEMBER];if("REMOVE"==b)return a+".shift();\n"}else if("LAST"==c){if("GET"==b)return[a+".slice(-1)[0]",
Blockly.gijack.ORDER_MEMBER];if("GET_REMOVE"==b)return[a+".pop()",Blockly.gijack.ORDER_MEMBER];if("REMOVE"==b)return a+".pop();\n"}else if("FROM_START"==c){d=Blockly.isNumber(d)?parseFloat(d)-1:d+" - 1";if("GET"==b)return[a+"["+d+"]",Blockly.gijack.ORDER_MEMBER];if("GET_REMOVE"==b)return[a+".splice("+d+", 1)[0]",Blockly.gijack.ORDER_FUNCTION_CALL];if("REMOVE"==b)return a+".splice("+d+", 1);\n"}else if("FROM_END"==c){if("GET"==b)return[a+".slice(-"+d+")[0]",Blockly.gijack.ORDER_FUNCTION_CALL];if("GET_REMOVE"==
b||"REMOVE"==b){c=Blockly.gijack.provideFunction_("lists_remove_from_end",["function "+Blockly.gijack.FUNCTION_NAME_PLACEHOLDER_+"(list, x) {","  x = list.length - x;","  return list.splice(x, 1)[0];","}"]);d=c+"("+a+", "+d+")";if("GET_REMOVE"==b)return[d,Blockly.gijack.ORDER_FUNCTION_CALL];if("REMOVE"==b)return d+";\n"}}else if("RANDOM"==c){c=Blockly.gijack.provideFunction_("lists_get_random_item",["function "+Blockly.gijack.FUNCTION_NAME_PLACEHOLDER_+"(list, remove) {","  var x = Math.floor(Math.random() * list.length);",
"  if (remove) {","    return list.splice(x, 1)[0];","  } else {","    return list[x];","  }","}"]);d=c+"("+a+", "+("GET"!=b)+")";if("GET"==b||"GET_REMOVE"==b)return[d,Blockly.gijack.ORDER_FUNCTION_CALL];if("REMOVE"==b)return d+";\n"}throw"Unhandled combination (lists_getIndex).";};
Blockly.gijack.lists_setIndex=function(a){function b(){if(c.match(/^\w+$/))return"";var a=Blockly.gijack.variableDB_.getDistinctName("tmp_list",Blockly.Variables.NAME_TYPE),b="var "+a+" = "+c+";\n";c=a;return b}var c=Blockly.gijack.valueToCode(a,"LIST",Blockly.gijack.ORDER_MEMBER)||"[]",d=a.getFieldValue("MODE")||"GET",e=a.getFieldValue("WHERE")||"FROM_START",f=Blockly.gijack.valueToCode(a,"AT",Blockly.gijack.ORDER_NONE)||"1";a=Blockly.gijack.valueToCode(a,"TO",Blockly.gijack.ORDER_ASSIGNMENT)||"null";
if("FIRST"==e){if("SET"==d)return c+"[0] = "+a+";\n";if("INSERT"==d)return c+".unshift("+a+");\n"}else if("LAST"==e){if("SET"==d)return e=b(),e+(c+"["+c+".length - 1] = "+a+";\n");if("INSERT"==d)return c+".push("+a+");\n"}else if("FROM_START"==e){f=Blockly.isNumber(f)?parseFloat(f)-1:f+" - 1";if("SET"==d)return c+"["+f+"] = "+a+";\n";if("INSERT"==d)return c+".splice("+f+", 0, "+a+");\n"}else if("FROM_END"==e){e=b();if("SET"==d)return e+=c+"["+c+".length - "+f+"] = "+a+";\n";if("INSERT"==d)return e+=
c+".splice("+c+".length - "+f+", 0, "+a+");\n"}else if("RANDOM"==e){e=b();f=Blockly.gijack.variableDB_.getDistinctName("tmp_x",Blockly.Variables.NAME_TYPE);e+="var "+f+" = Math.floor(Math.random() * "+c+".length);\n";if("SET"==d)return e+=c+"["+f+"] = "+a+";\n";if("INSERT"==d)return e+=c+".splice("+f+", 0, "+a+");\n"}throw"Unhandled combination (lists_setIndex).";};
Blockly.gijack.lists_getSublist=function(a){var b=Blockly.gijack.valueToCode(a,"LIST",Blockly.gijack.ORDER_MEMBER)||"[]",c=a.getFieldValue("WHERE1"),d=a.getFieldValue("WHERE2"),e=Blockly.gijack.valueToCode(a,"AT1",Blockly.gijack.ORDER_NONE)||"1";a=Blockly.gijack.valueToCode(a,"AT2",Blockly.gijack.ORDER_NONE)||"1";return["FIRST"==c&&"LAST"==d?b+".concat()":Blockly.gijack.provideFunction_("lists_get_sublist",["function "+Blockly.gijack.FUNCTION_NAME_PLACEHOLDER_+"(list, where1, at1, where2, at2) {",
"  function getAt(where, at) {","    if (where == 'FROM_START') {","      at--;","    } else if (where == 'FROM_END') {","      at = list.length - at;","    } else if (where == 'FIRST') {","      at = 0;","    } else if (where == 'LAST') {","      at = list.length - 1;","    } else {","      throw 'Unhandled option (lists_getSublist).';","    }","    return at;","  }","  at1 = getAt(where1, at1);","  at2 = getAt(where2, at2) + 1;","  return list.slice(at1, at2);","}"])+"("+b+", '"+c+"', "+e+", '"+
d+"', "+a+")",Blockly.gijack.ORDER_FUNCTION_CALL]};Blockly.gijack.lists_split=function(a){var b=Blockly.gijack.valueToCode(a,"INPUT",Blockly.gijack.ORDER_MEMBER),c=Blockly.gijack.valueToCode(a,"DELIM",Blockly.gijack.ORDER_NONE)||"''";a=a.getFieldValue("MODE");if("SPLIT"==a)b||(b="''"),a="split";else if("JOIN"==a)b||(b="[]"),a="join";else throw"Unknown mode: "+a;return[b+"."+a+"("+c+")",Blockly.gijack.ORDER_FUNCTION_CALL]};
Blockly.gijack.lists_create=function(a){var b=a.getFieldValue("type"),c=a.getFieldValue("ListName");a=a.getFieldValue("ListSize");return b+" "+c+" ["+a+"];\n"};Blockly.gijack.lists_assign=function(a){var b=a.getFieldValue("listname");Blockly.gijack.valueToCode(a,"value",Blockly.gijack.ORDER_ATOMIC);var c=Blockly.gijack.valueToCode(a,"value",Blockly.gijack.ORDER_ASSIGNMENT)||"NULL",d=Blockly.gijack.statementToCode(a,"expression"),d=Blockly.gijack.addLoopTrap(d,a.id);return b+" ["+d+"] = "+c+"\n"};
Blockly.gijack.lists_assign2=function(a){var b=a.getFieldValue("listname");Blockly.gijack.valueToCode(a,"value",Blockly.gijack.ORDER_ATOMIC);var c=Blockly.gijack.valueToCode(a,"value",Blockly.gijack.ORDER_ASSIGNMENT)||"NULL";Blockly.gijack.valueToCode(a,"expression",Blockly.gijack.ORDER_ATOMIC);a=Blockly.gijack.valueToCode(a,"expression",Blockly.gijack.ORDER_ASSIGNMENT)||"NULL";return b+" ["+a+"] = "+c+"\n"};Blockly.gijack.variables={};Blockly.gijack.declare_var=function(a){var b=Blockly.gijack.valueToCode(a,"variables",Blockly.gijack.ORDER_ASSIGNMENT)||"NULL",c=a.getFieldValue("varType"),d=a.getFieldValue("NAME");Blockly.gijack.valueToCode(a,"variables",Blockly.gijack.ORDER_ATOMIC);return c+" "+d+" = "+b+";\n"};Blockly.gijack.use_var=function(a){return[a.getFieldValue("var"),Blockly.gijack.ORDER_NONE]};
Blockly.gijack.assign_var=function(a){var b=Blockly.gijack.valueToCode(a,"assign",Blockly.gijack.ORDER_ASSIGNMENT)||"NULL",c=a.getFieldValue("var");Blockly.gijack.valueToCode(a,"assign",Blockly.gijack.ORDER_ATOMIC);return c+" = "+b+";\n"};Blockly.gijack.varis_item=function(a){return a.getFieldValue("item")};Blockly.gijack.var_dec=function(a){var b=a.getFieldValue("opcion");a=a.getFieldValue("variable");return b+" "+a+";\n"};Blockly.gijack.texts={};Blockly.gijack.text=function(a){return['"'+a.getFieldValue("TEXT")+'"',Blockly.gijack.ORDER_ATOMIC]};
Blockly.gijack.text_join=function(a){var b;if(0==a.itemCount_)return["''",Blockly.gijack.ORDER_ATOMIC];if(1==a.itemCount_)return b=Blockly.gijack.valueToCode(a,"ADD0",Blockly.gijack.ORDER_NONE)||"''",["String("+b+")",Blockly.gijack.ORDER_FUNCTION_CALL];if(2==a.itemCount_)return b=Blockly.gijack.valueToCode(a,"ADD0",Blockly.gijack.ORDER_NONE)||"''",a=Blockly.gijack.valueToCode(a,"ADD1",Blockly.gijack.ORDER_NONE)||"''",["String("+b+") + String("+a+")",Blockly.gijack.ORDER_ADDITION];b=Array(a.itemCount_);
for(var c=0;c<a.itemCount_;c++)b[c]=Blockly.gijack.valueToCode(a,"ADD"+c,Blockly.gijack.ORDER_COMMA)||"''";b="["+b.join(",")+"].join('')";return[b,Blockly.gijack.ORDER_FUNCTION_CALL]};Blockly.gijack.text_append=function(a){var b=Blockly.gijack.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE);a=Blockly.gijack.valueToCode(a,"TEXT",Blockly.gijack.ORDER_NONE)||"''";return b+" = String("+b+") + String("+a+");\n"};
Blockly.gijack.text_length=function(a){return[(Blockly.gijack.valueToCode(a,"VALUE",Blockly.gijack.ORDER_FUNCTION_CALL)||"''")+".length",Blockly.gijack.ORDER_MEMBER]};Blockly.gijack.text_isEmpty=function(a){return["!"+(Blockly.gijack.valueToCode(a,"VALUE",Blockly.gijack.ORDER_MEMBER)||"''")+".length",Blockly.gijack.ORDER_LOGICAL_NOT]};
Blockly.gijack.text_indexOf=function(a){var b="FIRST"==a.getFieldValue("END")?"indexOf":"lastIndexOf",c=Blockly.gijack.valueToCode(a,"FIND",Blockly.gijack.ORDER_NONE)||"''";return[(Blockly.gijack.valueToCode(a,"VALUE",Blockly.gijack.ORDER_MEMBER)||"''")+"."+b+"("+c+") + 1",Blockly.gijack.ORDER_MEMBER]};
Blockly.gijack.text_charAt=function(a){var b=a.getFieldValue("WHERE")||"FROM_START",c=Blockly.gijack.valueToCode(a,"AT",Blockly.gijack.ORDER_UNARY_NEGATION)||"1";a=Blockly.gijack.valueToCode(a,"VALUE",Blockly.gijack.ORDER_MEMBER)||"''";switch(b){case "FIRST":return[a+".charAt(0)",Blockly.gijack.ORDER_FUNCTION_CALL];case "LAST":return[a+".slice(-1)",Blockly.gijack.ORDER_FUNCTION_CALL];case "FROM_START":return c=Blockly.isNumber(c)?parseFloat(c)-1:c+" - 1",[a+".charAt("+c+")",Blockly.gijack.ORDER_FUNCTION_CALL];
case "FROM_END":return[a+".slice(-"+c+").charAt(0)",Blockly.gijack.ORDER_FUNCTION_CALL];case "RANDOM":return[Blockly.gijack.provideFunction_("text_random_letter",["function "+Blockly.gijack.FUNCTION_NAME_PLACEHOLDER_+"(text) {","  var x = Math.floor(Math.random() * text.length);","  return text[x];","}"])+"("+a+")",Blockly.gijack.ORDER_FUNCTION_CALL]}throw"Unhandled option (text_charAt).";};
Blockly.gijack.text_getSubstring=function(a){var b=Blockly.gijack.valueToCode(a,"STRING",Blockly.gijack.ORDER_MEMBER)||"''",c=a.getFieldValue("WHERE1"),d=a.getFieldValue("WHERE2"),e=Blockly.gijack.valueToCode(a,"AT1",Blockly.gijack.ORDER_NONE)||"1";a=Blockly.gijack.valueToCode(a,"AT2",Blockly.gijack.ORDER_NONE)||"1";return["FIRST"==c&&"LAST"==d?b:Blockly.gijack.provideFunction_("text_get_substring",["function "+Blockly.gijack.FUNCTION_NAME_PLACEHOLDER_+"(text, where1, at1, where2, at2) {","  function getAt(where, at) {",
"    if (where == 'FROM_START') {","      at--;","    } else if (where == 'FROM_END') {","      at = text.length - at;","    } else if (where == 'FIRST') {","      at = 0;","    } else if (where == 'LAST') {","      at = text.length - 1;","    } else {","      throw 'Unhandled option (text_getSubstring).';","    }","    return at;","  }","  at1 = getAt(where1, at1);","  at2 = getAt(where2, at2) + 1;","  return text.slice(at1, at2);","}"])+"("+b+", '"+c+"', "+e+", '"+d+"', "+a+")",Blockly.gijack.ORDER_FUNCTION_CALL]};
Blockly.gijack.text_changeCase=function(a){var b={UPPERCASE:".toUpperCase()",LOWERCASE:".toLowerCase()",TITLECASE:null}[a.getFieldValue("CASE")];b?(a=Blockly.gijack.valueToCode(a,"TEXT",Blockly.gijack.ORDER_MEMBER)||"''",a+=b):(b=Blockly.gijack.provideFunction_("text_toTitleCase",["function "+Blockly.gijack.FUNCTION_NAME_PLACEHOLDER_+"(str) {","  return str.replace(/\\S+/g,","      function(txt) {return txt[0].toUpperCase() + txt.substring(1).toLowerCase();});","}"]),a=Blockly.gijack.valueToCode(a,
"TEXT",Blockly.gijack.ORDER_NONE)||"''",a=b+"("+a+")");return[a,Blockly.gijack.ORDER_FUNCTION_CALL]};Blockly.gijack.text_trim=function(a){var b={LEFT:".replace(/^[\\s\\xa0]+/, '')",RIGHT:".replace(/[\\s\\xa0]+$/, '')",BOTH:".trim()"}[a.getFieldValue("MODE")];return[(Blockly.gijack.valueToCode(a,"TEXT",Blockly.gijack.ORDER_MEMBER)||"''")+b,Blockly.gijack.ORDER_FUNCTION_CALL]};
Blockly.gijack.text_print=function(a){return"print("+(Blockly.gijack.valueToCode(a,"TEXT",Blockly.gijack.ORDER_NONE)||"''")+");\n"};Blockly.gijack.text_prompt_ext=function(a){var b="window.prompt("+(a.getField("TEXT")?Blockly.gijack.quote_(a.getFieldValue("TEXT")):Blockly.gijack.valueToCode(a,"TEXT",Blockly.gijack.ORDER_NONE)||"''")+")";"NUMBER"==a.getFieldValue("TYPE")&&(b="parseFloat("+b+")");return[b,Blockly.gijack.ORDER_FUNCTION_CALL]};Blockly.gijack.text_prompt=Blockly.gijack.text_prompt_ext;
Blockly.gijack.procedures_input=function(a){var b=Blockly.gijack.valueToCode(a,"read",Blockly.gijack.ORDER_ATOMIC);a=Blockly.gijack.valueToCode(a,"NAME",Blockly.gijack.ORDER_ATOMIC);return'""'==b||""==b?"read("+a+");":"read("+b+","+a+");"};