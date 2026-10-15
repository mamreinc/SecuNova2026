const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle2' });

  // 1. Hero
  const heroEl = await page.$('#overview');
  if (heroEl) {
    await heroEl.screenshot({
      path: '/Users/maxamrein/.gemini/antigravity-ide/brain/1fbf9ca5-1fcb-4fd3-8c8a-baec9ca1d0a1/.tempmediaStorage/apple_sec_01_hero.png',
    });
  }

  // 2. Benchmarks
  const benchmarksEl = await page.$('#benchmarks');
  if (benchmarksEl) {
    await benchmarksEl.scrollIntoView();
    await new Promise(r => setTimeout(r, 600));
    await benchmarksEl.screenshot({
      path: '/Users/maxamrein/.gemini/antigravity-ide/brain/1fbf9ca5-1fcb-4fd3-8c8a-baec9ca1d0a1/.tempmediaStorage/apple_sec_02_benchmarks.png',
    });
  }

  // 3. Clarity
  const clarityEl = await page.$('#clarity');
  if (clarityEl) {
    await clarityEl.scrollIntoView();
    await new Promise(r => setTimeout(r, 600));
    await clarityEl.screenshot({
      path: '/Users/maxamrein/.gemini/antigravity-ide/brain/1fbf9ca5-1fcb-4fd3-8c8a-baec9ca1d0a1/.tempmediaStorage/apple_sec_03_display.png',
    });
  }

  // 4. Services (The 5 Practices)
  const servicesEl = await page.$('#services');
  if (servicesEl) {
    await servicesEl.scrollIntoView();
    await new Promise(r => setTimeout(r, 600));
    await servicesEl.screenshot({
      path: '/Users/maxamrein/.gemini/antigravity-ide/brain/1fbf9ca5-1fcb-4fd3-8c8a-baec9ca1d0a1/.tempmediaStorage/apple_sec_04_engines.png',
    });
  }

  // 5. Governance
  const govEl = await page.$('#governance');
  if (govEl) {
    await govEl.scrollIntoView();
    await new Promise(r => setTimeout(r, 600));
    await govEl.screenshot({
      path: '/Users/maxamrein/.gemini/antigravity-ide/brain/1fbf9ca5-1fcb-4fd3-8c8a-baec9ca1d0a1/.tempmediaStorage/apple_sec_05_battery.png',
    });
  }

  // 6. Integrations
  const portsEl = await page.$('#integrations');
  if (portsEl) {
    await portsEl.scrollIntoView();
    await new Promise(r => setTimeout(r, 600));
    await portsEl.screenshot({
      path: '/Users/maxamrein/.gemini/antigravity-ide/brain/1fbf9ca5-1fcb-4fd3-8c8a-baec9ca1d0a1/.tempmediaStorage/apple_sec_06_ports.png',
    });
  }

  // 7. Case Studies
  const caseEl = await page.$('#case-studies');
  if (caseEl) {
    await caseEl.scrollIntoView();
    await new Promise(r => setTimeout(r, 600));
    await caseEl.screenshot({
      path: '/Users/maxamrein/.gemini/antigravity-ide/brain/1fbf9ca5-1fcb-4fd3-8c8a-baec9ca1d0a1/.tempmediaStorage/apple_sec_07_audio.png',
    });
  }

  // 8. Consultation Terminal
  const consultEl = await page.$('#consultation');
  if (consultEl) {
    await consultEl.scrollIntoView();
    await new Promise(r => setTimeout(r, 600));
    await consultEl.screenshot({
      path: '/Users/maxamrein/.gemini/antigravity-ide/brain/1fbf9ca5-1fcb-4fd3-8c8a-baec9ca1d0a1/.tempmediaStorage/apple_sec_08_consult.png',
    });
  }

  await browser.close();
  console.log('All Apple section screenshots captured successfully.');
})();
