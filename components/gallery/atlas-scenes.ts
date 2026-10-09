// Timeline time defines a complete pose. Scroll space is independent: give
// visitors room to read and click projects instead of allocating it to effects.
const compositions = [
  { name: 'cover', time: 0, scrollWeight: 1 },
  { name: 'projects', time: 2.7, scrollWeight: 1.4 },
  { name: 'metalook', time: 5.7, scrollWeight: 3.2 },
  { name: 'form', time: 8, scrollWeight: .6 },
  { name: 'semapage', time: 10.3, scrollWeight: 3.2 },
  { name: 'flow', time: 12.5, scrollWeight: .6 },
  { name: 'hangulwave', time: 14.35, scrollWeight: 3.2 },
  { name: 'play', time: 16.65, scrollWeight: .6 },
  { name: 'cosmicspell', time: 18.55, scrollWeight: 3.2 },
  { name: 'connect', time: 20.95, scrollWeight: .6 },
  { name: 'brandeye', time: 22.75, scrollWeight: 3.2 },
  { name: 'finale', time: 25.2, scrollWeight: .8 },
] as const;

const projectNames: readonly string[] = ['metalook', 'semapage', 'hangulwave', 'cosmicspell', 'brandeye'];
const totalWeight = compositions.reduce((sum, scene) => sum + scene.scrollWeight, 0);
let accumulatedWeight = 0;
export const atlasScenes = compositions.map(scene => {
  const start = accumulatedWeight / totalWeight;
  accumulatedWeight += scene.scrollWeight;
  const end = accumulatedWeight / totalWeight;
  return { ...scene, start, end, anchor: (start + end) / 2, isProject: projectNames.includes(scene.name) };
});
export const atlasDuration = atlasScenes.at(-1)!.time;
// Links land in the middle of the reading area, safely away from both exits.
export const atlasAnchors: Record<string, number> = Object.fromEntries(
  atlasScenes.filter(scene => scene.name === 'projects' || scene.isProject)
    .map(scene => [scene.name, scene.anchor]),
);

/** Small dead band prevents trackpad jitter from repeatedly reversing a scene. */
export function selectAtlasScene(progress: number, current = 0) {
  const position = Math.max(0, Math.min(1, progress));
  let next = current;
  const deadBand = .004;
  while (next < atlasScenes.length - 1 && position > atlasScenes[next].end + deadBand) next++;
  while (next > 0 && position < atlasScenes[next].start - deadBand) next--;
  return next;
}
