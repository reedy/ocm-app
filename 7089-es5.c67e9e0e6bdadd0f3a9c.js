!function(){"use strict";(self.webpackChunkio_openchargemap_app=self.webpackChunkio_openchargemap_app||[]).push([[7089],{7089:function(n,t,e){e.r(t),e.d(t,{startFocusVisible:function(){return i}});var o="ion-focused",c=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"],i=function(){var n=[],t=!0,e=document,i=function(t){n.forEach(function(n){return n.classList.remove(o)}),t.forEach(function(n){return n.classList.add(o)}),n=t},s=function(){t=!1,i([])};e.addEventListener("keydown",function(n){(t=c.includes(n.key))||i([])}),e.addEventListener("focusin",function(n){if(t&&n.composedPath){var e=n.composedPath().filter(function(n){return!!n.classList&&n.classList.contains("ion-focusable")});i(e)}}),e.addEventListener("focusout",function(){e.activeElement===e.body&&i([])}),e.addEventListener("touchstart",s),e.addEventListener("mousedown",s)}}}])}();