import test from 'node:test';import assert from 'node:assert/strict';import{createGame,assign,eligible,getWorker,getStation,nextGame,MISSIONS}from'../src/simulation.js';
test('starts disrupted',()=>{const g=createGame();assert.equal(g.phase,'active');assert.equal(g.throughput,58)});
test('blocks unqualified',()=>{const g=assign(createGame(),'leo','pack');assert.equal(g.phase,'active');assert.match(g.message,/not qualified/)});
test('blocks wrong destination',()=>{const g=assign(createGame(),'maya','cut');assert.equal(g.phase,'active')});
test('valid dispatch restores throughput',()=>{const g=assign(createGame(),'maya','pack');assert.equal(g.phase,'won');assert.equal(g.throughput,100)});
test('attempts impact score',()=>{const g=assign(assign(createGame(),'leo','pack'),'maya','pack');assert.equal(g.score,85)});
test('next wraps',()=>{let g=createGame();for(let i=0;i<MISSIONS.length;i++)g=nextGame(g);assert.equal(g.index,0)});
test('eligibility uses skills',()=>{assert.equal(eligible(getWorker('leo'),getStation('cut')),true);assert.equal(eligible(getWorker('sam'),getStation('pack')),false)});
