if(!window.jsMath)window.jsMath={};jsMath.Easy={root:"",scale:120,autoload:1,processSlashParens:0,processSlashBrackets:0,processDoubleDollars:1,processSingleDollars:0,processLaTeXenvironments:0,fixEscapedDollars:0,doubleDollarsAreInLine:0,allowDisableTag:0,safeHBoxes:1,allowDoubleClicks:0,showFontWarnings:1,method:"ProcessBeforeShowing",loadFiles:[],loadFonts:[],macros:{},allowGlobal:0,noImageFonts:1};jsMath.styles={"#jsMath_button":{display:"none"},"#jsMath_message":{display:"none"}};
if(jsMath.Easy.root==""){jsMath.Easy.root=document.getElementsByTagName("script");jsMath.Easy.root=jsMath.Easy.root[jsMath.Easy.root.length-1].src;jsMath.Easy.root=jsMath.Easy.root.match(/\/easy\/[^\/]*$/)?jsMath.Easy.root.replace(/\/easy\/[^\/]*$/,""):jsMath.Easy.root.replace(/\/(jsMath\/(easy\/)?)?[^\/]*$/,"/jsMath")}jsMath.Easy.root=jsMath.Easy.root.replace(/\/$/,"");document.write('<SCRIPT SRC="'+jsMath.Easy.root+'/jsMath-easy-load.js"><\/SCRIPT>');