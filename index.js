/* global ngapp, xelib, patcherPath */
const SpellAbsorbPatcher = require(`${patcherPath}/src/SpellAbsorbPatcher.js`);

registerPatcher({
    info: info,
    gameModes: [xelib.gmTES5, xelib.gmSSE],
    settings: {
        label: 'Spell absorb fix',
        hide: true
    },
    execute: (patchFile, helpers) => ({
        process: [
            new SpellAbsorbPatcher(helpers)
        ],
    })
});
