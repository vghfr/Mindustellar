// if you're going to copy/borrow code, at least change the variable names, this is ridiculous.

const eutisGen = require("extras/eutisGen")
const eutis = extend(Planet, "eutis", Planets.sun, 3, 1.45, {
    generator: eutisGen.eutis,
    bloom: true,
    radius: 1,
    accessible: true,
    hasAtmosphere: true,
    atmosphereColor: Color.valueOf("80ff00"),
    atmosphereRadIn: 0.06,
    atmosphereRadOut: 0.09,
    localizedName: "Eutis"
});
eutis.meshLoader = () => extend(HexMesh, eutis, 6, {});

/* comment this one for reference.
const unfamilierHospitality = extend(SectorPreset, "unfamilier-hospitality", templura, 95, {
    description: "Three friends lie untouched. Two abandoned. One native. Traped, within the compound. Relive their legacy.",
    localizedName: "Unfamilier Hospitality",
    difficulty: 0,
    alwaysUnlocked: true
});
*/

module.exports = {
    eutis: eutis
    //unfamilierHospitality: unfamilierHospitality
};
