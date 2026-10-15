const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });
  
  // 1. Hero
  await page.screenshot({ path: '/Users/maxamrein/.gemini/antigravity-ide/brain/1fbf9ca5-1fcb-4fd3-8c8a-baec9ca1d0a1/.tempmediaStorage/apple_onepage_hero.png' });

  // 2. Services Section
  await page.evaluate(() => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: '/Users/maxamrein/.gemini/antigravity-ide/brain/1fbf9ca5-1fcb-4fd3-8c8a-baec9ca1d0a1/.tempmediaStorage/apple_onepage_services.png' });

  // 3. Clarity & Benchmarks
  await page.evaluate(() => {
    const el = document.getElementById('clarity');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: '/Users/maxamrein/.gemini/antigravity-ide/brain/1fbf9ca5-1fcb-4fd3-8c8a-baec9ca1d0a1/.tempmediaStorage/apple_onepage_clarity.png' });

  // 4. Consultation Terminal
  await page.evaluate(() => {
    const el = document.getElementById('consultation');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: '/Users/maxamrein/.gemini/antigravity-ide/brain/1fbf9ca5-1fcb-4fd3-8c8a-baec9ca1d0a1/.tempmediaStorage/apple_onepage_consultation.png' });

  await browser.close();
  console.log('Single page screenshots captured successfully!');
})();
