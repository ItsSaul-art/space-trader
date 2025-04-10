// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000b0a0b0b010a0b0b0b0b0a0b0b0a0b0b0a02030303030303030303030303050b0a080c0c0c0c0c0c0c0c0c0c0c0c090a0a080c0c0c0c0c0c0c0c0c0c0c0c090a01080c0c0c0c0c0c0c0c0c0c0c0c09010a080c0c0c0c0c0c0c0c0c0c0c0c09010a080c0c0c0c0c0c0c0c0c0c0c0c090b0a080c0c0c0c0c0c0c0c0c0c0c0c090b0a080c0c0c0c0c0c0c0c0c0c0c0c090b01080c0c0c0c0c0c0c0c0c0c0c0c09010a080c0c0c0c0c0c0c0c0c0c0c0c090b01080c0c0c0c0c0c0c0c0c0c0c0c090a0a080c0c0c0c0c0c0c0c0c0c0c0c090a01080c0c0c0c0c0c0c0c0c0c0c0c090a0b06070707070707070707070707040b0b0b0b0b0b0b0b0b010a0b010a010b0b`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath9,sprites.castle.tilePath3,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tileGrass3,sprites.castle.tileGrass1,sprites.castle.tilePath5], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . 2 . . . . . 
. . . . . . . . . . 2 . . . . . 
. . . . . . . . . . 2 . . . . . 
. . . . . . . . . . 2 . . . . . 
. . . . . . . . . . 2 . . . . . 
. . . . . . . . . . 2 . . . . . 
. . . . . . . . . . 2 . . . . . 
. . . . . . . . . . 2 . . . . . 
2 2 2 2 2 2 2 2 2 2 2 . . . . . 
2 2 2 2 2 2 2 2 2 2 2 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100004030303030303030303030303030302050b0b0b0b0b0b0b0b0b0b0b0b0b0b01050b0c0b0c0b0c0c0c0b0b0b0b0c0b01050b0c0c0c0b0c0b0c0b0b0c0b0b0b01050b0b0b0b0c0b0b0b0d0e0e0c0b0b01050b0e0b0c0b0b0c0b0b0d0e0b0b0b01050e0d0b0b0b0b0b0b0b0b0b0c0c0b01050c0c0b0b0c0b0c0c0c0c0b0b0c0b01050b0b0b0d0b0b0b0b0b0b0b0b0c0b01050b0c0b0e0b0c0c0b0b0c0b0d0e0b01050b0c0b0b0b0b0b0b0b0c0b0c0c0b01050b0c0c0c0b0b0c0b0b0d0b0c0c0b01050b0c0b0e0d0b0b0b0b0b0b0c0b0b01050b0b0c0c0c0c0b0b0c0b0c0b0b0b01050b0b0b0b0b0b0b0b0c0b0b0b0c0b01060707070707090a0a09070707070708`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.stairSouth,sprites.dungeon.floorLight0,sprites.dungeon.floorLight1,sprites.dungeon.floorMixed,sprites.dungeon.floorDark1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "cursor":
            case "tile1":return tile1;
            case "myTile":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
