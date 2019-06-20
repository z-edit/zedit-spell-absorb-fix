/* global xelib */
const {getRefEditorID, getSummonCreatureEffect} = require('./helpers');

class SpellAbsorbPatcher {
    constructor(helpers) {
        this.logMessage = helpers.logMessage;
        this.load = this.load.bind(this);
        this.patch = this.patch.bind(this);
    }

    load() {
        return {
            signature: 'SPEL',
            filter: (record) => {
                // do not process records that don't have the icon used
                // for summoning spells, records that already have the flag,
                // or records that don't have a summon creature effect
                return getRefEditorID(record, 'MDOB') === 'MAGINVSummon' &&
                    !xelib.GetFlag(record, 'SPIT\\Flags', 'No Absorb/Reflect') &&
                    getSummonCreatureEffect(record);
            }
        };
    }

    patch(record) {
        this.logMessage(`Adding "absorb" to ${xelib.LongName(record)}`);
        xelib.SetFlag(record, 'SPIT - Data\\Flags', 'No Absorb/Reflect', true);
    }
}

module.exports = SpellAbsorbPatcher;
