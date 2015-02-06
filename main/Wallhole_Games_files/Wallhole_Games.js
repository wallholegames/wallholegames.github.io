// Created by iWeb 3.0.1 local-build-20100130
//
//  iWeb - iWebHitCounter.js
//  Copyright (c) 2007-2008 Apple Inc. All rights reserved.
//

function iWebWriteCounter()
{try
{writeCounter();}
catch(e)
{}}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return true;}
function onPageLoad()
{loadMozillaCSS('Wallhole_Games_files/Wallhole_GamesMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');detectBrowser();fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();iWebWriteCounter();performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
