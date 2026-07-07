import { chromium } from 'playwright';

const OUT = process.argv[2];
const BASE = 'http://localhost:4322';
const routes = [
  ['home', '/'],
  ['collection', '/collection'],
  ['artists', '/artists'],
  ['artist-susana', '/artists/wayan-gede-susana'],
  ['artist-gee', '/artists/fauziah-gee-yahaya'],
  ['preview', '/preview'],
  ['designers', '/designers'],
  ['about', '/about'],
  ['buying', '/how-buying-works'],
  ['privacy', '/privacy'],
];
const viewports = [
  ['mobile', { width: 390, height: 844 }],
  ['desktop', { width: 1440, height: 900 }],
];

const browser = await chromium.launch();
for (const [vpName, vp] of viewports) {
  const page = await browser.newPage({ viewport: vp });
  for (const [name, path] of routes) {
    await page.goto(BASE + path, { waitUntil: 'networkidle' });
    await page.screenshot({ path: `${OUT}/${name}-${vpName}.png`, fullPage: true });
    console.log(`${name}-${vpName}.png`);
  }
  await page.close();
}
await browser.close();
