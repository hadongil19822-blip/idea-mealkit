import { test } from 'node:test';
import assert from 'node:assert/strict';
import { atlasScenes, atlasAnchors, selectAtlasScene } from '../components/gallery/atlas-scenes.ts';

test('every navigation anchor lands on its complete scene from either direction', () => {
  for (const [name, progress] of Object.entries(atlasAnchors)) {
    const expected = atlasScenes.findIndex(scene => scene.name === name);
    assert.equal(selectAtlasScene(progress, 0), expected);
    assert.equal(selectAtlasScene(progress, atlasScenes.length - 1), expected);
  }
});

test('crossing a boundary selects a whole scene and small jitter cannot reverse it', () => {
  for (let i = 0; i < atlasScenes.length - 1; i++) {
    const boundary = atlasScenes[i].end;
    assert.equal(selectAtlasScene(boundary + .005, i), i + 1);
    assert.equal(selectAtlasScene(boundary - .002, i + 1), i + 1);
    assert.equal(selectAtlasScene(boundary - .005, i + 1), i);
    assert.equal(selectAtlasScene(boundary + .002, i), i);
  }
});

test('project links leave a full viewport of reading room in both directions on desktop and mobile', () => {
  for (const scene of atlasScenes.filter(scene => scene.isProject)) {
    const index = atlasScenes.indexOf(scene);
    for (const scrollScreens of [16, 17]) {
      assert.equal(selectAtlasScene(scene.anchor + 1 / scrollScreens, index), index, `${scene.name}: down`);
      assert.equal(selectAtlasScene(scene.anchor - 1 / scrollScreens, index), index, `${scene.name}: up`);
      assert.ok((scene.end - scene.start) * scrollScreens > 2.3);
    }
  }
});

test('returning to MetaLook or BrandEye retains the full reading interval', () => {
  for (const name of ['metalook', 'brandeye']) {
    const index = atlasScenes.findIndex(scene => scene.name === name);
    const scene = atlasScenes[index];
    const reentry = scene.end - .005;
    assert.equal(selectAtlasScene(reentry, index + 1), index);
    assert.equal(selectAtlasScene(reentry - 1.5 / 16, index), index);
    assert.equal(selectAtlasScene(scene.anchor, index), index);
  }
});

test('fast jumps and overscroll go directly to their destination without a queue', () => {
  assert.equal(selectAtlasScene(1, 0), atlasScenes.length - 1);
  assert.equal(selectAtlasScene(0, atlasScenes.length - 1), 0);
  assert.equal(selectAtlasScene(-.2, 6), 0);
  assert.equal(selectAtlasScene(1.2, 3), atlasScenes.length - 1);
});
