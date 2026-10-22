const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({headless:true, ...(process.env.BROWSER_EXECUTABLE ? {executablePath:process.env.BROWSER_EXECUTABLE,args:['--no-sandbox']} : {})}); const page=await browser.newPage();
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 const pages=['','work/mow-magic/','work/everfold/','work/runhouse/','work/design-system/','404.html'];
 for(const width of [360,390,768,1024,1440]){
  await page.setViewportSize({width,height:1000});
  for(const path of pages){await page.goto('http://127.0.0.1:8000/'+path);assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`Overflow ${width} ${path}`);}
 }
 await page.setViewportSize({width:1440,height:1050});await page.goto('http://127.0.0.1:8000/');
 for(const filter of ['operations','systems','design','all']){
  await page.locator(`[data-filter="${filter}"]`).click();
  assert.equal(await page.locator('.filters [aria-pressed=true]').count(),1);
  assert(await page.evaluate(f=>[...document.querySelectorAll('.project')].every(p=>p.hidden === (f!=='all'&&!p.dataset.tags.split(' ').includes(f))),filter));
 }
 await page.locator('[data-filter=operations]').focus();await page.keyboard.press('Enter');assert.equal(await page.locator('[data-filter=operations]').getAttribute('aria-pressed'),'true');
 await page.locator('[data-filter=all]').click();
 await page.locator('nav a').first().click();assert(page.url().endsWith('#work'));
 await page.goto('http://127.0.0.1:8000/');await page.evaluate(()=>document.fonts.ready);await page.waitForTimeout(700);await page.screenshot({path:'design/previews/platinum-desktop.png'});
 // Trigger scroll reveals before full-page capture.
 await page.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=700){scrollTo(0,y);await new Promise(r=>setTimeout(r,80))}scrollTo(0,0)});await page.waitForTimeout(700);
 await page.screenshot({path:'design/previews/platinum-full.png',fullPage:true});
 await page.setViewportSize({width:390,height:844});await page.goto('http://127.0.0.1:8000/');await page.evaluate(()=>document.fonts.ready);await page.waitForTimeout(700);await page.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=600){scrollTo(0,y);await new Promise(r=>setTimeout(r,80))}scrollTo(0,0)});await page.waitForTimeout(700);await page.screenshot({path:'design/previews/platinum-mobile.png',fullPage:true});
 await page.goto('http://127.0.0.1:8000/work/mow-magic/');await page.screenshot({path:'design/previews/platinum-case-study.png',fullPage:true});
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto('http://127.0.0.1:8000/');assert.equal(await page.locator('.reveal-ready').count(),0);
 const nojs=await browser.newContext({javaScriptEnabled:false});const fallback=await nojs.newPage();await fallback.goto('http://127.0.0.1:8000/');assert.equal(await fallback.locator('.project:visible').count(),4);assert.equal(await fallback.locator('.filters:visible').count(),0);
 assert.deepEqual(errors,[]);await browser.close();console.log('PASS: six pages × five widths; all filters; keyboard activation; navigation; reduced motion; no-JS fallback; no browser errors.');
})();
