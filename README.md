# FactoryVerse — The Living Factory

**Meta VR Start 2026 competition prototype**: a hands-first miniature factory recovery experience. Built fresh during the 2026 competition period; fictional factory data only.

## What works today

- Desktop-playable isometric factory scene. Click a worker or their roster card, then click the red offline station.
- Three successive missions with qualification-based safety gates, throughput recovery, retry penalties, and an event log.
- Experimental browser-based immersive scene with Three.js WebXR hand tracking: **pinch worker orb → pinch disrupted machine**. When immersive XR is unsupported, an orbitable 3D desktop preview with mouse picking is available.
- Seven deterministic unit tests; no third-party account, API key, or backend required for desktop play.

**Important:** Desktop click controls are an accessibility/development fallback; they do not satisfy the competition's hands-first criterion on their own. The XR code needs actual simulator runtime testing, and the current proof-of-concept is **not yet a production-ready Meta Quest competition submission**. The XR scene uses Three.js rather than Meta's IWSDK; migrating or integrating official Meta hand interaction tooling is a follow-on task.

## Quick start

Requirements: Python 3.9+ and Node.js 20+ for tests. No npm install needed.

```bash
npm test
npm run check
npm run dev
```

Open **http://localhost:4173**. The main playable mode works offline after initial load. XR preview loads pinned Three.js ESM modules from `esm.sh` and needs internet, a compatible browser, and for immersive mode a WebXR runtime with hand-tracking support.

## Project structure

```
index.html              Desktop game and XR overlay
styles.css              Responsive interface
src/simulation.js       Deterministic workforce eligibility, mission logic
src/desktop.js          Canvas factory renderer and interaction
src/xr.js               Experimental WebXR hands pinch + desktop 3D preview
tests/simulation.test.mjs
```

## XR simulator workflow (without headset)

1. Use a Chromium-based browser and enable a compatible WebXR emulation extension/runtime (for example Immersive Web Emulator); these tools vary in their support for emulated articulated hand joints.
2. Run the local app on localhost (secure context), click **Enter XR**.
3. First verify **desktop 3D mode**: orbit camera and click the blue worker orb and red packaging station.
4. If `immersive-vr` is supported, click **START IMMERSIVE VR** and test joint-based thumb/index pinch. Verify joint data actually exists; absence means the simulator cannot test hands-first interaction.
5. Log a screen capture of each test; never claim headset performance or successful real-world tracking without testing.

## Competition build priorities

- Week 1: validate simulator hands (or acquire brief device testing), polish pinch affordance and interaction feedback, add comfortable spatial UI.
- Week 2: animation/audio/accessible guidance, automated smoke tests, honest gameplay video captured in simulator, hosted HTTPS build, and Devpost paperwork.

## Responsible boundaries

This is a training/strategy simulation only. It contains fictional people, synthetic data, no actual certification checks, no real robot controls, and no external manufacturing-system integrations. Any worker assignment logic is game logic, not an industrial safety certification system.
