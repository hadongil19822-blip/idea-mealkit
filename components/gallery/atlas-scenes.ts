// Each stop is a fully assembled composition, after entrance and before exit.
export const atlasScenes = [
  { name: 'cover', time: 0 },
  { name: 'projects', time: 2.7 },
  { name: 'metalook', time: 5.7 },
  { name: 'form', time: 8 },
  { name: 'semapage', time: 10.3 },
  { name: 'flow', time: 12.5 },
  { name: 'hangulwave', time: 14.35 },
  { name: 'play', time: 16.65 },
  { name: 'cosmicspell', time: 18.55 },
  { name: 'connect', time: 20.95 },
  { name: 'brandeye', time: 22.75 },
  { name: 'finale', time: 25.2 },
] as const;

export const atlasDuration = atlasScenes.at(-1)!.time;
export const atlasStops: Record<string, number> = Object.fromEntries(
  atlasScenes.filter(scene => ['projects', 'metalook', 'semapage', 'hangulwave', 'cosmicspell', 'brandeye'].includes(scene.name))
    .map(scene => [scene.name, scene.time]),
);

/** Small dead band prevents trackpad jitter from repeatedly reversing a scene. */
export function selectAtlasScene(progress: number, current = 0) {
  const time = Math.max(0, Math.min(1, progress)) * atlasDuration;
  let next = current;
  const deadBand = .07;
  while (next < atlasScenes.length - 1 && time > (atlasScenes[next].time + atlasScenes[next + 1].time) / 2 + deadBand) next++;
  while (next > 0 && time < (atlasScenes[next - 1].time + atlasScenes[next].time) / 2 - deadBand) next--;
  return next;
}
