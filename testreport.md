Render blocking requests Est savings of 170 ms
Requests are blocking the page's initial render, which may delay LCP. Deferring or inlining can move these network requests out of the critical path.LCPFCPUnscored
URL
Transfer Size
Duration
vercel.app 1st party
8.6 KiB 170 ms
/assets/index-CX8NrZ_Y.css(talib-portfolio-kappa.vercel.app)
8.6 KiB
170 ms

---

Forced reflow
A forced reflow occurs when JavaScript queries geometric properties (such as offsetWidth) after styles have been invalidated by a change to the DOM state. This can result in poor performance. Learn more about forced reflows and possible mitigations.Unscored
Top function call
Total reflow time
/assets/index-DsU9mNDo.js:27:1991(talib-portfolio-kappa.vercel.app)
74 ms
Source
Total reflow time
[unattributed]
63 ms
/assets/Showreel-NPfMdBy6.js:31:1551(talib-portfolio-kappa.vercel.app)
74 ms
/assets/OverviewS….js:16:4411(talib-portfolio-kappa.vercel.app)
1 ms

---

Network dependency tree
Avoid chaining critical requests by reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load.LCPUnscored
Maximum critical path latency: 973 ms
Initial Navigation
https://talib-portfolio-kappa.vercel.app - 88 ms, 2.60 KiB
/assets/index-DsU9mNDo.js(talib-portfolio-kappa.vercel.app) - 257 ms, 301.78 KiB
/assets/Showreel-NPfMdBy6.js(talib-portfolio-kappa.vercel.app) - 942 ms, 4.71 KiB
/assets/proxy-gsOEfeIF.js(talib-portfolio-kappa.vercel.app) - 671 ms, 42.94 KiB
/assets/play-YCJ9ZMgy.js(talib-portfolio-kappa.vercel.app) - 702 ms, 0.83 KiB
/assets/zap-DT4eOdnD.js(talib-portfolio-kappa.vercel.app) - 681 ms, 0.96 KiB
/assets/Showreel-NnvjWIFj.css(talib-portfolio-kappa.vercel.app) - 973 ms, 3.33 KiB
/assets/ServicesB….js(talib-portfolio-kappa.vercel.app) - 679 ms, 4.58 KiB
/assets/smartphon….js(talib-portfolio-kappa.vercel.app) - 916 ms, 0.90 KiB
/assets/ServicesB….css(talib-portfolio-kappa.vercel.app) - 454 ms, 4.93 KiB
/assets/StepCompoenntTwo-DjQuXPcV.js(talib-portfolio-kappa.vercel.app) - 740 ms, 2.52 KiB
/assets/StepCompoenntTwo-BcuYVKwL.css(talib-portfolio-kappa.vercel.app) - 949 ms, 1.84 KiB
/assets/FrammerMarquee-DK-TwLCw.js(talib-portfolio-kappa.vercel.app) - 913 ms, 1.22 KiB
/assets/FrammerMa….css(talib-portfolio-kappa.vercel.app) - 675 ms, 1.53 KiB
/assets/ReviewCar….js(talib-portfolio-kappa.vercel.app) - 657 ms, 3.44 KiB
/assets/ReviewCarousel-DSDyq_dY.css(talib-portfolio-kappa.vercel.app) - 676 ms, 1.90 KiB
/assets/ExtendedC….js(talib-portfolio-kappa.vercel.app) - 914 ms, 3.36 KiB
/assets/sparkles-rlKwwgNZ.js(talib-portfolio-kappa.vercel.app) - 470 ms, 1.20 KiB
/assets/AboutSect….js(talib-portfolio-kappa.vercel.app) - 912 ms, 2.85 KiB
/assets/AboutSect….css(talib-portfolio-kappa.vercel.app) - 677 ms, 2.81 KiB
/assets/OverviewS….js(talib-portfolio-kappa.vercel.app) - 457 ms, 3.81 KiB
/assets/OverviewSection-DejhdGvy.css(talib-portfolio-kappa.vercel.app) - 701 ms, 2.60 KiB
/assets/CallToAct….js(talib-portfolio-kappa.vercel.app) - 680 ms, 1.57 KiB
/assets/CallToAct….css(talib-portfolio-kappa.vercel.app) - 676 ms, 2.00 KiB
/assets/Footer-BPHhoZgi.js(talib-portfolio-kappa.vercel.app) - 680 ms, 3.00 KiB
/assets/Footer-DnnKb8iU.css(talib-portfolio-kappa.vercel.app) - 911 ms, 2.32 KiB
/assets/index-CX8NrZ_Y.css(talib-portfolio-kappa.vercel.app) - 134 ms, 8.58 KiB
Preconnected origins
preconnect hints help the browser establish a connection earlier in the page load, saving time when the first request for that origin is made. The following are the origins that the page preconnected to.
Origin
Source
https://i.pravatar.cc/
preconnect

<link rel="preconnect" aria-label="preconnect" href="https://i.pravatar.cc">
Unused preconnect. Check that the crossorigin attribute is used properly.
https://fonts.googleapis.com/
head > link
<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin="">
https://fonts.gstatic.com/
head > link
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
Preconnect candidates
Add preconnect hints to your most important origins, but try to use no more than 4.
Origin
Est LCP savings
https://i.pravatar.cc
310 ms

---

Reduce unused JavaScript Est savings of 216 KiB
Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. Learn how to reduce unused JavaScript.LCPFCPUnscored
URL
Transfer Size
Est Savings
vercel.app 1st party
301.1 KiB 216.4 KiB
/assets/index-DsU9mNDo.js(talib-portfolio-kappa.vercel.app)
301.1 KiB
216.4 KiB
