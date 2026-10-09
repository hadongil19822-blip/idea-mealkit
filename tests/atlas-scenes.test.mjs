import { test } from 'node:test';
import assert from 'node:assert/strict';
import { atlasScenes, atlasDuration, atlasStops, selectAtlasScene } from '../components/gallery/atlas-scenes.ts';

test('every navigation anchor lands on its complete scene from either direction', () => {
  for (const [name, time] of Object.entries(atlasStops)) {
    const expected = atlasScenes.findIndex(scene => scene.name === name);
    assert.equal(selectAtlasScene(time / atlasDuration, 0), expected);
    assert.equal(selectAtlasScene(time / atlasDuration, atlasScenes.length - 1), expected);
  }
});

test('crossing a boundary selects a whole scene and small jitter cannot reverse it', () => {
  for (let i = 0; i < atlasScenes.length - 1; i++) {
    const middle = (atlasScenes[i].time + atlasScenes[i + 1].time) / 2;
    assert.equal(selectAtlasScene((middle + .1) / atlasDuration, i), i + 1);
    assert.equal(selectAtlasScene((middle - .03) / atlasDuration, i + 1), i + 1);
    assert.equal(selectAtlasScene((middle - .1) / atlasDuration, i + 1), i);
    assert.equal(selectAtlasScene((middle + .03) / atlasDuration, i), i);
  }
});

test('fast jumps and overscroll go directly to their destination without a queue', () => {
  assert.equal(selectAtlasScene(1, 0), atlasScenes.length - 1);
  assert.equal(selectAtlasScene(0, atlasScenes.length - 1), 0);
  assert.equal(selectAtlasScene(-.2, 6), 0);
  assert.equal(selectAtlasScene(1.2, 3), atlasScenes.length - 1);
});
