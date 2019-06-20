const archtypePath = 'Magic Effect Data\\DATA\\Archtype';

const getRefEditorID = function(element, path) {
  const ref = xelib.GetLinksTo(element, path);
  if (!ref) return '';
  return xelib.EditorID(ref);
};

const getSummonCreatureEffect = function(record) {
  const effects = xelib.GetElements(record, 'Effects');
  return effects.find(effect => {
    const baseEffect = xelib.GetLinksTo(effect, 'EFID');
    const archtype = xelib.GetValue(baseEffect, archtypePath);
    return archtype === 'Summon Creature';
  });
};

module.exports = {getRefEditorID, getSummonCreatureEffect};
